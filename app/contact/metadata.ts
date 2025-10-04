import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the packets team. We're here to help with any questions about our AI-powered compliance workflow platform.",
  keywords: ["contact", "support", "help", "packets", "compliance", "workflow"],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | packets",
    description:
      "Get in touch with the packets team. We're here to help with any questions about our AI-powered compliance workflow platform.",
    url: "https://packets.build/contact",
    images: [
      {
        url: "/images/contact-og.png",
        width: 1200,
        height: 630,
        alt: "packets - Contact Us",
      },
    ],
  },
}
