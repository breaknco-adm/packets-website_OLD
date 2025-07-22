"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Loader2 } from "lucide-react"

const taskOptions = [
  "Travel visa applications and permits",
  "Employee onboarding and HR documentation",
  "Student applications and academic workflows",
  "Audit preparation and compliance documentation",
  "Tax form collection and validation",
  "Vendor onboarding and procurement workflows",
  "Reimbursement and expense management",
  "Other - Let me describe my use case....",
]

export default function EarlyAccessForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    task: "",
    customTaskDetails: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      // Clear custom task details if user changes away from "Other"
      ...(name === "task" && value !== "Other - Let me describe my use case...." ? { customTaskDetails: "" } : {}),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.company || !formData.role || !formData.task) {
      alert("Please fill in all required fields")
      return
    }

    // Additional validation for custom task details when "Other" is selected
    if (formData.task === "Other - Let me describe my use case...." && !formData.customTaskDetails.trim()) {
      alert("Please describe your custom use case")
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto backdrop-blur-sm bg-white/90 border-white/20 shadow-2xl">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank you for your interest!</h3>
          <p className="text-gray-600 mb-6">
            We've received your request for early access. Our team will review your use case and get back to you soon
            with next steps.
          </p>
          <Badge className="bg-blue-100 text-blue-800 border-blue-200">You're on the waitlist! 🎉</Badge>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto backdrop-blur-sm bg-white/90 border-white/20 shadow-2xl">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl font-bold text-gray-900">Get Early Access</CardTitle>
        <CardDescription className="text-gray-600">
          Join the waitlist to be among the first to experience Packets when it launches.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8 pt-0">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Phone Number *
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                Company *
              </Label>
              <Input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                className="w-full"
                placeholder="Enter your company name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role" className="text-sm font-medium text-gray-700">
                Role *
              </Label>
              <Input
                id="role"
                name="role"
                type="text"
                value={formData.role}
                onChange={handleChange}
                className="w-full"
                placeholder="Enter your job title"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="task" className="text-sm font-medium text-gray-700">
              Primary Task/Workflow *
            </Label>
            <select
              id="task"
              name="task"
              value={formData.task}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select your primary use case</option>
              {taskOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Conditional Custom Task Details */}
          {formData.task === "Other - Let me describe my use case...." && (
            <div className="space-y-2">
              <Label htmlFor="customTaskDetails" className="text-sm font-medium text-gray-700">
                Describe Your Use Case *
              </Label>
              <Textarea
                id="customTaskDetails"
                name="customTaskDetails"
                value={formData.customTaskDetails}
                onChange={handleChange}
                className="w-full resize-y"
                rows={4}
                placeholder="Please describe your specific document workflow needs, the types of forms/documents involved, and any current challenges you're facing..."
                required
              />
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Join Waitlist"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
