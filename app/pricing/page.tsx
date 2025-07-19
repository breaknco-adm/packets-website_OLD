import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PricingHero from "@/components/pricing-hero"
import PricingFeatures from "@/components/pricing-features"
import PricingFAQ from "@/components/pricing-faq"
import PricingCTA from "@/components/pricing-cta"

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PricingHero />
      <PricingFeatures />
      <PricingFAQ />
      <PricingCTA />
      <Footer />
    </main>
  )
}
