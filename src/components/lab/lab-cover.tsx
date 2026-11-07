import type { LabExperiment } from "@/content/lab";

/** Deterministischer Zufall aus dem Slug – gleiche Eingabe, gleiches Cover. */
function seededRandom(seed: string) {
  let h = 1779033703 ^ seed.length;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(h ^ seed.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return () => {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
  };
}

const W = 400;
const H = 240;

function GamePattern({ hue, rand }: { hue: number; rand: () => number }) {
  const vx = 140 + rand() * 120;
  const vy = 90 + rand() * 60;
  const frames = Array.from({ length: 7 }, (_, i) => {
    const t = Math.pow(0.68, i);
    return {
      x: vx - vx * t,
      y: vy - vy * t,
      w: W * t,
      h: H * t,
      o: 0.55 - i * 0.06,
    };
  });
  const targets = Array.from({ length: 4 }, () => ({
    x: vx + (rand() - 0.5) * 220,
    y: vy + (rand() - 0.5) * 120,
    r: 2 + rand() * 4,
  }));
  return (
    <g fill="none" stroke={`hsl(${hue} 90% 66%)`}>
      {[
        [0, 0],
        [W, 0],
        [0, H],
        [W, H],
      ].map(([x, y]) => (
        <line key={`${x}-${y}`} x1={x} y1={y} x2={vx} y2={vy} strokeOpacity={0.25} />
      ))}
      {frames.map((f, i) => (
        <rect key={i} x={f.x} y={f.y} width={f.w} height={f.h} strokeOpacity={f.o} />
      ))}
      {targets.map((t, i) => (
        <g key={i}>
          <circle cx={t.x} cy={t.y} r={t.r * 3} strokeOpacity={0.5} />
          <circle cx={t.x} cy={t.y} r={t.r} fill={`hsl(${hue} 100% 70%)`} stroke="none" />
        </g>
      ))}
    </g>
  );
}

function ToolPattern({ hue, rand }: { hue: number; rand: () => number }) {
  const cols = 3;
  const rows = 2;
  const cells = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = 40 + c * 112;
      const y = 40 + r * 84;
      const bars = Array.from({ length: 5 }, () => 10 + rand() * 40);
      cells.push(
        <g key={`${r}-${c}`}>
          <rect
            x={x}
            y={y}
            width={96}
            height={70}
            rx={10}
            fill={`hsl(${hue} 60% 50% / 0.08)`}
            stroke={`hsl(${hue} 80% 65% / 0.35)`}
          />
          {bars.map((b, i) => (
            <rect
              key={i}
              x={x + 14 + i * 15}
              y={y + 58 - b}
              width={8}
              height={b}
              rx={2}
              fill={`hsl(${hue} 90% 65% / ${0.35 + rand() * 0.5})`}
            />
          ))}
        </g>,
      );
    }
  }
  return <g>{cells}</g>;
}

function WebPattern({ hue }: { hue: number }) {
  const stroke = `hsl(${hue} 85% 68% / 0.5)`;
  const fill = `hsl(${hue} 70% 60% / 0.1)`;
  return (
    <g fill={fill} stroke={stroke}>
      <rect x={50} y={30} width={300} height={190} rx={12} fill={`hsl(${hue} 50% 10% / 0.6)`} />
      <line x1={50} y1={52} x2={350} y2={52} />
      {[64, 76, 88].map((x) => (
        <circle key={x} cx={x} cy={41} r={3.5} stroke="none" fill={`hsl(${hue} 90% 70% / 0.7)`} />
      ))}
      <rect x={70} y={70} width={160} height={14} rx={4} />
      <rect x={70} y={92} width={110} height={8} rx={4} stroke="none" />
      <rect x={70} y={106} width={130} height={8} rx={4} stroke="none" />
      <rect x={245} y={68} width={88} height={60} rx={30} fill={`hsl(${hue} 90% 60% / 0.25)`} />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={70 + i * 90} y={146} width={80} height={56} rx={8} />
      ))}
    </g>
  );
}

export function LabCover({
  experiment,
  className = "",
}: {
  experiment: Pick<LabExperiment, "slug" | "hue" | "category" | "title">;
  className?: string;
}) {
  const { slug, hue, category } = experiment;
  const rand = seededRandom(slug);
  const gx = 20 + rand() * 60;
  const gy = 10 + rand() * 50;
  const id = `cover-${slug}`;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className={`block h-full w-full ${className}`}
      role="img"
      aria-label={`Generatives Cover für ${experiment.title}`}
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={`hsl(${hue} 55% 7%)`} />
          <stop offset="100%" stopColor={`hsl(${(hue + 40) % 360} 60% 13%)`} />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx={`${gx}%`} cy={`${gy}%`} r="70%">
          <stop offset="0%" stopColor={`hsl(${hue} 95% 60%)`} stopOpacity="0.55" />
          <stop offset="100%" stopColor={`hsl(${hue} 95% 60%)`} stopOpacity="0" />
        </radialGradient>
        <pattern id={`${id}-dots`} width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.8" fill="white" fillOpacity="0.08" />
        </pattern>
      </defs>
      <rect width={W} height={H} fill={`url(#${id}-bg)`} />
      <rect width={W} height={H} fill={`url(#${id}-glow)`} />
      <rect width={W} height={H} fill={`url(#${id}-dots)`} />
      {category === "game" && <GamePattern hue={hue} rand={rand} />}
      {category === "tool" && <ToolPattern hue={hue} rand={rand} />}
      {category === "web" && <WebPattern hue={hue} />}
    </svg>
  );
}
