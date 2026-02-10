import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-padding bg-card/50">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side */}
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-primary mb-4">
              {t("contact.subtitle")}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-6">
              {t("contact.title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
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

          {/* Right side — Contact info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-background border border-border/60 hover:border-primary/20 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">{t("contact.email")}</p>
                <a href="mailto:hello@flamelix.com" className="text-foreground font-medium hover:text-primary transition-colors">
                  hello@flamelix.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-background border border-border/60 hover:border-primary/20 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">{t("contact.phone")}</p>
                <a href="tel:+74951234567" className="text-foreground font-medium hover:text-primary transition-colors">
                  +7 (495) 123-45-67
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-background border border-border/60 hover:border-primary/20 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">{t("contact.office")}</p>
                <p className="text-foreground font-medium">{t("contact.location")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
