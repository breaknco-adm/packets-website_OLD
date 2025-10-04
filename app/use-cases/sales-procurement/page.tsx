"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Send,
  Handshake,
  Brain,
  BarChart3,
  Shield,
  TrendingUp,
  Users,
  Building2,
  Zap,
  ArrowRight,
  Play,
  Pause,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function SalesProcurementPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const workflowSteps = [
    {
      title: "Create contract using pre-approved template",
      description: "Start with standardized, legal-approved templates",
      status: "completed" as const,
      duration: "2 min",
    },
    {
      title: "Auto-fill vendor details and payment terms",
      description: "AI populates contract fields automatically",
      status: "completed" as const,
      duration: "30 sec",
    },
    {
      title: "Route to legal for quick review",
      description: "Automated routing to appropriate stakeholders",
      status: "current" as const,
      duration: "1 day",
    },
    {
      title: "E-sign with internal + vendor stakeholders",
      description: "Secure digital signatures from all parties",
      status: "pending" as const,
      duration: "2 days",
    },
    {
      title: "Final copy sent and archived",
      description: "Automatic distribution and secure storage",
      status: "pending" as const,
      duration: "Instant",
    },
    {
      title: "Audit log auto-updated for compliance",
      description: "Complete trail for regulatory requirements",
      status: "pending" as const,
      duration: "Automatic",
    },
  ]

  const features = [
    {
      icon: FileText,
      title: "Reusable proposal templates",
      description: "Create branded, standardized sales proposals. Auto-fill key fields and send in minutes—not hours.",
      emoji: "📑",
      stats: "90% faster",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Send,
      title: "One-click send + track",
      description:
        "Share documents with clients or vendors and track when they open, sign, or ignore it—down to the second.",
      emoji: "📤",
      stats: "Real-time",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Handshake,
      title: "Contract workflows for procurement",
      description:
        "Route vendor contracts for internal approval, e-signature, and archiving with built-in audit trails.",
      emoji: "🤝",
      stats: "70% faster",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Brain,
      title: "AI-assisted drafting",
      description: "Let packets help fill standard clauses, suggest terms, and auto-flag missing compliance fields.",
      emoji: "🧠",
      stats: "AI-powered",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: BarChart3,
      title: "Real-time status dashboards",
      description: "See which contracts are pending, which proposals are stuck, and who needs to take action.",
      emoji: "📊",
      stats: "Live updates",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: Shield,
      title: "Full audit trail",
      description: "Every action logged. Every signature timestamped. Fully searchable, fully accountable.",
      emoji: "🔐",
      stats: "100% tracked",
      gradient: "from-teal-500 to-blue-500",
    },
  ]

  const benefits = [
    { label: "Close deals faster with proposal automation", value: 200, unit: "% faster" },
    { label: "Cut contract approval cycles", value: 70, unit: "% reduction" },
    { label: "Maintain consistent formatting", value: 100, unit: "% standardized" },
    { label: "Track everything in one place", value: 95, unit: "% visibility" },
    { label: "Scale ops without scaling headcount", value: 300, unit: "% efficiency" },
  ]

  const targetAudience = [
    {
      icon: TrendingUp,
      title: "B2B Sales Teams",
      description: "handling high volume proposals",
      features: ["Proposal automation", "Client tracking", "Deal pipeline management", "Performance analytics"],
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: Users,
      title: "Procurement & Ops Leads",
      description: "managing vendor paperwork",
      features: ["Vendor management", "Contract routing", "Approval workflows", "Compliance tracking"],
      gradient: "from-green-500 to-teal-600",
    },
    {
      icon: Building2,
      title: "Mid-sized companies",
      description: "standardizing legal & finance docs",
      features: ["Document templates", "Legal compliance", "Finance integration", "Audit trails"],
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: Zap,
      title: "AI-first teams",
      description: "integrating contracts into their workflows",
      features: ["AI assistance", "Smart automation", "Workflow integration", "Data insights"],
      gradient: "from-orange-500 to-red-600",
    },
  ]

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % workflowSteps.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isPlaying, workflowSteps.length])

  const getStepStatus = (index: number) => {
    if (index < currentStep) return "completed"
    if (index === currentStep) return "current"
    return "pending"
  }

  return (
    <div className="min-h-screen bg-white">
    <Navbar/>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-ping"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
              🚀 Sales Use Cases
            </Badge>
            <h1 className="font-hero text-5xl md:text-6xl  mb-8">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x">
                Sales & Procurement
              </span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Standardize, send, and track documents—faster than ever.
            </p>
            <p className="font-body text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
              packets will help sales and procurement teams move deals forward without chasing PDFs or managing chaos in
              email threads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/early-access">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Join the Waitlist
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What you'll get with packets</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful tools designed to streamline your sales and procurement workflows
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 bg-white/80 backdrop-blur-sm overflow-hidden relative"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <span className="text-3xl group-hover:animate-bounce">{feature.emoji}</span>
                      </div>
                      <Badge
                        className={`bg-gradient-to-r ${feature.gradient} text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      >
                        {feature.stats}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Interactive Workflow Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Example Workflow: Procurement Contract
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Watch how packets streamlines your procurement process from start to finish
            </p>

            {/* Workflow Controls */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Button
                onClick={() => setIsPlaying(!isPlaying)}
                variant="outline"
                size="sm"
                className="flex items-center space-x-2"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isPlaying ? "Pause" : "Play"}</span>
              </Button>
              <div className="text-sm text-gray-500">
                Step {currentStep + 1} of {workflowSteps.length}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full max-w-2xl mx-auto mb-12">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-1000 ease-out"
                  style={{ width: `${((currentStep + 1) / workflowSteps.length) * 100}%` }}
                ></div>
              </div>
              <div className="text-sm text-gray-500 mt-2">
                {Math.round(((currentStep + 1) / workflowSteps.length) * 100)}% Complete
              </div>
            </div>
          </div>

          {/* Workflow Steps */}
          <div className="space-y-6">
            {workflowSteps.map((step, index) => {
              const status = getStepStatus(index)
              return (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-500 transform hover:scale-102 ${
                    status === "current"
                      ? "ring-2 ring-blue-500 shadow-lg bg-blue-50"
                      : status === "completed"
                        ? "bg-green-50 border-green-200"
                        : "bg-white hover:shadow-md"
                  }`}
                  onClick={() => setCurrentStep(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                          status === "completed"
                            ? "bg-green-500 text-white"
                            : status === "current"
                              ? "bg-blue-500 text-white animate-pulse"
                              : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        {status === "completed" ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : status === "current" ? (
                          <Clock className="w-5 h-5" />
                        ) : (
                          <AlertCircle className="w-5 h-5" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className={`font-semibold ${status === "current" ? "text-blue-900" : "text-gray-900"}`}>
                            {index + 1}. {step.title}
                          </h3>
                          <Badge variant="outline" className="text-xs">
                            {step.duration}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mt-1">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Outcomes for your team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable improvements that transform your sales and procurement operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 transform hover:scale-105 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text mb-2">
                      {benefit.value}
                      {benefit.unit.includes("%") ? "%" : ""}
                    </div>
                    <div className="text-sm text-gray-500">{benefit.unit}</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-4 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse"
                      style={{ width: `${Math.min(benefit.value, 100)}%` }}
                    ></div>
                  </div>
                  <p className="text-gray-700 font-medium">{benefit.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Designed for</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for teams that need to move fast and stay organized
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {targetAudience.map((audience, index) => {
              const IconComponent = audience.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/80 backdrop-blur-sm overflow-hidden relative"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${audience.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${audience.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                          {audience.title}
                        </h3>
                        <p className="text-gray-600">{audience.description}</p>
                      </div>
                    </div>
                    <div className="space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {audience.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                          style={{ transitionDelay: `${featureIndex * 100}ms` }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-20 right-20 w-60 h-60 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce"></div>
          <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-ping"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800">🚀 Early Access</Badge>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">Want to preview how your team can use it?</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link href="/early-access">
              <Button
                size="lg"
                className="relative px-8 py-4 bg-white text-blue-900 hover:bg-blue-50 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Join the Waitlist
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-blue-200">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Free during beta</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Early access features</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Direct feedback to our team</span>
            </div>
          </div>
        </div>
      </section>
<Footer />
    </div>
  )
}
