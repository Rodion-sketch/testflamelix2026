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
    "hero.description": "Клиентский опыт, цифровая трансформация, лидогенерация и аналитика — от стратегии до закрытых сделок.",
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
    "challenges.title": "Знакомые проблемы?",
    "challenges.1": "Маркетинговые бюджеты растут, а ROI не измеряется",
    "challenges.2": "Стратегия, креатив и аналитика живут в разных мирах",
    "challenges.3": "Планы продаж не выполняются — нет data-driven подхода",
    "challenges.4": "Технологии увеличивают затраты, а не выручку",

    // Services
    "services.subtitle": "Услуги",
    "services.title": "Что мы делаем",
    "services.description": "Готовая команда, которая берёт на себя маркетинг от стратегии до результата.",
    "services.research.title": "Исследования",
    "services.research.desc": "Анализ рынка, глубинные интервью, аудит процессов, оценка потенциала рекламных каналов.",
    "services.cx.title": "Customer Experience",
    "services.cx.desc": "Внедряем человекоцентричный подход — учимся слушать клиентов. Применяем к продукту, стратегиям, IT-инфраструктуре и командным процессам.",
    "services.leads.title": "Лидогенерация",
    "services.leads.desc": "Масштабируемое привлечение через performance-рекламу и интеграции.",
    "services.strategy.title": "Маркетинговая стратегия",
    "services.strategy.desc": "Разработка и реализация стратегий, увязанных с планами продаж и бизнес-целями.",
    "services.materials.title": "Продающие материалы",
    "services.materials.desc": "Сайты, лендинги, презентации и рекламные креативы.",
    "services.analytics.title": "Сквозная аналитика",
    "services.analytics.desc": "От расходов на рекламу до закрытых сделок в CRM.",
    "services.partners.title": "Партнёрский маркетинг",
    "services.partners.desc": "Выстраиваем системную работу с агентствами недвижимости: мотивация, обучение, контроль воронки.",

    // Process
    "process.subtitle": "Процесс",
    "process.title": "Как мы работаем",
    "process.description": "Четыре этапа, которые превращают ваши задачи в измеримые результаты.",
    "process.step1.title": "Исследование",
    "process.step1.desc": "Глубинные интервью с клиентами, аудит процессов, анализ рынка и конкурентов. Понимаем ваши цели, аудиторию и ключевые вызовы.",
    "process.step2.title": "Стратегия",
    "process.step2.desc": "Разрабатываем комплексную маркетинговую стратегию, увязанную с планами продаж. Определяем каналы, бюджеты и KPI.",
    "process.step3.title": "Реализация",
    "process.step3.desc": "Создание продающих материалов, запуск рекламных кампаний, внедрение CRM и сквозной аналитики. Берём на себя операционное управление.",
    "process.step4.title": "Оптимизация",
    "process.step4.desc": "Непрерывное отслеживание метрик от расхода до сделок в CRM. Улучшаем конверсии, масштабируем работающие каналы.",

    // Projects / Cases
    "cases.subtitle": "Проекты",
    "cases.title": "Наш опыт",
    "cases.description": "Более 30 проектов с ведущими девелоперами России и международными компаниями.",
    "cases.more": "И другие проекты в сфере недвижимости и не только",
    "cases.mrgroup.badge": "Customer Experience",
    "cases.mrgroup.desc": "Ведём CX-проекты по улучшению цифровой трансформации и качества сервиса для роста NPS. Помогаем внедрять онлайн-сделку с недвижимостью, сайт-маркетплейс и мобильное приложение.",
    "cases.mrgroup.kpi1": "и рост NPS",
    "cases.mrgroup.kpi2": "Онлайн-сделка",
    "cases.mrgroup.kpi3": "Разработка",
    "cases.yandex.badge": "SMM и исследования",
    "cases.yandex.desc": "Исследование аудитории и коммуникационная стратегия для нового направления Яндекса.",
    "cases.knight.badge": "Digital Marketing",
    "cases.knight.desc": "Удвоили продажи жилой, коммерческой и зарубежной недвижимости за год. Построили прибыльный digital-маркетинг.",

    // CTA Band
    "cta.title": "Готовы к системным результатам?",
    "cta.subtitle": "Обсудим ваш проект и подберём оптимальное решение.",
    "cta.btn": "Связаться",

    // Team
    "team.subtitle": "Команда",
    "team.title": "Эксперты с опытом",
    "team.description": "Каждый из нас работал на стороне клиента и знает бизнес изнутри.",
    "team.member1.name": "Родион Ангаев",
    "team.member1.role": "Growth-стратегии и Data-Driven маркетинг",
    "team.member1.desc": "Маркетинг на основе данных, партнёрский маркетинг, performance-реклама. Управляет KPI по привлечению и конверсии лидов.",
    "team.member2.name": "Илья Волгин",
    "team.member2.role": "Customer Experience и цифровая трансформация",
    "team.member2.desc": "Сайты-маркетплейсы, мобильные приложения, онлайн-сделки. Руководитель департамента цифровизации MR Group.",
    "team.member3.name": "Александр Воробьёв",
    "team.member3.role": "Брендинг, сайты и презентации",
    "team.member3.desc": "30+ проектов в недвижимости. Сайты, лендинги, презентации и рекламные креативы для девелоперов.",
    "team.member4.name": "Андрей Соколов",
    "team.member4.role": "Аналитика и автоматизация",
    "team.member4.desc": "Сквозная аналитика от рекламного бюджета до сделок в CRM. Автоматизация маркетинга и продаж.",

    // Testimonials
    "testimonials.subtitle": "Отзывы",
    "testimonials.title": "Что говорят клиенты",
    "testimonials.1.text1": "Ваш системный подход, аналитическая точность и способность выстраивать работающие стратегии сыграли ключевую роль в развитии Flexity. Благодаря вашей экспертизе мы получили современную маркетинговую инфраструктуру и результативные рекламные кампании.",
    "testimonials.1.text2": "",
    "testimonials.1.text3": "",
    "testimonials.1.name": "Сарпер Алтунйува",
    "testimonials.1.role": "Генеральный директор, Flexity",
    "testimonials.1.initials": "СА",

    // FAQ
    "faq.subtitle": "FAQ",
    "faq.title": "Частые вопросы",
    "faq.q1": "Почему Flamelix?",
    "faq.a1": "За 7+ лет и 30+ проектов мы выстроили глубокую экспертизу на стыке маркетинга, IT и аналитики. Вместо разрозненных подрядчиков — готовая команда, которая отвечает за результат от стратегии до реализации.",
    "faq.q2": "Чем вы отличаетесь от других агентств?",
    "faq.a2": "Мы работаем не как подрядчик, а как встроенная команда. Покрываем весь цикл: research, CX, стратегия, лидогенерация, CRM и аналитика. Погружаемся в бизнес-процессы и отвечаем за конверсии, а не за охваты.",
    "faq.q3": "С какими отраслями вы работаете?",
    "faq.a3": "Основной фокус — девелопмент и недвижимость: MR Group, Knight Frank, ENKA и другие. Работаем в 5 странах. Также помогаем tech-компаниям, hospitality и luxury-сегменту.",
    "faq.q4": "Нужна ли собственная маркетинговая команда?",
    "faq.a4": "Нет. Мы полностью закрываем функцию маркетинга — от стратегии до операционного управления. При необходимости помогаем нанять и обучить внутреннюю команду.",
    "faq.q5": "Как вы измеряете успех?",
    "faq.a5": "Через сквозную аналитику: отслеживаем весь путь от рекламного бюджета до закрытых сделок в CRM. Отчитываемся по конкретным KPI, привязанным к плану продаж.",

    // Contact
    "contact.subtitle": "Контакты",
    "contact.title": "Обсудим ваш проект",
    "contact.description": "Расскажите о проекте, и мы предложим оптимальное решение для выполнения планов продаж.",
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
    "footer.desc": "Помогаем девелоперам выполнять планы продаж. Стратегия, маркетинг, технологии и клиентский опыт.",
    "footer.rights": "Все права защищены",
    "footer.copy": "© 2026 Flamelix. Все права защищены.",
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
    "hero.title": "Helping real estate developers",
    "hero.titleAccent": "hit sales targets",
    "hero.description": "Customer experience, digital transformation, lead generation & analytics — from strategy to closed deals.",
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
    "challenges.title": "Sound familiar?",
    "challenges.1": "Marketing budgets grow, but ROI stays unmeasured",
    "challenges.2": "Strategy, creative and analytics live in different silos",
    "challenges.3": "Sales targets missed — no data-driven approach in place",
    "challenges.4": "Technology increases costs, not revenue",

    // Services
    "services.subtitle": "Services",
    "services.title": "What we do",
    "services.description": "A ready-made team that owns your marketing from strategy to results.",
    "services.research.title": "Research",
    "services.research.desc": "Market analysis, in-depth interviews, process audits, advertising channel assessment.",
    "services.cx.title": "Customer Experience",
    "services.cx.desc": "We implement a human-centered approach — learning to listen to customers. Applied to product development, strategies, IT infrastructure, and team processes.",
    "services.leads.title": "Lead Generation",
    "services.leads.desc": "Scalable acquisition through performance advertising and integrations.",
    "services.strategy.title": "Marketing Strategy",
    "services.strategy.desc": "Development and execution of strategies aligned with sales plans and business objectives.",
    "services.materials.title": "Sales Materials",
    "services.materials.desc": "Websites, landing pages, presentations and advertising creatives.",
    "services.analytics.title": "End-to-End Analytics",
    "services.analytics.desc": "From ad spend to closed deals in CRM.",
    "services.partners.title": "Partner Marketing",
    "services.partners.desc": "Systematic work with real estate agencies: motivation, training, funnel control.",

    // Process
    "process.subtitle": "Process",
    "process.title": "How we work",
    "process.description": "Four stages that turn your objectives into measurable results.",
    "process.step1.title": "Discover",
    "process.step1.desc": "In-depth customer interviews, process audits, market and competitor analysis. Understanding your goals, audience and key challenges.",
    "process.step2.title": "Strategize",
    "process.step2.desc": "Comprehensive marketing strategy aligned with sales plans. Defining channels, budgets and KPIs.",
    "process.step3.title": "Execute",
    "process.step3.desc": "Creating sales materials, launching ad campaigns, implementing CRM and end-to-end analytics. Taking over operational management.",
    "process.step4.title": "Optimize",
    "process.step4.desc": "Continuous tracking from ad spend to deals in CRM. Improving conversions, scaling high-performing channels.",

    // Projects / Cases
    "cases.subtitle": "Projects",
    "cases.title": "Case Studies",
    "cases.description": "30+ projects with leading Russian and international real estate companies.",
    "cases.more": "And more projects across real estate and beyond",
    "cases.mrgroup.badge": "Customer Experience",
    "cases.mrgroup.desc": "Leading Customer Experience initiatives to improve digital transformation and service quality, driving NPS growth. Helping implement online real estate transactions, marketplace website, and mobile app.",
    "cases.mrgroup.kpi1": "& NPS Growth",
    "cases.mrgroup.kpi2": "Transactions",
    "cases.mrgroup.kpi3": "Development",
    "cases.yandex.badge": "SMM & Research",
    "cases.yandex.desc": "Audience research and social media communication strategy for Yandex's new division.",
    "cases.knight.badge": "Digital Marketing",
    "cases.knight.desc": "Doubled sales of residential, commercial, and international real estate in one year. Built profitable digital marketing.",

    // CTA Band
    "cta.title": "Ready for systematic results?",
    "cta.subtitle": "Let's discuss your project and find the best solution.",
    "cta.btn": "Get in touch",

    // Team
    "team.subtitle": "Team",
    "team.title": "Experienced Experts",
    "team.description": "Each of us has worked client-side and knows the business from within.",
    "team.member1.name": "Rodion Angaev",
    "team.member1.role": "Growth Strategies & Data-Driven Marketing",
    "team.member1.desc": "Data-driven marketing, partner marketing, performance advertising. Manages lead acquisition and conversion KPIs.",
    "team.member2.name": "Ilya Volgin",
    "team.member2.role": "Customer Experience & Digital Transformation",
    "team.member2.desc": "Marketplace websites, mobile apps, online transactions. Director of Digital Transformation at MR Group.",
    "team.member3.name": "Alexander Vorobyov",
    "team.member3.role": "Branding, Websites & Presentations",
    "team.member3.desc": "30+ real estate projects. Websites, landing pages, presentations and advertising creatives for developers.",
    "team.member4.name": "Andrey Sokolov",
    "team.member4.role": "Analytics & Automation",
    "team.member4.desc": "End-to-end analytics from ad budget to deals in CRM. Marketing and sales automation.",

    // Testimonials
    "testimonials.subtitle": "Testimonials",
    "testimonials.title": "What our clients say",
    "testimonials.1.text1": "Your systematic approach, analytical precision and ability to build effective strategies played a key role in Flexity's growth. Thanks to your expertise, we gained a modern marketing infrastructure and high-performing ad campaigns.",
    "testimonials.1.text2": "",
    "testimonials.1.text3": "",
    "testimonials.1.name": "Sarper Altunyuva",
    "testimonials.1.role": "CEO, Flexity",
    "testimonials.1.initials": "SA",

    // FAQ
    "faq.subtitle": "FAQ",
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "Why Flamelix?",
    "faq.a1": "Over 7+ years and 30+ projects we've built deep expertise at the intersection of marketing, IT and analytics. Instead of scattered contractors — a ready-made team responsible for results from strategy to execution.",
    "faq.q2": "How are you different from other agencies?",
    "faq.a2": "We work as an embedded team, not a contractor. We cover the full cycle: research, CX, strategy, lead generation, CRM and analytics. We dive into business processes and are accountable for conversions, not reach.",
    "faq.q3": "What industries do you work with?",
    "faq.a3": "Our main focus is development and real estate: MR Group, Knight Frank, ENKA and others. We operate in 5 countries. We also help tech companies, hospitality and luxury segment.",
    "faq.q4": "Do we need our own marketing team?",
    "faq.a4": "No. We fully cover the marketing function — from strategy to operational management. If needed, we help hire and train an internal team.",
    "faq.q5": "How do you measure success?",
    "faq.a5": "Through end-to-end analytics: we track the entire path from ad budget to closed deals in CRM. We report on specific KPIs tied to sales plans.",

    // Contact
    "contact.subtitle": "Contact",
    "contact.title": "Let's discuss your project",
    "contact.description": "Tell us about your project and we'll propose the optimal solution for achieving your sales targets.",
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
    "footer.desc": "Helping real estate developers hit sales targets. Strategy, marketing, technology and customer experience.",
    "footer.rights": "All rights reserved",
    "footer.copy": "© 2026 Flamelix. All rights reserved.",
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
