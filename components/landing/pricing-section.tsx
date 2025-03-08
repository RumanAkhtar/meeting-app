import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Free",
      description: "For individuals and small teams getting started.",
      price: "$0",
      period: "forever",
      features: [
        "Up to 4 participants",
        "40-minute meeting limit",
        "HD video quality",
        "Screen sharing",
        "Chat functionality",
        "Virtual backgrounds",
      ],
      cta: "Get Started",
      ctaLink: "/signup",
      popular: false,
    },
    {
      name: "Pro",
      description: "For teams that need more features and longer meetings.",
      price: "$12",
      period: "per user/month",
      features: [
        "Up to 100 participants",
        "Unlimited meeting duration",
        "Full HD video quality",
        "Recording & transcription",
        "Breakout rooms",
        "Admin controls",
        "Custom branding",
        "Priority support",
      ],
      cta: "Start Free Trial",
      ctaLink: "/signup?plan=pro",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For organizations that need advanced security and control.",
      price: "Custom",
      period: "contact for pricing",
      features: [
        "Unlimited participants",
        "Unlimited meeting duration",
        "4K video quality",
        "Advanced security features",
        "SSO integration",
        "API access",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantees",
      ],
      cta: "Contact Sales",
      ctaLink: "/contact",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground">
            Choose the plan that's right for your team. All plans include a 14-day free trial.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card key={index} className={`flex flex-col ${plan.popular ? "border-primary shadow-lg" : ""}`}>
              {plan.popular && (
                <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Popular
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm text-muted-foreground"> {plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className={`w-full ${plan.popular ? "" : "bg-primary/90 hover:bg-primary"}`}>
                  <Link href={plan.ctaLink}>{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

