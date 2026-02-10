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
    <section id="team" className="section-padding section-dark">
      <div className="container-narrow">
        {/* Section header — centered */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-5">
            {t("team.subtitle")}
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display mb-6" style={{ color: "hsl(var(--dark-fg))" }}>
            {t("team.title")}
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "hsl(var(--dark-muted))" }}>
            {t("team.description")}
          </p>
        </div>

        {/* Team grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="p-8 rounded-2xl border transition-all duration-300 hover:border-primary/30"
              style={{
                backgroundColor: "hsl(var(--dark-card))",
                borderColor: "hsl(var(--dark-border))",
              }}
            >
              <div className="flex gap-5">
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center">
                  <span className="text-primary text-sm font-semibold">
                    {member.initials}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-display mb-1" style={{ color: "hsl(var(--dark-fg))" }}>
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--dark-muted))" }}>
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
