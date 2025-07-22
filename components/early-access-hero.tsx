import { Sparkles, Zap, Shield } from "lucide-react"

export default function EarlyAccessHero() {
  return (
    <section className="pt-24 pb-8 gradient-bg mb-5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span className="font-body">Limited Early Access</span>
          </div>
        </div>

        <h1 className="font-body text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">
          Get Early Access to <span className="font-brand text-gradient">Packets</span>
        </h1>

        <p className="font-body text-xl text-gray-600 mb-4 max-w-2xl mx-auto leading-relaxed">
          Be among the first to experience the future of document workflows. Join our exclusive early access program and
          help shape the product.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-5 bg-green-100 rounded-full flex items-center justify-center">
              <Zap className="w-5 h-5 text-green-600" />
            </div>
            <span className="font-body text-gray-700 font-medium">First to access new features</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-blue-600" />
            </div>
            <span className="font-body text-gray-700 font-medium">Priority support</span>
          </div>
        </div>
      </div>
    </section>
  )
}
