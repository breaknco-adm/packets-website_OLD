"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Play,
  Pause,
  GraduationCap,
  FileText,
  Brain,
  BarChart3,
  CheckCircle,
  Inbox,
  Globe,
  Users,
  School,
  Plane,
  Building2,
} from "lucide-react"
import Link from "next/link"
import CTAFooter from "@/components/cta-footer"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const features = [
  {
    icon: "📦",
    title: "Prebuilt admission workflows",
    description: "Assign document checklists instantly—ID, transcripts, certificates, SOPs. No PDFs. No spreadsheets.",
    stat: "90% faster setup",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: "🧠",
    title: "AI-powered form assistance",
    description: "Guide students while they fill forms. Reduce incomplete submissions and eliminate formatting issues.",
    stat: "80% fewer errors",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: "📊",
    title: "Status dashboards for staff",
    description:
      "Track every student's progress. See what's done, what's missing, and send reminders with a single click.",
    stat: "Real-time tracking",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: "✅",
    title: "Built-in compliance logs",
    description: "Timestamped records of every submission and signature—ready for internal audits or regulators.",
    stat: "100% audit ready",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: "📥",
    title: "Onboarding packets at scale",
    description:
      "Automate ID card requests, hostel forms, and code of conduct acknowledgments for hundreds of new students.",
    stat: "Scale to 1000s",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: "🌍",
    title: "Study abroad document workflows",
    description:
      "Manage embassy requirements, visa checklists, and financial docs with AI-validated flows and advisor approvals.",
    stat: "Global compliance",
    gradient: "from-teal-500 to-green-500",
  },
]

const workflowSteps = [
  {
    step: 1,
    title: 'Assign "Study Abroad Packet"',
    description: "Automatically send document checklist to student",
    icon: FileText,
    duration: 2000,
  },
  {
    step: 2,
    title: "Student uploads passport, bank statements, offer letter",
    description: "Secure document upload with progress tracking",
    icon: Inbox,
    duration: 3000,
  },
  {
    step: 3,
    title: "AI checks formatting and validity",
    description: "Automated validation and error detection",
    icon: Brain,
    duration: 2500,
  },
  {
    step: 4,
    title: "Advisor signs and verifies",
    description: "Digital approval workflow with notifications",
    icon: CheckCircle,
    duration: 2000,
  },
  {
    step: 5,
    title: "Packet is archived and shared with student",
    description: "Secure storage and student access portal",
    icon: Globe,
    duration: 2000,
  },
  {
    step: 6,
    title: "Audit log auto-generated",
    description: "Compliance documentation created automatically",
    icon: BarChart3,
    duration: 1500,
  },
]

const benefits = [
  { label: "Process more applications with same staff", value: 400, suffix: "% increase" },
  { label: "Reduce back-and-forth communication", value: 80, suffix: "% reduction" },
  { label: "Slash document errors", value: 90, suffix: "% fewer errors" },
  { label: "Student satisfaction improvement", value: 95, suffix: "% satisfaction" },
]

const targetAudience = [
  {
    icon: GraduationCap,
    title: "University & college admissions teams",
    features: ["High-volume applications", "International students", "Complex requirements", "Compliance tracking"],
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: School,
    title: "K-12 schools with structured onboarding",
    features: ["Student enrollment", "Parent documentation", "Health records", "Emergency contacts"],
    gradient: "from-green-500 to-teal-600",
  },
  {
    icon: Globe,
    title: "Edtech platforms scaling globally",
    features: ["Multi-language support", "Regional compliance", "Automated workflows", "API integrations"],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: Plane,
    title: "Study abroad consultants",
    features: ["Visa applications", "Embassy requirements", "Financial documentation", "Timeline management"],
    gradient: "from-orange-500 to-red-600",
  },
]

export default function EducationPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        const next = (prev + 1) % workflowSteps.length
        return next
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [isPlaying])

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (!isPlaying) return prev
        const stepProgress = ((currentStep + 1) / workflowSteps.length) * 100
        return stepProgress
      })
    }, 50)

    return () => clearInterval(timer)
  }, [currentStep, isPlaying])

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-indigo-200 rounded-full opacity-20 animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-cyan-200 rounded-full opacity-20 animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-blue-200">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Education</span>
            </div>

            <h1 className="font-hero text-5xl md:text-6xl lg:text-7xl mb-8 animate-fade-in">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Automate student documentation
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed animate-fade-in-delay">
              Scale admissions, onboarding, and compliance without manual follow-up.
            </p>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-blue-100 animate-fade-in-delay-2">
              <p className="text-lg text-gray-800 leading-relaxed">
                <span className="font-semibold text-blue-600">Packets</span> will help educational institutions and
                edtech companies streamline high-volume, repetitive document flows—powered by AI.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
              <Link href="/early-access">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Get Early Access
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What you'll get with <span className="text-blue-600">Packets</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to transform your educational documentation workflows
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/80 backdrop-blur-sm"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl group-hover:animate-bounce">{feature.icon}</div>
                    <Badge
                      variant="secondary"
                      className={`bg-gradient-to-r ${feature.gradient} text-white border-0 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0`}
                    >
                      {feature.stat}
                    </Badge>
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Workflow Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Example Workflow: <span className="text-indigo-600">International Admissions</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mb-8">
              <Button
                onClick={() => setIsPlaying(!isPlaying)}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isPlaying ? "Pause" : "Play"}
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {workflowSteps.map((step, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  index === currentStep
                    ? "ring-2 ring-indigo-500 shadow-2xl bg-gradient-to-br from-indigo-50 to-purple-50"
                    : index < currentStep
                      ? "bg-green-50 border-green-200"
                      : "bg-white hover:shadow-lg"
                }`}
                onClick={() => setCurrentStep(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        index === currentStep
                          ? "bg-indigo-500 text-white animate-pulse"
                          : index < currentStep
                            ? "bg-green-500 text-white"
                            : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {index < currentStep ? <CheckCircle className="w-6 h-6" /> : <step.icon className="w-6 h-6" />}
                    </div>
                    <Badge variant={index === currentStep ? "default" : index < currentStep ? "secondary" : "outline"}>
                      Step {step.step}
                    </Badge>
                  </div>
                  <h3
                    className={`font-semibold text-lg mb-2 transition-colors duration-300 ${
                      index === currentStep
                        ? "text-indigo-600"
                        : index < currentStep
                          ? "text-green-600"
                          : "text-gray-900"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  {index === currentStep && (
                    <div className="mt-4 flex items-center gap-2 text-indigo-600">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">In Progress</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Outcomes for your <span className="text-green-600">team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable improvements that transform your educational operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="group bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                      {benefit.label}
                    </h3>
                    <Badge className="bg-green-100 text-green-700 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                      {benefit.value}
                      {benefit.suffix}
                    </Badge>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                      style={{ width: `${Math.min(benefit.value, 100)}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">Designed for</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for educational institutions and organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {targetAudience.map((audience, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/80 backdrop-blur-sm"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${audience.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${audience.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <audience.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                      {audience.title}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {audience.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0"
                        style={{ transitionDelay: `${featureIndex * 100}ms` }}
                      >
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-ping"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Early access</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Want a walkthrough of how it'll work for your team?
          </p>

          <Link href="/early-access">
            <Button
              size="lg"
              className="relative bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                👉 Join the waitlist
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </span>
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </Button>
          </Link>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-blue-100">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Free during beta</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>Priority support</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              <span>Custom setup</span>
            </div>
          </div>
        </div>
      </section>

      <CTAFooter />
      <Footer />
    </div>
  )
}
