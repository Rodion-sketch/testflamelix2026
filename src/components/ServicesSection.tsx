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
    <section id="services" className="section-padding border-t border-border">
      <div className="container-narrow">
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
              {t("services.subtitle")}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              {t("services.title")}
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-lg text-muted-foreground max-w-md">
              {t("services.description")}
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-background p-8 group hover:bg-secondary transition-colors"
            >
              <service.icon className="h-6 w-6 text-muted-foreground mb-6 group-hover:text-foreground transition-colors" />
              <h3 className="text-lg font-display font-bold text-foreground mb-3">
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
