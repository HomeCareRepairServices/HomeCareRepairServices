"use client"

import { motion } from "framer-motion"
import {
  BlueprintContainer,
  BlueprintGlow,
  BlueprintArrow,
  BlueprintLabel,
  BlueprintParticle,
} from "../primitives"

/**
 * ACAirflow Schematic
 * 
 * An engineering blueprint illustrating the thermodynamic airflow cycle of an AC unit.
 * Maps the transition of air from warm intake to cooled output.
 */
export default function ACAirflow() {
  // Base coordinates for the AC unit casing
  const ux = 660
  const uy = 440
  const uw = 600
  const uh = 200
  const cy = 540 // Center Y of the unit

  // Micro-details configuration
  const ventWidth = 2
  const ventGap = 30
  const ventHeight = 60

  // Generate intake vent slits (Left side)
  const intakeVents = Array.from({ length: 3 }).map((_, i) => ux + 30 + i * ventGap)

  // Generate outlet vent slits (Right side)
  const outletVents = Array.from({ length: 3 }).map((_, i) => ux + uw - 30 - i * ventGap)

  // Generate the zig-zag cooling coil path
  const coilPoints = Array.from({ length: 8 }).map((_, i) => {
    const x = 860 + i * 30
    const y = i % 2 === 0 ? 480 : 560
    return `${x},${y}`
  }).join(" L ")

  return (
    <BlueprintContainer isRoot={false}>
      {/* =========================================================
          BACKGROUND MECHANICS (Subtle blueprints)
          ========================================================= */}
      <g opacity={0.05} stroke="#80FFDB" strokeWidth="0.3" strokeDasharray="4 8" vectorEffect="non-scaling-stroke">
        <line x1={ux} y1={cy} x2={ux + uw} y2={cy} />
        <line x1={960} y1={uy - 40} x2={960} y2={uy + uh + 40} />
      </g>

      <BlueprintGlow x={960} y={cy} color="#80FFDB" radius={120} opacity={0.03} />


      {/* =========================================================
          UNIT CASING
          ========================================================= */}
      <rect 
        x={ux} y={uy} 
        width={uw} height={uh} 
        rx="16" ry="16"
        fill="none" 
        stroke="#80FFDB" 
        strokeWidth="0.8" 
        opacity={0.15} 
        vectorEffect="non-scaling-stroke" 
      />
      {/* Inner casing line */}
      <rect 
        x={ux + 10} y={uy + 10} 
        width={uw - 20} height={uh - 20} 
        rx="12" ry="12"
        fill="none" 
        stroke="#80FFDB" 
        strokeWidth="0.3" 
        opacity={0.08} 
        vectorEffect="non-scaling-stroke" 
      />


      {/* =========================================================
          INTAKE VENTS (Left Side)
          ========================================================= */}
      {intakeVents.map((vx) => (
        <rect 
          key={`in-${vx}`}
          x={vx - ventWidth/2} y={cy - ventHeight/2} 
          width={ventWidth} height={ventHeight} 
          fill="none" 
          stroke="#FFD166" 
          strokeWidth="0.5" 
          opacity={0.2} 
          vectorEffect="non-scaling-stroke" 
        />
      ))}

      {/* Intake Glow Burst */}
      <motion.rect
        x={ux - 10} y={cy - 80} width={30} height={160}
        fill="#FFD166"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.1, 0] }}
        transition={{ duration: 8, times: [0, 0.1, 1], ease: "easeInOut", repeat: Infinity }}
      />


      {/* =========================================================
          OUTLET VENTS (Right Side)
          ========================================================= */}
      {outletVents.map((vx) => (
        <rect 
          key={`out-${vx}`}
          x={vx - ventWidth/2} y={cy - ventHeight/2} 
          width={ventWidth} height={ventHeight} 
          fill="none" 
          stroke="#80FFDB" 
          strokeWidth="0.5" 
          opacity={0.2} 
          vectorEffect="non-scaling-stroke" 
        />
      ))}


      {/* =========================================================
          INTERNAL FAN (Center-Left)
          ========================================================= */}
      <g transform={`translate(${ux + 150}, ${cy})`}>
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 12, ease: "linear", repeat: Infinity }}
          style={{ transformOrigin: "0px 0px" }}
        >
          {/* Fan Housing */}
          <circle r="50" fill="none" stroke="#80FFDB" strokeWidth="0.5" opacity={0.12} />
          {/* Blades */}
          <line x1="0" y1="-45" x2="0" y2="45" stroke="#80FFDB" strokeWidth="0.8" opacity={0.15} vectorEffect="non-scaling-stroke" />
          <line x1="-45" y1="0" x2="45" y2="0" stroke="#80FFDB" strokeWidth="0.8" opacity={0.15} vectorEffect="non-scaling-stroke" />
          <line x1="-32" y1="-32" x2="32" y2="32" stroke="#80FFDB" strokeWidth="0.6" opacity={0.12} vectorEffect="non-scaling-stroke" />
          <line x1="32" y1="-32" x2="-32" y2="32" stroke="#80FFDB" strokeWidth="0.6" opacity={0.12} vectorEffect="non-scaling-stroke" />
        </motion.g>
        {/* Center Hub */}
        <circle r="5" fill="none" stroke="#80FFDB" strokeWidth="0.5" opacity={0.2} />
      </g>


      {/* =========================================================
          COOLING COIL (Center)
          ========================================================= */}
      <path
        d={`M ${coilPoints}`}
        fill="none"
        stroke="#80FFDB"
        strokeWidth="1"
        opacity={0.15}
        vectorEffect="non-scaling-stroke"
        strokeLinejoin="round"
      />
      
      {/* Coil Active Glow */}
      <motion.path
        d={`M ${coilPoints}`}
        fill="none"
        stroke="#9FFFCB"
        strokeWidth="2"
        filter="url(#blueprint-glow)"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.2, 0] }}
        transition={{ duration: 8, times: [0.1, 0.5, 1], ease: "easeInOut", repeat: Infinity }}
        vectorEffect="non-scaling-stroke"
        strokeLinejoin="round"
      />


      {/* =========================================================
          SENSORS & INDICATORS
          ========================================================= */}
      {/* Temperature Sensor (Bottom Right) */}
      <g transform={`translate(${ux + uw - 60}, ${uy + uh - 30})`}>
        <rect x="-15" y="-15" width="30" height="30" rx="4" fill="none" stroke="#EAF8FF" strokeWidth="0.3" opacity={0.15} />
        <motion.circle
          cx="0" cy="0" r="4"
          fill="#80FFDB"
          initial={{ scale: 0.8, opacity: 0.2 }}
          animate={{ scale: [0.8, 1, 0.8], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 8, times: [0.7, 0.8, 1], ease: "easeInOut", repeat: Infinity }}
        />
        <text x="0" y="24" textAnchor="middle" fontSize="5" fontFamily="ui-monospace, monospace" fill="#EAF8FF" opacity={0.2} letterSpacing="0.5">TEMP</text>
      </g>

      {/* Pressure Indicator (Top Right) */}
      <g transform={`translate(${ux + uw - 60}, ${uy + 30})`}>
        <path d="M -15,0 A 15,15 0 0 1 15,0" fill="none" stroke="#FFD166" strokeWidth="0.5" opacity={0.15} />
        <motion.line
          x1="0" y1="0" x2="0" y2="-10"
          stroke="#FFD166"
          strokeWidth="1"
          opacity={0.3}
          animate={{ rotate: [-45, 45, -45] }}
          transition={{ duration: 8, times: [0.2, 0.6, 1], ease: "easeInOut", repeat: Infinity }}
          style={{ transformOrigin: "0px 0px" }}
        />
        <circle cx="0" cy="0" r="2" fill="none" stroke="#FFD166" strokeWidth="0.5" opacity={0.2} />
      </g>


      {/* =========================================================
          AIRFLOW ARROWS (Internal)
          ========================================================= */}
      <g opacity={0.15}>
        <BlueprintArrow x={ux + 70} y={cy - 40} rotation={0} strokeColor="#FFD166" length={8} />
        <BlueprintArrow x={ux + 70} y={cy} rotation={0} strokeColor="#FFD166" length={8} />
        <BlueprintArrow x={ux + 70} y={cy + 40} rotation={0} strokeColor="#FFD166" length={8} />
        
        <BlueprintArrow x={ux + uw - 70} y={cy - 40} rotation={0} strokeColor="#80FFDB" length={8} />
        <BlueprintArrow x={ux + uw - 70} y={cy} rotation={0} strokeColor="#80FFDB" length={8} />
        <BlueprintArrow x={ux + uw - 70} y={cy + 40} rotation={0} strokeColor="#80FFDB" length={8} />
      </g>


      {/* =========================================================
          PARTICLE FLOW: WARM INPUT (Amber)
          ========================================================= */}
      {/* Particles enter from left and fade out as they hit the coil */}
      <BlueprintParticle x={ux - 40} y={cy - 20} color="#FFD166" size={1.5} delay={0} />
      <BlueprintParticle x={ux - 60} y={cy + 10} color="#FFD166" size={1} delay={1.5} />
      <BlueprintParticle x={ux - 30} y={cy} color="#FFD166" size={1.2} delay={3} />
      <BlueprintParticle x={ux - 50} y={cy - 30} color="#FFD166" size={0.8} delay={4.5} />
      
      {/* Fading warm particles near the coil */}
      <motion.circle
        cx={820} cy={cy - 15} r="1.2" fill="#FFD166"
        initial={{ opacity: 0, x: 700 }}
        animate={{ opacity: [0, 0.5, 0], x: 860 }}
        transition={{ duration: 4, ease: "linear", repeat: Infinity, delay: 0 }}
      />
      <motion.circle
        cx={820} cy={cy + 20} r="1" fill="#FFD166"
        initial={{ opacity: 0, x: 700 }}
        animate={{ opacity: [0, 0.4, 0], x: 860 }}
        transition={{ duration: 4, ease: "linear", repeat: Infinity, delay: 2 }}
      />


      {/* =========================================================
          PARTICLE FLOW: COOL OUTPUT (Cyan)
          ========================================================= */}
      {/* Particles spawn at coil and move out right */}
      <motion.circle
        cx={1080} cy={cy - 20} r="1.2" fill="#80FFDB"
        initial={{ opacity: 0, x: 1060 }}
        animate={{ opacity: [0, 0.6, 0], x: 1400 }}
        transition={{ duration: 4, ease: "linear", repeat: Infinity, delay: 1 }}
      />
      <motion.circle
        cx={1080} cy={cy + 15} r="1" fill="#80FFDB"
        initial={{ opacity: 0, x: 1060 }}
        animate={{ opacity: [0, 0.5, 0], x: 1400 }}
        transition={{ duration: 4, ease: "linear", repeat: Infinity, delay: 3 }}
      />
      <motion.circle
        cx={1080} cy={cy} r="1.5" fill="#80FFDB"
        initial={{ opacity: 0, x: 1060 }}
        animate={{ opacity: [0, 0.6, 0], x: 1400 }}
        transition={{ duration: 4, ease: "linear", repeat: Infinity, delay: 5 }}
      />

      {/* Exit particles (clean blue) */}
      <BlueprintParticle x={ux + uw + 20} y={cy - 15} color="#80FFDB" size={1} delay={2} />
      <BlueprintParticle x={ux + uw + 40} y={cy + 10} color="#80FFDB" size={1.2} delay={4} />
      <BlueprintParticle x={ux + uw + 30} y={cy - 5} color="#80FFDB" size={0.8} delay={6} />


      {/* =========================================================
          TECHNICAL ANNOTATIONS
          ========================================================= */}
      <BlueprintLabel x={ux - 20} y={cy + 110} text="INPUT AIR" lineColor="#FFD166" textColor="#FFD166" />
      <BlueprintLabel x={ux + 150} y={cy + 110} text="FAN" lineColor="#80FFDB" textColor="#EAF8FF" />
      <BlueprintLabel x={960} y={cy + 130} text="COOLING COIL" lineColor="#9FFFCB" textColor="#9FFFCB" />
      <BlueprintLabel x={ux + uw - 60} y={uy - 20} text="TEMP" lineColor="#EAF8FF" textColor="#EAF8FF" />
      <BlueprintLabel x={ux + uw + 20} y={cy + 110} text="OUTPUT AIR" lineColor="#80FFDB" textColor="#80FFDB" />

    </BlueprintContainer>
  )
}