import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-warm.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Warm gradient background with image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-transparent" />
      </div>

      <div className="container-narrow section-padding pt-32 lg:pt-40 relative z-10">
        <div className="max-w-3xl">
          {/* Subtitle */}
          <p className="text-sm tracking-[0.2em] uppercase text-primary mb-8 animate-fade-in-up">
            {t("hero.subtitle")}
          </p>

          {/* Main heading — serif, elegant */}
          <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-display leading-[1.15] mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {t("hero.title")}
            <br />
            <em className="text-primary">{t("hero.titleAccent")}</em>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t("hero.description")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium hover:opacity-90 transition-all rounded-full group"
            >
              {t("hero.cta1")}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-foreground/20 px-8 py-4 text-sm font-medium text-foreground hover:border-foreground/40 hover:bg-card transition-all rounded-full"
            >
              {t("hero.cta2")}
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-12 md:gap-16 mt-28 pt-10 border-t border-border/60 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div>
              <p className="text-3xl md:text-4xl font-display text-foreground">{t("hero.stat1.value")}</p>
              <p className="text-muted-foreground text-sm mt-2">{t("hero.stat1.label")}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display text-foreground">{t("hero.stat2.value")}</p>
              <p className="text-muted-foreground text-sm mt-2">{t("hero.stat2.label")}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display text-foreground">{t("hero.stat3.value")}</p>
              <p className="text-muted-foreground text-sm mt-2">{t("hero.stat3.label")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
