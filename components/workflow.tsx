import { Users, LogIn, Upload, Eye, Bot, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    icon: Users,
    title: "Assign a Workflow",
    description: "Admin selects a predefined flow (e.g. onboarding, KYC, travel request) and assigns it to the user.",
    benefit: "Choose templates or build your own.",
  },
  {
    icon: LogIn,
    title: "User Logs In",
    description: "User gets notified and opens the assigned packet.",
    benefit: "Everything they need is in one place—forms, uploads, instructions.",
  },
  {
    icon: Upload,
    title: "Upload & Fill",
    description: "User uploads documents, fills out forms, completes tasks one by one.",
    benefit: "Files auto-validated in real time. No more back-and-forth.",
  },
  {
    icon: Eye,
    title: "Review & Remind",
    description: "Admin tracks checklist progress, reviews uploads, and sends reminders if needed.",
    benefit: "Full visibility, zero micromanagement.",
  },
  {
    icon: Bot,
    title: "Get AI Assistance",
    description: "Packets' AI chatbot helps users fill forms, fix missing fields, and validate documents instantly.",
    benefit: "No support tickets. Just answers.",
  },
  {
    icon: CheckCircle,
    title: "Complete the Checklist",
    description: "Once all items are done, the packet is closed.",
    benefit: "Audit trail is saved. Docs are archived. Everyone gets a copy.",
  },
]

export default function Workflow() {
  return (
    <section className="py-20 gradient-bg-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to scale documentation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI-powered tools designed for modern documentation workflows
          </p>
          <p className="text-lg text-gray-500 mt-4">
            Here's what a typical document workflow looks like—from assignment to completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 h-full hover:bg-white/90 transition-all">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-primary-600">Step {index + 1}</span>
                    <h3 className="font-display text-lg font-semibold text-gray-900">{step.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                <div className="flex items-center space-x-2 text-sm mb-4">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 font-medium">{step.benefit}</span>
                </div>
                <Button className="pulse-btn bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-lg w-full">
                  Start Step {index + 1}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
