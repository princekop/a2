import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ProductShowcase } from "@/components/sections/product-showcase"
import { FlavorExplorer } from "@/components/sections/flavor-explorer"
import { CraftsmanshipSection } from "@/components/sections/craftsmanship-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { FooterSection } from "@/components/sections/footer-section"
import { Navigation } from "@/components/navigation"
import TargetCursor from "@/components/target-cursor"
import { PageTransition } from "@/components/page-transition"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Home() {
  return (
    <PageTransition>
      <main className="relative bg-[#080808] text-[#faf8f5] overflow-hidden">
        <TargetCursor />
        <ScrollProgress />
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ProductShowcase />
        <FlavorExplorer />
        <CraftsmanshipSection />
        <TestimonialsSection />
        <FooterSection />
      </main>
    </PageTransition>
  )
}
