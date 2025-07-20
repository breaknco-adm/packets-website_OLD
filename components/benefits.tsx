import { Zap, Bot, CheckCircle, Eye, Shield, FileText, ClipboardCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Zap,
    title: "AI-powered document flows",
    description: "Trigger workflows for hiring, travel, onboarding, legal, and more. No human follow-up needed.",
  },
  {
    icon: Bot,
    title: "Built-in AI Chatbot",
    description:
      "Let users ask questions, get help, and resolve document issues—right inside the flow. No ticket needed.",
  },
  {
    icon: CheckCircle,
    title: "Smart approvals & Reminders",
    description: "Route to the right people, get sign-off, and auto-stamp docs—all in one pass.",
  },
  {
    icon: Eye,
    title: "Track everything, miss nothing",
    description: "Every step is logged. Every action is traceable. Always know what happened, when, and by whom.",
  },
  {
    icon: Shield,
    title: "Real-time validation",
    description:
      "Instantly flag inconsistencies and errors, ensuring data accuracy and compliance before submission—so nothing breaks downstream.",
  },
  {
    icon: FileText,
    title: "AI form assistance",
    description:
      "Intelligently guides users through complex forms—explaining requirements and pre-filling known fields.",
  },
]

export default function Benefits() {
  return (
    <section className="py-20 bg-white-600 rounded-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Zap className="w-6 h-6 text-primary-600" />
            <h2 className="font-body text-3xl md:text-4xl font-bold text-gray-900">
              Build Intelligent Workflows in Minutes
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg transition-all hover:bg-white/90"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-body text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="font-body text-gray-600 leading-relaxed mb-4">{feature.description}</p>
            
            </div>
          ))}
        </div>        
      </div>
    </section>
  )
}
