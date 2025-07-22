import { createClient } from "@supabase/supabase-js"

/**
 * Returns a Supabase client that BYPASSES RLS.
 * MUST be called from the server only – never import this file
 * in a Client Component or any code that ends up in the browser.
 */
export function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error(
      "Supabase admin credentials are missing. " + "Ensure SUPABASE_SERVICE_ROLE_KEY is set on the server.",
    )
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  })
}
