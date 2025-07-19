import { Rocket, Gift, Bell } from "lucide-react"

const expectations = [
  {
    icon: Rocket,
    title: "Early Access Launch",
    description:
      "Be the first to experience Packets with exclusive early access to all features and capabilities before the public launch.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Gift,
    title: "Earn Rewards",
    description:
      "Get special rewards, discounts, and exclusive perks for being an early adopter and providing valuable feedback.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Bell,
    title: "Product Updates",
    description:
      "Receive regular updates on new features, improvements, and be part of shaping the future of document workflows.",
    color: "bg-green-100 text-green-600",
  },
]

export default function WhatToExpect() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-body text-3xl md:text-4xl font-bold text-gray-900 mb-4">What to Expect</h2>
          <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto">
            Join our early access program and enjoy exclusive benefits as we build the future of document workflows
            together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expectations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="font-body text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="font-body text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="font-body text-blue-800 font-medium">
              🎉 Limited spots available! Join now to secure your early access and be part of the Packets journey from
              day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
