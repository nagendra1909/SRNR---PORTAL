"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarDays } from "lucide-react"

export default function ApplyLeaveContent() {
  const [formData, setFormData] = useState({
    fromDate: "",
    toDate: "",
    session: "",
    leaveType: "",
    subject: "",
    description: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Leave application submitted:", formData)
    alert("Leave application submitted successfully!")
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Date Display */}
      <div className="flex justify-end mb-6">
        <div className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg">
          <CalendarDays className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-600">January 23, 2024</span>
        </div>
      </div>

      {/* Page Title */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Application for Leave</h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First Row - From Date, To Date, Session, Leave Type */}
        <div className="grid grid-cols-4 gap-6">
          {/* From Date */}
          <div>
            <Label htmlFor="fromDate" className="text-sm font-medium text-gray-700 mb-2 block">
              From Date
            </Label>
            <div className="relative">
              <Input
                id="fromDate"
                type="date"
                value={formData.fromDate}
                onChange={(e) => handleInputChange("fromDate", e.target.value)}
                className="w-full"
                placeholder="MM-DD-YYYY"
                required
              />
            </div>
          </div>

          {/* To Date */}
          <div>
            <Label htmlFor="toDate" className="text-sm font-medium text-gray-700 mb-2 block">
              To Date
            </Label>
            <div className="relative">
              <Input
                id="toDate"
                type="date"
                value={formData.toDate}
                onChange={(e) => handleInputChange("toDate", e.target.value)}
                className="w-full"
                placeholder="MM-DD-YYYY"
                required
              />
            </div>
          </div>

          {/* Session */}
          <div>
            <Label htmlFor="session" className="text-sm font-medium text-gray-700 mb-2 block">
              Session
            </Label>
            <Select value={formData.session} onValueChange={(value) => handleInputChange("session", value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full-day">Full Day</SelectItem>
                <SelectItem value="first-half">First Half</SelectItem>
                <SelectItem value="second-half">Second Half</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Leave Type */}
          <div>
            <Label htmlFor="leaveType" className="text-sm font-medium text-gray-700 mb-2 block">
              To
            </Label>
            <Select value={formData.leaveType} onValueChange={(value) => handleInputChange("leaveType", value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sick-leave">Sick Leave</SelectItem>
                <SelectItem value="casual-leave">Casual Leave</SelectItem>
                <SelectItem value="holiday-leave">Holiday Leave</SelectItem>
                <SelectItem value="emergency-leave">Emergency Leave</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Subject */}
        <div>
          <Label htmlFor="subject" className="text-sm font-medium text-gray-700 mb-2 block">
            Subject :
          </Label>
          <Input
            id="subject"
            type="text"
            value={formData.subject}
            onChange={(e) => handleInputChange("subject", e.target.value)}
            className="w-full"
            placeholder="Enter subject for your leave application"
            required
          />
        </div>

        {/* Description */}
        <div>
          <Label htmlFor="description" className="text-sm font-medium text-gray-700 mb-2 block">
            Description :
          </Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            className="w-full min-h-[200px] resize-none"
            placeholder="Enter detailed description for your leave application..."
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-6">
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 px-8 py-2">
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}
