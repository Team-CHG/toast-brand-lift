import { useEffect, useRef, useState, useCallback } from "react";

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
}

/**
 * Fixed decorative champagne glasses toasting animation with sparks.
 * Interactive — sparks burst from the clink point and respond to mouse proximity.
 */
export default function FestiveBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const mouseRef = useRef({ x: -1, y: -1 });
  const frameRef = useRef(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 400, 1);
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const createSpark = useCallback((cx: number, cy: number, intense = false) => {
    const angle = Math.random() * Math.PI * 2;
    const speed = (intense ? 2.5 : 1.2) + Math.random() * (intense ? 3 : 2);
    return {
      x: cx + (Math.random() - 0.5) * 8,
      y: cy + (Math.random() - 0.5) * 8,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - (intense ? 1.5 : 0.5),
      life: 1,
      maxLife: 40 + Math.random() * 60,
      size: 1.5 + Math.random() * (intense ? 3 : 2),
      hue: 30 + Math.random() * 30, // warm gold tones
    };
  }, []);

  const drawGlass = useCallback(
    (ctx: CanvasRenderingContext2D, x: number, y: number, tilt: number, h: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(tilt);

      const rimW = h * 0.22;
      const bowlH = h * 0.32;
      const stemH = h * 0.38;
      const baseW = h * 0.2;
      const baseH = h * 0.06;

      // Bowl (flute shape)
      ctx.beginPath();
      ctx.moveTo(-rimW, 0);
      ctx.bezierCurveTo(-rimW, bowlH * 0.5, -rimW * 0.3, bowlH, 0, bowlH);
      ctx.bezierCurveTo(rimW * 0.3, bowlH, rimW, bowlH * 0.5, rimW, 0);
      ctx.closePath();
      ctx.fillStyle = "hsla(40, 60%, 75%, 0.18)";
      ctx.fill();
      ctx.strokeStyle = "hsla(40, 50%, 80%, 0.5)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Liquid fill
      const liquidTop = bowlH * 0.35;
      ctx.beginPath();
      ctx.moveTo(-rimW * 0.75, liquidTop);
      ctx.bezierCurveTo(-rimW * 0.6, bowlH * 0.7, -rimW * 0.3, bowlH, 0, bowlH);
      ctx.bezierCurveTo(rimW * 0.3, bowlH, rimW * 0.6, bowlH * 0.7, rimW * 0.75, liquidTop);
      ctx.closePath();
      ctx.fillStyle = "hsla(45, 80%, 60%, 0.25)";
      ctx.fill();

      // Bubbles in liquid
      for (let i = 0; i < 5; i++) {
        const bx = (Math.random() - 0.5) * rimW;
        const by = liquidTop + Math.random() * (bowlH - liquidTop) * 0.8;
        ctx.beginPath();
        ctx.arc(bx, by, 1 + Math.random() * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "hsla(50, 80%, 85%, 0.4)";
        ctx.fill();
      }

      // Stem
      ctx.beginPath();
      ctx.moveTo(-1.2, bowlH);
      ctx.lineTo(-1.2, bowlH + stemH);
      ctx.lineTo(1.2, bowlH + stemH);
      ctx.lineTo(1.2, bowlH);
      ctx.fillStyle = "hsla(40, 30%, 80%, 0.35)";
      ctx.fill();
      ctx.strokeStyle = "hsla(40, 50%, 80%, 0.4)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Base
      ctx.beginPath();
      ctx.ellipse(0, bowlH + stemH + baseH / 2, baseW, baseH, 0, 0, Math.PI * 2);
      ctx.fillStyle = "hsla(40, 30%, 80%, 0.25)";
      ctx.fill();
      ctx.strokeStyle = "hsla(40, 50%, 80%, 0.4)";
      ctx.stroke();

      // Rim highlight
      ctx.beginPath();
      ctx.moveTo(-rimW * 0.8, 1);
      ctx.lineTo(rimW * 0.8, 1);
      ctx.strokeStyle = "hsla(50, 80%, 90%, 0.5)";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.restore();
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      frameRef.current++;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      const glassH = Math.min(h * 0.35, 220);
      const cx = w / 2;
      const cy = h * 0.42;

      // Gentle sway animation
      const sway = Math.sin(frameRef.current * 0.015) * 0.03;

      // Left glass tilted right, right glass tilted left — toasting pose
      const leftX = cx - glassH * 0.18;
      const rightX = cx + glassH * 0.18;
      const leftTilt = 0.18 + sway;
      const rightTilt = -0.18 - sway;

      drawGlass(ctx, leftX, cy, leftTilt, glassH);
      drawGlass(ctx, rightX, cy, rightTilt, glassH);

      // Clink point (where rims meet)
      const clinkX = cx;
      const clinkY = cy - glassH * 0.01;

      // Spawn sparks continuously from clink point
      if (frameRef.current % 3 === 0) {
        sparksRef.current.push(createSpark(clinkX, clinkY));
      }

      // Extra sparks near mouse
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      if (mx > 0 && my > 0) {
        const dist = Math.hypot(mx - clinkX, my - clinkY);
        if (dist < 200 && frameRef.current % 2 === 0) {
          sparksRef.current.push(createSpark(clinkX, clinkY, true));
          sparksRef.current.push(createSpark(clinkX, clinkY, true));
        }
      }

      // Update & draw sparks
      sparksRef.current = sparksRef.current.filter((s) => {
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.02; // gravity
        s.vx *= 0.995;
        s.life -= 1 / s.maxLife;

        if (s.life <= 0) return false;

        const alpha = s.life * 0.7;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${s.hue}, 80%, 70%, ${alpha})`;
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * s.life * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${s.hue}, 90%, 80%, ${alpha * 0.2})`;
        ctx.fill();

        return true;
      });

      // Central glow at clink point
      const glowPulse = 0.5 + Math.sin(frameRef.current * 0.05) * 0.3;
      const gradient = ctx.createRadialGradient(clinkX, clinkY, 0, clinkX, clinkY, 60);
      gradient.addColorStop(0, `hsla(45, 90%, 80%, ${0.15 * glowPulse})`);
      gradient.addColorStop(0.5, `hsla(40, 80%, 70%, ${0.06 * glowPulse})`);
      gradient.addColorStop(1, "hsla(40, 80%, 70%, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(clinkX - 80, clinkY - 80, 160, 160);

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [createSpark, drawGlass]);

  const opacity = scrollProgress * 0.35;

  return (
    <>
      {/* Fixed background color layer */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 bg-complementary"
        style={{ zIndex: -2 }}
      />

      {/* Fixed canvas layer — behind page content */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 overflow-hidden"
        style={{ zIndex: -1 }}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          style={{
            opacity,
            transition: "opacity 0.15s linear",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-complementary via-complementary/60 to-transparent" />
      </div>
    </>
  );
}
