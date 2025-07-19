import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Benefits from "@/components/benefits"
import ProductPreview from "@/components/product-preview"
import Workflow from "@/components/workflow"
import DocumentWorldSlides from "@/components/document-world-slides"
import CTAFooter from "@/components/cta-footer"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Benefits />
      <ProductPreview />
      <Workflow />
      <DocumentWorldSlides />
      <CTAFooter />
      <Footer />
    </main>
  )
}
