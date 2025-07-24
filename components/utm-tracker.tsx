"use client"

import { useEffect } from "react"
import { useSearchParams, usePathname } from "next/navigation"
import {
  extractUTMParams,
  hasUTMParams,
  generateSessionId,
  storeUTMVisitId,
  getStoredUTMVisitId,
} from "@/lib/utm-tracking"
import { trackUTMVisitAction } from "@/app/actions/track-utm"

export function UTMTracker() {
  const searchParams = useSearchParams()
  const pathname = usePathname()

  useEffect(() => {
    console.log("UTMTracker initialized with searchParams:", searchParams.toString());
    // Skip if we've already stored a visit id in this session
    if (getStoredUTMVisitId()) return

    const utmParams = extractUTMParams(searchParams)
    if (!hasUTMParams(utmParams)) return

    const sessionId = generateSessionId()
    const landingPage = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "")

    trackUTMVisitAction(utmParams, landingPage, sessionId)
      .then((visitId) => {
        if (visitId) {
          storeUTMVisitId(visitId)
          console.log("UTM visit tracked with ID:", visitId)
        }
      })
      .catch((error) => {
        console.error("Failed to track UTM visit:", error)
      })
  }, [searchParams, pathname])

  return null
}
