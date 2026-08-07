import { useEffect, useRef } from "react";

const GLYPHS = [
  "0",
  "1",
  "1",
  "0",
  "λ",
  "∑",
  "{",
  "}",
  "</>",
  ">>",
  "_",
  ";",
  "::",
  "f(x)",
  "∇",
];

export default function BgCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let particles = [];
    let time = 0;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const mobile = window.matchMedia("(max-width: 768px)").matches;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const spawn = () => {
      const count = Math.min(Math.floor(window.innerWidth / 30), 52);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.18 + Math.random() * 0.5,
        sway: 0.4 + Math.random() * 1.2,
        phase: Math.random() * Math.PI * 2,
        size: 10 + Math.random() * 8,
        glyph: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
        alpha: 0.08 + Math.random() * 0.18,
        twinkle: 0.4 + Math.random() * 1.6,
      }));
    };

    const draw = () => {
      time += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = "12px 'JetBrains Mono', monospace";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y -= p.speed;
        p.x += Math.sin(time * 0.6 + p.phase) * 0.35;
        if (p.y < -30) {
          p.y = canvas.height + 30;
          p.x = Math.random() * canvas.width;
        }
        const flicker = 0.75 + Math.sin(time * p.twinkle + p.phase) * 0.25;
        ctx.globalAlpha = p.alpha * flicker;
        ctx.fillStyle = "#22d3ee";
        ctx.fillText(p.glyph, p.x, p.y);

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.globalAlpha = (1 - dist / 110) * 0.1;
            ctx.strokeStyle = "#38bdf8";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    resize();
    spawn();
    const onResize = () => {
      resize();
      spawn();
    };
    window.addEventListener("resize", onResize);

    if (reduced || mobile) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return () => window.removeEventListener("resize", onResize);
    }

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="bg-canvas" aria-hidden="true" />;
}
