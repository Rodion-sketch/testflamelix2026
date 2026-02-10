import { Search, Users, Target, BarChart3, Palette, Handshake } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Search, title: t("services.research.title"), description: t("services.research.desc") },
    { icon: Users, title: t("services.cx.title"), description: t("services.cx.desc") },
    { icon: Target, title: t("services.leads.title"), description: t("services.leads.desc") },
    { icon: Palette, title: t("services.materials.title"), description: t("services.materials.desc") },
    { icon: BarChart3, title: t("services.analytics.title"), description: t("services.analytics.desc") },
    { icon: Handshake, title: t("services.partners.title"), description: t("services.partners.desc") },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-narrow">
        {/* Section header — centered, editorial */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-5">
            {t("services.subtitle")}
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-foreground mb-6">
            {t("services.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("services.description")}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 border border-border/60 rounded-2xl overflow-hidden">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-background p-10 group hover:bg-card transition-colors duration-300"
            >
              <service.icon className="h-5 w-5 text-primary mb-6" strokeWidth={1.5} />
              <h3 className="text-lg font-display text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
