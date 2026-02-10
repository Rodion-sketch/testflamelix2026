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
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-5">
            {t("projects.subtitle")}
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-foreground mb-6">
            {t("projects.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("projects.description")}
          </p>
        </div>

        {/* Projects list — editorial style */}
        <div className="border-t border-border">
          {projects.map((project) => (
            <div
              key={project.client}
              className="grid grid-cols-12 gap-4 py-8 border-b border-border group hover:bg-card/60 transition-colors px-6 -mx-6 cursor-pointer"
            >
              <div className="col-span-12 md:col-span-3">
                <h3 className="text-xl font-display text-foreground group-hover:text-primary transition-colors">
                  {project.client}
                </h3>
              </div>
              <div className="col-span-4 md:col-span-2 flex items-center">
                <span className="text-sm text-muted-foreground font-mono">{project.period}</span>
              </div>
              <div className="col-span-7 md:col-span-6 flex items-center">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {language === "ru" ? project.descRu : project.descEn}
                </p>
              </div>
              <div className="col-span-1 flex items-center justify-end">
                <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-14 text-center">
          <p className="text-sm text-muted-foreground italic font-display">
            {t("projects.more")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
