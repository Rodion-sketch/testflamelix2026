import { useLanguage } from "@/contexts/LanguageContext";
import Logo from "@/assets/flamelix-logo.png";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-border/50">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="flex items-center">
            <img src={Logo} alt="Flamelix" className="h-7 md:h-9 w-auto invert" />
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-8">
            <a href="#services" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.services")}
            </a>
            <a href="#team" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.team")}
            </a>
            <a href="#projects" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.projects")}
            </a>
            <a href="#contact" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.contact")}
            </a>
          </nav>

          <p className="text-[13px] text-muted-foreground">
            © {currentYear} Flamelix. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
