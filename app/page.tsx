import HeroSection from "./components/sections/hero-section";
import StatsSection from "./components/sections/stats-section";
import ProgramsSection from "./components/sections/programs-section";
import FeaturesSection from "./components/sections/features-section";
import TestimonialsSection from "./components/sections/testimonials-section";
import CTASection from "./components/sections/cta-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <ProgramsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
