
# Интеграция лучших идей из Cursor-версии — полный план

## Что берем из Cursor-версии

### 1. Trusted By — бегущая строка клиентов (Marquee)
Анимированная лента с именами: MR Group, Yandex, Knight Frank, ENKA Flexity, Tranio, Smartis, Urban Escape, BREIG. CSS-анимация `translateX(-50%)` с дублированием элементов для бесшовного цикла. Точки-разделители между именами. Лейбл "/ НАМ ДОВЕРЯЮТ" слева.

### 2. Challenges — секция проблем клиента (2x2 сетка)
Четыре болевые точки с иконками "+":
- Маркетинговые бюджеты без измеримого ROI
- Разрозненные команды (стратегия, креатив, аналитика в отрыве)
- Невыполнение планов продаж из-за отсутствия data-driven подхода
- Технологические инвестиции, увеличивающие затраты вместо роста

Вступительный текст сверху: "Мы понимаем вызовы, с которыми вы сталкиваетесь."

### 3. Доработка Services — добавление "Маркетинговая стратегия"
В Cursor-версии есть 7 услуг (у нас 6). Добавляем "Маркетинговая стратегия" — разработка и реализация стратегий, увязанных с планами продаж. Сетка 3x2 + 1 акцентная карточка на всю ширину (Партнёрский маркетинг).

### 4. Process — как мы работаем (/01 /02 /03 /04)
Четыре нумерованных шага с иконками в кругах:
- /01 Исследование (Discover) — понимание целей, аудитории, вызовов
- /02 Стратегия (Strategize) — комплексная маркетинговая стратегия
- /03 Реализация (Execute) — создание материалов, запуск рекламы, CRM
- /04 Оптимизация (Optimize) — отслеживание, улучшение, масштабирование

Grid-раскладка: номер | текст | иконка в круге. Ховер-эффект: сдвиг строки вправо, увеличение иконки.

### 5. Projects — карточки с метриками + список
Переделка из простого списка в два формата:

**Featured-карточки (сетка 2 колонки):**
- MR Group (на всю ширину) — CX, CRM, App с бейджем "Customer Experience & IT", 2023-2025
- Yandex — SMM и исследования, бейдж "SMM & Research", 2025
- Knight Frank — 2x рост продаж, бейдж "Digital Marketing", 2018-2019

**Список остальных кейсов (таблица):**
- ENKA Flexity — от бренда до 3500 рабочих мест, 2023-2025
- Urban Escape, Bali — продали виллы за 6 месяцев, 2025
- BREIG, Bali — ребрендинг крупнейшего девелопера Бали, 2025
- Tranio — маркетинг и лидогенерация в 5 странах, 2024
- Smartis — сквозная аналитика для ТОП-20 девелоперов, 2020-2022

### 6. CTA Band — промежуточный призыв к действию
Горизонтальный блок с карточкой внутри: слева заголовок + подзаголовок, справа кнопка "Связаться". Фоновый радиальный градиент от primary. Располагается между Projects и Team.

### 7. FAQ — аккордеон с 5 вопросами
5 вопросов-ответов на Radix UI Accordion:
- Почему Flamelix?
- Чем отличаемся от других агентств?
- С какими отраслями работаем?
- Нужна ли собственная маркетинговая команда?
- Как измеряем успех?

Стиль: border-bottom разделители, chevron-иконка поворачивается на 180 градусов при открытии.

### 8. Contact — двухколоночный layout с формой
Слева: заголовок "Давайте построим вашу маркетинговую систему", описание, контакты (email info@flamelix.com, WhatsApp +7 903 231-76-93, Telegram @rodionbat).

Справа: форма с полями:
- Имя + Email (в одну строку)
- О проекте (textarea)
- Кнопка "Отправить заявку"

Визуальный фидбек: кнопка зеленеет на 3 секунды после отправки с текстом "Отправлено".

### 9. Footer — расширенный
Три колонки: логотип + описание | навигационные ссылки | соцсети (WhatsApp, Telegram). Нижняя строка с копирайтом.

### 10. Анимации при скролле (data-aos)
Intersection Observer для появления секций при скролле (opacity 0 -> 1, translateY 24px -> 0). Fallback: все элементы становятся видимыми через 4 секунды.

### 11. Анимированные счётчики метрик
Числа в Hero (30+, 7+, 5) анимируются при появлении в viewport: отсчёт от 0 до целевого значения за 2 секунды с ease-out.

---

## Что НЕ берем из Cursor

- Темная тема (#050505) — оставляем наш теплый cream Claude-стиль
- Синий акцент (#2563eb) — оставляем терракотовый (`--primary`)
- Жирные шрифты 800/900 — оставляем элегантный Newsreader serif
- Gradient text — не вписывается в теплую палитру
- Синие градиенты на карточках кейсов — заменяем на теплые тона

---

## Новый порядок секций

```text
Header
Hero (+ анимированные счётчики)
Trusted By       (новый — marquee)
Challenges       (новый — 2x2 сетка проблем)
Services         (+ Marketing Strategy, акцентная карточка)
Process          (новый — 4 шага /01-/04)
Projects         (переделка — featured карточки + список)
CTA Band         (новый — промежуточный CTA)
Team             (без изменений)
FAQ              (новый — аккордеон 5 вопросов)
Contact          (переделка — форма + контакты)
Footer           (переделка — 3 колонки + соцсети)
```

---

## Технические детали

### Новые файлы (5 компонентов)
- `src/components/TrustedBySection.tsx` — marquee на CSS keyframes `translateX(-50%)`, дублирование массива для бесшовного цикла, лейбл "/ TRUSTED BY"
- `src/components/ChallengesSection.tsx` — вступительный текст + сетка 2x2 с иконками Plus из lucide-react
- `src/components/ProcessSection.tsx` — шаги /01-/04 с grid-раскладкой (номер | текст | иконка), ховер-эффекты, иконки Search, BarChart, Zap, Wallet из lucide-react
- `src/components/CTABandSection.tsx` — flex: заголовок + кнопка, section-dark фон, ссылка на #contact
- `src/components/FAQSection.tsx` — Radix UI Accordion (уже установлен), 5 пунктов, chevron-анимация

### Изменения в существующих файлах

**`src/pages/Index.tsx`** — импорт и расстановка 5 новых секций в нужном порядке

**`src/components/ProjectsSection.tsx`** — полная переделка:
- Массив featured-кейсов (MR Group, Yandex, Knight Frank) с бейджами, описаниями, метриками
- Массив остальных кейсов (ENKA, Urban Escape, BREIG, Tranio, Smartis) в виде списка
- Featured-карточка MR Group на всю ширину (grid-column: 1 / -1)

**`src/components/ContactSection.tsx`** — полная переделка:
- Двухколоночный grid (1fr 1.2fr)
- Левая колонка: заголовок, описание, контакты (email, WhatsApp, Telegram) с иконками
- Правая колонка: форма (name + email в одну строку, textarea, кнопка submit)
- Обработка submit: визуальный фидбек "Отправлено" на 3 секунды

**`src/components/ServicesSection.tsx`** — добавить 7-ю услугу "Маркетинговая стратегия", акцентная карточка для "Партнёрский маркетинг" (полная ширина)

**`src/components/Footer.tsx`** — переделка в 3 колонки:
- Логотип + описание
- Навигация (Services, Experience, Team, Contact)
- Соцсети (WhatsApp, Telegram) — круглые кнопки с иконками

**`src/components/HeroSection.tsx`** — добавить анимированные счётчики (useEffect + IntersectionObserver + requestAnimationFrame), метрика "5 стран" вместо "TOP 20"

**`src/contexts/LanguageContext.tsx`** — добавить ~80 новых ключей переводов:
- Trusted By (trusted_label)
- Challenges (challenges_intro, ch1-ch4)
- Process (process_label, process_title, process_desc, step1-4_title, step1-4_desc)
- Cases (cases_label, cases_title, c1-c3_badge/desc/metrics, cl1-cl5_desc)
- CTA Band (cta_title, cta_subtitle, cta_btn)
- FAQ (faq_title, faq1-5_q, faq1-5_a)
- Contact form (form_name, form_name_ph, form_project, form_project_ph, form_submit, form_sent)
- Footer (footer_desc, footer_copy)

**`src/index.css`** — добавить:
- CSS keyframes `marqueeScroll` для бегущей строки
- CSS для marquee-масок (linear-gradient fade на краях)
- Утилиты для scroll-анимаций `[data-aos]`

### Зависимости
Новых зависимостей не требуется. Radix Accordion и lucide-react уже установлены.
