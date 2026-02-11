import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CTABandSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding section-dark">
      <div className="container-narrow">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14 rounded-2xl"
          style={{
            background: "radial-gradient(ellipse at 30% 50%, hsl(var(--primary) / 0.15), transparent 70%), hsl(var(--dark-card))",
            border: "1px solid hsl(var(--dark-border))",
          }}
        >
          <div>
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
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium hover:opacity-90 transition-opacity rounded-xl group shrink-0"
          >
            {t("cta.btn")}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABandSection;
