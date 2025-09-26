"use client"

import { Card, CardContent } from "@/src/components/ui/card"
import { Dumbbell, Music, Target, Heart, Bike, Users, Clock, Star } from "lucide-react"

const services = [
  {
    icon: Dumbbell,
    title: "Musculación",
    description:
      "Equipamiento de última generación para desarrollar fuerza y masa muscular. Entrenamiento personalizado.",
    features: ["Máquinas profesionales", "Pesas libres", "Asesoramiento técnico"],
    popular: true,
  },
  {
    icon: Music,
    title: "Zumba",
    description: "Baila y quema calorías con ritmos latinos. Diversión garantizada para todas las edades.",
    features: ["Música energizante", "Coreografías variadas", "Ambiente divertido"],
    popular: false,
  },
  {
    icon: Target,
    title: "Kickboxing",
    description: "Combina técnicas de boxeo y artes marciales. Ideal para liberar estrés y ponerse en forma.",
    features: ["Técnicas de combate", "Cardio intenso", "Defensa personal"],
    popular: false,
  },
  {
    icon: Target,
    title: "Boxeo",
    description: "Entrenamiento de boxeo tradicional. Mejora tu técnica, resistencia y coordinación.",
    features: ["Técnica profesional", "Saco de boxeo", "Guantes incluidos"],
    popular: false,
  },
  {
    icon: Heart,
    title: "GAP",
    description: "Glúteos, Abdominales y Piernas. Tonifica y fortalece la parte inferior del cuerpo.",
    features: ["Ejercicios focalizados", "Tonificación", "Resultados visibles"],
    popular: true,
  },
  {
    icon: Bike,
    title: "Indoor Cycling",
    description: "Pedalea al ritmo de la música en nuestro salón especializado con bicicletas de última generación.",
    features: ["Bicicletas profesionales", "Música motivadora", "Salón exclusivo"],
    popular: false,
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Nuestros <span className="text-yellow-500">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Descubrí la variedad de disciplinas que tenemos para vos. Desde musculación hasta clases grupales, encontrá
            tu entrenamiento ideal.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="relative bg-card border-2 border-border hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 group"
              >
                {service.popular && (
                  <div className="absolute -top-3 left-6 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star size={14} className="mr-1" />
                    Popular
                  </div>
                )}

                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={32} className="text-black" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-card-foreground">{service.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 text-pretty">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="bg-black rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                <span className="text-yellow-500">2 Salones</span> Especializados
              </h3>
              <p className="text-gray-300 mb-6 text-pretty">
                Contamos con instalaciones diseñadas específicamente para cada tipo de entrenamiento, garantizando la
                mejor experiencia para nuestros miembros.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Bike size={14} className="text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-500">Salón Indoor</h4>
                    <p className="text-sm text-gray-300">Equipado con bicicletas de spinning profesionales</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Users size={14} className="text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-500">Salón Clases Grupales</h4>
                    <p className="text-sm text-gray-300">Espacio amplio para zumba, kickboxing, boxeo y GAP</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
                <Clock size={32} className="text-yellow-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-yellow-500">15+</div>
                <div className="text-sm text-gray-300">Clases por Semana</div>
              </div>

              <div className="text-center p-6 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
                <Users size={32} className="text-yellow-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-yellow-500">Todas</div>
                <div className="text-sm text-gray-300">las Edades</div>
              </div>

              <div className="text-center p-6 bg-yellow-500/10 rounded-xl border border-yellow-500/20 col-span-2">
                <Star size={32} className="text-yellow-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-yellow-500">Instructores Certificados</div>
                <div className="text-sm text-gray-300">Profesionales con experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
