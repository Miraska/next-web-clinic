"use client";
import { useCallback, useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  const colors = ["#00ff88", "#00d4ff", "#8b5cf6"];

  const initParticles = useCallback((width: number, height: number) => {
    const particleCount = isLowPerformance ? 40 : 80;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    particlesRef.current = particles;
  }, [isLowPerformance]);

  const drawGrid = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
    const gridSize = 60;
    const offset = time * 0.02;
    
    ctx.strokeStyle = "rgba(0, 255, 136, 0.03)";
    ctx.lineWidth = 1;

    // Vertical lines with slight wave
    for (let x = 0; x <= width + gridSize; x += gridSize) {
      ctx.beginPath();
      for (let y = 0; y <= height; y += 10) {
        const wave = Math.sin((y + offset) * 0.01) * 3;
        if (y === 0) {
          ctx.moveTo(x + wave, y);
        } else {
          ctx.lineTo(x + wave, y);
        }
      }
      ctx.stroke();
    }

    // Horizontal lines with slight wave
    for (let y = 0; y <= height + gridSize; y += gridSize) {
      ctx.beginPath();
      for (let x = 0; x <= width; x += 10) {
        const wave = Math.sin((x + offset) * 0.01) * 3;
        if (x === 0) {
          ctx.moveTo(x, y + wave);
        } else {
          ctx.lineTo(x, y + wave);
        }
      }
      ctx.stroke();
    }
  }, []);

  const drawParticles = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const particles = particlesRef.current;
    const connectionDistance = 150;
    const mouseDistance = 200;
    const mouse = mouseRef.current;

    particles.forEach((particle, i) => {
      // Mouse attraction
      const dx = mouse.x - particle.x;
      const dy = mouse.y - particle.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < mouseDistance && dist > 0) {
        const force = (mouseDistance - dist) / mouseDistance * 0.02;
        particle.vx += (dx / dist) * force;
        particle.vy += (dy / dist) * force;
      }

      // Apply velocity with damping
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vx *= 0.99;
      particle.vy *= 0.99;

      // Bounce off edges
      if (particle.x < 0 || particle.x > width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > height) particle.vy *= -1;

      // Keep in bounds
      particle.x = Math.max(0, Math.min(width, particle.x));
      particle.y = Math.max(0, Math.min(height, particle.y));

      // Draw particle with glow
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 3
      );
      gradient.addColorStop(0, particle.color);
      gradient.addColorStop(1, 'transparent');
      
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.globalAlpha = particle.opacity * 0.5;
      ctx.fill();
      
      // Core particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.globalAlpha = particle.opacity;
      ctx.fill();
      ctx.globalAlpha = 1;

      // Draw connections
      if (!isLowPerformance) {
        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.2;
            
            // Create gradient line
            const gradient = ctx.createLinearGradient(
              particle.x, particle.y, other.x, other.y
            );
            gradient.addColorStop(0, particle.color);
            gradient.addColorStop(1, other.color);
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = gradient;
            ctx.globalAlpha = opacity;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        });
      }
    });
  }, [isLowPerformance]);

  const animate = useCallback((time: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = canvas;

    // Clear canvas with fade effect
    ctx.fillStyle = "rgba(10, 14, 23, 0.1)";
    ctx.fillRect(0, 0, width, height);

    // Draw grid
    drawGrid(ctx, width, height, time);

    // Draw particles
    drawParticles(ctx, width, height);

    animationRef.current = requestAnimationFrame(animate);
  }, [drawGrid, drawParticles]);

  useEffect(() => {
    // Check for low performance devices
    const checkPerformance = () => {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      const isLowMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory 
        ? (navigator as Navigator & { deviceMemory?: number }).deviceMemory! < 4 
        : false;
      setIsLowPerformance(isMobile || isLowMemory);
    };

    checkPerformance();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(canvas.width, canvas.height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Initial clear
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "#0a0e17";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    animate(0);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: "#0a0e17" }}
    />
  );
}
