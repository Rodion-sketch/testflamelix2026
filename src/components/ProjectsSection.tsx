import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { client: "MR Group", period: "2023-2025", descRu: "Customer Experience, трансформация IT: CRM, онлайн-покупка квартир, маркетплейс.", descEn: "Customer Experience, IT transformation: CRM, online apartment purchases, marketplace." },
  { client: "ENKA Flexity", period: "2023-2025", descRu: "Создание бренда и реализация 3500 рабочих мест для международного девелопера.", descEn: "Brand creation and delivery of 3,500 workspaces for international developer." },
  { client: "Yandex", period: "2025", descRu: "Исследование аудитории и коммуникационная стратегия для нового направления.", descEn: "Audience research and communication strategy for new division." },
  { client: "Urban Escape", period: "2025", descRu: "Реализация комплекса вилл на Бали за 6 месяцев — полный цикл.", descEn: "Villa complex sales in Bali in 6 months — full cycle." },
  { client: "Knight Frank", period: "2018-2019", descRu: "Удвоение продаж недвижимости за год. Построение digital-маркетинга.", descEn: "Doubled real estate sales in one year. Built digital marketing." },
  { client: "Tranio", period: "2024", descRu: "Построение отдела маркетинга и управление лидогенерацией в 5 странах.", descEn: "Built marketing department and managed lead generation in 5 countries." },
];

const ProjectsSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="projects" className="section-padding border-t border-border">
      <div className="container-narrow">
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
              {t("projects.subtitle")}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              {t("projects.title")}
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-lg text-muted-foreground max-w-md">
              {t("projects.description")}
            </p>
          </div>
        </div>

        {/* Projects list — Subduxion style rows */}
        <div className="border-t border-border">
          {projects.map((project) => (
            <div
              key={project.client}
              className="grid grid-cols-12 gap-4 py-8 border-b border-border group hover:bg-secondary/50 transition-colors px-4 -mx-4 cursor-pointer"
            >
              <div className="col-span-4 md:col-span-3">
                <h3 className="text-lg font-display font-bold text-foreground group-hover:text-muted-foreground transition-colors">
                  {project.client}
                </h3>
              </div>
              <div className="col-span-2 md:col-span-2">
                <span className="text-sm text-muted-foreground">{project.period}</span>
              </div>
              <div className="col-span-5 md:col-span-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {language === "ru" ? project.descRu : project.descEn}
                </p>
              </div>
              <div className="col-span-1 flex items-start justify-end">
                <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            {t("projects.more")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
