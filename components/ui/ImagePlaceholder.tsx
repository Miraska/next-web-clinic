"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  aspectRatio?: "square" | "video" | "portrait" | "wide";
  className?: string;
  overlay?: boolean;
  overlayColor?: string;
}

const aspectRatios = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

export default function ImagePlaceholder({
  src,
  alt,
  aspectRatio = "video",
  className = "",
  overlay = true,
  overlayColor = "#00ff88",
}: ImagePlaceholderProps) {
  const hasImage = src && src.length > 0;

  return (
    <div className={`relative ${aspectRatios[aspectRatio]} rounded-2xl overflow-hidden group ${className}`}>
      {hasImage ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        // Placeholder pattern
        <div className="absolute inset-0 bg-[#0f1520]">
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(${overlayColor}15 1px, transparent 1px),
                linear-gradient(90deg, ${overlayColor}15 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
          
          {/* Placeholder icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="p-6 rounded-2xl"
              style={{ backgroundColor: `${overlayColor}10` }}
            >
              <svg 
                className="w-12 h-12"
                style={{ color: `${overlayColor}50` }}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </motion.div>
          </div>
          
          {/* Scan line effect */}
          <motion.div
            className="absolute left-0 right-0 h-px"
            style={{ backgroundColor: overlayColor, opacity: 0.3 }}
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )}
      
      {/* Overlay gradient */}
      {overlay && (
        <div 
          className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-transparent to-transparent opacity-60"
        />
      )}
      
      {/* Corner decorations */}
      <div 
        className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 rounded-tl-lg opacity-50 transition-opacity group-hover:opacity-100"
        style={{ borderColor: overlayColor }}
      />
      <div 
        className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 rounded-br-lg opacity-50 transition-opacity group-hover:opacity-100"
        style={{ borderColor: overlayColor }}
      />
    </div>
  );
}
