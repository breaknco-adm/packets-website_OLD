import Image from "next/image"
import { Button } from "@/components/ui/button"

const features = [
  {
    number: "1",
    title: "🛠️ Build Workflows Visually",
    description:
      "No code needed. Use drag-and-drop tools to stitch together smart templates and automate every document process.",
    details: [
      "Start with ready-made templates like Passport Upload, Bank Statement Collection, or Application Forms",
      "Customize each step — form inputs, validations, uploads, and approvals",
      "Add logic for who fills what, when (e.g. user vs reviewer vs approver)",
      "Automate actions like e-stamping, email delivery, and Slack alerts",
      "Reuse and adapt workflows across teams, clients, or regions",
    ],
    image: "/placeholder.svg?height=300&width=500&text=Workflow+Builder+Interface",
  },
  {
    number: "2",
    title: "Chat with your documents",
    description:
      "Your built-in AI chatbot helps users fill forms, understand requirements, and fix issues—right inside the workflow.",
    details: [],
    image: "/placeholder.svg?height=300&width=500&text=AI+Chat+Interface",
  },
  {
    number: "3",
    title: "Stay on top of everything",
    description:
      "Track the status of every document in real-time. See who's holding things up, what's approved, and what failed.",
    details: [],
    image: "/placeholder.svg?height=300&width=500&text=Dashboard+Timeline+View",
  },
  {
    number: "4",
    title: "AI-assisted forms",
    description:
      "Forms that fill themselves. Packets suggests inputs, explains complex fields, and catches mistakes before submission.",
    details: [],
    image: "/placeholder.svg?height=300&width=500&text=Smart+Form+Interface",
  },
]

export default function ProductPreview() {
  return (
    <section className="py-20 gradient-bg-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12`}
            >
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    {feature.number}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">{feature.description}</p>

                {feature.details.length > 0 && (
                  <div className="mb-6">
                    <ul className="space-y-3">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Button className="futuristic-btn text-white px-6 py-3 rounded-lg font-medium">Try This Feature</Button>
              </div>
              <div className="flex-1">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
