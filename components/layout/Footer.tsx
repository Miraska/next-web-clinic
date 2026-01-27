"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ConsultationModal from "@/components/ui/ConsultationModal";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigationLinks = [
    { href: "/", label: "Главная" },
    { href: "/services", label: "Услуги" },
    { href: "/projects", label: "Кейсы" },
    { href: "/about", label: "О нас" },
    { href: "/contact", label: "Контакты" },
  ];

  const services = [
    { href: "/services/web-development", label: "Веб-разработка" },
    { href: "/services/crm-erp", label: "CRM/ERP системы" },
    { href: "/services/automation", label: "Автоматизация бизнеса" },
    { href: "/services/api-integrations", label: "API и интеграции" },
    { href: "/services/support", label: "Поддержка и развитие" },
  ];

  const helpfulLinks = [
    { href: "/how-to-choose", label: "Как выбрать подрядчика" },
    { href: "/privacy", label: "Политика конфиденциальности" },
    { href: "/terms", label: "Публичная оферта" },
  ];

  const socialLinks = [
    { 
      href: "https://t.me/webclinic",
      label: "Telegram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.02-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.18.94.12.78.878z"/>
        </svg>
      ),
    },
    {
      href: "https://github.com/webclinic",
      label: "GitHub",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
  ];

  return (
    <>
      <footer ref={footerRef} className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-12 lg:py-16">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Brand & Contact */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4 }}
                className="lg:col-span-4"
              >
                <Link href="/" className="inline-flex items-center gap-2 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">W</span>
                  </div>
                  <span className="text-xl font-bold text-slate-900">WebClinic</span>
                </Link>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Делаем сайты и веб-сервисы, которые реально помогают бизнесу.
                  Понятно, в срок и без сюрпризов.
                </p>
                <div className="space-y-3 mb-6">
                  <a
                    href="mailto:hello@webclinic.dev"
                    className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    hello@webclinic.dev
                  </a>
                  <a
                    href="tel:+74951234567"
                    className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    +7 (495) 123-45-67
                  </a>
                </div>
                
                {/* Social Links */}
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Navigation */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="lg:col-span-2"
              >
                <h3 className="text-slate-900 font-semibold mb-4">Навигация</h3>
                <nav className="space-y-2.5">
                  {navigationLinks.map((link) => (
                    <div key={link.href}>
                      <Link
                        href={link.href}
                        className="block text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </div>
                  ))}
                </nav>
              </motion.div>

              {/* Services */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="lg:col-span-3"
              >
                <h3 className="text-slate-900 font-semibold mb-4">Услуги</h3>
                <nav className="space-y-2.5">
                  {services.map((service) => (
                    <div key={service.href}>
                      <Link
                        href={service.href}
                        className="block text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        {service.label}
                      </Link>
                    </div>
                  ))}
                </nav>
              </motion.div>

              {/* Helpful */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="lg:col-span-3"
              >
                <h3 className="text-slate-900 font-semibold mb-4">Полезное</h3>
                <nav className="space-y-2.5">
                  {helpfulLinks.map((link) => (
                    <div key={link.href}>
                      <Link
                        href={link.href}
                        className="block text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </div>
                  ))}
                </nav>
              </motion.div>
            </div>
          </div>

          {/* CTA Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="py-6 border-t border-slate-200"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-5 rounded-xl bg-blue-50 border border-blue-100">
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-1">Есть вопрос или задача?</h4>
                <p className="text-slate-600 text-sm">Расскажите — ответим в течение нескольких часов</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all text-sm"
                  data-cta="footer-request"
                >
                  Оставить заявку
                </button>
                <a
                  href="https://t.me/webclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 border border-slate-200 text-slate-700 font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all text-sm"
                >
                  Telegram
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <div className="py-5 border-t border-slate-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="text-slate-500 text-sm">
                © {currentYear} WebClinic. Все права защищены.
              </div>
              <div className="flex gap-6 text-sm">
                <Link href="/privacy" className="text-slate-500 hover:text-slate-700 transition-colors">
                  Политика конфиденциальности
                </Link>
                <Link href="/terms" className="text-slate-500 hover:text-slate-700 transition-colors">
                  Оферта
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Consultation Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
