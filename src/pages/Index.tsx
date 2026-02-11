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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
    </div>
  );
};

export default Index;
