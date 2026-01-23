"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ChevronDown,
  Truck,
  Users,
  GraduationCap,
  DollarSign,
  ShoppingCart,
  ArrowRight,
  BookOpen,
  Building2,
} from "lucide-react"
import { useState } from "react"

const useCases = [
  {
    icon: Truck,
    title: "Travel & Logistics",
    description: "Streamline visa applications and permits workflows",
    href: "/use-cases/travel-logistics",
  },
  {
    icon: Users,
    title: "HR Operations",
    description: "Automate document workflows for employee onboarding",
    href: "/use-cases/hr-operations",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Manage student applications and academic workflows",
    href: "/use-cases/education",
  },
  {
    icon: BookOpen,
    title: "Study Abroad",
    description: "Transform student document management for agencies",
    href: "/use-cases/study-abroad",
  },
  {
    icon: DollarSign,
    title: "Finance",
    description: "Loan application and audit workflows",
    href: "/use-cases/finance",
  },
  {
    icon: ShoppingCart,
    title: "Sales & Procurement",
    description: "Streamline sales contracts and procurement workflows",
    href: "/use-cases/sales-procurement",
  },
]

const solutions = [
  {
    icon: Building2,
    title: "Consultancies",
    description: "Deliver ISO/SOC programs faster with AI-assisted compliance",
    href: "/solutions/consultancies",
  },
]

export default function Navbar() {
  const [isUseCasesOpen, setIsUseCasesOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (menu: "useCases" | "solutions") => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
    if (menu === "useCases") {
      setIsUseCasesOpen(true)
      setIsSolutionsOpen(false)
    } else {
      setIsSolutionsOpen(true)
      setIsUseCasesOpen(false)
    }
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsUseCasesOpen(false)
      setIsSolutionsOpen(false)
    }, 300)
    setHoverTimeout(timeout)
  }

  const handleDropdownMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
  }

  const handleDropdownMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsUseCasesOpen(false)
      setIsSolutionsOpen(false)
    }, 300)
    setHoverTimeout(timeout)
  }

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-300 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/packets-logo.png" alt="packets Logo" width={40} height={60} className="w-10 h-10" />
              <span className="font-display text-2xl text-primary bg-clip-text">packets</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#product" className="font-body text-gray-600 hover:text-gray-900 font-medium">
              Product
            </Link>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("solutions")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 font-body text-gray-600 hover:text-gray-900 font-medium">
                <span>Solutions</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isSolutionsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isSolutionsOpen && (
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[400px] bg-white rounded-xl shadow-2xl border border-gray-100 p-6 z-50"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <div className="space-y-2">
                    {solutions.map((solution, index) => (
                      <Link
                        key={index}
                        href={solution.href}
                        className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                        onClick={() => setIsSolutionsOpen(false)}
                      >
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors flex-shrink-0">
                          <solution.icon className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-body font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-1">
                            {solution.title}
                          </h4>
                          <p className="font-body text-sm text-gray-600 leading-relaxed">{solution.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Use Cases Dropdown - Hidden for now */}
            <div
              className="relative hidden"
              onMouseEnter={() => handleMouseEnter("useCases")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 font-body text-gray-600 hover:text-gray-900 font-medium">
                <span>Use Cases</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isUseCasesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isUseCasesOpen && (
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[900px] bg-white rounded-xl shadow-2xl border border-gray-100 p-6 z-50"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {useCases.map((useCase, index) => (
                      <Link
                        key={index}
                        href={useCase.href}
                        className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                        onClick={() => setIsUseCasesOpen(false)}
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
            <Link href="/contact" className="font-body text-gray-600 hover:text-gray-900 font-medium">
              Contact Us
            </Link>
          </div>

          <Link href="/early-access">
            <Button
              size="lg"
              className="relative px-6 py-3 font-semibold text-white bg-black rounded-xl overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Early Access
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                  <ArrowRight className="w-5 h-5" />
                </span>
              </span>
              {/* Animated shimmer border */}
              <span className="absolute inset-0 rounded-xl border border-transparent group-hover:border-white/20">
                <span className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-60 blur-sm animate-border-glow" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
