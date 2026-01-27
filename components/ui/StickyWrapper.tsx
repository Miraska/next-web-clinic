"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface StickyWrapperProps {
  children: React.ReactNode;
  threshold?: number; // Scroll distance before showing
  position?: "top" | "bottom";
  className?: string;
  containerClassName?: string;
  showCloseButton?: boolean;
  onClose?: () => void;
  mobileOnly?: boolean;
  desktopOnly?: boolean;
  zIndex?: number;
}

export default function StickyWrapper({
  children,
  threshold = 500,
  position = "bottom",
  className = "",
  containerClassName = "",
  showCloseButton = false,
  onClose,
  mobileOnly = false,
  desktopOnly = false,
  zIndex = 40,
}: StickyWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [isAtFooter, setIsAtFooter] = useState(false);
  const stickyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isClosed) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Check if we've scrolled past threshold
      const shouldShow = scrollY > threshold;
      
      // Check if we're near the footer (within 200px of bottom)
      const nearFooter = scrollY + windowHeight > documentHeight - 200;
      
      setIsVisible(shouldShow && !nearFooter);
      setIsAtFooter(nearFooter);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold, isClosed]);

  const handleClose = () => {
    setIsClosed(true);
    setIsVisible(false);
    onClose?.();
  };

  // Responsive visibility
  const responsiveClass = mobileOnly 
    ? "lg:hidden" 
    : desktopOnly 
    ? "hidden lg:block" 
    : "";

  // Position-specific classes and animations
  const positionClasses = position === "top" 
    ? "top-0 border-b" 
    : "bottom-0 border-t";

  const animationVariants = {
    hidden: {
      y: position === "top" ? -100 : 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: position === "top" ? -100 : 100,
      opacity: 0,
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={stickyRef}
          variants={animationVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
          }}
          className={`fixed left-0 right-0 ${positionClasses} ${responsiveClass} ${containerClassName}`}
          style={{ zIndex }}
        >
          <div className={`bg-white/95 backdrop-blur-md border-slate-200 shadow-lg ${className}`}>
            <div className="relative max-w-[1280px] mx-auto px-4 lg:px-8 py-3">
              {/* Close button */}
              {showCloseButton && (
                <button
                  onClick={handleClose}
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}

              {children}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Compact sticky CTA bar component
export function StickyCTA({
  title,
  description,
  buttonText,
  buttonHref,
  onButtonClick,
  secondaryButtonText,
  secondaryButtonHref,
  onSecondaryClick,
  threshold = 800,
  mobileOnly = true,
}: {
  title: string;
  description?: string;
  buttonText: string;
  buttonHref?: string;
  onButtonClick?: () => void;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  onSecondaryClick?: () => void;
  threshold?: number;
  mobileOnly?: boolean;
}) {
  const ButtonComponent = buttonHref ? "a" : "button";
  const SecondaryComponent = secondaryButtonHref ? "a" : "button";

  return (
    <StickyWrapper 
      threshold={threshold} 
      position="bottom" 
      mobileOnly={mobileOnly}
      showCloseButton
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-slate-900 text-sm truncate">{title}</p>
          {description && (
            <p className="text-xs text-slate-500 truncate">{description}</p>
          )}
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          {secondaryButtonText && (
            <SecondaryComponent
              href={secondaryButtonHref}
              onClick={onSecondaryClick}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {secondaryButtonText}
            </SecondaryComponent>
          )}
          
          <ButtonComponent
            href={buttonHref}
            onClick={onButtonClick}
            className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-lg shadow-lg shadow-blue-600/20 hover:shadow-xl transition-all whitespace-nowrap"
          >
            {buttonText}
          </ButtonComponent>
        </div>
      </div>
    </StickyWrapper>
  );
}
