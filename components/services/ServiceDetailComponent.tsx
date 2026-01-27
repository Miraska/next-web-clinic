"use client";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import ConsultationModal from "@/components/ui/ConsultationModal";

interface ServiceDetailProps {
  slug: string;
}

interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  whoIsFor: { title: string; description: string }[];
  tasks: { title: string; description: string }[];
  includes: string[];
  process: { step: string; title: string; description: string }[];
  pricing: { name: string; price: string; description: string; features: string[] }[];
  faq: { question: string; answer: string }[];
  color: string;
}

const servicesData: Record<string, ServiceData> = {
  "web-development": {
    id: "web-development",
    title: "Сайты и лендинги",
    subtitle: "Современные сайты, которые работают на ваш бизнес",
    description: "Создаём сайты, которые не просто красиво выглядят, а реально приносят пользу: привлекают клиентов, презентуют услуги, собирают заявки. Адаптивные, быстрые, с удобной админкой.",
    whoIsFor: [
      { title: "Малому и среднему бизнесу", description: "Которому нужен сайт-визитка или корпоративный сайт для представления компании" },
      { title: "Экспертам и специалистам", description: "Для продвижения личного бренда и привлечения клиентов" },
      { title: "Новым продуктам", description: "Лендинг для тестирования гипотез и сбора первых заявок" },
    ],
    tasks: [
      { title: "Привлечение клиентов", description: "Сайт становится инструментом продаж, а не просто визиткой в интернете" },
      { title: "Презентация услуг", description: "Наглядно показать, чем занимаетесь и почему стоит обратиться к вам" },
      { title: "Повышение доверия", description: "Профессиональный сайт — показатель серьёзности компании" },
      { title: "Сбор заявок", description: "Удобные формы и интеграция с CRM для обработки обращений" },
    ],
    includes: [
      "Адаптивный дизайн под все устройства",
      "SEO-оптимизация базовая",
      "Админ-панель для управления контентом",
      "Формы обратной связи",
      "Подключение аналитики (Яндекс.Метрика, Google Analytics)",
      "SSL-сертификат",
      "Хостинг на 1 год",
      "Обучение работе с сайтом",
    ],
    process: [
      { step: "01", title: "Брифинг", description: "Обсуждаем задачу, целевую аудиторию, конкурентов. Готовим структуру сайта." },
      { step: "02", title: "Прототип", description: "Создаём каркас сайта: расположение блоков, навигация, логика." },
      { step: "03", title: "Дизайн", description: "Разрабатываем визуальный стиль. Согласовываем с вами." },
      { step: "04", title: "Вёрстка", description: "Превращаем дизайн в код. Адаптируем под все устройства." },
      { step: "05", title: "Контент", description: "Наполняем сайт текстами и изображениями." },
      { step: "06", title: "Запуск", description: "Публикуем на хостинге, настраиваем аналитику, обучаем вас." },
    ],
    pricing: [
      { 
        name: "Лендинг", 
        price: "от 50 000 ₽", 
        description: "Одностраничный сайт для продукта или услуги",
        features: ["До 7 экранов", "Адаптивный дизайн", "Форма заявки", "Базовая SEO", "2-3 недели"]
      },
      { 
        name: "Сайт-визитка", 
        price: "от 80 000 ₽", 
        description: "Многостраничный сайт для компании или специалиста",
        features: ["До 7 страниц", "Галерея работ", "Блог/новости", "Админ-панель", "3-4 недели"]
      },
      { 
        name: "Корпоративный сайт", 
        price: "от 150 000 ₽", 
        description: "Полноценный сайт с расширенным функционалом",
        features: ["До 15 страниц", "Личный кабинет", "Интеграции", "SEO-оптимизация", "4-6 недель"]
      },
    ],
    faq: [
      { question: "Сколько времени займёт создание сайта?", answer: "Простой лендинг — 2-3 недели, сайт-визитка — 3-4 недели, корпоративный сайт — 4-8 недель. Сроки зависят от сложности и скорости согласований." },
      { question: "Смогу ли я сам менять контент?", answer: "Да, мы делаем удобную админ-панель и обучаем вас работе с ней. Менять тексты, фото и контакты сможете без программиста." },
      { question: "Включена ли SEO-оптимизация?", answer: "Базовая техническая SEO включена: правильная структура, мета-теги, скорость загрузки. Продвижение и контент-маркетинг — отдельная услуга." },
      { question: "Что насчёт хостинга и домена?", answer: "Помогаем выбрать и настроить хостинг. Первый год хостинга включён в стоимость. Домен регистрируется на вас." },
    ],
    color: "blue",
  },
  "ecommerce": {
    id: "ecommerce",
    title: "Интернет-магазины",
    subtitle: "Продавайте онлайн 24/7 без географических ограничений",
    description: "Создаём интернет-магазины, которые продают: удобный каталог, простое оформление заказа, интеграция с оплатой и доставкой. Синхронизация с 1С и CRM для автоматизации бизнеса.",
    whoIsFor: [
      { title: "Розничным продавцам", description: "Которые хотят выйти в онлайн или расширить каналы продаж" },
      { title: "Производителям", description: "Для организации прямых продаж без посредников" },
      { title: "B2B-компаниям", description: "Оптовые продажи с личными кабинетами и спецценами" },
    ],
    tasks: [
      { title: "Продажи 24/7", description: "Магазин работает без выходных и перерывов" },
      { title: "Автоматизация заказов", description: "От оформления до отправки — минимум ручной работы" },
      { title: "Синхронизация остатков", description: "Актуальные данные о наличии товаров" },
      { title: "Масштабирование", description: "Легко добавлять товары и расширять географию" },
    ],
    includes: [
      "Каталог с фильтрами и поиском",
      "Корзина и оформление заказа",
      "Онлайн-оплата (ЮKassa, Тинькофф и др.)",
      "Интеграция доставки (СДЭК, Почта России и др.)",
      "Личный кабинет покупателя",
      "Управление заказами",
      "Импорт/экспорт товаров",
      "Интеграция с 1С (опционально)",
    ],
    process: [
      { step: "01", title: "Аналитика", description: "Изучаем ваш ассортимент, целевую аудиторию, конкурентов." },
      { step: "02", title: "Проектирование", description: "Структура каталога, карточки товаров, путь покупателя." },
      { step: "03", title: "Дизайн", description: "Визуальный стиль, UX для максимальной конверсии." },
      { step: "04", title: "Разработка", description: "Вёрстка, функционал, интеграции." },
      { step: "05", title: "Наполнение", description: "Импорт товаров, настройка оплаты и доставки." },
      { step: "06", title: "Запуск", description: "Тестирование, публикация, обучение." },
    ],
    pricing: [
      { 
        name: "Базовый", 
        price: "от 250 000 ₽", 
        description: "Небольшой магазин до 500 товаров",
        features: ["До 500 товаров", "Базовая оплата", "1 служба доставки", "Личный кабинет", "2-3 месяца"]
      },
      { 
        name: "Стандарт", 
        price: "от 400 000 ₽", 
        description: "Полноценный магазин с расширенным функционалом",
        features: ["До 5000 товаров", "Несколько оплат", "Несколько доставок", "Интеграция с 1С", "3-4 месяца"]
      },
      { 
        name: "Премиум", 
        price: "от 700 000 ₽", 
        description: "Крупный магазин или маркетплейс",
        features: ["Неограниченно товаров", "Маркетплейс-функционал", "Полная автоматизация", "B2B функции", "4-6 месяцев"]
      },
    ],
    faq: [
      { question: "Какой движок используете?", answer: "Зависит от задачи. Для небольших магазинов — Shopify или готовые решения. Для сложных проектов — кастомная разработка на Next.js/React." },
      { question: "Можно интегрировать с 1С?", answer: "Да, настраиваем двустороннюю синхронизацию: товары, остатки, цены, заказы. Стоимость интеграции — от 50 000 ₽ дополнительно." },
      { question: "Как подключить оплату?", answer: "Интегрируем популярные платёжные системы: ЮKassa, Тинькофф, СБП, Apple Pay, Google Pay. Помогаем с подключением." },
      { question: "А если товаров очень много?", answer: "Делаем системы для каталогов от 10 000 товаров. Оптимизируем под нагрузку, настраиваем умный поиск и фильтры." },
    ],
    color: "emerald",
  },
  "crm-erp": {
    id: "crm-erp",
    title: "CRM/ERP системы",
    subtitle: "Порядок в бизнесе вместо хаоса в Excel",
    description: "Разрабатываем системы управления под ваши процессы. Не адаптируете бизнес под софт — мы адаптируем софт под бизнес. Учёт клиентов, сделок, задач, склада, аналитика.",
    whoIsFor: [
      { title: "Растущим компаниям", description: "Которым тесно в Excel и Google Таблицах" },
      { title: "Бизнесу с уникальными процессами", description: "Когда готовые CRM не подходят под специфику работы" },
      { title: "Компаниям с несколькими отделами", description: "Нужен единый центр управления информацией" },
    ],
    tasks: [
      { title: "Систематизация клиентов", description: "Вся история взаимодействия в одном месте" },
      { title: "Контроль продаж", description: "Воронки, задачи менеджеров, прогнозы" },
      { title: "Учёт и логистика", description: "Склад, остатки, перемещения, заказы поставщикам" },
      { title: "Прозрачная аналитика", description: "Дашборды и отчёты для принятия решений" },
    ],
    includes: [
      "База клиентов и контрагентов",
      "Воронка продаж с этапами",
      "Управление задачами и проектами",
      "Складской учёт (при необходимости)",
      "Дашборды и отчёты",
      "Интеграции с другими сервисами",
      "Мобильная версия",
      "Обучение команды",
    ],
    process: [
      { step: "01", title: "Аудит процессов", description: "Изучаем как работает бизнес сейчас, находим узкие места." },
      { step: "02", title: "Проектирование", description: "Описываем будущую систему: сущности, связи, интерфейсы." },
      { step: "03", title: "MVP", description: "Делаем минимальную работающую версию для тестирования." },
      { step: "04", title: "Доработка", description: "Собираем обратную связь, улучшаем систему." },
      { step: "05", title: "Внедрение", description: "Переносим данные, обучаем сотрудников." },
      { step: "06", title: "Поддержка", description: "Помогаем с развитием и доработками." },
    ],
    pricing: [
      { 
        name: "CRM Базовая", 
        price: "от 400 000 ₽", 
        description: "Учёт клиентов и сделок для небольшой команды",
        features: ["База клиентов", "Воронка продаж", "Задачи", "Базовые отчёты", "3-4 месяца"]
      },
      { 
        name: "CRM Расширенная", 
        price: "от 700 000 ₽", 
        description: "Полноценная CRM с автоматизацией",
        features: ["Всё из Базовой", "Автоматизация", "Интеграции", "Расширенная аналитика", "4-5 месяцев"]
      },
      { 
        name: "ERP Система", 
        price: "от 1 200 000 ₽", 
        description: "Комплексная система управления предприятием",
        features: ["CRM + Склад + Финансы", "Несколько отделов", "Полная автоматизация", "Мобильное приложение", "6-9 месяцев"]
      },
    ],
    faq: [
      { question: "Почему не использовать готовую CRM?", answer: "Готовые системы хороши для типовых процессов. Если у вас специфика, которую сложно уложить в шаблон — кастомная разработка окупается быстрее." },
      { question: "Сколько времени займёт внедрение?", answer: "Базовая CRM — 3-4 месяца. Сложная ERP — от 6 месяцев. Делаем поэтапно, чтобы команда постепенно привыкала к новой системе." },
      { question: "Как перенести данные из старой системы?", answer: "Разрабатываем скрипты миграции. Переносим клиентов, историю сделок, документы. Проверяем корректность переноса." },
      { question: "Можно добавлять функционал потом?", answer: "Да, проектируем с запасом на рост. Новые модули добавляются без переделки всей системы." },
    ],
    color: "orange",
  },
  "chatbots": {
    id: "chatbots",
    title: "Чат-боты",
    subtitle: "Автоматизируйте рутинное общение с клиентами",
    description: "Создаём ботов для Telegram, WhatsApp и виджетов на сайте. Автоматические ответы на типовые вопросы, приём заявок, запись на услуги, уведомления — всё это без участия менеджеров.",
    whoIsFor: [
      { title: "Сервисным компаниям", description: "Много типовых обращений, запись на услуги" },
      { title: "Онлайн-школам", description: "Выдача материалов, напоминания, поддержка студентов" },
      { title: "Любому бизнесу", description: "Где менеджеры тратят время на однотипные вопросы" },
    ],
    tasks: [
      { title: "Автоответы 24/7", description: "Бот отвечает мгновенно, даже ночью и в выходные" },
      { title: "Разгрузка менеджеров", description: "Типовые вопросы обрабатываются без участия людей" },
      { title: "Приём заявок", description: "Структурированный сбор информации от клиентов" },
      { title: "Запись на услуги", description: "Клиент сам выбирает время и записывается" },
    ],
    includes: [
      "Разработка сценариев диалогов",
      "Интеграция с Telegram/WhatsApp/сайтом",
      "Подключение к CRM",
      "Уведомления менеджерам",
      "Аналитика использования",
      "Админ-панель для управления",
      "Тестирование и отладка",
      "Инструкция по работе",
    ],
    process: [
      { step: "01", title: "Анализ", description: "Изучаем типовые сценарии общения с клиентами." },
      { step: "02", title: "Сценарии", description: "Проектируем диалоги, ветвления, ответы." },
      { step: "03", title: "Разработка", description: "Создаём бота, подключаем интеграции." },
      { step: "04", title: "Тестирование", description: "Проверяем все сценарии, исправляем ошибки." },
      { step: "05", title: "Запуск", description: "Публикуем бота, настраиваем уведомления." },
      { step: "06", title: "Доработка", description: "Собираем статистику, улучшаем сценарии." },
    ],
    pricing: [
      { 
        name: "FAQ-бот", 
        price: "от 80 000 ₽", 
        description: "Ответы на типовые вопросы",
        features: ["До 50 вопросов", "Telegram или WhatsApp", "Базовая аналитика", "2 недели"]
      },
      { 
        name: "Бот-помощник", 
        price: "от 150 000 ₽", 
        description: "Приём заявок и базовая автоматизация",
        features: ["Сбор заявок", "Интеграция с CRM", "Уведомления", "Админка", "3-4 недели"]
      },
      { 
        name: "Продвинутый бот", 
        price: "от 300 000 ₽", 
        description: "Сложная логика и интеграции",
        features: ["Запись на услуги", "Оплата в боте", "Несколько платформ", "4-6 недель"]
      },
    ],
    faq: [
      { question: "Telegram или WhatsApp — что лучше?", answer: "Telegram проще и дешевле в разработке. WhatsApp требует верификации бизнеса и стоит дороже, но там больше аудитория. Можно сделать для обеих платформ." },
      { question: "Бот заменит менеджеров?", answer: "Нет, бот берёт на себя рутину: ответы на FAQ, первичный сбор информации. Сложные вопросы передаёт живому человеку." },
      { question: "Можно подключить оплату?", answer: "Да, в Telegram есть нативные платежи. Также можно интегрировать ЮKassa, Stripe и другие системы." },
      { question: "Как часто нужно обновлять?", answer: "Зависит от задачи. Обычно после запуска собираем статистику и через месяц дорабатываем сценарии под реальные вопросы клиентов." },
    ],
    color: "cyan",
  },
  "api-integrations": {
    id: "api-integrations",
    title: "API и интеграции",
    subtitle: "Свяжем ваши системы в единую экосистему",
    description: "Разрабатываем API, интегрируем системы между собой: 1С, CRM, сайт, маркетплейсы, платёжные системы. Автоматизируем обмен данными, убираем ручную работу и дублирование.",
    whoIsFor: [
      { title: "Компаниям с несколькими системами", description: "Данные в разных местах, нужна синхронизация" },
      { title: "Продавцам на маркетплейсах", description: "Wildberries, Ozon, Яндекс.Маркет — выгрузка товаров, заказы" },
      { title: "SaaS-продуктам", description: "Нужен публичный API для партнёров" },
    ],
    tasks: [
      { title: "Синхронизация данных", description: "Товары, клиенты, заказы — в одном месте" },
      { title: "Автоматические отчёты", description: "Данные собираются и считаются без вас" },
      { title: "Работа с маркетплейсами", description: "Товары загружаются, заказы приходят автоматически" },
      { title: "Публичный API", description: "Другие сервисы могут работать с вашей системой" },
    ],
    includes: [
      "Анализ и проектирование",
      "Разработка API/интеграции",
      "Документация",
      "Тестирование",
      "Мониторинг работоспособности",
      "Логирование операций",
      "Обработка ошибок",
      "Поддержка",
    ],
    process: [
      { step: "01", title: "Анализ", description: "Изучаем системы, которые нужно связать." },
      { step: "02", title: "Проектирование", description: "Описываем структуру данных, формат обмена." },
      { step: "03", title: "Разработка", description: "Пишем код, подключаем к системам." },
      { step: "04", title: "Тестирование", description: "Проверяем все сценарии, нагрузочное тестирование." },
      { step: "05", title: "Документация", description: "Описываем API, примеры использования." },
      { step: "06", title: "Запуск и мониторинг", description: "Включаем в продакшен, настраиваем алерты." },
    ],
    pricing: [
      { 
        name: "Простая интеграция", 
        price: "от 80 000 ₽", 
        description: "Связь двух систем",
        features: ["2 системы", "Односторонний обмен", "Документация", "2-3 недели"]
      },
      { 
        name: "Комплексная интеграция", 
        price: "от 200 000 ₽", 
        description: "Несколько систем, двусторонний обмен",
        features: ["3-5 систем", "Двусторонний обмен", "Мониторинг", "4-6 недель"]
      },
      { 
        name: "API с нуля", 
        price: "от 300 000 ₽", 
        description: "Разработка публичного API",
        features: ["REST или GraphQL", "Авторизация", "Документация", "Версионирование", "6-8 недель"]
      },
    ],
    faq: [
      { question: "Какие системы можете интегрировать?", answer: "Практически любые, у которых есть API или возможность обмена файлами: 1С, Битрикс24, AmoCRM, Tilda, маркетплейсы, платёжные системы, службы доставки." },
      { question: "Что если у системы нет API?", answer: "Если нет официального API, можем использовать веб-скрапинг или обмен через файлы (CSV, XML). Но это менее надёжно и дороже." },
      { question: "Как обеспечивается надёжность?", answer: "Логируем все операции, настраиваем повторные попытки при ошибках, мониторим работоспособность, отправляем алерты при проблемах." },
      { question: "Нужна ли поддержка после запуска?", answer: "Желательно. API сторонних сервисов иногда меняются, нужно оперативно реагировать. Предлагаем пакеты поддержки от 15 000 ₽/мес." },
    ],
    color: "rose",
  },
};

export default function ServiceDetailComponent({ slug }: ServiceDetailProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const service = servicesData[slug];

  if (!service) {
    return (
      <section className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-white min-h-screen">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Услуга не найдена</h1>
          <p className="text-slate-600 mb-8">К сожалению, такой услуги нет в нашем каталоге.</p>
          <Link href="/services" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
            ← Вернуться к услугам
          </Link>
        </div>
      </section>
    );
  }

  const colorClasses: Record<string, { bg: string; text: string; light: string; border: string }> = {
    blue: { bg: "bg-blue-100", text: "text-blue-600", light: "bg-blue-50", border: "border-blue-200" },
    emerald: { bg: "bg-emerald-100", text: "text-emerald-600", light: "bg-emerald-50", border: "border-emerald-200" },
    violet: { bg: "bg-violet-100", text: "text-violet-600", light: "bg-violet-50", border: "border-violet-200" },
    orange: { bg: "bg-orange-100", text: "text-orange-600", light: "bg-orange-50", border: "border-orange-200" },
    cyan: { bg: "bg-cyan-100", text: "text-cyan-600", light: "bg-cyan-50", border: "border-cyan-200" },
    rose: { bg: "bg-rose-100", text: "text-rose-600", light: "bg-rose-50", border: "border-rose-200" },
  };

  const colors = colorClasses[service.color] || colorClasses.blue;

  return (
    <>
      <section ref={sectionRef} className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="mb-8"
          >
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-slate-400 hover:text-slate-600">Главная</Link>
              <span className="text-slate-300">/</span>
              <Link href="/services" className="text-slate-400 hover:text-slate-600">Услуги</Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-900">{service.title}</span>
            </nav>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12 lg:mb-16"
          >
            <span className={`inline-block px-4 py-2 rounded-full ${colors.light} ${colors.text} text-sm font-medium mb-4`}>
              Услуга
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mb-6">
              {service.subtitle}
            </p>
            <p className="text-slate-500 max-w-3xl">
              {service.description}
            </p>
          </motion.div>

          {/* Who is for */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Кому подходит</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {service.whoIsFor.map((item, index) => (
                <div key={index} className={`p-6 rounded-2xl ${colors.light} border ${colors.border}`}>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tasks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Какие задачи решает</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {service.tasks.map((task, index) => (
                <div key={index} className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className={`w-10 h-10 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center flex-shrink-0`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{task.title}</h3>
                    <p className="text-sm text-slate-500">{task.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* What's included */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Что входит</h2>
            <div className="p-6 lg:p-8 rounded-2xl bg-white border border-slate-200">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {service.includes.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg className={`w-5 h-5 ${colors.text} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Как мы работаем</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.process.map((step, index) => (
                <div key={index} className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className={`text-2xl font-bold ${colors.text} mb-2`}>{step.step}</div>
                  <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-slate-500">{step.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Стоимость</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {service.pricing.map((plan, index) => (
                <div key={index} className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                  <div className={`text-2xl font-bold ${colors.text} mb-2`}>{plan.price}</div>
                  <p className="text-sm text-slate-500 mb-4">{plan.description}</p>
                  <div className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <svg className={`w-4 h-4 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-400 mt-4 text-center">
              Цены ориентировочные. Точная стоимость — после обсуждения задачи.
            </p>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Частые вопросы</h2>
            <div className="space-y-3">
              {service.faq.map((item, index) => (
                <div key={index} className="rounded-xl border border-slate-200 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-5 flex items-center justify-between text-left bg-white hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-semibold text-slate-900 pr-4">{item.question}</span>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0"
                    >
                      <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-5">
                      <div className="h-px bg-slate-100 mb-4" />
                      <p className="text-slate-600">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className={`p-8 lg:p-10 rounded-2xl ${colors.light} border ${colors.border}`}>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Готовы обсудить проект?
                  </h3>
                  <p className="text-slate-600 max-w-xl">
                    Расскажите о задаче — мы предложим решение и посчитаем стоимость.
                    Консультация бесплатная.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/20 whitespace-nowrap"
                    data-cta={`service-${slug}-consultation`}
                  >
                    Обсудить проект
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center px-6 py-4 border border-slate-200 bg-white text-slate-700 font-medium rounded-xl hover:border-blue-400 hover:text-blue-600 transition-all whitespace-nowrap"
                  >
                    ← Все услуги
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
