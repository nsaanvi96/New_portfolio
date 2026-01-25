// src/components/NetworkBackground.tsx
import { useEffect, useRef } from 'react';

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrame: number;
    let particles: { x: number; y: number; vx: number; vy: number }[] = [];
    let connections: { a: number; b: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      particles = [];
      connections = [];

      const count = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }

      // Create connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          if (Math.random() > 0.98) {
            connections.push({ a: i, b: j });
          }
        }
      }
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw lines
      ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--line-color').trim();
      ctx.lineWidth = 0.8;
      connections.forEach(({ a, b }) => {
        const p1 = particles[a];
        const p2 = particles[b];
        const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        if (dist < 180) {
          ctx.globalAlpha = (180 - dist) / 180;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      });
      ctx.globalAlpha = 1;

      // Draw dots
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--dot-color').trim();
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return null;
}