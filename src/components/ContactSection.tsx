import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-padding border-t border-border">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side */}
          <div>
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
              {t("contact.subtitle")}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              {t("contact.title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              {t("contact.description")}
            </p>
            <a
              href="mailto:hello@flamelix.com"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-medium hover:bg-muted-foreground transition-colors group"
            >
              {t("contact.cta")}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right side — Contact info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start gap-4 group">
              <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">{t("contact.email")}</p>
                <a href="mailto:hello@flamelix.com" className="text-foreground hover:text-muted-foreground transition-colors">
                  hello@flamelix.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">{t("contact.phone")}</p>
                <a href="tel:+74951234567" className="text-foreground hover:text-muted-foreground transition-colors">
                  +7 (495) 123-45-67
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">{t("contact.office")}</p>
                <p className="text-foreground">{t("contact.location")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
