const team = [
  {
    name: "Родион Ангаев",
    role: "Growth-стратегии",
    description: "Маркетинг на основе данных, партнёрский маркетинг. Выстраивает маркетинговую систему и управляет KPI по привлечению лидов.",
    initials: "РА",
  },
  {
    name: "Илья Волгин",
    role: "Customer Experience",
    description: "Сайты-маркетплейсы, мобильные приложения, онлайн-продажи недвижимости. Руководитель департамента цифровизации MR Group.",
    initials: "ИВ",
  },
  {
    name: "Александр Воробьёв",
    role: "Брендинг и дизайн",
    description: "Более 30 проектов в недвижимости. Создаёт продающие материалы: сайты, презентации и рекламные креативы.",
    initials: "АВ",
  },
  {
    name: "Андрей Соколов",
    role: "Аналитика",
    description: "Системная и сквозная аналитика, автоматизация маркетинга и продаж. Выстраивает отчётность от вложений до закрытых сделок.",
    initials: "АС",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Команда
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Эксперты с опытом
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Команда профессионалов с многолетним опытом работы с ведущими девелоперами России и международных рынков.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="flex gap-6 p-6 rounded-lg border border-border hover:border-primary/20 transition-colors group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Avatar placeholder */}
              <div className="shrink-0 w-20 h-20 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-xl font-bold">
                  {member.initials}
                </span>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-accent mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
