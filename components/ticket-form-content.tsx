"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

export default function TicketFormContent() {
  const [selectedSessions, setSelectedSessions] = useState(["Admin", "HR", "Manager", "Team Leader"])
  const [severity, setSeverity] = useState("")
  const [summary, setSummary] = useState("")
  const [story, setStory] = useState("")

  const removeSession = (sessionToRemove: string) => {
    setSelectedSessions((prev) => prev.filter((session) => session !== sessionToRemove))
  }

  const handleSubmit = () => {
    console.log("Ticket submitted:", {
      sessions: selectedSessions,
      severity,
      summary,
      story,
    })
    alert("Ticket submitted successfully!")
    // Navigate to tickets tracking page
    window.location.href = "/tickets"
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Date Display */}
      <div className="flex justify-end">
        <div className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg">
          <span className="text-sm text-gray-600">January 23, 2024</span>
        </div>
      </div>

      {/* Page Title */}
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-900">Ticket</h1>
      </div>

      {/* Form Content */}
      <div className="space-y-8">
        {/* Session and Severity Row */}
        <div className="grid grid-cols-2 gap-8">
          {/* Session */}
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-4 block">Session</Label>
            <div className="flex flex-wrap gap-2">
              {selectedSessions.map((session) => (
                <Badge
                  key={session}
                  variant="secondary"
                  className="bg-gray-200 text-gray-700 px-3 py-1 flex items-center space-x-2"
                >
                  <span>{session}</span>
                  <button onClick={() => removeSession(session)} className="ml-1 hover:bg-gray-300 rounded-full p-0.5">
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>

          {/* Severity */}
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-4 block">Severity</Label>
            <Select value={severity} onValueChange={setSeverity}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Summary */}
        <div>
          <Label htmlFor="summary" className="text-sm font-medium text-gray-700 mb-2 block">
            Summary :
          </Label>
          <Input
            id="summary"
            type="text"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="w-full"
            placeholder="Enter ticket summary..."
          />
        </div>

        {/* Story */}
        <div>
          <Label htmlFor="story" className="text-sm font-medium text-gray-700 mb-2 block">
            Story
          </Label>
          <Textarea
            id="story"
            value={story}
            onChange={(e) => setStory(e.target.value)}
            className="w-full min-h-[300px] resize-none"
            placeholder="Describe the issue or request in detail..."
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-4">
          <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700 px-8 py-2">
            Apply
          </Button>
        </div>
      </div>
    </div>
  )
}
