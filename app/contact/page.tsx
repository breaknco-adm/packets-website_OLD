import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactHero from "@/components/contact-hero"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description:
    "Contact Packets for document automation solutions. Get support, request demos, or discuss your workflow automation needs with our team.",
  keywords: [
    "contact packets",
    "document automation support",
    "workflow automation contact",
    "business automation help",
    "get in touch",
  ],
  openGraph: {
    title: "Contact Us - Get in Touch | Packets",
    description:
      "Contact Packets for document automation solutions. Get support, request demos, or discuss your workflow automation needs with our team.",
    url: "https://packets.build/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Get in Touch | Packets",
    description:
      "Contact Packets for document automation solutions. Get support, request demos, or discuss your workflow automation needs.",
  },
  alternates: {
    canonical: "https://packets.build/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Packets",
            description: "Get in touch with Packets for document automation solutions and support.",
            url: "https://packets.build/contact",
            mainEntity: {
              "@type": "Organization",
              name: "Packets",
              email: "admin@packets.build",
              telephone: "+91 98953 47638",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
                addressLocality: "India",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91 98953 47638",
                contactType: "customer service",
                email: "admin@packets.build",
              },
            },
          }),
        }}
      />
      <main className="min-h-screen">
        <Navbar />
        <ContactHero />
        <ContactForm />
        {/* <ContactInfo /> */}
        <Footer />
      </main>
    </>
  )
}
