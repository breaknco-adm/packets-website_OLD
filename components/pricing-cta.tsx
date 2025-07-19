import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MessageCircle, FileText } from "lucide-react"

export default function PricingCTA() {
  return (
    <section className="py-20 gradient-bg-green">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-body text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Let's discuss your specific needs and create a custom pricing plan that works for your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="font-body text-lg font-semibold text-gray-900 mb-3">Schedule a Demo</h3>
            <p className="font-body text-gray-600 mb-4">
              See Packets in action with a personalized demo tailored to your use cases
            </p>
            <Button className="demo-btn w-full">
              Book Demo
              <ArrowRight className="arrow w-4 h-4" />
            </Button>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="font-body text-lg font-semibold text-gray-900 mb-3">Talk to Sales</h3>
            <p className="font-body text-gray-600 mb-4">
              Discuss your requirements and get a custom quote within 24 hours
            </p>
            <Button className="demo-btn w-full">
              Contact Sales
              <ArrowRight className="arrow w-4 h-4" />
            </Button>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="font-body text-lg font-semibold text-gray-900 mb-3">Request Proposal</h3>
            <p className="font-body text-gray-600 mb-4">
              Get a detailed proposal with pricing, implementation timeline, and ROI analysis
            </p>
            <Button className="demo-btn w-full">
              Get Proposal
              <ArrowRight className="arrow w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center">
          <h3 className="font-body text-2xl font-bold text-gray-900 mb-4">Need Help Choosing?</h3>
          <p className="font-body text-gray-600 mb-6 max-w-2xl mx-auto">
            Our team is here to help you understand how Packets can transform your document workflows. Reach out for a
            consultation and we'll create a solution that fits your needs perfectly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="demo-btn px-8 py-4 text-lg font-semibold rounded-xl">
              Get Custom Quote
              <ArrowRight className="arrow w-5 h-5" />
            </Button>
            <Button size="lg" className="neon-btn px-8 py-4 text-lg font-semibold rounded-xl">
              Call: +91 98953 47638
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
