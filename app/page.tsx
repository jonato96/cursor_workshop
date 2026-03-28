import { AboutSection } from "@/components/AboutSection";
import { FinalCtaFooter } from "@/components/FinalCtaFooter";
import { HeroSection } from "@/components/HeroSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-900">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesGrid />
        <FinalCtaFooter />
      </main>
    </div>
  );
}
