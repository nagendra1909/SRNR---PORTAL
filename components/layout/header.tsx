"use client"

import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface HeaderProps {
  title: string
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-gray-900 pl-5">{title}</h1>

        <div className="flex items-center space-x-4 px-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input placeholder="Quick Search..." className="pl-10 w-80" />
          </div>
           <div className="text-4xl font-thin pl-8">|</div>
          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5" />
          </Button>

          <div className="flex items-center space-x-3 px-8">
            <Avatar>
              <AvatarImage src="/sample_profile.png?height=32&width=32" />
              <AvatarFallback>B</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <div className="font-medium">Yaswanth</div>
              <div className="text-gray-500">@domain.in</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
