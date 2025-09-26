import { Header } from "@/src/components/header"
import { HeroSection } from "@/src/components/hero-section"
import { ServicesSection } from "@/src/components/services-section"
import { PricingSection } from "@/src/components/pricing-section"
import { SchedulesSection } from "@/src/components/schedules-section"
import { ContactSection } from "@/src/components/contact-section"
import { LocationSection } from "@/src/components/location-section"
import { InstagramSection } from "@/src/components/instagram-section"
import { Footer } from "@/src/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <InstagramSection />
        <PricingSection />
        <SchedulesSection />
        <ContactSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  )
}
