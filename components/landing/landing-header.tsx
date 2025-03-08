"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Video, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState, useEffect } from "react"
import { MotionDiv, MotionHeader } from "@/components/ui/motion"

export function LandingHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <MotionHeader
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 ${
        scrolled ? "bg-background/95 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <MotionDiv
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2"
        >
          <Link href="/" className="flex items-center gap-2">
            <Video className="h-6 w-6 text-brand" />
            <span className="text-xl font-bold">MeetNext</span>
          </Link>
        </MotionDiv>

        <nav className="hidden gap-6 md:flex">
          {[
            { href: "/features", label: "Features" },
            { href: "/pricing", label: "Pricing" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
            { href: "/demo", label: "Demo" },
          ].map((item, index) => (
            <MotionDiv
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
            >
              <Link href={item.href} className="text-sm font-medium transition-colors hover:text-brand">
                {item.label}
              </Link>
            </MotionDiv>
          ))}
        </nav>

        <MotionDiv
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden items-center gap-4 md:flex"
        >
          <ModeToggle />
          <Button variant="ghost" asChild>
            <Link href="/login">Log in</Link>
          </Button>
          <Button asChild className="bg-brand hover:bg-brand-dark">
            <Link href="/signup">Sign up</Link>
          </Button>
        </MotionDiv>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 py-4">
              <Link
                href="/features"
                className="text-sm font-medium transition-colors hover:text-brand"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-medium transition-colors hover:text-brand"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium transition-colors hover:text-brand"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium transition-colors hover:text-brand"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/demo"
                className="text-sm font-medium transition-colors hover:text-brand"
                onClick={() => setIsOpen(false)}
              >
                Demo
              </Link>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="ghost" asChild onClick={() => setIsOpen(false)}>
                  <Link href="/login">Log in</Link>
                </Button>
                <Button asChild className="bg-brand hover:bg-brand-dark" onClick={() => setIsOpen(false)}>
                  <Link href="/signup">Sign up</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </MotionHeader>
  )
}

