"use client";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import ConsultationModal from "@/components/ui/ConsultationModal";

interface Project {
  id: string;
  title: string;
  category: string;
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  technologies: string[];
  color: string;
  stats: { label: string; value: string }[];
  timeline: string;
}

const projects: Project[] = [
  {
    id: "crm-logistics",
    title: "CRM для логистической компании",
    category: "CRM/ERP",
    industry: "Логистика",
    description: "Кастомная CRM-система для управления грузоперевозками. Полный цикл от заявки до доставки с отслеживанием в реальном времени.",
    challenge: "Менеджеры тратили до 30 минут на обработку каждой заявки, данные хранились в Excel, клиенты не могли отследить груз.",
    solution: "Разработали систему с единой базой заявок, автоматическим расчётом стоимости, GPS-трекингом и личным кабинетом для клиентов.",
    result: "Время обработки заявки сократилось до 5 минут. Клиенты самостоятельно отслеживают грузы. 80% рутинных операций автоматизировано.",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "Redis"],
    color: "blue",
    stats: [
      { label: "Время обработки", value: "-83%" },
      { label: "Автоматизация", value: "80%" },
      { label: "Срок", value: "4 мес" },
    ],
    timeline: "Январь-Апрель 2024",
  },
  {
    id: "ecommerce-platform",
    title: "Интернет-магазин товаров для дома",
    category: "E-commerce",
    industry: "Розница",
    description: "Высоконагруженный интернет-магазин с каталогом 5000+ товаров, интеграцией с 1С и несколькими службами доставки.",
    challenge: "Старый сайт работал медленно, не синхронизировался с 1С, заказы обрабатывались вручную, конверсия была низкой.",
    solution: "Создали новый магазин на Next.js с оптимизированной загрузкой, двусторонней интеграцией с 1С и автоматической обработкой заказов.",
    result: "Конверсия выросла на 40%, время загрузки страниц — менее 1 секунды. Заказы автоматически попадают в 1С.",
    technologies: ["Next.js", "TypeScript", "Stripe", "1C API", "AWS"],
    color: "emerald",
    stats: [
      { label: "Конверсия", value: "+40%" },
      { label: "Загрузка", value: "<1 сек" },
      { label: "Товаров", value: "5000+" },
    ],
    timeline: "Февраль-Май 2024",
  },
  {
    id: "hr-portal",
    title: "HR-портал для производственного холдинга",
    category: "Веб-приложение",
    industry: "Производство",
    description: "Внутренний портал для 500+ сотрудников: заявки на отпуск, документооборот, обучение, KPI-трекинг и интеграция с 1С ЗУП.",
    challenge: "HR-отдел тонул в бумагах: заявления на отпуск через email, табели в Excel, обучение не отслеживалось.",
    solution: "Создали единый портал с электронным документооборотом, автоматическим расчётом отпусков и системой обучения.",
    result: "HR сократил время на рутину на 60%. Все процессы прозрачны для сотрудников и руководства.",
    technologies: ["React", "Node.js", "MongoDB", "1C ЗУП", "Telegram Bot"],
    color: "violet",
    stats: [
      { label: "Экономия времени", value: "60%" },
      { label: "Сотрудников", value: "500+" },
      { label: "Интеграций", value: "5" },
    ],
    timeline: "Март-Июль 2024",
  },
  {
    id: "booking-system",
    title: "Система онлайн-записи для сети клиник",
    category: "Веб-приложение",
    industry: "Медицина",
    description: "Онлайн-система записи для 12 клиник: расписание врачей, напоминания пациентам, интеграция с МИС и приём онлайн-оплаты.",
    challenge: "Запись только по телефону, много пропущенных приёмов, администраторы перегружены, нет единого расписания.",
    solution: "Разработали систему с онлайн-записью, SMS-напоминаниями, онлайн-оплатой и синхронизацией с медицинской системой.",
    result: "Онлайн-запись выросла в 3 раза. Пропущенные приёмы сократились на 50%. Администраторы освободили время для пациентов.",
    technologies: ["Next.js", "PostgreSQL", "Twilio", "YooKassa", "МИС API"],
    color: "orange",
    stats: [
      { label: "Онлайн-записей", value: "x3" },
      { label: "Пропусков", value: "-50%" },
      { label: "Клиник", value: "12" },
    ],
    timeline: "Апрель-Август 2024",
  },
  {
    id: "analytics-dashboard",
    title: "Аналитическая платформа для руководства",
    category: "Автоматизация",
    industry: "Услуги",
    description: "Дашборд для топ-менеджмента с агрегацией данных из 8 источников: продажи, маркетинг, финансы, HR. Автоматические отчёты.",
    challenge: "Руководство тратило 2+ часа на сбор данных из разных систем. Отчёты делались вручную, часто с ошибками.",
    solution: "Создали единый дашборд с автоматической загрузкой данных, визуализацией KPI и рассылкой отчётов по расписанию.",
    result: "Полная картина бизнеса за 5 минут вместо 2 часов. Еженедельные отчёты формируются автоматически.",
    technologies: ["React", "Python", "ClickHouse", "Grafana", "Airflow"],
    color: "rose",
    stats: [
      { label: "Источников", value: "8" },
      { label: "Экономия времени", value: "95%" },
      { label: "Отчётов/мес", value: "25+" },
    ],
    timeline: "Май-Август 2024",
  },
  {
    id: "telegram-bot-school",
    title: "Telegram-бот для онлайн-школы",
    category: "Чат-боты",
    industry: "Образование",
    description: "Бот для автоматизации работы с учениками: выдача материалов, напоминания о занятиях, сбор обратной связи, оплата курсов.",
    challenge: "Администраторы вручную отправляли материалы, напоминали о занятиях, собирали оплату. Много рутины, ошибки.",
    solution: "Создали бота, который автоматически выдаёт материалы по расписанию, напоминает о занятиях и принимает оплату.",
    result: "90% рутинных операций автоматизировано. Ученики получают материалы мгновенно. Оплата проходит без участия администратора.",
    technologies: ["Python", "aiogram", "PostgreSQL", "YooKassa"],
    color: "cyan",
    stats: [
      { label: "Автоматизация", value: "90%" },
      { label: "Учеников", value: "300+" },
      { label: "Курсов", value: "15" },
    ],
    timeline: "Июнь-Июль 2024",
  },
];

const categories = ["Все", "E-commerce", "CRM/ERP", "Веб-приложение", "Автоматизация", "Чат-боты"];
const industries = ["Все отрасли", "Логистика", "Розница", "Производство", "Медицина", "Услуги", "Образование"];

export default function ProjectsComponent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [selectedIndustry, setSelectedIndustry] = useState("Все отрасли");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const colorClasses: Record<string, { bg: string; text: string; border: string; light: string }> = {
    blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200", light: "bg-blue-50" },
    emerald: { bg: "bg-emerald-100", text: "text-emerald-600", border: "border-emerald-200", light: "bg-emerald-50" },
    violet: { bg: "bg-violet-100", text: "text-violet-600", border: "border-violet-200", light: "bg-violet-50" },
    orange: { bg: "bg-orange-100", text: "text-orange-600", border: "border-orange-200", light: "bg-orange-50" },
    rose: { bg: "bg-rose-100", text: "text-rose-600", border: "border-rose-200", light: "bg-rose-50" },
    cyan: { bg: "bg-cyan-100", text: "text-cyan-600", border: "border-cyan-200", light: "bg-cyan-50" },
  };

  const filteredProjects = projects.filter((p) => {
    const categoryMatch = selectedCategory === "Все" || p.category === selectedCategory;
    const industryMatch = selectedIndustry === "Все отрасли" || p.industry === selectedIndustry;
    return categoryMatch && industryMatch;
  });

  return (
    <>
      <section ref={sectionRef} className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-white min-h-screen">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 lg:mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
              Портфолио
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4">
              Наши <span className="text-blue-600">проекты</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Реальные кейсы с измеримыми результатами. 
              Каждый проект — это решённая бизнес-задача.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-10"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              {/* Category filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Industry filter */}
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm focus:outline-none focus:border-blue-500"
              >
                {industries.map((industry) => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Projects count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="mb-6"
          >
            <p className="text-sm text-slate-400">
              Найдено проектов: {filteredProjects.length}
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const colors = colorClasses[project.color];
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <div className="p-6 lg:p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className={`px-3 py-1 rounded-full ${colors.light} ${colors.text} text-xs font-medium`}>
                            {project.category}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs">
                            {project.industry}
                          </span>
                        </div>
                        <span className="text-xs text-slate-400">{project.timeline}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Challenge & Solution */}
                      <div className="space-y-3 mb-5 flex-grow">
                        <div className="p-3 rounded-lg bg-red-50 border border-red-100">
                          <span className="text-xs font-medium text-red-600 uppercase tracking-wider">Проблема</span>
                          <p className="text-slate-700 text-sm mt-1">{project.challenge}</p>
                        </div>
                        <div className={`p-3 rounded-lg ${colors.light} border ${colors.border}`}>
                          <span className={`text-xs font-medium ${colors.text} uppercase tracking-wider`}>Решение</span>
                          <p className="text-slate-700 text-sm mt-1">{project.solution}</p>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-3 mb-5">
                        {project.stats.map((stat, i) => (
                          <div key={i} className="text-center p-3 rounded-xl bg-slate-50">
                            <div className={`text-xl lg:text-2xl font-bold ${colors.text}`}>{stat.value}</div>
                            <div className="text-xs text-slate-500">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 rounded-md bg-slate-100 text-slate-600 text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <Link
                        href={`/projects/${project.id}`}
                        className={`w-full py-3 rounded-xl font-semibold text-center transition-all duration-200 flex items-center justify-center gap-2 ${colors.light} ${colors.text} hover:opacity-80 border ${colors.border}`}
                      >
                        Подробнее о проекте
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Проекты не найдены</h3>
              <p className="text-slate-500 mb-4">Попробуйте изменить фильтры</p>
              <button
                onClick={() => {
                  setSelectedCategory("Все");
                  setSelectedIndustry("Все отрасли");
                }}
                className="text-blue-600 font-medium hover:text-blue-700"
              >
                Сбросить фильтры
              </button>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 lg:mt-16"
          >
            <div className="p-8 lg:p-10 rounded-2xl bg-gradient-to-r from-blue-50 to-violet-50 border border-blue-100">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Хотите такой же результат?
                  </h3>
                  <p className="text-slate-600 max-w-xl">
                    Расскажите о вашей задаче — мы предложим решение и покажем релевантные кейсы.
                    Первая консультация бесплатная.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/20 whitespace-nowrap"
                    data-cta="projects-consultation"
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
                    Смотреть услуги
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
