import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarDays, Copy, ExternalLink, Users } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"

export function UpcomingMeetings() {
  const { toast } = useToast()

  // Mock data - in a real app, this would come from an API
  const meetings = [
    {
      id: "meeting-4",
      title: "Sprint Planning",
      date: "Today",
      time: "3:00 PM - 4:00 PM",
      participants: 10,
      link: "https://meetnext.app/m/abc123",
      host: {
        name: "You",
        avatar: "/placeholder.svg?height=32&width=32",
      },
    },
    {
      id: "meeting-5",
      title: "Design Review",
      date: "Tomorrow",
      time: "10:30 AM - 11:30 AM",
      participants: 6,
      link: "https://meetnext.app/m/def456",
      host: {
        name: "Emma Wilson",
        avatar: "/placeholder.svg?height=32&width=32",
      },
    },
    {
      id: "meeting-6",
      title: "Quarterly Business Review",
      date: "May 20, 2023",
      time: "1:00 PM - 3:00 PM",
      participants: 15,
      link: "https://meetnext.app/m/ghi789",
      host: {
        name: "Robert Taylor",
        avatar: "/placeholder.svg?height=32&width=32",
      },
    },
  ]

  const copyLink = (link: string) => {
    navigator.clipboard.writeText(link)
    toast({
      title: "Link copied",
      description: "Meeting link copied to clipboard",
    })
  }

  return (
    <div className="space-y-4">
      {meetings.map((meeting) => (
        <Card key={meeting.id}>
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-lg">{meeting.title}</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-1">
                  <CalendarDays className="h-4 w-4" />
                  {meeting.date} • {meeting.time}
                </CardDescription>
              </div>
              {meeting.date === "Today" && <Badge className="bg-primary">Today</Badge>}
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{meeting.participants} participants</span>
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={meeting.host.avatar} alt={meeting.host.name} />
                  <AvatarFallback>{meeting.host.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-xs text-muted-foreground">Host: {meeting.host.name}</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <div className="rounded-md bg-muted px-3 py-1 text-sm flex-1 truncate">{meeting.link}</div>
              <Button size="icon" variant="ghost" onClick={() => copyLink(meeting.link)}>
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy link</span>
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm" asChild>
              <Link href={`/meeting/${meeting.id}/edit`}>Edit</Link>
            </Button>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" asChild>
                <Link href={meeting.link} target="_blank">
                  <ExternalLink className="mr-1 h-4 w-4" />
                  Join
                </Link>
              </Button>
              <Button size="sm">
                <Link href={`/meeting/${meeting.id}/start`}>Start</Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

