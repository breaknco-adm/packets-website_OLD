import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import EarlyAccessHero from "@/components/early-access-hero"
import EarlyAccessForm from "@/components/early-access-form"
import WhatToExpect from "@/components/what-to-expect"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Get Early Access - Join the Beta",
  description:
    "Get early access to Packets document automation platform. Be among the first to experience AI-powered workflow automation and earn exclusive rewards.",
  keywords: [
    "early access",
    "beta access",
    "document automation beta",
    "workflow automation early access",
    "AI document tools beta",
  ],
  openGraph: {
    title: "Get Early Access - Join the Beta | Packets",
    description:
      "Get early access to Packets document automation platform. Be among the first to experience AI-powered workflow automation and earn exclusive rewards.",
    url: "https://packets.build/early-access",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Early Access - Join the Beta | Packets",
    description:
      "Get early access to Packets document automation platform. Be among the first to experience AI-powered workflow automation.",
  },
  alternates: {
    canonical: "https://packets.build/early-access",
  },
}

export default function EarlyAccessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Early Access - Packets",
            description:
              "Join the early access program for Packets document automation platform and be among the first to experience AI-powered workflows.",
            url: "https://packets.build/early-access",
            mainEntity: {
              "@type": "WebApplication",
              name: "Packets Early Access",
              description: "Early access program for document automation platform",
              applicationCategory: "BusinessApplication",
              offers: {
                "@type": "Offer",
                description: "Free early access with exclusive benefits and rewards",
                price: "0",
                priceCurrency: "INR",
              },
            },
          }),
        }}
      />
      <main className="min-h-screen">
        <Navbar />
        <EarlyAccessHero />
        <EarlyAccessForm />
        <WhatToExpect />
        <Footer />
      </main>
    </>
  )
}
