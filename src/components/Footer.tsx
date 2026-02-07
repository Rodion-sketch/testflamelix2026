import Logo from "@/assets/flamelix-logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12 px-6 md:px-12 lg:px-24">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src={Logo} alt="Flamelix" className="h-8 w-auto brightness-0 invert" />
            <span className="text-lg font-semibold text-hero">Flamelix</span>
          </a>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <a href="#services" className="text-sm text-hero-muted hover:text-hero transition-colors">
              Услуги
            </a>
            <a href="#team" className="text-sm text-hero-muted hover:text-hero transition-colors">
              Команда
            </a>
            <a href="#projects" className="text-sm text-hero-muted hover:text-hero transition-colors">
              Проекты
            </a>
            <a href="#contact" className="text-sm text-hero-muted hover:text-hero transition-colors">
              Контакты
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-hero-muted">
            © {currentYear} Flamelix
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
