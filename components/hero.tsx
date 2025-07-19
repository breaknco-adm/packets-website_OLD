import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="pt-24 pb-16 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20 my-10">
          {/* Left side - Text content */}
          <div className="flex-1 text-left">
            <h1 className="font-brand text-6xl md:text-4xl font-bold text-gray-900 mb-10 leading-tight">
              <span className="font-brand text-gradient">Packets</span> : Automate your document workflows - End to end.
            </h1>

            <p className="font-body text-xl text-gray-600 mb-8 leading-relaxed">
              Packets uses AI to guide you through every step of documentation with built-in workflows, smart form
              assistance, and real-time validation that catches errors before they happen.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="font-body text-gray-700 font-medium">AI-guided workflows</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="font-body text-gray-700 font-medium">Smart form completion</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="font-body text-gray-700 font-medium">Faster turnaround</span>
              </div>
            </div>

            <Link href="/early-access">
              {/* <Button size="lg" className="demo-btn px-8 py-4 text-lg font-semibold rounded-xl">
                Get Early Access
                <ArrowRight className="arrow w-5 h-5" />
              </Button> */}
              <Button size="lg" className="relative px-6 py-3 font-semibold text-white bg-black rounded-xl overflow-hidden group" >
                <span className="relative z-10 flex items-center gap-2">
                  Get Early Access
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </span>
                {/* Animated shimmer border */}
                <span className="absolute inset-0 rounded-xl border border-transparent group-hover:border-white/20">
                  <span className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-60 blur-sm animate-border-glow" />
                </span>
              </Button>

            </Link>
          </div>

          {/* Right side - Image placeholder */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-lg p-4">
              <Image
                src="/images/ai-checklist.jpg?height=600&width=800&text=Packets+Dashboard"
                alt="Packets Dashboard Preview"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
