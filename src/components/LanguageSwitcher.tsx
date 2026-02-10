import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = ({ scrolled = true }: { scrolled?: boolean }) => {
  const { language, setLanguage } = useLanguage();

  const base = scrolled
    ? "text-muted-foreground hover:text-foreground"
    : "text-[hsl(var(--dark-muted))] hover:text-[hsl(var(--dark-fg))]";

  const active = scrolled
    ? "text-foreground font-medium"
    : "text-[hsl(var(--dark-fg))] font-medium";

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => setLanguage("ru")}
        className={`px-2 py-1 text-sm transition-colors ${language === "ru" ? active : base}`}
      >
        RU
      </button>
      <span className={scrolled ? "text-border" : "text-[hsl(var(--dark-border))]"}>/</span>
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 text-sm transition-colors ${language === "en" ? active : base}`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
