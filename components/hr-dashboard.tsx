"use client"
import {
  Bell,
  Search,
  Calendar,
  Users,
  Car,
  DollarSign,
  Heart,
  FileText,
  HardDrive,
  File,
  LogOut,
  MoreVertical,
  Plus,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const sidebarItems = [
  { icon: Users, label: "Dashboard", active: true },
  { icon: Users, label: "Employee" },
  { icon: Calendar, label: "Calendar" },
  { icon: Car, label: "Travel" },
  { icon: DollarSign, label: "My Financial" },
  { icon: Heart, label: "Medical" },
  { icon: FileText, label: "Expenses Claims" },
  { icon: HardDrive, label: "Assets" },
  { icon: File, label: "Other Documents" },
]

const teamMembers = [
  { name: "Narasimhulu", role: "Founder", avatar: "/placeholder.svg?height=40&width=40" },
  { name: "Jayarama Reddy", role: "Director", avatar: "/placeholder.svg?height=40&width=40" },
  { name: "Manasa kancharia", role: "HR", avatar: "/placeholder.svg?height=40&width=40" },
  { name: "Sathya Narayana", role: "Manager", avatar: "/placeholder.svg?height=40&width=40" },
  { name: "Kishore", role: "Team Lead", avatar: "/placeholder.svg?height=40&width=40" },
  { name: "Bala Rakesh", role: "Employee", avatar: "/placeholder.svg?height=40&width=40" },
]

const meetings = [
  {
    time: "9:00pm - 1:00pm",
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
  size = 120,
}: { value: number; max: number; color: string; size?: number }) => {
  const percentage = (value / max) * 100
  const strokeWidth = size < 80 ? 4 : 8
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
        <span className={`font-bold text-gray-900 ${size < 80 ? "text-lg" : "text-2xl"}`}>{value}</span>
      </div>
    </div>
  )
}

export default function HRDashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 bg-blue-600 text-white flex flex-col">
        <div className="p-6 border-b border-blue-500">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold text-lg">S</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold">SRNR IT SOLUTIONS</h1>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors bg-white text-blue-600"
              >
                <Users className="w-5 h-5" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="/employee"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-white hover:bg-blue-500"
              >
                <Users className="w-5 h-5" />
                <span>Employee</span>
              </a>
            </li>
            {/* Keep other menu items as they were */}
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-white hover:bg-blue-500"
              >
                <Calendar className="w-5 h-5" />
                <span>Calendar</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-white hover:bg-blue-500"
              >
                <Car className="w-5 h-5" />
                <span>Travel</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-white hover:bg-blue-500"
              >
                <DollarSign className="w-5 h-5" />
                <span>My Financial</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-white hover:bg-blue-500"
              >
                <Heart className="w-5 h-5" />
                <span>Medical</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-white hover:bg-blue-500"
              >
                <FileText className="w-5 h-5" />
                <span>Expenses Claims</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-white hover:bg-blue-500"
              >
                <HardDrive className="w-5 h-5" />
                <span>Assets</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-white hover:bg-blue-500"
              >
                <File className="w-5 h-5" />
                <span>Other Documents</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-blue-500">
          <a
            href="#"
            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-white hover:bg-blue-500 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Quick Search..." className="pl-10 w-80" />
              </div>

              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>

              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>B</AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <div className="font-medium">balu</div>
                  <div className="text-gray-500">@domain.in</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6">
          <div className="space-y-6">
            {/* Top Row - Stats and Leave Charts */}
            <div className="grid grid-cols-12 gap-6">
              {/* Login/Logout Time Cards */}
              <div className="col-span-6">
                <div className="grid grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900">09:15 AM</h3>
                          <p className="text-gray-600">Average login Time</p>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900">06:15 PM</h3>
                          <p className="text-gray-600">Average logout Time</p>
                        </div>
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                          <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Leave Charts */}
              <div className="col-span-6">
                <div className="grid grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <h4 className="text-sm font-medium text-gray-600 mb-4">Annual Leaves</h4>
                      <CircularProgress value={14} max={20} color="#3b82f6" size={100} />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <h4 className="text-sm font-medium text-gray-600 mb-4">Sick Leaves</h4>
                      <CircularProgress value={6} max={10} color="#ef4444" size={100} />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Middle Row - Schedule Meetings and Team Contacts */}
            <div className="grid grid-cols-12 gap-6">
              {/* Schedule Meetings */}
              <div className="col-span-8">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Schedule Meetings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {meetings.map((meeting, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex space-x-4 text-sm text-gray-600">
                            <span>{meeting.time}</span>
                            <span>{meeting.date}</span>
                            <span>{meeting.topic}</span>
                          </div>
                          <Badge variant={meeting.type === "Meeting" ? "default" : "secondary"}>{meeting.type}</Badge>
                        </div>
                        <p className="text-sm text-gray-700">{meeting.description}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Team Contacts */}
              <div className="col-span-4">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Team Contacts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {teamMembers.map((member, index) => (
                        <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Avatar className="w-10 h-10">
                              <AvatarImage src={member.avatar || "/placeholder.svg"} />
                              <AvatarFallback>{member.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="text-sm font-medium">{member.name}</div>
                              <div className="text-xs text-gray-500">{member.role}</div>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" className="w-8 h-8">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Bottom Row - Claims, Medical, Salary */}
            <div className="grid grid-cols-12 gap-6">
              {/* Claims Tracking */}
              <div className="col-span-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Claims tracking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-xs">Expenses ID</TableHead>
                          <TableHead className="text-xs">Total Amount</TableHead>
                          <TableHead className="text-xs">Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="text-sm">SR-0041</TableCell>
                          <TableCell className="text-sm">₹500</TableCell>
                          <TableCell>
                            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 text-xs">
                              Pending
                            </Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-sm">SR-0042</TableCell>
                          <TableCell className="text-sm">₹1500</TableCell>
                          <TableCell>
                            <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                              Done
                            </Badge>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>

              {/* Medical Renewals */}
              <div className="col-span-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Medical Renewals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Total Claims</span>
                          <span className="text-sm font-medium">Spent Claims</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-lg font-bold">₹49,550</span>
                          <span className="text-lg font-bold">₹22,000</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Salary Status */}
              <div className="col-span-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Salary Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4">
                      <div className="w-24 h-24">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie data={salaryData} cx="50%" cy="50%" innerRadius={25} outerRadius={40} dataKey="value">
                              {salaryData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="flex-1 space-y-2">
                        {salaryData.map((item, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                            <span className="text-xs text-gray-600">{item.name}</span>
                            <span className="text-xs font-medium ml-auto">{item.value}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Tickets Table */}
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12">
                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-blue-600 hover:bg-blue-600">
                          <TableHead className="text-white">Ticket ID</TableHead>
                          <TableHead className="text-white">Summary</TableHead>
                          <TableHead className="text-white">Decision</TableHead>
                          <TableHead className="text-white">Action to be taken</TableHead>
                          <TableHead className="text-white">Close/Revert</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Ticket_0001</TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Ticket_0001</TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Ticket_0001</TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Raise a Ticket Button */}
          <div className="fixed bottom-6 right-6">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Raise a Ticket
            </Button>
          </div>
        </main>
      </div>
    </div>
  )
}
