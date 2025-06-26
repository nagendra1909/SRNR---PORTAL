"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronDown } from "lucide-react"

interface Ticket {
  id: string
  summary: string
  decision: string
  actionToBeTaken: string
  closeRevert: string
}

const ticketsData: Ticket[] = [
  { id: "Ticket_0001", summary: "", decision: "", actionToBeTaken: "", closeRevert: "" },
  { id: "Ticket_0001", summary: "", decision: "", actionToBeTaken: "", closeRevert: "" },
  { id: "Ticket_0001", summary: "", decision: "", actionToBeTaken: "", closeRevert: "" },
  { id: "Ticket_0001", summary: "", decision: "", actionToBeTaken: "", closeRevert: "" },
  { id: "Ticket_0001", summary: "", decision: "", actionToBeTaken: "", closeRevert: "" },
  { id: "Ticket_0001", summary: "", decision: "", actionToBeTaken: "", closeRevert: "" },
  { id: "Ticket_0001", summary: "", decision: "", actionToBeTaken: "", closeRevert: "" },
  { id: "Ticket_0001", summary: "", decision: "", actionToBeTaken: "", closeRevert: "" },
]

export default function TicketsTrackingContent() {
  const [fromDate, setFromDate] = useState("")
  const [toDate, setToDate] = useState("")

  const handleRaiseTicket = () => {
    window.location.href = "/tickets/create"
  }

  return (
    <div className="space-y-6">
      {/* Date Display */}
      <div className="flex justify-end">
        <div className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg">
          <span className="text-sm text-gray-600">January 23, 2024</span>
        </div>
      </div>

      {/* Page Title */}
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Tickets Tracking Management</h1>
      </div>

      {/* Date Filters */}
      <div className="flex justify-end space-x-6 mb-6">
        <div>
          <Label htmlFor="fromDate" className="text-sm font-medium text-gray-700 mb-2 block">
            From Date
          </Label>
          <Input
            id="fromDate"
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="w-48"
            placeholder="MM-DD-YYYY"
          />
        </div>
        <div>
          <Label htmlFor="toDate" className="text-sm font-medium text-gray-700 mb-2 block">
            To Date
          </Label>
          <Input
            id="toDate"
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="w-48"
            placeholder="MM-DD-YYYY"
          />
        </div>
      </div>

      {/* Tickets Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-600">
              <th className="text-left py-4 px-6 text-white font-medium">Ticket ID</th>
              <th className="text-left py-4 px-6 text-white font-medium">Summary</th>
              <th className="text-left py-4 px-6 text-white font-medium">Decision</th>
              <th className="text-left py-4 px-6 text-white font-medium">Action to be taken</th>
              <th className="text-left py-4 px-6 text-white font-medium">Close/Revert</th>
            </tr>
          </thead>
          <tbody>
            {ticketsData.map((ticket, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-6 text-sm text-gray-900">{ticket.id}</td>
                <td className="py-4 px-6 text-sm text-gray-900">{ticket.summary}</td>
                <td className="py-4 px-6 text-sm text-gray-900">{ticket.decision}</td>
                <td className="py-4 px-6 text-sm text-gray-900">{ticket.actionToBeTaken}</td>
                <td className="py-4 px-6 text-sm text-gray-900 text-right">
                  <Button variant="ghost" size="sm">
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Raise a Ticket Button */}
      <div className="flex justify-end pt-4">
        <Button onClick={handleRaiseTicket} className="bg-blue-600 hover:bg-blue-700 px-6 py-2">
          Raise a Ticket
        </Button>
      </div>
    </div>
  )
}
