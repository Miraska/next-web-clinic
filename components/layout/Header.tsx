"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

    // Check initial scroll position on page load
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/about", label: "О нас" },
    { href: "/services", label: "Услуги" },
    { href: "/projects", label: "Проекты" },
    { href: "/contact", label: "Контакты" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen
          ? "bg-[#0a0e17]/95 backdrop-blur-xl border-b border-[#1f2937] py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group relative z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <Image
                src="/logo.svg"
                alt="WebClinic"
                width={160}
                height={40}
                className="h-8 lg:h-14 w-auto"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center space-x-8 xl:space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[15px] font-medium transition-all duration-300 group ${
                    pathname === link.href
                      ? "text-[#00ff88]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                  {/* Animated underline */}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] transition-all duration-300 ${
                      pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </div>

            <div className="ml-8 xl:ml-10">
              <Link
                href="/contact"
                className="group relative inline-flex items-center px-6 py-3 text-[15px] font-semibold rounded-full overflow-hidden bg-[#00ff88] text-[#0a0e17] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,136,0.4)]"
              >
                <span className="relative z-10">Обсудить проект</span>
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 group z-10"
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 my-1 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 space-y-4 border-t border-[#1f2937]">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`block py-2 text-lg font-medium transition-all duration-300 ${
                        pathname === link.href
                          ? "text-[#00ff88]"
                          : "text-white/80 hover:text-white hover:pl-2"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
                  className="pt-4"
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 text-[15px] font-semibold rounded-full bg-[#00ff88] text-[#0a0e17] hover:bg-[#00cc6a] transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Обсудить проект
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Scroll progress indicator */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#00ff88]"
        style={{
          width: isScrolled ? "100%" : "0%",
          opacity: isScrolled ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </header>
  );
}
