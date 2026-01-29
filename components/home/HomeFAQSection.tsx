"use client";
import { useRef, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function HomeFAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            Частые вопросы
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Ответы на <span className="text-blue-600">вопросы</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Собрали самые популярные вопросы. Не нашли свой — напишите нам.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setOpenItems([0]);
              }}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ items */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {faqItems[activeCategory].map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden hover:border-slate-300 transition-colors"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-5 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-slate-900 pr-4">{item.question}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center transition-transform ${
                    openItems.includes(index) ? "rotate-180" : ""
                  }`}>
                    <ChevronDown className="w-4 h-4 text-slate-500" />
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-5 pb-5 pt-0">
                    <div className="h-px bg-slate-200 mb-4" />
                    <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-center sm:text-left">
              <p className="font-medium text-slate-900">Остались вопросы?</p>
              <p className="text-sm text-slate-500">Напишите нам — ответим в течение пары часов</p>
            </div>
            <a
              href="https://t.me/webclinic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm whitespace-nowrap"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.02-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.18.94.12.78.878z"/>
              </svg>
              Написать в Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
