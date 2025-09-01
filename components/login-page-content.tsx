"use client"

import { useState } from "react"
import { useAuthActions } from "@convex-dev/auth/react"
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Target, Mail, KeyRound, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function LoginPageContent() {
  const { signIn } = useAuthActions()
  const user = useQuery(api.users.currentLoggedInUser)
  const [email, setEmail] = useState("")
  const [step, setStep] = useState<"email" | "code">("email")
  const [isLoading, setIsLoading] = useState(false)

  // If user is already logged in, redirect to dashboard
  if (user) {
    window.location.href = "/dashboard"
    return null
  }

  if (user === undefined) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const formData = new FormData(e.currentTarget)
      const emailValue = formData.get("email") as string
      setEmail(emailValue)
      await signIn("resend-otp", formData)
      setStep("code")
    } catch (error) {
      console.error("Error sending code:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCodeSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const formData = new FormData(e.currentTarget)
      await signIn("resend-otp", formData)
    } catch (error) {
      console.error("Error verifying code:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Target className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-slate-900">PeakCheck</span>
            </Link>
            <Link href="/" className="flex items-center text-slate-600 hover:text-blue-600 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </nav>

      {/* Login Form */}
      <div className="flex items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <Card className="shadow-xl border-0">
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                {step === "email" ? (
                  <Mail className="h-8 w-8 text-blue-600" />
                ) : (
                  <KeyRound className="h-8 w-8 text-blue-600" />
                )}
              </div>
              <div>
                <CardTitle className="text-2xl text-slate-900">
                  {step === "email" ? "Anmelden" : "Code eingeben"}
                </CardTitle>
                <CardDescription className="text-slate-600">
                  {step === "email" 
                    ? "Geben Sie Ihre E-Mail-Adresse ein, um sich anzumelden"
                    : `Wir haben einen Code an ${email} gesendet`
                  }
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {step === "email" ? (
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail-Adresse</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="ihre@email.de"
                      required
                      className="h-12"
                      disabled={isLoading}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-blue-600 hover:bg-blue-700"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Code senden...
                      </div>
                    ) : (
                      "Code senden"
                    )}
                  </Button>
                </form>
              ) : (
                <form onSubmit={handleCodeSubmit} className="space-y-4">
                  <input name="email" value={email} type="hidden" />
                  <div className="space-y-2">
                    <Label htmlFor="code">Bestätigungscode</Label>
                    <Input
                      id="code"
                      name="code"
                      type="text"
                      placeholder="123456"
                      required
                      className="h-12 text-center text-lg tracking-widest"
                      maxLength={6}
                      disabled={isLoading}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-blue-600 hover:bg-blue-700"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Verifizieren...
                      </div>
                    ) : (
                      "Code bestätigen"
                    )}
                  </Button>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    className="w-full"
                    onClick={() => setStep("email")}
                    disabled={isLoading}
                  >
                    Andere E-Mail verwenden
                  </Button>
                </form>
              )}

              <div className="text-center text-sm text-slate-600">
                <p>
                  Neu hier?{" "}
                  <span className="text-blue-600 font-medium">
                    Einfach E-Mail eingeben und loslegen!
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Info Cards */}
          <div className="mt-8 grid grid-cols-1 gap-4">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                    <Target className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-900 mb-1">Patienten-Tool</h3>
                    <p className="text-sm text-blue-700">
                      Zugriff auf Ihre Testergebnisse, Termine und Leistungsanalysen
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}