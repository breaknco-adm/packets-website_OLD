"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"

export default function EarlyAccessForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    teamSize: "",
    primaryTask: "",
    customTaskDetails: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.company ||
      !formData.role ||
      !formData.teamSize ||
      !formData.primaryTask
    ) {
      alert("Please fill in all required fields")
      return
    }

    // Validate custom task details if "Other" is selected
    if (formData.primaryTask === "other" && !formData.customTaskDetails.trim()) {
      alert("Please describe your custom use case")
      return
    }

    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank you for your interest!</h3>
          <p className="text-gray-600 mb-6">
            We've received your request for early access to Packets. Our team will review your information and get back
            to you soon.
          </p>
          <p className="text-sm text-gray-500">
            We'll keep you updated on our development progress and notify you when early access becomes available.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Get Early Access to Packets</CardTitle>
        <CardDescription className="text-center">
          Join the waitlist to be among the first to experience intelligent document workflows
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">Company *</Label>
              <Input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter your company name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Your Role *</Label>
              <Select onValueChange={(value) => handleSelectChange("role", value)} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ceo">CEO/Founder</SelectItem>
                  <SelectItem value="cto">CTO/Tech Lead</SelectItem>
                  <SelectItem value="operations">Operations Manager</SelectItem>
                  <SelectItem value="hr">HR Manager</SelectItem>
                  <SelectItem value="finance">Finance Manager</SelectItem>
                  <SelectItem value="admin">Admin/Office Manager</SelectItem>
                  <SelectItem value="consultant">Consultant</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="teamSize">Team Size *</Label>
            <Select onValueChange={(value) => handleSelectChange("teamSize", value)} required>
              <SelectTrigger>
                <SelectValue placeholder="Select your team size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1-10 people</SelectItem>
                <SelectItem value="11-50">11-50 people</SelectItem>
                <SelectItem value="51-200">51-200 people</SelectItem>
                <SelectItem value="201-1000">201-1000 people</SelectItem>
                <SelectItem value="1000+">1000+ people</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="primaryTask">Primary Task You Want to Automate *</Label>
            <Select onValueChange={(value) => handleSelectChange("primaryTask", value)} required>
              <SelectTrigger>
                <SelectValue placeholder="Select your primary use case" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hr-onboarding">HR - Employee onboarding</SelectItem>
                <SelectItem value="hr-compliance">HR - Compliance documentation</SelectItem>
                <SelectItem value="finance-reimbursements">Finance - Reimbursements</SelectItem>
                <SelectItem value="finance-vendor">Finance - Vendor onboarding</SelectItem>
                <SelectItem value="travel-logistics">Travel & Logistics</SelectItem>
                <SelectItem value="sales-procurement">Sales & Procurement</SelectItem>
                <SelectItem value="education-training">Education & Training</SelectItem>
                <SelectItem value="legal-contracts">Legal - Contract management</SelectItem>
                <SelectItem value="other">Other - Let me describe my use case...</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {formData.primaryTask === "other" && (
            <div className="space-y-2">
              <Label htmlFor="customTaskDetails">Describe Your Custom Use Case *</Label>
              <Textarea
                id="customTaskDetails"
                name="customTaskDetails"
                value={formData.customTaskDetails}
                onChange={handleChange}
                placeholder="Please describe the specific document workflows or processes you'd like to automate..."
                rows={4}
                required
                className="resize-y"
              />
            </div>
          )}

          <Button type="submit" className="w-full py-3 text-lg font-semibold" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Join the Waitlist"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
