"use client"

const circuits = [
  "M 35 90 H 150 L 205 135 H 330 L 390 82 H 510",
  "M 45 330 H 145 V 270 H 285 L 345 220 H 430",
  "M 25 625 H 155 L 215 570 H 350 V 650 H 480",
  "M 1885 90 H 1770 L 1715 135 H 1590 L 1530 82 H 1410",
  "M 1875 330 H 1775 V 270 H 1635 L 1575 220 H 1480",
  "M 1890 625 H 1765 L 1705 570 H 1570 V 650 H 1450",
  "M 470 690 V 635 H 650 L 700 675 H 820",
  "M 1450 690 V 635 H 1270 L 1220 675 H 1100",
]

const nodes = [
  [70, 90], [205, 135], [390, 82], [45, 330], [345, 220], [25, 625], [215, 570], [480, 650],
  [1850, 90], [1715, 135], [1575, 220], [1875, 330], [1635, 270], [1705, 570], [1570, 650], [1220, 675],
] as const

const services = [
  { x: 230, y: 130, label: "RO / Water Purifier", icon: "drop" },
  { x: 1690, y: 130, label: "AC Service & Installation", icon: "ac" },
  { x: 245, y: 575, label: "Repair & Maintenance", icon: "tools" },
  { x: 1675, y: 570, label: "Washing Machine Repair", icon: "plug" },
  { x: 390, y: 315, label: "Chimney Cleaning", icon: "chimney" },
  { x: 1535, y: 320, label: "Refrigerator Repair", icon: "fridge" },
  { x: 960, y: 625, label: "Geyser Repair", icon: "geyser" },
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
    <svg className="absolute inset-0 size-full" viewBox="0 0 1920 720" preserveAspectRatio="none" aria-hidden="true">
      <style>{`
        .hc-flow { stroke-dasharray: 5 14; animation: hc-flow 4s linear infinite; }
        .hc-pulse { animation: hc-pulse 3s ease-in-out infinite; }
        .hc-float { animation: hc-float 8s ease-in-out infinite; }
        @keyframes hc-flow { to { stroke-dashoffset: -76; } }
        @keyframes hc-pulse { 0%,100% { opacity:.25; r:3 } 50% { opacity:1; r:5 } }
        @keyframes hc-float { 0%,100% { transform:translateY(0); opacity:.35 } 50% { transform:translateY(-8px); opacity:.85 } }
        @media (max-width: 1024px) { .hc-service-art { display: none; } }
        @media (max-width: 700px) { .hc-flow { opacity: .65; } }
        @media (prefers-reduced-motion: reduce) { .hc-flow,.hc-pulse,.hc-float { animation: none; } }
      `}</style>
      <defs>
        <radialGradient id="hero-wash"><stop offset="0" stopColor="#fff" stopOpacity=".98"/><stop offset=".62" stopColor="#f8fbff" stopOpacity=".9"/><stop offset="1" stopColor="#eaf5ff" stopOpacity=".15"/></radialGradient>
        <linearGradient id="hero-line" x1="0" x2="1"><stop stopColor="#087fea" stopOpacity=".1"/><stop offset=".5" stopColor="#00b8f5" stopOpacity=".78"/><stop offset="1" stopColor="#087fea" stopOpacity=".1"/></linearGradient>
        <pattern id="hero-dots" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="#087fea" opacity=".15" /></pattern>
        <mask id="hero-safe"><rect width="1920" height="720" fill="white"/><ellipse cx="960" cy="360" rx="540" ry="230" fill="black" /></mask>
      </defs>
      <rect width="1920" height="720" fill="#f8fbff" />
      <rect width="1920" height="720" fill="url(#hero-wash)" />
      <rect width="1920" height="720" fill="url(#hero-dots)" mask="url(#hero-safe)" />
      <g fill="none" stroke="url(#hero-line)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" mask="url(#hero-safe)">
        {circuits.map((d) => <path key={d} d={d} />)}
        {circuits.slice(0, 6).map((d, i) => <path key={`flow-${d}`} d={d} className="hc-flow" style={{ animationDelay: `${i * .4}s` }} />)}
      </g>
      <g fill="none" stroke="#087fea" strokeOpacity=".16" strokeWidth="1" mask="url(#hero-safe)">
        <path d="M0 54H1920M0 670H1920M110 0V720M1810 0V720" />
        <path d="M100 220h110m-55-55v110M1780 670h90m-45-45v90M620 1020h160m-80-35v70" />
      </g>
      {services.map((service) => (
        <g key={service.label} className="hc-service-art" transform={`translate(${service.x} ${service.y})`}>
          <circle r="64" fill="#fff" fillOpacity=".75" stroke="#087fea" strokeOpacity=".28" strokeWidth="1.5" />
          <circle r="52" fill="none" stroke="#00b8f5" strokeOpacity=".18" strokeDasharray="2 8" />
          <g fill="none" stroke="#087fea" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><ServiceIcon type={service.icon} /></g>
          <text y="92" textAnchor="middle" fill="#0a2850" fontSize="16" fontWeight="600">{service.label}</text>
        </g>
      ))}
      <g>{nodes.map(([x, y], i) => <g key={`${x}-${y}`}><circle cx={x} cy={y} r="8" fill="none" stroke="#22c55e" strokeOpacity=".28" /><circle cx={x} cy={y} r="3" fill={i % 3 === 0 ? "#22c55e" : "#087fea"} className="hc-pulse" style={{ animationDelay: `${i * .2}s` }} /></g>)}</g>
      <g fill="#00b8f5" opacity=".7">{[[180,260],[540,360],[1380,300],[1750,540],[440,890],[1380,920]].map(([x,y], i) => <circle key={i} cx={x} cy={y} r="2.5" className="hc-float" style={{ animationDelay: `${i * .7}s` }} />)}</g>
    </svg>
  )
}
