"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

export default function HomeFAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const faqCategories = [
    { id: "general", label: "Общие вопросы" },
    { id: "process", label: "Процесс работы" },
    { id: "payment", label: "Оплата и гарантии" },
    { id: "tech", label: "Техническое" },
  ];

  const [activeCategory, setActiveCategory] = useState("general");
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const faqItems: Record<string, Array<{ question: string; answer: string }>> = {
    general: [
      {
        question: "Какие проекты вы делаете?",
        answer: "Сайты любой сложности: от лендингов до крупных порталов. Интернет-магазины, CRM и ERP системы, веб-приложения, чат-боты для Telegram и WhatsApp, API и интеграции с различными сервисами. Если коротко — всё, что работает в браузере или связано с веб-технологиями."
      },
      {
        question: "Сколько стоит сделать сайт?",
        answer: "Зависит от сложности. Простой лендинг — от 50 000 ₽, сайт компании — от 150 000 ₽, интернет-магазин — от 250 000 ₽, CRM-система — от 400 000 ₽. Точную цену называем после обсуждения задачи — это бесплатно и ни к чему не обязывает."
      },
      {
        question: "Сколько времени занимает разработка?",
        answer: "Лендинг — 2-3 недели, корпоративный сайт — 4-8 недель, интернет-магазин — 2-3 месяца, сложные системы — от 3 месяцев. Сроки зависят от объёма функционала и скорости согласований с вашей стороны."
      },
      {
        question: "Работаете с регионами или только с Москвой?",
        answer: "Работаем удалённо с клиентами из любого города и страны. Созваниваемся по видеосвязи, общаемся в мессенджерах, показываем результаты онлайн. За годы работы убедились, что удалёнка не влияет на качество."
      },
    ],
    process: [
      {
        question: "Как начать работу с вами?",
        answer: "Напишите нам в Telegram, на почту или оставьте заявку на сайте. Расскажите о задаче — мы зададим уточняющие вопросы, предложим решение и посчитаем стоимость. Первая консультация бесплатная."
      },
      {
        question: "Нужно ли мне техническое задание?",
        answer: "Не обязательно. Достаточно описать задачу своими словами: что хотите получить, какие проблемы решить. Мы сами структурируем информацию и подготовим понятное ТЗ, которое утвердим вместе."
      },
      {
        question: "Как часто вы показываете результаты?",
        answer: "Работаем спринтами по 1-2 недели. После каждого спринта показываем демо и собираем обратную связь. Вы всегда знаете, на каком этапе проект, и можете вносить корректировки по ходу работы."
      },
      {
        question: "Что если мне не понравится результат?",
        answer: "На каждом этапе согласовываем результат перед тем, как идти дальше. Если что-то не так — исправляем до тех пор, пока не будет соответствовать ТЗ. Правки входят в стоимость проекта."
      },
      {
        question: "Можно ли вносить изменения в процессе?",
        answer: "Да, но в разумных пределах. Небольшие корректировки — без проблем. Если хотите добавить существенный функционал — обсудим дополнительно, оценим сроки и стоимость."
      },
    ],
    payment: [
      {
        question: "Как происходит оплата?",
        answer: "Работаем по схеме 50/50: половина суммы — предоплата перед началом работ, вторая половина — после приёмки готового проекта. Для крупных проектов возможна поэтапная оплата."
      },
      {
        question: "Работаете по договору?",
        answer: "Обязательно. Заключаем официальный договор, где прописаны все условия: что делаем, в какие сроки, за какую сумму. Это защита и для вас, и для нас."
      },
      {
        question: "Что входит в гарантию?",
        answer: "3 месяца после запуска бесплатно исправляем любые баги и ошибки в нашем коде. Не включает: изменения, вызванные вашими правками, проблемы на стороне хостинга или добавление нового функционала."
      },
      {
        question: "Можно ли вернуть деньги?",
        answer: "Если мы не начали работу — вернём предоплату полностью. Если работа уже идёт — вернём пропорционально невыполненному объёму. Все условия прописаны в договоре."
      },
    ],
    tech: [
      {
        question: "На чём вы делаете сайты?",
        answer: "Используем современные технологии: React, Next.js, TypeScript для фронтенда; Node.js, Python для бэкенда; PostgreSQL, MongoDB для баз данных. Выбираем стек под задачу, а не наоборот."
      },
      {
        question: "Получу ли я доступ к коду?",
        answer: "Да, передаём все исходники, доступы к репозиторию, серверам, базам данных. Код — ваша собственность. Вы не привязаны к нам и можете продолжить развитие с другой командой."
      },
      {
        question: "Помогаете с хостингом и доменом?",
        answer: "Да, подбираем хостинг под проект, помогаем зарегистрировать или перенести домен, настраиваем всё для корректной работы. Можем рекомендовать провайдеров или работать с вашими."
      },
      {
        question: "Делаете SEO-оптимизацию?",
        answer: "Базовая техническая SEO-оптимизация входит в каждый проект: правильная структура, мета-теги, скорость загрузки, адаптивность. Продвижение и контент-маркетинг — отдельная услуга."
      },
      {
        question: "Сайт будет работать на телефонах?",
        answer: "Обязательно. Все проекты делаем адаптивными — они корректно отображаются на любых устройствах: телефонах, планшетах, десктопах. Тестируем на реальных устройствах."
      },
    ],
  };

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
            Частые вопросы
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Ответы на <span className="text-blue-600">вопросы</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Собрали самые популярные вопросы. Не нашли свой — напишите нам.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setOpenItems([0]);
              }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* FAQ items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              {faqItems[activeCategory].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-slate-300 transition-colors"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-5 flex items-center justify-between text-left"
                  >
                    <span className="font-semibold text-slate-900 pr-4">{item.question}</span>
                    <motion.div
                      animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openItems.includes(index) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-0">
                          <div className="h-px bg-slate-100 mb-4" />
                          <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-white border border-slate-200">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-semibold text-slate-900">Остались вопросы?</p>
              <p className="text-sm text-slate-500">Напишите нам — ответим в течение пары часов</p>
            </div>
            <a
              href="https://t.me/webclinic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all text-sm whitespace-nowrap"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.02-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.18.94.12.78.878z"/>
              </svg>
              Написать в Telegram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
