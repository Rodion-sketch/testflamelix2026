import { useLanguage } from "@/contexts/LanguageContext";

const TeamSection = () => {
  const { t } = useLanguage();

  const team = [
    {
      name: t("team.member1.name"),
      role: t("team.member1.role"),
      description: t("team.member1.desc"),
      initials: "РА",
    },
    {
      name: t("team.member2.name"),
      role: t("team.member2.role"),
      description: t("team.member2.desc"),
      initials: "ИВ",
    },
    {
      name: t("team.member3.name"),
      role: t("team.member3.role"),
      description: t("team.member3.desc"),
      initials: "АВ",
    },
    {
      name: t("team.member4.name"),
      role: t("team.member4.role"),
      description: t("team.member4.desc"),
      initials: "АС",
    },
  ];

  return (
    <section id="team" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container-narrow relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            {t("team.subtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            {t("team.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("team.description")}
          </p>
        </div>

        {/* Team grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="glass-card p-6 rounded-xl group hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex gap-5">
                {/* Avatar */}
                <div className="shrink-0 w-14 h-14 rounded-lg bg-secondary border border-border flex items-center justify-center">
                  <span className="text-primary text-sm font-semibold">
                    {member.initials}
                  </span>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-display font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-3">
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
