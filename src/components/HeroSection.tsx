import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container-narrow section-padding pt-32 lg:pt-40 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">{t("hero.subtitle")}</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-tight mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">{t("hero.title")}</span>
            <br />
            <span className="gradient-text glow-text">{t("hero.titleAccent")}</span>
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t("hero.description")}
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="text-lg px-8 py-6 glow-primary group">
              {t("hero.cta1")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-border hover:border-primary/50 hover:bg-primary/5">
              {t("hero.cta2")}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-24 pt-12 border-t border-border/50 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <p className="text-3xl md:text-4xl lg:text-5xl font-display font-bold gradient-text">{t("hero.stat1.value")}</p>
              <p className="text-muted-foreground text-sm md:text-base mt-2">{t("hero.stat1.label")}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl lg:text-5xl font-display font-bold gradient-text">{t("hero.stat2.value")}</p>
              <p className="text-muted-foreground text-sm md:text-base mt-2">{t("hero.stat2.label")}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl lg:text-5xl font-display font-bold gradient-text">{t("hero.stat3.value")}</p>
              <p className="text-muted-foreground text-sm md:text-base mt-2">{t("hero.stat3.label")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
