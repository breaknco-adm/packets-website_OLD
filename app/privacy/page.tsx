import Link from "next/link"
import { Shield, Lock, Eye, UserCheck, FileText, Mail } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-blue-100">
              Your privacy is important to us. Learn how we collect, use, and protect your data.
            </p>
            <p className="text-sm text-blue-200 mt-4">Last Updated: January 1, 2025</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to packets ("we," "our," or "us"). We are committed to protecting your personal information and
                your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you use our document workflow automation platform at packets.build.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-12">
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Information We Collect</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                  <p className="text-gray-700 mb-2">
                    We collect personal information that you provide to us, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Name and contact information (email address, phone number)</li>
                    <li>Company name and business information</li>
                    <li>Account credentials (username and password)</li>
                    <li>Payment and billing information</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
                  <p className="text-gray-700 mb-2">When you use our platform, we automatically collect:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Device information (IP address, browser type, operating system)</li>
                    <li>Usage data (pages visited, features used, time spent)</li>
                    <li>Location data (general geographic location)</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Document Information</h3>
                  <p className="text-gray-700 mb-2">
                    As a document workflow platform, we process documents and related data that you upload or create,
                    including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Document content and metadata</li>
                    <li>Workflow configurations and templates</li>
                    <li>Collaboration and sharing data</li>
                    <li>Document processing history</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-12">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>
              <p className="text-gray-700 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your transactions and send related information</li>
                <li>Send administrative information, updates, and security alerts</li>
                <li>Respond to your comments, questions, and provide customer support</li>
                <li>Analyze usage patterns and optimize user experience</li>
                <li>Detect, prevent, and address technical issues and security threats</li>
                <li>Comply with legal obligations and enforce our terms</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section className="mb-12">
              <div className="flex items-center mb-4">
                <UserCheck className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Information Sharing and Disclosure</h2>
              </div>
              <p className="text-gray-700 mb-4">We may share your information in the following circumstances:</p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Providers</h3>
                  <p className="text-gray-700">
                    We work with third-party service providers who perform services on our behalf, such as hosting, data
                    analysis, payment processing, and customer service.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Transfers</h3>
                  <p className="text-gray-700">
                    In connection with any merger, sale of company assets, financing, or acquisition of all or a portion
                    of our business.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Legal Requirements</h3>
                  <p className="text-gray-700">
                    When required by law or to respond to legal process, protect our rights, or ensure the safety of our
                    users.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">With Your Consent</h3>
                  <p className="text-gray-700">
                    We may share your information for any other purpose with your explicit consent.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Data Security</h2>
              </div>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information,
                including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
              <p className="text-gray-700 mt-4">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we
                strive to protect your personal information, we cannot guarantee absolute security.
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
              <p className="text-gray-700 mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>
                  <strong>Access:</strong> Request a copy of the personal information we hold about you
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate or incomplete information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal information
                </li>
                <li>
                  <strong>Portability:</strong> Request transfer of your data to another service provider
                </li>
                <li>
                  <strong>Objection:</strong> Object to processing of your personal information
                </li>
                <li>
                  <strong>Restriction:</strong> Request restriction of processing your personal information
                </li>
                <li>
                  <strong>Withdraw Consent:</strong> Withdraw consent for processing where consent was the basis
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise these rights, please contact us at{" "}
                <a href="mailto:privacy@packets.build" className="text-blue-600 hover:underline">
                  privacy@packets.build
                </a>
                .
              </p>
            </section>

            {/* Data Retention */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Retention</h2>
              <p className="text-gray-700">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this
                Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need
                your information, we will securely delete or anonymize it.
              </p>
            </section>

            {/* International Transfers */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
              <p className="text-gray-700">
                Your information may be transferred to and processed in countries other than your country of residence.
                These countries may have different data protection laws. We ensure appropriate safeguards are in place
                to protect your information in accordance with this Privacy Policy.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-700">
                Our services are not intended for children under 16 years of age. We do not knowingly collect personal
                information from children. If you believe we have collected information from a child, please contact us
                immediately.
              </p>
            </section>

            {/* Changes to Policy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this
                Privacy Policy periodically for any changes.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
              </div>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 space-y-2">
                <p className="text-gray-700">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:privacy@packets.build" className="text-blue-600 hover:underline">
                    privacy@packets.build
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>Website:</strong>{" "}
                  <a href="https://packets.build" className="text-blue-600 hover:underline">
                    https://packets.build
                  </a>
                </p>
              </div>
            </section>

            {/* Back to Home */}
            <div className="text-center pt-8 border-t border-gray-200">
              <Link
                href="/"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
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
