import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    client: "MR Group",
    period: "2023-2025",
    descRu: "Customer Experience, трансформация IT: CRM, онлайн-покупка квартир, маркетплейс.",
    descEn: "Customer Experience, IT transformation: CRM, online apartment purchases, marketplace.",
  },
  {
    client: "ENKA Flexity",
    period: "2023-2025",
    descRu: "Создание бренда и реализация 3500 рабочих мест для международного девелопера.",
    descEn: "Brand creation and delivery of 3,500 workspaces for international developer.",
  },
  {
    client: "Yandex",
    period: "2025",
    descRu: "Исследование аудитории и коммуникационная стратегия для нового направления.",
    descEn: "Audience research and communication strategy for new division.",
  },
  {
    client: "Urban Escape",
    period: "2025",
    descRu: "Реализация комплекса вилл на Бали за 6 месяцев — полный цикл.",
    descEn: "Villa complex sales in Bali in 6 months — full cycle.",
  },
  {
    client: "Knight Frank",
    period: "2018-2019",
    descRu: "Удвоение продаж недвижимости за год. Построение digital-маркетинга.",
    descEn: "Doubled real estate sales in one year. Built digital marketing.",
  },
  {
    client: "Tranio",
    period: "2024",
    descRu: "Построение отдела маркетинга и управление лидогенерацией в 5 странах.",
    descEn: "Built marketing department and managed lead generation in 5 countries.",
  },
];

const ProjectsSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container-narrow relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            {t("projects.subtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            {t("projects.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("projects.description")}
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div
              key={project.client}
              className="glass-card p-6 rounded-xl group hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.client}
                  </h3>
                  <span className="text-xs text-primary font-medium">
                    {project.period}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {language === "ru" ? project.descRu : project.descEn}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom stat */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full">
            <span className="text-muted-foreground">
              {t("projects.more")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
