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

        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.1}>
              <div className="glass-card-dark p-8 rounded-2xl transition-all duration-400 hover:-translate-y-2 hover-glow gradient-border-hover group text-center">
                <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-300 border border-primary/20">
                  <span className="text-primary text-lg font-semibold">
                    {member.initials}
                  </span>
                </div>
                <h3 className="text-lg font-display mb-1" style={{ color: "hsl(var(--dark-fg))" }}>
                  {member.name}
                </h3>
                <span className="inline-block text-xs text-primary bg-primary/10 px-3 py-1 rounded-full font-medium mb-4">
                  {member.role}
                </span>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--dark-muted))" }}>
                  {member.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
