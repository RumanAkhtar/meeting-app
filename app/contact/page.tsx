"use client"

import type React from "react"

import { LandingHeader } from "@/components/landing/landing-header"
import { LandingFooter } from "@/components/landing/landing-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MotionDiv, MotionH1, MotionH2, MotionP, MotionSection, fadeIn, staggerContainer } from "@/components/ui/motion"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Mail, MapPin, MessageSquare, Phone } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [inquiryType, setInquiryType] = useState("general")
  const [companySize, setCompanySize] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "We've received your message and will get back to you soon.",
      })
      setIsSubmitting(false)
      setName("")
      setEmail("")
      setCompany("")
      setInquiryType("general")
      setCompanySize("")
      setMessage("")
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-brand" />,
      title: "Email",
      details: "info@meetnext.com",
      description: "For general inquiries",
    },
    {
      icon: <Phone className="h-6 w-6 text-brand" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 5pm EST",
    },
    {
      icon: <Building2 className="h-6 w-6 text-brand" />,
      title: "Headquarters",
      details: "San Francisco, CA",
      description: "101 Market St, Suite 400",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-brand" />,
      title: "Live Chat",
      details: "Available on our website",
      description: "24/7 support for Pro and Enterprise",
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
                Get in <span className="text-brand">Touch</span>
              </MotionH1>
              <MotionP className="mb-8 text-xl text-muted-foreground">
                Have questions about MeetNext? We're here to help. Reach out to our team and we'll get back to you as
                soon as possible.
              </MotionP>
            </MotionDiv>
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
            <div className="grid gap-12 lg:grid-cols-2">
              <MotionDiv variants={fadeIn("right", 0.2)}>
                <MotionH2 className="mb-6 text-3xl font-bold tracking-tight">Contact Information</MotionH2>
                <MotionP className="mb-8 text-muted-foreground">
                  Choose the most convenient way to reach us. Our team is ready to assist you with any questions or
                  concerns.
                </MotionP>

                <div className="grid gap-6 sm:grid-cols-2">
                  {contactInfo.map((item, index) => (
                    <MotionDiv
                      key={index}
                      variants={fadeIn("up", 0.1 * (index + 1))}
                      className="rounded-lg border bg-card p-6"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-light/30">
                        {item.icon}
                      </div>
                      <h3 className="mb-1 text-lg font-medium">{item.title}</h3>
                      <p className="font-medium">{item.details}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </MotionDiv>
                  ))}
                </div>

                <MotionDiv variants={fadeIn("up", 0.6)} className="mt-12">
                  <Card>
                    <CardContent className="p-0">
                      <div className="aspect-[16/9] w-full overflow-hidden rounded-t-lg">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968870204824!2d-122.39973538468212!3d37.79183997975723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858062c2c9e2c5%3A0x6c296c66aea1d7ee!2s101%20Market%20St%2C%20San%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1645564756046!5m2!1sen!2sus"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          className="h-full w-full"
                        ></iframe>
                      </div>
                      <div className="flex items-center gap-2 p-4">
                        <MapPin className="h-5 w-5 text-brand" />
                        <span>101 Market St, Suite 400, San Francisco, CA 94105</span>
                      </div>
                    </CardContent>
                  </Card>
                </MotionDiv>
              </MotionDiv>

              <MotionDiv variants={fadeIn("left", 0.3)}>
                <MotionH2 className="mb-6 text-3xl font-bold tracking-tight">Send Us a Message</MotionH2>
                <MotionP className="mb-8 text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </MotionP>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        placeholder="Acme Inc."
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company-size">Company Size</Label>
                      <Select value={companySize} onValueChange={setCompanySize}>
                        <SelectTrigger id="company-size">
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-500">201-500 employees</SelectItem>
                          <SelectItem value="501+">501+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Inquiry Type</Label>
                    <RadioGroup value={inquiryType} onValueChange={setInquiryType} className="flex flex-wrap gap-6">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="general" id="general" />
                        <Label htmlFor="general">General Inquiry</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sales" id="sales" />
                        <Label htmlFor="sales">Sales</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="support" id="support" />
                        <Label htmlFor="support">Technical Support</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="partnership" id="partnership" />
                        <Label htmlFor="partnership">Partnership</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-brand hover:bg-brand-dark" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
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
                Need immediate assistance?
              </MotionH2>
              <MotionP className="mb-8 text-lg text-white/80">
                Our support team is available 24/7 for Pro and Enterprise customers.
              </MotionP>
              <Button asChild size="lg" className="bg-white text-brand-dark hover:bg-white/90">
                <a href="tel:+15551234567">Call Us Now</a>
              </Button>
            </MotionDiv>
          </div>
        </MotionSection>
      </main>
      <LandingFooter />
    </div>
  )
}

