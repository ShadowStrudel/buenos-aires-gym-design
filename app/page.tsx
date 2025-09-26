import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PricingSection } from "@/components/pricing-section"
import { SchedulesSection } from "@/components/schedules-section"
import { ContactSection } from "@/components/contact-section"
import { LocationSection } from "@/components/location-section"
import { InstagramSection } from "@/components/instagram-section"
import { Footer } from "@/components/footer"

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
