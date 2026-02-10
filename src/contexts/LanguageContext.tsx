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
    "hero.stat3.value": "5",
    "hero.stat3.label": "Стран",

    // Trusted By
    "trusted.label": "/ Нам доверяют",

    // Challenges
    "challenges.subtitle": "Вызовы",
    "challenges.title": "Мы понимаем вызовы, с которыми вы сталкиваетесь",
    "challenges.1": "Маркетинговые бюджеты без измеримого ROI",
    "challenges.2": "Разрозненные команды — стратегия, креатив и аналитика в отрыве",
    "challenges.3": "Невыполнение планов продаж из-за отсутствия data-driven подхода",
    "challenges.4": "Технологические инвестиции, увеличивающие затраты вместо роста",

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
    "services.strategy.title": "Маркетинговая стратегия",
    "services.strategy.desc": "Разработка и реализация стратегий, увязанных с планами продаж и бизнес-целями.",
    "services.materials.title": "Продающие материалы",
    "services.materials.desc": "Сайты, лендинги, презентации и рекламные креативы.",
    "services.analytics.title": "Сквозная аналитика",
    "services.analytics.desc": "От расходов на рекламу до закрытых сделок в CRM.",
    "services.partners.title": "Партнёрский маркетинг",
    "services.partners.desc": "Системы взаимодействия с агентствами недвижимости.",

    // Process
    "process.subtitle": "Процесс",
    "process.title": "Как мы работаем",
    "process.description": "Четыре этапа, которые превращают ваши задачи в измеримые результаты.",
    "process.step1.title": "Исследование",
    "process.step1.desc": "Понимание ваших целей, аудитории и ключевых вызовов рынка.",
    "process.step2.title": "Стратегия",
    "process.step2.desc": "Комплексная маркетинговая стратегия, увязанная с планами продаж.",
    "process.step3.title": "Реализация",
    "process.step3.desc": "Создание материалов, запуск рекламы, внедрение CRM и аналитики.",
    "process.step4.title": "Оптимизация",
    "process.step4.desc": "Отслеживание метрик, улучшение конверсий, масштабирование каналов.",

    // Projects / Cases
    "cases.subtitle": "Проекты",
    "cases.title": "Наш опыт",
    "cases.description": "Более 30 проектов с ведущими девелоперами России и международными компаниями.",
    "cases.more": "И ещё более 30 проектов в сфере недвижимости",
    "cases.mrgroup.badge": "Customer Experience & IT",
    "cases.mrgroup.desc": "CX-трансформация, CRM, онлайн-покупка квартир, маркетплейс.",
    "cases.mrgroup.metric": "CRM + App",
    "cases.yandex.badge": "SMM & Research",
    "cases.yandex.desc": "Исследование аудитории и коммуникационная стратегия для нового направления.",
    "cases.yandex.metric": "New Division",
    "cases.knight.badge": "Digital Marketing",
    "cases.knight.desc": "Удвоение продаж недвижимости за год. Построение digital-маркетинга.",
    "cases.knight.metric": "2× Sales",

    // CTA Band
    "cta.title": "Готовы к системному маркетингу?",
    "cta.subtitle": "Обсудим ваш проект и подберём оптимальное решение.",
    "cta.btn": "Связаться",

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

    // Testimonials
    "testimonials.subtitle": "Отзывы",
    "testimonials.title": "Что говорят клиенты",
    "testimonials.1.text1": "Ваш системный подход, аналитическая точность и способность выстраивать работающие стратегии сыграли важную роль в развитии Flexity.",
    "testimonials.1.text2": "Благодаря вашей экспертизе мы получили современную маркетинговую инфраструктуру, результативные рекламные кампании и оптимизированные процессы внутри отдела маркетинга.",
    "testimonials.1.text3": "Мы ценим вашу надёжность, самостоятельность и умение вести проекты полного цикла, обеспечивая стабильный и измеримый результат.",
    "testimonials.1.name": "Сарпер Алтунйува",
    "testimonials.1.role": "Генеральный директор, Flexity",
    "testimonials.1.initials": "СА",

    // FAQ
    "faq.subtitle": "FAQ",
    "faq.title": "Частые вопросы",
    "faq.q1": "Почему Flamelix?",
    "faq.a1": "Мы объединяем маркетинг, IT и аналитику в единую систему. Вместо разрозненных подрядчиков — готовая команда, которая отвечает за результат от стратегии до реализации.",
    "faq.q2": "Чем вы отличаетесь от других агентств?",
    "faq.a2": "Мы работаем не как подрядчик, а как встроенная команда. Погружаемся в бизнес-процессы, привязываем маркетинг к планам продаж и отвечаем за конверсии, а не за охваты.",
    "faq.q3": "С какими отраслями вы работаете?",
    "faq.a3": "Основной фокус — девелопмент и недвижимость. Также работаем с tech-компаниями, hospitality и luxury-сегментом.",
    "faq.q4": "Нужна ли собственная маркетинговая команда?",
    "faq.a4": "Нет. Мы полностью закрываем функцию маркетинга — от стратегии до операционного управления. При необходимости помогаем нанять и обучить внутреннюю команду.",
    "faq.q5": "Как вы измеряете успех?",
    "faq.a5": "Через сквозную аналитику: от рекламного бюджета до закрытых сделок в CRM. Отчитываемся по конкретным KPI, привязанным к плану продаж.",

    // Contact
    "contact.subtitle": "Контакты",
    "contact.title": "Давайте построим вашу маркетинговую систему",
    "contact.description": "Свяжитесь с нами, чтобы обсудить ваш проект и подобрать оптимальное решение.",
    "contact.email": "Email",
    "contact.whatsapp": "WhatsApp",
    "contact.telegram": "Telegram",
    "contact.form.name": "Имя",
    "contact.form.name.ph": "Ваше имя",
    "contact.form.email": "Email",
    "contact.form.email.ph": "email@example.com",
    "contact.form.project": "О проекте",
    "contact.form.project.ph": "Расскажите о вашем проекте...",
    "contact.form.submit": "Отправить заявку",
    "contact.form.sent": "Отправлено!",

    // Footer
    "footer.desc": "Маркетинговая и IT-команда для девелоперов. Стратегия, лидогенерация, CRM и сквозная аналитика.",
    "footer.rights": "Все права защищены",
    "footer.copy": "© 2025 Flamelix. Все права защищены.",
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
    "hero.stat3.value": "5",
    "hero.stat3.label": "Countries",

    // Trusted By
    "trusted.label": "/ Trusted by",

    // Challenges
    "challenges.subtitle": "Challenges",
    "challenges.title": "We understand the challenges you face",
    "challenges.1": "Marketing budgets without measurable ROI",
    "challenges.2": "Disconnected teams — strategy, creative and analytics working in silos",
    "challenges.3": "Missed sales targets due to lack of data-driven approach",
    "challenges.4": "Tech investments that increase costs instead of growth",

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
    "services.strategy.title": "Marketing Strategy",
    "services.strategy.desc": "Development and execution of strategies aligned with sales plans and business objectives.",
    "services.materials.title": "Sales Materials",
    "services.materials.desc": "Websites, landing pages, presentations and advertising creatives.",
    "services.analytics.title": "End-to-End Analytics",
    "services.analytics.desc": "From ad spend to closed deals in CRM.",
    "services.partners.title": "Partner Marketing",
    "services.partners.desc": "Building relationships with real estate agencies.",

    // Process
    "process.subtitle": "Process",
    "process.title": "How we work",
    "process.description": "Four stages that turn your objectives into measurable results.",
    "process.step1.title": "Discover",
    "process.step1.desc": "Understanding your goals, audience and key market challenges.",
    "process.step2.title": "Strategize",
    "process.step2.desc": "Comprehensive marketing strategy aligned with sales plans.",
    "process.step3.title": "Execute",
    "process.step3.desc": "Creating materials, launching ads, implementing CRM and analytics.",
    "process.step4.title": "Optimize",
    "process.step4.desc": "Tracking metrics, improving conversions, scaling channels.",

    // Projects / Cases
    "cases.subtitle": "Projects",
    "cases.title": "Our Experience",
    "cases.description": "Over 30 projects with leading Russian developers and international companies.",
    "cases.more": "And more than 30 projects in real estate",
    "cases.mrgroup.badge": "Customer Experience & IT",
    "cases.mrgroup.desc": "CX transformation, CRM, online apartment purchases, marketplace.",
    "cases.mrgroup.metric": "CRM + App",
    "cases.yandex.badge": "SMM & Research",
    "cases.yandex.desc": "Audience research and communication strategy for new division.",
    "cases.yandex.metric": "New Division",
    "cases.knight.badge": "Digital Marketing",
    "cases.knight.desc": "Doubled real estate sales in one year. Built digital marketing.",
    "cases.knight.metric": "2× Sales",

    // CTA Band
    "cta.title": "Ready for systematic marketing?",
    "cta.subtitle": "Let's discuss your project and find the best solution.",
    "cta.btn": "Get in touch",

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

    // Testimonials
    "testimonials.subtitle": "Testimonials",
    "testimonials.title": "What our clients say",
    "testimonials.1.text1": "Your systematic approach, analytical precision and ability to build effective strategies played an important role in Flexity's growth.",
    "testimonials.1.text2": "Thanks to your expertise, we gained a modern marketing infrastructure, high-performing ad campaigns and optimized processes within our marketing department.",
    "testimonials.1.text3": "We value your reliability, independence and ability to manage full-cycle projects, delivering stable and measurable results.",
    "testimonials.1.name": "Sarper Altunyuva",
    "testimonials.1.role": "CEO, Flexity",
    "testimonials.1.initials": "SA",

    // FAQ
    "faq.subtitle": "FAQ",
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "Why Flamelix?",
    "faq.a1": "We combine marketing, IT and analytics into a single system. Instead of scattered contractors — a ready-made team responsible for results from strategy to execution.",
    "faq.q2": "How are you different from other agencies?",
    "faq.a2": "We work as an embedded team, not a contractor. We dive into business processes, tie marketing to sales plans and are accountable for conversions, not reach.",
    "faq.q3": "What industries do you work with?",
    "faq.a3": "Our main focus is development and real estate. We also work with tech companies, hospitality and luxury segment.",
    "faq.q4": "Do we need our own marketing team?",
    "faq.a4": "No. We fully cover the marketing function — from strategy to operational management. If needed, we help hire and train an internal team.",
    "faq.q5": "How do you measure success?",
    "faq.a5": "Through end-to-end analytics: from ad budget to closed deals in CRM. We report on specific KPIs tied to sales plans.",

    // Contact
    "contact.subtitle": "Contact",
    "contact.title": "Let's build your marketing system",
    "contact.description": "Get in touch to discuss your project and find the optimal solution.",
    "contact.email": "Email",
    "contact.whatsapp": "WhatsApp",
    "contact.telegram": "Telegram",
    "contact.form.name": "Name",
    "contact.form.name.ph": "Your name",
    "contact.form.email": "Email",
    "contact.form.email.ph": "email@example.com",
    "contact.form.project": "About the project",
    "contact.form.project.ph": "Tell us about your project...",
    "contact.form.submit": "Submit request",
    "contact.form.sent": "Sent!",

    // Footer
    "footer.desc": "Marketing and IT team for developers. Strategy, lead generation, CRM and end-to-end analytics.",
    "footer.rights": "All rights reserved",
    "footer.copy": "© 2025 Flamelix. All rights reserved.",
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
