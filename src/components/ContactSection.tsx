import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-padding section-dark">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-5">
            {t("contact.subtitle")}
          </p>
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-display mb-6"
            style={{ color: "hsl(var(--dark-fg))" }}
          >
            {t("contact.title")}
          </h2>
          <p className="text-lg leading-relaxed mb-10" style={{ color: "hsl(var(--dark-muted))" }}>
            {t("contact.description")}
          </p>
          <a
            href="mailto:hello@flamelix.com"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium hover:opacity-90 transition-opacity group rounded-full"
          >
            {t("contact.cta")}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Contact details — horizontal row */}
        <div className="grid md:grid-cols-3 gap-6 mt-20 pt-10 border-t" style={{ borderColor: "hsl(var(--dark-border))" }}>
          {[
            { icon: Mail, label: t("contact.email"), value: "hello@flamelix.com", href: "mailto:hello@flamelix.com" },
            { icon: Phone, label: t("contact.phone"), value: "+7 (495) 123-45-67", href: "tel:+74951234567" },
            { icon: MapPin, label: t("contact.office"), value: t("contact.location"), href: undefined },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <item.icon className="h-5 w-5 text-primary mx-auto mb-3" strokeWidth={1.5} />
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "hsl(var(--dark-muted))" }}>
                {item.label}
              </p>
              {item.href ? (
                <a href={item.href} className="text-sm font-medium hover:text-primary transition-colors" style={{ color: "hsl(var(--dark-fg))" }}>
                  {item.value}
                </a>
              ) : (
                <p className="text-sm font-medium" style={{ color: "hsl(var(--dark-fg))" }}>{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
