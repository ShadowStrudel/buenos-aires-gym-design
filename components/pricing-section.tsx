"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star, Crown, Zap, Users, User } from "lucide-react"

const pricingData = {
  musculacion: [
    { plan: "Básico", price: "$15.000", description: "Solo musculación" },
    { plan: "Completo", price: "$25.000", description: "Musculación + todas las clases", popular: true },
    { plan: "Premium", price: "$40.000", description: "Acceso 24/7 + entrenador personal" },
  ],
  clases: [
    { clase: "Zumba", precio: "$8.000", duracion: "1 hora" },
    { clase: "Kickboxing", precio: "$10.000", duracion: "1 hora" },
    { clase: "Boxing", precio: "$12.000", duracion: "1 hora" },
    { clase: "GAP", precio: "$8.000", duracion: "45 min" },
    { clase: "Indoor Cycling", precio: "$10.000", duracion: "45 min" },
    { clase: "Funcional", precio: "$9.000", duracion: "1 hora" },
  ],
  combos: [
    {
      combo: "Musculación + 2 Clases",
      precio: "$28.000",
      descripcion: "Acceso completo + 2 clases a elección por semana",
    },
    { combo: "Todas las Clases", precio: "$22.000", descripcion: "Acceso ilimitado a todas las clases grupales" },
    { combo: "Premium Clases", precio: "$35.000", descripcion: "Todas las clases + 1 sesión personal/mes" },
  ],
  personalizados: [
    { servicio: "Entrenamiento Personal", precio: "$15.000", descripcion: "Sesión individual de 1 hora" },
    { servicio: "Pack 4 Sesiones", precio: "$55.000", descripcion: "4 sesiones individuales (ahorrás $5.000)" },
    { servicio: "Pack 8 Sesiones", precio: "$100.000", descripcion: "8 sesiones individuales (ahorrás $20.000)" },
    {
      servicio: "Asesoramiento Nutricional",
      precio: "$12.000",
      descripcion: "Consulta + plan alimentario personalizado",
    },
  ],
}

export function PricingSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="precios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Planes y <span className="text-yellow-500">Precios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Elegí la opción que mejor se adapte a tus objetivos. Tenemos planes de musculación, clases individuales y
            combos especiales.
          </p>
        </div>

        <div className="space-y-12">
          {/* Planes de Musculación */}
          <Card className="border-2 border-yellow-500/20">
            <CardHeader className="bg-black text-white">
              <div className="flex items-center justify-center mb-4">
                <Zap className="text-yellow-500 mr-3" size={32} />
                <h3 className="text-2xl font-bold">Planes de Musculación</h3>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="text-left p-4 font-semibold">Plan</th>
                      <th className="text-left p-4 font-semibold">Precio Mensual</th>
                      <th className="text-left p-4 font-semibold w-1/2">Descripción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingData.musculacion.map((item, index) => (
                      <tr
                        key={index}
                        className={`border-b ${item.popular ? "bg-yellow-500/5 border-yellow-500/20" : ""}`}
                      >
                        <td className="p-4">
                          <div className="flex items-center">
                            <span className="font-semibold">{item.plan}</span>
                            {item.popular && (
                              <span className="ml-2 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                                MÁS POPULAR
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="p-4 text-yellow-500 font-bold text-lg">{item.price}</td>
                        <td className="p-4 text-muted-foreground">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Clases Individuales */}
          <Card className="border-2 border-yellow-500/20">
            <CardHeader className="bg-black text-white">
              <div className="flex items-center justify-center mb-4">
                <Users className="text-yellow-500 mr-3" size={32} />
                <h3 className="text-2xl font-bold">Clases Individuales</h3>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="text-left p-4 font-semibold">Clase</th>
                      <th className="text-left p-4 font-semibold">Precio por Clase</th>
                      <th className="text-left p-4 font-semibold w-1/2">Duración</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingData.clases.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-4 font-semibold">{item.clase}</td>
                        <td className="p-4 text-yellow-500 font-bold text-lg">{item.precio}</td>
                        <td className="p-4 text-muted-foreground">{item.duracion}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Combos Especiales */}
          <Card className="border-2 border-yellow-500/20">
            <CardHeader className="bg-black text-white">
              <div className="flex items-center justify-center mb-4">
                <Star className="text-yellow-500 mr-3" size={32} />
                <h3 className="text-2xl font-bold">Combos Especiales</h3>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="text-left p-4 font-semibold">Combo</th>
                      <th className="text-left p-4 font-semibold">Precio Mensual</th>
                      <th className="text-left p-4 font-semibold w-1/2">Descripción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingData.combos.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-4 font-semibold">{item.combo}</td>
                        <td className="p-4 text-yellow-500 font-bold text-lg">{item.precio}</td>
                        <td className="p-4 text-muted-foreground">{item.descripcion}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Entrenamientos Personalizados */}
          <Card className="border-2 border-yellow-500/20">
            <CardHeader className="bg-black text-white">
              <div className="flex items-center justify-center mb-4">
                <User className="text-yellow-500 mr-3" size={32} />
                <h3 className="text-2xl font-bold">Entrenamientos Personalizados</h3>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="text-left p-4 font-semibold">Servicio</th>
                      <th className="text-left p-4 font-semibold">Precio</th>
                      <th className="text-left p-4 font-semibold w-1/2">Descripción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingData.personalizados.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-4 font-semibold">{item.servicio}</td>
                        <td className="p-4 text-yellow-500 font-bold text-lg">{item.precio}</td>
                        <td className="p-4 text-muted-foreground">{item.descripcion}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="bg-black rounded-2xl p-8 md:p-12 text-white mt-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-yellow-500">Beneficios</span> Adicionales
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto text-pretty">
              Todos nuestros planes incluyen beneficios que hacen que tu experiencia en Buenos Aires Gym Center sea
              única.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={24} className="text-black" />
              </div>
              <h4 className="font-semibold text-yellow-500 mb-2">Sin Matrícula</h4>
              <p className="text-sm text-gray-300">No pagás inscripción ni costos ocultos</p>
            </div>

            <div className="text-center p-6 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={24} className="text-black" />
              </div>
              <h4 className="font-semibold text-yellow-500 mb-2">Equipamiento Nuevo</h4>
              <p className="text-sm text-gray-300">Máquinas y equipos de última generación</p>
            </div>

            <div className="text-center p-6 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={24} className="text-black" />
              </div>
              <h4 className="font-semibold text-yellow-500 mb-2">Flexibilidad</h4>
              <p className="text-sm text-gray-300">Podés pausar o cambiar tu plan cuando quieras</p>
            </div>

            <div className="text-center p-6 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown size={24} className="text-black" />
              </div>
              <h4 className="font-semibold text-yellow-500 mb-2">Atención Personal</h4>
              <p className="text-sm text-gray-300">Staff disponible para ayudarte siempre</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-300 mb-4">¿Tenés dudas sobre qué plan elegir?</p>
            <Button className="gym-button-outline" onClick={scrollToContact}>
              Consultanos Sin Compromiso
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
