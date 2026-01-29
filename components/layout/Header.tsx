"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ConsultationModal from "@/components/ui/ConsultationModal";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/services", label: "Услуги" },
    { href: "/projects", label: "Кейсы" },
    { href: "/about", label: "О нас" },
    { href: "/how-to-choose", label: "Как выбрать подрядчика" },
    { href: "/contact", label: "Контакты" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isMenuOpen
            ? "bg-white/95 border-b border-slate-200 shadow-lg backdrop-blur-lg"
            : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <nav className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center relative z-10 group">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg shadow-blue-600/25 group-hover:shadow-xl group-hover:shadow-blue-600/30 transition-all duration-300 group-hover:scale-105">
                  <span className="text-white font-bold text-lg">W</span>
                </div>
                <span className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  WebClinic
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center space-x-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 text-[15px] font-medium rounded-xl transition-all duration-200 ${
                      pathname === link.href
                        ? "text-blue-600 bg-blue-50 shadow-sm"
                        : "text-slate-600 hover:text-blue-600 hover:bg-blue-50/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="ml-6 flex items-center gap-3">
                {/* Telegram quick link */}
                <a
                  href="https://t.me/webclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 hover:text-teal-600 hover:bg-teal-50 hover:shadow-md transition-all duration-200"
                  aria-label="Telegram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.02-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.18.94.12.78.878z"/>
                  </svg>
                </a>

                {/* CTA Button */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center px-5 py-2.5 text-[15px] font-medium rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5 press-effect"
                  data-cta="header-consultation"
                >
                  Связаться
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 z-10"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-slate-700" />
              ) : (
                <Menu className="w-5 h-5 text-slate-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden overflow-hidden">
              <div className="py-4 space-y-1 border-t border-slate-200">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      className={`block py-3 px-4 text-base font-medium rounded-xl transition-all ${
                        pathname === link.href
                          ? "text-blue-600 bg-blue-50"
                          : "text-slate-700 hover:bg-slate-100"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
                
                {/* Mobile CTA buttons */}
                <div className="pt-4 space-y-3 border-t border-slate-200 mt-4">
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsModalOpen(true);
                    }}
                    className="w-full inline-flex items-center justify-center px-5 py-3 text-[15px] font-medium rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all"
                    data-cta="mobile-header-consultation"
                  >
                    Связаться
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                  
                  <a
                    href="https://t.me/webclinic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-5 py-3 text-[15px] font-medium rounded-xl border border-slate-200 text-slate-700 hover:border-teal-500 hover:text-teal-600 transition-all"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.02-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.18.94.12.78.878z"/>
                    </svg>
                    Написать в Telegram
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Consultation Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
