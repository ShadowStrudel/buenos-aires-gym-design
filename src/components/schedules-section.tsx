"use client"

import React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import { Clock, MapPin, Users, Bike, Target, Music, Heart } from "lucide-react"
import { useState } from "react"

const scheduleData = {
  "Salón Clases Grupales": {
    icon: Users,
    description: "Espacio amplio para clases grupales con piso especializado",
    classes: [
      {
        day: "Lunes",
        sessions: [
          { time: "08:00", class: "GAP", instructor: "María", duration: "45 min", spots: 15 },
          { time: "18:00", class: "Kickboxing", instructor: "Carlos", duration: "50 min", spots: 12 },
          { time: "19:30", class: "Zumba", instructor: "Ana", duration: "45 min", spots: 20 },
        ],
      },
      {
        day: "Martes",
        sessions: [
          { time: "07:00", class: "Boxeo", instructor: "Diego", duration: "50 min", spots: 10 },
          { time: "18:30", class: "GAP", instructor: "María", duration: "45 min", spots: 15 },
          { time: "20:00", class: "Kickboxing", instructor: "Carlos", duration: "50 min", spots: 12 },
        ],
      },
      {
        day: "Miércoles",
        sessions: [
          { time: "08:00", class: "Zumba", instructor: "Ana", duration: "45 min", spots: 20 },
          { time: "18:00", class: "GAP", instructor: "María", duration: "45 min", spots: 15 },
          { time: "19:30", class: "Boxeo", instructor: "Diego", duration: "50 min", spots: 10 },
        ],
      },
      {
        day: "Jueves",
        sessions: [
          { time: "07:00", class: "Kickboxing", instructor: "Carlos", duration: "50 min", spots: 12 },
          { time: "18:30", class: "Zumba", instructor: "Ana", duration: "45 min", spots: 20 },
          { time: "20:00", class: "GAP", instructor: "María", duration: "45 min", spots: 15 },
        ],
      },
      {
        day: "Viernes",
        sessions: [
          { time: "08:00", class: "Boxeo", instructor: "Diego", duration: "50 min", spots: 10 },
          { time: "18:00", class: "Zumba", instructor: "Ana", duration: "45 min", spots: 20 },
          { time: "19:30", class: "Kickboxing", instructor: "Carlos", duration: "50 min", spots: 12 },
        ],
      },
      {
        day: "Sábado",
        sessions: [
          { time: "09:00", class: "GAP", instructor: "María", duration: "45 min", spots: 15 },
          { time: "10:30", class: "Zumba", instructor: "Ana", duration: "45 min", spots: 20 },
        ],
      },
    ],
  },
  "Salón Indoor": {
    icon: Bike,
    description: "Salón especializado con bicicletas de spinning profesionales",
    classes: [
      {
        day: "Lunes",
        sessions: [
          { time: "07:00", class: "Indoor Cycling", instructor: "Roberto", duration: "45 min", spots: 25 },
          { time: "18:00", class: "Indoor Cycling", instructor: "Laura", duration: "45 min", spots: 25 },
          { time: "19:30", class: "Indoor Cycling", instructor: "Roberto", duration: "45 min", spots: 25 },
        ],
      },
      {
        day: "Martes",
        sessions: [
          { time: "08:00", class: "Indoor Cycling", instructor: "Laura", duration: "45 min", spots: 25 },
          { time: "18:30", class: "Indoor Cycling", instructor: "Roberto", duration: "45 min", spots: 25 },
          { time: "20:00", class: "Indoor Cycling", instructor: "Laura", duration: "45 min", spots: 25 },
        ],
      },
      {
        day: "Miércoles",
        sessions: [
          { time: "07:00", class: "Indoor Cycling", instructor: "Roberto", duration: "45 min", spots: 25 },
          { time: "18:00", class: "Indoor Cycling", instructor: "Laura", duration: "45 min", spots: 25 },
          { time: "19:30", class: "Indoor Cycling", instructor: "Roberto", duration: "45 min", spots: 25 },
        ],
      },
      {
        day: "Jueves",
        sessions: [
          { time: "08:00", class: "Indoor Cycling", instructor: "Laura", duration: "45 min", spots: 25 },
          { time: "18:30", class: "Indoor Cycling", instructor: "Roberto", duration: "45 min", spots: 25 },
          { time: "20:00", class: "Indoor Cycling", instructor: "Laura", duration: "45 min", spots: 25 },
        ],
      },
      {
        day: "Viernes",
        sessions: [
          { time: "07:00", class: "Indoor Cycling", instructor: "Roberto", duration: "45 min", spots: 25 },
          { time: "18:00", class: "Indoor Cycling", instructor: "Laura", duration: "45 min", spots: 25 },
        ],
      },
      {
        day: "Sábado",
        sessions: [
          { time: "09:00", class: "Indoor Cycling", instructor: "Roberto", duration: "45 min", spots: 25 },
          { time: "10:30", class: "Indoor Cycling", instructor: "Laura", duration: "45 min", spots: 25 },
        ],
      },
    ],
  },
}

const classIcons = {
  GAP: Heart,
  Kickboxing: Target,
  Zumba: Music,
  Boxeo: Target,
  "Indoor Cycling": Bike,
}

export function SchedulesSection() {
  const [selectedRoom, setSelectedRoom] = useState<string>("Salón Clases Grupales")

  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="horarios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Horarios de <span className="text-yellow-500">Clases</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Consultá los horarios de nuestras clases grupales. Tenemos opciones para todos los horarios y niveles.
          </p>
        </div>

        {/* Room Selector */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {Object.entries(scheduleData).map(([roomName, roomData]) => {
            const IconComponent = roomData.icon
            return (
              <Button
                key={roomName}
                variant={selectedRoom === roomName ? "default" : "outline"}
                className={`flex items-center gap-2 px-6 py-3 ${
                  selectedRoom === roomName ? "gym-button" : "gym-button-outline"
                }`}
                onClick={() => setSelectedRoom(roomName)}
              >
                <IconComponent size={20} />
                {roomName}
              </Button>
            )
          })}
        </div>

        {/* Selected Room Info */}
        <div className="mb-8">
          <Card className="bg-black text-white border-yellow-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                {React.createElement(scheduleData[selectedRoom as keyof typeof scheduleData].icon, {
                  size: 24,
                  className: "text-yellow-500",
                })}
                {selectedRoom}
              </CardTitle>
              <p className="text-gray-300">{scheduleData[selectedRoom as keyof typeof scheduleData].description}</p>
            </CardHeader>
          </Card>
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {scheduleData[selectedRoom as keyof typeof scheduleData].classes.map((daySchedule, index) => (
            <Card key={index} className="border-2 border-border hover:border-yellow-500/50 transition-colors">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-center">{daySchedule.day}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                {daySchedule.sessions.length > 0 ? (
                  <div className="space-y-4">
                    {daySchedule.sessions.map((session, sessionIndex) => {
                      const ClassIcon = classIcons[session.class as keyof typeof classIcons] || Clock
                      return (
                        <div
                          key={sessionIndex}
                          className="p-4 bg-muted/50 rounded-lg border border-border hover:border-yellow-500/30 transition-colors"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <ClassIcon size={16} className="text-yellow-500" />
                              <span className="font-semibold">{session.class}</span>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {session.duration}
                            </Badge>
                          </div>

                          <div className="text-sm text-muted-foreground space-y-1">
                            <div className="flex items-center gap-2">
                              <Clock size={14} />
                              <span>{session.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users size={14} />
                              <span>{session.instructor}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin size={14} />
                              <span>{session.spots} cupos</span>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Clock size={32} className="mx-auto mb-2 opacity-50" />
                    <p>No hay clases programadas</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-yellow-500/10 rounded-2xl p-8 border border-yellow-500/20">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-4">Información Importante</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock size={24} className="text-black" />
              </div>
              <h4 className="font-semibold mb-2">Reservas</h4>
              <p className="text-sm text-muted-foreground">Reservá tu lugar con 24hs de anticipación</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users size={24} className="text-black" />
              </div>
              <h4 className="font-semibold mb-2">Cupos Limitados</h4>
              <p className="text-sm text-muted-foreground">Cada clase tiene cupos limitados para mejor atención</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target size={24} className="text-black" />
              </div>
              <h4 className="font-semibold mb-2">Todos los Niveles</h4>
              <p className="text-sm text-muted-foreground">
                Nuestras clases están adaptadas para principiantes y avanzados
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">¿Querés reservar tu lugar o tenés consultas sobre las clases?</p>
            <Button className="gym-button" onClick={scrollToContact}>
              Contactanos para Reservar
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
