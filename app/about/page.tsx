"use client"

import { LandingHeader } from "@/components/landing/landing-header"
import { LandingFooter } from "@/components/landing/landing-footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { MotionDiv, MotionH1, MotionH2, MotionP, MotionSection, fadeIn, staggerContainer } from "@/components/ui/motion"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, Heart, Target, Users } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      bio: "Former VP of Product at Zoom with 15+ years of experience in video conferencing technology.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      bio: "Previously led engineering teams at Google Meet, specializing in WebRTC and real-time communication.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Elena Rodriguez",
      role: "Chief Design Officer",
      bio: "Award-winning UX designer with a passion for creating intuitive and accessible user experiences.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      bio: "Scaling expert who previously built infrastructure for millions of concurrent users at Twitch.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const values = [
    {
      icon: <Users className="h-8 w-8 text-brand" />,
      title: "User-Centered",
      description:
        "We put our users at the center of everything we do, constantly seeking feedback and improving our platform.",
    },
    {
      icon: <Target className="h-8 w-8 text-brand" />,
      title: "Innovation",
      description: "We're committed to pushing the boundaries of what's possible in virtual collaboration.",
    },
    {
      icon: <Award className="h-8 w-8 text-brand" />,
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of our product and service, never settling for 'good enough'.",
    },
    {
      icon: <Heart className="h-8 w-8 text-brand" />,
      title: "Inclusivity",
      description: "We design for everyone, ensuring our platform is accessible and welcoming to all users.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <LandingHeader />
      <main className="flex-1">
        <MotionSection
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-brand-light/20 py-20 md:py-28"
        >
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <MotionDiv variants={fadeIn("right", 0.2)}>
                <MotionH1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Our Mission is to <span className="text-brand">Transform</span> Virtual Collaboration
                </MotionH1>
                <MotionP className="mb-8 text-xl text-muted-foreground">
                  We're building the future of remote communication, where distance is no longer a barrier to meaningful
                  connection and productive teamwork.
                </MotionP>
              </MotionDiv>
              <MotionDiv
                variants={fadeIn("left", 0.3)}
                className="relative rounded-xl overflow-hidden border shadow-lg"
              >
                <Image
                  src="/placeholder.svg?height=500&width=700"
                  width={700}
                  height={500}
                  alt="MeetNext team collaboration"
                  className="w-full h-auto object-cover"
                />
              </MotionDiv>
            </div>
          </div>
        </MotionSection>

        <MotionSection
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-20"
        >
          <div className="container">
            <MotionDiv variants={fadeIn("up", 0.1)} className="text-center mb-12">
              <MotionH2 className="text-3xl font-bold tracking-tight">Our Story</MotionH2>
              <MotionP className="mx-auto max-w-3xl mt-4 text-muted-foreground">
                Founded in 2020 during the global shift to remote work, MeetNext was born from a simple idea: virtual
                meetings should be as effective and engaging as in-person collaboration.
              </MotionP>
            </MotionDiv>

            <MotionDiv variants={fadeIn("up", 0.2)} className="mx-auto max-w-3xl mb-16">
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Our founders, Sarah Johnson and Michael Chen, experienced firsthand the limitations of existing video
                  conferencing tools while working at leading tech companies. They envisioned a platform that would not
                  just connect people virtually, but would enhance collaboration and make remote meetings more
                  productive and enjoyable.
                </p>
                <p>
                  Starting with a small team of passionate engineers and designers, MeetNext quickly grew as remote work
                  became the new normal. Today, we serve thousands of organizations worldwide, from small startups to
                  Fortune 500 companies, all while staying true to our original mission.
                </p>
                <p>
                  As we continue to grow, we remain committed to innovation, constantly pushing the boundaries of what's
                  possible in virtual collaboration. We believe that the future of work is flexible, and we're building
                  the tools to make that future successful for teams everywhere.
                </p>
              </div>
            </MotionDiv>

            <MotionDiv variants={fadeIn("up", 0.3)} className="text-center mb-12">
              <MotionH2 className="text-3xl font-bold tracking-tight">Our Values</MotionH2>
            </MotionDiv>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20">
              {values.map((value, index) => (
                <MotionDiv
                  key={index}
                  variants={fadeIn("up", 0.1 * (index + 1))}
                  className="rounded-lg border bg-card p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-light/30">
                    {value.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-medium">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </MotionDiv>
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-brand-light/10 py-20"
        >
          <div className="container">
            <MotionDiv variants={fadeIn("up", 0.1)} className="text-center mb-12">
              <MotionH2 className="text-3xl font-bold tracking-tight">Meet Our Leadership Team</MotionH2>
              <MotionP className="mx-auto max-w-3xl mt-4 text-muted-foreground">
                Our diverse team brings together expertise from the world's leading technology companies, united by a
                passion for transforming how people connect virtually.
              </MotionP>
            </MotionDiv>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <MotionDiv key={index} variants={fadeIn("up", 0.1 * (index + 1))} className="group">
                  <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={300}
                        height={300}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium">{member.name}</h3>
                      <p className="mb-2 text-sm font-medium text-brand">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.bio}</p>
                    </CardContent>
                  </Card>
                </MotionDiv>
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-20"
        >
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <MotionDiv variants={fadeIn("right", 0.2)}>
                <div className="inline-block rounded-lg bg-brand-light/30 px-3 py-1 text-sm text-brand-dark mb-4">
                  Join Our Team
                </div>
                <MotionH2 className="mb-6 text-3xl font-bold tracking-tight">
                  We're Growing Fast and Looking for Exceptional Talent
                </MotionH2>
                <MotionP className="mb-8 text-muted-foreground">
                  At MeetNext, we're building a team of passionate individuals who are excited about creating the future
                  of virtual collaboration. We offer competitive compensation, flexible work arrangements, and a culture
                  that values diversity, creativity, and growth.
                </MotionP>
                <Button asChild className="bg-brand hover:bg-brand-dark">
                  <Link href="/careers">
                    View Open Positions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </MotionDiv>
              <MotionDiv
                variants={fadeIn("left", 0.3)}
                className="relative rounded-xl overflow-hidden border shadow-lg"
              >
                <Image
                  src="/placeholder.svg?height=500&width=700"
                  width={700}
                  height={500}
                  alt="MeetNext office culture"
                  className="w-full h-auto object-cover"
                />
              </MotionDiv>
            </div>
          </div>
        </MotionSection>

        <MotionSection
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-brand-dark text-white py-20"
        >
          <div className="container text-center">
            <MotionDiv variants={fadeIn("up", 0.1)} className="mx-auto max-w-3xl">
              <MotionH2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to transform your virtual meetings?
              </MotionH2>
              <MotionP className="mb-8 text-lg text-white/80">
                Join thousands of teams already using MeetNext to collaborate effectively.
              </MotionP>
              <MotionDiv variants={fadeIn("up", 0.3)} className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-brand-dark hover:bg-white/90">
                  <Link href="/signup">Get Started for Free</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link href="/contact">
                    Contact Sales
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </MotionDiv>
            </MotionDiv>
          </div>
        </MotionSection>
      </main>
      <LandingFooter />
    </div>
  )
}

