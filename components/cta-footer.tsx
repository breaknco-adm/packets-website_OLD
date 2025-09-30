import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CTAFooter() {
  return (
    <section className="py-20 gradient-bg bg-slate-400">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ready to turn compliance into a growth engine?        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Get early access to see how Packets can streamline compliance and save your team time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/early-access">
            <Button size="lg" className="demo-btn px-8 py-4 text-lg font-semibold rounded-xl">
              Get Early Access
              <ArrowRight className="arrow w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
