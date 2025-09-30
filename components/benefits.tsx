import { Zap, Bot, CheckCircle, Eye, Shield, FileText, ClipboardCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    icon: Zap,
    title: "AI‑powered framework & control mapping",
    description: "Import or select frameworks and instantly cross‑map overlapping controls. Cut redundancy and accelerate audits.",
    gradient: "from-blue-500 to-cyan-500",
    stat: "90% faster setup",
  },
  {
    icon: Bot,
    title: "Built-in AI Copilot",
    description:
      "Let teams ask questions, get guidance on controls, and generate policy drafts—right inside the flow. No tickets needed.",
    gradient: "from-purple-500 to-pink-500",
    stat: "Cut manual work by 70%",
  },
  {
    icon: CheckCircle,
    title: "Smart owners, approvals & reminders",
    description: "Route tasks to the right owners, track sign‑offs, and auto‑collect evidence-all in one pass.",
    gradient: "from-green-500 to-emerald-500",
    stat: "100% audit ready",
  },
  {
    icon: Eye,
    title: "Track everything, miss nothing",
    description: "Every action is logged and traceable with immutable evidence trails. Always know what happened, when, and by whom.",
    gradient: "from-orange-500 to-red-500",
    stat: "Full visibility",
  },
  {
    icon: Shield,
    title: "Real-time validation",
    description: "Detect missing evidence, control drift, and policy misalignment as you work—so nothing breaks at audit time.",
    gradient: "from-indigo-500 to-blue-500",
    stat: "Zero audit surprises",
  },
  {
    icon: FileText,
    title: "AI evidence assistance",
    description: "Pre‑fill metadata, explain requirements, and validate submissions in context to reduce back‑and‑forth.",
    gradient: "from-teal-500 to-green-500",
    stat: "Scale to 1000s",
  },
]

export default function Benefits() {
  return (
    <section className="py-20 bg-white-600 rounded-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Zap className="w-6 h-6 text-primary-600" />
            <h2 className="font-atak text-3xl md:text-4xl text-gray-900">
              Build Intelligent Compliance Smarter and Faster
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/80 backdrop-blur-sm"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl group-hover:animate-bounce">
                      <feature.icon />
                    </div>
                    <Badge
                      variant="secondary"
                      className={`bg-gradient-to-r ${feature.gradient} text-white border-0 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0`}
                    >
                      {feature.stat}
                    </Badge>
                  </div>
                  <h3 className="font-display text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
      </div>
    </section>
  )
}
