import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

const features = [
  {
    title: "Build Workflows Visually",
    description:
      "No code needed. Use drag-and-drop tools to stitch together smart templates and automate every document process. The system breaks down complex documentation requirements into manageable steps with clear instructions.",
    details: [
      "Start with ready-made templates like Passport Upload, Bank Statement Collection, or Application Forms",
      "Customize each step — form inputs, validations, uploads, and approvals",
      "Add logic for who fills what, when (e.g. user vs reviewer vs approver)",
      "Automate actions like e-stamping, email delivery, and Slack alerts",
      "Reuse and adapt workflows across teams, clients, or regions",
    ],
    image: "/images/template-builder.png?text=Workflow+Builder+Interface",
    darkBgColor: "bg-gradient-to-br from-blue-900/20 to-purple-900/20",
  },
  {
    title: "AI Assistance",
    description:
      "Our advanced AI assistant understands the context of each form field, providing intelligent suggestions, auto-filling repetitive information, and explaining complex requirements in simple language to streamline form completion.",
    details: [
      "AI-powered suggestions for form inputs", 
      "Contextual help and explanations for complex fields", 
      "Real-time validation to catch errors before submission",
      "Learning from user patterns to improve suggestions over time",
      "Supports multiple languages and formats",],
    image: "/images/ai-assistance.png?text=AI+Chat+Interface",
    darkBgColor: "bg-gradient-to-br from-green-900/20 to-teal-900/20",
  },
  {
    title: "Tracking and Reminders",
    description:
      "Track the status of every document in real-time. See who's holding things up, what's approved, and what failed.",
    details: ["Monitor progress with a live dashboard",
      "Get notified when actions are required",
      "Send automated reminders to users and reviewers",
      "View detailed logs of every action taken",
      "Generate reports on workflow efficiency and bottlenecks"],
    image: "/images/tracking.png?text=Dashboard+Timeline+View",
    darkBgColor: "bg-gradient-to-br from-orange-900/20 to-red-900/20",
  },
  {
    title: "Real-time Validation",
    description:
      "Our AI-powered validation engine continuously monitors document uploads, checking for completeness, format compliance, and content accuracy. Issues are flagged immediately with clear instructions for resolution, preventing costly errors and delays.",
    details: ["Instantly flag inconsistencies and errors",
      "Ensure data accuracy and compliance before submission",
      "Catch missing fields, incorrect formats, and policy violations",
      "Provide actionable feedback to users in real-time",
      "Reduce downstream issues and rework by catching errors early"],
    image: "/images/form-validations.jpg?text=Smart+Form+Interface",
    darkBgColor: "bg-gradient-to-br from-teal-900/20 to-red-900/20",
  },
]

export default function ProductPreview() {
  return (
    <section className="py-20 gradient-bg-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-inter text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to scale documentation Docs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI-powered tools designed for modern documentation workflows
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
  
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">{feature.description}</p>

                {feature.details.length > 0 && (
                  <div className="mb-6">
                    <ul className="space-y-3">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
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
