

# Исправляем ритм чередования цветов секций

## Проблема

Сейчас два тёмных блока идут подряд (CTA Band + Team), и два светлых подряд (Testimonials + FAQ). Это нарушает визуальный ритм и делает страницу "плоской" в этих местах.

## Решение

Поменять местами Team и Testimonials в порядке секций. Это даёт идеальное чередование:

| # | Секция | Фон |
|---|--------|-----|
| 1 | Hero | dark |
| 2 | TrustedBy | light (тонкий) |
| 3 | Services | light |
| 4 | Process | dark |
| 5 | Projects | light |
| 6 | CTA Band | dark |
| 7 | Testimonials | light |
| 8 | Team | dark |
| 9 | FAQ | light |
| 10 | Contact | dark |
| 11 | Footer | dark (продолжение Contact) |

Каждая тёмная секция окружена светлыми и наоборот — чистое чередование.

## Технические детали

Один файл: `src/pages/Index.tsx` — поменять порядок `<TestimonialsSection />` и `<TeamSection />`.

Было:
```
<CTABandSection />
<TeamSection />
<TestimonialsSection />
```

Станет:
```
<CTABandSection />
<TestimonialsSection />
<TeamSection />
```

Никаких других изменений не требуется — фоны секций уже корректно заданы (Team = section-dark, Testimonials = bg-background).
