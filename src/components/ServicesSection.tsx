import { Search, Users, Target, BarChart3, Palette, Handshake } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Search,
      title: t("services.research.title"),
      description: t("services.research.desc"),
    },
    {
      icon: Users,
      title: t("services.cx.title"),
      description: t("services.cx.desc"),
    },
    {
      icon: Target,
      title: t("services.leads.title"),
      description: t("services.leads.desc"),
    },
    {
      icon: Palette,
      title: t("services.materials.title"),
      description: t("services.materials.desc"),
    },
    {
      icon: BarChart3,
      title: t("services.analytics.title"),
      description: t("services.analytics.desc"),
    },
    {
      icon: Handshake,
      title: t("services.partners.title"),
      description: t("services.partners.desc"),
    },
  ];

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container-narrow relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            {t("services.subtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            {t("services.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("services.description")}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="gradient-border p-6 rounded-xl group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
