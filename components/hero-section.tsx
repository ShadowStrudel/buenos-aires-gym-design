"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Dumbbell } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-gym-interior-with-weightlifting-equipment-a.jpg"
          alt="Buenos Aires Gym Center Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center">
              <Dumbbell size={40} className="text-black" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            <span className="text-yellow-500">Entrená</span> con Nosotros
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto text-pretty">
            Descubrí tu potencial en Buenos Aires Gym Center. Musculación, clases grupales y más. Para todas las edades,
            todos los niveles.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm md:text-base">
            <div className="flex items-center bg-black/50 px-4 py-2 rounded-full border border-yellow-500">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
              Musculación
            </div>
            <div className="flex items-center bg-black/50 px-4 py-2 rounded-full border border-yellow-500">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
              Clases Grupales
            </div>
            <div className="flex items-center bg-black/50 px-4 py-2 rounded-full border border-yellow-500">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
              Todas las Edades
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gym-button text-lg px-8 py-4" onClick={() => scrollToSection("contacto")}>
              Comenzar Ahora
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gym-button-outline text-lg px-8 py-4 bg-transparent"
              onClick={() => scrollToSection("servicios")}
            >
              Ver Servicios
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-yellow-500/30">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">500+</div>
              <div className="text-sm text-gray-300">Miembros Activos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">15+</div>
              <div className="text-sm text-gray-300">Clases Semanales</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">2</div>
              <div className="text-sm text-gray-300">Salones</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">5+</div>
              <div className="text-sm text-gray-300">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
