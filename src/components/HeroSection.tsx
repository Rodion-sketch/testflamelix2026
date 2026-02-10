import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-abstract.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
      </div>

      <div className="container-narrow section-padding pt-32 lg:pt-40 relative z-10">
        <div className="max-w-4xl">
          {/* Subtitle */}
          <p className="text-sm tracking-widest uppercase text-primary font-medium mb-8 animate-fade-in-up">
            {t("hero.subtitle")}
          </p>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {t("hero.title")}
            <br />
            <span className="text-primary">{t("hero.titleAccent")}</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t("hero.description")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium hover:opacity-90 transition-opacity group rounded-md"
            >
              {t("hero.cta1")}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-border px-8 py-4 text-sm font-medium text-foreground hover:bg-secondary transition-colors rounded-md"
            >
              {t("hero.cta2")}
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-12 md:gap-16 mt-24 pt-12 border-t border-border animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-primary">{t("hero.stat1.value")}</p>
              <p className="text-muted-foreground text-sm mt-1">{t("hero.stat1.label")}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-primary">{t("hero.stat2.value")}</p>
              <p className="text-muted-foreground text-sm mt-1">{t("hero.stat2.label")}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-primary">{t("hero.stat3.value")}</p>
              <p className="text-muted-foreground text-sm mt-1">{t("hero.stat3.label")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
