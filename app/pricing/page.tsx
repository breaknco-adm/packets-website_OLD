import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PricingHero from "@/components/pricing-hero"
import PricingFeatures from "@/components/pricing-features"
import PricingFAQ from "@/components/pricing-faq"
import PricingCTA from "@/components/pricing-cta"

export const metadata: Metadata = {
  title: "Enterprise Pricing - Customized Plans",
  description:
    "Get customized pricing plans tailored to your organization's specific needs and scale. Enterprise-grade compliance automation with flexible pricing.",
  keywords: [
    "enterprise pricing",
    "document automation pricing",
    "business automation costs",
    "workflow automation pricing",
    "custom pricing plans",
  ],
  openGraph: {
    title: "Enterprise Pricing - Customized Plans | packets",
    description:
      "Get customized pricing plans tailored to your organization's specific needs and scale. Enterprise-grade compliance automation with flexible pricing.",
    url: "https://packets.build/pricing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Pricing - Customized Plans | packets",
    description: "Get customized pricing plans tailored to your organization's specific needs and scale.",
  },
  alternates: {
    canonical: "https://packets.build/pricing",
  },
}

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Pricing - packets",
            description:
              "Enterprise pricing for compliance automation platform with customized plans tailored to your organization's needs.",
            url: "https://packets.build/pricing",
            mainEntity: {
              "@type": "Product",
              name: "packets Enterprise",
              description: "Enterprise compliance automation platform",
              offers: {
                "@type": "Offer",
                description: "Customized pricing based on organization needs and scale",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  price: "Contact for pricing",
                  priceCurrency: "USD",
                },
              },
            },
          }),
        }}
      />
      <main className="min-h-screen">
        <Navbar />
        <PricingHero />
        <PricingFeatures />
        <PricingFAQ />
        <PricingCTA />
        <Footer />
      </main>
    </>
  )
}
