import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollReveal from "@/components/ScrollReveal";

const CTABandSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding section-dark">
      <div className="container-narrow">
        <ScrollReveal direction="scale">
          <div
            className="relative flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14 rounded-2xl overflow-hidden glow-primary"
            style={{
              background: "radial-gradient(ellipse at 30% 50%, hsl(var(--primary) / 0.15), transparent 70%), hsl(var(--dark-card))",
              border: "1px solid hsl(var(--dark-border))",
            }}
          >
            {/* Decorative orbs */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[60px] animate-orbit pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-[40px] animate-orbit-reverse pointer-events-none" />
            
            <div className="relative">
              <h3
                className="text-2xl md:text-3xl font-display mb-3"
                style={{ color: "hsl(var(--dark-fg))" }}
              >
                {t("cta.title")}
              </h3>
              <p className="text-sm" style={{ color: "hsl(var(--dark-muted))" }}>
                {t("cta.subtitle")}
              </p>
            </div>
            <a
              href="#contact"
              className="relative inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium hover:opacity-90 transition-opacity rounded-xl group shrink-0 hover-glow"
            >
              {t("cta.btn")}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTABandSection;
