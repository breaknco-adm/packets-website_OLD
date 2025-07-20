import { Check, Shield, Headphones, Zap, Database, Users, Globe, Lock } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II compliance, SSO integration, and advanced security controls",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "24/7 priority support with dedicated customer success manager",
  },
  {
    icon: Zap,
    title: "Custom Integrations",
    description: "API access and custom integrations with your existing tools and systems",
  },
  {
    icon: Database,
    title: "Advanced Analytics",
    description: "Comprehensive reporting, analytics dashboard, and custom metrics",
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Advanced user management, role-based permissions, and team collaboration",
  },
  {
    icon: Lock,
    title: "Data Privacy",
    description: "GDPR, CCPA compliance with advanced data protection and encryption",
  },
]

const includedFeatures = [
  "Unlimited document workflows",
  "AI-powered form assistance",
  "Real-time validation and error checking",
  "Smart approvals and routing",
  "Built-in AI chatbot",
  "Audit trails and compliance reporting",
  "Custom branding and white-labeling",
  "Advanced workflow automation",
  "Priority feature requests",
  "Onboarding and training sessions",
]

export default function PricingFeatures() {
  return (
    <section className="py-20 gradient-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-body text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for Enterprise Scale
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
            Our enterprise solution includes all features and capabilities to handle your organization's document
            workflows at any scale.
          </p>
        </div>

        {/* Enterprise Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-body text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="font-body text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* What's Included */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="font-body text-2xl font-bold text-gray-900 mb-8 text-center">What's Included</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {includedFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="font-body text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
