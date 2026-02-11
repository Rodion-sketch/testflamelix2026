import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowUpRight } from "lucide-react";
import caseMrGroup from "@/assets/case-mrgroup.jpg";

const ProjectsSection = () => {
  const { t, language } = useLanguage();

  const otherCases = [
    { client: "ENKA Flexity", period: "2023–2025", descRu: "От бренда до 3 500 рабочих мест для международного девелопера.", descEn: "From brand creation to delivering 3,500 workspaces." },
    { client: "Urban Escape, Bali", period: "2025", descRu: "Продали виллы за 6 месяцев — полный цикл.", descEn: "Sold a villa complex in 6 months — full cycle." },
    { client: "BREIG, Bali", period: "2025", descRu: "Ребрендинг крупнейшего девелопера Бали.", descEn: "Rebranded Bali's largest developer." },
    { client: "Tranio", period: "2024", descRu: "Маркетинг и лидогенерация в 5 странах.", descEn: "Marketing and lead generation across 5 countries." },
    { client: "Smartis", period: "2020–2022", descRu: "Сквозная аналитика для ТОП-20 девелоперов.", descEn: "End-to-end analytics for TOP-20 developers." },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-foreground mb-6">
            {t("cases.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("cases.description")}
          </p>
        </div>

        {/* Featured Case — MR Group */}
        <div className="grid md:grid-cols-2 rounded-2xl border border-border overflow-hidden mb-5 group cursor-pointer hover:border-primary/30 transition-colors">
          <div className="relative min-h-[280px] md:min-h-[340px] overflow-hidden bg-foreground/5">
            <img
              src={caseMrGroup}
              alt="MR Group — modern architecture"
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-85 transition-opacity duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
            <span className="absolute top-5 left-5 z-10 inline-block text-[11px] uppercase tracking-widest font-semibold text-muted-foreground bg-background/10 backdrop-blur-sm border border-border/30 px-3 py-1 rounded-lg">
              {t("cases.mrgroup.badge")}
            </span>
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
              2023 — 2025
            </span>
            <h3 className="text-2xl md:text-3xl font-display text-foreground mb-3 group-hover:text-primary transition-colors">
              MR Group
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {t("cases.mrgroup.desc")}
            </p>
            <div className="flex gap-8">
              <div>
                <strong className="block text-xl font-bold text-primary tracking-tight">CX</strong>
                <span className="text-[11px] text-muted-foreground uppercase tracking-wide font-medium">
                  {t("cases.mrgroup.kpi1")}
                </span>
              </div>
              <div>
                <strong className="block text-xl font-bold text-primary tracking-tight">Online</strong>
                <span className="text-[11px] text-muted-foreground uppercase tracking-wide font-medium">
                  {t("cases.mrgroup.kpi2")}
                </span>
              </div>
              <div>
                <strong className="block text-xl font-bold text-primary tracking-tight">App</strong>
                <span className="text-[11px] text-muted-foreground uppercase tracking-wide font-medium">
                  {t("cases.mrgroup.kpi3")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Case Duo — Yandex & Knight Frank */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {[
            {
              client: "Yandex",
              period: "2025",
              badge: t("cases.yandex.badge"),
              desc: t("cases.yandex.desc"),
            },
            {
              client: "Knight Frank",
              period: "2018–2019",
              badge: t("cases.knight.badge"),
              desc: t("cases.knight.desc"),
            },
          ].map((item) => (
            <div
              key={item.client}
              className="group border border-border rounded-2xl p-8 hover:bg-card/60 hover:border-primary/20 transition-all cursor-pointer flex flex-col gap-2"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="inline-block text-[11px] uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full font-semibold">
                  {item.badge}
                </span>
                <ArrowUpRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-xs font-semibold tracking-widest uppercase text-primary/70">
                {item.period}
              </span>
              <h3 className="text-xl md:text-2xl font-display text-foreground group-hover:text-primary transition-colors">
                {item.client}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Other cases list */}
        <div className="border border-border rounded-2xl overflow-hidden bg-card/30">
          {otherCases.map((project, idx) => (
            <div
              key={project.client}
              className={`grid grid-cols-12 gap-4 py-4 px-6 group hover:bg-card/60 transition-colors cursor-pointer ${
                idx < otherCases.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="col-span-12 md:col-span-3 flex items-center">
                <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
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
