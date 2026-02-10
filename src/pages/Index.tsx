import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import ChallengesSection from "@/components/ChallengesSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import CTABandSection from "@/components/CTABandSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <TrustedBySection />
          <ChallengesSection />
          <ServicesSection />
          <ProcessSection />
          <ProjectsSection />
          <CTABandSection />
          <TeamSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
