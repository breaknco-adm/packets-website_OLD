import Link from "next/link"
import { Scale, FileText, AlertTriangle, CheckCircle, XCircle, Mail } from "lucide-react"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Scale className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-purple-100">Please read these terms carefully before using our platform.</p>
            <p className="text-sm text-purple-200 mt-4">Last Updated: January 1, 2025</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and packets
                ("Company," "we," "us," or "our") concerning your access to and use of the packets.build website and
                platform (collectively, the "Services"). By accessing or using our Services, you agree to be bound by
                these Terms.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <div className="flex">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-yellow-800">
                    If you do not agree with these Terms, you must not access or use the Services.
                  </p>
                </div>
              </div>
            </section>

            {/* Eligibility */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Eligibility</h2>
              <p className="text-gray-700 mb-4">To use our Services, you must:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Be at least 18 years old or the age of majority in your jurisdiction</li>
                <li>Have the legal capacity to enter into a binding contract</li>
                <li>Not be prohibited from using the Services under applicable laws</li>
                <li>Provide accurate and complete registration information</li>
              </ul>
            </section>

            {/* User Accounts */}
            <section className="mb-12">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">User Accounts</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Account Creation</h3>
                  <p className="text-gray-700">
                    When you create an account, you agree to provide accurate, current, and complete information. You
                    are responsible for maintaining the confidentiality of your account credentials and for all
                    activities that occur under your account.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Account Security</h3>
                  <p className="text-gray-700 mb-2">You agree to:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Keep your password secure and confidential</li>
                    <li>Notify us immediately of any unauthorized access</li>
                    <li>Not share your account with others</li>
                    <li>Use strong authentication measures</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Account Termination</h3>
                  <p className="text-gray-700">
                    We reserve the right to suspend or terminate your account if you violate these Terms or engage in
                    fraudulent, abusive, or illegal activities.
                  </p>
                </div>
              </div>
            </section>

            {/* Acceptable Use */}
            <section className="mb-12">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Acceptable Use Policy</h2>
              </div>
              <p className="text-gray-700 mb-4">You agree not to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Use the Services for any illegal or unauthorized purpose</li>
                <li>Violate any applicable laws, regulations, or third-party rights</li>
                <li>Upload or transmit viruses, malware, or malicious code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the Services or servers</li>
                <li>Use automated tools to access or scrape the Services</li>
                <li>Impersonate another person or entity</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Upload content that infringes intellectual property rights</li>
                <li>Use the Services to compete with us or develop competing products</li>
              </ul>
            </section>

            {/* Subscription and Payment */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscription and Payment</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Subscription Plans</h3>
                  <p className="text-gray-700">
                    We offer various subscription plans with different features and pricing. By subscribing, you agree
                    to pay the applicable fees for your selected plan.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Billing</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Subscriptions are billed in advance on a recurring basis</li>
                    <li>You authorize us to charge your payment method automatically</li>
                    <li>All fees are non-refundable except as required by law</li>
                    <li>We may change pricing with 30 days' notice</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Cancellation</h3>
                  <p className="text-gray-700">
                    You may cancel your subscription at any time through your account settings. Cancellation will take
                    effect at the end of the current billing period.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Trial</h3>
                  <p className="text-gray-700">
                    We may offer free trial periods. If you don't cancel before the trial ends, you will be
                    automatically charged for the subscription.
                  </p>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Rights</h3>
                  <p className="text-gray-700">
                    All content, features, and functionality of the Services, including but not limited to text,
                    graphics, logos, icons, images, audio, video, software, and their arrangement, are owned by packets
                    or our licensors and are protected by intellectual property laws.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Your Content</h3>
                  <p className="text-gray-700">
                    You retain all rights to the content you upload or create using our Services. By using our Services,
                    you grant us a limited license to use, store, process, and display your content solely to provide
                    the Services to you.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Feedback</h3>
                  <p className="text-gray-700">
                    If you provide us with feedback or suggestions, we may use them without any obligation to compensate
                    you.
                  </p>
                </div>
              </div>
            </section>

            {/* Disclaimers */}
            <section className="mb-12">
              <div className="flex items-center mb-4">
                <XCircle className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Disclaimers</h2>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 p-6 space-y-3">
                <p className="text-gray-700">
                  <strong>THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND.</strong>
                </p>
                <p className="text-gray-700">
                  We disclaim all warranties, express or implied, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Warranties of merchantability and fitness for a particular purpose</li>
                  <li>Warranties of non-infringement</li>
                  <li>Warranties regarding accuracy, reliability, or completeness</li>
                  <li>Warranties that the Services will be uninterrupted or error-free</li>
                </ul>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <div className="bg-gray-50 border-l-4 border-gray-400 p-6">
                <p className="text-gray-700 mb-3">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, PACKETS SHALL NOT BE LIABLE FOR:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                  <li>Loss of profits, revenue, data, or business opportunities</li>
                  <li>Any damages arising from your use or inability to use the Services</li>
                  <li>Any damages caused by third parties or unauthorized access</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.
                </p>
              </div>
            </section>

            {/* Indemnification */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Indemnification</h2>
              <p className="text-gray-700">
                You agree to indemnify, defend, and hold harmless packets, its affiliates, officers, directors,
                employees, and agents from any claims, liabilities, damages, losses, and expenses, including reasonable
                attorneys' fees, arising out of or related to your use of the Services, violation of these Terms, or
                infringement of any third-party rights.
              </p>
            </section>

            {/* Dispute Resolution */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Informal Resolution</h3>
                  <p className="text-gray-700">
                    Before filing a claim, you agree to contact us and attempt to resolve the dispute informally.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Arbitration</h3>
                  <p className="text-gray-700">
                    Any disputes that cannot be resolved informally shall be resolved through binding arbitration in
                    accordance with the rules of the applicable arbitration association.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Class Action Waiver</h3>
                  <p className="text-gray-700">
                    You agree to resolve disputes on an individual basis and waive any right to participate in class
                    actions.
                  </p>
                </div>
              </div>
            </section>

            {/* Governing Law */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700">
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to
                its conflict of law provisions.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Changes to These Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these Terms at any time. We will notify you of material changes by
                posting the new Terms on this page and updating the "Last Updated" date. Your continued use of the
                Services after changes become effective constitutes acceptance of the modified Terms.
              </p>
            </section>

            {/* Severability */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Severability</h2>
              <p className="text-gray-700">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited
                or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force
                and effect.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
              </div>
              <p className="text-gray-700 mb-4">If you have any questions about these Terms, please contact us:</p>
              <div className="bg-gray-50 rounded-lg p-6 space-y-2">
                <p className="text-gray-700">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:legal@packets.build" className="text-purple-600 hover:underline">
                    legal@packets.build
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>Website:</strong>{" "}
                  <a href="https://packets.build" className="text-purple-600 hover:underline">
                    https://packets.build
                  </a>
                </p>
              </div>
            </section>

            {/* Back to Home */}
            <div className="text-center pt-8 border-t border-gray-200">
              <Link
                href="/"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
