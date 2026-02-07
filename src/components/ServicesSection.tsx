import { Search, Users, Target, BarChart3, Palette, Handshake } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Исследования",
    description: "Анализ рынка, глубинные интервью с клиентами, аудит внутренних процессов, оценка потенциала рекламных каналов.",
  },
  {
    icon: Users,
    title: "Customer Experience",
    description: "Внедряем человекоцентричный подход — учимся слушать клиентов. Применяем к продукту, стратегиям и IT-инфраструктуре.",
  },
  {
    icon: Target,
    title: "Лидогенерация",
    description: "Масштабируемое привлечение клиентов через performance-рекламу и интеграцию с онлайн и офлайн мероприятиями.",
  },
  {
    icon: Palette,
    title: "Продающие материалы",
    description: "Создаём сайты, лендинги, презентации, креативы и рекламные материалы для недвижимости.",
  },
  {
    icon: BarChart3,
    title: "Сквозная аналитика",
    description: "Отслеживаем путь от расходов на рекламу до лидов, этапов воронки и закрытых сделок в CRM.",
  },
  {
    icon: Handshake,
    title: "Партнёрский маркетинг",
    description: "Выстраиваем отношения с агентствами недвижимости: системы взаимодействия, материалы и обучение.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container-narrow">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Услуги
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Что мы делаем
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Формируем готовую команду, которая берёт на себя полное внедрение вашей маркетинговой системы.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-background p-8 rounded-lg border border-border hover:shadow-lg transition-shadow duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
