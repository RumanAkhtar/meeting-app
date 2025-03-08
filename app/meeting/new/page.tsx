"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/components/ui/use-toast"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Copy } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export default function NewMeetingPage() {
  const [date, setDate] = useState<Date>()
  const [meetingTitle, setMeetingTitle] = useState("")
  const [meetingLink, setMeetingLink] = useState("https://meetnext.app/m/" + Math.random().toString(36).substring(2, 8))
  const [waitingRoom, setWaitingRoom] = useState(true)
  const [requirePassword, setRequirePassword] = useState(false)
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()
  const { toast } = useToast()

  const handleInstantMeeting = () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Meeting created",
        description: "Your instant meeting is ready to join.",
      })
      router.push("/meeting/123/lobby")
    }, 1000)
  }

  const handleScheduleMeeting = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Validate form
    if (!meetingTitle || !date) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      setIsLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Meeting scheduled",
        description: `"${meetingTitle}" has been scheduled for ${date ? format(date, "PPP") : ""}`,
      })
      router.push("/dashboard")
    }, 1000)
  }

  const copyLink = () => {
    navigator.clipboard.writeText(meetingLink)
    toast({
      title: "Link copied",
      description: "Meeting link copied to clipboard",
    })
  }

  return (
    <div className="container max-w-4xl py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">New Meeting</h1>
        <p className="text-muted-foreground">Create an instant meeting or schedule for later</p>
      </div>

      <Tabs defaultValue="instant" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="instant">Instant Meeting</TabsTrigger>
          <TabsTrigger value="schedule">Schedule Meeting</TabsTrigger>
        </TabsList>

        <TabsContent value="instant">
          <Card>
            <CardHeader>
              <CardTitle>Start an Instant Meeting</CardTitle>
              <CardDescription>Create a meeting that starts immediately</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="instant-link">Your meeting link</Label>
                <div className="flex gap-2">
                  <Input id="instant-link" value={meetingLink} readOnly className="flex-1" />
                  <Button variant="outline" size="icon" onClick={copyLink}>
                    <Copy className="h-4 w-4" />
                    <span className="sr-only">Copy link</span>
                  </Button>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="waiting-room">Enable waiting room</Label>
                    <Switch id="waiting-room" checked={waitingRoom} onCheckedChange={setWaitingRoom} />
                  </div>
                  <p className="text-sm text-muted-foreground">Participants will need to be admitted by the host</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="require-password">Require meeting password</Label>
                    <Switch id="require-password" checked={requirePassword} onCheckedChange={setRequirePassword} />
                  </div>
                  {requirePassword && (
                    <Input
                      type="password"
                      placeholder="Enter meeting password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleInstantMeeting} disabled={isLoading} className="w-full">
                {isLoading ? "Creating..." : "Start Meeting Now"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="schedule">
          <Card>
            <CardHeader>
              <CardTitle>Schedule a Meeting</CardTitle>
              <CardDescription>Plan a meeting for a future date and time</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleScheduleMeeting} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="meeting-title">Meeting title</Label>
                  <Input
                    id="meeting-title"
                    placeholder="Weekly Team Sync"
                    value={meetingTitle}
                    onChange={(e) => setMeetingTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="start-time">Start time</Label>
                    <Input id="start-time" type="time" defaultValue="09:00" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="end-time">End time</Label>
                    <Input id="end-time" type="time" defaultValue="10:00" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="schedule-link">Meeting link</Label>
                  <div className="flex gap-2">
                    <Input id="schedule-link" value={meetingLink} readOnly className="flex-1" />
                    <Button variant="outline" size="icon" onClick={copyLink} type="button">
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy link</span>
                    </Button>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="schedule-waiting-room">Enable waiting room</Label>
                      <Switch id="schedule-waiting-room" checked={waitingRoom} onCheckedChange={setWaitingRoom} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="schedule-require-password">Require meeting password</Label>
                      <Switch
                        id="schedule-require-password"
                        checked={requirePassword}
                        onCheckedChange={setRequirePassword}
                      />
                    </div>
                    {requirePassword && (
                      <Input
                        type="password"
                        placeholder="Enter meeting password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    )}
                  </div>
                </div>

                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? "Scheduling..." : "Schedule Meeting"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

