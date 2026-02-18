import { Search, BarChart3, Zap, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollReveal from "@/components/ScrollReveal";

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
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display mb-6" style={{ color: "hsl(var(--dark-fg))" }}>
              {t("process.title")}
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "hsl(var(--dark-muted))" }}>
              {t("process.description")}
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-6 md:left-8 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom, hsl(var(--primary) / 0.4), hsl(var(--primary) / 0.05))" }}
          />

          <div className="space-y-2">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.1} direction="right">
                <div
                  className="relative grid grid-cols-12 gap-6 py-8 md:py-10 group cursor-default rounded-2xl hover:bg-[hsl(var(--dark-card)/0.5)] transition-all duration-300 px-4"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex col-span-1 items-start justify-center pt-1 relative z-10">
                    <div className="w-4 h-4 rounded-full bg-primary/20 border-2 border-primary/50 group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_16px_hsl(var(--primary)/0.4)] transition-all duration-300" />
                  </div>
                  <div className="col-span-1 md:hidden">
                    <span className="text-2xl font-display text-gradient font-medium">{step.num}</span>
                  </div>
                  <div className="col-span-9 md:col-span-9">
                    <span className="hidden md:inline text-xs font-mono text-primary/60 mb-1 block">/{step.num}</span>
                    <h3 className="text-xl md:text-2xl font-display mb-2" style={{ color: "hsl(var(--dark-fg))" }}>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--dark-muted))" }}>
                      {step.desc}
                    </p>
                  </div>
                  <div className="col-span-2 flex items-center justify-end">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] transition-all duration-300"
                      style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--primary) / 0.05))" }}
                    >
                      <step.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
