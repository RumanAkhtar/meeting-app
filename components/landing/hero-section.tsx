"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MotionDiv, MotionH1, MotionP, MotionSection } from "@/components/ui/motion"

export function HeroSection() {
  return (
    <MotionSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden py-20 md:py-32"
    >
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <MotionH1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
              >
                Virtual Meetings <span className="text-brand">Reimagined</span>
              </MotionH1>
              <MotionP
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="max-w-[600px] text-lg text-muted-foreground sm:text-xl"
              >
                Connect, collaborate, and communicate with crystal-clear video, immersive audio, and powerful tools
                designed for modern teams.
              </MotionP>
            </div>
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button asChild size="lg" className="bg-brand hover:bg-brand-dark">
                <Link href="/signup">Get Started for Free</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/demo">See it in Action</Link>
              </Button>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex items-center gap-4 text-sm"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="inline-block h-8 w-8 overflow-hidden rounded-full border-2 border-background">
                    <Image
                      src={`/placeholder.svg?height=32&width=32`}
                      width={32}
                      height={32}
                      alt={`User ${i}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground">
                Trusted by <span className="font-medium text-foreground">10,000+</span> teams worldwide
              </p>
            </MotionDiv>
          </div>
          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-light/20 to-brand-medium/20 rounded-xl"></div>
            <div className="relative mx-auto aspect-video w-full max-w-[600px] overflow-hidden rounded-xl border bg-muted shadow-xl lg:mx-0">
              <Image
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={800}
                height={600}
                alt="MeetNext platform interface"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-brand-medium/30 backdrop-blur-xl"></div>
            <div className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-brand-light/30 backdrop-blur-xl"></div>
          </MotionDiv>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,#88BDF2,transparent_50%)]"></div>
    </MotionSection>
  )
}

