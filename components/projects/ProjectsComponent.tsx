"use client";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  result: string;
  technologies: string[];
  color: string;
  stats: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    id: "crm-logistics",
    title: "CRM для логистической компании",
    category: "CRM/ERP",
    description: "Разработали кастомную CRM-систему для управления грузоперевозками. Полный цикл от заявки до доставки с отслеживанием в реальном времени.",
    result: "Автоматизировали 80% рутинных процессов, сократили время обработки заявки с 30 до 5 минут.",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "Redis"],
    color: "blue",
    stats: [
      { label: "Сокращение времени", value: "-83%" },
      { label: "Автоматизация", value: "80%" },
      { label: "Срок разработки", value: "4 мес" },
    ],
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce платформа",
    category: "Веб-разработка",
    description: "Создали высоконагруженный интернет-магазин с интеграцией 1C, платёжных систем и служб доставки. Поддержка до 10 000 одновременных пользователей.",
    result: "Конверсия выросла на 40%, время загрузки страниц — менее 1 секунды.",
    technologies: ["Next.js", "TypeScript", "Stripe", "1C API", "AWS"],
    color: "emerald",
    stats: [
      { label: "Рост конверсии", value: "+40%" },
      { label: "Время загрузки", value: "<1 сек" },
      { label: "Пользователей", value: "10K" },
    ],
  },
  {
    id: "hr-portal",
    title: "HR-портал для холдинга",
    category: "Автоматизация",
    description: "Внутренний портал для 500+ сотрудников: заявки на отпуск, документооборот, обучение, KPI-трекинг и интеграция с 1С ЗУП.",
    result: "HR-отдел сократил время на рутину на 60%, все процессы стали прозрачными.",
    technologies: ["React", "Node.js", "MongoDB", "1C ЗУП", "Telegram Bot"],
    color: "violet",
    stats: [
      { label: "Экономия времени", value: "60%" },
      { label: "Сотрудников", value: "500+" },
      { label: "Интеграций", value: "5" },
    ],
  },
  {
    id: "booking-system",
    title: "Система бронирования",
    category: "Веб-разработка",
    description: "Онлайн-система бронирования для сети клиник: расписание врачей, уведомления, интеграция с МИС и приём онлайн-оплаты.",
    result: "Количество онлайн-записей выросло в 3 раза, пропущенные приёмы сократились на 50%.",
    technologies: ["Next.js", "PostgreSQL", "Twilio", "YooKassa", "МИС API"],
    color: "orange",
    stats: [
      { label: "Онлайн-записей", value: "x3" },
      { label: "Меньше пропусков", value: "-50%" },
      { label: "Клиник", value: "12" },
    ],
  },
  {
    id: "analytics-dashboard",
    title: "Аналитическая платформа",
    category: "Автоматизация",
    description: "Дашборд для руководства с агрегацией данных из 8 источников: продажи, маркетинг, финансы, HR. Автоматические отчёты и алерты.",
    result: "Руководство получает полную картину бизнеса за 5 минут вместо 2 часов ручной сборки.",
    technologies: ["React", "Python", "ClickHouse", "Grafana", "Airflow"],
    color: "rose",
    stats: [
      { label: "Источников данных", value: "8" },
      { label: "Экономия времени", value: "-95%" },
      { label: "Автоотчётов", value: "25+" },
    ],
  },
];

const categories = ["Все", "Веб-разработка", "CRM/ERP", "Автоматизация"];

export default function ProjectsComponent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const colorClasses = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
    emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200" },
    violet: { bg: "bg-violet-50", text: "text-violet-600", border: "border-violet-200" },
    orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200" },
    rose: { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-200" },
  };

  const filteredProjects = selectedCategory === "Все"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section ref={sectionRef} className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-white min-h-screen">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-violet-50 text-violet-600 text-sm font-medium mb-4">
            Портфолио
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4">
            Наши <span className="text-blue-600">проекты</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Реальные кейсы с измеримыми результатами. 
            Каждый проект — это история успешного решения бизнес-задачи.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const colors = colorClasses[project.color as keyof typeof colorClasses];
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <div className="p-6 lg:p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all duration-200 h-full">
                    {/* Category badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full ${colors.bg} ${colors.text} text-xs font-medium`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Result */}
                    <div className={`p-4 rounded-xl ${colors.bg} ${colors.border} border mb-6`}>
                      <span className={`text-xs uppercase tracking-wider ${colors.text} font-medium`}>Результат</span>
                      <p className="text-slate-700 mt-1 text-sm">{project.result}</p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {project.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className="text-xl lg:text-2xl font-bold text-slate-900">{stat.value}</div>
                          <div className="text-xs text-slate-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      Подробнее о проекте
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 lg:mt-16"
        >
          <div className="max-w-2xl mx-auto p-6 lg:p-8 rounded-2xl bg-blue-50 border border-blue-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Хотите такой же результат?
            </h3>
            <p className="text-slate-600 mb-6">
              Расскажите о вашей задаче — мы найдём оптимальное решение.
              Первая консультация бесплатно.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-sm"
              data-cta="projects-contact"
            >
              Обсудить проект
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
