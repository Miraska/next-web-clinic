"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  Clock,
  Shield,
  Lock,
  Check,
  ArrowRight,
} from "lucide-react";

export default function HomeFinalCTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    task: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", contact: "", task: "" });
  };

  const benefits = [
    { text: "Бесплатная консультация" },
    { text: "Оценка проекта за 2-3 дня" },
    { text: "Честная цена без сюрпризов" },
    { text: "Ответим в течение 2 часов" },
  ];

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.02-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.18.94.12.78.878z"/>
        </svg>
      ),
      label: "Telegram",
      value: "@webclinic",
      href: "https://t.me/webclinic",
      description: "Быстрый ответ",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "hello@webclinic.dev",
      href: "mailto:hello@webclinic.dev",
      description: "Для подробных запросов",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Телефон",
      value: "+7 (495) 123-45-67",
      href: "tel:+74951234567",
      description: "Пн-Пт: 10:00-19:00",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            Следующий шаг
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Готовы начать? <span className="text-blue-600">Обсудим проект</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Оставьте заявку или напишите напрямую — расскажите о задаче, и мы предложим решение с точной стоимостью.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Form */}
          <div>
            <div className="bg-slate-50 rounded-2xl p-6 lg:p-8 border border-slate-200">
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <Check className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Заявка отправлена!</h3>
                  <p className="text-slate-600 mb-6">Мы свяжемся с вами в течение 2 часов в рабочее время.</p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-blue-600 font-medium hover:text-blue-700"
                  >
                    Отправить ещё одну заявку
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    Быстрая заявка
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Как вас зовут? <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Иван Иванов"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Telegram или телефон <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder="@username или +7..."
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Кратко о задаче
                      </label>
                      <textarea
                        value={formData.task}
                        onChange={(e) => setFormData({ ...formData, task: e.target.value })}
                        placeholder="Нужен сайт для..., хочу автоматизировать..."
                        rows={4}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      data-cta="final-cta-submit"
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

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-slate-600"
                >
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  {benefit.text}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Или напишите напрямую</h3>
              <p className="text-slate-500">Выберите удобный способ связи</p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-200 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-slate-900">{method.label}</span>
                      <span className="text-xs px-2 py-0.5 bg-white rounded-full text-slate-500 border border-slate-200">{method.description}</span>
                    </div>
                    <span className="text-slate-600">{method.value}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </a>
              ))}
            </div>

            {/* Quick info */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-1">Время работы</h4>
                  <p className="text-sm text-slate-600">
                    Пн-Пт: 10:00 – 19:00 (МСК)<br />
                    В другое время — ответим на следующий рабочий день
                  </p>
                </div>
              </div>
            </div>

            {/* Trust note */}
            <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-600" />
                Безопасно
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-blue-600" />
                Данные защищены
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-600" />
                Без спама
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
