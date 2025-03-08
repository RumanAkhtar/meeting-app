import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, Download, Play, Users, Video } from "lucide-react"
import Link from "next/link"

interface MeetingListProps {
  type: "recent" | "recordings"
}

export function MeetingList({ type }: MeetingListProps) {
  // Mock data - in a real app, this would come from an API
  const meetings = [
    {
      id: "meeting-1",
      title: "Weekly Team Sync",
      date: "May 15, 2023",
      time: "10:00 AM - 11:00 AM",
      participants: 8,
      duration: "58 min",
      recording:
        type === "recordings"
          ? {
              url: "#",
              size: "120 MB",
              duration: "58 min",
            }
          : undefined,
      host: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
      },
    },
    {
      id: "meeting-2",
      title: "Product Planning",
      date: "May 14, 2023",
      time: "2:00 PM - 3:30 PM",
      participants: 12,
      duration: "1h 25min",
      recording:
        type === "recordings"
          ? {
              url: "#",
              size: "245 MB",
              duration: "1h 25min",
            }
          : undefined,
      host: {
        name: "Sarah Miller",
        avatar: "/placeholder.svg?height=32&width=32",
      },
    },
    {
      id: "meeting-3",
      title: "Client Presentation",
      date: "May 12, 2023",
      time: "11:00 AM - 12:00 PM",
      participants: 5,
      duration: "52 min",
      recording:
        type === "recordings"
          ? {
              url: "#",
              size: "110 MB",
              duration: "52 min",
            }
          : undefined,
      host: {
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=32&width=32",
      },
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {meetings.map((meeting) => (
        <Card key={meeting.id}>
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
              <CardTitle className="text-base">{meeting.title}</CardTitle>
              <Video className="h-4 w-4 text-muted-foreground" />
            </div>
            <CardDescription>
              {meeting.date} • {meeting.time}
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{meeting.participants} participants</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{meeting.duration}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={meeting.host.avatar} alt={meeting.host.name} />
                <AvatarFallback>{meeting.host.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="text-xs text-muted-foreground">{meeting.host.name}</span>
            </div>
            {type === "recordings" ? (
              <div className="flex gap-2">
                <Button size="sm" variant="ghost">
                  <Play className="mr-1 h-4 w-4" />
                  Play
                </Button>
                <Button size="sm" variant="ghost">
                  <Download className="mr-1 h-4 w-4" />
                  Download
                </Button>
              </div>
            ) : (
              <Button size="sm" variant="ghost" asChild>
                <Link href={`/meeting/${meeting.id}`}>View Details</Link>
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

