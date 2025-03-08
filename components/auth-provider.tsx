"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

type User = {
  id: string
  name: string
  email: string
  image?: string
}

type AuthContextType = {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  // Simulate checking for an existing session on load
  useEffect(() => {
    const checkSession = async () => {
      try {
        // In a real app, this would be an API call to verify the session
        const storedUser = localStorage.getItem("user")
        if (storedUser) {
          setUser(JSON.parse(storedUser))
        }
      } catch (error) {
        console.error("Failed to restore session:", error)
      } finally {
        setLoading(false)
      }
    }

    checkSession()
  }, [])

  const login = async (email: string, password: string) => {
    setLoading(true)
    try {
      // In a real app, this would be an API call to your auth endpoint
      // Simulating a successful login
      const mockUser: User = {
        id: "user-1",
        name: "Demo User",
        email,
        image: "/placeholder.svg?height=40&width=40",
      }

      setUser(mockUser)
      localStorage.setItem("user", JSON.stringify(mockUser))
      router.push("/dashboard")
    } catch (error) {
      console.error("Login failed:", error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const signup = async (name: string, email: string, password: string) => {
    setLoading(true)
    try {
      // In a real app, this would be an API call to your registration endpoint
      // Simulating a successful signup
      const mockUser: User = {
        id: "user-" + Date.now(),
        name,
        email,
        image: "/placeholder.svg?height=40&width=40",
      }

      setUser(mockUser)
      localStorage.setItem("user", JSON.stringify(mockUser))
      router.push("/dashboard")
    } catch (error) {
      console.error("Signup failed:", error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    setLoading(true)
    try {
      // In a real app, this would be an API call to your logout endpoint
      setUser(null)
      localStorage.removeItem("user")
      router.push("/")
    } catch (error) {
      console.error("Logout failed:", error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  return <AuthContext.Provider value={{ user, loading, login, signup, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

