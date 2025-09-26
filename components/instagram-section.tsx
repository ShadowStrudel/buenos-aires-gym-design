"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react"

// Mock Instagram posts data
const instagramPosts = [
  {
    id: 1,
    image: "/gym-workout-session-with-people-exercising.jpg",
    caption: "¡Sesión de GAP increíble esta mañana! 💪 #BuenosAiresGym #GAP #Fitness",
    likes: 127,
    comments: 23,
    date: "2 días",
  },
  {
    id: 2,
    image: "/indoor-cycling-class-with-bikes-and-lights.jpg",
    caption: "Indoor cycling con toda la energía 🚴‍♀️ ¡Los esperamos! #IndoorCycling #Cardio",
    likes: 89,
    comments: 15,
    date: "3 días",
  },
  {
    id: 3,
    image: "/boxing-training-session-with-gloves-and-equipment.jpg",
    caption: "Entrenamiento de boxeo para liberar el estrés del día 🥊 #Boxeo #Training",
    likes: 156,
    comments: 31,
    date: "4 días",
  },
  {
    id: 4,
    image: "/zumba-dance-class-with-people-dancing.jpg",
    caption: "¡Zumba con Ana! Diversión y ejercicio en una sola clase 💃 #Zumba #Dance",
    likes: 203,
    comments: 42,
    date: "5 días",
  },
  {
    id: 5,
    image: "/modern-gym-equipment-and-weightlifting-area.jpg",
    caption: "Nuevas máquinas en el área de musculación 🏋️‍♂️ #Musculacion #NewEquipment",
    likes: 178,
    comments: 28,
    date: "1 semana",
  },
  {
    id: 6,
    image: "/kickboxing-class-with-instructor-and-students.jpg",
    caption: "Kickboxing con Carlos - técnica y potencia 🥋 #Kickboxing #MartialArts",
    likes: 134,
    comments: 19,
    date: "1 semana",
  },
]

export function InstagramSection() {
  const openInstagram = () => {
    window.open("https://instagram.com/buenosairesgymc", "_blank")
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Seguinos en <span className="text-yellow-500">Instagram</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Mantente al día con nuestras clases, eventos especiales y la energía de nuestra comunidad fitness.
          </p>
        </div>

        {/* Instagram CTA */}
        <div className="bg-black rounded-2xl p-8 md:p-12 text-white text-center mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Instagram size={40} className="text-black" />
            </div>

            <h3 className="text-3xl font-bold mb-4">
              <span className="text-yellow-500">@BuenosAiresGymC</span>
            </h3>

            <p className="text-gray-300 mb-8 text-pretty">
              Seguinos para ver entrenamientos, tips de fitness, historias de nuestros miembros y todas las novedades
              del gimnasio. ¡Formá parte de nuestra comunidad!
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">2.5K</div>
                <div className="text-sm text-gray-300">Seguidores</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">450</div>
                <div className="text-sm text-gray-300">Posts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">15+</div>
                <div className="text-sm text-gray-300">Stories/día</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">100%</div>
                <div className="text-sm text-gray-300">Auténtico</div>
              </div>
            </div>

            <Button onClick={openInstagram} className="gym-button text-lg px-8 py-3">
              <Instagram size={20} className="mr-2" />
              Seguir en Instagram
              <ExternalLink size={16} className="ml-2" />
            </Button>
          </div>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instagramPosts.map((post) => (
            <Card
              key={post.id}
              className="border-2 border-border hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 group overflow-hidden"
            >
              <div className="relative">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Instagram size={16} className="text-black" />
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{post.caption}</p>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Heart size={14} className="text-red-500" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle size={14} />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  <span>{post.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
