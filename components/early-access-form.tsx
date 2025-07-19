"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, CheckCircle } from "lucide-react"

const taskOptions = [
  {
    value: "visa-applications",
    label: "Preparing and submitting visa applications for international travel (Travel & Logistics)",
    category: "Travel & Logistics",
  },
  {
    value: "employee-onboarding",
    label: "Automating document workflows for new employee onboarding (HR Operations)",
    category: "HR Operations",
  },
  {
    value: "student-admission",
    label: "Assisting students with admission documentation workflows (Education)",
    category: "Education",
  },
  {
    value: "student-onboarding",
    label: "Automating onboarding paperwork for new students (Education)",
    category: "Education",
  },
  {
    value: "education-compliance",
    label: "Managing compliance documentation for education regulations (Education)",
    category: "Education",
  },
  {
    value: "audit-preparation",
    label: "Preparing and organizing documents for audits (Finance)",
    category: "Finance",
  },
  {
    value: "tax-forms",
    label: "Gathering and validating tax-related forms (Finance)",
    category: "Finance",
  },
  {
    value: "sales-proposals",
    label: "Creating and sending sales proposals with standardized templates (Sales & Procurement)",
    category: "Sales & Procurement",
  },
  {
    value: "procurement-contracts",
    label: "Drafting and managing procurement contracts with vendors (Sales & Procurement)",
    category: "Sales & Procurement",
  },
]

export default function EarlyAccessForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    tasks: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      tasks: value,
    })
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-50 rounded-2xl p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="font-body text-2xl font-bold text-gray-900 mb-4">Welcome to Early Access!</h2>
            <p className="font-body text-gray-600 mb-6">
              Thank you for joining our early access program. We'll be in touch soon with your access details and next
              steps.
            </p>
            <p className="font-body text-sm text-gray-500">Check your email for a confirmation message.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl shadow-xl border border-gray-100 p-8 bg-sidebar-border">
          <h2 className="font-body text-2xl font-bold text-gray-900 mb-8 text-center">Join Early Access Program</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="fullName" className="font-body text-sm font-medium text-gray-700 mb-2 block">
                Full Name *
              </Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="font-body w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <Label htmlFor="email" className="font-body text-sm font-medium text-gray-700 mb-2 block">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="font-body w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <Label htmlFor="tasks" className="font-body text-sm font-medium text-gray-700 mb-2 block">
                What tasks would you like Packets to handle? *
              </Label>
              <Select value={formData.tasks} onValueChange={handleSelectChange} required>
                <SelectTrigger className="font-body w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-auto min-h-[48px]">
                  <SelectValue placeholder="Select a task you'd like Packets to handle" />
                </SelectTrigger>
                <SelectContent className="font-body max-h-[300px]">
                  {taskOptions.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      className="py-3 px-4 text-sm leading-relaxed whitespace-normal"
                    >
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-900">{option.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              disabled={isLoading || !formData.fullName || !formData.email || !formData.tasks}
              className="demo-btn w-full px-8 py-4 text-lg font-semibold rounded-xl"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Submitting...</span>
                </div>
              ) : (
                <>
                  Join Early Access
                  <ArrowRight className="arrow w-5 h-5" />
                </>
              )}
            </Button>
          </form>

          <p className="font-body text-xs text-gray-500 text-center mt-6">
            By submitting this form, you agree to receive updates about Packets and our early access program.
          </p>
        </div>
      </div>
    </section>
  )
}
