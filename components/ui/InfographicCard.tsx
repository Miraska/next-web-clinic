"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface InfographicCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stats?: {
    value: string;
    label: string;
  };
  color?: string;
  delay?: number;
  image?: string;
}

export default function InfographicCard({
  icon,
  title,
  description,
  stats,
  color = "#2563EB",
  delay = 0,
  image,
}: InfographicCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group relative"
    >
      <div className="relative p-6 lg:p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all duration-500 h-full overflow-hidden">
        {/* Background gradient on hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at top left, ${color}10 0%, transparent 50%)`,
          }}
        />

        {/* Top accent line */}
        <div 
          className="absolute top-0 left-0 right-0 h-1 opacity-50 group-hover:opacity-100 transition-opacity"
          style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
        />

        {/* Image placeholder */}
        {image && (
          <div className="relative mb-6 rounded-xl overflow-hidden bg-slate-100 aspect-video flex items-center justify-center border border-slate-200">
            <div className="text-slate-400 text-sm">[Инфографика]</div>
            {/* Decorative elements */}
            <div className="absolute top-2 right-2 w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
          </div>
        )}

        {/* Icon */}
        <div 
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${color}15`, color }}
        >
          {icon}
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 leading-relaxed mb-4">
          {description}
        </p>

        {/* Stats */}
        {stats && (
          <div className="pt-4 border-t border-slate-200">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold" style={{ color }}>{stats.value}</span>
              <span className="text-sm text-slate-500">{stats.label}</span>
            </div>
          </div>
        )}

        {/* Decorative corner */}
        <div 
          className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.div>
  );
}
