import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="pt-24 pb-16 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 text-left">
            <h1 className="font-body text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="font-brand text-gradient">Packets</span> : Automate your document workflows. End-to-end.
            </h1>

            <p className="font-body text-xl text-gray-600 mb-8 leading-relaxed">
              {"Packets uses AI to guide you through every step of documentation with built-in workflows, smart form assistance, and real-time validation that catches errors before they happen."} 
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="font-body text-gray-700 font-medium">Faster turnaround</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="font-body text-gray-700 font-medium">Fewer errors</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="font-body text-gray-700 font-medium">Fully auditable</span>
              </div>
            </div>

            <Button size="lg" className="demo-btn px-8 py-4 text-lg font-semibold rounded-xl">
              Get Early Access
              <ArrowRight className="arrow w-5 h-5" />
            </Button>
          </div>

          {/* Right side - Image placeholder */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-lg p-4">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Product Dashboard"
                alt="Packets Dashboard Preview"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
