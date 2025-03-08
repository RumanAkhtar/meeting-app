import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { LandingHeader } from "@/components/landing/landing-header"
import { LandingFooter } from "@/components/landing/landing-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <section className="bg-primary/5 py-20">
          <div className="container text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to transform your virtual meetings?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              Join thousands of teams already using MeetNext to collaborate effectively.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/signup">Get Started for Free</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/demo">Request a Demo</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </div>
  )
}

