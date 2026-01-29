"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ConsultationModal from "./ConsultationModal";

interface UnifiedCTAProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  backgroundImage?: string;
  dataCta?: string;
}

export default function UnifiedCTA({
  title,
  description,
  primaryButtonText = "Связаться",
  secondaryButtonText,
  secondaryButtonHref,
  backgroundImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
  dataCta = "unified-cta",
}: UnifiedCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="relative overflow-hidden rounded-2xl">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/88" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-teal-900/20" />
        </div>
        
        {/* Content */}
        <div className="relative p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {title}
              </h3>
              <p className="text-slate-300 max-w-xl">
                {description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-600/30 whitespace-nowrap"
                data-cta={dataCta}
              >
                {primaryButtonText}
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              {secondaryButtonText && secondaryButtonHref && (
                <Link
                  href={secondaryButtonHref}
                  className="inline-flex items-center justify-center px-6 py-3.5 border border-white/20 text-white font-medium rounded-xl hover:bg-white/10 transition-all whitespace-nowrap"
                >
                  {secondaryButtonText}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
