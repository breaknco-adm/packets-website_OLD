"use client"

import { useState, useEffect } from "react"
import { Building2, Bot, User, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    icon: Building2,
    emoji: "🏢",
    title: "For Global Capability Centers (GCCs)",
    headline: "Run ops at scale — without drowning in paperwork",
    description:
      "Packets helps HR, finance, and legal teams manage high-volume documentation with precision and control.",
    features: [
      "Automate HR, finance, and legal workflows",
      "Ensure compliance across multiple geographies",
      "Maintain audit trails for every submission",
      "Standardize processes across distributed teams",
      "Reduce manual effort with AI validation",
    ],
    color: "from-blue-500 to-purple-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
    darkBgColor: "bg-gradient-to-br from-blue-900/20 to-purple-900/20",
  },
  {
    id: 2,
    icon: Bot,
    emoji: "🤖",
    title: "For AI-First Companies",
    headline: "Docs don't have to be boring — or manual",
    description:
      "Packets fits seamlessly into modern product stacks, enabling dynamic documentation flows powered by code.",
    features: [
      "Trigger document workflows via APIs or Slack",
      "Auto-fill, validate, and finalize forms in real time",
      "Replace static PDFs with dynamic, user-driven flows",
      "Integrate with internal tools or custom apps",
      "Let users complete docs without ever leaving your product",
    ],
    color: "from-green-500 to-teal-600",
    bgColor: "bg-gradient-to-br from-green-50 to-teal-50",
    darkBgColor: "bg-gradient-to-br from-green-900/20 to-teal-900/20",
  },
  {
    id: 3,
    icon: User,
    emoji: "👤",
    title: "For Solopreneurs & Lean Teams",
    headline: "No ops team? No problem",
    description: "Packets makes it easy to handle repeatable document tasks—without hiring or switching contexts.",
    features: [
      "Automate client onboarding and KYC flows",
      "Close deals faster with reusable templates",
      "Skip the back-and-forth with AI form assistance",
      "Eliminate manual steps in recurring processes",
      "Set it up once, reuse forever",
    ],
    color: "from-orange-500 to-red-600",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
    darkBgColor: "bg-gradient-to-br from-orange-900/20 to-red-900/20",
  },
]

export default function DocumentWorldSlides() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

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
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className={`absolute inset-0 ${currentSlideData.darkBgColor} transition-all duration-1000`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl">🎯</span>
            <h2 className="font-brand text-3xl md:text-4xl font-bold text-white">
              Built for the new document-driven world
            </h2>
          </div>
          <p className="font-body text-xl text-gray-300 max-w-4xl mx-auto">
            Packets fits right into the way modern teams work—whether you're running ops for a global team, building
            AI-first workflows, or flying solo.
          </p>
        </div>

        {/* Main Slide Container */}
        <div className="relative">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 min-h-[500px] transition-all duration-500">
            <div className="flex flex-col lg:flex-row items-start gap-12">
              {/* Left side - Content */}
              <div className="flex-1 ml-0 lg:ml-12 space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-4xl">{currentSlideData.emoji}</div>
                  <div>
                    <h3 className="font-body text-2xl md:text-3xl font-bold text-white">{currentSlideData.title}</h3>
                    <div className={`w-12 h-1 bg-gradient-to-r ${currentSlideData.color} rounded-full mt-2`}></div>
                  </div>
                </div>

                <h4 className="font-body text-xl md:text-2xl font-semibold text-blue-400 mb-4">
                  {currentSlideData.headline}
                </h4>

                <p className="font-body text-gray-300 leading-relaxed mb-8 text-lg">{currentSlideData.description}</p>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {currentSlideData.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${currentSlideData.color} rounded-full mt-2 flex-shrink-0`}
                      ></div>
                      <span className="font-body text-gray-300 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side - Visual Element */}
              <div className="flex-1 flex justify-center items-center">
                <div className="relative">
                  <div
                    className={`w-80 h-80 bg-gradient-to-r ${currentSlideData.color} rounded-3xl flex items-center justify-center shadow-2xl opacity-20 transform rotate-12`}
                  >
                    <currentSlideData.icon className="w-32 h-32 text-white" />
                  </div>
                  <div
                    className={`absolute -top-4 -left-4 w-80 h-80 bg-gradient-to-r ${currentSlideData.color} rounded-3xl flex items-center justify-center shadow-2xl opacity-10 transform -rotate-6`}
                  >
                    <currentSlideData.icon className="w-32 h-32 text-white" />
                  </div>
                  <div
                    className={`absolute -top-8 -left-8 w-80 h-80 bg-gradient-to-r ${currentSlideData.color} rounded-3xl flex items-center justify-center shadow-2xl opacity-5`}
                  >
                    <currentSlideData.icon className="w-32 h-32 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white/20 transition-all border border-white/20"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white/20 transition-all border border-white/20"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                index === currentSlide ? "bg-white text-gray-900" : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              <span className="mr-2">{slide.emoji}</span>
              {slide.title.replace("For ", "")}
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-6 max-w-md mx-auto">
          <div className="w-full bg-white/20 rounded-full h-1">
            <div
              className={`bg-gradient-to-r ${currentSlideData.color} h-1 rounded-full transition-all duration-300`}
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />
          </div>
        </div>

      </div>
    </section>
  )
}
