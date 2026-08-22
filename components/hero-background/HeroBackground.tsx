"use client"

const leftServices = [
  { x: 210, y: 112, label: "RO / Water Purifier", icon: "drop" },
  { x: 112, y: 270, label: "Geyser Repair", icon: "geyser" },
  { x: 104, y: 428, label: "Electrician Services", icon: "switchboard" },
  { x: 202, y: 570, label: "Solar Panel System", icon: "solar" },
] as const

const rightServices = [
  { x: 70, y: 112, label: "AC Service & Installation", icon: "ac" },
  { x: 168, y: 270, label: "Refrigerator Repair", icon: "fridge" },
  { x: 176, y: 428, label: "Washing Machine Repair", icon: "plug" },
  { x: 78, y: 570, label: "Decoration Services", icon: "decoration" },
] as const

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

function ServiceArt({ service, delay }: { service: { x: number; y: number; label: string; icon: string }; delay: number }) {
  return <g transform={`translate(${service.x} ${service.y})`} className="hc-service-art" style={{ animationDelay: `${delay}s` }}>
    <circle r="40" className="hc-icon-fill" /><circle r="31" fill="none" className="hc-ring" strokeDasharray="3 8" /><circle r="48" fill="none" className="hc-outer-ring" />
    <g fill="none" className="hc-icon-line"><ServiceIcon type={service.icon} /></g>
    <text y="62" textAnchor="middle" className="hc-label">{service.label}</text>
  </g>
}

function Cluster({ side, services }: { side: "left" | "right"; services: readonly { x: number; y: number; label: string; icon: string }[] }) {
  const right = side === "right"
  return <svg className={`hc-cluster hc-cluster-${side}`} viewBox="0 0 280 680" aria-hidden="true">
    <g className="hc-secondary"><path d={right ? "M280 74H246L208 116V158H172M280 172H228V228H180L142 194H112V270M280 294H214L180 326H128V366L80 380M280 412H226V468H160L120 430H80V428M280 532H208L168 498H110V548L70 570M280 646H208L172 608H128L90 570" : "M0 58H36L76 98V150H108M0 146H58V208H100L136 174H168V270M0 282H78L112 316H150V358L198 380M0 392H54V450H132L170 412H200V428M0 520H86L124 486H176V548L220 570M0 638H72L108 602H148L184 566"} />
      <path d={right ? "M80 112H146L186 80H236V44H280M80 270H162V236H224L266 194H280M80 380H146L186 416H250V462H280M80 570H154L196 604H260V638H280" : "M200 112H134L94 78H44V42H0M200 270H118V236H56L14 194H0M200 380H134L94 416H30V462H0M200 570H126L84 604H20V638H0"} /></g>
    <g className="hc-energy"><path d={right ? "M280 86H208V128H170M280 446H198L168 416M0 96H72V136H112M0 458H80L116 422" : "M0 86H72V128H110M0 446H82L112 416M280 96H208V136H168M280 458H200L164 422"} /></g>
    {services.map((service, i) => <ServiceArt key={service.label} service={service} delay={i * 0.35} />)}
  </svg>
}

export function HeroBackground() {
  return <div className="hc-hero-art" aria-hidden="true">
    <svg className="hc-base-bg" viewBox="0 0 1920 680" preserveAspectRatio="xMidYMid slice">
      <defs><radialGradient id="hero-wash"><stop offset="0" stopColor="#f8fafc" /><stop offset=".72" stopColor="#f8fafc" stopOpacity=".94" /><stop offset="1" stopColor="#dbeafe" stopOpacity=".7" /></radialGradient><pattern id="hero-grid" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#2563eb" /></pattern></defs>
      <rect width="1920" height="680" fill="#f8fafc" /><rect width="1920" height="680" fill="url(#hero-wash)" /><rect width="1920" height="680" fill="url(#hero-grid)" opacity=".34" />
    </svg>
    <Cluster side="left" services={leftServices} /><Cluster side="right" services={rightServices} />
    <style>{`
      .hc-hero-art { position:absolute; inset:0; overflow:visible; pointer-events:none; }
      .hc-base-bg { position:absolute; inset:0; width:100%; height:100%; }
      .hc-cluster { position:absolute; top:0; width:min(22vw, 360px); height:100%; overflow:visible; }
      .hc-cluster-left { left:clamp(0px, 2vw, 36px); }
      .hc-cluster-right { right:clamp(0px, 2vw, 36px); }
      .hc-primary,.hc-secondary { fill:none; stroke:#2563eb; stroke-linecap:round; stroke-linejoin:round; }
      .hc-secondary { stroke-width:1.15; opacity:.46; }
      .hc-energy { fill:none; stroke:#00d2ff; stroke-width:2.7; stroke-dasharray:6 20; animation:hc-flow 3.1s linear infinite; opacity:.9; }
      .hc-energy path { fill:none; }
      .hc-service-art { animation:hc-service 6s ease-in-out infinite; transform-box:fill-box; transform-origin:center; }
      .hc-icon-fill { fill:#f8fafc; fill-opacity:.94; stroke:#2563eb; stroke-opacity:.48; stroke-width:2; }
      .hc-ring { stroke:#00d2ff; stroke-opacity:.6; stroke-width:1.5; }
      .hc-outer-ring { stroke:#00d2ff; stroke-opacity:.25; stroke-width:2; }
      .hc-icon-line { stroke:#2563eb; stroke-width:1.8; stroke-linecap:round; stroke-linejoin:round; }
      .hc-label { fill:#0b132b; font-size:12px; font-weight:650; }
      @keyframes hc-flow { to { stroke-dashoffset:-104; } }
      @keyframes hc-service { 0%,100% { opacity:.86 } 50% { opacity:1; filter:drop-shadow(0 0 7px rgba(0,210,255,.36)) } }
      @media (max-width:1100px) {
        .hc-cluster { width:clamp(180px, 22vw, 260px); }
        .hc-service-art { display:none; }
        .hc-secondary { opacity:.25; }
        .hc-energy { opacity:.42; }
      }
      @media (max-width:700px) {
        .hc-cluster { display:none; }
        .hc-base-bg { display:block; }
      }
      @media (prefers-reduced-motion:reduce) { .hc-energy,.hc-service-art { animation:none; } }
    `}</style>
  </div>
}
