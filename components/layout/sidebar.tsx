"use client"

import { usePathname } from "next/navigation"
import { Calendar, Users, DollarSign, Heart, FileText, HardDrive, File, LogOut } from "lucide-react"

const sidebarItems = [
  { icon: Users, label: "Dashboard", href: "/" },
  { icon: Users, label: "Employee", href: "/employee" },
  { icon: Calendar, label: "Calendar", href: "/calendar" },
  //{ icon: Car, label: "Travel", href: "/travel" },
  { icon: DollarSign, label: "My Financial", href: "/financial" },
  { icon: Heart, label: "Medical", href: "/medical" },
  { icon: FileText, label: "Expenses Claims", href: "/expenses" },
  { icon: HardDrive, label: "Assets", href: "/assets" },
  { icon: File, label: "Other Documents", href: "/documents" },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-80 h-full bg-blue-600 text-white flex flex-col">
      {/* Logo Section */}
      <div className="p-4 border-b border-blue-500">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden">
            <img
              src="/srnr_logo.jpeg"
              alt="SRNR Logo"
              className="w-10 h-10 object-contain"
            />
          </div>
          <div>
            <h1 className="text-lg font-semibold font-Orbitron">SRNR IT SOLUTIONS</h1>
            {/* Replace 'font-serif' with your desired Tailwind font class or add a custom class */}
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          {sidebarItems.map((item, index) => {
            const isActive = pathname === item.href || (item.href === "/calendar" && pathname.startsWith("/calendar"))
            return (
              <li key={index}>
                <a
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive ? "bg-white text-blue-600" : "text-white hover:bg-blue-500"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Logout Section */}
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
  )
}
