import { useLanguage } from "@/contexts/LanguageContext";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-5">
            {t("testimonials.subtitle")}
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-foreground">
            {t("testimonials.title")}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative bg-card border border-border rounded-2xl p-8 md:p-12 overflow-hidden">
            {/* Decorative gradient accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Quote className="w-5 h-5 text-primary" />
              </div>

              <blockquote className="text-base md:text-lg leading-relaxed text-foreground/85 mb-8 space-y-4">
                <p>{t("testimonials.1.text1")}</p>
                <p>{t("testimonials.1.text2")}</p>
                <p>{t("testimonials.1.text3")}</p>
              </blockquote>

              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center text-primary font-display text-lg">
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
