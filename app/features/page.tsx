"use client"

import { LandingHeader } from "@/components/landing/landing-header"
import { LandingFooter } from "@/components/landing/landing-footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import {
  Video,
  MessageSquare,
  Share2,
  Calendar,
  Shield,
  Users,
  Layers,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import { MotionDiv, MotionH1, MotionH2, MotionP, MotionSection, fadeIn, staggerContainer } from "@/components/ui/motion"

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: <Video className="h-10 w-10 text-brand" />,
      title: "HD Video & Audio",
      description: "Crystal-clear video and immersive audio for a natural meeting experience.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-brand" />,
      title: "Chat & Collaboration",
      description: "Real-time messaging with text, emojis, and file sharing capabilities.",
    },
    {
      icon: <Share2 className="h-10 w-10 text-brand" />,
      title: "Screen Sharing",
      description: "Share your screen, applications, or specific windows with one click.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-brand" />,
      title: "Scheduling",
      description: "Easily schedule meetings and integrate with your favorite calendar apps.",
    },
    {
      icon: <Shield className="h-10 w-10 text-brand" />,
      title: "Secure Meetings",
      description: "End-to-end encryption and advanced security features to protect your conversations.",
    },
    {
      icon: <Users className="h-10 w-10 text-brand" />,
      title: "Breakout Rooms",
      description: "Split your meeting into smaller groups for focused discussions.",
    },
    {
      icon: <Layers className="h-10 w-10 text-brand" />,
      title: "Virtual Backgrounds",
      description: "Customize your background with images or blur effects for privacy.",
    },
    {
      icon: <Zap className="h-10 w-10 text-brand" />,
      title: "Recording & Playback",
      description: "Record your meetings and access them later with searchable transcripts.",
    },
  ]

  const detailedFeatures = [
    {
      title: "Crystal Clear Communication",
      description:
        "Experience high-definition video and audio that makes remote meetings feel like you're in the same room. Our adaptive technology adjusts to your network conditions to ensure the best quality possible.",
      image: "/placeholder.svg?height=400&width=600",
      benefits: [
        "HD video up to 1080p",
        "Noise cancellation technology",
        "Automatic bandwidth adjustment",
        "Echo reduction algorithms",
      ],
    },
    {
      title: "Seamless Collaboration Tools",
      description:
        "Work together in real-time with powerful collaboration features that enhance productivity. Share ideas, documents, and feedback without leaving your meeting.",
      image: "/placeholder.svg?height=400&width=600",
      benefits: ["Interactive whiteboard", "Document annotation", "Real-time co-editing", "Polls and surveys"],
    },
    {
      title: "Enterprise-Grade Security",
      description:
        "Keep your meetings and data secure with our comprehensive security measures. We prioritize your privacy with end-to-end encryption and advanced access controls.",
      image: "/placeholder.svg?height=400&width=600",
      benefits: ["End-to-end encryption", "Waiting room functionality", "Meeting passwords", "Role-based permissions"],
    },
    {
      title: "Smart Meeting Management",
      description:
        "Organize and manage your meetings efficiently with our intuitive scheduling and calendar integration. Never miss an important meeting again.",
      image: "/placeholder.svg?height=400&width=600",
      benefits: ["Calendar integrations", "Automated reminders", "Custom recurring meetings", "Time zone intelligence"],
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
          <div className="container text-center">
            <MotionDiv variants={fadeIn("up", 0.1)} className="mx-auto max-w-3xl">
              <MotionH1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Powerful Features for <span className="text-brand">Seamless Collaboration</span>
              </MotionH1>
              <MotionP className="mb-8 text-xl text-muted-foreground">
                Discover all the tools you need to make your virtual meetings productive, engaging, and secure.
              </MotionP>
            </MotionDiv>
          </div>
        </MotionSection>

        <MotionSection
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-20"
        >
          <div className="container">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {mainFeatures.map((feature, index) => (
                <MotionDiv
                  key={index}
                  variants={fadeIn("up", 0.1 * index)}
                  className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-brand-medium/50"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="mb-2 text-xl font-medium">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </MotionDiv>
              ))}
            </div>
          </div>
        </MotionSection>

        {detailedFeatures.map((feature, index) => (
          <MotionSection
            key={index}
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`py-20 ${index % 2 === 1 ? "bg-brand-light/10" : ""}`}
          >
            <div className="container">
              <div className={`grid gap-12 items-center lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                <MotionDiv
                  variants={fadeIn(index % 2 === 0 ? "right" : "left", 0.2)}
                  className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                >
                  <MotionH2 className="mb-4 text-3xl font-bold tracking-tight">{feature.title}</MotionH2>
                  <MotionP className="mb-6 text-lg text-muted-foreground">{feature.description}</MotionP>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, i) => (
                      <MotionDiv key={i} variants={fadeIn("up", 0.1 * (i + 1))} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand" />
                        <span>{benefit}</span>
                      </MotionDiv>
                    ))}
                  </ul>
                </MotionDiv>
                <MotionDiv
                  variants={fadeIn(index % 2 === 0 ? "left" : "right", 0.3)}
                  className={`relative rounded-xl overflow-hidden border shadow-lg ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                >
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    width={600}
                    height={400}
                    alt={feature.title}
                    className="w-full h-auto object-cover"
                  />
                </MotionDiv>
              </div>
            </div>
          </MotionSection>
        ))}

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

