"use client";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import ConsultationModal from "@/components/ui/ConsultationModal";

interface ProjectDetailProps {
  slug: string;
}

interface ProjectData {
  id: string;
  title: string;
  category: string;
  industry: string;
  description: string;
  client: string;
  challenge: {
    title: string;
    description: string;
    problems: string[];
  };
  solution: {
    title: string;
    description: string;
    features: string[];
  };
  process: {
    step: string;
    title: string;
    description: string;
    duration: string;
  }[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  technologies: string[];
  timeline: string;
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
  color: string;
}

const projectsData: Record<string, ProjectData> = {
  "crm-logistics": {
    id: "crm-logistics",
    title: "CRM для логистической компании",
    category: "CRM/ERP",
    industry: "Логистика",
    description: "Кастомная CRM-система для управления грузоперевозками с полным циклом от заявки до доставки.",
    client: "Транспортная компания (NDA)",
    challenge: {
      title: "Хаос в обработке заявок",
      description: "До внедрения системы компания справлялась с потоком заявок с помощью Excel и почты. Это приводило к потерям клиентов и ошибкам.",
      problems: [
        "Обработка заявки занимала до 30 минут",
        "Данные хранились в разных Excel-файлах",
        "Клиенты не могли отследить статус груза",
        "Менеджеры дублировали работу друг друга",
        "Руководство не видело реальной картины",
      ],
    },
    solution: {
      title: "Единая система управления",
      description: "Разработали CRM, которая объединила все процессы: от первого контакта с клиентом до подтверждения доставки.",
      features: [
        "Единая база заявок с историей изменений",
        "Автоматический расчёт стоимости перевозки",
        "GPS-трекинг грузов в реальном времени",
        "Личный кабинет для клиентов",
        "Мобильное приложение для водителей",
        "Автоматические уведомления о статусе",
        "Дашборды для руководства",
        "Интеграция с 1С и бухгалтерией",
      ],
    },
    process: [
      { step: "01", title: "Аудит процессов", description: "Изучили текущую работу компании, провели интервью с сотрудниками", duration: "2 недели" },
      { step: "02", title: "Проектирование", description: "Спроектировали архитектуру системы и согласовали требования", duration: "2 недели" },
      { step: "03", title: "MVP", description: "Разработали базовый функционал: заявки, клиенты, расчёт стоимости", duration: "6 недель" },
      { step: "04", title: "Трекинг", description: "Добавили GPS-отслеживание и личный кабинет клиента", duration: "4 недели" },
      { step: "05", title: "Интеграции", description: "Настроили обмен данными с 1С и внешними сервисами", duration: "2 недели" },
      { step: "06", title: "Запуск", description: "Обучили сотрудников, мигрировали данные, запустили в работу", duration: "2 недели" },
    ],
    results: [
      { metric: "-83%", value: "Время обработки заявки", description: "Было 30 минут, стало 5 минут" },
      { metric: "80%", value: "Автоматизация процессов", description: "Рутинные операции выполняются без участия человека" },
      { metric: "0", value: "Потерянных заявок", description: "Все обращения фиксируются и отслеживаются" },
      { metric: "+25%", value: "Рост выручки", description: "За счёт ускорения обработки и снижения потерь" },
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "Redis", "WebSocket", "React Native"],
    timeline: "Январь-Апрель 2024 (4 месяца)",
    testimonial: {
      text: "Ребята реально вникли в нашу специфику. Не просто сделали \"как попросили\", а предложили решения, до которых мы сами не додумались. Теперь экономим часы каждый день.",
      author: "Алексей К.",
      position: "Руководитель отдела логистики",
    },
    color: "blue",
  },
  "ecommerce-platform": {
    id: "ecommerce-platform",
    title: "Интернет-магазин товаров для дома",
    category: "E-commerce",
    industry: "Розница",
    description: "Высоконагруженный интернет-магазин с 5000+ товаров и полной автоматизацией.",
    client: "Сеть магазинов товаров для дома",
    challenge: {
      title: "Устаревший сайт тормозил продажи",
      description: "Старый сайт работал медленно, не синхронизировался с учётной системой, заказы обрабатывались вручную.",
      problems: [
        "Страницы загружались 5-7 секунд",
        "Каталог не синхронизировался с 1С",
        "Заказы вручную переносились в систему учёта",
        "Низкая конверсия — менее 1%",
        "Сайт плохо работал на телефонах",
      ],
    },
    solution: {
      title: "Современный быстрый магазин",
      description: "Создали новый интернет-магазин на современном стеке с полной интеграцией всех систем.",
      features: [
        "Время загрузки менее 1 секунды",
        "Двусторонняя синхронизация с 1С",
        "Автоматическая обработка заказов",
        "Умный поиск и фильтры",
        "Личный кабинет с историей заказов",
        "Интеграция с несколькими службами доставки",
        "Онлайн-оплата (ЮKassa, СБП)",
        "PWA для мобильных устройств",
      ],
    },
    process: [
      { step: "01", title: "Аналитика", description: "Изучили текущий сайт, поведение пользователей, конкурентов", duration: "2 недели" },
      { step: "02", title: "UX/UI дизайн", description: "Разработали дизайн с фокусом на конверсию", duration: "3 недели" },
      { step: "03", title: "Разработка каталога", description: "Создали систему товаров, категорий, фильтров", duration: "4 недели" },
      { step: "04", title: "Интеграция 1С", description: "Настроили обмен товарами, остатками, ценами, заказами", duration: "3 недели" },
      { step: "05", title: "Оплата и доставка", description: "Подключили платёжные системы и службы доставки", duration: "2 недели" },
      { step: "06", title: "Тестирование и запуск", description: "Нагрузочное тестирование, миграция контента, запуск", duration: "2 недели" },
    ],
    results: [
      { metric: "+40%", value: "Рост конверсии", description: "С 0.8% до 1.1% — за счёт скорости и UX" },
      { metric: "<1 сек", value: "Время загрузки", description: "Было 5-7 секунд, стало менее 1" },
      { metric: "0", value: "Ручных операций", description: "Заказы автоматически попадают в 1С" },
      { metric: "+60%", value: "Мобильный трафик", description: "PWA привлекает больше мобильных пользователей" },
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "1C API", "Redis", "Vercel", "YooKassa"],
    timeline: "Февраль-Май 2024 (3.5 месяца)",
    testimonial: {
      text: "Честно, не верила, что можно так ускорить сайт. Теперь клиенты не уходят с первой страницы, а заказы сами падают в 1С. Мечта!",
      author: "Мария С.",
      position: "Владелец магазина",
    },
    color: "emerald",
  },
  "hr-portal": {
    id: "hr-portal",
    title: "HR-портал для производственного холдинга",
    category: "Веб-приложение",
    industry: "Производство",
    description: "Внутренний портал для 500+ сотрудников с автоматизацией HR-процессов.",
    client: "Производственный холдинг (NDA)",
    challenge: {
      title: "HR-отдел тонул в бумагах",
      description: "Все HR-процессы велись на бумаге и в Excel. Сотрудники тратили время на ручную работу вместо развития компании.",
      problems: [
        "Заявления на отпуск через email и бумагу",
        "Табели учёта рабочего времени в Excel",
        "Нет единой базы сотрудников",
        "Обучение не отслеживалось",
        "Руководители не видели KPI команды",
      ],
    },
    solution: {
      title: "Единый HR-портал",
      description: "Создали портал, который автоматизировал рутинные HR-процессы и дал прозрачность всем участникам.",
      features: [
        "Электронный документооборот (заявления, приказы)",
        "Автоматический расчёт отпусков и больничных",
        "Система постановки и отслеживания KPI",
        "Модуль обучения с курсами и тестами",
        "Интеграция с 1С ЗУП",
        "Telegram-бот для быстрых запросов",
        "Мобильная версия для сотрудников",
        "Дашборды для руководителей",
      ],
    },
    process: [
      { step: "01", title: "Исследование", description: "Провели интервью с HR и сотрудниками, описали процессы", duration: "2 недели" },
      { step: "02", title: "Проектирование", description: "Разработали архитектуру и согласовали функционал", duration: "2 недели" },
      { step: "03", title: "Документооборот", description: "Создали систему заявлений, согласований, приказов", duration: "5 недель" },
      { step: "04", title: "KPI и обучение", description: "Добавили модули целей и онлайн-курсов", duration: "4 недели" },
      { step: "05", title: "Интеграции", description: "Связали с 1С ЗУП, создали Telegram-бота", duration: "3 недели" },
      { step: "06", title: "Внедрение", description: "Обучили HR, провели пилот, запустили на всех", duration: "2 недели" },
    ],
    results: [
      { metric: "60%", value: "Экономия времени HR", description: "На рутинных операциях" },
      { metric: "500+", value: "Сотрудников", description: "Пользуются порталом ежедневно" },
      { metric: "100%", value: "Прозрачность", description: "Все процессы видны руководству" },
      { metric: "5", value: "Интеграций", description: "С внешними системами" },
    ],
    technologies: ["React", "Node.js", "MongoDB", "1C ЗУП API", "Telegram Bot API", "Docker"],
    timeline: "Март-Июль 2024 (5 месяцев)",
    testimonial: {
      text: "Наконец-то избавились от бумаг! Сотрудники сами подают заявления, руководители согласовывают в один клик. HR теперь занимается развитием, а не бюрократией.",
      author: "Елена П.",
      position: "HR-директор",
    },
    color: "violet",
  },
};

export default function ProjectDetailComponent({ slug }: ProjectDetailProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const project = projectsData[slug];

  if (!project) {
    return (
      <section className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-white min-h-screen">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Проект не найден</h1>
          <p className="text-slate-600 mb-8">К сожалению, такого проекта нет в нашем портфолио.</p>
          <Link href="/projects" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
            ← Вернуться к проектам
          </Link>
        </div>
      </section>
    );
  }

  const colorClasses: Record<string, { bg: string; text: string; light: string; border: string }> = {
    blue: { bg: "bg-blue-100", text: "text-blue-600", light: "bg-blue-50", border: "border-blue-200" },
    emerald: { bg: "bg-emerald-100", text: "text-emerald-600", light: "bg-emerald-50", border: "border-emerald-200" },
    violet: { bg: "bg-violet-100", text: "text-violet-600", light: "bg-violet-50", border: "border-violet-200" },
  };

  const colors = colorClasses[project.color] || colorClasses.blue;

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
              <Link href="/projects" className="text-slate-400 hover:text-slate-600">Проекты</Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-900">{project.title}</span>
            </nav>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12 lg:mb-16"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`px-4 py-1.5 rounded-full ${colors.light} ${colors.text} text-sm font-medium`}>
                {project.category}
              </span>
              <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm">
                {project.industry}
              </span>
              <span className="text-sm text-slate-400">{project.timeline}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl">
              {project.description}
            </p>
          </motion.div>

          {/* Results highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 lg:mb-16"
          >
            {project.results.map((result, index) => (
              <div key={index} className={`p-5 rounded-2xl ${colors.light} border ${colors.border}`}>
                <div className={`text-3xl lg:text-4xl font-bold ${colors.text} mb-1`}>{result.metric}</div>
                <div className="font-semibold text-slate-900 mb-1">{result.value}</div>
                <div className="text-sm text-slate-500">{result.description}</div>
              </div>
            ))}
          </motion.div>

          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-12 lg:mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-6 lg:p-8 rounded-2xl bg-red-50 border border-red-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Проблема</h2>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{project.challenge.title}</h3>
                <p className="text-slate-600 mb-4">{project.challenge.description}</p>
                <ul className="space-y-2">
                  {project.challenge.problems.map((problem, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                      <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`p-6 lg:p-8 rounded-2xl ${colors.light} border ${colors.border}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center`}>
                    <svg className={`w-5 h-5 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Решение</h2>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{project.solution.title}</h3>
                <p className="text-slate-600 mb-4">{project.solution.description}</p>
                <ul className="space-y-2">
                  {project.solution.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                      <svg className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Process Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Процесс работы над проектом</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden lg:block absolute top-8 left-0 right-0 h-1 bg-slate-200 rounded-full" />
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="relative"
                  >
                    {/* Step number */}
                    <div className={`hidden lg:flex absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full ${colors.bg} ${colors.text} items-center justify-center text-sm font-bold z-10`}>
                      {step.step}
                    </div>
                    
                    <div className="p-5 rounded-xl bg-white border border-slate-200 hover:shadow-md transition-shadow lg:mt-8">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`lg:hidden text-sm font-bold ${colors.text}`}>{step.step}</span>
                        <span className="text-xs text-slate-400">{step.duration}</span>
                      </div>
                      <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-slate-500">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Использованные технологии</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className={`px-4 py-2 rounded-xl ${colors.light} ${colors.text} text-sm font-medium border ${colors.border}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Testimonial */}
          {project.testimonial && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-12 lg:mb-16"
            >
              <div className="p-8 lg:p-10 rounded-2xl bg-slate-50 border border-slate-200">
                <svg className="w-10 h-10 text-slate-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-xl text-slate-700 leading-relaxed mb-6 italic">
                  &ldquo;{project.testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
                    <span className="text-slate-600 font-bold">{project.testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{project.testimonial.author}</div>
                    <div className="text-sm text-slate-500">{project.testimonial.position}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <div className="p-8 lg:p-10 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Хотите похожий результат?
                  </h3>
                  <p className="text-blue-100 max-w-xl">
                    Расскажите о вашей задаче — мы предложим решение и покажем, 
                    как можем помочь именно вам.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-200 whitespace-nowrap"
                    data-cta={`project-${slug}-consultation`}
                  >
                    Обсудить проект
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center px-6 py-4 border border-white/30 text-white font-medium rounded-xl hover:bg-white/10 transition-all whitespace-nowrap"
                  >
                    ← Все проекты
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
