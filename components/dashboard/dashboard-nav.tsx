"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Video, Calendar, Users, Settings, BarChart, FileText } from "lucide-react"

interface DashboardNavProps {
  mobile?: boolean
  onNavClick?: () => void
}

export function DashboardNav({ mobile, onNavClick }: DashboardNavProps) {
  const pathname = usePathname()

  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
    },
    {
      title: "Meetings",
      href: "/dashboard/meetings",
      icon: <Video className="mr-2 h-4 w-4" />,
    },
    {
      title: "Schedule",
      href: "/dashboard/schedule",
      icon: <Calendar className="mr-2 h-4 w-4" />,
    },
    {
      title: "Contacts",
      href: "/dashboard/contacts",
      icon: <Users className="mr-2 h-4 w-4" />,
    },
    {
      title: "Recordings",
      href: "/dashboard/recordings",
      icon: <FileText className="mr-2 h-4 w-4" />,
    },
    {
      title: "Analytics",
      href: "/dashboard/analytics",
      icon: <BarChart className="mr-2 h-4 w-4" />,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
    },
  ]

  return (
    <nav className={cn("flex flex-col gap-2 p-4", mobile && "mt-4")}>
      {navItems.map((item) => (
        <Button
          key={item.href}
          variant={pathname === item.href ? "secondary" : "ghost"}
          className="justify-start"
          asChild
          onClick={onNavClick}
        >
          <Link href={item.href}>
            {item.icon}
            {item.title}
          </Link>
        </Button>
      ))}
    </nav>
  )
}

