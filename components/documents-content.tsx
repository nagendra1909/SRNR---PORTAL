"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Plus, FileText } from "lucide-react"

interface FileItem {
  id: string
  name: string
  size: string
  date: string
  type: "pdf" | "doc" | "image"
  color: "red" | "purple" | "blue"
}

const attachmentFiles: FileItem[] = [
  { id: "1", name: "File Title.pdf", size: "313 KB", date: "31 Aug, 2022", type: "pdf", color: "red" },
  { id: "2", name: "File Title.pdf", size: "313 KB", date: "31 Aug, 2022", type: "pdf", color: "purple" },
  { id: "3", name: "File Title.pdf", size: "313 KB", date: "31 Aug, 2022", type: "pdf", color: "red" },
  { id: "4", name: "File Title.pdf", size: "313 KB", date: "31 Aug, 2022", type: "pdf", color: "purple" },
]

interface CertificationCardProps {
  title: string
  onDownload: () => void
}

function CertificationCard({ title, onDownload }: CertificationCardProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-gray-700">{title}</h3>
      <Card className="border-2 border-dashed border-blue-300 bg-blue-50">
        <CardContent className="p-6">
          <div className="text-center space-y-3">
            <div className="flex justify-center">
              <Download className="w-6 h-6 text-blue-500" />
            </div>
            <p className="text-sm text-gray-600">Download file here</p>
            <Button
              variant="outline"
              size="sm"
              onClick={onDownload}
              className="text-blue-600 border-blue-600 hover:bg-blue-50"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

interface FileListItemProps {
  file: FileItem
  onDownload: () => void
}

function FileListItem({ file, onDownload }: FileListItemProps) {
  const getFileIcon = () => {
    const baseClasses = "w-8 h-8 rounded"
    const colorClasses = {
      red: "bg-red-500 text-white",
      purple: "bg-purple-500 text-white",
      blue: "bg-blue-500 text-white",
    }

    return (
      <div className={`${baseClasses} ${colorClasses[file.color]} flex items-center justify-center`}>
        <FileText className="w-4 h-4" />
      </div>
    )
  }

  return (
    <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg border-b border-gray-100">
      <div className="flex items-center space-x-4">
        {getFileIcon()}
        <div>
          <h4 className="text-sm font-medium text-gray-900">{file.name}</h4>
          <p className="text-xs text-gray-500">
            {file.size} • {file.date}
          </p>
        </div>
      </div>
      <Button variant="ghost" size="sm" onClick={onDownload} className="text-gray-600 hover:text-gray-900">
        <Download className="w-4 h-4" />
      </Button>
    </div>
  )
}

export default function DocumentsContent() {
  const [activeTab, setActiveTab] = useState("training")

  const handleCertificationDownload = (type: string, number: number) => {
    console.log(`Downloading ${type} certification ${number}`)
    alert(`Downloading ${type} Certification ${number}`)
  }

  const handleFileDownload = (fileName: string) => {
    console.log(`Downloading file: ${fileName}`)
    alert(`Downloading ${fileName}`)
  }

  const handleAddNewFile = () => {
    console.log("Adding new file")
    alert("Add new file functionality")
  }

  const handleSubmit = () => {
    console.log("Submitting documents")
    alert("Documents submitted successfully!")
  }

  const renderCertificationGrid = (type: string) => {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900 text-center">
          {type === "training" && "Training Certification"}
          {type === "appreciation" && "Appreciation Certification"}
          {type === "milestone" && "Milestone Certification"}
        </h2>

        <div className="grid grid-cols-2 gap-6">
          {Array.from({ length: 12 }, (_, index) => (
            <CertificationCard
              key={index + 1}
              title={`Certification ${index + 1}`}
              onDownload={() => handleCertificationDownload(type, index + 1)}
            />
          ))}
        </div>

        <div className="flex justify-center pt-6">
          <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700 px-8 py-2">
            Submit
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Page Heading */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Documents</h1>
      </div>

      {/* Tabs Interface */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="training" className="text-sm">
            Training Certification
          </TabsTrigger>
          <TabsTrigger value="appreciation" className="text-sm">
            Appreciation Certification
          </TabsTrigger>
          <TabsTrigger value="milestone" className="text-sm">
            Milestone Certification
          </TabsTrigger>
          <TabsTrigger value="attachments" className="text-sm">
            Attachments
          </TabsTrigger>
        </TabsList>

        {/* Training Certification Tab */}
        <TabsContent value="training">{renderCertificationGrid("training")}</TabsContent>

        {/* Appreciation Certification Tab */}
        <TabsContent value="appreciation">{renderCertificationGrid("appreciation")}</TabsContent>

        {/* Milestone Certification Tab */}
        <TabsContent value="milestone">{renderCertificationGrid("milestone")}</TabsContent>

        {/* Attachments Tab */}
        <TabsContent value="attachments">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Attachments</h2>
              <Button onClick={handleAddNewFile} className="bg-blue-600 hover:bg-blue-700" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add a new file
              </Button>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="space-y-0">
                  {attachmentFiles.map((file) => (
                    <FileListItem key={file.id} file={file} onDownload={() => handleFileDownload(file.name)} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
