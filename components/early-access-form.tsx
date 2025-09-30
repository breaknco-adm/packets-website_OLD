"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle , AlertCircle} from "lucide-react"
import { submitEarlyAccessForm } from "@/app/actions/early-access"
import { motion } from "framer-motion"
import { event } from "@/lib/gtag"
import { getStoredUTMVisitId } from "@/lib/utm-tracking"

export default function EarlyAccessForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    primaryTask: "",
    customTaskDetails: "",
  })
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

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
    startTransition(async () => {
      const formDataObj = new FormData(e.target as HTMLFormElement)

      // Add UTM visit ID if available
      const utmVisitId = getStoredUTMVisitId()
      if (utmVisitId) {
        formDataObj.append("utmVisitId", utmVisitId)
      }

      const response = await submitEarlyAccessForm(formDataObj)
      setResult(response)
    })
  }



  return (
    <Card className="w-full max-w-2xl mx-auto mb-5">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Get Early Access to Packets</CardTitle>
        <CardDescription className="text-center">
          Join the waitlist to be among the first to experience intelligent compliance workflows
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Status Messages */}
        {result && result.success && (
          <motion.div
            className="flex items-center space-x-3 p-4 bg-green-200 border border-green-700 rounded-lg text-green-900 mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <CheckCircle className="h-5 w-5 flex-shrink-0" />
            <span>{result.message}</span>
          </motion.div>
        )}

        {result && !result.success && (
          <motion.div
            className="flex items-center space-x-3 p-4 bg-red-200 border border-red-700 rounded-lg text-red-900 mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <span>{result.message}</span>
          </motion.div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
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


          <div className="space-y-2 hidden">
            <Label htmlFor="primaryTask">What tasks would you like Packets to handle? *</Label>
            <Select name = "primaryTask" onValueChange={(value) => handleSelectChange("primaryTask", value)} required>
              <SelectTrigger>
                <SelectValue placeholder="Select your primary use case" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="TL_CATEGORY_1">Preparing and submitting visa applications for international travel (Travel & Logistics)</SelectItem>
                <SelectItem value="HR_CATEGORY_1">Automating document workflows for new employee onboarding (HR Operations)</SelectItem>
                <SelectItem value="HR_CATEGORY_2">Managing compliance paperwork for HR and payroll (HR Operations)</SelectItem>
                <SelectItem value="ED_CATEGORY_1">Assisting students with admission documentation workflows (Education)</SelectItem>
                <SelectItem value="ED_CATEGORY_2">Automating onboarding paperwork for new students (Education)</SelectItem>
                <SelectItem value="ED_CATEGORY_3">Managing compliance documentation for education regulations (Education)</SelectItem>
                <SelectItem value="ED_CATEGORY_4">Study Abroad Visa Processing (Education)</SelectItem>
                <SelectItem value="FI_CATEGORY_1">Preparing and organizing documents for audits (Finance)</SelectItem>
                <SelectItem value="FI_CATEGORY_2">Gathering and validating tax-related forms (Finance)</SelectItem>
                <SelectItem value="SP_CATEGORY_1">Creating and sending sales proposals with standardized templates (Sales & Procurement)</SelectItem>
                <SelectItem value="SP_CATEGORY_2">Drafting and managing procurement contracts with vendors (Sales & Procurement)</SelectItem>
                <SelectItem value="OTHER">Other (Let me describe my use case...)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {formData.primaryTask === "OTHER" && (
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

          <Button type="submit" className="w-full py-3 text-lg font-semibold" disabled={isPending}>
            {isPending ? "Submitting..." : "Join the Waitlist"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
