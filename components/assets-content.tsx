"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Laptop, Monitor, Keyboard, Mouse, Cable, FileText, Shield, Users } from "lucide-react"

const assetItems = [
  {
    id: 1,
    name: "Laptop",
    icon: Laptop,
    note: "",
  },
  {
    id: 2,
    name: "Desktop",
    icon: Monitor,
    note: "",
  },
  {
    id: 3,
    name: "Keyboard",
    icon: Keyboard,
    note: "",
  },
  {
    id: 4,
    name: "Mouse",
    icon: Mouse,
    note: "",
  },
  {
    id: 5,
    name: "HDMI cable",
    icon: Cable,
    note: "",
  },
  {
    id: 6,
    name: "Licence-1",
    icon: FileText,
    note: "",
  },
  {
    id: 7,
    name: "Licence-2",
    icon: Shield,
    note: "",
  },
  {
    id: 8,
    name: "Licence-3",
    icon: Users,
    note: "",
  },
]

export default function AssetsContent() {
  const [assets, setAssets] = useState(assetItems)

  const handleNoteChange = (id: number, note: string) => {
    setAssets((prev) => prev.map((asset) => (asset.id === id ? { ...asset, note } : asset)))
  }

  const handleSubmit = () => {
    console.log("Assets with notes:", assets)
    // Handle form submission here
    alert("Assets information submitted successfully!")
  }

  return (
    <div className="space-y-6 text-center">
      {/* Page Heading */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Assets</h1>
      </div>

      {/* Assets Grid */}
      <div className="grid grid-cols-4 gap-6">
        {assets.map((asset) => {
          const IconComponent = asset.icon
          return (
            <Card key={asset.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  {/* Asset Name */}
                  <h3 className="text-sm font-medium text-gray-900 mb-4">{asset.name}</h3>

                  {/* Asset Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-10 h-10 text-gray-600" />
                    </div>
                  </div>

                  {/* Note Input */}
                  <div className="space-y-2">
                    <Label htmlFor={`note-${asset.id}`} className="text-xs text-gray-600">
                      Note
                    </Label>
                    <Input
                      id={`note-${asset.id}`}
                      placeholder="Add a note..."
                      value={asset.note}
                      onChange={(e) => handleNoteChange(asset.id, e.target.value)}
                      className="text-sm"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Submit Button */}
      <div className="flex justify-end pt-6">
        <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700 px-8 py-2">
          Submit
        </Button>
      </div>
    </div>
  )
}
