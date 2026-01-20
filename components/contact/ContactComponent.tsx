"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ContactComponent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

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
      company: "",
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

  const budgetOptions = [
    { value: "", label: "Выберите бюджет" },
    { value: "150-300k", label: "150 000 – 300 000 ₽" },
    { value: "300-500k", label: "300 000 – 500 000 ₽" },
    { value: "500k-1m", label: "500 000 – 1 000 000 ₽" },
    { value: "1m+", label: "Более 1 000 000 ₽" },
    { value: "unknown", label: "Затрудняюсь оценить" },
  ];

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "hello@webclinic.dev",
      href: "mailto:hello@webclinic.dev",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Телефон",
      value: "+7 (495) 123-45-67",
      href: "tel:+74951234567",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "Время работы",
      value: "Пн–Пт: 10:00 – 19:00 (МСК)",
      href: null,
    },
  ];

  return (
    <section ref={sectionRef} className="pt-32 pb-24 lg:pb-32 bg-[#0a0e17] min-h-screen relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 grid-pattern-animated opacity-20" />
      <div className="orb orb-green w-[600px] h-[600px] -top-64 -right-64 opacity-20" />
      <div className="orb orb-cyan w-[400px] h-[400px] bottom-0 -left-48 opacity-15" />
      <div className="orb orb-purple w-[300px] h-[300px] top-1/2 right-0 opacity-10" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-[#00ff88]/10 text-[#00ff88] text-sm font-medium mb-6"
          >
            Контакты
          </motion.span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Обсудим <span className="text-[#00ff88] text-glow-green">проект</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/60 font-light leading-relaxed max-w-3xl mx-auto">
            Расскажите о вашей задаче — мы свяжемся в течение рабочего дня.
            Консультация и оценка проекта бесплатны.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-8 lg:p-10 rounded-2xl bg-[#0f1520] border border-[#1f2937] gradient-border">
              <h2 className="text-xl lg:text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                Оставить заявку
              </h2>

              {submitStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-[#00ff88]/20 flex items-center justify-center mx-auto mb-6 glow-green">
                    <svg className="w-10 h-10 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Заявка отправлена!</h3>
                  <p className="text-white/60">Мы свяжемся с вами в ближайшее время.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Имя *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#0a0e17] border border-[#1f2937] text-white placeholder-white/30 focus:outline-none focus:border-[#00ff88] focus:shadow-[0_0_20px_rgba(0,255,136,0.2)] transition-all duration-300"
                        placeholder="Как к вам обращаться?"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#0a0e17] border border-[#1f2937] text-white placeholder-white/30 focus:outline-none focus:border-[#00ff88] focus:shadow-[0_0_20px_rgba(0,255,136,0.2)] transition-all duration-300"
                        placeholder="email@company.ru"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0a0e17] border border-[#1f2937] text-white placeholder-white/30 focus:outline-none focus:border-[#00ff88] focus:shadow-[0_0_20px_rgba(0,255,136,0.2)] transition-all duration-300"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Компания
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0a0e17] border border-[#1f2937] text-white placeholder-white/30 focus:outline-none focus:border-[#00ff88] focus:shadow-[0_0_20px_rgba(0,255,136,0.2)] transition-all duration-300"
                        placeholder="Название компании"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Примерный бюджет
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0e17] border border-[#1f2937] text-white focus:outline-none focus:border-[#00ff88] focus:shadow-[0_0_20px_rgba(0,255,136,0.2)] transition-all duration-300"
                    >
                      {budgetOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Опишите задачу *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0e17] border border-[#1f2937] text-white placeholder-white/30 focus:outline-none focus:border-[#00ff88] focus:shadow-[0_0_20px_rgba(0,255,136,0.2)] transition-all duration-300 resize-none"
                      placeholder="Расскажите, что хотите сделать. Чем подробнее — тем точнее оценим."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 bg-[#00ff88] text-[#0a0e17] font-semibold rounded-xl hover:bg-[#00cc6a] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group hover:shadow-[0_0_30px_rgba(0,255,136,0.4)]"
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
                        <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-white/40 text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="space-y-6">
              {/* Contact Details */}
              <div className="p-8 rounded-2xl bg-[#0f1520] border border-[#1f2937] card-hover">
                <h2 className="text-xl font-bold text-white mb-6">Контакты</h2>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#00ff88]/10 flex items-center justify-center text-[#00ff88] flex-shrink-0 group-hover:bg-[#00ff88]/20 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm text-white/50 mb-1">{item.label}</div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-white hover:text-[#00ff88] transition-colors duration-300"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-white">{item.value}</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Response */}
              <div className="p-8 rounded-2xl bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 border border-[#00ff88]/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#00ff88] animate-pulse glow-green" />
                  <span className="text-sm font-medium text-[#00ff88]">Быстрый ответ</span>
                </div>
                <p className="text-white/70 text-sm">
                  Обычно отвечаем в течение 2-4 часов в рабочее время. 
                  Для срочных вопросов звоните по телефону.
                </p>
              </div>

              {/* What Happens Next */}
              <div className="p-8 rounded-2xl bg-[#0f1520] border border-[#1f2937]">
                <h3 className="text-lg font-bold text-white mb-4">Что дальше?</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", text: "Свяжемся с вами для уточнения деталей" },
                    { step: "2", text: "Проведём бесплатную консультацию" },
                    { step: "3", text: "Подготовим коммерческое предложение" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00ff88] to-[#00d4ff] text-[#0a0e17] text-sm font-bold flex items-center justify-center">
                        {item.step}
                      </span>
                      <span className="text-white/70 text-sm">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Telegram link */}
              <a
                href="https://t.me/webclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 rounded-xl bg-[#0088cc]/10 border border-[#0088cc]/20 text-[#0088cc] hover:bg-[#0088cc]/20 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.02-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.18.94.12.78.878z"/>
                </svg>
                <span className="font-medium">Написать в Telegram</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
