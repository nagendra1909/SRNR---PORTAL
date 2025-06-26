"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Clock } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Holiday {
  date: string
  name: string
  color: string
}

interface LeaveRequest {
  duration: string
  type: string
  days: string
  status: "Pending" | "Approved" | "Rejected"
}

const holidays: Holiday[] = [
  { date: "Fri 2024/10/23 - Wed 2024/10/28", name: "Shivratri", color: "bg-red-500" },
  { date: "Fri 2024/10/23 - Wed 2024/10/28", name: "Ugadi", color: "bg-red-500" },
  { date: "Fri 2024/10/23 - Wed 2024/10/28", name: "Sankranti", color: "bg-red-500" },
  { date: "Fri 2024/10/23", name: "Ramzan", color: "bg-red-500" },
  { date: "Fri 2024/10/23", name: "Diwali", color: "bg-red-500" },
  { date: "Fri 2024/10/23 - Wed 2024/10/28", name: "Dussehra", color: "bg-red-500" },
  { date: "Fri 2024/10/23", name: "Christmas", color: "bg-red-500" },
]

const leaveRequests: LeaveRequest[] = [
  { duration: "Jan 1, 24 - Jan 3, 24", type: "Sick leave", days: "02", status: "Pending" },
  { duration: "Jan 1, 24 - Jan 3, 24", type: "Sick leave", days: "02", status: "Approved" },
]

const todayActivity = [
  { type: "Check in", time: "10:00 AM" },
  { type: "Check out", time: "10:00 AM" },
  { type: "Check in", time: "10:00 AM" },
  { type: "Check out", time: "10:00 AM" },
  { type: "Check in", time: "10:00 AM" },
  { type: "Check out", time: "10:00 AM" },
]

const calendarData = [
  [29, 30, 1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, 31, 1, 2],
]

const getLeaveType = (day: number | null) => {
  if (!day) return null
  if (day === 1 || day === 2 || day === 3 || day === 4) return "A"
  if (day === 6 || day === 13 || day === 20 || day === 27) return "O"
  if (day === 2 || day === 29 || day === 30) return "SL"
  if (day === 14 || day === 15 || day === 16 || day === 17 || day === 11) return "HL"
  if (day === 18 || day === 25) return "CL"
  return "O"
}

const getLeaveColor = (type: string | null) => {
  switch (type) {
    case "A":
      return "text-blue-500"
    case "O":
      return "text-green-500"
    case "SL":
      return "text-orange-500"
    case "HL":
      return "text-green-500"
    case "CL":
      return "text-purple-500"
    default:
      return "text-gray-500"
  }
}

const shouldShowTiming = (day: number) => {
  // Only show timing for specific days as in the reference image
  return [1, 2, 4, 5, 7, 8, 9, 10, 21, 22, 23, 24, 28, 30, 31].includes(day)
}

export default function CalendarContent() {
  const [showLeaveDetails, setShowLeaveDetails] = useState(false)
  const [currentMonth, setCurrentMonth] = useState("January")
  const [currentYear, setCurrentYear] = useState("2025")

  const handleApplyLeave = () => {
    window.location.href = "/calendar/apply"
  }

  const handleSeeMore = () => {
    setShowLeaveDetails(true)
  }

  return (
    <div className="space-y-6">
      {/* Top Header Row */}
      <div className="grid grid-cols-12 gap-6 items-start">
        {/* Holidays Header */}
        <div className="col-span-2">
          <h3 className="text-lg font-semibold text-gray-900">Holidays</h3>
        </div>

        {/* Calendar Header */}
        <div className="col-span-8 flex items-center justify-center space-x-4">
          <Button variant="ghost" size="sm">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <h2 className="text-2xl font-semibold text-gray-900">
            {currentMonth} {currentYear}
          </h2>
          <Button variant="ghost" size="sm">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Login Time */}
        <div className="col-span-2">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-600 mb-1">Login time</p>
            <div className="flex items-center justify-end space-x-1">
              <Clock className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-semibold text-blue-600">09:00AM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Row */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left - Holidays List */}
        <div className="col-span-2">
          <div className="space-y-3">
            {holidays.map((holiday, index) => (
              <div key={index} className="space-y-1">
                <div className="text-xs text-gray-600">{holiday.date}</div>
                <Badge className={`${holiday.color} text-white text-xs`}>{holiday.name}</Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Center - Calendar */}
        <div className="col-span-8">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            {/* Calendar Days Header */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 mb-4">
              {calendarData.flat().map((day, index) => {
                const leaveType = getLeaveType(day)
                const showTiming = shouldShowTiming(day)
                return (
                  <div
                    key={index}
                    className={`h-16 border border-gray-100 p-1 text-center ${
                      day === 15 ? "bg-blue-500 text-white rounded" : "bg-gray-50"
                    }`}
                  >
                    <div className="text-xs font-medium mb-1">{day}</div>
                    {leaveType && (
                      <div className={`text-xs font-bold ${getLeaveColor(leaveType)} mb-1`}>{leaveType}</div>
                    )}
                    {showTiming && (
                      <>
                        <div className="text-xs text-gray-400">09:00AM-06:00PM</div>
                        <div className="text-xs text-gray-400">8h 30m</div>
                      </>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Calendar Legend */}
            <div className="flex items-center justify-center space-x-4 text-xs">
              <div className="flex items-center space-x-1">
                <span className="text-blue-500 font-bold">A -</span>
                <span>Available</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-green-500 font-bold">O -</span>
                <span>Off Day</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-orange-500 font-bold">SL -</span>
                <span>Sick Leave</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-purple-500 font-bold">CL -</span>
                <span>Casual Leave</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-green-500 font-bold">HL -</span>
                <span>Holiday Leave</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Activity Column */}
        <div className="col-span-2 space-y-6">
          {/* Today Activity */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Today Activity</h3>
            <div className="space-y-3">
              {todayActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">{activity.type}</div>
                    <div className="text-xs text-gray-500">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Logout Time */}
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">Logout time</p>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-semibold text-blue-600">06:00PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Leave Balance Cards Row */}
      <div className="grid grid-cols-12 gap-6 items-end">
        {/* Leave Balance Cards */}
        <div className="col-span-9 grid grid-cols-3 gap-6">
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-purple-600 mb-2">Casual Leaves</h3>
              <p className="text-3xl font-bold text-purple-600">10 left</p>
            </CardContent>
          </Card>

          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-orange-600 mb-2">Sick Leaves</h3>
              <p className="text-3xl font-bold text-orange-600">10 left</p>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-green-600 mb-2">Holidays leaves</h3>
              <p className="text-3xl font-bold text-green-600">10 left</p>
            </CardContent>
          </Card>
        </div>

        {/* Apply for Leave Button */}
        <div className="col-span-3">
          <Button onClick={handleApplyLeave} className="w-full bg-blue-600 hover:bg-blue-700 h-12">
            Apply for Leave
          </Button>
        </div>
      </div>

      {/* Leave Request Table Row */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-9">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Leave Request</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 text-sm font-medium text-gray-600">Duration</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-600">Type</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-600">Days</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-600">Status</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-600">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {leaveRequests.map((request, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 text-sm text-gray-900">{request.duration}</td>
                      <td className="py-3 text-sm text-gray-900">{request.type}</td>
                      <td className="py-3 text-sm text-gray-900">{request.days}</td>
                      <td className="py-3">
                        <Badge
                          variant={request.status === "Approved" ? "default" : "secondary"}
                          className={
                            request.status === "Approved"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }
                        >
                          {request.status}
                        </Badge>
                      </td>
                      <td className="py-3">
                        <Button variant="link" className="text-blue-600 p-0 h-auto" onClick={handleSeeMore}>
                          See more
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Date Display */}
        <div className="col-span-3 flex justify-end">
          <div className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg">
            <span className="text-sm text-gray-600">January 23, 2024</span>
          </div>
        </div>
      </div>

      {/* Leave Request Details Modal */}
      <Dialog open={showLeaveDetails} onOpenChange={setShowLeaveDetails}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Leave Request Details</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm font-medium text-gray-600">Start Date :</span>
                <p className="text-sm text-gray-900">1 Jan, 2024</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600">End Date :</span>
                <p className="text-sm text-gray-900">3 Jan, 2024</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm font-medium text-gray-600">Type :</span>
                <p className="text-sm text-gray-900">Sick Leave</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600">Days :</span>
                <p className="text-sm text-gray-900">01 days</p>
              </div>
            </div>

            <div>
              <span className="text-sm font-medium text-gray-600">Description:</span>
              <div className="mt-2 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-900 mb-2">
                  Subject : Sick leave application for office fever
                </p>
                <p className="text-sm text-gray-700">
                  I am writing to seek leave from work due to a severe fever. (mention the specific symptoms of fever).
                  Accordingly, consulting with a doctor, I have been advised to take rest for a day to recover. So, I
                  request you to kindly approve my leave application for [date], and I will join the office from the
                  next day.
                </p>
              </div>
            </div>

            <div>
              <span className="text-sm font-medium text-gray-600">Status :</span>
              <Badge className="ml-2 bg-yellow-100 text-yellow-800">Pending</Badge>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
