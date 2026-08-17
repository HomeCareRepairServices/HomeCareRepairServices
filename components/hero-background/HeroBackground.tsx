"use client"

const nodes = [
  { x: 90, y: 100 },
  { x: 300, y: 180 },
  { x: 520, y: 260 },
  { x: 170, y: 330 },
  { x: 1460, y: 160 },
  { x: 1700, y: 120 },
  { x: 1800, y: 320 },
  { x: 1560, y: 360 },
  { x: 140, y: 700 },
  { x: 340, y: 820 },
  { x: 480, y: 900 },
  { x: 220, y: 960 },
  { x: 1500, y: 780 },
  { x: 1660, y: 700 },
  { x: 1800, y: 860 },
  { x: 1560, y: 940 },
]

const particles = [
  { x: 700, y: 160 },
  { x: 1180, y: 140 },
  { x: 620, y: 320 },
  { x: 1300, y: 300 },
  { x: 660, y: 640 },
  { x: 1250, y: 660 },
  { x: 600, y: 900 },
  { x: 1300, y: 900 },
  { x: 760, y: 780 },
  { x: 1180, y: 780 },
  { x: 920, y: 200 },
  { x: 1000, y: 940 },
]

const floatParticles = [
  { x: 660, y: 640 },
  { x: 1180, y: 780 },
  { x: 1300, y: 300 },
]

const screws = [
  { x: 520, y: 260 },
  { x: 1800, y: 320 },
  { x: 480, y: 900 },
  { x: 1560, y: 940 },
]

const flowLines = [
  "M 260 220 H 520",
  "M 300 300 V 420",
  "M 1460 280 V 120",
  "M 1700 120 V 300",
  "M 480 900 H 220",
  "M 1500 780 H 1800",
]

const traces = [
  "M 60 80 H 380 V 220 H 520",
  "M 120 40 V 340 H 260",
  "M 40 200 H 200 V 380",
  "M 1860 100 H 1560 V 260 H 1400",
  "M 1780 40 V 340 H 1660",
  "M 1520 120 V 400 H 1860",
  "M 80 1020 H 320 V 860 H 480",
  "M 40 800 H 260 V 940",
  "M 200 660 V 920 H 360",
  "M 1840 1020 H 1520 V 880 H 1360",
  "M 1860 720 H 1620 V 960",
  "M 1500 660 V 940 H 1700",
]

const frameLines = [
  "M 0 60 H 1920",
  "M 0 1020 H 1920",
  "M 80 0 V 1080",
  "M 1840 0 V 1080",
]

export function HeroBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ overflow: "hidden" }}
    >
      <style>{`
        .hc-pulse-node { animation: hc-pulse 3.4s ease-in-out infinite; }
        .hc-flow-line { animation: hc-flow 3s linear infinite; }
        .hc-scan { animation: hc-scan 14s ease-in-out infinite; }
        .hc-drift { animation: hc-drift 16s ease-in-out infinite; }
        .hc-float { animation: hc-float 9s ease-in-out infinite; }
        @keyframes hc-pulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.8; }
        }
        @keyframes hc-flow {
          to { stroke-dashoffset: -48; }
        }
        @keyframes hc-scan {
          0% { transform: translateY(-160px); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateY(1300px); opacity: 0; }
        }
        @keyframes hc-drift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(120px, -70px); }
        }
        @keyframes hc-float {
          0%, 100% { transform: translate(0, 0); opacity: 0.35; }
          50% { transform: translate(0, -7px); opacity: 0.8; }
        }
      `}</style>

      <defs>
        <radialGradient id="hcGlowCyan" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.20" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hcGlowEmerald" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hcGlowCenter" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.07" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="hcScanLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
          <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hcScanBand" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
          <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </linearGradient>

        <pattern id="hcGridMinor" width="36" height="36" patternUnits="userSpaceOnUse">
          <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#38bdf8" strokeOpacity="0.045" strokeWidth="1" />
        </pattern>
        <pattern id="hcGridMajor" width="144" height="144" patternUnits="userSpaceOnUse">
          <path d="M 144 0 L 0 0 0 144" fill="none" stroke="#38bdf8" strokeOpacity="0.09" strokeWidth="1" />
        </pattern>
      </defs>

      {/* Ambient corner glows */}
      <g className="hc-drift">
        <circle cx="140" cy="140" r="420" fill="url(#hcGlowCyan)" />
      </g>
      <circle cx="1780" cy="950" r="440" fill="url(#hcGlowEmerald)" />
      <circle cx="1760" cy="160" r="320" fill="url(#hcGlowCyan)" />
      <circle cx="160" cy="940" r="340" fill="url(#hcGlowEmerald)" />
      <circle cx="960" cy="540" r="560" fill="url(#hcGlowCenter)" />

      {/* Blueprint grid */}
      <rect x="0" y="0" width="1920" height="1080" fill="url(#hcGridMinor)" />
      <rect x="0" y="0" width="1920" height="1080" fill="url(#hcGridMajor)" />

      {/* Edge framing lines */}
      <g fill="none" stroke="#38bdf8" strokeOpacity="0.08" strokeWidth="1">
        {frameLines.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>

      {/* Static circuit traces */}
      <g fill="none" stroke="#38bdf8" strokeOpacity="0.16" strokeWidth="1.5">
        {traces.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>

      {/* Animated dash-flow connections */}
      <g fill="none" stroke="#38bdf8" strokeWidth="1.25" strokeLinecap="round" strokeDasharray="4 12" strokeOpacity="0.5">
        {flowLines.map((d, i) => (
          <path key={d} d={d} className="hc-flow-line" style={{ animationDelay: `${(i % 3) * 0.8}s` }} />
        ))}
      </g>

      {/* Abstract appliance motifs — cooling fan */}
      <g stroke="#38bdf8" strokeOpacity="0.5" strokeWidth="1.5" fill="none">
        <path d="M 300 300 Q 330 300 322 322" />
        <path d="M 300 300 Q 300 330 278 322" />
        <path d="M 300 300 Q 270 300 278 278" />
        <circle cx="300" cy="300" r="5" fill="#38bdf8" stroke="none" fillOpacity="0.7" />
      </g>

      {/* Abstract thermal waves — geyser/heating */}
      <g stroke="#34d399" strokeOpacity="0.45" strokeWidth="1.5" fill="none">
        <path d="M 1668 300 A 32 32 0 0 1 1732 300" />
        <path d="M 1652 300 A 48 48 0 0 1 1748 300" />
        <path d="M 1636 300 A 64 64 0 0 1 1764 300" />
      </g>

      {/* Abstract motor drum — washing machine */}
      <g stroke="#38bdf8" strokeOpacity="0.5" strokeWidth="1.5" fill="none">
        <circle cx="400" cy="700" r="34" />
        <circle cx="400" cy="700" r="22" strokeDasharray="6 8" strokeOpacity="0.7" />
        <path d="M 400 666 V 734 M 366 700 H 434" />
        <circle cx="400" cy="700" r="4" fill="#38bdf8" stroke="none" fillOpacity="0.7" />
      </g>

      {/* Abstract water droplet — RO purifier */}
      <g stroke="#34d399" strokeOpacity="0.55" strokeWidth="1.5" fill="none">
        <path d="M 1700 794 C 1702 802 1712 810 1700 820 C 1688 810 1698 802 1700 794 Z" />
        <circle cx="1700" cy="811" r="2.5" fill="#34d399" stroke="none" fillOpacity="0.8" />
      </g>

      {/* Abstract electrical bolt */}
      <g stroke="#38bdf8" strokeOpacity="0.5" strokeWidth="1.5" fill="none">
        <path d="M 242 640 L 228 668 L 242 666 L 230 694" />
      </g>

      {/* Abstract refrigerator geometry */}
      <g stroke="#34d399" strokeOpacity="0.4" strokeWidth="1.5" fill="none">
        <rect x="1742" y="130" width="36" height="46" rx="4" />
        <path d="M 1742 154 H 1778" />
      </g>

      {/* Screw / connector nodes */}
      <g stroke="#38bdf8" strokeOpacity="0.6" strokeWidth="1.25" fill="none">
        {screws.map((s) => (
          <g key={`${s.x}-${s.y}`}>
            <circle cx={s.x} cy={s.y} r="7" />
            <path d={`M ${s.x - 4} ${s.y} H ${s.x + 4} M ${s.x} ${s.y - 4} V ${s.y + 4}`} />
          </g>
        ))}
      </g>

      {/* Pulsing network nodes */}
      <g>
        {nodes.map(({ x, y }, i) => (
          <g key={`n-${x}-${y}`}>
            <circle cx={x} cy={y} r="7.5" fill="none" stroke="#34d399" strokeOpacity="0.35" strokeWidth="1" />
            <circle cx={x} cy={y} r="3" fill="#38bdf8" className="hc-pulse-node" style={{ animationDelay: `${(i % 7) * 0.5}s` }} />
          </g>
        ))}
      </g>

      {/* Faint static particles */}
      <g>
        {particles.map(({ x, y }) => (
          <circle key={`p-${x}-${y}`} cx={x} cy={y} r="1.8" fill="#38bdf8" fillOpacity="0.4" />
        ))}
        {floatParticles.map(({ x, y }, i) => (
          <circle key={`f-${x}-${y}`} cx={x} cy={y} r="2" fill="#38bdf8" className="hc-float" style={{ animationDelay: `${i * 1.4}s` }} />
        ))}
      </g>

      {/* Sweeping scan line */}
      <g>
        <rect x="0" y="0" width="1920" height="60" fill="url(#hcScanBand)" className="hc-scan" style={{ animationDuration: "16s" }} />
        <rect x="0" y="0" width="1920" height="2" fill="url(#hcScanLine)" className="hc-scan" />
      </g>
    </svg>
  )
}