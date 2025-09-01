"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, User, Timer, Zap, Activity, Target, Calendar, ChevronRight, ChevronLeft } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function PeakCheckHomePage() {
  const [activeStep, setActiveStep] = useState(1)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => prev === 4 ? 0 : prev + 1)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      icon: Timer,
      title: "Sprint Tests",
      description: "Präzise Zeitmessung für 5m, 10m, 20m und 30m Sprints",
      features: ["Elektronische Zeitmessung", "Detaillierte Analyse", "Vergleichswerte"]
    },
    {
      icon: Zap,
      title: "Kraftmessplatte",
      description: "Umfassende Tests auf modernster Kraftmessplatte",
      features: ["Counter Movement Jump", "Drop Jump", "Reaktivkraft-Index"]
    },
    {
      icon: Activity,
      title: "Lauftests",
      description: "Ausdauerleistung professionell messen und bewerten",
      features: ["Yo-Yo Test", "Cooper Test", "Individuelle Protokolle"]
    }
  ]

  const targetGroups = [
    {
      icon: Users,
      title: "Mannschaften & Vereine",
      description: "Komplette Teams professionell testen lassen",
      highlight: "Idealfall: Ganzer Verein"
    },
    {
      icon: User,
      title: "Einzelsportler",
      description: "Private Termine für individuelle Betreuung",
      highlight: "Persönliche Beratung"
    }
  ]

  const processSteps = [
    {
      id: 1,
      title: "Buche dein kostenfreies Beratungsgespräch",
      description: "In einem Erstgespräch beantworten wir deine offenen Fragen, damit du dich sicher fühlst und über jeden Schritt deines Check-ups informiert bist.",
      image: "https://images.pexels.com/photos/6767042/pexels-photo-6767042.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    },
    {
      id: 2,
      title: "Dein Check-up vor Ort",
      description: "Professionelle Testung mit modernster Technologie in unseren Räumlichkeiten. Alle Tests werden von erfahrenen Experten durchgeführt.",
      image: "https://images.pexels.com/photos/4422913/pexels-photo-4422913.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    },
    {
      id: 3,
      title: "Deine Ergebnisse in 5 Werktagen",
      description: "Detaillierte Auswertung deiner Testergebnisse mit professioneller Analyse und Vergleichswerten zu anderen Athleten.",
      image: "https://images.pexels.com/photos/7109242/pexels-photo-7109242.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    },
    {
      id: 4,
      title: "Deine Nachbesprechung",
      description: "Persönliche Beratung zur Interpretation deiner Ergebnisse und Empfehlungen für dein weiteres Training.",
      image: "https://images.pexels.com/photos/8217475/pexels-photo-8217475.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Target className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-slate-900">PeakCheck</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">
                Services
              </Link>
              <Link href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">
                Über uns
              </Link>
              <Link href="/spider-tool" className="text-slate-600 hover:text-blue-600 transition-colors">
                Spider Tool
              </Link>
              <Link href="/login">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"></div>
        
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500/10 rounded-full blur-lg"></div>
          <div className="absolute bottom-32 left-32 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-12 gap-4 h-full">
              {Array.from({ length: 144 }).map((_, i) => (
                <div key={i} className="border border-slate-300"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 text-sm font-medium">
                  🏃‍♂️ Sportmotorische Testungen
                </Badge>
              </motion.div>
              
              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4"
              >
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight">
                  Deine{" "}
                  <span className="relative">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500">
                      Leistung
                    </span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 rounded-full"></div>
                  </span>
                  {" "}im Fokus
                </h1>
                
                <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-lg">
                  Revolutionäre Sportdiagnostik mit modernster Technologie. 
                  Entdecke dein wahres Potenzial.
                </p>
              </motion.div>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                {[
                  { icon: Timer, label: "Sprint Tests", color: "text-blue-600" },
                  { icon: Zap, label: "Kraftmessung", color: "text-purple-600" },
                  { icon: Activity, label: "Ausdauer", color: "text-orange-500" }
                ].map((feature, index) => (
                  <div key={feature.label} className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-white/40">
                    <feature.icon className={`h-5 w-5 ${feature.color}`} />
                    <span className="text-sm font-medium text-slate-700">{feature.label}</span>
                  </div>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link href="/login">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Analyse starten
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-6 text-lg rounded-xl transition-all duration-300">
                  <Calendar className="mr-3 h-5 w-5" />
                  Termin buchen
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex items-center space-x-8 pt-8"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">2500+</div>
                  <div className="text-sm text-slate-600">Athleten</div>
                </div>
                <div className="w-px h-12 bg-slate-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">75+</div>
                  <div className="text-sm text-slate-600">Teams</div>
                </div>
                <div className="w-px h-12 bg-slate-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">98%</div>
                  <div className="text-sm text-slate-600">Zufrieden</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Main Visual Container */}
                <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px]">
                  
                  {/* Central Circle with Gradient */}
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 rounded-full p-1"
                  >
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="w-32 h-32 mx-auto"
                        >
                          <Target className="w-full h-full text-slate-400" />
                        </motion.div>
                        <div>
                          <div className="text-2xl font-bold text-slate-900">PeakCheck</div>
                          <div className="text-sm text-slate-600">Performance Analytics</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Icons */}
                  {[
                    { icon: Users, position: "top-left", color: "bg-blue-500" },
                    { icon: User, position: "top-right", color: "bg-purple-500" },
                    { icon: Timer, position: "bottom-left", color: "bg-orange-500" },
                    { icon: Zap, position: "bottom-right", color: "bg-yellow-500" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: item.delay }}
                      className={`absolute ${item.position} transform -translate-x-1/2 -translate-y-1/2`}
                    >
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        className={`${item.color} text-white p-4 rounded-full shadow-lg`}
                      >
                        <item.icon className="h-6 w-6" />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Background Decorative Elements */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-50 blur-sm"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-50 blur-sm"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-slate-400 text-center"
          >
            <div className="text-sm mb-2">Mehr erfahren</div>
            <div className="w-6 h-10 border-2 border-slate-300 rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Customer Testimonials Gallery */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 mb-4">
              Kundenerfahrungen
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Was unsere Athleten sagen
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Echte Erfahrungen von Teams und Einzelsportlern, die mit PeakCheck ihre Leistung optimiert haben
            </p>
          </motion.div>

          {/* Swipeable Gallery */}
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {[
                {
                  image: "https://images.pexels.com/photos/10350694/pexels-photo-10350694.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                  name: "Sarah Weber",
                  role: "Volleyball Nationalspielerin",
                  team: "VfB Stuttgart",
                  quote: "Die Analyse mit PeakCheck hat mir gezeigt, wo meine Stärken liegen und welche Bereiche ich noch verbessern kann. Die Visualisierung im Spinnendiagramm macht komplexe Daten sofort verständlich.",
                  metrics: { sprint: 95, kraft: 88, ausdauer: 92 }
                },
                {
                  image: "https://images.pexels.com/photos/6847601/pexels-photo-6847601.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                  name: "Team Red Eagles",
                  role: "Eishockey Mannschaft",
                  team: "DEL Liga",
                  quote: "Als Team konnten wir durch die detaillierten Leistungstests unsere Trainingsplanung komplett optimieren. Jeder Spieler weiß jetzt genau, woran er arbeiten muss.",
                  metrics: { sprint: 91, kraft: 94, ausdauer: 87 }
                },
                {
                  image: "https://images.pexels.com/photos/5470354/pexels-photo-5470354.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                  name: "Marcus Klein",
                  role: "Fußball Profi",
                  team: "FC Bayern München",
                  quote: "Die Kraftmessplatte und Sprinttests haben mir geholfen, nach meiner Verletzung gezielt zurück zur Topform zu finden. Die Daten sind präzise und die Betreuung professionell.",
                  metrics: { sprint: 89, kraft: 96, ausdauer: 90 }
                },
                {
                  image: "https://images.pexels.com/photos/9616465/pexels-photo-9616465.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                  name: "Lisa & Anna Schmidt",
                  role: "Synchronschwimmen Duo",
                  team: "Deutsche Nationalmannschaft",
                  quote: "Die Beweglichkeits- und Koordinationstests haben uns neue Einblicke in unsere Technik gegeben. Wir konnten unsere Synchronisation deutlich verbessern.",
                  metrics: { sprint: 85, kraft: 87, ausdauer: 93 }
                },
                {
                  image: "https://images.pexels.com/photos/7335861/pexels-photo-7335861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                  name: "Cheerleading Team Phoenix",
                  role: "Wettkampf Team",
                  team: "Deutsche Meisterschaft",
                  quote: "PeakCheck hat uns geholfen, die individuellen Stärken jeder Athletin zu identifizieren und unser Training entsprechend anzupassen. Die Ergebnisse sprechen für sich!",
                  metrics: { sprint: 88, kraft: 91, ausdauer: 89 }
                }
              ].map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Image Side */}
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="relative"
                    >
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                        <img 
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-96 lg:h-[500px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                        
                        {/* Overlay Info */}
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                            <h3 className="text-xl font-bold mb-1">{testimonial.name}</h3>
                            <p className="text-sm opacity-90">{testimonial.role}</p>
                            <p className="text-xs opacity-75 mt-1">{testimonial.team}</p>
                          </div>
                        </div>

                        {/* Performance Badges */}
                        <div className="absolute top-4 right-4 space-y-2">
                          <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Sprint: {testimonial.metrics.sprint}%
                          </div>
                          <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Kraft: {testimonial.metrics.kraft}%
                          </div>
                          <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Ausdauer: {testimonial.metrics.ausdauer}%
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="space-y-6"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">★</span>
                            </div>
                          ))}
                        </div>
                        
                        <blockquote className="text-xl lg:text-2xl text-slate-700 leading-relaxed font-medium">
                          "{testimonial.quote}"
                        </blockquote>
                      </div>

                      {/* Mini Performance Chart */}
                      <div className="bg-slate-50 rounded-lg p-6">
                        <h4 className="text-sm font-semibold text-slate-600 mb-4">Leistungsprofil</h4>
                        <div className="space-y-3">
                          {Object.entries(testimonial.metrics).map(([key, value]) => (
                            <div key={key} className="flex items-center justify-between">
                              <span className="text-sm text-slate-600 capitalize">{key}</span>
                              <div className="flex items-center space-x-3">
                                <div className="w-24 bg-slate-200 rounded-full h-2">
                                  <div 
                                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                                    style={{ width: `${value}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm font-semibold text-slate-700 w-8">{value}%</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="pt-4">
                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3">
                          Ähnliche Erfolge erzielen
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-12">
              {[0, 1, 2, 3, 4].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentTestimonial(currentTestimonial === 0 ? 4 : currentTestimonial - 1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-700 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => setCurrentTestimonial(currentTestimonial === 4 ? 0 : currentTestimonial + 1)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-700 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Auto-advance indicator */}
          <div className="text-center mt-8">
            <p className="text-sm text-slate-500">
              Automatischer Wechsel alle 8 Sekunden • Klicken zum Pausieren
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Spider Tool Teaser */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Interaktives Tool
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Visualisiere deine Leistung
                </h2>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Erstelle individuelle Leistungsprofile und vergleiche verschiedene 
                  Athleten oder Teams auf einen Blick. Unser interaktives Tool macht 
                  komplexe Daten verständlich und ansprechend.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg">Bis zu 8 verschiedene Leistungsparameter</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg">Vergleiche zwischen Athleten und Teams</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Activity className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg">Echtzeit-Anpassungen und Export-Funktionen</span>
                </div>
              </div>

              <Link href="/spider-tool">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
                  Tool jetzt ausprobieren
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Spider Diagram Preview */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="relative w-full h-80 flex items-center justify-center">
                  {/* Simplified Spider Diagram Visualization */}
                  <svg viewBox="0 0 300 300" className="w-full h-full">
                    {/* Grid lines */}
                    <g stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none">
                      {[0, 1, 2, 3, 4].map(i => (
                        <polygon
                          key={i}
                          points="150,50 220,100 220,200 150,250 80,200 80,100"
                          transform={`scale(${0.2 + i * 0.2}) translate(${150 - 150 * (0.2 + i * 0.2)}, ${150 - 150 * (0.2 + i * 0.2)})`}
                        />
                      ))}
                      {/* Axis lines */}
                      <line x1="150" y1="150" x2="150" y2="50" />
                      <line x1="150" y1="150" x2="220" y2="100" />
                      <line x1="150" y1="150" x2="220" y2="200" />
                      <line x1="150" y1="150" x2="150" y2="250" />
                      <line x1="150" y1="150" x2="80" y2="200" />
                      <line x1="150" y1="150" x2="80" y2="100" />
                    </g>
                    
                    {/* Data polygon */}
                    <polygon
                      points="150,80 200,110 190,180 150,220 100,190 110,120"
                      fill="rgba(255,255,255,0.2)"
                      stroke="rgba(255,255,255,0.8)"
                      strokeWidth="2"
                    />
                    
                    {/* Data points */}
                    {[
                      { x: 150, y: 80, label: "Sprint" },
                      { x: 200, y: 110, label: "Kraft" },
                      { x: 190, y: 180, label: "Ausdauer" },
                      { x: 150, y: 220, label: "Beweglichkeit" },
                      { x: 100, y: 190, label: "Balance" },
                      { x: 110, y: 120, label: "Reaktion" }
                    ].map((point, i) => (
                      <g key={i}>
                        <circle
                          cx={point.x}
                          cy={point.y}
                          r="4"
                          fill="white"
                          stroke="rgba(255,255,255,0.8)"
                          strokeWidth="2"
                        />
                        <text
                          x={point.x}
                          y={point.y - 15}
                          textAnchor="middle"
                          fill="white"
                          fontSize="12"
                          fontWeight="500"
                        >
                          {point.label}
                        </text>
                      </g>
                    ))}
                  </svg>
                </div>
                
                <div className="text-center mt-4">
                  <p className="text-white/80 text-sm">
                    Beispiel: Leistungsprofil eines Athleten
                  </p>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -top-4 -right-4 bg-yellow-400 text-slate-900 rounded-lg p-3 shadow-lg"
              >
                <div className="text-sm font-semibold">Interaktiv</div>
                <div className="text-xs">Drag & Drop</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-4 -left-4 bg-white text-slate-900 rounded-lg p-3 shadow-lg"
              >
                <div className="text-sm font-semibold">Export</div>
                <div className="text-xs">PDF & PNG</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Unsere Testverfahren
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Modernste Technologie für präzise Leistungsdiagnostik
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                    <CardDescription className="text-slate-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-600">
                          <ChevronRight className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start mx-3">
            {/* Left side - Process steps */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-3">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Dein Check-up Schritt für Schritt
                </h2>
              </div>

              {/* Interactive Steps */}
              <div className="space-y-4">
                {processSteps.map((step, index) => (
                  <motion.div 
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`cursor-pointer transition-all duration-300 ${
                      activeStep === step.id ? 'transform scale-105' : ''
                    }`}
                    onClick={() => setActiveStep(step.id)}
                  >
                    <div className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 ${
                      activeStep === step.id 
                        ? 'bg-white shadow-lg border-l-4 border-blue-600' 
                        : 'hover:bg-white/50'
                    }`}>
                      <div className={`rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5 transition-all duration-300 ${
                        activeStep === step.id 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-slate-400 text-white'
                      }`}>
                        {step.id}
                      </div>
                      <div className="space-y-1 flex-1">
                        <h3 className={`text-lg font-bold leading-tight transition-all duration-300 ${
                          activeStep === step.id 
                            ? 'text-slate-900' 
                            : 'text-slate-400'
                        }`}>
                          {step.title}
                        </h3>
                        {activeStep === step.id && (
                          <motion.p 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-slate-600 leading-relaxed text-sm"
                          >
                            {step.description}
                          </motion.p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="pt-4 px-28"
              >
                <Button 
                  size="lg" 
                  className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-medium text-center py-4 px-8"
                >
                  Scan buchen
                </Button>
              </motion.div>
            </motion.div>

            {/* Right side - Dynamic image */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end mx-28"
            >
              <div className="relative">
                {/* Dynamic Image Container */}
                <motion.div 
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative bg-white rounded-2xl p-4 shadow-2xl overflow-hidden"
                  style={{ width: '320px', height: '480px' }}
                >
                  <img 
                    src={processSteps.find(step => step.id === activeStep)?.image}
                    alt={`Schritt ${activeStep}`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  
                  {/* Overlay with step info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <div className="text-white">
                      <div className="text-sm font-semibold mb-1">Schritt {activeStep}</div>
                      <div className="text-lg font-bold">
                        {processSteps.find(step => step.id === activeStep)?.title}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-20"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-orange-500 rounded-full opacity-20"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Groups */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Für wen wir da sind
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Maßgeschneiderte Lösungen für Teams und Einzelsportler
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {targetGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:scale-105">
                  <CardHeader className="text-center pb-6">
                    <div className="mx-auto bg-gradient-to-br from-blue-100 to-purple-100 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                      <group.icon className="h-10 w-10 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl text-slate-900 mb-2">{group.title}</CardTitle>
                    <CardDescription className="text-slate-600 text-lg">
                      {group.description}
                    </CardDescription>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 mt-4">
                      {group.highlight}
                    </Badge>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-xl text-slate-600">
              Starte deine Leistungsanalyse noch heute und erreiche neue Höchstleistungen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  Jetzt anmelden
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                Kontakt aufnehmen
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Target className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">PeakCheck</span>
              </div>
              <p className="text-slate-400">
                Professionelle sportmotorische Testungen für maximale Leistung.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-slate-400">
                <li>Sprint Tests</li>
                <li>Kraftmessplatte</li>
                <li>Lauftests</li>
                <li>Teamtestungen</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Tools</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/spider-tool" className="hover:text-white transition-colors">Spinnendiagramm</Link></li>
                <li><Link href="/login" className="hover:text-white transition-colors">Patienten-Tool</Link></li>
                <li>Leistungsanalyse</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Kontakt</h3>
              <ul className="space-y-2 text-slate-400">
                <li>info@peakcheck.de</li>
                <li>+49 123 456 789</li>
                <li>Impressum</li>
                <li>Datenschutz</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 PeakCheck. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}




