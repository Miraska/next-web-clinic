"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Mail, MessageCircle, Phone, ArrowRight, Lock, FileText, Check, Clock } from "lucide-react";

// Contact methods configuration
const contactMethodsConfig = [
  { id: "telegram", label: "Telegram", icon: MessageCircle, placeholder: "@username" },
  { id: "phone", label: "Телефон", icon: Phone, placeholder: "+7 (___) ___-__-__" },
  { id: "email", label: "Email", icon: Mail, placeholder: "email@example.com" },
];

export default function ContactComponent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    contactMethod: "telegram",
    contact: "",
    task: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    const { submitContact } = await import("@/lib/submit-contact");
    const result = await submitContact({
      source: "contact",
      name: formData.name.trim(),
      contactMethod: formData.contactMethod,
      contact: formData.contact.trim(),
      task: formData.task.trim() || undefined,
    });

    setIsSubmitting(false);
    if (!result.ok) {
      setSubmitError(result.error);
      return;
    }
    setIsSuccess(true);
    setFormData({ name: "", contactMethod: "telegram", contact: "", task: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@webclinic.dev",
      href: "mailto:hello@webclinic.dev",
      description: "Ответим в течение рабочего дня",
      accent: "blue",
    },
    {
      icon: MessageCircle,
      label: "Telegram",
      value: "@webclinic",
      href: "https://t.me/webclinic",
      description: "Быстрый ответ",
      accent: "teal",
    },
    {
      icon: Phone,
      label: "Телефон",
      value: "+7 (495) 123-45-67",
      href: "tel:+74951234567",
      description: "Пн-Пт: 10:00-19:00 МСК",
      accent: "blue",
    },
  ];

  const faqItems = [
    {
      q: "Как определяется стоимость?",
      a: "Стоимость рассчитывается индивидуально после анализа задачи и формирования технического задания."
    },
    {
      q: "Как быстро вы отвечаете?",
      a: "В рабочее время ответ обычно в течение нескольких часов. В нерабочее время — на следующий рабочий день."
    },
    {
      q: "Возможен ли созвон?",
      a: "Да, для детального обсуждения проекта проводим видеозвонки. Напишите для согласования времени."
    },
    {
      q: "Работаете ли удалённо?",
      a: "Да, работаем с клиентами из любых регионов. Коммуникация ведётся онлайн."
    },
    {
      q: "Требуется ли готовое ТЗ?",
      a: "Не обязательно. Достаточно описать задачу — мы поможем сформировать техническое задание."
    },
  ];

  const trustBadges = [
    { icon: Lock, text: "Данные защищены", accent: "blue" },
    { icon: FileText, text: "Работаем по договору", accent: "teal" },
    { icon: Check, text: "Без спама", accent: "blue" },
  ];

  return (
    <section ref={sectionRef} className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-white min-h-screen">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100/50 text-blue-600 text-sm font-medium mb-4">
            Контакты
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4">
            Связаться{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">с нами</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Расскажите о вашей задаче — мы свяжемся с вами в рабочее время для обсуждения деталей.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className={`lg:col-span-7 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="p-6 lg:p-8 rounded-2xl bg-white border border-slate-200 shadow-xl">
              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Заявка отправлена</h3>
                  <p className="text-slate-600 mb-6">Мы свяжемся с вами в рабочее время.</p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                  >
                    Отправить ещё одну заявку
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-blue-600 to-blue-800"></span>
                    </span>
                    Оставить заявку
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Ваше имя <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all"
                        placeholder="Как к вам обращаться?"
                      />
                    </div>

                    {/* Contact Method Selection */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Как с вами связаться? <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-2 mb-3">
                        {contactMethodsConfig.map((method) => {
                          const Icon = method.icon;
                          const isSelected = formData.contactMethod === method.id;
                          return (
                            <button
                              key={method.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, contactMethod: method.id, contact: "" })}
                              className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                                isSelected
                                  ? "bg-blue-50 border-blue-300 text-blue-700"
                                  : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                              }`}
                            >
                              <Icon className="w-4 h-4" />
                              <span className="hidden sm:inline">{method.label}</span>
                            </button>
                          );
                        })}
                      </div>
                      <input
                        type={formData.contactMethod === "email" ? "email" : "text"}
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all"
                        placeholder={contactMethodsConfig.find(m => m.id === formData.contactMethod)?.placeholder || ""}
                      />
                    </div>

                    {/* Task Description — как на главной */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Опишите задачу
                      </label>
                      <textarea
                        name="task"
                        value={formData.task}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                        placeholder="Расскажите подробнее о вашем проекте, целях и пожеланиях..."
                      />
                    </div>

                    {submitError && (
                      <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                        {submitError}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-600/30"
                      data-cta="contact-form-submit"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Отправляем...
                        </>
                      ) : (
                        <>
                          Отправить заявку
                          <ArrowRight className="w-4 h-4" />
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
          <div className={`lg:col-span-5 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-5">
              {/* Quick Contact */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100/50">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Быстрая связь</h3>
                <div className="space-y-3">
                  {contactInfo.map((item, index) => {
                    const IconComponent = item.icon;
                    const isBlue = item.accent === "blue";
                    return (
                      <a
                        key={index}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 p-3 rounded-xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all group"
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isBlue 
                            ? "bg-blue-100 group-hover:bg-blue-600" 
                            : "bg-teal-100 group-hover:bg-teal-600"
                        }`}>
                          <IconComponent className={`w-5 h-5 transition-colors ${
                            isBlue 
                              ? "text-blue-600 group-hover:text-white" 
                              : "text-teal-600 group-hover:text-white"
                          }`} />
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
                  <Clock className="w-5 h-5 text-teal-600" />
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
                  const isBlue = badge.accent === "blue";
                  return (
                    <div key={index} className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm text-slate-600">
                      <IconComponent className={`w-4 h-4 ${isBlue ? "text-blue-600" : "text-teal-600"}`} />
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
