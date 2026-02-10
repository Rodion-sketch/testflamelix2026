import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => setLanguage("ru")}
        className={`px-2 py-1 text-sm transition-colors ${
          language === "ru"
            ? "text-foreground font-medium"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        RU
      </button>
      <span className="text-border">/</span>
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 text-sm transition-colors ${
          language === "en"
            ? "text-foreground font-medium"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
