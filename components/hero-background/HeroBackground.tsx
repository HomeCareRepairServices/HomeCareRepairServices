"use client"

import { useId } from "react"

const services = [
  { x: 205, y: 118, label: "RO / Water Purifier", icon: "drop" },
  { x: 155, y: 330, label: "Geyser Repair", icon: "geyser" },
  { x: 1395, y: 118, label: "AC Service & Installation", icon: "ac" },
  { x: 1445, y: 330, label: "Refrigerator Repair", icon: "fridge" },
  { x: 230, y: 555, label: "Solar Panel System", icon: "solar" },
  { x: 1370, y: 555, label: "Washing Machine Repair", icon: "plug" },
] as const

function ServiceIcon({ type }: { type: string }) {
  if (type === "drop") return <path d="M0-24C-6-12-17-4-17 7a17 17 0 0 0 34 0C17-4 6-12 0-24ZM-8 9c3 5 8 7 13 4" />
  if (type === "geyser") return <><rect x="-17" y="-27" width="34" height="54" rx="4" /><path d="M-10-12h20M-10 0h20M-10 12h20" /></>
  if (type === "ac") return <><rect x="-31" y="-16" width="62" height="32" rx="5" /><path d="M-22-5h44M-18 16v13m18-13v13m18-13v13" /></>
  if (type === "fridge") return <><rect x="-19" y="-29" width="38" height="58" rx="4" /><path d="M-19-5h38M9-19v8m0 26v8" /></>
  if (type === "solar") return <><path d="M-27-13h54l-9 29h-36zM-18-13l-5-28M18-13l5-28M-10-13v29M0-13v29M10-13v29M-34 24h68" /></>
  return <><path d="M-11-22v20m22-20v20M-18-2h36v5a18 18 0 0 1-36 0v-5Zm18 23v12" /></>
}

const paths = [
  "M0 92H80L132 42H212L270 118", "M0 252H76L122 296H188V330", "M0 470H90L142 420H210L300 555", "M270 118H360L414 72H520", "M188 330H310L364 378H480",
  "M1600 92H1520L1468 42H1450L1395 118", "M1600 252H1524L1478 296H1445V330", "M1600 470H1510L1458 420H1460L1370 555", "M1395 118H1310L1256 72H1190", "M1445 330H1330L1276 378H1210",
]

export function HeroBackground() {
  const uid = useId().replace(/:/g, "")
  return (
    <svg className="hero-blueprint absolute inset-0 size-full" viewBox="0 0 1600 680" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <style>{`.hc-primary{fill:none;stroke:#2563eb;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;opacity:.48}.hc-energy{fill:none;stroke:#00bfe8;stroke-width:2.5;stroke-dasharray:5 18;animation:hc-flow 3s linear infinite}.hc-junction{fill:#00bfe8;animation:hc-pulse 2.5s ease-in-out infinite}.hc-service-art{animation:hc-service 5.5s ease-in-out infinite;transform-box:fill-box;transform-origin:center}.hc-grid{fill:url(#grid-${uid});opacity:.35}@keyframes hc-flow{to{stroke-dashoffset:-92}}@keyframes hc-pulse{0%,100%{opacity:.3}50%{opacity:1}}@keyframes hc-service{0%,100%{opacity:.78}50%{opacity:1;filter:drop-shadow(0 0 7px rgba(0,191,232,.35))}}.mobile-art{display:none}@media(max-width:1024px){.desktop-art{display:none}.mobile-art{display:block}.hero-blueprint{opacity:.72}}@media(prefers-reduced-motion:reduce){.hc-energy,.hc-junction,.hc-service-art{animation:none}}`}</style>
      <defs><pattern id={`grid-${uid}`} width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#2563eb" /></pattern><radialGradient id={`wash-${uid}`}><stop stopColor="#f8fafc" /><stop offset="1" stopColor="#dbeafe" stopOpacity=".7" /></radialGradient></defs>
      <rect width="1920" height="680" fill="#f8fafc" /><rect width="1920" height="680" fill={`url(#wash-${uid})`} /><rect width="1920" height="680" className="hc-grid" />
      <g className="desktop-art">
        {paths.map((d, i) => <g key={d}><path d={d} className="hc-primary" /><path d={d} className="hc-energy" style={{ animationDelay: `${i * .3}s` }} /></g>)}
        {services.map((s, i) => <g key={s.label} transform={`translate(${s.x} ${s.y})`} className="hc-service-art" style={{ animationDelay: `${i * .3}s` }}><circle r="40" fill="#f8fafc" fillOpacity=".9" stroke="#2563eb" strokeOpacity=".5" strokeWidth="2" /><circle r="31" fill="none" stroke="#00bfe8" strokeOpacity=".7" strokeDasharray="3 8" /><g fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><ServiceIcon type={s.icon} /></g><text y="62" textAnchor="middle" fill="#0b132b" fontSize="12" fontWeight="650">{s.label}</text></g>)}
      </g>
      <g className="mobile-art"><path d="M0 150H70L112 108H170M1920 150H1850L1808 108H1750M0 520H80L124 564H190M1920 520H1840L1796 564H1730" className="hc-primary" /><path d="M0 150H70L112 108H170M1920 150H1850L1808 108H1750M0 520H80L124 564H190M1920 520H1840L1796 564H1730" className="hc-energy" /><circle cx="110" cy="150" r="4" className="hc-junction" /><circle cx="1810" cy="150" r="4" className="hc-junction" /><circle cx="124" cy="520" r="4" className="hc-junction" /><circle cx="1796" cy="520" r="4" className="hc-junction" /></g>
    </svg>
  )
}

export default HeroBackground
