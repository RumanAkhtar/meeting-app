"use client"

import { LandingHeader } from "@/components/landing/landing-header"
import { LandingFooter } from "@/components/landing/landing-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Check, HelpCircle, X } from "lucide-react"
import {
  MotionDiv,
  MotionH1,
  MotionH2,
  MotionP,
  MotionSection,
  fadeIn,
  staggerContainer,
  zoomIn,
} from "@/components/ui/motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      description: "For individuals and small teams getting started.",
      price: { monthly: "$0", annual: "$0" },
      period: "forever",
      features: [
        { name: "Up to 4 participants", included: true },
        { name: "40-minute meeting limit", included: true },
        { name: "HD video quality", included: true },
        { name: "Screen sharing", included: true },
        { name: "Chat functionality", included: true },
        { name: "Virtual backgrounds", included: true },
        { name: "Recording & transcription", included: false },
        { name: "Breakout rooms", included: false },
        { name: "Admin controls", included: false },
        { name: "Custom branding", included: false },
        { name: "Priority support", included: false },
      ],
      cta: "Get Started",
      ctaLink: "/signup",
      popular: false,
    },
    {
      name: "Pro",
      description: "For teams that need more features and longer meetings.",
      price: { monthly: "$12", annual: "$10" },
      period: "per user/month",
      features: [
        { name: "Up to 100 participants", included: true },
        { name: "Unlimited meeting duration", included: true },
        { name: "Full HD video quality", included: true },
        { name: "Screen sharing", included: true },
        { name: "Chat functionality", included: true },
        { name: "Virtual backgrounds", included: true },
        { name: "Recording & transcription", included: true },
        { name: "Breakout rooms", included: true },
        { name: "Admin controls", included: true },
        { name: "Custom branding", included: true },
        { name: "Priority support", included: true },
      ],
      cta: "Start Free Trial",
      ctaLink: "/signup?plan=pro",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For organizations that need advanced security and control.",
      price: { monthly: "Custom", annual: "Custom" },
      period: "contact for pricing",
      features: [
        { name: "Unlimited participants", included: true },
        { name: "Unlimited meeting duration", included: true },
        { name: "4K video quality", included: true },
        { name: "Screen sharing", included: true },
        { name: "Chat functionality", included: true },
        { name: "Virtual backgrounds", included: true },
        { name: "Recording & transcription", included: true },
        { name: "Breakout rooms", included: true },
        { name: "Admin controls", included: true },
        { name: "Custom branding", included: true },
        { name: "Priority support", included: true, tooltip: "Dedicated account manager with 24/7 support" },
        { name: "SSO integration", included: true },
        { name: "API access", included: true },
        { name: "Custom integrations", included: true },
        { name: "SLA guarantees", included: true },
      ],
      cta: "Contact Sales",
      ctaLink: "/contact",
      popular: false,
    },
  ]

  const faqs = [
    {
      question: "How many participants can join a meeting?",
      answer:
        "The Free plan supports up to 4 participants, the Pro plan supports up to 100 participants, and the Enterprise plan supports unlimited participants.",
    },
    {
      question: "Can I try the Pro plan before purchasing?",
      answer:
        "Yes, we offer a 14-day free trial of the Pro plan with no credit card required. You can upgrade at any time during or after the trial.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and for Enterprise customers, we also support invoicing and purchase orders.",
    },
    {
      question: "Can I change plans at any time?",
      answer:
        "Yes, you can upgrade, downgrade, or cancel your plan at any time. If you downgrade or cancel, you'll continue to have access to your current plan until the end of your billing cycle.",
    },
    {
      question: "Is there a discount for non-profit organizations?",
      answer:
        "Yes, we offer special pricing for non-profit organizations, educational institutions, and healthcare providers. Please contact our sales team for more information.",
    },
    {
      question: "What happens to my recordings if I downgrade my plan?",
      answer:
        "Your existing recordings will remain accessible for 30 days after downgrading. We recommend downloading any recordings you want to keep before downgrading.",
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
                Simple, <span className="text-brand">Transparent</span> Pricing
              </MotionH1>
              <MotionP className="mb-8 text-xl text-muted-foreground">
                Choose the plan that&apos;s right for your team. All plans include a 14-day free trial.
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
            <Tabs defaultValue="monthly" className="mx-auto mb-10 max-w-md">
              <div className="flex justify-center">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
                  <TabsTrigger value="annual">Annual Billing (Save 15%)</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="monthly">
                <div className="grid gap-8 mt-10 md:grid-cols-3">
                  {plans.map((plan, index) => (
                    <MotionDiv
                      key={index}
                      variants={zoomIn(0.1 * index, 0.5)}
                      className={`flex flex-col ${plan.popular ? "border-brand shadow-lg" : ""}`}
                    >
                      <Card className={`flex h-full flex-col ${plan.popular ? "border-brand shadow-lg" : ""}`}>
                        {plan.popular && (
                          <div className="absolute right-4 top-4 rounded-full bg-brand px-3 py-1 text-xs font-medium text-white">
                            Popular
                          </div>
                        )}
                        <CardHeader>
                          <CardTitle>{plan.name}</CardTitle>
                          <CardDescription>{plan.description}</CardDescription>
                          <div className="mt-4">
                            <span className="text-4xl font-bold">{plan.price.monthly}</span>
                            <span className="text-sm text-muted-foreground"> {plan.period}</span>
                          </div>
                        </CardHeader>
                        <CardContent className="flex-1">
                          <ul className="space-y-3">
                            {plan.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-2">
                                {feature.included ? (
                                  <Check className="h-4 w-4 text-brand" />
                                ) : (
                                  <X className="h-4 w-4 text-muted-foreground/70" />
                                )}
                                <span className="text-sm">
                                  {feature.name}
                                  {feature.tooltip && (
                                    <TooltipProvider>
                                      <Tooltip>
                                        <TooltipTrigger asChild>
                                          <HelpCircle className="ml-1 inline h-3 w-3 text-muted-foreground cursor-help" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                          <p>{feature.tooltip}</p>
                                        </TooltipContent>
                                      </Tooltip>
                                    </TooltipProvider>
                                  )}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button asChild className={`w-full ${plan.popular ? "bg-brand hover:bg-brand-dark" : ""}`}>
                            <Link href={plan.ctaLink}>{plan.cta}</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </MotionDiv>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="annual">
                <div className="grid gap-8 mt-10 md:grid-cols-3">
                  {plans.map((plan, index) => (
                    <MotionDiv
                      key={index}
                      variants={zoomIn(0.1 * index, 0.5)}
                      className={`flex flex-col ${plan.popular ? "border-brand shadow-lg" : ""}`}
                    >
                      <Card className={`flex h-full flex-col ${plan.popular ? "border-brand shadow-lg" : ""}`}>
                        {plan.popular && (
                          <div className="absolute right-4 top-4 rounded-full bg-brand px-3 py-1 text-xs font-medium text-white">
                            Popular
                          </div>
                        )}
                        <CardHeader>
                          <CardTitle>{plan.name}</CardTitle>
                          <CardDescription>{plan.description}</CardDescription>
                          <div className="mt-4">
                            <span className="text-4xl font-bold">{plan.price.annual}</span>
                            <span className="text-sm text-muted-foreground"> {plan.period}</span>
                          </div>
                        </CardHeader>
                        <CardContent className="flex-1">
                          <ul className="space-y-3">
                            {plan.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-2">
                                {feature.included ? (
                                  <Check className="h-4 w-4 text-brand" />
                                ) : (
                                  <X className="h-4 w-4 text-muted-foreground/70" />
                                )}
                                <span className="text-sm">{feature.name}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button asChild className={`w-full ${plan.popular ? "bg-brand hover:bg-brand-dark" : ""}`}>
                            <Link href={plan.ctaLink}>{plan.cta}</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </MotionDiv>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
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
              <MotionH2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</MotionH2>
            </MotionDiv>
            <div className="mx-auto max-w-3xl">
              <div className="grid gap-6 md:grid-cols-2">
                {faqs.map((faq, index) => (
                  <MotionDiv
                    key={index}
                    variants={fadeIn("up", 0.1 * (index + 1))}
                    className="rounded-lg border bg-card p-6"
                  >
                    <h3 className="mb-3 font-medium">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </MotionDiv>
                ))}
              </div>
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
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <MotionH2 variants={fadeIn("up", 0.1)} className="mb-4 text-3xl font-bold tracking-tight">
                Need a custom solution?
              </MotionH2>
              <MotionP variants={fadeIn("up", 0.2)} className="mb-8 text-lg text-white/80">
                Our enterprise plan can be tailored to your organization&apos;s specific needs. Contact our sales team
                to discuss your requirements.
              </MotionP>
              <MotionDiv variants={fadeIn("up", 0.3)}>
                <Button asChild size="lg" className="bg-white text-brand-dark hover:bg-white/90">
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </MotionDiv>
            </div>
          </div>
        </MotionSection>
      </main>
      <LandingFooter />
    </div>
  )
}

