"use client"

import Link from "next/link"
import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Video, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import { UserNav } from "@/components/dashboard/user-nav"
import { DashboardNav } from "@/components/dashboard/dashboard-nav"

export function DashboardHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center gap-2 md:mr-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <div className="px-7">
                <Link href="/" className="flex items-center gap-2 pb-4">
                  <Video className="h-6 w-6 text-primary" />
                  <span className="text-lg font-bold">MeetNext</span>
                </Link>
              </div>
              <DashboardNav mobile onNavClick={() => setIsOpen(false)} />
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <Video className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold hidden md:inline-block">MeetNext</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end gap-4">
          <Button asChild variant="default" size="sm" className="rounded-full">
            <Link href="/meeting/new">New Meeting</Link>
          </Button>
          <ModeToggle />
          {user && <UserNav user={user} />}
        </div>
      </div>
    </header>
  )
}

