import { Search, Users, Target, BarChart3, Palette, Handshake, Compass } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Search, title: t("services.research.title"), description: t("services.research.desc") },
    { icon: Users, title: t("services.cx.title"), description: t("services.cx.desc") },
    { icon: Target, title: t("services.leads.title"), description: t("services.leads.desc") },
    { icon: Compass, title: t("services.strategy.title"), description: t("services.strategy.desc") },
    { icon: Palette, title: t("services.materials.title"), description: t("services.materials.desc") },
    { icon: BarChart3, title: t("services.analytics.title"), description: t("services.analytics.desc") },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-foreground mb-6">
            {t("services.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("services.description")}
          </p>
        </div>

        {/* 3x2 grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 border border-border/60 rounded-2xl overflow-hidden mb-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-background p-10 group hover:bg-card transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                <service.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-display text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Accent full-width card for Partner Marketing */}
        <div className="border border-primary/20 rounded-2xl p-10 bg-primary/5 hover:bg-primary/10 transition-colors">
          <div className="flex items-start gap-6">
            <div className="w-10 h-10 rounded-2xl bg-primary/15 flex items-center justify-center shrink-0">
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
      </div>
    </section>
  );
};

export default ServicesSection;
