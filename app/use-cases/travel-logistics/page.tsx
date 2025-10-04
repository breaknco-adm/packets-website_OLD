import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Plane,
  Clock,
  CheckCircle,
  Globe,
  Shield,
  ArrowRight,
  Zap,
  Target,
  TrendingUp,
  FileText,
  Upload,
  ListChecks,
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Travel & Logistics Document Automation | packets",
  description:
    "Streamline visa applications, travel permits, and logistics documentation with packets' AI-powered workflow automation. Reduce processing time by 85% and eliminate manual errors.",
  keywords:
    "travel document automation, visa application workflow, logistics documentation, travel permits, document processing, workflow automation",
  openGraph: {
    title: "Travel & Logistics Document Automation | packets",
    description: "Automate visa applications, travel permits, and logistics documentation with AI-powered workflows.",
    type: "website",
  },
}

export default function TravelLogisticsPage() {
  const coreCapabilities = [
    {
      icon: FileText,
      title: "Auto Form Completion",
      description:
        "Automatically fill visa applications, travel forms, and permits using existing employee data and smart field mapping",
    },
    {
      icon: Upload,
      title: "Document Upload & Verification",
      description:
        "Streamlined document collection with automatic verification of passport validity, photo requirements, and supporting documents",
    },
    {
      icon: Shield,
      title: "Real-time Validation",
      description:
        "Instant validation against embassy requirements, travel restrictions, and country-specific documentation standards",
    },
    {
      icon: ListChecks,
      title: "Smart Checklists",
      description:
        "Dynamic checklists that adapt based on destination country, visa type, and traveler profile to ensure nothing is missed",
    },
  ]

  const workflows = [
    {
      title: "Visa Application Processing",
      description: "Complete visa application workflow from initial request to embassy submission",
      features: [
        "Auto-populate forms with employee data from HR systems",
        "Upload and verify passport, photos, and supporting documents",
        "Validate requirements against destination country rules",
        "Generate country-specific application forms",
        "Create submission checklists and track progress",
        "Schedule embassy appointments and send reminders",
      ],
    },
    {
      title: "Business Travel Permits",
      description: "Streamline work authorization and business travel documentation",
      features: [
        "Collect travel purpose and duration details",
        "Auto-complete permit applications with company information",
        "Upload and verify business registration documents",
        "Validate permit requirements by destination",
        "Track application status and renewal dates",
        "Generate travel authorization letters",
      ],
    },
    {
      title: "Logistics & Shipping Documentation",
      description: "Automate customs forms, shipping manifests, and cargo documentation",
      features: [
        "Auto-fill customs declarations from shipment data",
        "Upload and verify product certificates and invoices",
        "Validate against import/export regulations",
        "Generate bills of lading and shipping manifests",
        "Create compliance checklists for different countries",
        "Track shipment documentation status",
      ],
    },
  ]

  const benefits = [
    {
      icon: Clock,
      title: "85% Faster Processing",
      description: "Reduce document processing time from weeks to days with automated form completion and validation",
    },
    {
      icon: CheckCircle,
      title: "99% Accuracy Rate",
      description: "Eliminate manual errors with AI-powered validation and country-specific requirement checks",
    },
    {
      icon: Shield,
      title: "Compliance Guaranteed",
      description:
        "Built-in validation ensures all documents meet embassy and regulatory requirements before submission",
    },
    {
      icon: Globe,
      title: "Multi-Country Support",
      description: "Handle documentation for 150+ countries with automated requirement updates and validation rules",
    },
  ]

  const useCaseStats = [
    { label: "Processing Time Reduction", value: "85%", icon: TrendingUp },
    { label: "Error Rate Decrease", value: "95%", icon: Target },
    { label: "Manual Work Eliminated", value: "90%", icon: Zap },
    { label: "Countries Supported", value: "150+", icon: Globe },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Blue Gradient */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
              <Plane className="w-4 h-4 mr-2" />
              Travel & Logistics
            </Badge>
            <h1 className="font-hero text-5xl md:text-6xl  mb-8">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x">
                Automate Travel Documentation with Smart Forms & Checklists
              </span>
            </h1>

            <p className="font-hero text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Streamline visa applications, travel permits, and logistics documentation with auto form completion, document verification, and intelligent validation. Reduce processing time by 85% while ensuring 100%
              compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
                    </div>
          </div>
        </div>
      </section>

      {/* Stats Section - White Background */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {useCaseStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="font-brand text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="font-body text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities Section - Purple Gradient */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-brand text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How packets Transforms Travel Documentation
            </h2>
            <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform handles the entire documentation workflow from form completion to final
              submission.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreCapabilities.map((capability, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-xl mb-4">
                    <capability.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="font-body text-lg font-semibold text-gray-900">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-body text-gray-600 text-sm leading-relaxed">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflows Section - Green Gradient */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-brand text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Pre-Built Travel Workflows</h2>
            <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
              Ready-to-use workflows that handle every aspect of travel and logistics documentation.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {workflows.map((workflow, index) => (
              <Card
                key={index}
                className="border-2 border-white/50 bg-white/80 backdrop-blur-sm hover:border-green-200 transition-all duration-300 shadow-lg"
              >
                <CardHeader>
                  <CardTitle className="font-body text-xl font-semibold text-gray-900 mb-2">{workflow.title}</CardTitle>
                  <p className="font-body text-gray-600 text-sm">{workflow.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {workflow.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <p className="font-body text-sm text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Orange Gradient */}
      <section className="py-16 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-brand text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose packets for Travel & Logistics?
            </h2>
            <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your travel documentation process with intelligent automation that ensures compliance and
              reduces processing time.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-xl mb-4">
                    <benefit.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle className="font-body text-lg font-semibold text-gray-900">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-body text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Examples - Cyan Gradient */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-brand text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Real-World Applications</h2>
            <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
              See how organizations use packets to streamline their travel and logistics operations.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 border-2 border-white/50 bg-white/80 backdrop-blur-sm shadow-lg">
              <h3 className="font-body text-2xl font-semibold text-gray-900 mb-6">Global Technology Company</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 text-sm font-bold">!</span>
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="font-body text-gray-600 text-sm">
                      Processing 500+ visa applications monthly for international employees took 3-4 weeks per
                      application. Manual form filling and document verification created bottlenecks and frequent
                      errors.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="font-body text-gray-600 text-sm">
                      Implemented packets' auto form completion and smart checklists. Forms now auto-populate from HR
                      data, documents are verified instantly, and country-specific requirements are validated
                      automatically.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-gray-900 mb-2">Results</h4>
                    <p className="font-body text-gray-600 text-sm">
                      Reduced processing time to 3-5 days, eliminated 95% of manual errors, and saving administrative costs. Employee satisfaction increased significantly.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-white/50 bg-white/80 backdrop-blur-sm shadow-lg">
              <h3 className="font-body text-2xl font-semibold text-gray-900 mb-6">International Logistics Firm</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 text-sm font-bold">!</span>
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="font-body text-gray-600 text-sm">
                      Managing customs documentation for 200+ daily shipments across 50 countries. Manual customs forms
                      and compliance checks caused delays and regulatory issues.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="font-body text-gray-600 text-sm">
                      Deployed packets for automated customs form generation and compliance validation. Smart checklists
                      ensure all required documents are collected and verified before shipment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-gray-900 mb-2">Results</h4>
                    <p className="font-body text-gray-600 text-sm">
                      Reduced customs processing time by 80%, eliminated compliance violations, and improved on-time
                      delivery rates by 25%. Saved 40 hours per week in manual documentation work.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark Background */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-brand text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Travel Documentation?
          </h2>
          <p className="font-body text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of organizations that have streamlined their travel and logistics processes with intelligent
            form completion, document verification, and smart checklists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/early-access">
              <Button
                size="lg"
                className="relative px-8 py-4 font-semibold text-black bg-white rounded-xl hover:bg-gray-100 transition-colors"
              >
                Get Early Access
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
                </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
