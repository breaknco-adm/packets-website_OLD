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
  title: "Packets - Automate your document workflows",
  description:
    "End-to-end document automation platform. Docs that move themselves—from creation to approval, stamping to delivery. Faster turnaround, fewer errors, fully auditable.",
  keywords: [
    "document automation",
    "workflow automation",
    "AI-powered documents",
    "business process automation",
    "digital transformation",
  ],
  openGraph: {
    title: "Packets - Automate your document workflows",
    description:
      "End-to-end document automation platform. Docs that move themselves—from creation to approval, stamping to delivery.",
    url: "https://packets.build",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Packets - Automate your document workflows",
    description:
      "End-to-end document automation platform. Docs that move themselves—from creation to approval, stamping to delivery.",
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
            name: "Packets - Document Workflow Automation",
            description:
              "End-to-end document automation platform. Docs that move themselves—from creation to approval, stamping to delivery.",
            url: "https://packets.build",
            mainEntity: {
              "@type": "SoftwareApplication",
              name: "Packets",
              applicationCategory: "BusinessApplication",
              description:
                "Automate document workflows with AI-powered tools for creation, approval, stamping, and delivery.",
              featureList: [
                "AI-powered document flows",
                "Built-in AI Chatbot",
                "Smart approvals & Reminders",
                "Track everything, miss nothing",
                "Real-time validation",
                "AI form assistance",
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
