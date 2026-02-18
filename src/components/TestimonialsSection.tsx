import { useLanguage } from "@/contexts/LanguageContext";
import { Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-foreground">
              {t("testimonials.title")}
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15} direction="scale">
          <div className="max-w-3xl mx-auto">
            <div className="relative glass-card rounded-2xl p-8 md:p-12 overflow-hidden glow-primary">
              {/* Decorative gradient accent */}
              <div className="absolute top-0 right-0 w-60 h-60 bg-primary/8 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/5 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/3" />

              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Quote className="w-5 h-5 text-primary" />
                </div>

                <blockquote className="text-base md:text-lg leading-relaxed text-foreground/85 mb-8 space-y-4">
                  <p>{t("testimonials.1.text1")}</p>
                  {(() => { const v2 = t("testimonials.1.text2"); return v2 && !v2.includes("testimonials.") ? <p>{v2}</p> : null; })()}
                  {(() => { const v3 = t("testimonials.1.text3"); return v3 && !v3.includes("testimonials.") ? <p>{v3}</p> : null; })()}
                </blockquote>

                <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary font-display text-lg">
                    {t("testimonials.1.initials")}
                  </div>
                  <div>
                    <p className="font-display text-base text-foreground">
                      {t("testimonials.1.name")}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t("testimonials.1.role")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
