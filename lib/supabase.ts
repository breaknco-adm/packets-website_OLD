import { createClient, type SupabaseClient } from "@supabase/supabase-js"

export type Database = {
  public: {
    Tables: {
      early_access_signups: {
        Row: {
          id: string
          name: string
          email: string
          task_category: string
          custom_task: string | null
          utm_visit_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          task_category: string
          custom_task?: string | null
          utm_visit_id?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          task_category?: string
          custom_task?: string | null
          utm_visit_id?: string | null
          created_at?: string
        }
      }
      utm_visits: {
        Row: {
          id: string
          session_id: string
          landing_page: string
          visitor_ip: string | null
          user_agent: string | null
          referrer: string | null
          utm_source: string | null
          utm_medium: string | null
          utm_campaign: string | null
          utm_ref_id: string | null
          utm_content: string | null
          utm_term: string | null
          created_at: string
        }
        Insert: {
          id?: string
          session_id: string
          landing_page: string
          visitor_ip?: string | null
          user_agent?: string | null
          referrer?: string | null
          utm_source?: string | null
          utm_medium?: string | null
          utm_campaign?: string | null
          utm_ref_id?: string | null
          utm_content?: string | null
          utm_term?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          session_id?: string
          landing_page?: string
          visitor_ip?: string | null
          user_agent?: string | null
          referrer?: string | null
          utm_source?: string | null
          utm_medium?: string | null
          utm_campaign?: string | null
          utm_ref_id?: string | null
          utm_content?: string | null
          utm_term?: string | null
          created_at?: string
        }
      }
    }
  }
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Singleton pattern to prevent multiple GoTrueClient instances
let supabaseInstance: SupabaseClient<Database> | null = null

export function getSupabaseClient(): SupabaseClient<Database> {
  if (!supabaseInstance) {
    supabaseInstance = createClient<Database>(supabaseUrl, anonKey, {
      auth: {
        persistSession: false,
        storageKey: "packets-auth",
      },
    })
  }
  return supabaseInstance
}

// Export the singleton instance
export const supabase = getSupabaseClient()

// Admin client singleton for server-side operations
let adminInstance: SupabaseClient<Database> | null = null

export function getSupabaseAdmin(): SupabaseClient<Database> {
  if (!adminInstance) {
    const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY
    if (!serviceRole) {
      throw new Error("SUPABASE_SERVICE_ROLE_KEY environment variable is not defined")
    }

    adminInstance = createClient<Database>(supabaseUrl, serviceRole, {
      auth: {
        persistSession: false,
        storageKey: "packets-admin-auth",
      },
    })
  }
  return adminInstance
}
