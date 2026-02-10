import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowUpRight } from "lucide-react";

const ProjectsSection = () => {
  const { t, language } = useLanguage();

  const featured = [
    {
      client: "MR Group",
      period: "2023–2025",
      badge: t("cases.mrgroup.badge"),
      desc: t("cases.mrgroup.desc"),
      metric: t("cases.mrgroup.metric"),
      wide: true,
    },
    {
      client: "Yandex",
      period: "2025",
      badge: t("cases.yandex.badge"),
      desc: t("cases.yandex.desc"),
      metric: t("cases.yandex.metric"),
      wide: false,
    },
    {
      client: "Knight Frank",
      period: "2018–2019",
      badge: t("cases.knight.badge"),
      desc: t("cases.knight.desc"),
      metric: t("cases.knight.metric"),
      wide: false,
    },
  ];

  const others = [
    { client: "ENKA Flexity", period: "2023–2025", descRu: "От бренда до 3 500 рабочих мест для международного девелопера.", descEn: "From brand to 3,500 workspaces for international developer." },
    { client: "Urban Escape, Bali", period: "2025", descRu: "Продали виллы за 6 месяцев — полный цикл.", descEn: "Villa complex sales in 6 months — full cycle." },
    { client: "BREIG, Bali", period: "2025", descRu: "Ребрендинг крупнейшего девелопера Бали.", descEn: "Rebranding of Bali's largest developer." },
    { client: "Tranio", period: "2024", descRu: "Маркетинг и лидогенерация в 5 странах.", descEn: "Marketing and lead generation in 5 countries." },
    { client: "Smartis", period: "2020–2022", descRu: "Сквозная аналитика для ТОП-20 девелоперов.", descEn: "End-to-end analytics for TOP-20 developers." },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-5">
            {t("cases.subtitle")}
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-foreground mb-6">
            {t("cases.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("cases.description")}
          </p>
        </div>

        {/* Featured cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featured.map((item) => (
            <div
              key={item.client}
              className={`group border border-border rounded-2xl p-8 hover:bg-card/60 transition-colors cursor-pointer ${
                item.wide ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="inline-block text-[11px] uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                    {item.badge}
                  </span>
                  <h3 className="text-2xl font-display text-foreground group-hover:text-primary transition-colors">
                    {item.client}
                  </h3>
                </div>
                <ArrowUpRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{item.desc}</p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm font-mono text-muted-foreground">{item.period}</span>
                <span className="text-sm font-medium text-primary">{item.metric}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Other cases list */}
        <div className="border-t border-border">
          {others.map((project) => (
            <div
              key={project.client}
              className="grid grid-cols-12 gap-4 py-6 border-b border-border group hover:bg-card/40 transition-colors px-4 -mx-4 cursor-pointer"
            >
              <div className="col-span-12 md:col-span-3">
                <h4 className="text-base font-display text-foreground group-hover:text-primary transition-colors">
                  {project.client}
                </h4>
              </div>
              <div className="col-span-3 md:col-span-2 flex items-center">
                <span className="text-xs text-muted-foreground font-mono">{project.period}</span>
              </div>
              <div className="col-span-8 md:col-span-6 flex items-center">
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

        <div className="mt-14 text-center">
          <p className="text-sm text-muted-foreground italic font-display">
            {t("cases.more")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
