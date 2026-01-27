"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface TimelineStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  color: string;
}

interface ProcessTimelineProps {
  steps: TimelineStep[];
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative">
      {/* Center line */}
      <div className="absolute left-8 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-0.5 bg-[#1f2937]">
        <motion.div
          className="w-full bg-gradient-to-b from-[#00ff88] to-[#00d4ff]"
          style={{ height: lineHeight }}
        />
      </div>

      {/* Steps */}
      <div className="space-y-12 lg:space-y-24">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <TimelineItem
              key={index}
              step={step}
              index={index}
              isEven={isEven}
            />
          );
        })}
      </div>
    </div>
  );
}

function TimelineItem({ step, index, isEven }: { step: TimelineStep; index: number; isEven: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`relative flex items-center gap-6 lg:gap-12 ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* Number circle */}
      <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shadow-lg"
          style={{ 
            backgroundColor: step.color,
            color: "#0a0e17",
            boxShadow: `0 0 30px ${step.color}40`,
          }}
        >
          {step.number}
        </motion.div>
      </div>

      {/* Content card */}
      <div className={`ml-24 lg:ml-0 lg:w-[calc(50%-4rem)] ${isEven ? "lg:pr-8" : "lg:pl-8"}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-6 rounded-2xl bg-[#0f1520] border border-[#1f2937] hover:border-[#00ff88]/30 transition-all duration-300 group"
        >
          {/* Icon */}
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
            style={{ backgroundColor: `${step.color}15`, color: step.color }}
          >
            {step.icon}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00ff88] transition-colors">
            {step.title}
          </h3>

          {/* Description */}
          <p className="text-white/60 leading-relaxed mb-4">
            {step.description}
          </p>

          {/* Duration */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a0e17] border border-[#1f2937]">
            <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm text-white/60">{step.duration}</span>
          </div>
        </motion.div>
      </div>

      {/* Spacer for opposite side */}
      <div className="hidden lg:block lg:w-[calc(50%-4rem)]" />
    </motion.div>
  );
}
