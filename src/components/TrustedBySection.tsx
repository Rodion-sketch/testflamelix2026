import { useLanguage } from "@/contexts/LanguageContext";

const clients = ["MR Group", "Yandex", "Knight Frank", "ENKA Flexity", "Tranio", "Smartis", "Urban Escape", "BREIG"];

const TrustedBySection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-8 overflow-hidden border-b border-border">
      <div className="container-narrow flex items-center gap-8">
        <span className="text-xs tracking-[0.2em] uppercase text-primary whitespace-nowrap font-medium shrink-0">
          {t("trusted.label")}
        </span>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...clients, ...clients].map((name, i) => (
              <span key={i} className="flex items-center gap-6 whitespace-nowrap">
                <span className="text-sm text-muted-foreground font-medium">{name}</span>
                <span className="w-1 h-1 rounded-full bg-primary/40" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
