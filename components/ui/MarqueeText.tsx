"use client";
import { motion } from "framer-motion";

interface MarqueeTextProps {
  items: string[];
  speed?: number;
  direction?: "left" | "right";
  className?: string;
  separator?: string;
}

export default function MarqueeText({
  items,
  speed = 20,
  direction = "left",
  className = "",
  separator = "•"
}: MarqueeTextProps) {
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: direction === "left" ? ["0%", "-33.333%"] : ["-33.333%", "0%"],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((item, index) => (
          <span key={index} className="flex items-center">
            <span className="px-8">{item}</span>
            <span className="text-[#00ff88]/30">{separator}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
