import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "MeetNext has transformed how our remote team collaborates. The video quality is exceptional, and the features are intuitive.",
      author: "Sarah Johnson",
      role: "CTO, TechInnovate",
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      quote:
        "We've tried many meeting platforms, but MeetNext stands out with its reliability and advanced features. It's become essential to our workflow.",
      author: "Michael Chen",
      role: "Product Manager, GlobalDesign",
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      quote:
        "The breakout rooms and recording features have made our virtual workshops so much more effective. Our participants love the experience.",
      author: "Elena Rodriguez",
      role: "Director of Education, LearnSphere",
      avatar: "/placeholder.svg?height=64&width=64",
    },
  ]

  return (
    <section className="bg-muted py-20">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Trusted by Teams Worldwide</h2>
          <p className="text-muted-foreground">
            See what our customers have to say about their experience with MeetNext.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <Quote className="mb-4 h-8 w-8 text-primary/40" />
                <p className="mb-6 text-lg">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      width={48}
                      height={48}
                      alt={testimonial.author}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

