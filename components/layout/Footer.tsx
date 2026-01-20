import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { href: "/services", label: "Услуги" },
    { href: "/about", label: "О нас" },
    { href: "/contact", label: "Контакты" },
  ];

  const services = [
    "Веб-разработка",
    "CRM/ERP системы",
    "Автоматизация бизнеса",
    "API и интеграции",
  ];

  return (
    <footer className="bg-[#0a0e17] border-t border-[#1f2937]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand & Contact */}
            <div className="lg:col-span-5">
              <Link href="/" className="inline-block mb-6">
                <div className="text-3xl font-bold tracking-tight">
                  <span className="text-white">Web</span>
                  <span className="text-[#00ff88]">Clinic</span>
                </div>
              </Link>
              <p className="text-white/60 leading-relaxed mb-8 max-w-md">
                Разрабатываем надёжные веб-системы и автоматизируем бизнес-процессы. 
                Полный цикл разработки под ключ для растущего бизнеса.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:hello@WebClinic-solutions.dev"
                  className="block text-lg text-white/80 hover:text-[#00ff88] transition-colors duration-300"
                >
                  hello@WebClinic-solutions.dev
                </a>
                <a
                  href="tel:+77001234567"
                  className="block text-lg text-white/80 hover:text-[#00ff88] transition-colors duration-300"
                >
                  +7 (700) 123-45-67
                </a>
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
                      className="block text-white/60 hover:text-[#00ff88] transition-colors duration-300"
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
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-white/60">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
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
