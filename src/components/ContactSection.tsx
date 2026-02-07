import { Mail, Phone, MapPin, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-background" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - CTA */}
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
              {t("contact.subtitle")}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              {t("contact.title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t("contact.description")}
            </p>
            <Button size="lg" className="text-lg px-8 py-6 glow-primary group">
              {t("contact.cta")}
              <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>

          {/* Right side - Contact info */}
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-xl flex items-start gap-5 group hover:border-border transition-colors">
              <div className="w-12 h-12 rounded-lg bg-secondary border border-border flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">{t("contact.email")}</p>
                <a href="mailto:hello@flamelix.com" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  hello@flamelix.com
                </a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl flex items-start gap-5 group hover:border-border transition-colors">
              <div className="w-12 h-12 rounded-lg bg-secondary border border-border flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">{t("contact.phone")}</p>
                <a href="tel:+74951234567" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  +7 (495) 123-45-67
                </a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl flex items-start gap-5 group hover:border-border transition-colors">
              <div className="w-12 h-12 rounded-lg bg-secondary border border-border flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">{t("contact.office")}</p>
                <p className="text-lg font-medium text-foreground">
                  {t("contact.location")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
