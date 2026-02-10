import { useLanguage } from "@/contexts/LanguageContext";
import Logo from "@/assets/flamelix-logo.png";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-10 px-6 md:px-12 lg:px-24 border-t"
      style={{
        backgroundColor: "hsl(var(--dark-bg))",
        borderColor: "hsl(var(--dark-border))",
      }}
    >
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="flex items-center">
            <img src={Logo} alt="Flamelix" className="h-7 md:h-9 w-auto" />
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-8">
            {["services", "team", "projects", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-[13px] hover:text-primary transition-colors"
                style={{ color: "hsl(var(--dark-muted))" }}
              >
                {t(`nav.${id}`)}
              </a>
            ))}
          </nav>

          <p className="text-[13px]" style={{ color: "hsl(var(--dark-muted))" }}>
            © {currentYear} Flamelix. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
