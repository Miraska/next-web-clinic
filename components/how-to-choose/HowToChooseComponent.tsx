"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import ConsultationModal from "@/components/ui/ConsultationModal";

export default function HowToChooseComponent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openSection, setOpenSection] = useState<number | null>(0);

  const redFlags = [
    {
      icon: "🚩",
      title: "«Сделаем за 3 дня»",
      description: "Качественный сайт за несколько дней — миф. Минимум для лендинга — 2 недели. Если обещают быстрее — либо шаблон, либо низкое качество.",
      tip: "Спросите, сколько времени занимает каждый этап: дизайн, вёрстка, тестирование."
    },
    {
      icon: "🚩",
      title: "«У нас самые низкие цены»",
      description: "Демпинг — признак проблем. Либо команда без опыта, либо будут экономить на качестве, либо позже «всплывут» доплаты.",
      tip: "Сравните 3-5 предложений. Адекватная цена — в среднем диапазоне."
    },
    {
      icon: "🚩",
      title: "Нет договора или он «типовой»",
      description: "Отсутствие договора = отсутствие гарантий. Если предлагают работать без документов или «потом оформим» — рискуете потерять деньги.",
      tip: "Требуйте договор с прописанным ТЗ, сроками, стоимостью и порядком оплаты."
    },
    {
      icon: "🚩",
      title: "100% предоплата",
      description: "Адекватная схема — 50/50 или поэтапная оплата. 100% вперёд — риск, что исполнитель исчезнет или потеряет мотивацию.",
      tip: "Оптимально: 50% в начале, 50% после приёмки работы."
    },
    {
      icon: "🚩",
      title: "Нет портфолио или примеры «под NDA»",
      description: "Все проекты под NDA — удобная отмазка. У любой команды есть что показать: хотя бы обезличенные скриншоты или описания.",
      tip: "Попросите контакты клиентов для рекомендации или ссылки на живые проекты."
    },
    {
      icon: "🚩",
      title: "«Мы делаем всё»",
      description: "Команда, которая берётся за любой проект — сайты, приложения, маркетинг, SEO, контент — скорее всего, не делает хорошо ничего.",
      tip: "Ищите специализацию. Лучше узкий профессионал, чем широкий дилетант."
    },
    {
      icon: "🚩",
      title: "Общение только через менеджера",
      description: "Если вы не можете пообщаться с разработчиком хотя бы на этапе обсуждения — будут проблемы с коммуникацией в процессе.",
      tip: "На первой встрече попросите присутствия технического специалиста."
    },
    {
      icon: "🚩",
      title: "Не задают вопросов",
      description: "Хороший исполнитель пытается понять задачу. Если сразу называют цену без уточнений — либо шаблонный подход, либо неопытность.",
      tip: "Оцените, насколько глубоко разбираются в вашем бизнесе и задаче."
    },
  ];

  const checklist = [
    {
      category: "До начала работы",
      items: [
        "Есть договор с прописанным ТЗ, сроками и стоимостью",
        "Понятна схема оплаты (не 100% вперёд)",
        "Есть портфолио с живыми ссылками",
        "Понятно, кто будет делать проект (не субподряд)",
        "Обсудили риски и что будет при форс-мажоре",
      ]
    },
    {
      category: "В процессе работы",
      items: [
        "Регулярные отчёты о прогрессе",
        "Возможность посмотреть промежуточный результат",
        "Понятный способ связи (не только email раз в неделю)",
        "Возможность внести правки в рамках ТЗ",
        "Фиксация всех договорённостей письменно",
      ]
    },
    {
      category: "По завершении",
      items: [
        "Передача всех исходных кодов",
        "Доступы к хостингу, домену, сервисам",
        "Документация и инструкции",
        "Гарантийный период на исправление багов",
        "Возможность поддержки после запуска",
      ]
    },
  ];

  const questionsToAsk = [
    {
      question: "Кто конкретно будет работать над проектом?",
      why: "Важно знать, работаете с командой или фрилансером, не будет ли субподряда."
    },
    {
      question: "Покажите похожие проекты и расскажите о них",
      why: "Реальный опыт важнее красивых слов. Попросите контакты клиентов."
    },
    {
      question: "Как будет организована коммуникация?",
      why: "Понятный процесс = меньше проблем. Уточните частоту созвонов и отчётов."
    },
    {
      question: "Что входит в стоимость, а что нет?",
      why: "Избежите сюрпризов с доплатами за «не входило в базовую цену»."
    },
    {
      question: "Что будет, если мне не понравится результат?",
      why: "Узнайте про правки, гарантии и порядок приёмки работы."
    },
    {
      question: "Кому останутся права на код?",
      why: "Код должен быть вашей собственностью, без привязки к исполнителю."
    },
    {
      question: "Какие технологии используете и почему?",
      why: "Если не могут объяснить простым языком — плохой знак."
    },
    {
      question: "Есть ли гарантийный период?",
      why: "Адекватный срок — 1-3 месяца на исправление багов после запуска."
    },
  ];

  const comparisonTable = [
    { 
      criterion: "Стоимость", 
      freelancer: "Дешевле, но выше риски", 
      agency: "Дороже за счёт накладных расходов", 
      smallTeam: "Оптимальное соотношение цена/качество" 
    },
    { 
      criterion: "Коммуникация", 
      freelancer: "Напрямую, но один человек может быть занят", 
      agency: "Через менеджера, может быть «испорченный телефон»", 
      smallTeam: "Напрямую с исполнителями без посредников" 
    },
    { 
      criterion: "Гарантии", 
      freelancer: "Минимальные, зависят от репутации", 
      agency: "Формальные, но есть юрлицо", 
      smallTeam: "Личная ответственность + договор" 
    },
    { 
      criterion: "Скорость", 
      freelancer: "Может быть быстрее, если не занят", 
      agency: "Стандартизированные процессы", 
      smallTeam: "Гибкость без бюрократии" 
    },
    { 
      criterion: "Экспертиза", 
      freelancer: "Узкая, один человек не может всё", 
      agency: "Широкая, но не всегда глубокая", 
      smallTeam: "Сфокусированная на конкретных задачах" 
    },
  ];

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
            <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
              Полезная статья
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4">
              Как выбрать <span className="text-blue-600">подрядчика</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Честный гайд от тех, кто сам оказывает эти услуги. 
              Расскажем, на что обращать внимание и каких исполнителей избегать.
            </p>
          </motion.div>

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12 lg:mb-16 p-6 lg:p-8 rounded-2xl bg-blue-50 border border-blue-100"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">Зачем мы это пишем?</h2>
                <p className="text-slate-600">
                  Да, мы сами занимаемся веб-разработкой. Но нам выгодно, чтобы рынок был здоровым:
                  клиенты понимали, что покупают, а недобросовестные исполнители не портили репутацию всей отрасли.
                  Используйте этот гайд при выборе любого подрядчика — в том числе при оценке нас.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Red Flags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              🚩 Красные флаги
              <span className="text-sm font-normal text-slate-400">— когда лучше отказаться</span>
            </h2>
            
            <div className="space-y-3">
              {redFlags.map((flag, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                >
                  <button
                    onClick={() => setOpenSection(openSection === index ? null : index)}
                    className="w-full p-5 rounded-xl bg-red-50 border border-red-100 hover:bg-red-100/50 transition-all text-left"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{flag.icon}</span>
                        <span className="font-semibold text-slate-900">{flag.title}</span>
                      </div>
                      <motion.div
                        animate={{ rotate: openSection === index ? 180 : 0 }}
                        className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center"
                      >
                        <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openSection === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 bg-white border border-red-100 border-t-0 rounded-b-xl">
                          <p className="text-slate-600 mb-4">{flag.description}</p>
                          <div className="flex items-start gap-2 p-3 rounded-lg bg-emerald-50 border border-emerald-100">
                            <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                            <div>
                              <span className="text-sm font-medium text-emerald-700">Совет: </span>
                              <span className="text-sm text-emerald-700">{flag.tip}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              ✅ Чек-лист проверки подрядчика
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {checklist.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100"
                >
                  <h3 className="font-bold text-slate-900 mb-4">{section.category}</h3>
                  <div className="space-y-3">
                    {section.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded border-2 border-emerald-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Questions to ask */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              ❓ Вопросы, которые стоит задать
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {questionsToAsk.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.35 + index * 0.05 }}
                  className="p-5 rounded-xl bg-slate-50 border border-slate-200"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">{item.question}</h3>
                  <p className="text-sm text-slate-500">{item.why}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Comparison table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Сравнение: фрилансер vs агентство vs небольшая команда
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 text-left bg-slate-50 border border-slate-200 font-semibold text-slate-900">Критерий</th>
                    <th className="p-4 text-left bg-slate-50 border border-slate-200 font-semibold text-slate-900">Фрилансер</th>
                    <th className="p-4 text-left bg-slate-50 border border-slate-200 font-semibold text-slate-900">Агентство</th>
                    <th className="p-4 text-left bg-blue-50 border border-blue-200 font-semibold text-blue-700">Небольшая команда</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, index) => (
                    <tr key={index}>
                      <td className="p-4 border border-slate-200 font-medium text-slate-900">{row.criterion}</td>
                      <td className="p-4 border border-slate-200 text-slate-600 text-sm">{row.freelancer}</td>
                      <td className="p-4 border border-slate-200 text-slate-600 text-sm">{row.agency}</td>
                      <td className="p-4 border border-blue-200 bg-blue-50/50 text-blue-700 text-sm">{row.smallTeam}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-400 mt-4">
              * Да, мы — небольшая команда, и нам выгодно показать это в лучшем свете. 
              Но сравнение честное — у каждого варианта свои плюсы и минусы.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="p-8 lg:p-10 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Хотите проверить нас по этому списку?
                  </h3>
                  <p className="text-slate-600 max-w-xl">
                    Мы готовы ответить на все эти вопросы. Расскажите о задаче — 
                    и сами оцените, подходим ли мы вам.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/20 whitespace-nowrap"
                    data-cta="how-to-choose-consultation"
                  >
                    Обсудить проект
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center px-6 py-4 border border-slate-200 bg-white text-slate-700 font-medium rounded-xl hover:border-blue-400 hover:text-blue-600 transition-all whitespace-nowrap"
                  >
                    Смотреть портфолио
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
