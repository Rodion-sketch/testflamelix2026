import { useLanguage } from "@/contexts/LanguageContext";
import ScrollReveal from "@/components/ScrollReveal";

const TeamSection = () => {
  const { t } = useLanguage();

  const team = [
    { name: t("team.member1.name"), role: t("team.member1.role"), description: t("team.member1.desc"), initials: "РА" },
    { name: t("team.member4.name"), role: t("team.member4.role"), description: t("team.member4.desc"), initials: "АС" },
    { name: t("team.member3.name"), role: t("team.member3.role"), description: t("team.member3.desc"), initials: "АВ" },
  ];

  return (
    <section id="team" className="section-padding section-dark">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display mb-6" style={{ color: "hsl(var(--dark-fg))" }}>
              {t("team.title")}
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "hsl(var(--dark-muted))" }}>
              {t("team.description")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.1}>
              <div className="glass-card-dark p-8 rounded-2xl transition-all duration-400 hover:-translate-y-1 hover-glow gradient-border-hover group">
                <div className="flex gap-5">
                  <div className="shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-primary/25 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
