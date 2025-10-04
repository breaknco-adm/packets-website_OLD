import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

const features = [
  {
    title: "Build Workflows Visually",
    description:
      "No code needed. AI generates steps to automate control execution, evidence tasks, approvals, and notifications.",
    details: [
      "Start with templates for common controls and policies",
      "Customize responsibilities (control owner, reviewer, approver)",
      "Add logic by team, region, or framework",
      "Reuse workflows across products and geographies",
    ],
    image: "/images/ai-assistance.png?text=Workflow+Builder+Interface",
    darkBgColor: "bg-gradient-to-br from-blue-900/20 to-purple-900/20",
  },
  {
    title: "AI Assistance",
    description:
      "Context‑aware guidance explains the “why” behind each control.",
    details: [
      "Gap analysis with prioritized next steps", 
      "Policy drafts and control narratives", 
      "Real‑time validation and drift detection",
      "Learns from usage to improve over time",
    ],
    image: "/images/ai-assistance.png?text=AI+Chat+Interface",
    darkBgColor: "bg-gradient-to-br from-green-900/20 to-teal-900/20",
  },
  {
    title: "Tracking and Reminders",
    description:
      "See status by framework, team, and control.",
    details: [
      "Live dashboards and SLA tracking",
      "Automated reminders and escalations",
      "Full action logs and exportable reports"
    ],
    image: "/images/ai-assistance.png?text=Dashboard+Timeline+View",
    darkBgColor: "bg-gradient-to-br from-orange-900/20 to-red-900/20",
  },
  {
    title: "Real-time Validation",
    description:
      "Ensure completeness, format compliance, and evidence accuracy.",
    details: [
      "Instantly flag inconsistencies and missing artifacts",
      "Validate against framework rules and internal policies",
      "Reduce downstream rework by catching issues early"
    ],
    image: "/images/form-validations.jpg?text=Smart+Form+Interface",
    darkBgColor: "bg-gradient-to-br from-teal-900/20 to-red-900/20",
  },
]

export default function ProductPreview() {
  return (
    <section className="py-20 gradient-bg-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-atak text-3xl md:text-4xl  text-gray-900 mb-4">
            Everything you need to scale compliance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI‑powered tools designed for modern GRC programs.
          </p>
        </div>
        <div className="space-y-20">
          {features.map((feature, index) => (
            <div className={`relative ${feature.darkBgColor} rounded-3xl p-4 md:p-20 border border-white/20`} key={index}>
            {/* Background gradient overlay */}
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8 `}
            >
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4 ">
  
                  <h3 className="font-atak text-2xl md:text-3xl text-black">{feature.title}</h3>
                </div>
                <p className="text-lg text-gray-800 leading-relaxed mb-6">{feature.description}</p>

                {feature.details.length > 0 && (
                  <div className="mb-6">
                    <ul className="space-y-3">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
              <div className="flex-1">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
