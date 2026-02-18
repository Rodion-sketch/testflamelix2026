import { useLanguage } from "@/contexts/LanguageContext";
import { Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import sarperPhoto from "@/assets/testimonial-sarper.jpg";

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
            <div className="relative border border-border rounded-2xl p-10 md:p-14 overflow-hidden bg-card glow-primary">
              {/* Decorative gradient accent */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/6 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3" />


              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-8">
                  <Quote className="w-5 h-5 text-primary" />
                </div>

                <blockquote className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-10 space-y-4 font-display italic">
                  <p>{t("testimonials.1.text1")}</p>
                  {(() => { const v2 = t("testimonials.1.text2"); return v2 && !v2.includes("testimonials.") ? <p>{v2}</p> : null; })()}
                  {(() => { const v3 = t("testimonials.1.text3"); return v3 && !v3.includes("testimonials.") ? <p>{v3}</p> : null; })()}
                </blockquote>

                <div className="flex items-center gap-4 pt-8 border-t border-border/50">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/20">
                    <img src={sarperPhoto} alt={t("testimonials.1.name")} className="w-full h-full object-cover grayscale" style={{ objectPosition: "50% 50%", transform: "scale(1.5)" }} />
                  </div>
                  <div>
                    <p className="font-display text-lg text-foreground font-medium">
                      {t("testimonials.1.name")}
                    </p>
                    <p className="text-base text-muted-foreground font-sans">
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
