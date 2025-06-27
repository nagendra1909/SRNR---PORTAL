"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Download } from "lucide-react"

// Sample financial data - in real app, this would come from API
const financialData = {
  basicPay: "₹45,000",
  hra: "₹18,000",
  engagement: "₹5,000",
  bonus: "₹8,000",
  otherAllowance: "₹3,000",
  medicalAllowance: "₹2,500",
  totalTakeHome: "₹68,500",
  pf: "₹5,400",
  professionalTax: "₹200",
  costOfCompany: "₹85,000",
}

const months = [
  { value: "01", label: "January" },
  { value: "02", label: "February" },
  { value: "03", label: "March" },
  { value: "04", label: "April" },
  { value: "05", label: "May" },
  { value: "06", label: "June" },
  { value: "07", label: "July" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
]

const years = [
  { value: "2024", label: "2024" },
  { value: "2023", label: "2023" },
  { value: "2022", label: "2022" },
  { value: "2021", label: "2021" },
]

export default function FinancialContent() {
  const [selectedMonth, setSelectedMonth] = useState("")
  const [selectedYear, setSelectedYear] = useState("")

  const handleDownloadPayslip = () => {
    console.log("Downloading payslip for", selectedMonth, selectedYear)
    alert("Payslip download started!")
  }

  const handleDownloadForm16 = () => {
    console.log("Downloading Form 16 for", selectedYear)
    alert("Form 16 download started!")
  }

  const handleViewHistory = () => {
    console.log("Viewing financial history")
    alert("Redirecting to financial history...")
  }

  return (
    <div className="space-y-6">
      {/* Page Heading */}
      <div className="flex justify-center my-2">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">My Financial Details</h1>
      </div>

      {/* Month/Year Selectors and View History */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex space-x-10">
          {/* Select Month */}
          <div className="w-60">
            <Select value={selectedMonth} onValueChange={setSelectedMonth}>
              <SelectTrigger>
                <SelectValue placeholder="Select Month" />
              </SelectTrigger>
              <SelectContent>
                {months.map((month) => (
                  <SelectItem key={month.value} value={month.value}>
                    {month.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Select Year */}
          <div className="w-60">
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger>
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year.value} value={year.value}>
                    {year.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* View History Link */}
        <Button
          variant="link"
          onClick={handleViewHistory}
          className="text-blue-600 hover:text-blue-700 p-0 h-auto font-normal"
        >
          View History
        </Button>
      </div>

      {/* Financial Information Card */}
      <Card>
        <CardContent className="p-8">
          {/* Two Column Layout */}
          <div className="grid grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Basic Pay */}
              <div>
                <Label htmlFor="basicPay" className="text-sm font-medium text-gray-700 mb-2 block">
                  Basic pay
                </Label>
                <Input
                  id="basicPay"
                  value={financialData.basicPay}
                  readOnly
                  className="bg-gray-50 border-gray-200 text-gray-900 cursor-default"
                />
              </div>

              {/* HRA */}
              <div>
                <Label htmlFor="hra" className="text-sm font-medium text-gray-700 mb-2 block">
                  HRA
                </Label>
                <Input
                  id="hra"
                  value={financialData.hra}
                  readOnly
                  className="bg-gray-50 border-gray-200 text-gray-900 cursor-default"
                />
              </div>

              {/* Engagement */}
              <div>
                <Label htmlFor="engagement" className="text-sm font-medium text-gray-700 mb-2 block">
                  Engagement
                </Label>
                <Input
                  id="engagement"
                  value={financialData.engagement}
                  readOnly
                  className="bg-gray-50 border-gray-200 text-gray-900 cursor-default"
                />
              </div>

              {/* Bonus */}
              <div>
                <Label htmlFor="bonus" className="text-sm font-medium text-gray-700 mb-2 block">
                  Bonus
                </Label>
                <Input
                  id="bonus"
                  value={financialData.bonus}
                  readOnly
                  className="bg-gray-50 border-gray-200 text-gray-900 cursor-default"
                />
              </div>

              {/* Other Allowance */}
              <div>
                <Label htmlFor="otherAllowance" className="text-sm font-medium text-gray-700 mb-2 block">
                  Other Allowence
                </Label>
                <Input
                  id="otherAllowance"
                  value={financialData.otherAllowance}
                  readOnly
                  className="bg-gray-50 border-gray-200 text-gray-900 cursor-default"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Medical Allowance */}
              <div>
                <Label htmlFor="medicalAllowance" className="text-sm font-medium text-gray-700 mb-2 block">
                  Medical Allowence
                </Label>
                <Input
                  id="medicalAllowance"
                  value={financialData.medicalAllowance}
                  readOnly
                  className="bg-gray-50 border-gray-200 text-gray-900 cursor-default"
                />
              </div>

              {/* Total Take Home */}
              <div>
                <Label htmlFor="totalTakeHome" className="text-sm font-medium text-gray-700 mb-2 block">
                  Total take Home
                </Label>
                <Input
                  id="totalTakeHome"
                  value={financialData.totalTakeHome}
                  readOnly
                  className="bg-gray-50 border-gray-200 text-gray-900 cursor-default font-semibold"
                />
              </div>

              {/* PF */}
              <div>
                <Label htmlFor="pf" className="text-sm font-medium text-gray-700 mb-2 block">
                  PF
                </Label>
                <Input
                  id="pf"
                  value={financialData.pf}
                  readOnly
                  className="bg-gray-50 border-gray-200 text-gray-900 cursor-default"
                />
              </div>

              {/* Professional Tax */}
              <div>
                <Label htmlFor="professionalTax" className="text-sm font-medium text-gray-700 mb-2 block">
                  Professional Tax
                </Label>
                <Input
                  id="professionalTax"
                  value={financialData.professionalTax}
                  readOnly
                  className="bg-gray-50 border-gray-200 text-gray-900 cursor-default"
                />
              </div>

              {/* Cost of Company */}
              <div>
                <Label htmlFor="costOfCompany" className="text-sm font-medium text-gray-700 mb-2 block">
                  Cost of company
                </Label>
                <Input
                  id="costOfCompany"
                  value={financialData.costOfCompany}
                  readOnly
                  className="bg-gray-50 border-gray-200 text-gray-900 cursor-default"
                />
              </div>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
            <Button
              onClick={handleDownloadPayslip}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2"
              disabled={!selectedMonth || !selectedYear}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Payslip
            </Button>
            <Button
              onClick={handleDownloadForm16}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2"
              disabled={!selectedYear}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Form 16
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
