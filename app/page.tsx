import { AboutSection } from "@/components/AboutSection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { HeroSection } from "@/components/HeroSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SocialProofSection } from "@/components/SocialProofSection";

export default function Home() {
  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-900 antialiased">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesGrid />
        <ProcessSection />
        <SocialProofSection />
        <PortfolioSection />
        <FaqSection />
        <FinalCtaSection />
        <SiteFooter />
      </main>
    </div>
  );
}
