import Link from "next/link"
import { Cookie, Settings, BarChart, Target, Mail } from "lucide-react"

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Cookie className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-xl text-orange-100">
              Learn about how we use cookies and similar technologies on our platform.
            </p>
            <p className="text-sm text-orange-200 mt-4">Last Updated: January 1, 2025</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies are small text files that are placed on your device when you visit a website. They help the
                website recognize your device and remember information about your visit, such as your preferences and
                settings.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This Cookie Policy explains how Packets ("we," "us," or "our") uses cookies and similar tracking
                technologies on our website at packets.build (the "Site").
              </p>
            </section>

            {/* Types of Cookies */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>

              <div className="space-y-6">
                {/* Essential Cookies */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <div className="flex items-center mb-3">
                    <Settings className="w-6 h-6 text-orange-600 mr-3" />
                    <h3 className="text-2xl font-semibold text-gray-900">Essential Cookies</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    These cookies are necessary for the Site to function properly. They enable basic functions like page
                    navigation, access to secure areas, and authentication.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Examples:</strong>
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-4">
                      <li>Session management cookies</li>
                      <li>Authentication tokens</li>
                      <li>Security cookies</li>
                      <li>Load balancing cookies</li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-3">
                      <strong>Duration:</strong> Session or up to 1 year
                    </p>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex items-center mb-3">
                    <BarChart className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-semibold text-gray-900">Analytics Cookies</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    These cookies help us understand how visitors interact with our Site by collecting and reporting
                    information anonymously. This helps us improve our Site and Services.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Examples:</strong>
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-4">
                      <li>Google Analytics</li>
                      <li>Page view tracking</li>
                      <li>User behavior analytics</li>
                      <li>Traffic source tracking</li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-3">
                      <strong>Duration:</strong> Up to 2 years
                    </p>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="border-l-4 border-green-500 pl-6">
                  <div className="flex items-center mb-3">
                    <Settings className="w-6 h-6 text-green-600 mr-3" />
                    <h3 className="text-2xl font-semibold text-gray-900">Functional Cookies</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    These cookies enable enhanced functionality and personalization, such as remembering your
                    preferences and settings.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Examples:</strong>
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-4">
                      <li>Language preferences</li>
                      <li>Theme settings (dark/light mode)</li>
                      <li>Region settings</li>
                      <li>User interface preferences</li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-3">
                      <strong>Duration:</strong> Up to 1 year
                    </p>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="border-l-4 border-purple-500 pl-6">
                  <div className="flex items-center mb-3">
                    <Target className="w-6 h-6 text-purple-600 mr-3" />
                    <h3 className="text-2xl font-semibold text-gray-900">Marketing Cookies</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    These cookies track your activity across websites to deliver personalized advertisements and measure
                    advertising campaign effectiveness.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Examples:</strong>
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-4">
                      <li>Google Ads conversion tracking</li>
                      <li>Facebook Pixel</li>
                      <li>LinkedIn Insight Tag</li>
                      <li>Retargeting pixels</li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-3">
                      <strong>Duration:</strong> Up to 2 years
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Third-Party Cookies */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">
                We use services from third-party providers who may set cookies on your device. These include:
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Service Provider
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Purpose
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Privacy Policy
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Google Analytics</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Website analytics and reporting</td>
                      <td className="px-6 py-4 text-sm">
                        <a
                          href="https://policies.google.com/privacy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-600 hover:underline"
                        >
                          View Policy
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Google Ads</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Advertising and conversion tracking</td>
                      <td className="px-6 py-4 text-sm">
                        <a
                          href="https://policies.google.com/privacy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-600 hover:underline"
                        >
                          View Policy
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Facebook</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Social media integration and advertising</td>
                      <td className="px-6 py-4 text-sm">
                        <a
                          href="https://www.facebook.com/privacy/policy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-600 hover:underline"
                        >
                          View Policy
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">LinkedIn</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Professional networking and advertising</td>
                      <td className="px-6 py-4 text-sm">
                        <a
                          href="https://www.linkedin.com/legal/privacy-policy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-600 hover:underline"
                        >
                          View Policy
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Managing Cookies */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Manage Cookies</h2>
              <p className="text-gray-700 mb-4">You have several options for managing cookies:</p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Browser Settings</h3>
                  <p className="text-gray-700 mb-3">
                    Most browsers allow you to control cookies through their settings. You can:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Block all cookies</li>
                    <li>Block third-party cookies only</li>
                    <li>Delete cookies after each browsing session</li>
                    <li>Accept cookies from specific websites</li>
                  </ul>
                  <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <p className="text-sm text-yellow-800">
                      <strong>Note:</strong> Blocking all cookies may prevent you from using certain features of our
                      Site.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Browser-Specific Instructions</h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://support.google.com/chrome/answer/95647"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:underline"
                      >
                        Google Chrome
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:underline"
                      >
                        Mozilla Firefox
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:underline"
                      >
                        Safari
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:underline"
                      >
                        Microsoft Edge
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Opt-Out Tools</h3>
                  <p className="text-gray-700 mb-3">
                    You can opt out of interest-based advertising from participating companies:
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://optout.aboutads.info/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:underline"
                      >
                        Digital Advertising Alliance (DAA) Opt-Out
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://optout.networkadvertising.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:underline"
                      >
                        Network Advertising Initiative (NAI) Opt-Out
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tools.google.com/dlpage/gaoptout"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:underline"
                      >
                        Google Analytics Opt-Out Browser Add-on
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Do Not Track */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Do Not Track Signals</h2>
              <p className="text-gray-700">
                Some browsers include a "Do Not Track" (DNT) feature that signals websites that you do not want to be
                tracked. Currently, there is no industry standard for how to respond to DNT signals. We do not currently
                respond to DNT signals, but we are committed to respecting your privacy choices.
              </p>
            </section>

            {/* Updates to Policy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Updates to This Cookie Policy</h2>
              <p className="text-gray-700">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal,
                operational, or regulatory reasons. We will notify you of any material changes by posting the updated
                policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
              </div>
              <p className="text-gray-700 mb-4">
                If you have questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 space-y-2">
                <p className="text-gray-700">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:privacy@packets.build" className="text-orange-600 hover:underline">
                    privacy@packets.build
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>Website:</strong>{" "}
                  <a href="https://packets.build" className="text-orange-600 hover:underline">
                    https://packets.build
                  </a>
                </p>
              </div>
            </section>

            {/* Back to Home */}
            <div className="text-center pt-8 border-t border-gray-200">
              <Link
                href="/"
                className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors"
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
