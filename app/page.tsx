import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { CTASection } from "@/components/landing/sections/cta-section";
import { FeaturesSection } from "@/components/landing/sections/features-section";
import { HeroSection } from "@/components/landing/sections/hero-section";
import { HowItWorksSection } from "@/components/landing/sections/how-it-works-section";
import { StatsSection } from "@/components/landing/sections/stats-section";
import { TestimonialsSection } from "@/components/landing/sections/testimonial-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
