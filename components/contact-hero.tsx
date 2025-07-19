import { MessageCircle, Mail, Phone } from "lucide-react"

export default function ContactHero() {
  return (
    <section className="pt-24 pb-16 gradient-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-body text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">Get in Touch</h1>

        <p className="font-body text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Ready to transform your document workflows? We're here to help you get started with Packets and answer any
          questions you might have.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="font-body text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
            <p className="font-body text-gray-600">Get instant answers to your questions</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="font-body text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
            <p className="font-body text-gray-600">Detailed responses within 24 hours</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="font-body text-lg font-semibold text-gray-900 mb-2">Phone Call</h3>
            <p className="font-body text-gray-600">Schedule a call with our team</p>
          </div>
        </div>
      </div>
    </section>
  )
}
