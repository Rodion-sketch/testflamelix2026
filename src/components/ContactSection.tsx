import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - CTA */}
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
              Контакты
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Готовы обсудить ваш проект?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Свяжитесь с нами, чтобы обсудить, как мы можем помочь вашему бизнесу достичь новых высот в продажах недвижимости.
            </p>
            <Button size="xl">
              Оставить заявку
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right side - Contact info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-md bg-secondary flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
                  <a href="mailto:hello@flamelix.com" className="text-lg font-medium text-foreground hover:text-accent transition-colors">
                    hello@flamelix.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-md bg-secondary flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Телефон</p>
                  <a href="tel:+74951234567" className="text-lg font-medium text-foreground hover:text-accent transition-colors">
                    +7 (495) 123-45-67
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-md bg-secondary flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Офис</p>
                  <p className="text-lg font-medium text-foreground">
                    Москва, Россия
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
