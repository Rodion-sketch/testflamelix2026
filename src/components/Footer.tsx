import { useLanguage } from "@/contexts/LanguageContext";
import Logo from "@/assets/flamelix-logo.svg";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-border/50">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <img src={Logo} alt="Flamelix" className="h-6 w-auto" />
          </a>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("nav.services")}
            </a>
            <a href="#team" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("nav.team")}
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("nav.projects")}
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("nav.contact")}
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Flamelix. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
