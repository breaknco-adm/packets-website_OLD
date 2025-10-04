import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Benefits from "@/components/benefits"
import ProductPreview from "@/components/product-preview"
import Workflow from "@/components/workflow"
import TargetAudience from "@/components/target-audience"
import CTAFooter from "@/components/cta-footer"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "packets - Build Trust with AI Compliance | ISO · SOC 2 · GDPR · HIPAA",
  description:
    "Smarter compliance automation for ISO 27001, SOC 2, GDPR, EU AI Act, and more. Faster, audit-ready, and continuous.",
  keywords: [
    "AI compliance tool",
    "ISO 27001 compliance",
    "GDPR compliance tool",
    "compliance management platform",
    "SOC 2 compliance",
    "Risk and compliance management",
    "Regulatory compliance software",
    "HIPAA compliance tool",
    "Compliance automation",
    "Continuous compliance monitoring",
  ],
  openGraph: {
    title: "packets - Build Trust with AI Compliance | ISO · SOC 2 · GDPR · HIPAA",
    description:
      "Smarter compliance automation for ISO 27001, SOC 2, GDPR, EU AI Act, and more",
    url: "https://packets.build",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "packets - Build Trust with AI Compliance | ISO · SOC 2 · GDPR · HIPAA",
    description:
      "Smarter compliance automation for ISO 27001, SOC 2, GDPR, EU AI Act, and more",
  },
  alternates: {
    canonical: "https://packets.build",
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "packets - Smarter Compliance Workflows",
            description:
              "Smarter compliance automation for ISO 27001, SOC 2, GDPR, EU AI Act, and more",
            url: "https://packets.build",
            mainEntity: {
              "@type": "SoftwareApplication",
              name: "packets",
              applicationCategory: "BusinessApplication",
              description:
                "Smarter compliance automation for ISO 27001, SOC 2, GDPR, EU AI Act, and more",
              featureList: [
                "AI‑powered framework & control mapping",
                "Built‑in AI Copilot",
                "Smart approvals & Reminders",
                "Track everything, miss nothing",
                "Real-time validation",
                "AI evidence assistance",
              ],
            },
          }),
        }}
      />
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Benefits />
        <Workflow />
        <ProductPreview /> 
        <TargetAudience />
        <CTAFooter />
        <Footer />
      </main>
    </>
  )
}
