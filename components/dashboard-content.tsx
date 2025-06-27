"use client"

import { MoreVertical, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const teamMembers = [
  { name: "Narasimhulu", role: "Founder", avatar: "/placeholder.svg?height=40&width=40" },
  { name: "Jayarama Reddy", role: "Director", avatar: "/placeholder.svg?height=40&width=40" },
  { name: "Manasa kancharia", role: "HR", avatar: "/placeholder.svg?height=40&width=40" },
  { name: "Kishore", role: "Team Lead", avatar: "/placeholder.svg?height=40&width=40" },
  { name: "Narasimhulu", role: "Founder", avatar: "/placeholder.svg?height=40&width=40" },
  { name: "Kishore", role: "Team Lead", avatar: "/placeholder.svg?height=40&width=40" },
]

const meetings = [
  {
    time: "12:00pm - 1:00pm",
    date: "31st dec 2024",
    topic: "About design System",
    description:
      "A design system is a collection of reusable components, guidelines, and tools that help teams create consistent, scalable, and cohesive user experiences across products and platforms. It serves as the single source of truth for design and development, streamlining collaboration between designers, developers, and other stakeholders...",
    type: "Meeting",
  },
  {
    time: "3:00pm - 4:00pm",
    date: "31st dec 2024",
    topic: "About Website",
    description:
      "A design system is a collection of reusable components, guidelines, and tools that help teams create consistent, scalable, and cohesive user experiences across products and platforms. It serves as the single source of truth for design and development, streamlining collaboration between designers, developers, and other stakeholders...",
    type: "Group Discussion",
  },
]

const salaryData = [
  { name: "Successfully Paid", value: 62, color: "#4ade80" },
  { name: "Processing", value: 20, color: "#06b6d4" },
  { name: "Unpaid", value: 18, color: "#f87171" },
]

const CircularProgress = ({
  value,
  max,
  color,
  size = 80,
}: { value: number; max: number; color: string; size?: number }) => {
  const percentage = (value / max) * 100
  const strokeWidth = 6
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="#e5e7eb" strokeWidth={strokeWidth} fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-300 ease-in-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-bold text-gray-900 text-lg">{value}</span>
      </div>
    </div>
  )
}

export default function DashboardContent() {
  return (
    <div className="h-full">
      {/* 5x3 Grid Container */}
      <div className="grid grid-rows-5 grid-cols-3 gap-4 h-full">
        {/* Row 1 - Login Time, Logout Time, Annual & Sick Leaves */}
        <Card className="col-span-1 row-span-1">
          <CardContent className="p-4 h-full flex flex-col justify-center">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-1">09:15 AM</h3>
              <p className="text-lg text-gray-600">Average login Time</p>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 row-span-1">
          <CardContent className="p-4 h-full flex flex-col justify-center">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-1">06:15 PM</h3>
              <p className="text-lg text-gray-600">Average logout Time</p>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 row-span-1">
          <CardContent className="p-4 h-full ">
            <div className="grid grid-cols-2 gap-4 h-full justify-center items-center">
              <div className="text-center">
                <h4 className="text-xs font-medium text-gray-600 mb-2">Annual Leaves</h4>
                <CircularProgress value={14} max={20} color="#3b82f6" size={60} />
              </div>
              <div className="text-center">
                <h4 className="text-xs font-medium text-gray-600 mb-2">Sick Leaves</h4>
                <CircularProgress value={6} max={10} color="#ef4444" size={60} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Row 2-3 - Schedule Meetings (2 cols) and Team Contacts (1 col) */}
        <Card className="col-span-2 row-span-2">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-center">Schedule Meetings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {meetings.map((meeting, index) => (
              <div key={index} className="border rounded-lg p-3">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex space-x-3 text-md font-bold text-gray-600">
                    <span>{meeting.time}</span>
                    <span>{meeting.date}</span>
                    <span>{meeting.topic}</span>
                  </div>
                  <Badge variant={meeting.type === "Meeting" ? "default" : "secondary"} className="text-sm">
                    {meeting.type}
                  </Badge>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed py-2">{meeting.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="col-span-1 row-span-2">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-center">Team Contacts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={member.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="text-xs">{member.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-xs font-medium">{member.name}</div>
                      <div className="text-xs text-gray-500">{member.role}</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="w-6 h-6">
                    <MoreVertical className="w-3 h-3" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Row 4 - Claims Tracking, Medical Renewals, Salary Status */}
        <Card className="col-span-1 row-span-1">
          <CardHeader className="">
            <CardTitle className="text-lg text-center">Claims Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-sm">Expenses ID</TableHead>
                  <TableHead className="text-sm ">Total Amount</TableHead>
                  <TableHead className="text-sm ">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-xs py-1">SR-0041</TableCell>
                  <TableCell className="text-xs py-1">₹500</TableCell>
                  <TableCell className="py-1">
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 text-xs px-1 py-0">
                      Pending
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-xs py-1">SR-0042</TableCell>
                  <TableCell className="text-xs py-1">₹1500</TableCell>
                  <TableCell className="py-1">
                    <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs px-1 py-0">
                      Done
                    </Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="col-span-1 row-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-center mb-5">Medical Renewals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex justify-around mb-1">
                  <span className="text-md font-medium">Total Claims</span>
                  <span className="text-md font-medium">Spent Claims</span>
                </div>
                <div className="flex justify-around">
                  <span className="text-md font-bold">₹49,550</span>
                  <span className="text-md font-bold">₹22,000</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 row-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-center mb-5">Salary Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-3 ">
              <div className="w-16 h-16 justify-center items-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={salaryData} cx="50%" cy="50%" innerRadius={20} outerRadius={30} dataKey="value">
                      {salaryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex-1 space-y-1">
                {salaryData.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm text-gray-600">{item.name}</span>
                    <span className="text-sm font-medium ml-auto">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Row 5 - Tickets Table (2 cols) and Raise Ticket Button (1 col) */}
        <Card className="col-span-2 row-span-1">
          <CardContent className="p-0 h-full">
            <Table>
              <TableHeader>
                <TableRow className="bg-blue-600 hover:bg-blue-600">
                  <TableHead className="text-white text-sm py-2">Ticket ID</TableHead>
                  <TableHead className="text-white text-sm py-2">Summary</TableHead>
                  <TableHead className="text-white text-sm py-2">Decision</TableHead>
                  <TableHead className="text-white text-sm py-2">Action to be taken</TableHead>
                  <TableHead className="text-white text-sm py-2">Close/Revert</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-md py-4">Ticket_0001</TableCell>
                  <TableCell className="text-xs py-2"></TableCell>
                  <TableCell className="text-xs py-2"></TableCell>
                  <TableCell className="text-xs py-2"></TableCell>
                  <TableCell className="text-xs py-2"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-md py-4">Ticket_0002</TableCell>
                  <TableCell className="text-xs py-2"></TableCell>
                  <TableCell className="text-xs py-2"></TableCell>
                  <TableCell className="text-xs py-2"></TableCell>
                  <TableCell className="text-xs py-2"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-md py-4">Ticket_0003</TableCell>
                  <TableCell className="text-xs py-2"></TableCell>
                  <TableCell className="text-xs py-2"></TableCell>
                  <TableCell className="text-xs py-2"></TableCell>
                  <TableCell className="text-xs py-2"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="col-span-1 row-span-1">
          <CardContent className="p-4 h-full flex items-center justify-center">
            <Button
              onClick={() => (window.location.href = "/tickets/create")}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2"
            >
              Raise a Ticket
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
