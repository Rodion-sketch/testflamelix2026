import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-narrow section-padding pt-32 lg:pt-40 relative z-10">
        <div className="max-w-4xl">
          {/* Subtitle */}
          <p className="text-hero-muted text-sm md:text-base font-medium tracking-widest uppercase mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Маркетинговая и IT-команда
          </p>
          
          {/* Main heading */}
          <h1 className="text-hero text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Помогаем девелоперам выполнять планы продаж
          </h1>
          
          {/* Description */}
          <p className="text-hero-muted text-lg md:text-xl lg:text-2xl leading-relaxed mb-12 max-w-3xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Строим маркетинг, основанный на данных. От анализа рынка до реализации стратегии — исследования, лидогенерация, CRM и сквозная аналитика.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="xl">
              Обсудить проект
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Наши кейсы
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div>
              <p className="text-hero text-3xl md:text-4xl lg:text-5xl font-bold">30+</p>
              <p className="text-hero-muted text-sm md:text-base mt-2">Проектов в недвижимости</p>
            </div>
            <div>
              <p className="text-hero text-3xl md:text-4xl lg:text-5xl font-bold">7+</p>
              <p className="text-hero-muted text-sm md:text-base mt-2">Лет экспертизы</p>
            </div>
            <div>
              <p className="text-hero text-3xl md:text-4xl lg:text-5xl font-bold">TOP 20</p>
              <p className="text-hero-muted text-sm md:text-base mt-2">Застройщиков России</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
