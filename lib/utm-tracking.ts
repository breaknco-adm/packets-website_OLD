export interface UTMParams {
  utm_source?: string | null
  utm_medium?: string | null
  utm_campaign?: string | null
  utm_ref_id?: string | null
  utm_content?: string | null
  utm_term?: string | null
}

export function extractUTMParams(searchParams: URLSearchParams): UTMParams {
  return {
    utm_source: searchParams.get("utm_source"),
    utm_medium: searchParams.get("utm_medium"),
    utm_campaign: searchParams.get("utm_campaign"),
    utm_ref_id: searchParams.get("utm_ref_id"),
    utm_content: searchParams.get("utm_content"),
    utm_term: searchParams.get("utm_term"),
  }
}

export function hasUTMParams(params: UTMParams): boolean {
  return !!(
    params.utm_source ||
    params.utm_medium ||
    params.utm_campaign ||
    params.utm_ref_id ||
    params.utm_content ||
    params.utm_term
  )
}

export function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

const UTM_VISIT_ID_KEY = "packets_utm_visit_id"

export function storeUTMVisitId(visitId: string): void {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(UTM_VISIT_ID_KEY, visitId)
  }
}

export function getStoredUTMVisitId(): string | null {
  if (typeof window !== "undefined") {
    return sessionStorage.getItem(UTM_VISIT_ID_KEY)
  }
  return null
}

export function clearStoredUTMVisitId(): void {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(UTM_VISIT_ID_KEY)
  }
}
