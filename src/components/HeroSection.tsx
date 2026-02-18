import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef, useState } from "react";
import heroImage from "@/assets/hero-warm.jpg";

const useAnimatedCounter = (target: number, duration = 2000) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const animate = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { value, ref };
};

const useParallax = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.3);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return offset;
};

const HeroSection = () => {
  const { t } = useLanguage();
  const counter1 = useAnimatedCounter(30);
  const counter2 = useAnimatedCounter(7);
  const counter3 = useAnimatedCounter(5);
  const parallaxOffset = useParallax();

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden section-dark">
      {/* Parallax background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-[120%] object-cover opacity-35"
          style={{ transform: `translateY(-${parallaxOffset}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--dark-bg))] via-[hsl(var(--dark-bg)/0.6)] to-[hsl(var(--dark-bg)/0.3)]" />
      </div>

      {/* Floating decorative orbs */}
      <div className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-primary/10 blur-[80px] animate-orbit pointer-events-none" />
      <div className="absolute bottom-1/3 left-[10%] w-48 h-48 rounded-full bg-primary/8 blur-[60px] animate-orbit-reverse pointer-events-none" />
      <div className="absolute top-1/2 right-[40%] w-32 h-32 rounded-full bg-primary/5 blur-[50px] animate-orbit pointer-events-none" style={{ animationDelay: "3s" }} />

      <div className="container-narrow section-padding pt-40 lg:pt-48 pb-16 lg:pb-24 relative z-10">
        <h1
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-display leading-[1.05] mb-10 animate-fade-in-up max-w-4xl"
          style={{ animationDelay: "0.1s" }}
        >
          {t("hero.title")}
          <br />
          <em className="text-primary font-light">{t("hero.titleAccent")}</em>
        </h1>

        <p
          className="text-lg md:text-xl leading-relaxed mb-14 max-w-xl animate-fade-in-up"
          style={{ animationDelay: "0.2s", color: "hsl(var(--dark-muted))" }}
        >
          {t("hero.description")}
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 mb-24 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium hover:opacity-90 transition-all rounded-xl group hover-glow"
          >
            {t("hero.cta1")}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border border-[hsl(var(--dark-border))] px-8 py-4 text-sm font-medium hover:border-primary/60 hover:bg-[hsl(var(--dark-card))] transition-all rounded-xl glass-card-dark"
            style={{ color: "hsl(var(--dark-fg))" }}
          >
            {t("hero.cta2")}
          </a>
        </div>

        <div
          className="grid grid-cols-3 pt-10 border-t animate-fade-in-up"
          style={{ animationDelay: "0.4s", borderColor: "hsl(var(--dark-border))" }}
        >
          {[
            { ref: counter1.ref, value: `${counter1.value}+`, label: t("hero.stat1.label") },
            { ref: counter2.ref, value: `${counter2.value}+`, label: t("hero.stat2.label") },
            { ref: counter3.ref, value: `${counter3.value}`, label: t("hero.stat3.label") },
          ].map((stat) => (
            <div key={stat.label} ref={stat.ref}>
              <p className="text-3xl md:text-4xl font-display text-primary">{stat.value}</p>
              <p className="text-sm mt-2" style={{ color: "hsl(var(--dark-muted))" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
