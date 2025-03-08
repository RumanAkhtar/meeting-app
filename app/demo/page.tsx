"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LandingHeader } from "@/components/landing/landing-header"
import { LandingFooter } from "@/components/landing/landing-footer"
import { Video, Mic, MicOff, VideoOff, Phone, Copy, Share2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function DemoPage() {
  const [meetingLink, setMeetingLink] = useState("")
  const [isMicOn, setIsMicOn] = useState(true)
  const [isVideoOn, setIsVideoOn] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { toast } = useToast()

  useEffect(() => {
    // Generate a random meeting link
    setMeetingLink(`https://meetnext.app/${Math.random().toString(36).substring(7)}`)

    // Set up local video stream
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream
        }
      })
      .catch((err) => {
        console.error("Error accessing media devices:", err)
      })

    // Cleanup function
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks()
        tracks.forEach((track) => track.stop())
      }
    }
  }, [])

  const toggleMic = () => {
    setIsMicOn(!isMicOn)
    if (videoRef.current && videoRef.current.srcObject) {
      const audioTrack = (videoRef.current.srcObject as MediaStream).getAudioTracks()[0]
      if (audioTrack) {
        audioTrack.enabled = !isMicOn
      }
    }
  }

  const toggleVideo = () => {
    setIsVideoOn(!isVideoOn)
    if (videoRef.current && videoRef.current.srcObject) {
      const videoTrack = (videoRef.current.srcObject as MediaStream).getVideoTracks()[0]
      if (videoTrack) {
        videoTrack.enabled = !isVideoOn
      }
    }
  }

  const copyMeetingLink = () => {
    navigator.clipboard.writeText(meetingLink)
    toast({
      title: "Meeting link copied",
      description: "The meeting link has been copied to your clipboard.",
    })
  }

  const shareMeetingLink = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Join my MeetNext meeting",
          text: "Click the link to join my video conference:",
          url: meetingLink,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error))
    } else {
      copyMeetingLink()
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <LandingHeader />
      <main className="flex-1 py-12">
        <div className="container">
          <h1 className="mb-8 text-3xl font-bold">MeetNext Demo</h1>
          <Tabs defaultValue="create">
            <TabsList className="mb-4">
              <TabsTrigger value="create">Create Meeting</TabsTrigger>
              <TabsTrigger value="join">Join Meeting</TabsTrigger>
            </TabsList>
            <TabsContent value="create">
              <Card>
                <CardHeader>
                  <CardTitle>Create a New Meeting</CardTitle>
                  <CardDescription>Start a new video conference and invite others to join.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
                    <video ref={videoRef} autoPlay muted playsInline className="h-full w-full object-cover" />
                  </div>
                  <div className="flex justify-center gap-4">
                    <Button variant="outline" size="icon" onClick={toggleMic}>
                      {isMicOn ? <Mic /> : <MicOff />}
                    </Button>
                    <Button variant="outline" size="icon" onClick={toggleVideo}>
                      {isVideoOn ? <Video /> : <VideoOff />}
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <div className="flex w-full items-center gap-2">
                    <Input value={meetingLink} readOnly />
                    <Button variant="outline" size="icon" onClick={copyMeetingLink}>
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={shareMeetingLink}>
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button className="w-full">
                    <Phone className="mr-2 h-4 w-4" /> Start Meeting
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="join">
              <Card>
                <CardHeader>
                  <CardTitle>Join a Meeting</CardTitle>
                  <CardDescription>Enter a meeting link to join an existing video conference.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Input placeholder="Enter meeting link" />
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Join Meeting</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <LandingFooter />
    </div>
  )
}

