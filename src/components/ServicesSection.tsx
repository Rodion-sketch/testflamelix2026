import { Search, Users, Target, BarChart3, Palette, Handshake, Compass } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollReveal from "@/components/ScrollReveal";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Search, title: t("services.research.title"), description: t("services.research.desc"), span: "" },
    { icon: Users, title: t("services.cx.title"), description: t("services.cx.desc"), span: "md:col-span-2" },
    { icon: Target, title: t("services.leads.title"), description: t("services.leads.desc"), span: "" },
    { icon: Compass, title: t("services.strategy.title"), description: t("services.strategy.desc"), span: "" },
    { icon: Palette, title: t("services.materials.title"), description: t("services.materials.desc"), span: "" },
    { icon: BarChart3, title: t("services.analytics.title"), description: t("services.analytics.desc"), span: "md:col-span-2" },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-foreground mb-6">
              {t("services.title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("services.description")}
            </p>
          </div>
        </ScrollReveal>

        {/* Bento grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08} className={service.span}>
              <div className="h-full bg-card/50 border border-border/60 rounded-2xl p-8 md:p-10 group hover:border-primary/30 hover-glow gradient-border-hover transition-all duration-400 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-display text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Accent full-width card for Partner Marketing */}
        <ScrollReveal delay={0.2}>
          <div className="border border-primary/20 rounded-2xl p-10 bg-primary/5 hover:bg-primary/10 hover-glow transition-all duration-300 gradient-border-hover">
            <div className="flex items-start gap-6">
              <div className="w-11 h-11 rounded-2xl bg-primary/15 flex items-center justify-center shrink-0">
                <Handshake className="h-5 w-5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-display text-foreground mb-2">
                  {t("services.partners.title")}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                  {t("services.partners.desc")}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;
