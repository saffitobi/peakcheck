"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Target, ArrowLeft, Download, Save, RotateCcw, Plus, Trash2 } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

interface Category {
  id: string
  name: string
  value: number
  maxValue: number
  color: string
}

export default function SpiderToolPageContent() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [categories, setCategories] = useState<Category[]>([
    { id: '1', name: 'Geschwindigkeit', value: 75, maxValue: 100, color: '#3B82F6' },
    { id: '2', name: 'Kraft', value: 85, maxValue: 100, color: '#EF4444' },
    { id: '3', name: 'Ausdauer', value: 60, maxValue: 100, color: '#10B981' },
    { id: '4', name: 'Beweglichkeit', value: 70, maxValue: 100, color: '#F59E0B' },
    { id: '5', name: 'Koordination', value: 80, maxValue: 100, color: '#8B5CF6' },
    { id: '6', name: 'Reaktion', value: 65, maxValue: 100, color: '#EC4899' }
  ])

  const colors = ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899', '#06B6D4', '#84CC16']

  useEffect(() => {
    drawSpiderDiagram()
  }, [categories])

  const drawSpiderDiagram = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) - 80
    const numCategories = categories.length

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw background circles
    ctx.strokeStyle = '#E5E7EB'
    ctx.lineWidth = 1
    for (let i = 1; i <= 5; i++) {
      ctx.beginPath()
      ctx.arc(centerX, centerY, (radius * i) / 5, 0, 2 * Math.PI)
      ctx.stroke()
    }

    // Draw axes
    ctx.strokeStyle = '#D1D5DB'
    ctx.lineWidth = 1
    for (let i = 0; i < numCategories; i++) {
      const angle = (i * 2 * Math.PI) / numCategories - Math.PI / 2
      const x = centerX + radius * Math.cos(angle)
      const y = centerY + radius * Math.sin(angle)
      
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(x, y)
      ctx.stroke()
    }

    // Draw data polygon
    ctx.beginPath()
    ctx.fillStyle = 'rgba(59, 130, 246, 0.2)'
    ctx.strokeStyle = '#3B82F6'
    ctx.lineWidth = 2

    for (let i = 0; i < numCategories; i++) {
      const angle = (i * 2 * Math.PI) / numCategories - Math.PI / 2
      const value = categories[i].value / categories[i].maxValue
      const x = centerX + radius * value * Math.cos(angle)
      const y = centerY + radius * value * Math.sin(angle)
      
      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }
    ctx.closePath()
    ctx.fill()
    ctx.stroke()

    // Draw data points
    for (let i = 0; i < numCategories; i++) {
      const angle = (i * 2 * Math.PI) / numCategories - Math.PI / 2
      const value = categories[i].value / categories[i].maxValue
      const x = centerX + radius * value * Math.cos(angle)
      const y = centerY + radius * value * Math.sin(angle)
      
      ctx.beginPath()
      ctx.arc(x, y, 4, 0, 2 * Math.PI)
      ctx.fillStyle = categories[i].color
      ctx.fill()
      ctx.strokeStyle = '#FFFFFF'
      ctx.lineWidth = 2
      ctx.stroke()
    }

    // Draw labels
    ctx.fillStyle = '#374151'
    ctx.font = '14px Inter, sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    for (let i = 0; i < numCategories; i++) {
      const angle = (i * 2 * Math.PI) / numCategories - Math.PI / 2
      const labelRadius = radius + 30
      const x = centerX + labelRadius * Math.cos(angle)
      const y = centerY + labelRadius * Math.sin(angle)
      
      ctx.fillText(categories[i].name, x, y)
    }

    // Draw percentage labels on circles
    ctx.fillStyle = '#9CA3AF'
    ctx.font = '12px Inter, sans-serif'
    for (let i = 1; i <= 5; i++) {
      const percentage = (i * 20).toString() + '%'
      ctx.fillText(percentage, centerX + 5, centerY - (radius * i) / 5)
    }
  }

  const updateCategory = (id: string, field: keyof Category, value: any) => {
    setCategories(prev => prev.map(cat => 
      cat.id === id ? { ...cat, [field]: value } : cat
    ))
  }

  const addCategory = () => {
    const newId = Date.now().toString()
    const newCategory: Category = {
      id: newId,
      name: `Kategorie ${categories.length + 1}`,
      value: 50,
      maxValue: 100,
      color: colors[categories.length % colors.length]
    }
    setCategories(prev => [...prev, newCategory])
  }

  const removeCategory = (id: string) => {
    if (categories.length > 3) {
      setCategories(prev => prev.filter(cat => cat.id !== id))
    }
  }

  const resetDiagram = () => {
    setCategories(prev => prev.map(cat => ({ ...cat, value: 50 })))
  }

  const downloadDiagram = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const link = document.createElement('a')
    link.download = 'spinnendiagramm.png'
    link.href = canvas.toDataURL()
    link.click()
  }

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
            <Link href="/" className="flex items-center text-slate-600 hover:text-blue-600 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Interaktives Spinnendiagramm
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Visualisieren Sie Ihre sportliche Leistung in verschiedenen Kategorien. 
            Passen Sie die Werte an und erstellen Sie Ihr individuelles Leistungsprofil.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Spider Diagram */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Leistungsdiagramm</span>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={resetDiagram}>
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Reset
                    </Button>
                    <Button variant="outline" size="sm" onClick={downloadDiagram}>
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>
                  Ihr individuelles Leistungsprofil
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <canvas
                    ref={canvasRef}
                    width={500}
                    height={500}
                    className="border border-slate-200 rounded-lg bg-white"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Kategorien anpassen</span>
                  <Button variant="outline" size="sm" onClick={addCategory}>
                    <Plus className="h-4 w-4 mr-2" />
                    Hinzufügen
                  </Button>
                </CardTitle>
                <CardDescription>
                  Passen Sie die Werte für jede Kategorie an
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {categories.map((category, index) => (
                  <div key={category.id} className="space-y-3 p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 flex-1">
                        <div 
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: category.color }}
                        />
                        <Input
                          value={category.name}
                          onChange={(e) => updateCategory(category.id, 'name', e.target.value)}
                          className="flex-1"
                        />
                      </div>
                      {categories.length > 3 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeCategory(category.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label className="text-sm">Wert: {category.value}</Label>
                        <Label className="text-sm text-slate-500">Max: {category.maxValue}</Label>
                      </div>
                      <Slider
                        value={[category.value]}
                        onValueChange={(value) => updateCategory(category.id, 'value', value[0])}
                        max={category.maxValue}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label className="text-xs text-slate-600">Maximalwert</Label>
                        <Input
                          type="number"
                          value={category.maxValue}
                          onChange={(e) => updateCategory(category.id, 'maxValue', parseInt(e.target.value) || 100)}
                          min={1}
                          className="h-8"
                        />
                      </div>
                      <div>
                        <Label className="text-xs text-slate-600">Farbe</Label>
                        <input
                          type="color"
                          value={category.color}
                          onChange={(e) => updateCategory(category.id, 'color', e.target.value)}
                          className="w-full h-8 rounded border border-slate-300"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card>
              <CardHeader>
                <CardTitle>Anleitung</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-600">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <p>Verwenden Sie die Schieberegler, um die Werte anzupassen</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <p>Klicken Sie auf die Kategorie-Namen, um sie zu bearbeiten</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <p>Fügen Sie neue Kategorien hinzu oder entfernen Sie bestehende</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <p>Laden Sie Ihr Diagramm als PNG-Datei herunter</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}