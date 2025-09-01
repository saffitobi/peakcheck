"use client"

import { useQuery } from "convex/react"
import { useAuthActions } from "@convex-dev/auth/react"
import { api } from "@/convex/_generated/api"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Target, LogOut, Calendar, Activity, TrendingUp, User, Timer, Zap } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function DashboardPageContent() {
  const { signOut } = useAuthActions()
  const user = useQuery(api.users.currentLoggedInUser)

  // Redirect to login if not authenticated
  if (user === null) {
    window.location.href = "/login"
    return null
  }

  if (user === undefined) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  // Mock data for demonstration
  const recentTests = [
    {
      id: 1,
      type: "Sprint 10m",
      result: "1.85s",
      date: "2024-01-15",
      improvement: "+0.05s"
    },
    {
      id: 2,
      type: "CMJ",
      result: "42.3cm",
      date: "2024-01-15",
      improvement: "+2.1cm"
    },
    {
      id: 3,
      type: "Cooper Test",
      result: "2850m",
      date: "2024-01-10",
      improvement: "+150m"
    }
  ]

  const upcomingAppointments = [
    {
      id: 1,
      date: "2024-01-25",
      time: "14:00",
      type: "Volltest",
      status: "Bestätigt"
    },
    {
      id: 2,
      date: "2024-02-05",
      time: "10:30",
      type: "Sprint Test",
      status: "Ausstehend"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Target className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-slate-900">PeakCheck</span>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-slate-600" />
                <span className="text-slate-700">{user.email}</span>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => void signOut()}
                className="flex items-center space-x-2"
              >
                <LogOut className="h-4 w-4" />
                <span>Abmelden</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Willkommen zurück{user.name ? `, ${user.name}` : ''}!
          </h1>
          <p className="text-slate-600">
            Hier ist Ihre aktuelle Leistungsübersicht
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Letzte Tests</p>
                  <p className="text-2xl font-bold text-slate-900">3</p>
                </div>
                <Activity className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Nächster Termin</p>
                  <p className="text-2xl font-bold text-slate-900">25. Jan</p>
                </div>
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Verbesserung</p>
                  <p className="text-2xl font-bold text-green-600">+5.2%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Gesamttests</p>
                  <p className="text-2xl font-bold text-slate-900">12</p>
                </div>
                <Target className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Übersicht</TabsTrigger>
              <TabsTrigger value="tests">Testergebnisse</TabsTrigger>
              <TabsTrigger value="appointments">Termine</TabsTrigger>
              <TabsTrigger value="profile">Profil</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Recent Tests */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Activity className="h-5 w-5 text-blue-600" />
                      <span>Letzte Testergebnisse</span>
                    </CardTitle>
                    <CardDescription>
                      Ihre neuesten Leistungsdaten
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentTests.map((test) => (
                      <div key={test.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="bg-blue-100 p-2 rounded-full">
                            {test.type.includes('Sprint') ? (
                              <Timer className="h-4 w-4 text-blue-600" />
                            ) : (
                              <Zap className="h-4 w-4 text-blue-600" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-slate-900">{test.type}</p>
                            <p className="text-sm text-slate-600">{test.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-slate-900">{test.result}</p>
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            {test.improvement}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Upcoming Appointments */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-green-600" />
                      <span>Kommende Termine</span>
                    </CardTitle>
                    <CardDescription>
                      Ihre geplanten Testtermine
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {upcomingAppointments.map((appointment) => (
                      <div key={appointment.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <div>
                          <p className="font-medium text-slate-900">{appointment.type}</p>
                          <p className="text-sm text-slate-600">
                            {appointment.date} um {appointment.time}
                          </p>
                        </div>
                        <Badge 
                          variant={appointment.status === "Bestätigt" ? "default" : "secondary"}
                          className={appointment.status === "Bestätigt" ? "bg-green-600" : ""}
                        >
                          {appointment.status}
                        </Badge>
                      </div>
                    ))}
                    <Button className="w-full" variant="outline">
                      <Calendar className="h-4 w-4 mr-2" />
                      Neuen Termin buchen
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Schnellzugriff</CardTitle>
                  <CardDescription>
                    Häufig verwendete Funktionen
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Link href="/spider-tool">
                      <Button variant="outline" className="w-full h-20 flex flex-col space-y-2">
                        <Target className="h-6 w-6" />
                        <span>Spinnendiagramm</span>
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full h-20 flex flex-col space-y-2">
                      <TrendingUp className="h-6 w-6" />
                      <span>Fortschritt anzeigen</span>
                    </Button>
                    <Button variant="outline" className="w-full h-20 flex flex-col space-y-2">
                      <Calendar className="h-6 w-6" />
                      <span>Termin buchen</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tests">
              <Card>
                <CardHeader>
                  <CardTitle>Alle Testergebnisse</CardTitle>
                  <CardDescription>
                    Vollständige Übersicht Ihrer Leistungsdaten
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Hier werden alle Ihre Testergebnisse angezeigt. Diese Funktion wird in Kürze verfügbar sein.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="appointments">
              <Card>
                <CardHeader>
                  <CardTitle>Terminverwaltung</CardTitle>
                  <CardDescription>
                    Verwalten Sie Ihre Testtermine
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Hier können Sie Ihre Termine einsehen und neue buchen. Diese Funktion wird in Kürze verfügbar sein.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profil bearbeiten</CardTitle>
                  <CardDescription>
                    Verwalten Sie Ihre persönlichen Daten
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700">E-Mail</label>
                      <p className="text-slate-900">{user.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700">Name</label>
                      <p className="text-slate-600">{user.name || "Noch nicht angegeben"}</p>
                    </div>
                    <Button variant="outline">
                      Profil bearbeiten
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}