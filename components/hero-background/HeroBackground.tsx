"use client"

const circuits = [
  "M 40 120 H 220 L 280 180 H 430 L 500 110 H 650",
  "M 75 410 H 190 V 330 H 320 L 380 270 H 520",
  "M 30 760 H 210 L 270 700 H 420 V 820 H 580",
  "M 1880 130 H 1700 L 1640 190 H 1490 L 1420 120 H 1280",
  "M 1890 430 H 1740 V 350 H 1600 L 1530 290 H 1400",
  "M 1880 800 H 1710 L 1640 730 H 1490 V 850 H 1320",
  "M 500 1010 V 890 H 680 L 750 950 H 900",
  "M 1420 1010 V 900 H 1250 L 1180 960 H 1020",
]

const nodes = [
  [92, 120], [280, 180], [500, 110], [74, 410], [380, 270], [30, 760], [270, 700], [580, 820],
  [1820, 130], [1640, 190], [1530, 290], [1885, 430], [1600, 350], [1710, 800], [1490, 850], [1180, 960],
] as const

const services = [
  { x: 270, y: 180, label: "RO / Water Purifier", icon: "drop" },
  { x: 1640, y: 190, label: "AC Service & Installation", icon: "ac" },
  { x: 270, y: 700, label: "Repair & Maintenance", icon: "tools" },
  { x: 1710, y: 730, label: "Washing Machine Repair", icon: "plug" },
  { x: 380, y: 410, label: "Chimney Cleaning", icon: "chimney" },
  { x: 1530, y: 470, label: "Refrigerator Repair", icon: "fridge" },
  { x: 760, y: 920, label: "Geyser Repair", icon: "geyser" },
]

function ServiceIcon({ type }: { type: string }) {
  if (type === "drop") return <path d="M0-22 C-5-12-16-4-16 7a16 16 0 0 0 32 0C16-4 5-12 0-22Z M-7 9c3 5 8 6 12 4" />
  if (type === "ac") return <><rect x="-28" y="-15" width="56" height="30" rx="4" /><path d="M-20-5h40 M-15 15v10m15-10v10m15-10v10" /></>
  if (type === "tools") return <><path d="m-25 22 47-47 M-19 18-25 24l6 6 6-6 M12-20a12 12 0 0 0 15 15l-10 10-15-15 10-10Z" /></>
  if (type === "plug") return <><path d="M-10-20v18m20-18v18M-16-2h32v4a16 16 0 0 1-32 0v-4Zm16 20v10" /></>
  if (type === "chimney") return <><path d="M-20 24h40M-14 20 0-18l14 38M-10 5h20M-8-8H8" /></>
  if (type === "fridge") return <><rect x="-18" y="-28" width="36" height="56" rx="3" /><path d="M-18-4h36M8-17v7m0 25v7" /></>
  return <><rect x="-17" y="-25" width="34" height="50" rx="3" /><path d="M-10-12h20M-10 0h20M-10 12h20" /></>
}

export function HeroBackground() {
  return (
    <svg className="absolute inset-0 size-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <style>{`
        .hc-flow { stroke-dasharray: 5 14; animation: hc-flow 4s linear infinite; }
        .hc-pulse { animation: hc-pulse 3s ease-in-out infinite; }
        .hc-float { animation: hc-float 8s ease-in-out infinite; }
        @keyframes hc-flow { to { stroke-dashoffset: -76; } }
        @keyframes hc-pulse { 0%,100% { opacity:.25; r:3 } 50% { opacity:1; r:5 } }
        @keyframes hc-float { 0%,100% { transform:translateY(0); opacity:.35 } 50% { transform:translateY(-8px); opacity:.85 } }
        @media (prefers-reduced-motion: reduce) { .hc-flow,.hc-pulse,.hc-float { animation: none; } }
      `}</style>
      <defs>
        <radialGradient id="hero-wash"><stop offset="0" stopColor="#fff" stopOpacity=".98"/><stop offset=".62" stopColor="#f8fbff" stopOpacity=".9"/><stop offset="1" stopColor="#eaf5ff" stopOpacity=".15"/></radialGradient>
        <linearGradient id="hero-line" x1="0" x2="1"><stop stopColor="#087fea" stopOpacity=".1"/><stop offset=".5" stopColor="#00b8f5" stopOpacity=".78"/><stop offset="1" stopColor="#087fea" stopOpacity=".1"/></linearGradient>
        <pattern id="hero-dots" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="#087fea" opacity=".15" /></pattern>
        <mask id="hero-safe"><rect width="1920" height="1080" fill="white"/><ellipse cx="960" cy="505" rx="590" ry="310" fill="black" /></mask>
      </defs>
      <rect width="1920" height="1080" fill="#f8fbff" />
      <rect width="1920" height="1080" fill="url(#hero-wash)" />
      <rect width="1920" height="1080" fill="url(#hero-dots)" mask="url(#hero-safe)" />
      <g fill="none" stroke="url(#hero-line)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" mask="url(#hero-safe)">
        {circuits.map((d) => <path key={d} d={d} />)}
        {circuits.slice(0, 6).map((d, i) => <path key={`flow-${d}`} d={d} className="hc-flow" style={{ animationDelay: `${i * .4}s` }} />)}
      </g>
      <g fill="none" stroke="#087fea" strokeOpacity=".16" strokeWidth="1" mask="url(#hero-safe)">
        <path d="M0 90H1920M0 990H1920M110 0V1080M1810 0V1080" />
        <path d="M100 220h110m-55-55v110M1780 670h90m-45-45v90M620 1020h160m-80-35v70" />
      </g>
      {services.map((service) => (
        <g key={service.label} transform={`translate(${service.x} ${service.y})`}>
          <circle r="64" fill="#fff" fillOpacity=".75" stroke="#087fea" strokeOpacity=".28" strokeWidth="1.5" />
          <circle r="52" fill="none" stroke="#00b8f5" strokeOpacity=".18" strokeDasharray="2 8" />
          <g stroke="#087fea" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><ServiceIcon type={service.icon} /></g>
          <text y="92" textAnchor="middle" fill="#0a2850" fontSize="16" fontWeight="600">{service.label}</text>
        </g>
      ))}
      <g>{nodes.map(([x, y], i) => <g key={`${x}-${y}`}><circle cx={x} cy={y} r="8" fill="none" stroke="#22c55e" strokeOpacity=".28" /><circle cx={x} cy={y} r="3" fill={i % 3 === 0 ? "#22c55e" : "#087fea"} className="hc-pulse" style={{ animationDelay: `${i * .2}s` }} /></g>)}</g>
      <g fill="#00b8f5" opacity=".7">{[[180,260],[540,360],[1380,300],[1750,540],[440,890],[1380,920]].map(([x,y], i) => <circle key={i} cx={x} cy={y} r="2.5" className="hc-float" style={{ animationDelay: `${i * .7}s` }} />)}</g>
    </svg>
  )
}
