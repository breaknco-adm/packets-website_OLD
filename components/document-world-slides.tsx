"use client"

import { useState } from "react"
import { Building2, Bot, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const caseStudies = [
  {
    id: 1,
    icon: Building2,
    badge: "ENTERPRISE SCALE",
    title: "How Global Corp Automated 10,000+ Employee Onboarding Documents",
    description:
      "Global Corp, a multinational company, streamlined HR workflows across 50+ countries with built-in compliance and AI-powered validation, reducing processing time by 85%.",
    category: "Global Capability Centers (GCCs)",
    headline: "Run ops at scale without drowning in paperwork",
    image: "/placeholder.svg?height=400&width=600",
    stats: "85% faster processing",
    color: "from-blue-500 to-purple-600",
  },
  {
    id: 2,
    icon: Bot,
    badge: "AI-FIRST SUCCESS",
    title: "How TechFlow Eliminated Manual Document Processing in 2 Weeks",
    description:
      "TechFlow integrated Packets into their stack, triggering flows from Slack and eliminating PDF workflows entirely, saving 40 hours per week.",
    category: "AI-First Companies",
    headline: "Docs don't have to be boring or manual",
    image: "/placeholder.svg?height=400&width=600",
    stats: "40 hours saved weekly",
    color: "from-green-500 to-teal-600",
  },
  {
    id: 3,
    icon: User,
    badge: "LEAN TEAM WIN",
    title: "How StartupX Scaled Client Onboarding Without Hiring",
    description:
      "StartupX automated their entire client onboarding process, from contracts to KYC collection, allowing them to scale 10x without additional ops staff.",
    category: "Solopreneurs & Lean Teams",
    headline: "No ops team? No problem",
    image: "/placeholder.svg?height=400&width=600",
    stats: "10x scale achieved",
    color: "from-orange-500 to-red-600",
  },
]

export default function DocumentWorldSlides() {
  const [currentCase, setCurrentCase] = useState(0)

  const currentCaseData = caseStudies[currentCase]

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl">🎯</span>
            <h2 className="font-body text-3xl md:text-4xl font-bold text-white">
              Built for the new document-driven world
            </h2>
          </div>
          <p className="font-body text-xl text-gray-300 max-w-4xl mx-auto">
            See how modern teams are transforming their document workflows with Packets
          </p>
        </div>

        {/* Main Case Study Display */}
        <div className="bg-gray-800 rounded-3xl p-8 md:p-12 mb-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - Content */}
            <div className="flex-1 text-left">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 mb-6">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {currentCaseData.badge}
                </div>
              </div>

              {/* Company logos placeholder */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                    <currentCaseData.icon className="w-5 h-5 text-gray-900" />
                  </div>
                  <span className="text-white font-semibold">Client</span>
                </div>
                <span className="text-gray-400 text-xl">×</span>
                <div className="flex items-center space-x-2">
                  <img src="/packets-logo.png" alt="Packets" className="w-8 h-8 rounded" />
                  <span className="text-white font-semibold font-brand">Packets</span>
                </div>
              </div>

              {/* Main headline */}
              <h3 className="font-body text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                {currentCaseData.title}
              </h3>

              {/* Description */}
              <p className="font-body text-gray-300 leading-relaxed mb-6 text-lg">{currentCaseData.description}</p>

              {/* Stats */}
              <div className="mb-8">
                <div className="text-2xl font-bold text-green-400 mb-2">{currentCaseData.stats}</div>
                <div className="text-gray-400">Key improvement metric</div>
              </div>

              {/* CTA Button */}
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold">
                Read more
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Right side - Visual */}
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <img
                  src={currentCaseData.image || "/placeholder.svg"}
                  alt="Case study visualization"
                  className="rounded-2xl shadow-2xl max-w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((caseStudy, index) => (
            <button
              key={caseStudy.id}
              onClick={() => setCurrentCase(index)}
              className={`px-6 py-3 rounded-xl border-2 transition-all ${
                index === currentCase
                  ? "border-blue-600 bg-blue-600/10 text-blue-400"
                  : "border-gray-600 text-gray-400 hover:border-gray-500 hover:text-gray-300"
              }`}
            >
              <div className="flex items-center space-x-2">
                <caseStudy.icon className="w-4 h-4" />
                <span className="font-semibold">{caseStudy.category}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <p className="font-body text-gray-400 mb-8 text-sm uppercase tracking-wider">
            Trusted by innovative companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder client logos */}
            <div className="w-24 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-xs font-semibold">CLIENT 1</span>
            </div>
            <div className="w-24 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-xs font-semibold">CLIENT 2</span>
            </div>
            <div className="w-24 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-xs font-semibold">CLIENT 3</span>
            </div>
            <div className="w-24 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-xs font-semibold">CLIENT 4</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
