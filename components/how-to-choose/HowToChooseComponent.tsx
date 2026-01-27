"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function HowToChooseComponent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const checklist = [
    {
      title: "Изучите портфолио",
      items: [
        "Есть ли проекты похожие на ваш?",
        "Можно ли проверить, что сайты из портфолио реально работают?",
        "Есть ли описание задач и результатов, а не просто картинки?",
      ],
    },
    {
      title: "Проверьте коммуникацию",
      items: [
        "Как быстро отвечают на первое сообщение?",
        "Объясняют ли сложные вещи простыми словами?",
        "Задают ли уточняющие вопросы о вашей задаче?",
      ],
    },
    {
      title: "Уточните условия работы",
      items: [
        "Работают ли по договору?",
        "Называют ли примерную цену сразу или только после ТЗ?",
        "Какая схема оплаты? (100% предоплата — красный флаг)",
      ],
    },
    {
      title: "Спросите про процесс",
      items: [
        "Как часто показывают промежуточные результаты?",
        "Можно ли вносить изменения в процессе?",
        "Что будет после запуска? Есть ли поддержка?",
      ],
    },
    {
      title: "Проверьте гарантии",
      items: [
        "Есть ли гарантийный период на исправление ошибок?",
        "Передают ли код и доступы?",
        "Что если подрядчик исчезнет?",
      ],
    },
  ];

  const redFlags = [
    {
      flag: "Обещают сделать всё за 3 дня",
      why: "Качественная работа требует времени. Либо это шаблон, либо будут проблемы.",
    },
    {
      flag: "Требуют 100% предоплаты",
      why: "У вас не будет рычага влияния, если что-то пойдёт не так.",
    },
    {
      flag: "Не задают вопросов о задаче",
      why: "Значит, не понимают что делать или не заинтересованы в качестве.",
    },
    {
      flag: "Не показывают промежуточные результаты",
      why: "Вы узнаете о проблемах только в конце, когда уже поздно.",
    },
    {
      flag: "Не работают по договору",
      why: "Никаких гарантий. При проблемах вы останетесь ни с чем.",
    },
    {
      flag: "Слишком дёшево",
      why: "Либо неопытные, либо будут докручивать цену в процессе.",
    },
  ];

  const questions = [
    "Сколько времени займёт разработка?",
    "Что входит в названную цену?",
    "Как я буду видеть прогресс работы?",
    "Что если мне не понравится результат?",
    "Кто будет владеть кодом и дизайном?",
    "Есть ли гарантия после запуска?",
    "Как я смогу вносить изменения в сайт?",
    "Что если мне понадобится доработка позже?",
  ];

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
            Полезное
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4">
            Как выбрать <span className="text-blue-600">подрядчика</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Чек-лист и советы, которые помогут найти надёжного исполнителя 
            и избежать типичных проблем.
          </p>
        </motion.div>

        {/* Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Чек-лист проверки</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {checklist.map((section, index) => (
              <div key={index} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                      <div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Red Flags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Красные флаги</h2>
          <div className="p-6 lg:p-8 rounded-2xl bg-red-50 border border-red-100">
            <p className="text-slate-700 mb-6">
              Если вы видите что-то из этого — подумайте дважды перед тем, как работать с этим подрядчиком.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {redFlags.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900 mb-1">{item.flag}</div>
                    <div className="text-sm text-slate-600">{item.why}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Questions to Ask */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Вопросы, которые стоит задать</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {questions.map((question, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-blue-50 border border-blue-100">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {index + 1}
                </span>
                <span className="text-slate-700">{question}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto p-6 lg:p-8 rounded-2xl bg-emerald-50 border border-emerald-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Хотите работать с нами?
            </h3>
            <p className="text-slate-600 mb-6">
              Мы соответствуем всем пунктам этого чек-листа.
              Проверьте сами — расскажите о задаче.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-all duration-200 shadow-sm"
              data-cta="how-to-choose-contact"
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
