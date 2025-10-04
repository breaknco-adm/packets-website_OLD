"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How is pricing determined?",
    answer:
      "Our pricing is based on several factors including team size, document volume, required integrations, and specific feature needs. We work with you to create a custom plan that fits your budget and requirements.",
  },
  {
    question: "Is there a minimum commitment?",
    answer:
      "We offer flexible contract terms ranging from monthly to annual commitments. Annual contracts typically receive better pricing and additional benefits like priority support and feature requests.",
  },
  {
    question: "What's included in the setup process?",
    answer:
      "Every enterprise customer receives dedicated onboarding support, including system setup, team training, workflow configuration, and integration assistance. Our customer success team ensures smooth deployment.",
  },
  {
    question: "Can we integrate with our existing systems?",
    answer:
      "Yes, packets offers extensive API access and can integrate with most enterprise systems including CRM, ERP, HRIS, and document management platforms. Custom integrations are available as part of enterprise plans.",
  },
  {
    question: "What security and compliance features are included?",
    answer:
      "All enterprise plans include SOC 2 Type II compliance, SSO integration, advanced encryption, audit trails, and data residency options. We also support GDPR, CCPA, and industry-specific compliance requirements.",
  },
  {
    question: "How does support work?",
    answer:
      "Enterprise customers receive 24/7 priority support with guaranteed response times, a dedicated customer success manager, and direct access to our engineering team for complex issues or feature requests.",
  },
]

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 gradient-bg-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-body text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="font-body text-xl text-gray-600">Common questions about our enterprise pricing and features</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/90 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-body text-lg font-semibold text-gray-900">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="font-body text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
