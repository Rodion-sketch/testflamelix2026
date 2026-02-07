const projects = [
  {
    client: "MR Group",
    period: "2023-2025",
    description: "Управление проектами Customer Experience, изменения для роста конверсий. Трансформация IT инфраструктуры: CRM, электронный документооборот, онлайн-покупка квартир.",
  },
  {
    client: "ENKA Flexity",
    period: "2023-2025",
    description: "Для международного девелопера Enka прошли путь от создания бренда гибких сервисных офисов до реализации 3500 рабочих мест.",
  },
  {
    client: "Яндекс",
    period: "2025",
    description: "Исследование аудитории и коммуникационная стратегия для соцсетей нового направления Яндекса.",
  },
  {
    client: "Urban Escape, Бали",
    period: "2025",
    description: "Реализация комплекса вилл на Бали за 6 месяцев — полный цикл от стратегии до продаж.",
  },
  {
    client: "Knight Frank",
    period: "2018-2019",
    description: "Удвоили продажи жилой, коммерческой и международной недвижимости за год. Построили прибыльный digital-маркетинг.",
  },
  {
    client: "Tranio",
    period: "2024",
    description: "Построили отдел маркетинга и управляли лидогенерацией в 5 странах.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-primary">
      <div className="container-narrow">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-hero-muted mb-4">
            Проекты
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hero mb-6">
            Наш опыт
          </h2>
          <p className="text-lg text-hero-muted max-w-2xl">
            Более 30 успешных проектов с ведущими девелоперами России и международными компаниями.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.client}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-hero">
                  {project.client}
                </h3>
                <span className="text-sm text-hero-muted shrink-0 ml-4">
                  {project.period}
                </span>
              </div>
              <p className="text-hero-muted leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom stat */}
        <div className="mt-16 pt-12 border-t border-white/10 text-center">
          <p className="text-hero-muted text-lg">
            И ещё более <span className="text-hero font-bold">30 проектов</span> в сфере недвижимости
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
