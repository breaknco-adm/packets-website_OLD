import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins, Montserrat } from "next/font/google"
import { Suspense } from "react"
import { UTMTracker } from "@/components/utm-tracker"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: {
    default: "packets - Build Trust with AI Compliance | ISO · SOC 2 · GDPR · HIPAA",
    template: "%s | packets",
  },
  description:
    "End-to-end document automation platform. Docs that move themselves—from creation to approval, stamping to delivery. Faster turnaround, fewer errors, fully auditable.",
  keywords: [
    "smarter compliance automation platform",
    "workflow automation",
    "document management",
    "AI-powered documents",
    "business process automation",
    "digital transformation",
  ],
  authors: [{ name: "packets" }],
  creator: "packets",
  publisher: "packets",
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
    title: "packets – Smarter Compliance Automation",
    description:
      "packets helps fast-growing companies achieve ISO 27001, SOC 2, GDPR, EU AI Act, and more—faster and audit-ready. Automate GRC workflows, simplify evidence collection, and stay continuously compliant.",
    siteName: "packets",
    images: [
      {
        url: "/packets-logo.png",
        width: 1200,
        height: 630,
        alt: "packets - Smarter Compliance Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "packets – Smarter Compliance Automation",
    description:
      "Smarter compliance automation for ISO 27001, SOC 2, GDPR, EU AI Act, and more. Faster, audit-ready, and continuous.",
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
              name: "packets",
              description:
                "Smarter compliance automation for ISO 27001, SOC 2, GDPR, EU AI Act, and more. Faster, audit-ready, and continuous.",
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
                name: "packets",
                url: "https://packets.build",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} ${montserrat.variable} font-sans antialiased`}>
          <Suspense fallback={null}>
          <UTMTracker />
        </Suspense>
        {children}
      </body>
    </html>
  )
}
