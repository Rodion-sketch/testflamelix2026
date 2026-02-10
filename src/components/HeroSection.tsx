import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center">
      <div className="container-narrow section-padding pt-32 lg:pt-40">
        <div className="max-w-4xl">
          {/* Subtitle */}
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-8 animate-fade-in-up">
            {t("hero.subtitle")}
          </p>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {t("hero.title")}
            <br />
            {t("hero.titleAccent")}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t("hero.description")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-medium hover:bg-muted-foreground transition-colors group"
            >
              {t("hero.cta1")}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-border px-8 py-4 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              {t("hero.cta2")}
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-16 mt-24 pt-12 border-t border-border animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-foreground">{t("hero.stat1.value")}</p>
              <p className="text-muted-foreground text-sm mt-1">{t("hero.stat1.label")}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-foreground">{t("hero.stat2.value")}</p>
              <p className="text-muted-foreground text-sm mt-1">{t("hero.stat2.label")}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-foreground">{t("hero.stat3.value")}</p>
              <p className="text-muted-foreground text-sm mt-1">{t("hero.stat3.label")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
