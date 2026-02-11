import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Logo from "@/assets/flamelix-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.team"), href: "#team" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow section-padding !py-4">
        <div className="flex items-center justify-between">
          {/* Logo — white on dark hero, inverted when scrolled */}
          <a href="#" className="flex items-center">
            <img
              src={Logo}
              alt="Flamelix"
              className={`h-7 md:h-9 w-auto transition-all duration-300 ${
                scrolled ? "invert" : ""
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-[13px] transition-colors ${
                  scrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-[hsl(var(--dark-muted))] hover:text-[hsl(var(--dark-fg))]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA + Language */}
          <div className="hidden md:flex items-center gap-5">
            <LanguageSwitcher scrolled={scrolled} />
            <a
              href="#contact"
              className="text-[13px] font-medium bg-primary text-primary-foreground px-5 py-2 rounded-2xl hover:opacity-90 transition-opacity"
            >
              {t("nav.cta")}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <LanguageSwitcher scrolled={scrolled} />
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className={`h-5 w-5 ${scrolled ? "text-foreground" : "text-[hsl(var(--dark-fg))]"}`} />
              ) : (
                <Menu className={`h-5 w-5 ${scrolled ? "text-foreground" : "text-[hsl(var(--dark-fg))]"}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pt-6 pb-6 border-t border-border/50 mt-4 bg-background/95 backdrop-blur-lg rounded-2xl px-4 -mx-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-base text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2.5 rounded-2xl self-start mt-2 text-center"
              >
                {t("nav.cta")}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
