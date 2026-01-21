"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { href: "/", label: "Главная" },
    { href: "/services", label: "Услуги" },
    { href: "/projects", label: "Проекты" },
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
    {
      href: "https://linkedin.com/company/webclinic",
      label: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#0a0e17] border-t border-[#1f2937] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff88]/30 to-transparent" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand & Contact */}
            <div className="lg:col-span-5">
              <Link href="/" className="inline-block mb-6 group">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-3xl font-bold tracking-tight"
                >
                  <span className="text-white">Web</span>
                  <span className="text-[#00ff88] group-hover:text-glow-green transition-all">Clinic</span>
                </motion.div>
              </Link>
              <p className="text-white/60 leading-relaxed mb-8 max-w-md">
                Разрабатываем надёжные веб-системы и автоматизируем бизнес-процессы. 
                Полный цикл разработки под ключ для растущего бизнеса.
              </p>
              <div className="space-y-3 mb-8">
                <a
                  href="mailto:hello@webclinic.dev"
                  className="flex items-center gap-3 text-white/80 hover:text-[#00ff88] transition-colors duration-300 group"
                >
                  <svg className="w-5 h-5 text-[#00ff88]/70 group-hover:text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  hello@webclinic.dev
                </a>
                <a
                  href="tel:+74951234567"
                  className="flex items-center gap-3 text-white/80 hover:text-[#00ff88] transition-colors duration-300 group"
                >
                  <svg className="w-5 h-5 text-[#00ff88]/70 group-hover:text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +7 (495) 123-45-67
                </a>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-[#0f1520] border border-[#1f2937] flex items-center justify-center text-white/60 hover:text-[#00ff88] hover:border-[#00ff88]/30 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-3">
              <h3 className="text-white font-semibold mb-6">Навигация</h3>
              <nav className="space-y-3">
                {navigationLinks.map((link) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      className="block text-white/60 hover:text-[#00ff88] hover:translate-x-1 transition-all duration-300"
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="lg:col-span-4">
              <h3 className="text-white font-semibold mb-6">Услуги</h3>
              <nav className="space-y-3">
                {services.map((service) => (
                  <div key={service.href}>
                    <Link
                      href={service.href}
                      className="block text-white/60 hover:text-[#00ff88] hover:translate-x-1 transition-all duration-300"
                    >
                      {service.label}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="py-8 border-t border-[#1f2937]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-6 rounded-2xl bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 border border-[#00ff88]/20">
            <div>
              <h4 className="text-lg font-semibold text-white mb-1">Готовы начать проект?</h4>
              <p className="text-white/60 text-sm">Первая консультация бесплатно</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#00ff88] text-[#0a0e17] font-semibold rounded-full hover:bg-[#00cc6a] transition-all duration-300 hover:scale-105 group"
            >
              Обсудить проект
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[#1f2937]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-white/40 text-sm">
              © {currentYear} WebClinic Solutions. Все права защищены.
            </div>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-white/40 hover:text-white/60 transition-colors duration-300"
              >
                Политика конфиденциальности
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
