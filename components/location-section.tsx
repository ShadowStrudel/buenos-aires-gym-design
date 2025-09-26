"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Car, Train, Bus } from "lucide-react"

export function LocationSection() {
  const openGoogleMaps = () => {
    window.open("https://maps.google.com/?q=Av.+Corrientes+1234,+CABA+Buenos+Aires,+Argentina", "_blank")
  }

  const openDirections = () => {
    window.open("https://www.google.com/maps/dir//Av.+Corrientes+1234,+CABA+Buenos+Aires,+Argentina", "_blank")
  }

  return (
    <section id="ubicacion" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Nuestra <span className="text-yellow-500">Ubicación</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Encontranos en el corazón de Buenos Aires, con fácil acceso en transporte público y privado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <Card className="border-2 border-border overflow-hidden">
              <div className="relative h-96 bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168903552!2d-58.38375908477!3d-34.60373998045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacb9f8ff113%3A0x22fd0f8c6c4d4c8a!2sAv.+Corrientes+1234%2C+C1043+CABA!5e0!3m2!1sen!2sar!4v1635789012345!5m2!1sen!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Buenos Aires Gym Center Location"
                ></iframe>
                <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
              </div>
            </Card>

            <div className="flex gap-4 mt-4">
              <Button onClick={openGoogleMaps} className="flex-1 gym-button-outline bg-transparent">
                <MapPin size={16} className="mr-2" />
                Ver en Google Maps
              </Button>
              <Button onClick={openDirections} className="flex-1 gym-button">
                <Navigation size={16} className="mr-2" />
                Cómo Llegar
              </Button>
            </div>
          </div>

          {/* Location Info */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Address */}
            <Card className="border-2 border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin size={24} className="text-yellow-500" />
                  Dirección
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-lg font-semibold">Buenos Aires Gym Center</p>
                  <p className="text-muted-foreground">Av. Corrientes 1234</p>
                  <p className="text-muted-foreground">C1043 CABA, Buenos Aires</p>
                  <p className="text-muted-foreground">Argentina</p>
                </div>
              </CardContent>
            </Card>

            {/* Transportation */}
            <Card className="border-2 border-border">
              <CardHeader>
                <CardTitle>Cómo Llegar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Train size={16} className="text-black" />
                    </div>
                    <div>
                      <p className="font-semibold">Subte</p>
                      <p className="text-sm text-muted-foreground">Línea B - Estación Carlos Pellegrini (2 cuadras)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bus size={16} className="text-black" />
                    </div>
                    <div>
                      <p className="font-semibold">Colectivos</p>
                      <p className="text-sm text-muted-foreground">Líneas: 5, 6, 7, 23, 50, 99, 115, 132</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Car size={16} className="text-black" />
                    </div>
                    <div>
                      <p className="font-semibold">Auto</p>
                      <p className="text-sm text-muted-foreground">
                        Estacionamiento pago en la zona. Garage a 1 cuadra.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
