import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Explore packets' flexible pricing options for our AI-powered compliance workflow platform. Custom enterprise solutions available.",
  keywords: ["pricing", "plans", "subscription", "enterprise", "documentation", "workflow"],
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing | packets",
    description:
      "Explore packets' flexible pricing options for our AI-powered compliance workflow platform. Custom enterprise solutions available.",
    url: "https://packets.build/pricing",
    images: [
      {
        url: "/images/pricing-og.png",
        width: 1200,
        height: 630,
        alt: "packets - Pricing Plans",
      },
    ],
  },
}
