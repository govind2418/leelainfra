"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  r: number;
  speed: number;
  drift: number;
  phase: number;
  flashAt: number;
};

export function ParticleField({ density = 70 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let raf = 0;
    let mouseX = -1000;
    let mouseY = -1000;

    function resize() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      ctx!.scale(devicePixelRatio, devicePixelRatio);

      const count = Math.round((width * height) / (18000 / (density / 70)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.6 + 0.4,
        speed: Math.random() * 0.25 + 0.05,
        drift: Math.random() * 0.6 - 0.3,
        phase: Math.random() * Math.PI * 2,
        flashAt: Math.random() * 8000 + 4000,
      }));
    }

    function onMove(e: MouseEvent) {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    }

    let t = 0;
    function tick() {
      t += 16;
      ctx!.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.y -= p.speed;
        p.x += Math.sin(t / 1400 + p.phase) * p.drift * 0.05;
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const near = dist < 140;
        const push = near ? (140 - dist) / 140 : 0;
        const drawX = p.x + (near ? (dx / (dist || 1)) * push * 18 : 0);
        const drawY = p.y + (near ? (dy / (dist || 1)) * push * 18 : 0);

        const twinkle = 0.4 + Math.sin(t / 900 + p.phase) * 0.3;
        const isFlash = t % p.flashAt < 120;
        const opacity = Math.min(1, (isFlash ? 1 : twinkle) + push * 0.5);
        const radius = p.r + (isFlash ? 1.4 : 0) + push * 1.2;

        ctx!.beginPath();
        ctx!.arc(drawX, drawY, radius, 0, Math.PI * 2);
        const gradient = ctx!.createRadialGradient(drawX, drawY, 0, drawX, drawY, radius * 4);
        gradient.addColorStop(0, `rgba(236, 216, 163, ${opacity})`);
        gradient.addColorStop(0.4, `rgba(211, 171, 95, ${opacity * 0.5})`);
        gradient.addColorStop(1, "rgba(211, 171, 95, 0)");
        ctx!.fillStyle = gradient;
        ctx!.fill();
      }

      raf = requestAnimationFrame(tick);
    }

    resize();
    tick();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    window.addEventListener("mousemove", onMove);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
    };
  }, [density]);

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden />;
}
