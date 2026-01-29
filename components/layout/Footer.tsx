"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import ConsultationModal from "@/components/ui/ConsultationModal";
import { Mail, Phone, Github, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
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
      icon: <Github className="w-5 h-5" />,
    },
  ];

  return (
    <>
      <footer ref={footerRef} className="bg-slate-50 border-t border-slate-200 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/30 to-transparent pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-12 lg:py-16">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Brand & Contact */}
              <div className="lg:col-span-4">
                <Link href="/" className="inline-flex items-center gap-2 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg shadow-blue-600/20">
                    <span className="text-white font-bold text-lg">W</span>
                  </div>
                  <span className="text-xl font-bold text-slate-900">WebClinic</span>
                </Link>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Разработка сайтов и веб-сервисов для бизнеса.
                  Работаем по договору.
                </p>
                <div className="space-y-3 mb-6">
                  <a
                    href="mailto:hello@webclinic.dev"
                    className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:border-blue-200 group-hover:bg-blue-50 transition-all">
                      <Mail className="w-4 h-4 text-blue-600" />
                    </div>
                    hello@webclinic.dev
                  </a>
                  <a
                    href="tel:+74951234567"
                    className="flex items-center gap-3 text-slate-600 hover:text-teal-600 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:border-teal-200 group-hover:bg-teal-50 transition-all">
                      <Phone className="w-4 h-4 text-teal-600" />
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
                      className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="lg:col-span-2">
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
              </div>

              {/* Services */}
              <div className="lg:col-span-3">
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
              </div>

              {/* Helpful */}
              <div className="lg:col-span-3">
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
              </div>
            </div>
          </div>

          {/* CTA Banner - Enhanced */}
          <div className="py-6 border-t border-slate-200 relative">
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-6 lg:p-8 rounded-2xl overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/20 rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative">
                <h4 className="text-xl font-bold text-white mb-1">Есть вопрос?</h4>
                <p className="text-blue-100">Свяжитесь с нами для обсуждения проекта</p>
              </div>
              <div className="relative flex gap-3">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all hover:shadow-lg text-sm"
                  data-cta="footer-request"
                >
                  Связаться
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <a
                  href="https://t.me/webclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-sm"
                >
                  Telegram
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-5 border-t border-slate-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="text-slate-500 text-sm">
                © {currentYear} WebClinic
              </div>
              <div className="flex gap-6 text-sm">
                <Link href="/privacy" className="text-slate-500 hover:text-blue-600 transition-colors">
                  Политика конфиденциальности
                </Link>
                <Link href="/terms" className="text-slate-500 hover:text-blue-600 transition-colors">
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
