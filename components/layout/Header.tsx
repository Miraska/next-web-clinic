"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/about", label: "О нас" },
    { href: "/services", label: "Услуги" },
    { href: "/contact", label: "Контакты" },
  ];

  const getHeaderBackground = () => {
    if (isScrolled) {
      return "bg-white/90 backdrop-blur-xl border-b border-black/5";
    }
    if (isMenuOpen && !isScrolled) {
      return isHomePage
        ? "bg-black/90 backdrop-blur-xl"
        : "bg-white/90 backdrop-blur-xl border-b border-black/5";
    }
    return isHomePage ? "bg-transparent" : "bg-white/90 backdrop-blur-xl";
  };

  const getTextColor = () => {
    if (isScrolled) return "text-black";
    if (isMenuOpen && !isScrolled)
      return isHomePage ? "text-white" : "text-black";
    return isHomePage ? "text-white" : "text-black";
  };

  const getLinkColor = () => {
    if (isScrolled) return "text-black/70 hover:text-black";
    if (isMenuOpen && !isScrolled)
      return isHomePage
        ? "text-white/80 hover:text-white"
        : "text-black/70 hover:text-black";
    return isHomePage
      ? "text-white/80 hover:text-white"
      : "text-black/70 hover:text-black";
  };

  const getCTAStyle = () => {
    if (isScrolled) return "bg-black text-white hover:bg-black/90";
    if (isMenuOpen && !isScrolled)
      return isHomePage
        ? "bg-white text-black hover:bg-white/90"
        : "bg-black text-white hover:bg-black/90";
    return isHomePage
      ? "bg-white text-black hover:bg-white/90"
      : "bg-black text-white hover:bg-black/90";
  };

  const getBurgerColor = () => {
    if (isScrolled) return "bg-black";
    if (isMenuOpen && !isScrolled) return isHomePage ? "bg-white" : "bg-black";
    return isHomePage ? "bg-white" : "bg-black";
  };

  const getMobileBorderColor = () => {
    if (isScrolled) return "border-t border-black/5";
    return isHomePage ? "border-t border-white/10" : "border-t border-black/5";
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0a0e17]/95 backdrop-blur-xl border-b border-[#1f2937]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="text-2xl lg:text-3xl font-bold tracking-tight">
              <span className="text-white transition-colors duration-300">
                Web
              </span>
              <span className="text-[#00ff88] transition-colors duration-300 group-hover:text-glow-green">
                Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center space-x-8 xl:space-x-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[15px] font-medium transition-all duration-300 link-underline ${
                    pathname === link.href
                      ? "text-[#00ff88]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="ml-8 xl:ml-12">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 text-[15px] font-semibold rounded-full bg-[#00ff88] text-[#0a0e17] hover:bg-[#00cc6a] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,136,0.4)]"
              >
                Обсудить проект
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 group"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-6 pt-4 space-y-6 border-t border-[#1f2937]">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-lg font-medium transition-all duration-300 ${
                  pathname === link.href
                    ? "text-[#00ff88]"
                    : "text-white/80 hover:text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  animationDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 text-[15px] font-semibold rounded-full bg-[#00ff88] text-[#0a0e17] hover:bg-[#00cc6a] transition-all duration-300 mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Обсудить проект
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
