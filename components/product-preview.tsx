import Image from "next/image"
import { Button } from "@/components/ui/button"

const features = [
  {
    number: "1",
    title: "Build workflows visually",
    description:
      "No code needed. Drag and drop steps to automate document creation, approval, stamping, delivery, and notifications.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    number: "2",
    title: "Chat with your documents",
    description:
      "Your built-in AI chatbot helps users fill forms, understand requirements, and fix issues—right inside the workflow.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    number: "3",
    title: "Stay on top of everything",
    description:
      "Track the status of every document in real-time. See who's holding things up, what's approved, and what failed.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    number: "4",
    title: "AI-assisted forms",
    description:
      "Forms that fill themselves. Packets suggests inputs, explains complex fields, and catches mistakes before submission.",
    image: "/placeholder.svg?height=300&width=500",
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
