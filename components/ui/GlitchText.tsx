"use client";
import { useState, useEffect } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchColor?: string;
}

export default function GlitchText({ 
  text, 
  className = "",
  glitchColor = "#2563EB"
}: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 5000 + Math.random() * 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      {isGlitching && (
        <>
          <span 
            className="absolute top-0 left-0 z-0 opacity-70"
            style={{ 
              color: glitchColor,
              transform: 'translate(-2px, -1px)',
              clipPath: 'inset(10% 0 60% 0)',
            }}
          >
            {text}
          </span>
          <span 
            className="absolute top-0 left-0 z-0 opacity-70"
            style={{ 
              color: '#0D9488',
              transform: 'translate(2px, 1px)',
              clipPath: 'inset(40% 0 20% 0)',
            }}
          >
            {text}
          </span>
        </>
      )}
    </span>
  );
}
