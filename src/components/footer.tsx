"use client"

import { Button } from "@/src/components/ui/button"
import { Instagram, Mail, Phone, MapPin, Clock, Dumbbell, MessageCircle } from "lucide-react"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openWhatsApp = () => {
    const message = encodeURIComponent("¡Hola! Me interesa conocer más sobre Buenos Aires Gym Center.")
    // window.open(`https://wa.me/5491123456789?text=${message}`, "_blank")
  }

  const openInstagram = () => {
    window.open("https://instagram.com/buenosairesgymcent", "_blank")
  }

  const openEmail = () => {
    // window.open("mailto:info@buenosairesgymc.com", "_blank")
  }

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-yellow-500 rounded-md flex items-center justify-center">
                <Dumbbell size={24} className="text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Buenos Aires</h3>
                <p className="text-sm text-yellow-500">Gym Center</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6">
              Tu gimnasio de confianza en el corazón de Buenos Aires. Musculación, clases grupales y más para todas las
              edades.
            </p>
            <div className="flex space-x-3">
              <Button
                size="sm"
                variant="outline"
                className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black bg-transparent"
                onClick={openInstagram}
              >
                <Instagram size={16} />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black bg-transparent"
                onClick={openWhatsApp}
              >
                <MessageCircle size={16} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("precios")}
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Precios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("horarios")}
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Horarios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Contacto
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("ubicacion")}
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Ubicación
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">Nuestros Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Musculación</li>
              <li>Zumba</li>
              <li>Kickboxing</li>
              <li>Boxeo</li>
              <li>GAP</li>
              <li>Indoor Cycling</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Av. Brig. Gral. Juan Manuel de Rosas 770</p>
                  <p className="text-gray-300">Lomas del mirador, Buenos Aires</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={16} className="text-yellow-500" />
                <button onClick={openWhatsApp} className="text-gray-300 hover:text-yellow-500 transition-colors">
                  +54 9 11 1111-1111
                </button>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={16} className="text-yellow-500" />
                <button onClick={openEmail} className="text-gray-300 hover:text-yellow-500 transition-colors">
                  info@buenosairesgymc.com
                </button>
              </div>

              <div className="flex items-start gap-2">
                <Clock size={16} className="text-yellow-500 mt-1" />
                <div>
                  <p className="text-gray-300">Lun-Vie: 6:00-22:00</p>
                  <p className="text-gray-300">Sáb: 8:00-20:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-yellow-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© 2024 Buenos Aires Gym Center. Todos los derechos reservados.</p>
            <div className="flex gap-6 text-sm text-gray-400">
              <button className="hover:text-yellow-500 transition-colors">Términos y Condiciones</button>
              <button className="hover:text-yellow-500 transition-colors">Política de Privacidad</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
