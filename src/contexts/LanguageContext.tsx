import { createContext, useContext, useState, ReactNode } from "react";

type Language = "ru" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ru: {
    // Header
    "nav.about": "О нас",
    "nav.services": "Услуги",
    "nav.team": "Команда",
    "nav.projects": "Проекты",
    "nav.contact": "Контакты",
    "nav.cta": "Связаться",

    // Hero
    "hero.subtitle": "Маркетинговая и IT-команда",
    "hero.title": "Помогаем девелоперам",
    "hero.titleAccent": "выполнять планы продаж",
    "hero.description": "Строим маркетинг, основанный на данных и AI. От анализа рынка до реализации стратегии — исследования, лидогенерация, CRM и сквозная аналитика.",
    "hero.cta1": "Обсудить проект",
    "hero.cta2": "Наши кейсы",
    "hero.stat1.value": "30+",
    "hero.stat1.label": "Проектов",
    "hero.stat2.value": "7+",
    "hero.stat2.label": "Лет опыта",
    "hero.stat3.value": "TOP 20",
    "hero.stat3.label": "Девелоперов РФ",

    // Services
    "services.subtitle": "Услуги",
    "services.title": "Что мы делаем",
    "services.description": "Формируем готовую команду, которая берёт на себя полное внедрение вашей маркетинговой системы.",
    "services.research.title": "Исследования",
    "services.research.desc": "Анализ рынка, глубинные интервью, аудит процессов, оценка потенциала рекламных каналов.",
    "services.cx.title": "Customer Experience",
    "services.cx.desc": "Человекоцентричный подход к продукту, стратегиям и IT-инфраструктуре.",
    "services.leads.title": "Лидогенерация",
    "services.leads.desc": "Масштабируемое привлечение через performance-рекламу и интеграции.",
    "services.materials.title": "Продающие материалы",
    "services.materials.desc": "Сайты, лендинги, презентации и рекламные креативы.",
    "services.analytics.title": "Сквозная аналитика",
    "services.analytics.desc": "От расходов на рекламу до закрытых сделок в CRM.",
    "services.partners.title": "Партнёрский маркетинг",
    "services.partners.desc": "Системы взаимодействия с агентствами недвижимости.",

    // Team
    "team.subtitle": "Команда",
    "team.title": "Эксперты с опытом",
    "team.description": "Профессионалы с многолетним опытом работы с ведущими девелоперами.",
    "team.member1.name": "Родион Ангаев",
    "team.member1.role": "Growth-стратегии",
    "team.member1.desc": "Маркетинг на основе данных, партнёрский маркетинг. Управляет KPI по привлечению лидов.",
    "team.member2.name": "Илья Волгин",
    "team.member2.role": "Customer Experience",
    "team.member2.desc": "Сайты-маркетплейсы, мобильные приложения. Руководитель департамента цифровизации MR Group.",
    "team.member3.name": "Александр Воробьёв",
    "team.member3.role": "Брендинг и дизайн",
    "team.member3.desc": "30+ проектов в недвижимости. Сайты, презентации и рекламные креативы.",
    "team.member4.name": "Андрей Соколов",
    "team.member4.role": "Аналитика",
    "team.member4.desc": "Системная аналитика, автоматизация маркетинга и продаж.",

    // Projects
    "projects.subtitle": "Проекты",
    "projects.title": "Наш опыт",
    "projects.description": "Более 30 проектов с ведущими девелоперами России и международными компаниями.",
    "projects.more": "И ещё более 30 проектов в сфере недвижимости",

    // Contact
    "contact.subtitle": "Контакты",
    "contact.title": "Готовы обсудить проект?",
    "contact.description": "Свяжитесь с нами, чтобы узнать, как мы можем помочь вашему бизнесу.",
    "contact.cta": "Оставить заявку",
    "contact.email": "Email",
    "contact.phone": "Телефон",
    "contact.office": "Офис",
    "contact.location": "Москва, Россия",

    // Footer
    "footer.rights": "Все права защищены",
  },
  en: {
    // Header
    "nav.about": "About",
    "nav.services": "Services",
    "nav.team": "Team",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.cta": "Get in touch",

    // Hero
    "hero.subtitle": "Marketing and IT Team",
    "hero.title": "Helping developers",
    "hero.titleAccent": "achieve sales targets",
    "hero.description": "Building data-driven and AI-powered marketing. From market analysis to strategy execution — research, lead generation, CRM and end-to-end analytics.",
    "hero.cta1": "Discuss project",
    "hero.cta2": "Our cases",
    "hero.stat1.value": "30+",
    "hero.stat1.label": "Projects",
    "hero.stat2.value": "7+",
    "hero.stat2.label": "Years of experience",
    "hero.stat3.value": "TOP 20",
    "hero.stat3.label": "Russian developers",

    // Services
    "services.subtitle": "Services",
    "services.title": "What we do",
    "services.description": "We form a ready-made team that takes full ownership of implementing your marketing system.",
    "services.research.title": "Research",
    "services.research.desc": "Market analysis, in-depth interviews, process audits, advertising channel assessment.",
    "services.cx.title": "Customer Experience",
    "services.cx.desc": "Human-centered approach to product, strategies and IT infrastructure.",
    "services.leads.title": "Lead Generation",
    "services.leads.desc": "Scalable acquisition through performance advertising and integrations.",
    "services.materials.title": "Sales Materials",
    "services.materials.desc": "Websites, landing pages, presentations and advertising creatives.",
    "services.analytics.title": "End-to-End Analytics",
    "services.analytics.desc": "From ad spend to closed deals in CRM.",
    "services.partners.title": "Partner Marketing",
    "services.partners.desc": "Building relationships with real estate agencies.",

    // Team
    "team.subtitle": "Team",
    "team.title": "Experienced Experts",
    "team.description": "Professionals with years of experience working with leading developers.",
    "team.member1.name": "Rodion Angaev",
    "team.member1.role": "Growth Strategies",
    "team.member1.desc": "Data-driven marketing, partner marketing. Manages lead generation KPIs.",
    "team.member2.name": "Ilya Volgin",
    "team.member2.role": "Customer Experience",
    "team.member2.desc": "Marketplace websites, mobile apps. Director of Digital Transformation at MR Group.",
    "team.member3.name": "Alexander Vorobyov",
    "team.member3.role": "Branding & Design",
    "team.member3.desc": "30+ real estate projects. Websites, presentations and advertising creatives.",
    "team.member4.name": "Andrey Sokolov",
    "team.member4.role": "Analytics",
    "team.member4.desc": "System analytics, marketing and sales automation.",

    // Projects
    "projects.subtitle": "Projects",
    "projects.title": "Our Experience",
    "projects.description": "Over 30 projects with leading Russian developers and international companies.",
    "projects.more": "And more than 30 projects in real estate",

    // Contact
    "contact.subtitle": "Contact",
    "contact.title": "Ready to discuss your project?",
    "contact.description": "Get in touch to learn how we can help your business.",
    "contact.cta": "Submit request",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.office": "Office",
    "contact.location": "Moscow, Russia",

    // Footer
    "footer.rights": "All rights reserved",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ru");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
