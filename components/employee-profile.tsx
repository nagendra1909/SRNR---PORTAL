"use client"

import { useState } from "react"
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
  Edit3,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const sidebarItems = [
  { icon: Users, label: "Dashboard", active: false },
  { icon: Users, label: "Employee", active: true },
  { icon: Calendar, label: "Calendar" },
  
  { icon: DollarSign, label: "My Financial" },
  { icon: Heart, label: "Medical" },
  { icon: FileText, label: "Expenses Claims" },
  { icon: HardDrive, label: "Assets" },
  { icon: File, label: "Other Documents" },
]

export default function EmployeeProfile() {
  const [activeTab, setActiveTab] = useState("details")

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
                className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-white hover:bg-blue-500"
              >
                <Users className="w-5 h-5" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="/employee"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors bg-white text-blue-600"
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
            <h1 className="text-2xl font-semibold text-gray-900">Employee</h1>

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

        {/* Employee Profile Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="grid grid-cols-12 gap-6">
            {/* Left Side - Employee Details Card */}
            <div className="col-span-4">
              <Card>
                <CardHeader>
                  <CardTitle>Employee details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Profile Image */}
                  <div className="flex justify-center">
                    <Avatar className="w-32 h-32">
                      <AvatarImage src="/placeholder.svg?height=128&width=128" />
                      <AvatarFallback className="text-2xl">CY</AvatarFallback>
                    </Avatar>
                  </div>

                  {/* Employee Name */}
                  <div className="text-center">
                    <h2 className="text-xl font-semibold text-gray-900">Ch.yaswanth goud</h2>
                  </div>

                  {/* Employee Details */}
                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-600">Employee Id</Label>
                      <div className="mt-1 p-3 bg-gray-50 rounded-lg text-sm text-gray-900">EMP001</div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-gray-600">Joining Date</Label>
                      <div className="mt-1 p-3 bg-gray-50 rounded-lg text-sm text-gray-900">01/01/2023</div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-gray-600">Reporting manager</Label>
                      <div className="mt-1 p-3 bg-gray-50 rounded-lg text-sm text-gray-900">John Smith</div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-gray-600">Position</Label>
                      <div className="mt-1 p-3 bg-gray-50 rounded-lg text-sm text-gray-900">Software Developer</div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-gray-600">Designation</Label>
                      <div className="mt-1 p-3 bg-gray-50 rounded-lg text-sm text-gray-900">Senior Developer</div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-gray-600">Department</Label>
                      <div className="mt-1 p-3 bg-gray-50 rounded-lg text-sm text-gray-900">IT Department</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Tabbed Interface */}
            <div className="col-span-8">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-6">
                  <TabsTrigger value="details">Employee details and contact</TabsTrigger>
                  <TabsTrigger value="status">Employee Status</TabsTrigger>
                  <TabsTrigger value="remarks">Remarks</TabsTrigger>
                </TabsList>

                {/* Tab 1: Employee details and contact */}
                <TabsContent value="details" className="space-y-6">
                  {/* Employee Details Section */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Employee details</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="employeeName">Employee Name</Label>
                          <Input id="employeeName" defaultValue="Ch.yaswanth goud" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="gender">Gender</Label>
                          <Input id="gender" defaultValue="Male" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="dob">DOB</Label>
                          <Input id="dob" defaultValue="15/08/1995" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="aadhar">Aadhar no</Label>
                          <Input id="aadhar" defaultValue="1234 5678 9012" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="passport">Passport</Label>
                          <Input id="passport" placeholder="Passport Number" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="bankAccount">Bank account number</Label>
                          <Input id="bankAccount" placeholder="Account Number" className="mt-1" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Contact Section */}
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle>Contact</CardTitle>
                      <Button variant="ghost" size="icon">
                        <Edit3 className="w-4 h-4" />
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="employeeEmail">
                            Employee Email <span className="text-red-500">*</span>
                          </Label>
                          <Input id="employeeEmail" defaultValue="yaswanth@srnr.com" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="personalEmail">
                            Personal Email <span className="text-red-500">*</span>
                          </Label>
                          <Input id="personalEmail" defaultValue="yaswanth.personal@gmail.com" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="officePhone">
                            Office phone <span className="text-red-500">*</span>
                          </Label>
                          <Input id="officePhone" defaultValue="+91 9876543210" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="personalPhone">
                            Personal phone <span className="text-red-500">*</span>
                          </Label>
                          <Input id="personalPhone" defaultValue="+91 9876543211" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="emergencyPhone">
                            Emergency phone <span className="text-red-500">*</span>
                          </Label>
                          <Input id="emergencyPhone" defaultValue="+91 9876543212" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="address">
                            Address <span className="text-red-500">*</span>
                          </Label>
                          <Input id="address" defaultValue="123 Main Street, City" className="mt-1" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Tab 2: Employee Status */}
                <TabsContent value="status">
                  <Card>
                    <CardHeader>
                      <CardTitle>Employee Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="dateJoined">Date of joined</Label>
                          <Input id="dateJoined" defaultValue="01/01/2023" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="endProbation">End of probation</Label>
                          <Input id="endProbation" defaultValue="01/07/2023" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="dateRelieving">Date of Relieving</Label>
                          <Input id="dateRelieving" placeholder="Not applicable" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="jobType">Job type</Label>
                          <Input id="jobType" defaultValue="Full-time" className="mt-1 border-2 border-blue-500" />
                        </div>
                        <div>
                          <Label htmlFor="employmentStatus">Status of Employment</Label>
                          <Input id="employmentStatus" defaultValue="Active" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="maritalStatus">Marital Status</Label>
                          <Input id="maritalStatus" defaultValue="Single" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="anniversaryDate">Anniversary Date</Label>
                          <Input id="anniversaryDate" placeholder="Not applicable" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="children">Children</Label>
                          <Input id="children" defaultValue="0" className="mt-1" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Tab 3: Remarks */}
                <TabsContent value="remarks">
                  <Card>
                    <CardHeader>
                      <CardTitle>Remarks</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <Label htmlFor="positiveRemarks">Positive Remarks</Label>
                        <Textarea
                          id="positiveRemarks"
                          placeholder="Enter positive remarks about the employee..."
                          className="mt-1 min-h-[120px]"
                          defaultValue="Excellent problem-solving skills and great team player. Shows initiative in learning new technologies."
                        />
                      </div>
                      <div>
                        <Label htmlFor="negativeRemarks">Negative Remarks</Label>
                        <Textarea
                          id="negativeRemarks"
                          placeholder="Enter areas for improvement..."
                          className="mt-1 min-h-[120px]"
                          defaultValue="Could improve time management skills and communication in meetings."
                        />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
