"use client"

const services = [
  { x: 380, y: 112, label: "RO / Water Purifier", icon: "drop", side: "left" },
  { x: 260, y: 270, label: "Geyser Repair", icon: "geyser", side: "left" },
  { x: 250, y: 428, label: "Electrician Services", icon: "switchboard", side: "left" },
  { x: 370, y: 570, label: "Solar Panel System", icon: "solar", side: "left" },
  { x: 1540, y: 112, label: "AC Service & Installation", icon: "ac", side: "right" },
  { x: 1660, y: 270, label: "Refrigerator Repair", icon: "fridge", side: "right" },
  { x: 1670, y: 428, label: "Washing Machine Repair", icon: "plug", side: "right" },
  { x: 1550, y: 570, label: "Decoration Services", icon: "decoration", side: "right" },
] as const

const blueprintPaths = [
  { d: "M120 58H156L196 98V150H248L380 112", side: "left", kind: "primary" },
  { d: "M0 146H58V208H118L154 174H220V270", side: "left", kind: "secondary" },
  { d: "M0 282H78L112 316H172V358L220 380", side: "left", kind: "primary" },
  { d: "M0 392H54V450H132L170 412H220V428", side: "left", kind: "secondary" },
  { d: "M0 520H86L124 486H176V548L220 570", side: "left", kind: "primary" },
  { d: "M0 638H72L108 602H148L184 566", side: "left", kind: "secondary" },
  { d: "M220 112H286L326 78H420V42H520", side: "left", kind: "secondary" },
  { d: "M220 270H302V236H364L406 194H486", side: "left", kind: "primary" },
  { d: "M220 380H286L326 416H390V462H480", side: "left", kind: "secondary" },
  { d: "M220 570H294L336 604H410V638H504", side: "left", kind: "primary" },
  { d: "M1800 74H1764L1724 116V158H1672L1540 112", side: "right", kind: "primary" },
  { d: "M1920 172H1862V228H1806L1768 194H1700V270", side: "right", kind: "secondary" },
  { d: "M1920 294H1844L1810 326H1748V366L1700 380", side: "right", kind: "primary" },
  { d: "M1920 412H1860V468H1790L1750 430H1700V428", side: "right", kind: "secondary" },
  { d: "M1920 532H1838L1798 498H1740V548L1700 570", side: "right", kind: "primary" },
  { d: "M1920 646H1848L1812 608H1768L1730 570", side: "right", kind: "secondary" },
  { d: "M1700 112H1634L1594 80H1502V44H1400", side: "right", kind: "secondary" },
  { d: "M1700 270H1618V236H1556L1514 194H1430", side: "right", kind: "primary" },
  { d: "M1700 380H1634L1594 416H1530V462H1440", side: "right", kind: "secondary" },
  { d: "M1700 570H1626L1584 604H1510V638H1418", side: "right", kind: "primary" },
] as const

const junctions = [
  [86,58],[126,98],[188,150],[58,146],[118,208],[154,174],[78,282],[112,316],[172,358],[54,392],[132,450],[176,486],[124,520],[176,548],[108,602],[286,112],[326,78],[364,236],[406,194],[286,380],[326,416],[390,462],[294,570],[336,604],
  [1828,74],[1788,116],[1728,158],[1862,172],[1806,228],[1768,194],[1844,294],[1810,326],[1748,366],[1860,412],[1790,468],[1750,430],[1838,532],[1798,498],[1740,548],[1848,646],[1812,608],[1634,112],[1594,80],[1618,270],[1556,236],[1514,194],[1634,380],[1594,416],[1530,462],[1626,570],[1584,604]
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

export function HeroBackground() {
  return (
    <>
      <svg className="hc-desktop-hero absolute inset-0 size-full" viewBox="0 0 1920 680" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <style>{`
        .hc-primary { fill:none; stroke:#2563eb; stroke-width:2.25; stroke-linecap:round; stroke-linejoin:round; opacity:.66; }
        .hc-secondary { fill:none; stroke:#5b9bf6; stroke-width:1.15; stroke-linecap:round; stroke-linejoin:round; opacity:.46; }
        .hc-energy { fill:none; stroke:#00d2ff; stroke-width:2.7; stroke-dasharray:6 20; animation:hc-flow 3.1s linear infinite; opacity:.9; }
        .hc-junction { fill:#00d2ff; animation:hc-pulse 2.8s ease-in-out infinite; }
        .hc-service-art { animation:hc-service 6s ease-in-out infinite; transform-box:fill-box; transform-origin:center; }
        .hc-grid { fill:url(#hero-grid); opacity:.34; }
        @keyframes hc-flow { to { stroke-dashoffset:-104; } }
        @keyframes hc-pulse { 0%,100% { opacity:.35; r:3 } 50% { opacity:1; r:5.5 } }
        @keyframes hc-service { 0%,100% { opacity:.86 } 50% { opacity:1; filter:drop-shadow(0 0 7px rgba(0,210,255,.36)) } }
        .hc-mobile-hero { display:none }
        @media (max-width:1500px) {
          .hc-service-art { display:none }
          .hc-service-art.hc-priority { display:block }
          .hc-primary,.hc-secondary { opacity:.24 }
          .hc-energy { opacity:.5 }
        }
        @media (max-width:700px) {
          .hc-desktop-hero { display:none }
          .hc-mobile-hero { display:block }
        }
        @media (prefers-reduced-motion:reduce) { .hc-energy,.hc-junction,.hc-service-art { animation:none } }
      `}</style>
      <defs>
        <radialGradient id="hero-wash"><stop offset="0" stopColor="#f8fafc" stopOpacity="1"/><stop offset=".5" stopColor="#f8fafc" stopOpacity=".98"/><stop offset=".78" stopColor="#f8fafc" stopOpacity=".82"/><stop offset="1" stopColor="#dbeafe" stopOpacity=".68"/></radialGradient>
        <pattern id="hero-grid" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#2563eb" /></pattern>
        <linearGradient id="fade-left"><stop stopColor="#f8fafc" stopOpacity="0"/><stop offset=".68" stopColor="#f8fafc" stopOpacity=".12"/><stop offset="1" stopColor="#f8fafc" stopOpacity=".95"/></linearGradient>
        <mask id="hero-safe"><rect width="1920" height="680" fill="white"/><ellipse cx="960" cy="350" rx="670" ry="285" fill="black" /></mask>
      </defs>
      <rect x="-100" y="-100" width="2120" height="1000" fill="#f8fafc" />
      <rect width="1920" height="680" fill="#f8fafc" />
      <rect width="1920" height="680" fill="url(#hero-wash)" />
      <rect width="1920" height="680" className="hc-grid" mask="url(#hero-safe)" />
      <g mask="url(#hero-safe)">
        {blueprintPaths.map(({ d, kind }, i) => <path key={`bp-${i}`} d={d} className={kind === "primary" ? "hc-primary" : "hc-secondary"} />)}
        {blueprintPaths.filter(({ kind }) => kind === "primary").map(({ d }, i) => <path key={`energy-${i}`} d={d} className="hc-energy" style={{ animationDelay:`${i * .42}s` }} />)}
        <path d="M0 86H72V128H128M0 446H82L112 416M1920 96H1842V136H1792M1920 458H1840L1804 422" className="hc-energy" />
        <g className="hc-secondary">
          <path d="M18 18H132L164 50M18 662H112L148 626" />
          <path d="M1902 24H1790L1754 58M1902 660H1814L1776 622" />
          <path d="M102 0V82M178 0V54M1818 0V72M1744 0V48M102 680V610M178 680V632M1818 680V604M1744 680V640" />
          <path d="M260 176H322L350 148M1660 176H1598L1570 148" />
        </g>
      </g>
      <g>{junctions.map(([x,y], i) => <circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" className="hc-junction" style={{animationDelay:`${i*.11}s`}} />)}</g>
      {services.map((service, i) => <g key={service.label} transform={`translate(${service.x} ${service.y})`}>
        <g className={`hc-service-art ${i === 0 || i === 1 || i === 4 || i === 5 ? "hc-priority" : ""}`} style={{animationDelay:`${i*.35}s`}}>
          <circle r="40" fill="#f8fafc" fillOpacity=".94" stroke="#2563eb" strokeOpacity=".48" strokeWidth="2" />
          <circle r="31" fill="none" stroke="#00d2ff" strokeOpacity=".6" strokeWidth="1.5" strokeDasharray="3 8" />
          <circle r="48" fill="none" stroke="#00d2ff" strokeOpacity=".25" strokeWidth="2" />
          <g fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><ServiceIcon type={service.icon} /></g>
          <text y="62" textAnchor="middle" fill="#0b132b" fontSize="12" fontWeight="650">{service.label}</text>
        </g>
      </g>)}
    </svg>
    <svg className="hc-mobile-hero absolute inset-0 size-full" viewBox="0 0 400 620" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs><pattern id="mobile-grid" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#2563eb" /></pattern></defs>
      <rect width="400" height="620" fill="url(#mobile-grid)" opacity=".2" />
      <path d="M0 108H66L102 144V190M400 108H334L298 144V190M0 500H72L108 464V420M400 500H328L292 464V420" fill="none" stroke="#2563eb" strokeWidth="2" opacity=".42" />
      <path d="M0 108H66L102 144V190M400 108H334L298 144V190M0 500H72L108 464V420M400 500H328L292 464V420" className="hc-energy" />
      {[ [76,108], [102,144], [324,108], [298,144], [82,500], [108,464], [318,500], [292,464] ].map(([x,y], i) => <circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" className="hc-junction" style={{animationDelay:`${i * .2}s`}} />)}
      {[ [76,168,"drop","RO / Water Purifier"], [324,168,"ac","AC Service & Installation"], [82,456,"geyser","Geyser Repair"], [318,456,"plug","Washing Machine Repair"] ].map(([x,y,icon,label]) => <g key={label} transform={`translate(${x} ${y})`} className="hc-service-art">
        <circle r="32" fill="#f8fafc" fillOpacity=".96" stroke="#2563eb" strokeOpacity=".5" strokeWidth="2" /><circle r="25" fill="none" stroke="#00d2ff" strokeOpacity=".6" strokeDasharray="3 7" /><g fill="none" stroke="#2563eb" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><ServiceIcon type={icon as string} /></g><text y="50" textAnchor="middle" fill="#0b132b" fontSize="9" fontWeight="650">{label as string}</text>
      </g>)}
    </svg>
    </>
  )
}
