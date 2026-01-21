"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  result: string;
  technologies: string[];
  image: string;
  gradient: string;
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
    image: "/projects/crm.jpg",
    gradient: "from-[#00ff88] to-[#00d4ff]",
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
    image: "/projects/ecommerce.jpg",
    gradient: "from-[#00d4ff] to-[#8b5cf6]",
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
    image: "/projects/hr.jpg",
    gradient: "from-[#8b5cf6] to-[#ec4899]",
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
    image: "/projects/booking.jpg",
    gradient: "from-[#ec4899] to-[#f97316]",
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
    image: "/projects/analytics.jpg",
    gradient: "from-[#f97316] to-[#00ff88]",
    stats: [
      { label: "Источников данных", value: "8" },
      { label: "Экономия времени", value: "-95%" },
      { label: "Автоотчётов", value: "25+" },
    ],
  },
  {
    id: "api-integration",
    title: "API-интеграция маркетплейсов",
    category: "Интеграции",
    description: "Единая панель управления товарами на Ozon, Wildberries и Яндекс.Маркет. Синхронизация остатков, цен и заказов в реальном времени.",
    result: "Вместо 3 кабинетов — один интерфейс. Ошибки в остатках сократились до нуля.",
    technologies: ["Node.js", "REST API", "PostgreSQL", "Redis", "RabbitMQ"],
    image: "/projects/api.jpg",
    gradient: "from-[#00d4ff] to-[#00ff88]",
    stats: [
      { label: "Маркетплейсов", value: "3" },
      { label: "Ошибок", value: "0" },
      { label: "Товаров", value: "50K+" },
    ],
  },
];

const categories = ["Все", "Веб-разработка", "CRM/ERP", "Автоматизация", "Интеграции"];

export default function ProjectsComponent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProjects = selectedCategory === "Все"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section ref={sectionRef} className="pt-32 pb-24 lg:pb-32 bg-[#0a0e17] min-h-screen relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 grid-pattern-animated opacity-20" />
      <div className="orb orb-green w-[500px] h-[500px] -top-64 -right-64 opacity-20" />
      <div className="orb orb-purple w-[400px] h-[400px] bottom-0 -left-48 opacity-15" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-[#00ff88]/10 text-[#00ff88] text-sm font-medium mb-6"
          >
            Портфолио
          </motion.span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Наши <span className="text-[#00ff88] text-glow-green">проекты</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/60 font-light leading-relaxed max-w-3xl mx-auto">
            Реальные кейсы с измеримыми результатами. 
            Каждый проект — это история успешного решения бизнес-задачи.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#00ff88] text-[#0a0e17]"
                  : "bg-[#0f1520] text-white/70 border border-[#1f2937] hover:border-[#00ff88]/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative"
              >
                {/* Glow effect */}
                <div 
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-r ${project.gradient}`}
                  style={{ opacity: hoveredProject === project.id ? 0.2 : 0 }}
                />

                <div className="relative p-6 lg:p-8 rounded-2xl bg-[#0f1520] border border-[#1f2937] hover:border-[#00ff88]/30 transition-all duration-500 card-hover h-full overflow-hidden">
                  {/* Top gradient bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Category badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#00ff88]/10 text-[#00ff88] text-xs font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-[#00ff88] transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Result */}
                  <div className="p-4 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/20 mb-6">
                    <span className="text-xs uppercase tracking-wider text-[#00ff88] font-medium">Результат</span>
                    <p className="text-white/80 mt-1 text-sm">{project.result}</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-xl lg:text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-xs text-white/50">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-[#1f2937] text-white/70 text-xs font-mono group-hover:bg-[#00ff88]/10 group-hover:text-[#00ff88] transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-[#00ff88] font-medium group/link"
                  >
                    <span className="relative">
                      Подробнее о проекте
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ff88] group-hover/link:w-full transition-all duration-300" />
                    </span>
                    <svg
                      className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-16 lg:mt-24"
        >
          <div className="max-w-2xl mx-auto p-8 lg:p-12 rounded-2xl bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 border border-[#00ff88]/20">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Хотите такой же результат?
            </h3>
            <p className="text-white/60 mb-8">
              Расскажите о вашей задаче — мы найдём оптимальное решение.
              Первая консультация бесплатно.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#00ff88] text-[#0a0e17] font-semibold rounded-full hover:bg-[#00cc6a] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] group"
            >
              Обсудить проект
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
