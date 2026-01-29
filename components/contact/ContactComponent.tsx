"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { Mail, MessageCircle, Phone, ArrowRight, Lock, FileText, Check, Clock } from "lucide-react";

export default function ContactComponent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      message: "",
    });

    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const projectTypes = [
    { value: "", label: "Выберите тип проекта" },
    { value: "landing", label: "Лендинг" },
    { value: "website", label: "Сайт компании" },
    { value: "ecommerce", label: "Интернет-магазин" },
    { value: "webapp", label: "Веб-приложение" },
    { value: "crm", label: "CRM / ERP система" },
    { value: "chatbot", label: "Чат-бот" },
    { value: "integration", label: "Интеграция / API" },
    { value: "other", label: "Другое" },
  ];

  const budgetOptions = [
    { value: "", label: "Примерный бюджет" },
    { value: "50-100k", label: "50 000 – 100 000 ₽" },
    { value: "100-250k", label: "100 000 – 250 000 ₽" },
    { value: "250-500k", label: "250 000 – 500 000 ₽" },
    { value: "500k+", label: "Более 500 000 ₽" },
    { value: "unknown", label: "Затрудняюсь оценить" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@webclinic.dev",
      href: "mailto:hello@webclinic.dev",
      description: "Ответим в течение рабочего дня",
    },
    {
      icon: MessageCircle,
      label: "Telegram",
      value: "@webclinic",
      href: "https://t.me/webclinic",
      description: "Быстрый ответ",
    },
    {
      icon: Phone,
      label: "Телефон",
      value: "+7 (495) 123-45-67",
      href: "tel:+74951234567",
      description: "Пн-Пт: 10:00-19:00 МСК",
    },
  ];

  const faqItems = [
    {
      q: "Сколько стоит консультация?",
      a: "Первая консультация и оценка проекта — бесплатно. Мы обсудим вашу задачу и предложим решение."
    },
    {
      q: "Как быстро вы отвечаете?",
      a: "В рабочее время — обычно в течение 2-4 часов. В другое время — на следующий рабочий день."
    },
    {
      q: "Можно созвониться?",
      a: "Да, предпочитаем созвоны для обсуждения проекта. Напишите — договоримся о времени."
    },
    {
      q: "Работаете с регионами?",
      a: "Да, работаем удалённо с клиентами из любого города. Все вопросы решаем онлайн."
    },
    {
      q: "Нужно ли ТЗ?",
      a: "Не обязательно. Достаточно описать задачу своими словами — мы поможем структурировать."
    },
  ];

  const trustBadges = [
    { icon: Lock, text: "Данные защищены" },
    { icon: FileText, text: "Работаем по договору" },
    { icon: Check, text: "Без спама" },
  ];

  return (
    <section ref={sectionRef} className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-white min-h-screen">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            Контакты
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4">
            Обсудим <span className="text-blue-600">проект?</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Расскажите о вашей задаче — мы свяжемся в течение рабочего дня.
            Консультация и оценка проекта бесплатны.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 lg:p-8 rounded-2xl bg-white border border-slate-200 shadow-lg">
              {submitStatus === "success" ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Заявка отправлена!</h3>
                  <p className="text-slate-600 mb-6">Мы свяжемся с вами в ближайшее время.</p>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="text-blue-600 font-medium hover:text-blue-700"
                  >
                    Отправить ещё одну заявку
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
                    </span>
                    Оставить заявку
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Имя <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                          placeholder="Как к вам обращаться?"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                          placeholder="email@company.ru"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Телефон или Telegram
                        </label>
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                          placeholder="+7... или @username"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Тип проекта
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                        >
                          {projectTypes.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Примерный бюджет
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                      >
                        {budgetOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Опишите задачу <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors resize-none"
                        placeholder="Расскажите, что хотите сделать. Чем подробнее — тем точнее оценим."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-8 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                      data-cta="contact-form-submit"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Отправка...
                        </>
                      ) : (
                        <>
                          Отправить заявку
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-slate-400 text-center">
                      Нажимая кнопку, вы соглашаетесь с{" "}
                      <Link href="/privacy" className="text-blue-600 hover:underline">
                        политикой конфиденциальности
                      </Link>
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Contact Info & FAQ */}
          <div className="lg:col-span-5">
            <div className="space-y-5">
              {/* Quick Contact */}
              <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Быстрая связь</h3>
                <div className="space-y-3">
                  {contactInfo.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={index}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 p-3 rounded-xl bg-white border border-blue-100 hover:border-blue-200 hover:shadow-sm transition-all group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-slate-400">{item.label}</div>
                          <div className="text-slate-900 font-medium">{item.value}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Response time */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-slate-900">Время ответа</span>
                </div>
                <p className="text-slate-600 text-sm">
                  Обычно отвечаем в течение 2-4 часов в рабочее время (Пн-Пт, 10:00-19:00 МСК).
                </p>
              </div>

              {/* Mini FAQ */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Частые вопросы</h3>
                <div className="space-y-4">
                  {faqItems.map((item, index) => (
                    <div key={index} className="pb-4 border-b border-slate-200 last:border-0 last:pb-0">
                      <div className="text-sm font-medium text-slate-900 mb-1">{item.q}</div>
                      <div className="text-sm text-slate-500">{item.a}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 justify-center">
                {trustBadges.map((badge, index) => {
                  const IconComponent = badge.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600">
                      <IconComponent className="w-4 h-4 text-blue-600" />
                      <span>{badge.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
