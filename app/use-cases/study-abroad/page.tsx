"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import {
  CheckCircle,
  FileText,
  Users,
  RefreshCw,
  Brain,
  BarChart3,
  ArrowRight,
  Clock,
  CheckSquare,
  AlertTriangle,
  Send,
  BookOpen,
  TrendingUp,
  Shield,
  Zap,
  Target,
} from "lucide-react"

const workflowSteps = [
  {
    id: 1,
    title: "Assign Canada Visa Packet to student",
    actor: "Counselor",
    time: "2 min",
    description: "Select country-specific packet template with all required documents",
    details:
      "Automatically includes: Study permit application, financial documents, academic transcripts, language test results, and medical exam requirements",
    icon: FileText,
    color: "bg-blue-500",
    progress: 100,
  },
  {
    id: 2,
    title: "Student uploads required documents",
    actor: "Student",
    time: "3-5 days",
    description: "Guided document collection with real-time validation",
    details:
      "Documents uploaded: Financial statements ✓, SOP ✓, Letter of Acceptance ✓, IELTS results ✓, Passport copy ✓",
    icon: CheckSquare,
    color: "bg-green-500",
    progress: 100,
  },
  {
    id: 3,
    title: "AI validates documents automatically",
    actor: "AI System",
    time: "30 seconds",
    description: "Instant error detection and format validation",
    details: "AI Analysis Complete: No missing pages detected, all formats valid, financial calculations verified",
    icon: Brain,
    color: "bg-purple-500",
    progress: 100,
  },
  {
    id: 4,
    title: "AI flags passport name mismatch",
    actor: "Counsellor",
    time: "5 min",
    description: "AI detects a discrepancy in submitted documents and alerts the assigned counsellor for review.",
    details: "Issue Found: Name on passport (John Smith) doesn't match academic transcripts (Jonathan Smith)",
    icon: AlertTriangle,
    color: "bg-orange-500",
    progress: 75,
  },
  {
    id: 5,
    title: "Student corrects issue immediately",
    actor: "Student",
    time: "1 day",
    description: "Real-time notification enables quick resolution",
    details: "Resolution: Updated academic transcript uploaded with correct name matching passport",
    icon: CheckCircle,
    color: "bg-green-600",
    progress: 100,
  },
  {
    id: 6,
    title: "Final packet ready for visa filing",
    actor: "System",
    time: "Instant",
    description: "Complete, validated packet sent to visa processing team",
    details: "Status: All documents verified ✓, No errors detected ✓, Ready for submission ✓",
    icon: Send,
    color: "bg-indigo-500",
    progress: 100,
  },
]

const outcomes = [
  { icon: Shield, label: "Document errors reduced", value: "90%" },
  { icon: Clock, label: "Counselor time saved", value: "40-60%" },
  { icon: TrendingUp, label: "Visa acceptance improved", value: "25%" },
  { icon: Users, label: "More students served", value: "3x" },
]

export default function StudyAbroadPage() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
    <Navbar/>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="w-12 h-12 text-indigo-600 mr-4" />
              <Badge
                variant="secondary"
                className="text-sm font-hero bg-indigo-100 text-indigo-700 border-indigo-200"
              >
                Study Abroad Agencies
              </Badge>
            </div>

            <h1 className="font-hero text-5xl md:text-5l text-gray-900 mb-6 leading-tight">
              Transform How You Manage{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Student Documents
              </span>
            </h1>

            <p className="font-hero text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto leading-relaxed">
              Say Goodbye to Chaos
            </p>

            <p className="font-hero text-lg text-gra900 mb-12 max-w-3xl mx-auto leading-relaxed">
              Packets is designed to help study abroad agencies process documents faster, with fewer mistakes, and far
              less counsellor fatigue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/early-access">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Book Your Free Walkthrough
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
             </div>
          </div>
        </section>

        {/* What You'll Get Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-hero text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What you'll get with Packets
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: CheckSquare,
                  title: "Country-specific checklists",
                  description:
                    "Students only see what's required—based on their course, country, and intake. No more guesswork. No more outdated PDFs.",
                  gradient: "from-blue-500 to-indigo-600",
                },
                {
                  icon: Target,
                  title: "Guided document collection",
                  description:
                    "Step-by-step instructions built into each packet: where to get a birth certificate, who attests a bank letter, how to write an SOP.",
                  gradient: "from-indigo-500 to-purple-600",
                },
                {
                  icon: Users,
                  title: "Counselor review dashboard",
                  description:
                    "Review, flag, and approve student uploads in one place. Fewer WhatsApp threads. Zero inbox chaos.",
                  gradient: "from-purple-500 to-pink-600",
                },
                {
                  icon: RefreshCw,
                  title: "Real-time sync",
                  description: "Live updates mean everyone's on the same version—student, counselor, and backend team.",
                  gradient: "from-pink-500 to-red-600",
                },
                {
                  icon: Brain,
                  title: "AI-powered validation",
                  description:
                    "Auto-detects missing pages, wrong formats, and incomplete affidavits—before submission, not after.",
                  gradient: "from-red-500 to-orange-600",
                },
                {
                  icon: BarChart3,
                  title: "Completion visibility",
                  description:
                    "See which students are ready for filing, who's delayed, and what's pending—at a glance.",
                  gradient: "from-orange-500 to-yellow-600",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:bg-white/90"
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-hero text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="font-body text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Workflow Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-hero text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Example Workflow: Visa Filing Packet
              </h2>
              <p className="font-body text-lg text-gray-600 max-w-3xl mx-auto">
                See how Packets transforms the traditional document collection process into a streamlined, error-free
                workflow
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-indigo-300 to-purple-200 hidden md:block"></div>

              <div className="space-y-8">
                {workflowSteps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`relative flex items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} group`}
                    onMouseEnter={() => setHoveredStep(step.id)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    {/* Timeline dot */}
                    <div
                      className="absolute left-6 w-4 h-4 rounded-full border-4 border-white shadow-lg z-10 hidden md:block"
                      style={{ backgroundColor: hoveredStep === step.id ? step.color.replace("bg-", "#") : "#e5e7eb" }}
                    ></div>

                    {/* Content card */}
                    <Card
                      className={`flex-1 ${index % 2 === 0 ? "md:ml-16 md:mr-8" : "md:mr-16 md:ml-8"} 
                                   hover:shadow-2xl transition-all duration-500 transform hover:scale-105 
                                   ${hoveredStep === step.id ? "shadow-2xl scale-105 bg-gradient-to-br from-white to-blue-50" : "bg-white/80 backdrop-blur-sm"}`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center shadow-lg`}
                            >
                              <step.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <Badge variant="outline" className="text-xs font-medium mb-2">
                                Step {step.id}
                              </Badge>
                              <h3 className="font-hero text-lg font-bold text-gray-900">{step.title}</h3>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge className={`${step.color} text-white border-0 mb-2`}>{step.actor}</Badge>
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="w-4 h-4 mr-1" />
                              {step.time}
                            </div>
                          </div>
                        </div>

                        <p className="font-body text-gray-600 mb-4">{step.description}</p>

                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                          <p className="font-body text-sm text-gray-700">{step.details}</p>
                        </div>

                        {/* Progress bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium text-gray-700">Progress</span>
                            <span className="text-gray-500">{step.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full bg-gradient-to-r ${step.color.replace("bg-", "from-")} to-blue-400 transition-all duration-1000`}
                              style={{ width: hoveredStep === step.id ? `${step.progress}%` : "0%" }}
                            ></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Workflow Summary */}
              <div className="mt-16 grid md:grid-cols-4 gap-6">
                {outcomes.map((outcome, index) => (
                  <Card
                    key={index}
                    className="text-center p-6 bg-gradient-to-br from-white to-indigo-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <outcome.icon className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                    <div className="font-hero text-2xl font-bold text-gray-900 mb-1">{outcome.value}</div>
                    <div className="font-body text-sm text-gray-600">{outcome.label}</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-hero text-4xl md:text-5xl font-bold text-gray-900 mb-6">Outcomes for your agency</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                { icon: Shield, title: "Reduce document errors by 90%", color: "text-green-600" },
                { icon: Clock, title: "Save 40–60% of counselor time", color: "text-blue-600" },
                { icon: TrendingUp, title: "Improve visa acceptance rates", color: "text-purple-600" },
                { icon: Users, title: "Serve more students with fewer follow-ups", color: "text-indigo-600" },
                { icon: Zap, title: "Build a brand known for precision and speed", color: "text-orange-600" },
              ].map((outcome, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-white/70 backdrop-blur-sm border-0"
                >
                  <outcome.icon className={`w-12 h-12 ${outcome.color} mx-auto mb-4`} />
                  <h3 className="font-hero text-lg font-semibold text-gray-900">{outcome.title}</h3>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Designed For Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-hero text-4xl md:text-5xl font-bold text-gray-900 mb-6">Designed for</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  emoji: "🎓",
                  title: "Study abroad consultants handling high student volumes",
                  description: "Perfect for agencies managing 100+ students per intake cycle",
                },
                {
                  emoji: "🌍",
                  title: "Overseas education startups scaling quickly",
                  description: "Built to grow with your business from 10 to 1000+ students",
                },
                {
                  emoji: "🧑‍💼",
                  title: "Agencies managing multiple intakes and geographies",
                  description: "Handle different country requirements and seasonal workflows",
                },
              ].map((target, index) => (
                <Card
                  key={index}
                  className="p-8 text-center hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0"
                >
                  <div className="text-4xl mb-4">{target.emoji}</div>
                  <h3 className="font-hero text-xl font-bold text-gray-900 mb-4">{target.title}</h3>
                  <p className="font-body text-gray-600">{target.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-6">🔥</div>
            <h2 className="font-hero text-4xl md:text-5xl font-bold text-white mb-6">
              Don't Let Old Processes Hurt Your Growth
            </h2>
            <p className="font-body text-xl text-indigo-100 mb-8 leading-relaxed">
              Top-performing agencies are already streamlining operations with Packets.
              <br />
              Why stay stuck in document chaos when you can move faster, smarter, and cleaner?
            </p>

            <div className="space-y-4">
              <h3 className="font-modern text-2xl text-white font-semibold">👇 Book Your Free Walkthrough Now</h3>
              <p className="font-body text-indigo-100 mb-8">
                Let us show you how it works — no pressure, just possibilities
              </p>

              <Link href="/early-access">
                <Button
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Join the waitlist
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  )
}
