import { Building2, Bot, User } from "lucide-react"

const audiences = [
  {
    icon: Building2,
    title: "Global Capability Centers (GCCs)",
    headline: "Run ops at scale without drowning in paperwork.",
    description:
      "Packets streamlines HR, finance, and legal workflows across geographies with built-in compliance, audit trails, and AI-powered validation. Centralize and automate documentation for consistent processes across diverse teams and geographies, ensuring compliance and rapid scalability.",
  },
  {
    icon: Bot,
    title: "AI-First Companies",
    headline: "Docs don't have to be boring or manual.",
    description:
      "Integrate Packets into your stack, trigger flows from code or Slack, and let your users handle complex document flows without ever opening a PDF.",
  },
  {
    icon: User,
    title: "Solopreneurs & Lean Teams",
    headline: "No ops team? No problem.",
    description:
      "Packets helps you onboard clients, close contracts, or collect KYC—without hiring or context-switching. Automate once, reuse forever.",
  },
]

export default function TargetAudience() {
  return (
    <section className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl">🎯</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900">
              Built for the new document-driven world
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Packets fits right into the way modern teams work—whether you're running ops for a global team, building
            AI-first workflows, or flying solo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <audience.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{audience.title}</h3>
              <p className="text-lg font-semibold text-primary-600 mb-4">{audience.headline}</p>
              <p className="text-gray-600 leading-relaxed">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
