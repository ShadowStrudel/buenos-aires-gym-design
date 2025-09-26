"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Mail, MessageCircle, Clock, CreditCard, Banknote, Smartphone, Instagram } from "lucide-react"

const paymentMethods = [
  { icon: CreditCard, name: "Tarjetas de Crédito/Débito", description: "Visa, Mastercard, American Express (+15%)" },
  { icon: Banknote, name: "Efectivo", description: "Pago en recepción" },
  { icon: Smartphone, name: "Mercado Pago", description: "Transferencia bancaria" },
]

export function ContactSection() {
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "¡Hola! Me interesa conocer más sobre Buenos Aires Gym Center. ¿Podrían brindarme información sobre los planes y horarios?",
    )
    window.open(`https://wa.me/5491123456789?text=${message}`, "_blank")
  }

  const openEmail = () => {
    const subject = encodeURIComponent("Consulta sobre Buenos Aires Gym Center")
    const body = encodeURIComponent(
      "Hola,\\n\\nMe interesa conocer más sobre los servicios del gimnasio. ¿Podrían brindarme información sobre:\\n\\n- Planes disponibles\\n- Horarios de clases\\n- Instalaciones\\n\\nGracias!",
    )
    window.open(`mailto:info@buenosairesgymc.com?subject=${subject}&body=${body}`, "_blank")
  }

  const openInstagram = () => {
    window.open("https://instagram.com/buenosairesgymc", "_blank")
  }

  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="text-yellow-500">Contactanos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            ¿Tenés dudas o querés conocer más sobre nuestros servicios? Estamos acá para ayudarte. Contactanos por el
            medio que prefieras.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Direct Contact */}
          <Card className="border-2 border-border">
            <CardHeader>
              <CardTitle>Contacto Directo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button onClick={openWhatsApp} className="w-full gym-button flex items-center justify-center gap-3">
                <MessageCircle size={20} />
                WhatsApp: +54 9 11 2345-6789
              </Button>

              <Button
                onClick={openEmail}
                variant="outline"
                className="w-full gym-button-outline flex items-center justify-center gap-3 bg-transparent"
              >
                <Mail size={20} />
                info@buenosairesgymc.com
              </Button>

              <Button
                onClick={openInstagram}
                variant="outline"
                className="w-full gym-button-outline flex items-center justify-center gap-3 bg-transparent"
              >
                <Instagram size={20} />
                @buenosairesgymc
              </Button>
            </CardContent>
          </Card>

          {/* Business Hours */}
          <Card className="border-2 border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock size={24} className="text-yellow-500" />
                Horarios de Atención
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Lunes a Viernes</span>
                  <span className="text-yellow-500 font-semibold">6:00 - 22:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Sábados</span>
                  <span className="text-yellow-500 font-semibold">8:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Domingos</span>
                  <span className="text-muted-foreground">Cerrado</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Methods */}
        <Card className="bg-black text-white border-yellow-500">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              <span className="text-yellow-500">Medios de Pago</span> Aceptados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {paymentMethods.map((method, index) => {
                const IconComponent = method.icon
                return (
                  <div key={index} className="text-center p-6 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent size={32} className="text-black" />
                    </div>
                    <h3 className="font-semibold text-yellow-500 mb-2">{method.name}</h3>
                    <p className="text-sm text-gray-300">{method.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="text-center mt-8 space-y-4">
              <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                <p className="text-gray-300">
                  <strong className="text-yellow-500">Nota:</strong> Los pagos con tarjeta de débito o crédito tienen un
                  recargo del 15%
                </p>
              </div>

              <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                <p className="text-gray-300">
                  <strong className="text-yellow-500">Promoción:</strong> 10% de descuento pagando 3 meses por
                  adelantado
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
