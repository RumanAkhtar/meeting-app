"use client"

import Link from "next/link"
import { Video } from "lucide-react"
import { MotionDiv, MotionFooter } from "@/components/ui/motion"

export function LandingFooter() {
  return (
    <MotionFooter
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-t bg-background"
    >
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-2 lg:col-span-2"
          >
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Video className="h-6 w-6 text-brand" />
              <span className="text-xl font-bold">MeetNext</span>
            </Link>
            <p className="mb-4 text-sm text-muted-foreground">
              A virtual collaboration platform designed to provide users with a reliable and feature-rich environment
              for seamless remote meetings.
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-sm font-medium">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/features" className="text-muted-foreground transition-colors hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground transition-colors hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="text-muted-foreground transition-colors hover:text-foreground">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-muted-foreground transition-colors hover:text-foreground">
                  Changelog
                </Link>
              </li>
            </ul>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground transition-colors hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground transition-colors hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-sm font-medium">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-muted-foreground transition-colors hover:text-foreground">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground transition-colors hover:text-foreground">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground transition-colors hover:text-foreground">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="/licenses" className="text-muted-foreground transition-colors hover:text-foreground">
                  Licenses
                </Link>
              </li>
            </ul>
          </MotionDiv>
        </div>

        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row"
        >
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} MeetNext. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="https://twitter.com" className="text-muted-foreground transition-colors hover:text-foreground">
              Twitter
            </Link>
            <Link href="https://github.com" className="text-muted-foreground transition-colors hover:text-foreground">
              GitHub
            </Link>
            <Link href="https://linkedin.com" className="text-muted-foreground transition-colors hover:text-foreground">
              LinkedIn
            </Link>
          </div>
        </MotionDiv>
      </div>
    </MotionFooter>
  )
}

