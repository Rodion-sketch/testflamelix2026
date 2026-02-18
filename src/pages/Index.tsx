import { useState, useEffect, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import CTABandSection from "@/components/CTABandSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const FloatingCTA = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#contact"
      className="fixed bottom-6 right-6 z-40 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:opacity-90 transition-all flex items-center gap-2 animate-float hover-glow"
      style={{
        boxShadow: "0 8px 30px -5px hsl(var(--primary) / 0.4)",
      }}
    >
      {t("nav.cta")}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
};

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -300, y: -300 });

  const handleMove = useCallback((e: MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    // Only on desktop
    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("mousemove", handleMove, { passive: true });
      return () => window.removeEventListener("mousemove", handleMove);
    }
  }, [handleMove]);

  return <div className="cursor-glow hidden md:block" style={{ left: pos.x, top: pos.y }} />;
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CursorGlow />
      <Header />
      <main>
        <HeroSection />
        <TrustedBySection />
        <ServicesSection />
        <ProcessSection />
        <ProjectsSection />
        <CTABandSection />
        <TestimonialsSection />
        <TeamSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
