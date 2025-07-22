import { createClient } from "@supabase/supabase-js"

/**
 * Public Supabase client (RLS enforced) – can be used
 * both on the client and the server.
 */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
