"use client"

const services = [
  { x: 220, y: 112, label: "RO / Water Purifier", icon: "drop", side: "left" },
  { x: 220, y: 270, label: "Geyser Repair", icon: "geyser", side: "left" },
  { x: 220, y: 428, label: "Electrician Services", icon: "switchboard", side: "left" },
  { x: 220, y: 570, label: "Solar Panel System", icon: "solar", side: "left" },
  { x: 1700, y: 112, label: "AC Service & Installation", icon: "ac", side: "right" },
  { x: 1700, y: 270, label: "Refrigerator Repair", icon: "fridge", side: "right" },
  { x: 1700, y: 428, label: "Washing Machine Repair", icon: "plug", side: "right" },
  { x: 1700, y: 570, label: "Decoration Services", icon: "decoration", side: "right" },
] as const

const leftPaths = [
  "M0 64H92L132 104H178L220 112",
  "M0 148H72V198H148L220 270",
  "M0 282H104L142 246H190L220 270",
  "M0 366H62V428H220",
  "M0 506H84L126 548H178L220 570",
  "M0 638H104L150 590H220",
  "M220 112H310L354 72H452",
  "M220 270H330L380 220H488",
  "M220 428H320L370 378H480",
  "M220 570H326L370 612H490",
] as const

const rightPaths = leftPaths.map((path) => path.replace(/M0/g, "M1920").replace(/H(\d+)/g, (_, value) => `H${1920 - Number(value)}`).replace(/V/g, "V"))

function ServiceIcon({ type }: { type: string }) {
  if (type === "drop") return <path d="M0-24C-6-12-17-4-17 7a17 17 0 0 0 34 0C17-4 6-12 0-24ZM-8 9c3 5 8 7 13 4" />
  if (type === "geyser") return <><rect x="-17" y="-27" width="34" height="54" rx="4" /><path d="M-10-12h20M-10 0h20M-10 12h20M-7 34c0 8-6 8-6 14m20-14c0 8-6 8-6 14" /></>
  if (type === "switchboard") return <><rect x="-28" y="-23" width="56" height="46" rx="5" /><circle cx="-13" cy="-8" r="3" /><circle cx="0" cy="-8" r="3" /><circle cx="13" cy="-8" r="3" /><path d="M-17 8h34M-12 16h24" /></>
  if (type === "solar") return <><path d="M-27-13h54l-9 29h-36zM-18-13l-5-28M18-13l5-28M-10-13v29M0-13v29M10-13v29M-34 24h68M-12 31h24" /></>
  if (type === "ac") return <><rect x="-31" y="-16" width="62" height="32" rx="5" /><path d="M-22-5h44M-18 16v13m18-13v13m18-13v13" /></>
  if (type === "fridge") return <><rect x="-19" y="-29" width="38" height="58" rx="4" /><path d="M-19-5h38M9-19v8m0 26v8" /></>
  if (type === "plug") return <><path d="M-11-22v20m22-20v20M-18-2h36v5a18 18 0 0 1-36 0v-5Zm18 23v12" /></>
  return <><path d="M0 28V-8M0-8C-24-33-39-2 0 3M0-8C24-33 39-2 0 3M0 3C-20 8-18 27 0 28M0 3C20 8 18 27 0 28" /><circle cx="0" cy="-8" r="4" /></>
}

export function HeroBackground() {
  return (
    <svg className="absolute inset-0 size-full" viewBox="0 0 1920 680" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <style>{`
        .hc-primary { fill:none; stroke:#2563eb; stroke-width:2.4; stroke-linecap:round; stroke-linejoin:round; opacity:.58; }
        .hc-secondary { fill:none; stroke:#5b9bf6; stroke-width:1.2; stroke-linecap:round; stroke-linejoin:round; opacity:.42; }
        .hc-energy { fill:none; stroke:#00d2ff; stroke-width:3; stroke-dasharray:7 19; animation:hc-flow 3.8s linear infinite; opacity:.82; }
        .hc-junction { fill:#00d2ff; animation:hc-pulse 2.8s ease-in-out infinite; }
        .hc-service-art { animation:hc-service 6s ease-in-out infinite; transform-box:fill-box; transform-origin:center; }
        .hc-grid { fill:url(#hero-grid); opacity:.34; }
        @keyframes hc-flow { to { stroke-dashoffset:-104; } }
        @keyframes hc-pulse { 0%,100% { opacity:.35; r:3 } 50% { opacity:1; r:5.5 } }
        @keyframes hc-service { 0%,100% { opacity:.86 } 50% { opacity:1; filter:drop-shadow(0 0 7px rgba(0,210,255,.36)) } }
        @media (max-width:1024px) { .hc-primary,.hc-secondary { opacity:.18 } .hc-service-art { display:none } .hc-energy { opacity:.38 } }
        @media (max-width:700px) { .hc-primary,.hc-secondary { opacity:.12 } .hc-energy { opacity:.28 } }
        @media (prefers-reduced-motion:reduce) { .hc-energy,.hc-junction,.hc-service-art { animation:none } }
      `}</style>
      <defs>
        <radialGradient id="hero-wash"><stop offset="0" stopColor="#f8fafc" stopOpacity="1"/><stop offset=".62" stopColor="#f8fafc" stopOpacity=".9"/><stop offset="1" stopColor="#dbeafe" stopOpacity=".7"/></radialGradient>
        <pattern id="hero-grid" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#2563eb" /></pattern>
        <linearGradient id="fade-left"><stop stopColor="#f8fafc" stopOpacity="0"/><stop offset=".68" stopColor="#f8fafc" stopOpacity=".12"/><stop offset="1" stopColor="#f8fafc" stopOpacity=".95"/></linearGradient>
        <mask id="hero-safe"><rect width="1920" height="680" fill="white"/><ellipse cx="960" cy="350" rx="670" ry="285" fill="black" /></mask>
      </defs>
      <rect width="1920" height="680" fill="#f8fafc" />
      <rect width="1920" height="680" fill="url(#hero-wash)" />
      <rect width="1920" height="680" className="hc-grid" mask="url(#hero-safe)" />
      <g mask="url(#hero-safe)">
        {leftPaths.map((d, i) => <path key={`l-${i}`} d={d} className={i % 3 === 0 ? "hc-primary" : "hc-secondary"} />)}
        {rightPaths.map((d, i) => <path key={`r-${i}`} d={d} className={i % 3 === 0 ? "hc-primary" : "hc-secondary"} />)}
        <path d="M0 86H112L158 132M0 418H80L130 368M1920 86H1808L1762 132M1920 418H1840L1790 368" className="hc-energy" />
        {[...leftPaths.slice(0,5), ...rightPaths.slice(0,5)].map((d, i) => <path key={`e-${i}`} d={d} className="hc-energy" style={{ animationDelay:`${i * .32}s` }} />)}
        <g className="hc-secondary"><path d="M0 40H130M0 640H160M1920 40H1790M1920 640H1760" /><path d="M80 0V190M1840 0V190M86 500V680M1834 500V680" /></g>
      </g>
      <g mask="url(#hero-safe)">{[...leftPaths.slice(0,7), ...rightPaths.slice(0,7)].map((d, i) => <path key={`j-${i}`} d={d} pathLength="1" stroke="transparent" fill="none" />)}</g>
      <g>{[[92,64],[132,104],[354,72],[72,198],[142,246],[104,282],[126,548],[178,570],[1790,64],[1788,104],[1566,72],[1848,198],[1778,246],[1816,282],[1794,548],[1742,570]].map(([x,y], i) => <circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" className="hc-junction" style={{animationDelay:`${i*.16}s`}} />)}</g>
      {services.map((service, i) => <g key={service.label} transform={`translate(${service.x} ${service.y})`}>
        <g className="hc-service-art" style={{animationDelay:`${i*.35}s`}}>
          <circle r="66" fill="#f8fafc" fillOpacity=".94" stroke="#2563eb" strokeOpacity=".48" strokeWidth="2" />
          <circle r="55" fill="none" stroke="#00d2ff" strokeOpacity=".6" strokeWidth="1.5" strokeDasharray="3 8" />
          <circle r="72" fill="none" stroke="#00d2ff" strokeOpacity=".25" strokeWidth="2" />
          <g fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><ServiceIcon type={service.icon} /></g>
          <text y="92" textAnchor="middle" fill="#0b132b" fontSize="14" fontWeight="650">{service.label}</text>
        </g>
      </g>)}
    </svg>
  )
}
