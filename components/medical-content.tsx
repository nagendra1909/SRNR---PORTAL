"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Upload } from "lucide-react"

interface FileCardProps {
  title: string
  onUpload?: () => void
  onDownload?: () => void
}

function FileCard({ title, onUpload, onDownload }: FileCardProps) {
  const [isDragOver, setIsDragOver] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    // Handle file drop
    const files = e.dataTransfer.files
    if (files.length > 0) {
      console.log("File dropped:", files[0].name)
      onUpload?.()
    }
  }

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-gray-700">{title}</h3>
      <Card
        className={`border-2 border-dashed transition-colors ${
          isDragOver ? "border-blue-400 bg-blue-50" : "border-blue-300 bg-blue-50"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <CardContent className="p-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <Download className="w-8 h-8 text-blue-500" />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Download file here ⬇️</p>
              <div className="flex justify-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onDownload}
                  className="text-blue-600 border-blue-600 hover:bg-blue-50"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onUpload}
                  className="text-blue-600 border-blue-600 hover:bg-blue-50"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Upload
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default function MedicalContent() {
  const handleInsuranceFormDownload = () => {
    console.log("Downloading insurance form...")
    // Handle download logic
  }

  const handleInsuranceFormUpload = () => {
    console.log("Uploading insurance form...")
    // Handle upload logic
  }

  const handleInsuranceCardDownload = () => {
    console.log("Downloading insurance card...")
    // Handle download logic
  }

  const handleInsuranceCardUpload = () => {
    console.log("Uploading insurance card...")
    // Handle upload logic
  }

  const handleESIFormDownload = () => {
    console.log("Downloading ESI form...")
    // Handle download logic
  }

  const handleESIFormUpload = () => {
    console.log("Uploading ESI form...")
    // Handle upload logic
  }

  const handleESICardDownload = () => {
    console.log("Downloading ESI card...")
    // Handle download logic
  }

  const handleESICardUpload = () => {
    console.log("Uploading ESI card...")
    // Handle upload logic
  }

  const handleAvailInsurance = () => {
    console.log("Availing insurance...")
    alert("Insurance application submitted successfully!")
  }

  const handleAvailESI = () => {
    console.log("Availing ESI...")
    alert("ESI application submitted successfully!")
  }

  return (
    <div className="space-y-8">
      {/* Page Heading */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Medical</h1>
      </div>

      {/* Insurance Details Section */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">Insurance Details</h2>

        <div className="grid grid-cols-2 gap-8">
          <FileCard
            title="Insurance form"
            onDownload={handleInsuranceFormDownload}
            onUpload={handleInsuranceFormUpload}
          />
          <FileCard
            title="Insurance Card"
            onDownload={handleInsuranceCardDownload}
            onUpload={handleInsuranceCardUpload}
          />
        </div>

        <div className="flex justify-center pt-4">
          <Button onClick={handleAvailInsurance} className="bg-blue-600 hover:bg-blue-700 px-8 py-2">
            Avail Insurance
          </Button>
        </div>
      </div>

      {/* ESI Details Section */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">ESI Details</h2>

        <div className="grid grid-cols-2 gap-8">
          <FileCard title="ESI form" onDownload={handleESIFormDownload} onUpload={handleESIFormUpload} />
          <FileCard title="ESI Card" onDownload={handleESICardDownload} onUpload={handleESICardUpload} />
        </div>

        <div className="flex justify-center pt-4">
          <Button onClick={handleAvailESI} className="bg-blue-600 hover:bg-blue-700 px-8 py-2">
            Avail ESI
          </Button>
        </div>
      </div>
    </div>
  )
}
