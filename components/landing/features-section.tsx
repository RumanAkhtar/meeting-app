import { Video, MessageSquare, Share2, Calendar, Shield, Users, Layers, Zap } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Video className="h-10 w-10 text-primary" />,
      title: "HD Video & Audio",
      description: "Crystal-clear video and immersive audio for a natural meeting experience.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "Chat & Collaboration",
      description: "Real-time messaging with text, emojis, and file sharing capabilities.",
    },
    {
      icon: <Share2 className="h-10 w-10 text-primary" />,
      title: "Screen Sharing",
      description: "Share your screen, applications, or specific windows with one click.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "Scheduling",
      description: "Easily schedule meetings and integrate with your favorite calendar apps.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Secure Meetings",
      description: "End-to-end encryption and advanced security features to protect your conversations.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Breakout Rooms",
      description: "Split your meeting into smaller groups for focused discussions.",
    },
    {
      icon: <Layers className="h-10 w-10 text-primary" />,
      title: "Virtual Backgrounds",
      description: "Customize your background with images or blur effects for privacy.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Recording & Playback",
      description: "Record your meetings and access them later with searchable transcripts.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Powerful Features for Seamless Collaboration
          </h2>
          <p className="text-muted-foreground">
            Everything you need to make your virtual meetings productive and engaging.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-medium">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

