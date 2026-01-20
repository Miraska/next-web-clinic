# WebClinic Solutions

Корпоративный сайт IT-компании, специализирующейся на веб-разработке и автоматизации бизнеса.

## Технологии

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion, Canvas API

## Структура проекта

```
├── app/                    # Next.js App Router
│   ├── page.tsx           # Главная страница
│   ├── services/          # Страница услуг
│   ├── about/             # О компании
│   └── contact/           # Контакты
├── components/
│   ├── home/              # Компоненты главной страницы
│   │   ├── HomeHeroSection.tsx
│   │   ├── HomeWhatWeDoSection.tsx
│   │   ├── HomeHowWeWorkSection.tsx
│   │   ├── HomeTechnologiesSection.tsx
│   │   └── HomeFAQSection.tsx
│   ├── services/          # Компонент страницы услуг
│   ├── about/             # Компонент страницы о нас
│   ├── contact/           # Компонент контактов
│   ├── layout/            # Header, Footer
│   └── ui/                # UI компоненты (AnimatedBackground)
└── public/                # Статические файлы
```

## Страницы

1. **Главная (/)** — Hero с анимированным фоном, услуги, процесс работы, технологии, FAQ
2. **Услуги (/services)** — Детальное описание услуг с проблема/решение/результат
3. **О нас (/about)** — Ценности, принципы, статистика
4. **Контакты (/contact)** — Форма заявки и контактная информация

## Дизайн

- **Тема:** Тёмная (navy/dark blue)
- **Акценты:** Neon green (#00ff88), Cyan (#00d4ff)
- **Стиль:** Технологичный минимализм
- **Анимации:** Canvas-частицы на фоне, микроанимации через Framer Motion

## Запуск

```bash
# Установка зависимостей
npm install

# Режим разработки
npm run dev

# Production сборка
npm run build
npm start
```

## Особенности

- Полностью адаптивный дизайн
- Оптимизированные анимации (Canvas для фона)
- Автоматическое отключение тяжёлых анимаций на слабых устройствах
- SEO-оптимизация с метаданными
- Русский язык интерфейса
