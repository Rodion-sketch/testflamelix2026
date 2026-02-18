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
              <div className="h-full bg-card border border-border rounded-2xl p-8 md:p-10 group hover:border-primary/40 hover-glow gradient-border-hover transition-all duration-400 hover:-translate-y-1 hover:shadow-lg">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-primary/10 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-display text-foreground mb-3">
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
          <div className="border border-primary/25 rounded-2xl p-10 bg-gradient-to-r from-primary/8 via-primary/4 to-transparent hover:from-primary/12 hover:via-primary/6 hover-glow transition-all duration-300 gradient-border-hover">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/25 to-primary/10 flex items-center justify-center shrink-0">
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
