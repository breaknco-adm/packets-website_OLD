"use server"

import { headers } from "next/headers"
import { getSupabaseAdmin } from "@/lib/supabase"
import type { UTMParams } from "@/lib/utm-tracking"

export async function trackUTMVisitAction(
  utmParams: UTMParams,
  landingPage: string,
  sessionId: string,
): Promise<string | null> {
  try {
    const headersList = await headers()
    const userAgent = headersList.get("user-agent")
    const referer = headersList.get("referer")
    const forwardedFor = headersList.get("x-forwarded-for")
    const realIp = headersList.get("x-real-ip")

    // Get visitor IP (prioritize x-real-ip, fallback to x-forwarded-for)
    const visitorIp = realIp || (forwardedFor ? forwardedFor.split(",")[0].trim() : null)

    const supabase = getSupabaseAdmin()

    const { data, error } = await supabase
      .from("utm_visits")
      .insert([
        {
          session_id: sessionId,
          landing_page: landingPage,
          visitor_ip: visitorIp,
          user_agent: userAgent,
          referrer: referer,
          utm_source: utmParams.utm_source,
          utm_medium: utmParams.utm_medium,
          utm_campaign: utmParams.utm_campaign,
          utm_ref_id: utmParams.utm_ref_id,
          utm_content: utmParams.utm_content,
          utm_term: utmParams.utm_term,
        },
      ])
      .select("id")
      .single()

    if (error) {
      console.error("Failed to track UTM visit:", error)
      return null
    }

    console.log("UTM visit tracked successfully:", {
      visitId: data.id,
      sessionId,
      utmParams,
      landingPage,
    })

    return data.id
  } catch (error) {
    console.error("Error in trackUTMVisitAction:", error)
    return null
  }
}
