"use client";
import { motion, useScroll, useSpring } from "framer-motion";

interface ScrollProgressProps {
  color?: string;
  height?: number;
  position?: "top" | "bottom";
}

export default function ScrollProgress({
  color = "#00ff88",
  height = 3,
  position = "top",
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={`fixed left-0 right-0 z-[60] ${position === "top" ? "top-0" : "bottom-0"}`}
      style={{
        height,
        background: `linear-gradient(90deg, ${color}, #00d4ff)`,
        scaleX,
        transformOrigin: "0%",
        boxShadow: `0 0 10px ${color}`,
      }}
    />
  );
}
