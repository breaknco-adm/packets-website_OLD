"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import {
  ArrowRight,
  Users,
  Zap,
  Target,
  TrendingUp,
  Building,
  Globe,
  BarChart3,
  CheckCircle,
  Clock,
  Shield,
  Sparkles,
  Play,
  Pause,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function HROperationsPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const [progressValue, setProgressValue] = useState(0)

  const workflowSteps = [
    {
      id: 1,
      title: 'Assign "Onboarding Packet" to new hire',
      description: "HR creates and assigns a personalized onboarding workflow",
      icon: "👤",
      color: "from-blue-500 to-purple-500",
    },
    {
      id: 2,
      title: "New hire uploads PAN, Aadhaar, Bank proof",
      description: "Employee uploads required documents through secure portal",
      icon: "📄",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "AI validates uploads + helps fill joining forms",
      description: "Smart AI checks documents and assists with form completion",
      icon: "🤖",
      color: "from-pink-500 to-red-500",
    },
    {
      id: 4,
      title: "Manager reviews and signs digitally",
      description: "Automated routing to manager for approval and digital signature",
      icon: "✍️",
      color: "from-red-500 to-orange-500",
    },
    {
      id: 5,
      title: "HR gets notified and archives everything",
      description: "Automatic notification and secure document archival",
      icon: "📁",
      color: "from-orange-500 to-yellow-500",
    },
    {
      id: 6,
      title: "Audit log is auto-updated",
      description: "Complete audit trail with timestamps and actions logged",
      icon: "📊",
      color: "from-yellow-500 to-green-500",
    },
  ]

  const features = [
    {
      emoji: "✨",
      title: "Prebuilt HR workflows",
      description: "Assign ready-to-use flows for onboarding, visa processing, policy acknowledgment, and more.",
      stats: "50+ Templates",
      color: "from-blue-400 to-blue-600",
    },
    {
      emoji: "📥",
      title: "Document intake + smart validation",
      description:
        "Let users upload and submit required documents through a single link. Real-time AI checks for formatting, completeness, and ID proof errors.",
      stats: "99.9% Accuracy",
      color: "from-purple-400 to-purple-600",
    },
    {
      emoji: "🤖",
      title: "AI-powered form assistance",
      description:
        "Users get help while filling out forms—contextual guidance, auto-fill suggestions, and fewer mistakes.",
      stats: "85% Faster",
      color: "from-pink-400 to-pink-600",
    },
    {
      emoji: "📊",
      title: "Live status tracking",
      description:
        "Track who's done what, see which docs are pending, and send one-click reminders. No spreadsheets. No guesswork.",
      stats: "Real-time Updates",
      color: "from-green-400 to-green-600",
    },
    {
      emoji: "✅",
      title: "Built-in audit trail",
      description: "Every action—logged and timestamped. Great for audits. Better for peace of mind.",
      stats: "100% Compliant",
      color: "from-indigo-400 to-indigo-600",
    },
    {
      emoji: "🔁",
      title: "Reusable templates",
      description:
        "Clone and reuse flows for new hires, departments, or geographies. Scale without reinventing your process every time.",
      stats: "Infinite Scale",
      color: "from-teal-400 to-teal-600",
    },
  ]

  const benefits = [
    { icon: Zap, title: "Cut onboarding turnaround by 70%", value: 70 },
    { icon: Target, title: "Reduce document errors by 90%", value: 90 },
    { icon: BarChart3, title: "Get full visibility into every checklist in progress", value: 100 },
    { icon: TrendingUp, title: "Run HR ops that scale without extra headcount", value: 85 },
  ]

  // Auto-advance workflow steps
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % workflowSteps.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isPlaying, workflowSteps.length])

  // Update progress value
  useEffect(() => {
    setProgressValue(((currentStep + 1) / workflowSteps.length) * 100)
  }, [currentStep, workflowSteps.length])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section with Floating Elements */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200/30 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-teal-200/30 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-200/30 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-emerald-300/40 rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-blue-200">
              <Users className="w-5 h-5 text-blue-600 transition-transform group-hover:scale-110" />
              <span className="text-sm font-medium text-blue-700">HR Operations</span>
            </div>
             <h1 className="font-hero text-5xl md:text-6xl  mb-8">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x">
                Automate HR documentation. From onboarding to compliance - handled.
              </span>
            </h1>

            <p className="font-body text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-delay">
              Packets let HR teams run structured, error-free documentation workflows with zero follow-up. Everything
              trackable. Everything compliant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
              <Link href="/early-access">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Join the Waitlist
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-body text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What you'll get with{" "}
              <span className="relative">
                Packets
                <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-yellow-500 animate-pulse" />
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-blue-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <CardContent className="p-6 relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl transform transition-transform group-hover:scale-125 group-hover:rotate-12">
                        {feature.emoji}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-body font-semibold text-gray-900 group-hover:text-gray-800 transition-colors">
                            {feature.title}
                          </h3>
                          <span
                            className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${feature.color} text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                          >
                            {feature.stats}
                          </span>
                        </div>
                        <p className="font-body text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Workflow Timeline */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-body text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sample Workflow: Employee Onboarding
            </h2>
            <p className="font-body text-lg text-gray-600 mb-8">
              Interactive timeline showing the complete onboarding process
            </p>

            {/* Playback Controls */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isPlaying ? "Pause" : "Play"}
              </Button>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Progress:</span>
                <Progress value={progressValue} className="w-32" />
                <span className="text-sm text-gray-600">{Math.round(progressValue)}%</span>
              </div>
            </div>
          </div>

          {/* Timeline Steps */}
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-6">
              {workflowSteps.map((step, index) => (
                <Card
                  key={step.id}
                  className={`transition-all duration-700 transform ${
                    index === currentStep
                      ? "bg-white shadow-xl scale-105 border-2 border-purple-300"
                      : index < currentStep
                        ? "bg-green-50 border-green-200"
                        : "bg-gray-50 border-gray-200"
                  }`}
                  onClick={() => setCurrentStep(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                      {/* Step Number & Icon */}
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                            index === currentStep
                              ? `bg-gradient-to-r ${step.color} text-white shadow-lg`
                              : index < currentStep
                                ? "bg-green-500 text-white"
                                : "bg-gray-200 text-gray-600"
                          }`}
                        >
                          {index < currentStep ? (
                            <CheckCircle className="w-6 h-6" />
                          ) : index === currentStep ? (
                            <Clock className="w-6 h-6 animate-pulse" />
                          ) : (
                            <span className="font-body text-sm font-semibold">{step.id}</span>
                          )}
                        </div>
                        <div className="text-2xl transform transition-transform hover:scale-125">{step.icon}</div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3
                          className={`font-body font-semibold mb-2 transition-colors ${
                            index === currentStep ? "text-purple-900" : "text-gray-900"
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p
                          className={`font-body text-sm transition-colors ${
                            index === currentStep ? "text-purple-700" : "text-gray-600"
                          }`}
                        >
                          {step.description}
                        </p>
                      </div>

                      {/* Status Indicator */}
                      <div className="flex items-center">
                        {index < currentStep && (
                          <div className="flex items-center gap-2 text-green-600">
                            <CheckCircle className="w-5 h-5" />
                            <span className="text-sm font-medium">Complete</span>
                          </div>
                        )}
                        {index === currentStep && (
                          <div className="flex items-center gap-2 text-purple-600">
                            <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium">In Progress</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Animated Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-body text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why this matters for HR teams
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-orange-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {(() => {
                      const Icon = benefit.icon
                      return <Icon className="w-8 h-8 text-white" />
                    })()}
                  </div>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform">
                      {benefit.value}%
                    </div>
                    <Progress value={benefit.value} className="h-2 mb-2" />
                  </div>
                  <h3 className="font-body font-semibold text-gray-900 group-hover:text-orange-800 transition-colors">
                    {benefit.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Target Audience */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-body text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who it's for</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building,
                color: "blue",
                title: "HR and PeopleOps teams in Global Capability Centers",
                features: ["Multi-country compliance", "Scale operations", "Centralized workflows"],
              },
              {
                icon: Zap,
                color: "yellow",
                title: "Fast-moving startups onboarding at scale",
                features: ["Rapid scaling", "Lean operations", "Quick deployment"],
              },
              {
                icon: Globe,
                color: "orange",
                title: "Remote-first teams managing cross-border hiring",
                features: ["Global workforce", "Remote processes", "Digital-first approach"],
              },
            ].map((audience, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-cyan-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-${audience.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {(() => {
                      const Icon = audience.icon
                      return <Icon className={`w-8 h-8 text-${audience.color}-600`} />
                    })()}
                  </div>
                  <div className="flex items-start gap-2 mb-6">
                    <div className={`w-3 h-3 bg-${audience.color}-500 rounded-full mt-2 flex-shrink-0`}></div>
                    <h3 className="font-body text-xl font-semibold text-gray-900 group-hover:text-gray-800 transition-colors">
                      {audience.title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {audience.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ transitionDelay: `${featureIndex * 100}ms` }}
                      >
                        <CheckCircle className={`w-4 h-4 text-${audience.color}-500`} />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-500/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-teal-500/10 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-500/10 rounded-full animate-ping"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-body text-3xl md:text-4xl font-bold text-white mb-6">Get early access</h2>
            <p className="font-body text-xl text-gray-300 mb-2">Packets is currently in development.</p>
            <p className="font-body text-lg text-gray-400 mb-8">
              Want to be part of the first cohort to try HR automation with real AI built in?
            </p>

            {/* Interactive CTA Button */}
            <div className="flex justify-center">
              <Link href="/early-access">
                <Button
                  size="lg"
                  className="group relative bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-12 py-6 rounded-2xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Join the Waitlist
                    <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex items-center justify-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm">Secure & Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm">AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="text-sm">Team-Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
