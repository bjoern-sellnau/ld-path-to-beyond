/**
 * Hero-Visual: der Loona!-Mond als großes, leuchtendes Objekt mit Orbits.
 * Reines CSS/SVG – kein JavaScript, kein Bild-Download.
 */
export function Orb() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]" aria-hidden="true">
      {/* Glow */}
      <div className="absolute inset-[12%] rounded-full bg-accent/40 blur-[80px]" />

      {/* Orbits */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full animate-spin-slow">
        <g fill="none" stroke="var(--border-strong)">
          <circle cx="200" cy="200" r="196" strokeDasharray="2 6" />
          <circle cx="200" cy="200" r="168" />
        </g>
        <circle cx="200" cy="4" r="4" fill="var(--accent)" />
        <circle cx="32" cy="200" r="2.5" fill="var(--fg-muted)" />
        <circle cx="368" cy="200" r="3" fill="var(--accent-strong)" />
      </svg>

      {/* Mond */}
      <div className="absolute inset-[18%] animate-float">
        <div
          className="relative h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle at 32% 28%, #9fe0ff 0%, #19a7ff 38%, #0a4f8c 70%, #04203a 100%)",
            boxShadow:
              "0 0 0 1px rgb(255 255 255 / 0.12) inset, 0 30px 80px -20px var(--glow), 0 0 120px -10px var(--glow)",
          }}
        >
          <div
            className="absolute inset-[11%] rounded-full"
            style={{
              background: "radial-gradient(circle at 35% 30%, #ffffff 0%, #eaf3ff 55%, #b9cde6 100%)",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              inset: "22% 14% 14% 22%",
              background: "radial-gradient(circle at 40% 35%, #121a28 0%, #05070c 70%)",
              boxShadow: "inset 8px 8px 30px rgb(255 255 255 / 0.06)",
            }}
          />
          {/* Glanzlicht */}
          <div
            className="absolute top-[6%] left-[18%] h-[26%] w-[50%] rounded-[50%] opacity-60"
            style={{ background: "linear-gradient(to bottom, rgb(255 255 255 / 0.7), transparent)" }}
          />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-[14%] right-0 hidden rounded-full border border-border bg-bg/70 px-3 py-1 font-mono text-[0.7rem] text-fg-muted backdrop-blur sm:block">
        since 2001
      </div>
      <div className="absolute bottom-[12%] left-0 hidden rounded-full border border-border bg-bg/70 px-3 py-1 font-mono text-[0.7rem] text-fg-muted backdrop-blur sm:block">
        <span className="text-accent">●</span> lab online
      </div>
    </div>
  );
}
