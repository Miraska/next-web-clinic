"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Simple CTA click analytics
 * Tracks clicks on elements with data-cta attribute
 * In production, replace console.log with actual analytics service
 */
export default function Analytics() {
  const pathname = usePathname();

  // Track page views
  useEffect(() => {
    // Log page view
    console.log(`[Analytics] Page view: ${pathname}`);
    
    // In production, send to analytics service:
    // window.gtag?.('config', 'GA_MEASUREMENT_ID', { page_path: pathname });
  }, [pathname]);

  // Track CTA clicks
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const ctaElement = target.closest("[data-cta]");
      
      if (ctaElement) {
        const ctaName = ctaElement.getAttribute("data-cta");
        console.log(`[Analytics] CTA click: ${ctaName} on ${pathname}`);
        
        // In production, send to analytics service:
        // window.gtag?.('event', 'cta_click', { cta_name: ctaName, page_path: pathname });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return null;
}
