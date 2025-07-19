import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Packets - Automate your document workflows",
    template: "%s | Packets",
  },
  description:
    "End-to-end document automation platform. Docs that move themselves—from creation to approval, stamping to delivery. Faster turnaround, fewer errors, fully auditable.",
  keywords: [
    "document automation",
    "workflow automation",
    "document management",
    "AI-powered documents",
    "business process automation",
    "digital transformation",
    "paperless office",
  ],
  authors: [{ name: "Packets" }],
  creator: "Packets",
  publisher: "Packets",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://packets.build"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://packets.build",
    title: "Packets - Automate your document workflows",
    description:
      "End-to-end document automation platform. Docs that move themselves—from creation to approval, stamping to delivery.",
    siteName: "Packets",
    images: [
      {
        url: "/packets-logo.png",
        width: 1200,
        height: 630,
        alt: "Packets - Document Workflow Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Packets - Automate your document workflows",
    description:
      "End-to-end document automation platform. Docs that move themselves—from creation to approval, stamping to delivery.",
    images: ["/packets-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/packets-logo.png" />
        <link rel="apple-touch-icon" href="/packets-logo.png" />
        <meta name="theme-color" content="#8b5cf6" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Packets",
              description:
                "End-to-end document automation platform. Docs that move themselves—from creation to approval, stamping to delivery.",
              url: "https://packets.build",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              provider: {
                "@type": "Organization",
                name: "Packets",
                url: "https://packets.build",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
