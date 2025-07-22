import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Packets team. We're here to help with any questions about our AI-powered documentation workflow platform.",
  keywords: ["contact", "support", "help", "packets", "documentation", "workflow"],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Packets",
    description:
      "Get in touch with the Packets team. We're here to help with any questions about our AI-powered documentation workflow platform.",
    url: "https://packets.build/contact",
    images: [
      {
        url: "/images/contact-og.png",
        width: 1200,
        height: 630,
        alt: "Packets - Contact Us",
      },
    ],
  },
}
