"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, X, FileText, ImageIcon } from "lucide-react"

interface UploadedFile {
  name: string
  size: number
  type: string
  preview?: string
}

export default function ExpensesContent() {
  const [formData, setFormData] = useState({
    name: "",
    employeeId: "",
    date: "",
    amount: "",
    description: "",
    claimLimit: "",
    typeOfClaims: "",
  })

  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null)
  const [isDragOver, setIsDragOver] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleFileUpload = (file: File) => {
    // Validate file type
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "application/pdf"]
    if (!allowedTypes.includes(file.type)) {
      alert("Only JPG, PNG, and PDF files are allowed")
      return
    }

    // Validate file size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      alert("File size must be less than 10MB")
      return
    }

    const fileData: UploadedFile = {
      name: file.name,
      size: file.size,
      type: file.type,
    }

    // Create preview for images
    if (file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = (e) => {
        fileData.preview = e.target?.result as string
        setUploadedFile(fileData)
      }
      reader.readAsDataURL(file)
    } else {
      setUploadedFile(fileData)
    }
  }

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
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFileUpload(files[0])
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFileUpload(files[0])
    }
  }

  const removeFile = () => {
    setUploadedFile(null)
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i]
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form Data:", formData)
    console.log("Uploaded File:", uploadedFile)
    alert("Expense claim submitted successfully!")
  }

  return (
    <div className="space-y-6">
      {/* Page Heading */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Expenses Claims</h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardContent className="p-6">
            {/* Form Fields - Two Column Layout */}
            <div className="grid grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="mt-1"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* Date */}
                <div>
                  <Label htmlFor="date" className="text-sm font-medium text-gray-700">
                    Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                    className="mt-1"
                    required
                  />
                </div>

                {/* Claim Limit */}
                <div>
                  <Label htmlFor="claimLimit" className="text-sm font-medium text-gray-700">
                    Claim Limit
                  </Label>
                  <Input
                    id="claimLimit"
                    type="number"
                    value={formData.claimLimit}
                    onChange={(e) => handleInputChange("claimLimit", e.target.value)}
                    className="mt-1"
                    placeholder="Enter claim limit"
                    required
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Employee ID */}
                <div>
                  <Label htmlFor="employeeId" className="text-sm font-medium text-gray-700">
                    Employee ID
                  </Label>
                  <Input
                    id="employeeId"
                    type="text"
                    value={formData.employeeId}
                    onChange={(e) => handleInputChange("employeeId", e.target.value)}
                    className="mt-1"
                    placeholder="Enter employee ID"
                    required
                  />
                </div>

                {/* Amount */}
                <div>
                  <Label htmlFor="amount" className="text-sm font-medium text-gray-700">
                    Amount
                  </Label>
                  <Input
                    id="amount"
                    type="number"
                    value={formData.amount}
                    onChange={(e) => handleInputChange("amount", e.target.value)}
                    className="mt-1"
                    placeholder="Enter amount"
                    required
                  />
                </div>

                {/* Type of Claims */}
                <div>
                  <Label htmlFor="typeOfClaims" className="text-sm font-medium text-gray-700">
                    Type of Claims
                  </Label>
                  <Select
                    value={formData.typeOfClaims}
                    onValueChange={(value) => handleInputChange("typeOfClaims", value)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select claim type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="travel">Travel Expenses</SelectItem>
                      <SelectItem value="meal">Meal Expenses</SelectItem>
                      <SelectItem value="accommodation">Accommodation</SelectItem>
                      <SelectItem value="medical">Medical Expenses</SelectItem>
                      <SelectItem value="office">Office Supplies</SelectItem>
                      <SelectItem value="communication">Communication</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Description - Full Width */}
            <div className="mt-6">
              <Label htmlFor="description" className="text-sm font-medium text-gray-700">
                Description
              </Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                className="mt-1 min-h-[120px]"
                placeholder="Enter detailed description of the expense..."
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* File Upload Section */}
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <Label className="text-sm font-medium text-gray-700">Upload Receipt/Document</Label>

              {/* Upload Area */}
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  isDragOver
                    ? "border-blue-400 bg-blue-50"
                    : uploadedFile
                      ? "border-green-400 bg-green-50"
                      : "border-gray-300 bg-gray-50"
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {!uploadedFile ? (
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <Upload className="w-12 h-12 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-gray-600 mb-2">Select a file or drag and drop here</p>
                      <p className="text-sm text-gray-500">JPG, PNG or PDF, file size no more than 10MB</p>
                    </div>
                    <div>
                      <input
                        type="file"
                        id="fileUpload"
                        className="hidden"
                        accept=".jpg,.jpeg,.png,.pdf"
                        onChange={handleFileSelect}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => document.getElementById("fileUpload")?.click()}
                        className="text-blue-600 border-blue-600 hover:bg-blue-50"
                      >
                        SELECT
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-center space-x-3">
                      {uploadedFile.type.startsWith("image/") ? (
                        <ImageIcon className="w-8 h-8 text-blue-600" />
                      ) : (
                        <FileText className="w-8 h-8 text-red-600" />
                      )}
                      <div className="text-left">
                        <p className="font-medium text-gray-900">{uploadedFile.name}</p>
                        <p className="text-sm text-gray-500">{formatFileSize(uploadedFile.size)}</p>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={removeFile}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    {uploadedFile.type.startsWith("image/") && uploadedFile.preview && (
                      <div className="flex justify-center">
                        <img
                          src={uploadedFile.preview || "/placeholder.svg"}
                          alt="Preview"
                          className="max-w-32 max-h-32 object-cover rounded border"
                        />
                      </div>
                    )}
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="text-blue-600 border-blue-600 hover:bg-blue-50"
                    >
                      Preview
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 px-8 py-2">
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}
