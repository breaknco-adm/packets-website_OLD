"use client"

import { useState, useEffect } from "react"
import { Building2, Bot, User, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    icon: Building2,
    title: "Global Capability Centers (GCCs)",
    headline: "Run ops at scale without drowning in paperwork",
    description:
      "Packets streamlines HR, finance, and legal workflows across geographies with built-in compliance, audit trails, and AI-powered validation. Centralize and automate documentation for consistent processes across diverse teams and geographies, ensuring compliance and rapid scalability.",
    color: "from-blue-500 to-purple-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
  },
  {
    id: 2,
    icon: Bot,
    title: "AI-First Companies",
    headline: "Docs don't have to be boring or manual",
    description:
      "Integrate Packets into your stack, trigger flows from code or Slack, and let your users handle complex document flows without ever opening a PDF. Build the future of work with intelligent automation.",
    color: "from-green-500 to-teal-600",
    bgColor: "bg-gradient-to-br from-green-50 to-teal-50",
  },
  {
    id: 3,
    icon: User,
    title: "Solopreneurs & Lean Teams",
    headline: "No ops team? No problem",
    description:
      "Packets helps you onboard clients, close contracts, or collect KYC—without hiring or context-switching. Automate once, reuse forever. Focus on what matters while we handle the paperwork.",
    color: "from-orange-500 to-red-600",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
  },
]

export default function DocumentWorldSlides() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <section className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl">🎯</span>
            <h2 className="font-body text-3xl md:text-4xl font-bold text-gray-900">
              Built for the new document-driven world
            </h2>
          </div>
          <p className="font-body text-xl text-gray-600 max-w-4xl mx-auto">
            Packets fits right into the way modern teams work—whether you're running ops for a global team, building
            AI-first workflows, or flying solo.
          </p>
        </div>

        {/* Slide Container */}
        <div className="relative">
          <div
            className={`${currentSlideData.bgColor} rounded-3xl p-8 md:p-12 transition-all duration-500 min-h-[400px]`}
          >
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left side - Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${currentSlideData.color} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <currentSlideData.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-body text-2xl md:text-3xl font-bold text-gray-900">{currentSlideData.title}</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mt-2"></div>
                  </div>
                </div>

                <h4 className="font-body text-xl md:text-2xl font-semibold text-primary-600 mb-4">
                  {currentSlideData.headline}
                </h4>

                <p className="font-body text-gray-700 leading-relaxed mb-8 text-lg">{currentSlideData.description}</p>

                <Button className="demo-btn px-6 py-3 rounded-xl">
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Right side - Visual Element */}
              <div className="flex-1 flex justify-center">
                <div
                  className={`w-64 h-64 bg-gradient-to-r ${currentSlideData.color} rounded-full flex items-center justify-center shadow-2xl opacity-20`}
                >
                  <currentSlideData.icon className="w-32 h-32 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-primary-600 w-8" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-4 max-w-md mx-auto">
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div
              className="bg-primary-600 h-1 rounded-full transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
