import { useLanguage } from "@/contexts/LanguageContext";
import { MessageCircle, Send } from "lucide-react";
import Logo from "@/assets/flamelix-logo-new.png";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer
      className="py-16 px-6 md:px-12 lg:px-24 border-t"
      style={{
        backgroundColor: "hsl(var(--dark-bg))",
        borderColor: "hsl(var(--dark-border))",
      }}
    >
      <div className="container-narrow">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Col 1 — Logo + desc */}
          <div>
            <a href="#" className="flex items-center mb-4">
              <img src={Logo} alt="Flamelix" className="h-8 w-auto" />
            </a>
            <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--dark-muted))" }}>
              {t("footer.desc")}
            </p>
          </div>

          {/* Col 2 — Nav */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "hsl(var(--dark-muted))" }}>
              {t("nav.services") === "Услуги" ? "Навигация" : "Navigation"}
            </p>
            <nav className="flex flex-col gap-3">
              {["services", "projects", "team", "contact"].map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="text-sm hover:text-primary transition-colors"
                  style={{ color: "hsl(var(--dark-fg))" }}
                >
                  {t(`nav.${id}`)}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3 — Social */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "hsl(var(--dark-muted))" }}>
              {t("nav.services") === "Услуги" ? "Соцсети" : "Social"}
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/79032317693"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                style={{ borderColor: "hsl(var(--dark-border))", color: "hsl(var(--dark-fg))" }}
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://t.me/rodionbat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                style={{ borderColor: "hsl(var(--dark-border))", color: "hsl(var(--dark-fg))" }}
                aria-label="Telegram"
              >
                <Send className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t" style={{ borderColor: "hsl(var(--dark-border))" }}>
          <p className="text-[13px] text-center" style={{ color: "hsl(var(--dark-muted))" }}>
            {t("footer.copy")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
