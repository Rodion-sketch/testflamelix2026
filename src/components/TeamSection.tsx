import { useLanguage } from "@/contexts/LanguageContext";

const TeamSection = () => {
  const { t } = useLanguage();

  const team = [
    { name: t("team.member1.name"), role: t("team.member1.role"), description: t("team.member1.desc"), initials: "РА" },
    { name: t("team.member2.name"), role: t("team.member2.role"), description: t("team.member2.desc"), initials: "ИВ" },
    { name: t("team.member3.name"), role: t("team.member3.role"), description: t("team.member3.desc"), initials: "АВ" },
    { name: t("team.member4.name"), role: t("team.member4.role"), description: t("team.member4.desc"), initials: "АС" },
  ];

  return (
    <section id="team" className="section-padding bg-card/50">
      <div className="container-narrow">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-primary mb-4">
            {t("team.subtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-6">
            {t("team.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("team.description")}
          </p>
        </div>

        {/* Team grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-background border border-border/60 p-8 rounded-2xl group hover:border-primary/20 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex gap-5">
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-sm font-semibold">
                    {member.initials}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-display text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
