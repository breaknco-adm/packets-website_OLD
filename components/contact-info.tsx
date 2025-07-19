import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react"

export default function ContactInfo() {
  return (
    <section className="py-20 gradient-bg-blue">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-body text-3xl md:text-4xl font-bold text-gray-900 mb-4">Other Ways to Reach Us</h2>
          <p className="font-body text-xl text-gray-600">Choose the method that works best for you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="font-body text-lg font-semibold text-gray-900 mb-3">Office Location</h3>
            <p className="font-body text-gray-600 mb-2">Made in India</p>
            <p className="font-body text-sm text-gray-500">Remote-first company with global reach</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="font-body text-lg font-semibold text-gray-900 mb-3">Phone Support</h3>
            <p className="font-body text-gray-600 mb-2">+91 98953 47638</p>
            <p className="font-body text-sm text-gray-500">Available during business hours</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="font-body text-lg font-semibold text-gray-900 mb-3">Email Support</h3>
            <p className="font-body text-gray-600 mb-2">admin@packets.build</p>
            <p className="font-body text-sm text-gray-500">We respond within 24 hours</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="font-body text-lg font-semibold text-gray-900 mb-3">Business Hours</h3>
            <p className="font-body text-gray-600 mb-2">Mon - Fri: 9:00 AM - 6:00 PM</p>
            <p className="font-body text-sm text-gray-500">IST (Indian Standard Time)</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="font-body text-lg font-semibold text-gray-900 mb-3">Global Support</h3>
            <p className="font-body text-gray-600 mb-2">Worldwide Coverage</p>
            <p className="font-body text-sm text-gray-500">Supporting teams across all time zones</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="font-body text-lg font-semibold text-gray-900 mb-3">Enterprise Sales</h3>
            <p className="font-body text-gray-600 mb-2">Dedicated Account Managers</p>
            <p className="font-body text-sm text-gray-500">For organizations with 100+ users</p>
          </div>
        </div>
      </div>
    </section>
  )
}
