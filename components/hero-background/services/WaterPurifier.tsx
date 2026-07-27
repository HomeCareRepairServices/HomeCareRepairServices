"use client"

import { motion } from "framer-motion"
import {
  BlueprintContainer,
  BlueprintGlow,
  BlueprintNode,
  BlueprintPipe,
  BlueprintValve,
  BlueprintGauge,
  BlueprintArrow,
  BlueprintLabel,
  BlueprintParticle,
} from "../primitives"

/**
 * Premium Water Purifier Blueprint
 * 
 * An advanced engineering illustration representing the reverse osmosis process.
 * Features CAD guide lines, technical measurements, connection bolts,
 * inspection windows, membrane textures, scanning animation, and system LEDs.
 */
export function WaterPurifier() {
  // Precise Y-axis center for the main pipeline
  const cy = 540

  // Core system nodes configuration
  const chambers = [
    { x: 640, label: "SEDIMENT", glowColor: "#CAF0F8", particleColor: "#CAF0F8", size: 40 },
    { x: 900, label: "CARBON", glowColor: "#FFD166", particleColor: "#FFD166", size: 40 },
    { x: 1160, label: "RO MEMBRANE", glowColor: "#9FFFCB", particleColor: "#9FFFCB", size: 48 },
    { x: 1400, label: "QUALITY", glowColor: "#06D6A0", particleColor: "#06D6A0", size: 36 },
  ]

  // Micro-detail generator for connection flanges and bolts
  const renderFlange = (x: number, y: number, hasValve?: boolean) => {
    const offset = hasValve ? 25 : 15
    const boltRadius = 2
    const bolts = [
      { dx: -offset, dy: -offset },
      { dx: offset, dy: -offset },
      { dx: -offset, dy: offset },
      { dx: offset, dy: offset },
    ]
    return (
      <g>
        {/* Flange casing */}
        <rect 
          x={x - offset} y={y - offset} 
          width={offset * 2} height={offset * 2} 
          rx="2"
          fill="none" 
          stroke="#80FFDB" 
          strokeWidth="0.5" 
          opacity={0.12} 
          vectorEffect="non-scaling-stroke" 
        />
        {/* Bolts */}
        {bolts.map((b, i) => (
          <g key={i} transform={`translate(${x + b.dx}, ${y + b.dy})`}>
            <circle r={boltRadius} fill="none" stroke="#80FFDB" strokeWidth="0.3" opacity={0.2} />
            <circle r="0.5" fill="#80FFDB" opacity={0.3} />
          </g>
        ))}
      </g>
    )
  }

  // Inspection window generator
  const renderWindow = (x: number, y: number, w: number, h: number) => (
    <rect 
      x={x - w/2} y={y - h/2} 
      width={w} height={h} 
      rx="2"
      fill="rgba(8, 18, 45, 0.6)" 
      stroke="#EAF8FF" 
      strokeWidth="0.3" 
      opacity={0.15} 
      vectorEffect="non-scaling-stroke" 
    />
  )

  // Measurement line generator
  const renderMeasurement = (x1: number, x2: number, y: number, text: string) => (
    <g>
      <line x1={x1} y1={y} x2={x2} y2={y} stroke="#EAF8FF" strokeWidth="0.3" opacity={0.12} vectorEffect="non-scaling-stroke" />
      <line x1={x1} y1={y - 4} x2={x1} y2={y + 4} stroke="#EAF8FF" strokeWidth="0.3" opacity={0.12} vectorEffect="non-scaling-stroke" />
      <line x1={x2} y1={y - 4} x2={x2} y2={y + 4} stroke="#EAF8FF" strokeWidth="0.3" opacity={0.12} vectorEffect="non-scaling-stroke" />
      <text 
        x={(x1 + x2) / 2} y={y - 6} 
        textAnchor="middle" 
        fontSize="7" 
        fontFamily="ui-monospace, monospace" 
        fill="#EAF8FF" 
        opacity={0.2}
        letterSpacing="0.5"
      >
        {text}
      </text>
    </g>
  )

  return (
    <BlueprintContainer isRoot={false}>
      {/* =========================================================
          GLOBAL DEFS (Textures & Gradients)
          ========================================================= */}
      <defs>
        {/* RO Membrane Micro-Texture */}
        <pattern id="membrane-grid" width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M 6 0 L 0 0 0 6" fill="none" stroke="#9FFFCB" strokeWidth="0.2" opacity="0.3" />
        </pattern>
        
        {/* Blueprint Paper Reflection */}
        <linearGradient id="blueprint-reflection" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.02" />
          <stop offset="40%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* =========================================================
          BACKGROUND ENHANCEMENTS
          ========================================================= */}
      
      {/* CAD Guide Lines (Vertical & Horizontal) */}
      <g stroke="#80FFDB" strokeWidth="0.3" strokeDasharray="8 4" opacity={0.04}>
        <line x1={640} y1={0} x2={640} y2={1080} />
        <line x1={1160} y1={0} x2={1160} y2={1080} />
        <line x1={0} y1={cy} x2={1920} y2={cy} />
        <line x1={0} y1={cy - 120} x2={1920} y2={cy - 120} />
      </g>

      {/* Radar / Scan Line */}
      <motion.rect
        x={0} y={0} width="4" height="1080"
        fill="url(#blueprint-glow)"
        opacity={0.06}
        animate={{ x: [-100, 2020] }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
      />

      {/* Subtle Bottom Reflection */}
      <rect x="0" y="800" width="1920" height="280" fill="url(#blueprint-reflection)" />


      {/* =========================================================
          STAGE 1: RAW WATER INPUT
          ========================================================= */}
      <BlueprintPipe x1={120} y1={cy} x2={420} y2={cy} strokeColor="#CAF0F8" flowColor="#CAF0F8" />
      <BlueprintArrow x={200} y={cy} strokeColor="#CAF0F8" rotation={0} />
      <BlueprintArrow x={320} y={cy} strokeColor="#CAF0F8" rotation={0} />
      <BlueprintNode x={120} y={cy} size={16} speed={180} strokeColor="#CAF0F8" />
      
      {/* Input Measurement */}
      {renderMeasurement(120, 420, cy - 70, "INPUT 320mm")}


      {/* =========================================================
          STAGE 2: VALVE REGULATION
          ========================================================= */}
      {renderFlange(420, cy, true)}
      <BlueprintValve x={420} y={cy} strokeColor="#80FFDB" speed={8} isOpen={true} />
      
      {/* Status LED near valve */}
      <motion.circle 
        cx={450} cy={cy - 35} r="2.5" 
        fill="#06D6A0" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: [0, 0.8, 0] }} 
        transition={{ duration: 2.5, repeat: Infinity }} 
      />
      <text x={458} y={cy - 33} fontSize="5" fontFamily="monospace" fill="#06D6A0" opacity={0.25}>OK</text>


      {/* =========================================================
          STAGE 3: PRESSURE MONITORING
          ========================================================= */}
      <BlueprintGauge x={420} y={cy - 150} strokeColor="#80FFDB" accentColor="#FFD166" minAngle={-45} maxAngle={45} />
      <line x1={420} y1={cy - 130} x2={420} y2={cy - 50} stroke="#FFD166" strokeWidth="0.3" opacity={0.15} strokeDasharray="2 2" vectorEffect="non-scaling-stroke" />
      
      {/* Pressure Measurement */}
      {renderMeasurement(420 - 20, 420 + 20, cy - 180, "45 PSI")}


      {/* =========================================================
          STAGES 4-7: FILTRATION CHAMBERS
          ========================================================= */}
      {chambers.map((chamber, index) => {
        const prevX = index === 0 ? 420 : chambers[index - 1].x
        const pipeColor = index < 2 ? "#CAF0F8" : "#06D6A0"

        return (
          <g key={chamber.label}>
            {/* Connection Pipe */}
            <BlueprintPipe x1={prevX} y1={cy} x2={chamber.x} y2={cy} strokeColor={pipeColor} flowColor={pipeColor} />
            
            {/* Connection Flanges */}
            {renderFlange(chamber.x, cy)}

            {/* Chamber Core */}
            <BlueprintNode 
              x={chamber.x} y={cy} 
              strokeColor="#80FFDB" 
              glowColor={chamber.glowColor}
              size={chamber.size} 
              speed={100 + (index * 20)}
            />

            {/* Specific Chamber Details */}
            {chamber.label === "RO MEMBRANE" && (
              <g>
                {/* Inner membrane texture */}
                <circle cx={chamber.x} cy={cy} r={chamber.size * 0.7} fill="url(#membrane-grid)" />
                {/* Scan line specific to RO */}
                <motion.rect
                  x={chamber.x - chamber.size}
                  y={cy - chamber.size}
                  width={chamber.size * 2}
                  height={2}
                  fill="#9FFFCB"
                  opacity={0.1}
                  animate={{ y: [cy - chamber.size, cy + chamber.size] }}
                  transition={{ duration: 4, ease: "linear", repeat: Infinity, delay: index * 1.5 }}
                />
              </g>
            )}

            {/* Inspection Windows */}
            {renderWindow(chamber.x, cy - chamber.size * 0.4, 20, 12)}
            {renderWindow(chamber.x, cy + chamber.size * 0.4, 20, 12)}

            {/* Ambient Glow */}
            <BlueprintGlow x={chamber.x} y={cy + 20} color={chamber.glowColor} radius={80} opacity={0.03} />

            {/* Micro-Activity Particles */}
            <BlueprintParticle x={chamber.x - 8} y={cy - 10} color={chamber.particleColor} size={1} delay={0} />
            <BlueprintParticle x={chamber.x + 10} y={cy + 6} color={chamber.particleColor} size={1.2} delay={1.5} />
            <BlueprintParticle x={chamber.x - 12} y={cy + 12} color={chamber.particleColor} size={0.8} delay={3} />
            <BlueprintParticle x={chamber.x + 4} y={cy - 14} color={chamber.particleColor} size={1} delay={4.5} />
            <BlueprintParticle x={chamber.x} y={cy - 2} color={chamber.particleColor} size={0.6} delay={6} />

            {/* Chamber Measurement */}
            {renderMeasurement(
              chamber.x - chamber.size, 
              chamber.x + chamber.size, 
              cy + chamber.size + 60, 
              `${chamber.size * 2}mm`
            )}
          </g>
        )
      })}


      {/* =========================================================
          STAGE 8: PURIFIED WATER OUTPUT
          ========================================================= */}
      <BlueprintPipe x1={1400} y1={cy} x2={1800} y2={cy} strokeColor="#06D6A0" flowColor="#06D6A0" />
      <BlueprintArrow x={1500} y={cy} strokeColor="#06D6A0" rotation={0} />
      <BlueprintArrow x={1650} y={cy} strokeColor="#06D6A0" rotation={0} />
      
      {/* Output Junction */}
      {renderFlange(1800, cy)}
      <BlueprintNode x={1800} y={cy} size={16} speed={180} strokeColor="#06D6A0" />
      
      {/* Output Measurement */}
      {renderMeasurement(1400, 1800, cy - 70, "OUTPUT 400mm")}


      {/* =========================================================
          TECHNICAL ANNOTATIONS (LABELS)
          ========================================================= */}
      <BlueprintLabel x={120} y={cy + 80} text="RAW INPUT" lineColor="#CAF0F8" textColor="#CAF0F8" />
      
      <BlueprintLabel x={420} y={cy - 210} text="PRESSURE REG" lineColor="#FFD166" textColor="#FFD166" />
      
      {chambers.map((chamber) => (
        <BlueprintLabel 
          key={`label-${chamber.label}`}
          x={chamber.x} y={cy + 120} 
          text={chamber.label} 
          lineColor="#80FFDB" 
          textColor="#EAF8FF" 
        />
      ))}

      <BlueprintLabel x={1800} y={cy + 80} text="PURIFIED OUTPUT" lineColor="#06D6A0" textColor="#06D6A0" />


      {/* =========================================================
          CORNER REGISTRATION MARKS (CAD Standard)
          ========================================================= */}
      <g stroke="#80FFDB" strokeWidth="0.3" opacity={0.08} vectorEffect="non-scaling-stroke">
        {/* Top Left */}
        <line x1="40" y1="40" x2="80" y2="40" />
        <line x1="40" y1="40" x2="40" y2="80" />
        {/* Top Right */}
        <line x1="1840" y1="40" x2="1880" y2="40" />
        <line x1="1880" y1="40" x2="1880" y2="80" />
        {/* Bottom Left */}
        <line x1="40" y1="1040" x2="80" y2="1040" />
        <line x1="40" y1="1000" x2="40" y2="1040" />
        {/* Bottom Right */}
        <line x1="1840" y1="1040" x2="1880" y2="1040" />
        <line x1="1880" y1="1000" x2="1880" y2="1040" />
      </g>
      
      {/* Blueprint Title Block (Bottom Right) */}
      <g transform="translate(1750, 1020)">
        <text x="0" y="0" textAnchor="end" fontSize="6" fontFamily="ui-monospace, monospace" fill="#EAF8FF" opacity={0.15} letterSpacing="1">
          SYS.RO.001 // REV 04
        </text>
        <text x="0" y="10" textAnchor="end" fontSize="5" fontFamily="ui-monospace, monospace" fill="#80FFDB" opacity={0.1} letterSpacing="1">
          SCALE 1:2 // UNITS:MM
        </text>
      </g>

    </BlueprintContainer>
  )
}