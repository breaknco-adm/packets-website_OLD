import EarlyAccessHero from "@/components/early-access-hero"
import EarlyAccessForm from "@/components/early-access-form"
import WhatToExpect from "@/components/what-to-expect"
import Footer from "@/components/footer"

export default function EarlyAccessPage() {
  return (
    <main className="min-h-screen">
      <EarlyAccessHero />
      <EarlyAccessForm />
      <WhatToExpect />
      <Footer />
    </main>
  )
}
