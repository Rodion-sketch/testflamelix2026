import { Plus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ChallengesSection = () => {
  const { t } = useLanguage();

  const challenges = [
    t("challenges.1"),
    t("challenges.2"),
    t("challenges.3"),
    t("challenges.4"),
  ];

  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-5">
            {t("challenges.subtitle")}
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-foreground">
            {t("challenges.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {challenges.map((text, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-8 border border-border rounded-2xl bg-card/40 hover:bg-card transition-colors"
            >
              <Plus className="h-5 w-5 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
