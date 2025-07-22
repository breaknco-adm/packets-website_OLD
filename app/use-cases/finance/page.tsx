import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Receipt,
  CreditCard,
  Building2,
  BarChart3,
  Shield,
  CheckCircle,
  Users,
  TrendingUp,
  Clock,
  Target,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function FinancePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-emerald-100 text-emerald-800 border-emerald-200">Finance Operations</Badge>
            <h1 className="font-hero text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Automate document-heavy finance workflows—
              <span className="text-emerald-600">accurate, fast, audit-ready</span>
            </h1>
            <p className="font-modern text-xl text-gray-600 mb-8 leading-relaxed">
              Packets (currently in development) helps finance teams run high-trust, low-touch workflows for
              reimbursements, audits, vendor onboarding, and tax documentation—without chasing forms or sending
              reminders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/early-access">
                <Button
                  size="lg"
                  className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl"
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-hero text-4xl font-bold text-gray-900 mb-4">What you'll get with Packets</h2>
            <p className="font-modern text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline your finance operations with intelligent automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
                  <FileText className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-hero text-xl font-bold text-gray-900 mb-3">📁 Audit prep, without the scramble</h3>
                <p className="text-gray-600 leading-relaxed">
                  Assign audit checklists to teams. Collect signed docs, approvals, receipts, and logs in one structured
                  flow. Everything's timestamped, nothing gets missed.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <Receipt className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-hero text-xl font-bold text-gray-900 mb-3">🧾 Tax form collection & validation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Route 80G, 10F, PAN, and other tax forms to vendors or employees. Let AI check completeness, validity,
                  and flag missing fields—before Finance ever touches it.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                  <CreditCard className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-hero text-xl font-bold text-gray-900 mb-3">💸 Reimbursement workflows</h3>
                <p className="text-gray-600 leading-relaxed">
                  Auto-generate and route expense claims with required proofs and policy validations. Approve and
                  archive in minutes.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors">
                  <Building2 className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-hero text-xl font-bold text-gray-900 mb-3">🏦 Vendor onboarding documentation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Send vendor packets (bank details, GST, compliance docs) in one link. Validate inputs in real time.
                  Route for approval and signature.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors">
                  <BarChart3 className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-hero text-xl font-bold text-gray-900 mb-3">📊 Real-time dashboards</h3>
                <p className="text-gray-600 leading-relaxed">
                  Track document status across requests—submitted, flagged, approved, or pending. Send reminders with
                  one click.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors">
                  <Shield className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="font-hero text-xl font-bold text-gray-900 mb-3">🔐 Fully auditable</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every form, signature, and action logged. Filter by user, date, or workflow. Always ready for audits
                  or board reviews.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Example Workflow Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-hero text-4xl font-bold text-gray-900 mb-4">
              Example Workflow: Tax Document Collection
            </h2>
            <p className="font-modern text-xl text-gray-600 max-w-3xl mx-auto">
              See how Packets streamlines complex finance processes
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                'Assign "Q4 Tax Packet" to all active vendors',
                "Vendors upload PAN, GST, and sign declaration",
                "AI validates formatting + catches missing info",
                "Finance reviews flagged cases only",
                "Signed docs auto-archived + exported for filing",
                "Dashboard shows completion rate + audit trail",
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg"
                >
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-600 font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="font-modern text-lg text-gray-700 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-hero text-4xl font-bold text-gray-900 mb-4">Outcomes for your finance team</h2>
            <p className="font-modern text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable improvements in efficiency and accuracy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center group hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                  <Clock className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-hero text-2xl font-bold text-emerald-600 mb-2">80%</h3>
                <p className="font-modern text-gray-700 font-medium">Reduce document chase time</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-hero text-2xl font-bold text-blue-600 mb-2">90%</h3>
                <p className="font-modern text-gray-700 font-medium">Cut form validation errors</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-hero text-2xl font-bold text-purple-600 mb-2">Hours</h3>
                <p className="font-modern text-gray-700 font-medium">Prepare audit documentation in hours—not weeks</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition-colors">
                  <Target className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-hero text-2xl font-bold text-teal-600 mb-2">100%</h3>
                <p className="font-modern text-gray-700 font-medium">Centralize everything with full traceability</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Designed For Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-hero text-4xl font-bold text-gray-900 mb-4">Designed for</h2>
            <p className="font-modern text-xl text-gray-600 max-w-3xl mx-auto">
              Finance teams that need to scale without chaos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center group hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <Building2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-hero text-lg font-bold text-gray-900 mb-3">🏢 Finance teams at GCCs</h3>
                <p className="font-modern text-gray-600 text-sm">or multi-entity orgs</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                  <Users className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-hero text-lg font-bold text-gray-900 mb-3">📦 Procurement finance</h3>
                <p className="font-modern text-gray-600 text-sm">handling large vendor volumes</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                  <FileText className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-hero text-lg font-bold text-gray-900 mb-3">🧾 Tax and compliance teams</h3>
                <p className="font-modern text-gray-600 text-sm">needing consistent documentation</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition-colors">
                  <BarChart3 className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-hero text-lg font-bold text-gray-900 mb-3">📈 CFOs and controllers</h3>
                <p className="font-modern text-gray-600 text-sm">scaling without chaos</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-hero text-4xl font-bold mb-6">Early access</h2>
          <p className="font-modern text-xl text-gray-300 mb-4">Packets is currently in development.</p>
          <p className="font-modern text-lg text-gray-400 mb-8">
            Want to see how it'll streamline your finance operations?
          </p>
          <Link href="/early-access">
            <Button
              size="lg"
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl"
            >
              👉 Join the waitlist
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
