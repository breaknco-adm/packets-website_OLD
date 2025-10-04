"use server"

import { getSupabaseAdmin } from "@/lib/supabase"
import { revalidatePath } from "next/cache"

interface EarlyAccessFormData {
  name: string
  email: string
  taskCategory: string
  customTask?: string
}

interface ActionResult {
  success: boolean
  message: string
  error?: string
}

export async function submitEarlyAccessForm(formData: FormData): Promise<ActionResult> {
  try {
    // Extract and validate form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    // const taskCategory = formData.get("primaryTask") as string
    // const customTask = formData.get("customTaskDetails") as string
    const utmVisitIdRaw = formData.get("utmVisitId")
    const utm_visit_id = typeof utmVisitIdRaw === "string" && utmVisitIdRaw.length > 0 ? utmVisitIdRaw : null

    // console.log("Received early access form submission:" + taskCategory);
    // Basic validation
    if (!name || !email ) {
      return {
        success: false,
        message: "Please fill in all required fields.",
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
      }
    }

    // Check if email already exists
    const supabase = getSupabaseAdmin()
    const { data: existingUser, error: checkError } = await supabase
      .from("early_access_signups")
      .select("email")
      .eq("email", email.toLowerCase())
      .single()

    if (checkError && checkError.code !== "PGRST116") {
      // PGRST116 is "not found" error, which is expected for new signups
      console.error("Database check error:", checkError)
      return {
        success: false,
        message: "An error occurred while processing your request. Please try again.",
      }
    }

    if (existingUser) {
      return {
        success: false,
        message: "This email is already registered for early access.",
      }
    }

    // Prepare data for insertion
    const insertData = {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      // task_category: taskCategory,
      // custom_task: customTask || null,
      utm_visit_id,
      phone: phone ? phone.trim() : null,
    }

    // Insert into Supabase
    const { data, error } = await supabase.from("early_access_signups").insert([insertData]).select().single()

    if (error) {
      console.error("Supabase insertion error:", error)
      return {
        success: false,
        message: "Failed to save your information. Please try again.",
      }
    }

    // Log success for analytics
    console.log("Early access signup successful:", {
      id: data.id,
      email: data.email,
      // taskCategory: data.task_category,
      timestamp: new Date().toISOString(),
    })

    // Revalidate the path if needed
    revalidatePath("/early-access")

    return {
      success: true,
      message:
        "Thank you for your interest! You've been added to our early access list. We'll notify you when packets becomes available.",
    }
  } catch (error) {
    console.error("Unexpected error in early access form submission:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}
