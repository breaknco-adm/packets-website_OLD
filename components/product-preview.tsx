import Image from "next/image"

// const features = [
//   {
//     title: "Build Workflows Visually",
//     description:
//       "AI generates steps to automate control execution, evidence tasks, approvals, and notifications.",
//     image: "/images/ai-workflows.png",
//   },
//   {
//     title: "AI-Powered Compliance Assistant",
//     description:
//       "Your built-in expert that helps you close compliance gaps faster through real-time analysis.",
//     image: "/images/ai-assistance.jpg",
//   },
//   {
//     title: "Continuous Monitoring & Trust Portal",
//     description:
//       "Full visibility into your compliance posture with dashboards, reminders, and audit trails.",
//     image: "/images/tracking.jpg",
//   },
//   {
//     title: "Smart Validation Engine",
//     description:
//       "AI checks submissions for completeness and accuracy before you hit submit.",
//     image: "/images/validations.jpg",
//   },
// ]

const features = [
  {
    title: "Build Workflows Visually",
    description:
      "Design and automate your compliance processes in minutes. Our AI understands your control intent and builds entire workflows - from evidence collection to approvals - without a single line of code. Start with prebuilt templates, customize tasks by framework, and reuse workflows across teams to scale faster with full traceability.",
    image: "/images/ai-workflows.png",
  },
  {
    title: "AI-Powered Compliance Assistant",
    description:
      "Your always-on compliance partner that explains controls in plain language, highlights risks, and drafts policy updates instantly. The assistant analyzes past audits, detects control drift in real time, and recommends precise remediation steps — helping you close gaps faster and keep your programs audit-ready year-round.",
    image: "/images/ai-assistance.jpg",
  },
  {
    title: "Continuous Monitoring & Trust Portal",
    description:
      "Gain a live, single-pane view of your entire compliance posture. Track framework status, policy updates, and evidence submissions in real time. Automated reminders, risk scoring, and vendor monitoring ensure nothing slips through. Share progress securely through your external Trust Portal to build confidence with auditors and customers alike.",
    image: "/images/tracking.jpg",
  },
  {
    title: "Smart Validation Engine",
    description:
      "Reduce audit rework and manual review time with intelligent validation. The engine checks every submission for completeness, accuracy, and alignment with framework standards before it’s submitted. It flags inconsistencies, missing attachments, and outdated references automatically — so your compliance data stays clean, reliable, and ready for audit.",
    image: "/images/validations.jpg",
  },
]


export default function ProductPreview() {
  return (
    <section className="py-24" style={{ backgroundColor: "#8EAECB" }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-atak text-4xl md:text-5xl font-atak mb-4 text-black">
            Simplify security and compliance
          </h2>
          <p className="font-atak text-lg text-gray-700 max-w-2xl mx-auto">
            Comprehensive AI-powered tools that help you automate, monitor, and scale compliance effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10">
          {features.map((feature, index) => {
            const isLeft = index % 2 === 0
            return (
              <div
                key={index}
                className="relative group overflow-hidden rounded-3xl shadow-2xl"
              >
                {/* Image */}
                 <div className="overflow-hidden rounded-3xl">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={800}
                    height={400}
                    className={`w-full h-[600px] object-cover transform transition-transform duration-700 
                      ease-out group-hover:scale-125 ${
                      isLeft
                        ? "origin-left group-hover:-translate-x-3"
                        : "origin-right group-hover:translate-x-3"
                    }`}
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-8 text-white">
                    <h3 className="font-atak text-2xl mb-2">{feature.title}</h3>
                    <p className="font-atak text-sm text-gray-200">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
