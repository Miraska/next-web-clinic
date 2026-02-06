"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  Clock,
  Shield,
  Lock,
  Check,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

// Contact methods configuration
const contactMethodsConfig = [
  { id: "telegram", label: "Telegram", icon: MessageCircle, placeholder: "@username" },
  { id: "phone", label: "Телефон", icon: Phone, placeholder: "+7 (___) ___-__-__" },
  { id: "email", label: "Email", icon: Mail, placeholder: "email@example.com" },
];

export default function HomeFinalCTASection() {
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
      source: "final-cta",
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

  const benefits = [
    { text: "Консультация по проекту" },
    { text: "Индивидуальный расчёт" },
    { text: "Работа по договору" },
    { text: "Ответ в рабочее время" },
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
      accent: "blue",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "hello@webclinic.dev",
      href: "mailto:hello@webclinic.dev",
      accent: "teal",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Телефон",
      value: "+7 (495) 123-45-67",
      href: "tel:+74951234567",
      accent: "blue",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Office"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/90" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-teal-900/20" />
      </div>
      
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-blue-400 text-sm font-medium mb-4">
            Связаться с нами
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Связаться
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Оставьте заявку или свяжитесь напрямую. Расскажите о задаче — мы подготовим предложение.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Form */}
          <div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20">
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Заявка отправлена</h3>
                  <p className="text-slate-300 mb-6">Мы свяжемся с вами в рабочее время.</p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-blue-400 font-medium hover:text-blue-300 transition-colors"
                  >
                    Отправить ещё одну заявку
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-teal-400" />
                    Быстрая заявка
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Ваше имя <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Как к вам обращаться?"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none transition-all"
                      />
                    </div>

                    {/* Contact Method Selection */}
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Как с вами связаться? <span className="text-red-400">*</span>
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
                                  ? "bg-blue-500/30 border-blue-400/50 text-blue-300"
                                  : "bg-white/5 border-white/20 text-slate-400 hover:border-white/30"
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
                        required
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder={contactMethodsConfig.find(m => m.id === formData.contactMethod)?.placeholder || ""}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none transition-all"
                      />
                    </div>

                    {/* Task Description */}
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Опишите задачу
                      </label>
                      <textarea
                        value={formData.task}
                        onChange={(e) => setFormData({ ...formData, task: e.target.value })}
                        placeholder="Расскажите подробнее о вашем проекте, целях и пожеланиях..."
                        rows={4}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none transition-all resize-none"
                      />
                    </div>

                    {submitError && (
                      <div className="p-3 rounded-xl bg-red-500/20 border border-red-400/50 text-red-100 text-sm">
                        {submitError}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-600/30"
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
                      <Link href="/privacy" className="text-blue-400 hover:underline">
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
                  className="flex items-center gap-2 text-sm text-slate-300"
                >
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    index % 2 === 0 ? "bg-blue-500/30" : "bg-teal-500/30"
                  }`}>
                    <Check className={`w-3 h-3 ${index % 2 === 0 ? "text-blue-400" : "text-teal-400"}`} />
                  </div>
                  {benefit.text}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-xl font-semibold text-white mb-2">Или напишите напрямую</h3>
              <p className="text-slate-400">Выберите удобный способ связи</p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const isBlue = method.accent === "blue";
                return (
                  <a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all group"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isBlue 
                        ? "bg-blue-500/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white" 
                        : "bg-teal-500/20 text-teal-400 group-hover:bg-teal-600 group-hover:text-white"
                    }`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-white">{method.label}</span>
                        {method.description && (<span className="text-xs px-2 py-0.5 bg-white/10 rounded-full text-slate-400 border border-white/10">
                          {method.description}
                        </span>)}
                      </div>
                      <span className="text-slate-300">{method.value}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>

            {/* Quick info */}
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Время работы</h4>
                  <p className="text-sm text-slate-400">
                    Пн-Пт: 10:00 – 19:00 (МСК)<br />
                    В другое время — ответим на следующий рабочий день
                  </p>
                </div>
              </div>
            </div>

            {/* Trust note */}
            <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-400" />
                Безопасно
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-teal-400" />
                Данные защищены
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-400" />
                Без спама
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
