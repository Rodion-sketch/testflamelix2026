import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-warm.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden section-dark">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--dark-bg))] via-[hsl(var(--dark-bg)/0.7)] to-transparent" />
      </div>

      <div className="container-narrow section-padding pt-40 lg:pt-48 pb-16 lg:pb-24 relative z-10">
        {/* Subtitle */}
        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-10 animate-fade-in-up">
          {t("hero.subtitle")}
        </p>

        {/* Main heading — large, editorial */}
        <h1
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-display leading-[1.05] mb-10 animate-fade-in-up max-w-4xl"
          style={{ animationDelay: "0.1s" }}
        >
          {t("hero.title")}
          <br />
          <em className="text-primary font-light">{t("hero.titleAccent")}</em>
        </h1>

        {/* Description */}
        <p
          className="text-lg md:text-xl leading-relaxed mb-14 max-w-xl animate-fade-in-up"
          style={{ animationDelay: "0.2s", color: "hsl(var(--dark-muted))" }}
        >
          {t("hero.description")}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 mb-24 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium hover:opacity-90 transition-all rounded-full group"
          >
            {t("hero.cta1")}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border border-[hsl(var(--dark-border))] px-8 py-4 text-sm font-medium hover:border-primary/60 hover:bg-[hsl(var(--dark-card))] transition-all rounded-full"
            style={{ color: "hsl(var(--dark-fg))" }}
          >
            {t("hero.cta2")}
          </a>
        </div>

        {/* Stats row */}
        <div
          className="flex flex-wrap gap-12 md:gap-20 pt-10 border-t animate-fade-in-up"
          style={{
            animationDelay: "0.4s",
            borderColor: "hsl(var(--dark-border))",
          }}
        >
          {[
            { value: t("hero.stat1.value"), label: t("hero.stat1.label") },
            { value: t("hero.stat2.value"), label: t("hero.stat2.label") },
            { value: t("hero.stat3.value"), label: t("hero.stat3.label") },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-display text-primary">
                {stat.value}
              </p>
              <p
                className="text-sm mt-2"
                style={{ color: "hsl(var(--dark-muted))" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
