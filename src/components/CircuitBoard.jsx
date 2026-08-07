import { useEffect, useRef, useState } from "react";

const TRACE_COLORS = [
  { stroke: "#22d3ee", glow: "rgba(34,211,238,0.4)", w: 0.3 },
  { stroke: "#818cf8", glow: "rgba(129,140,248,0.36)", w: 0.28 },
  { stroke: "#e879f9", glow: "rgba(232,121,249,0.34)", w: 0.28 },
  { stroke: "#2dd4bf", glow: "rgba(45,212,191,0.36)", w: 0.28 },
];

const STAGE_HEIGHT_FACTOR = 2.1;

function seededColor(i) {
  return TRACE_COLORS[i % TRACE_COLORS.length];
}

function generate(width, height) {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cell = Math.max(56, Math.min(96, Math.floor(width / 15)));
  const cols = Math.ceil(width / cell) + 1;
  const rows = Math.ceil(height / cell) + 1;

  const points = [];
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      if (Math.random() < 0.26) continue;
      const island =
        Math.random() < 0.05 && i > 2 && i < cols - 3 && j > 1 && j < rows - 3;
      if (island) continue;
      points.push({
        x: i * cell + (Math.random() - 0.5) * cell * 0.5,
        y: j * cell + (Math.random() - 0.5) * cell * 0.5,
      });
    }
  }

  const traces = [];
  let traceIndex = 0;

  const connect = (a, b) => {
    const mid = a.x + (b.x - a.x) * 0.5;
    const color = seededColor(traceIndex++);
    const long = Math.random() < 0.18;
    const d = long
      ? `M ${a.x} ${a.y} H ${mid} V ${a.y + (b.y - a.y) * 0.7} H ${b.x} V ${b.y}`
      : `M ${a.x} ${a.y} H ${mid} V ${b.y} H ${b.x}`;
    traces.push({
      d,
      color,
      index: traceIndex,
      flow: !reduced,
      delay: (Math.random() * 5).toFixed(2),
      dur: (2.6 + Math.random() * 4.5).toFixed(2),
    });
  };

  const at = (ci, cj) =>
    points.find(
      (p) =>
        Math.abs(p.x - ci * cell) <= cell * 0.5 &&
        Math.abs(p.y - cj * cell) <= cell * 0.5,
    );

  for (const p of points) {
    const ci = Math.round(p.x / cell);
    const cj = Math.round(p.y / cell);
    if (Math.random() < 0.5) {
      const right = at(ci + 1, cj);
      if (right) connect(p, right);
    }
    if (Math.random() < 0.5) {
      const down = at(ci, cj + 1);
      if (down) connect(p, down);
    }
  }

  const pads = points.map((p, idx) => ({
    x: p.x,
    y: p.y,
    idx,
    delay: (idx % 12) * 0.35,
    active: Math.random() < 0.8,
  }));

  const chips = [];
  const chipCount = Math.min(5, Math.floor((width * height) / 900000) + 1);
  for (let c = 0; c < chipCount; c++) {
    const cx = Math.floor(Math.random() * (cols - 3)) * cell + cell;
    const cy = Math.floor(Math.random() * (rows - 3)) * cell + cell;
    chips.push({
      x: cx,
      y: cy,
      w: cell * (1.6 + Math.random() * 0.8),
      h: cell * (1.6 + Math.random() * 0.8),
      label: `IC-${c + 1}`,
    });
  }

  return { traces, pads, chips, width, height };
}

export default function CircuitBoard() {
  const stageRef = useRef(null);
  const [board, setBoard] = useState(() =>
    typeof window === "undefined"
      ? { traces: [], pads: [], chips: [], width: 0, height: 0 }
      : generate(window.innerWidth, window.innerHeight * STAGE_HEIGHT_FACTOR),
  );

  useEffect(() => {
    let timer;
    let ticking = false;

    const rebuild = () => {
      clearTimeout(timer);
      timer = setTimeout(
        () => setBoard(generate(window.innerWidth, window.innerHeight * STAGE_HEIGHT_FACTOR)),
        220,
      );
    };

    const updateParallax = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const stage = stageRef.current;
        if (!stage) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          stage.style.transform = "";
          return;
        }
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const available = Math.max(0, stage.offsetHeight - window.innerHeight - 160);
        const y = maxScroll > 0 ? (window.scrollY / maxScroll) * available : 0;
        stage.style.transform = `translate3d(0, ${-y}px, 0)`;
      });
    };

    const onResize = () => {
      rebuild();
      updateParallax();
    };

    updateParallax();
    window.addEventListener("scroll", updateParallax, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", updateParallax);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="circuit-stage" ref={stageRef} aria-hidden="true">
      <svg
        className="circuit-board"
        viewBox={`0 0 ${board.width} ${board.height}`}
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="cb-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#cb-glow)">
          {board.traces.map((t, i) => (
            <path
              key={`glow-${i}`}
              d={t.d}
              fill="none"
              stroke={t.color.stroke}
              strokeOpacity={0.26}
              strokeWidth={2.6}
            />
          ))}
        </g>

        <g className="cb-traces">
          {board.traces.map((t, i) => (
            <path
              key={`trace-${i}`}
              d={t.d}
              fill="none"
              stroke={t.color.stroke}
              strokeWidth={t.color.w}
              className={t.flow ? "cb-flow" : undefined}
              style={
                t.flow
                  ? {
                      animationDelay: `${t.delay}s`,
                      animationDuration: `${t.dur}s`,
                    }
                  : undefined
              }
            />
          ))}
        </g>

        <g className="cb-chips">
          {board.chips.map((chip) => (
            <g key={chip.label}>
              <rect
                x={chip.x - chip.w / 2}
                y={chip.y - chip.h / 2}
                width={chip.w}
                height={chip.h}
                rx="4"
                fill="rgba(8,14,30,0.9)"
                stroke="#22d3ee"
                strokeOpacity="0.75"
              />
              {Array.from({ length: 8 }, (_, i) => (
                <path
                  key={i}
                  d={`M ${chip.x - chip.w / 2} ${chip.y - chip.h / 2 + (i * chip.h) / 7} H ${chip.x - chip.w / 2 - 7}`}
                  stroke="#38bdf8"
                  strokeWidth="1.2"
                  strokeOpacity="0.85"
                />
              ))}
            </g>
          ))}
        </g>

        <g className="cb-pads">
          {board.pads.map((p) => (
            <g key={`pad-${p.idx}`}>
              <circle
                cx={p.x}
                cy={p.y}
                r="2.8"
                fill={p.active ? "#22d3ee" : "#0ea5e9"}
                className={p.active ? "cb-pad cb-pad--pulse" : "cb-pad"}
                style={p.active ? { animationDelay: `${p.delay}s` } : undefined}
              />
              <circle cx={p.x} cy={p.y} r="1" fill="#020308" />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
