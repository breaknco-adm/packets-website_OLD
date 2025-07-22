import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  ArrowRight,
  FileText,
  Receipt,
  DollarSign,
  Building2,
  BarChart3,
  Shield,
  CheckCircle,
  Clock,
  Users,
  TrendingUp,
  Target,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function FinancePage() {
  return (
    <div className="min-h-screen">
    <Navbar/>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-emerald-100 text-emerald-800 border-emerald-200">Finance Workflows</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Automate document-heavy finance workflows—
              <span className="text-emerald-600">accurate, fast, audit-ready</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Packets (currently in development) helps finance teams run high-trust, low-touch workflows for
              reimbursements, audits, vendor onboarding, and tax documentation—without chasing forms or sending
              reminders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/early-access">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg">
                  Join Waitlist
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(71,85,105,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(107,114,128,0.1),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What you'll get with Packets</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Audit Prep */}
            <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">📁 Audit prep, without the scramble</h3>
                <p className="text-gray-600 leading-relaxed">
                  Assign audit checklists to teams. Collect signed docs, approvals, receipts, and logs in one structured
                  flow. Everything's timestamped, nothing gets missed.
                </p>
              </CardContent>
            </Card>

            {/* Tax Form Collection */}
            <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Receipt className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🧾 Tax form collection & validation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Route 80G, 10F, PAN, and other tax forms to vendors or employees. Let AI check completeness, validity,
                  and flag missing fields—before Finance ever touches it.
                </p>
              </CardContent>
            </Card>

            {/* Reimbursement Workflows */}
            <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <DollarSign className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">💸 Reimbursement workflows</h3>
                <p className="text-gray-600 leading-relaxed">
                  Auto-generate and route expense claims with required proofs and policy validations. Approve and
                  archive in minutes.
                </p>
              </CardContent>
            </Card>

            {/* Vendor Onboarding */}
            <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🏦 Vendor onboarding documentation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Send vendor packets (bank details, GST, compliance docs) in one link. Validate inputs in real time.
                  Route for approval and signature.
                </p>
              </CardContent>
            </Card>

            {/* Real-time Dashboards */}
            <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">📊 Real-time dashboards</h3>
                <p className="text-gray-600 leading-relaxed">
                  Track document status across requests—submitted, flagged, approved, or pending. Send reminders with
                  one click.
                </p>
              </CardContent>
            </Card>

            {/* Fully Auditable */}
            <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🔐 Fully auditable</h3>
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
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(99,102,241,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_80%,rgba(168,85,247,0.1),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Example Workflow: Tax Document Collection
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-emerald-600 font-semibold text-sm">1</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">Assign "Q4 Tax Packet" to all active vendors</p>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-semibold text-sm">2</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">Vendors upload PAN, GST, and sign declaration</p>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-600 font-semibold text-sm">3</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">AI validates formatting + catches missing info</p>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-orange-600 font-semibold text-sm">4</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">Finance reviews flagged cases only</p>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-teal-600 font-semibold text-sm">5</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">Signed docs auto-archived + exported for filing</p>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 font-semibold text-sm">6</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">Dashboard shows completion rate + audit trail</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(245,158,11,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(249,115,22,0.1),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Outcomes for your finance team</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Reduce document chase time by 80%</h3>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cut form validation errors by 90%</h3>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Prepare audit documentation in hours—not weeks
                </h3>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Centralize everything with full traceability
                </h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Designed For Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(244,63,94,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(236,72,153,0.1),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Designed for</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  🏢 Finance teams at GCCs or multi-entity orgs
                </h3>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  📦 Procurement finance handling large vendor volumes
                </h3>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Receipt className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  🧾 Tax and compliance teams needing consistent documentation
                </h3>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  📈 CFOs and controllers scaling without chaos
                </h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-emerald-100 text-emerald-800 border-emerald-200">Early Access</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Packets is currently in development.</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Want to see how it'll streamline your finance operations?
          </p>
          <Link href="/early-access">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg">
              👉 Join the waitlist
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
