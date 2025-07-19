import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Building2, Zap } from "lucide-react"

export default function PricingHero() {
  return (
    <section className="pt-24 pb-16 gradient-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-body text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Enterprise Pricing
        </h1>

        <p className="font-body text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          We offer customized pricing plans tailored to your organization's specific needs and scale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="font-body text-lg font-semibold text-gray-900 mb-2">Team Size</h3>
            <p className="font-body text-gray-600">Pricing scales with your team size and usage requirements</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="font-body text-lg font-semibold text-gray-900 mb-2">Organization Needs</h3>
            <p className="font-body text-gray-600">Custom features and integrations based on your workflows</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="font-body text-lg font-semibold text-gray-900 mb-2">Usage Scale</h3>
            <p className="font-body text-gray-600">Flexible pricing that grows with your document volume</p>
          </div>
        </div>

        <Button size="lg" className="demo-btn px-8 py-4 text-lg font-semibold rounded-xl">
          Get Custom Quote
          <ArrowRight className="arrow w-5 h-5" />
        </Button>
      </div>
    </section>
  )
}
