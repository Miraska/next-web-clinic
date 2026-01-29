"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import ConsultationModal from "@/components/ui/ConsultationModal";
import { Mail, Phone, Github } from "lucide-react";

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
      <footer ref={footerRef} className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-12 lg:py-16">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Brand & Contact */}
              <div className="lg:col-span-4">
                <Link href="/" className="inline-flex items-center gap-2 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
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
                      <Mail className="w-4 h-4 text-blue-600" />
                    </div>
                    hello@webclinic.dev
                  </a>
                  <a
                    href="tel:+74951234567"
                    className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-blue-600" />
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
                      className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-colors"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="lg:col-span-2">
                <h3 className="text-slate-900 font-medium mb-4">Навигация</h3>
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
                <h3 className="text-slate-900 font-medium mb-4">Услуги</h3>
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
                <h3 className="text-slate-900 font-medium mb-4">Полезное</h3>
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

          {/* CTA Banner */}
          <div className="py-6 border-t border-slate-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-5 rounded-xl bg-blue-50 border border-blue-100">
              <div>
                <h4 className="text-lg font-medium text-slate-900 mb-1">Есть вопрос или задача?</h4>
                <p className="text-slate-600 text-sm">Расскажите — ответим в течение нескольких часов</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  data-cta="footer-request"
                >
                  Оставить заявку
                </button>
                <a
                  href="https://t.me/webclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 border border-slate-200 bg-white text-slate-700 font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors text-sm"
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
