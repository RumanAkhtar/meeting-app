"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Mic, MicOff, VideoIcon, VideoOff, Settings, Users } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function MeetingLobbyPage({ params }: { params: { id: string } }) {
  const [name, setName] = useState("")
  const [audioEnabled, setAudioEnabled] = useState(true)
  const [videoEnabled, setVideoEnabled] = useState(true)
  const [isJoining, setIsJoining] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const streamRef = useRef<MediaStream | null>(null)

  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    // Request camera and microphone permissions
    const setupMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: videoEnabled,
          audio: audioEnabled,
        })

        streamRef.current = stream

        if (videoRef.current) {
          videoRef.current.srcObject = stream
        }
      } catch (error) {
        console.error("Error accessing media devices:", error)
        toast({
          title: "Camera or microphone access denied",
          description: "Please allow access to your camera and microphone to join the meeting.",
          variant: "destructive",
        })
      }
    }

    setupMedia()

    // Cleanup function to stop all tracks when component unmounts
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop())
      }
    }
  }, [videoEnabled, audioEnabled, toast])

  const toggleAudio = () => {
    if (streamRef.current) {
      const audioTracks = streamRef.current.getAudioTracks()
      if (audioTracks.length > 0) {
        audioTracks.forEach((track) => {
          track.enabled = !audioEnabled
        })
      }
    }
    setAudioEnabled(!audioEnabled)
  }

  const toggleVideo = () => {
    if (streamRef.current) {
      const videoTracks = streamRef.current.getVideoTracks()
      if (videoTracks.length > 0) {
        videoTracks.forEach((track) => {
          track.enabled = !videoEnabled
        })
      }
    }
    setVideoEnabled(!videoEnabled)
  }

  const joinMeeting = () => {
    if (!name.trim()) {
      toast({
        title: "Name required",
        description: "Please enter your name to join the meeting.",
        variant: "destructive",
      })
      return
    }

    setIsJoining(true)

    // Simulate joining process
    setTimeout(() => {
      setIsJoining(false)
      router.push(`/meeting/${params.id}`)
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/40 p-4">
      <Card className="mx-auto w-full max-w-md">
        <CardContent className="p-6">
          <div className="mb-6 flex items-center justify-center">
            <div className="flex items-center gap-2">
              <VideoIcon className="h-6 w-6 text-primary" />
              <h1 className="text-2xl font-bold">Join Meeting</h1>
            </div>
          </div>

          <div className="mb-6 overflow-hidden rounded-lg bg-black">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className={`h-[240px] w-full object-cover ${videoEnabled ? "" : "hidden"}`}
            />
            {!videoEnabled && (
              <div className="flex h-[240px] w-full items-center justify-center bg-muted">
                <Users className="h-16 w-16 text-muted-foreground/50" />
              </div>
            )}
          </div>

          <div className="mb-6 flex justify-center gap-4">
            <Button
              variant={audioEnabled ? "default" : "outline"}
              size="icon"
              className="h-12 w-12 rounded-full"
              onClick={toggleAudio}
            >
              {audioEnabled ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
              <span className="sr-only">{audioEnabled ? "Mute" : "Unmute"}</span>
            </Button>
            <Button
              variant={videoEnabled ? "default" : "outline"}
              size="icon"
              className="h-12 w-12 rounded-full"
              onClick={toggleVideo}
            >
              {videoEnabled ? <VideoIcon className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
              <span className="sr-only">{videoEnabled ? "Turn off camera" : "Turn on camera"}</span>
            </Button>
            <Button variant="outline" size="icon" className="h-12 w-12 rounded-full">
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Button>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="join-audio" className="cursor-pointer">
                Join with audio
              </Label>
              <Switch id="join-audio" checked={audioEnabled} onCheckedChange={setAudioEnabled} />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="join-video" className="cursor-pointer">
                Join with video
              </Label>
              <Switch id="join-video" checked={videoEnabled} onCheckedChange={setVideoEnabled} />
            </div>

            <Button className="w-full" onClick={joinMeeting} disabled={isJoining}>
              {isJoining ? "Joining..." : "Join Meeting"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

