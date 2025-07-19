"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Truck, Users, GraduationCap, DollarSign, ShoppingCart, ArrowRight } from "lucide-react"
import { useState } from "react"

const useCases = [
  {
    icon: Truck,
    title: "Travel & Logistics",
    description: "Streamline travel approvals and logistics workflows",
  },
  {
    icon: Users,
    title: "HR Operations",
    description: "Automate onboarding, leave requests, and HR processes",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Manage student applications and academic workflows",
  },
  {
    icon: DollarSign,
    title: "Finance",
    description: "Automate expense approvals and financial processes",
  },
  {
    icon: ShoppingCart,
    title: "Sales & Procurement",
    description: "Streamline sales contracts and procurement workflows",
  },
]

export default function Navbar() {
  const [isUseCasesOpen, setIsUseCasesOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/packets-logo.png" alt="Packets Logo" width={40} height={40} className="w-10 h-10" />
              <span className="font-brand font-normal text-2xl text-gray-900">Packets</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#product" className="font-body text-gray-600 hover:text-gray-900 font-medium">
              Product
            </Link>

            {/* Use Cases Dropdown - Horizontal Layout */}
            <div
              className="relative"
              onMouseEnter={() => setIsUseCasesOpen(true)}
              onMouseLeave={() => setIsUseCasesOpen(false)}
            >
              <button className="flex items-center space-x-1 font-body text-gray-600 hover:text-gray-900 font-medium">
                <span>Use Cases</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isUseCasesOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-white rounded-xl shadow-2xl border border-gray-100 p-6">
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {useCases.map((useCase, index) => (
                      <Link
                        key={index}
                        href={`/#${useCase.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors mb-3">
                          <useCase.icon className="w-6 h-6 text-primary-600" />
                        </div>
                        <h4 className="font-body font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                          {useCase.title}
                        </h4>
                        <p className="font-body text-xs text-gray-600 leading-relaxed">{useCase.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/pricing" className="font-body text-gray-600 hover:text-gray-900 font-medium">
              Pricing
            </Link>
            <Link href="/#faqs" className="font-body text-gray-600 hover:text-gray-900 font-medium">
              FAQs
            </Link>
            <Link href="/contact" className="font-body text-gray-600 hover:text-gray-900 font-medium">
              Contact Us
            </Link>
          </div>

          <Button className="demo-btn px-6 py-2 font-medium rounded-xl shadow">
            Get Early Access
            <ArrowRight className="arrow w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  )
}
