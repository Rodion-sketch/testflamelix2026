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
          <div className="relative bg-card border border-border rounded-2xl p-8 md:p-12">
            <Quote className="w-10 h-10 text-primary mb-6 opacity-50" />

            <blockquote className="text-base md:text-lg leading-relaxed text-foreground/85 mb-8 space-y-4">
              <p>{t("testimonials.1.text1")}</p>
              <p>{t("testimonials.1.text2")}</p>
              <p>{t("testimonials.1.text3")}</p>
            </blockquote>

            <div className="flex items-center gap-4 pt-6 border-t border-border">
              <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center text-primary font-display text-lg">
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
    </section>
  );
};

export default TestimonialsSection;
