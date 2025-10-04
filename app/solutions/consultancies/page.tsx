import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CtaFooter from "@/components/cta-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Shield,
  Users,
  TrendingUp,
  CheckCircle2,
  Zap,
  Clock,
  Target,
  FileCheck,
  BarChart3,
  Lock,
  HelpCircle,
} from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ConsultanciesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-hero text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-6">
              For Consultancies & Audit Partners
            </h1>
            <p className="font-body text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              <strong>Deliver ISO/SOC programs faster—with packets as your AI-assisted compliance workspace. </strong> 
              Increase throughput, standardize delivery, and delight clients and auditors — on
              <strong> weeks-level timelines</strong> for typical scopes.
            </p>
            <p className="font-body text-sm text-gray-500 mb-10 italic">
              *Actual timelines vary by scope & auditor availability
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/early-access">
                <Button
                  size="lg"
                  className="relative px-8 py-6 font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl overflow-hidden group text-lg"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Become a Partner
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                  </span>
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 border-2 border-gray-300 hover:border-purple-600 text-lg bg-transparent"
                >
                  Book a 20-min Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-hero text-4xl md:text-5xl  text-gray-900 mb-6">Why partner with Packets</h2>
            <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
              packets equips your consultants with an intelligent workspace that replaces spreadsheet sprawl and email
              chains with <strong>guided, audit-credible workflows</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-purple-200 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="font-atak text-xl font-bold text-gray-900 mb-3">Increase throughput</h3>
                <p className="font-body text-gray-600">
                  Scale your practice without adding headcount—handle more clients simultaneously.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-atak text-xl font-bold text-gray-900 mb-3">Reduce non-billable admin</h3>
                <p className="font-body text-gray-600">
                  Eliminate evidence wrangling, reminders, and manual formatting—focus on high-value work.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-indigo-200 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-indigo-600" />
                </div>
                <h3 className="font-atak text-xl font-bold text-gray-900 mb-3">Standardize delivery</h3>
                <p className="font-body text-gray-600">
                  Consistent approach across ISO 27001, SOC 2, GDPR, EU AI Act, and DPDP.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="font-atak text-xl font-bold text-gray-900 mb-3">Improve margins</h3>
                <p className="font-body text-gray-600">
                  Leverage reusable templates and cross-framework control mapping for efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-atak text-xl font-bold text-gray-900 mb-3">Delight auditors & clients</h3>
                <p className="font-body text-gray-600">
                  Organized workpapers and scoped auditor access make everyone's job easier.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-indigo-200 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-7 h-7 text-indigo-600" />
                </div>
                <h3 className="font-atak text-xl font-bold text-gray-900 mb-3">Better outcomes</h3>
                <p className="font-body text-gray-600">
                  Faster client readiness, cleaner handoffs, and happier teams while growing services revenue.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI-Assisted Tools Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200">
              AI-assisted, human-in-the-loop
            </Badge>
            <h2 className="font-hero text-4xl md:text-5xl  text-gray-900 mb-6">What your consultants get</h2>
            <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
              AI assists; your consultants remain in control. Every action is traceable with immutable audit trails.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-atak text-xl font-bold text-gray-900 mb-2">Gap Finder</h3>
                  <p className="font-body text-gray-600">
                    Analyzes existing controls vs. baselines; suggests mappings and next steps.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-atak text-xl font-bold text-gray-900 mb-2">Evidence Assistant</h3>
                  <p className="font-body text-gray-600">
                    Auto-requests evidence, pre-labels artifacts, checks completeness, flags drift.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-atak text-xl font-bold text-gray-900 mb-2">Drafting Copilot</h3>
                  <p className="font-body text-gray-600">
                    Proposes policy/control narratives and risk statements for review.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-atak text-xl font-bold text-gray-900 mb-2">Validator</h3>
                  <p className="font-body text-gray-600">
                    Checks alignment with framework clauses; highlights gaps early.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 md:col-span-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-atak text-xl font-bold text-gray-900 mb-2">Program Q&A</h3>
                  <p className="font-body text-gray-600">
                    Query your program (e.g., "Show evidence for A.12.6") and jump to the source instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Co-delivery Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-hero text-4xl md:text-5xl text-gray-900 mb-6">How co-delivery works</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-atak text-xl font-bold text-gray-900 mb-2">Scope & Baseline</h3>
                <p className="font-body text-gray-600">
                  We (optionally) join your kickoff to align scope, frameworks, and milestones.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-atak text-xl font-bold text-gray-900 mb-2">Guided Execution</h3>
                <p className="font-body text-gray-600">
                  Assign owners, run workflows, collect evidence automatically, validate in real time.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-atak text-xl font-bold text-gray-900 mb-2">Mock Assessments</h3>
                <p className="font-body text-gray-600">Unlimited dry-runs to prepare teams and tighten workpapers.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-atak text-xl font-bold text-gray-900 mb-2">Auditor Collaboration</h3>
                <p className="font-body text-gray-600">Provide scoped access and export clean, versioned evidence.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="font-atak text-xl font-bold text-gray-900 mb-2">Continuous Monitoring</h3>
                <p className="font-body text-gray-600">
                  Keep controls healthy post-audit; clients stay audit-ready year-round.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Models Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200 border-purple-200">
              India-first
            </Badge>
            <h2 className="font-hero text-4xl md:text-5xl  text-gray-900 mb-6">Partner models</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 hover:border-purple-300 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="font-atak text-2xl font-bold text-gray-900 mb-4">Referral</h3>
                <p className="font-body text-gray-600 mb-4">Introduce Packets, earn revenue share.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-gray-600">Simple introduction process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-gray-600">Recurring revenue share</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-300 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="font-atak text-2xl font-bold text-gray-900 mb-4">Reseller</h3>
                <p className="font-body text-gray-600 mb-4">
                  Package Packets with your services (INR pricing, GST-compliant invoicing).
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-gray-600">Bundle with consulting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-gray-600">India-compliant billing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-indigo-300 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="font-atak text-2xl font-bold text-gray-900 mb-4">Co-delivery / White-label</h3>
                <p className="font-body text-gray-600 mb-4">Operate under your brand with Packets powering delivery.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-gray-600">Your brand, our platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-gray-600">Full control & ownership</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-purple-300 to-blue-300 border-0 text-white">
            <CardContent className="p-8">
              <h3 className="font-atak text-2xl font-bold mb-4">Enablement included</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm">Playbooks & proposal inserts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm">Pricing guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm">Solution engineering for first 2-3 clients</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm">IST support windows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm">Co-marketing assets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm">DPDP readiness mapping for India</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-hero text-4xl md:text-5xl  text-gray-900 mb-6">
              Benefits for your clients (and your practice)
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="font-atak text-2xl font-bold text-gray-900 mb-6">Client Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-atak font-semibold text-gray-900">Weeks-level readiness</p>
                    <p className="font-body text-sm text-gray-600">
                      For typical scopes (depends on scope & auditor availability)
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-atak font-semibold text-gray-900">Continuous compliance</p>
                    <p className="font-body text-sm text-gray-600">Control health monitoring and drift alerts</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FileCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-atak font-semibold text-gray-900">Trust Center</p>
                    <p className="font-body text-sm text-gray-600">Speed vendor reviews and close deals faster</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body font-semibold text-gray-900">Multi-framework reuse</p>
                    <p className="font-body text-sm text-gray-600">Map once, comply across frameworks</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-atak text-2xl font-bold text-gray-900 mb-6">Practice Impact</h3>
              <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200">
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                      <p className="font-body text-gray-700">More parallel programs per consultant</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <BarChart3 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="font-body text-gray-700">Higher win rates with modern delivery model</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <p className="font-body text-gray-700">Cleaner audits with less rework</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-hero text-4xl md:text-5xl  text-gray-900 mb-6">What's included</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
              <p className="font-body text-gray-700">Visual workflows for controls, approvals, notifications</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
              <p className="font-body text-gray-700">Cross-framework control mapping and reusable templates</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
              <p className="font-body text-gray-700">Role-based access, approvals, immutable evidence trails</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
              <p className="font-body text-gray-700">Auditor views, scoped sharing, exportable workpapers</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
              <p className="font-body text-gray-700">Live dashboards (by framework, control, owner)</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
              <p className="font-body text-gray-700">SLAs, alerts, and continuous monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
              <Lock className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="font-hero text-4xl md:text-5xl text-gray-900 mb-6">Security & Trust</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="font-body text-gray-700">Single-tenant or regional data options (on request)</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="font-body text-gray-700">RBAC, SSO/SAML (roadmap), audit logs</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="font-body text-gray-700">Encryption at rest & in transit</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="font-body text-gray-700">Evidence integrity with versioning and tamper-evident trails</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-hero text-4xl md:text-5xl text-gray-900 mb-6">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white border border-gray-200 rounded-xl px-6">
              <AccordionTrigger className="font-body font-semibold text-lg hover:no-underline">
                Can we white-label Packets?
              </AccordionTrigger>
              <AccordionContent className="font-body text-gray-600">
                Yes—co-delivery and white-label options are available. You maintain full control of the client
                relationship while leveraging our platform.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white border border-gray-200 rounded-xl px-6">
              <AccordionTrigger className="font-body font-semibold text-lg hover:no-underline">
                Who owns the client relationship?
              </AccordionTrigger>
              <AccordionContent className="font-body text-gray-600">
                You do. We support your delivery and success while you maintain ownership of all client relationships.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white border border-gray-200 rounded-xl px-6">
              <AccordionTrigger className="font-body font-semibold text-lg hover:no-underline">
                How disruptive is the switch from spreadsheets?
              </AccordionTrigger>
              <AccordionContent className="font-body text-gray-600">
                Minimal. Import controls/evidence, assign owners, and go. We provide comprehensive enablement to ensure
                smooth transitions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white border border-gray-200 rounded-xl px-6">
              <AccordionTrigger className="font-body font-semibold text-lg hover:no-underline">
                Do you replace auditors?
              </AccordionTrigger>
              <AccordionContent className="font-body text-gray-600">
                No. We streamline prep and collaboration so audits move faster with fewer surprises. We complement, not
                replace, the audit process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white border border-gray-200 rounded-xl px-6">
              <AccordionTrigger className="font-body font-semibold text-lg hover:no-underline">
                How fast can clients get ready?
              </AccordionTrigger>
              <AccordionContent className="font-body text-gray-600">
                Most typical scopes reach readiness on weeks-level timelines; exact timelines depend on scope,
                integration depth, and auditor availability.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-hero text-4xl md:text-5xl text-white mb-6">
            Ready to scale your ISO/SOC practice?
          </h2>
          <p className="font-body text-xl text-white/90 mb-10">
            Become a Partner and launch your first client in a guided pilot.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link href="/early-access">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
                Become a Partner
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold bg-transparent"
              >
                Book a 20-min Demo
              </Button>
            </Link>
          </div>

          <p className="font-body text-white/80">
            Questions? Email us at{" "}
            <a href="mailto:admin@packets.build" className="underline hover:text-white">
              admin@packets.build
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  )
}
