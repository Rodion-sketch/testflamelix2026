import { Search, BarChart3, Zap, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProcessSection = () => {
  const { t } = useLanguage();

  const steps = [
    { num: "01", title: t("process.step1.title"), desc: t("process.step1.desc"), icon: Search },
    { num: "02", title: t("process.step2.title"), desc: t("process.step2.desc"), icon: BarChart3 },
    { num: "03", title: t("process.step3.title"), desc: t("process.step3.desc"), icon: Zap },
    { num: "04", title: t("process.step4.title"), desc: t("process.step4.desc"), icon: TrendingUp },
  ];

  return (
    <section id="process" className="section-padding section-dark">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-5">
            {t("process.subtitle")}
          </p>
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-display mb-6"
            style={{ color: "hsl(var(--dark-fg))" }}
          >
            {t("process.title")}
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "hsl(var(--dark-muted))" }}>
            {t("process.description")}
          </p>
        </div>

        <div className="border-t" style={{ borderColor: "hsl(var(--dark-border))" }}>
          {steps.map((step) => (
            <div
              key={step.num}
              className="grid grid-cols-12 gap-6 py-10 border-b group hover:translate-x-2 transition-transform duration-300 cursor-default"
              style={{ borderColor: "hsl(var(--dark-border))" }}
            >
              <div className="col-span-2 md:col-span-1">
                <span className="text-sm font-mono text-primary">/{step.num}</span>
              </div>
              <div className="col-span-8 md:col-span-9">
                <h3
                  className="text-xl md:text-2xl font-display mb-2"
                  style={{ color: "hsl(var(--dark-fg))" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--dark-muted))" }}>
                  {step.desc}
                </p>
              </div>
              <div className="col-span-2 flex items-center justify-end">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: "hsl(var(--primary) / 0.1)" }}
                >
                  <step.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
