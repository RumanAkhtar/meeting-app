"use client"

import { useState, useEffect, useRef } from "react"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

export default function MeetingPage({ params }: { params: { id: string } }) {
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)
  const [isScreenSharing, setIsScreenSharing] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isHandRaised, setIsHandRaised] = useState(false)
  const [activeTab, setActiveTab] = useState("participants")
  const [message, setMessage] = useState("")
  const [isLeavingMeeting, setIsLeavingMeeting] = useState(false)
  
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const { toast } = useToast()

  // Mock participants data
  const participants = [
    { id: "user-1", name: "You (Host)", isMuted: isMuted, isVideoOff: isVideoOff, isHost: true },
    { id: "user-2", name: "Sarah Miller", isMuted: false, isVideoOff: false, isHost: false },
    { id: "user-3", name: "Alex Johnson", isMuted: true, isVideoOff: false, isHost: false },
    { id: "user-4", name: "Michael Chen", isMuted: false, isVideoOff: true, isHost: false },
  ]

  // Mock chat messages
  const [messages, setMessages] = useState([
    { id: 1, sender: "Sarah Miller", content: "Hi everyone! Excited for today's meeting.", time: "10:01 AM" },
    { id: 2, sender: "Alex Johnson", content: "I've prepared the slides for the presentation.", time: "10:02 AM" },
    { id: 3, sender: "You", content: "Great! Let's get started in a few minutes.", time: "10:03 AM" },
  ])

  useEffect(() => {
    // Setup local video
    const setupLocalVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true
        })
        
        if (videoRef.current) {
          videoRef.current.srcObject = stream
        }
      } catch (error) {
        console.error("Error accessing media devices:", error)
        toast({
          title: "Camera or microphone access denied",
          description: "Please allow access to your camera and microphone for the meeting.",
          variant: "destructive",
        })
      }
    }
    
    setupLocalVideo()
    
    // Cleanup function
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream
        stream.getTracks().forEach(track => track.stop())
      }
    }
  }, [toast])

  const toggleMute = () => {
    setIsMuted(!isMuted)
    
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream
      stream.getAudioTracks().forEach(track => {
        track.enabled = isMuted
      })
    }
  }

  const toggleVideo = () => {
    setIsVideoOff(!isVideoOff)
    
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream
      stream.getVideoTracks().forEach(track => {
        track.enabled = isVideoOff
      })
    }
  }

  const toggleScreenShare = async () => {
    if (!isScreenSharing) {
      try {
        const screenStream = await navigator.mediaDevices.getDisplayMedia({
          video: true
        })
        
        // In a real app, you would send this stream to other participants
        toast({
          title: "Screen sharing started",
          description: "Your screen is now visible to all participants.",
        })
        
        setIsScreenSharing(true)
      } catch (error) {
        console.error("Error sharing screen:", error)
        toast({
          title: "Screen sharing failed",
          description: "Unable to share your screen. Please try again.",
          variant: "destructive",
        })
      }
    } else {
      // Stop screen sharing
      setIsScreenSharing(false)
      toast({
        title: "Screen sharing stopped",
        description: "You have stopped sharing your screen.",
      })
    }
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    
    if (!isRecording) {
      toast({
        title: "Recording started",
        description: "This meeting is now being recorded.",
      })
    } else {
      toast({
        title: "Recording stopped",
        description: "The recording has been saved.",
      })
    }
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const toggleRaiseHand = () => {
    setIsHandR\

