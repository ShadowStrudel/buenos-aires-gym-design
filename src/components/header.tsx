"use client"

import { useState } from "react"
import { Button } from "@/src/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-black text-white sticky top-0 z-50 border-b border-yellow-500">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-yellow-500 rounded-md flex items-center justify-center">
              <span className="text-black font-bold text-xl">BA</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">Buenos Aires</h1>
              <p className="text-sm text-yellow-500">Gym Center</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("servicios")} className="hover:text-yellow-500 transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollToSection("precios")} className="hover:text-yellow-500 transition-colors">
              Precios
            </button>
            <button onClick={() => scrollToSection("horarios")} className="hover:text-yellow-500 transition-colors">
              Horarios
            </button>
            <button onClick={() => scrollToSection("contacto")} className="hover:text-yellow-500 transition-colors">
              Contacto
            </button>
            <button onClick={() => scrollToSection("ubicacion")} className="hover:text-yellow-500 transition-colors">
              Ubicación
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="gym-button">Únete Ahora</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-yellow-500 pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-left hover:text-yellow-500 transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("precios")}
                className="text-left hover:text-yellow-500 transition-colors"
              >
                Precios
              </button>
              <button
                onClick={() => scrollToSection("horarios")}
                className="text-left hover:text-yellow-500 transition-colors"
              >
                Horarios
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-left hover:text-yellow-500 transition-colors"
              >
                Contacto
              </button>
              <button
                onClick={() => scrollToSection("ubicacion")}
                className="text-left hover:text-yellow-500 transition-colors"
              >
                Ubicación
              </button>
              <Button className="gym-button w-full mt-4">Únete Ahora</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
