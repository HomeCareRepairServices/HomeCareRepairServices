"use client"

import { useEffect } from "react"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import {
  BlueprintContainer,
  BlueprintGlow,
  BlueprintNode,
  BlueprintPipe,
  BlueprintValve,
  BlueprintArrow,
  BlueprintLabel,
  BlueprintParticle,
} from "../primitives"

/**
 * Refrigerator Cooling Circuit Blueprint
 * 
 * An engineering schematic illustrating the closed-loop vapor-compression cycle.
 * Features a continuous cyan pulse tracking the refrigerant flow.
 */
export default function Refrigerator() {
  // Layout Coordinates for the closed loop
  const leftX = 720
  const rightX = 1200
  const topY = 460
  const bottomY = 620
  const cx = 960
  const cy = 540

  // Path string for the continuous loop
  const circuitPath = `M ${leftX} ${topY} L ${rightX} ${topY} L ${rightX} ${bottomY} L ${leftX} ${bottomY} Z`

  // Main driving progress value (0 to 1 over the cycle duration)
  const progress = useMotionValue(0)

  useEffect(() => {
    const controls = animate(progress, [0, 1], {
      duration: 14,
      ease: "linear",
      repeat: Infinity,
    })
    return () => controls.stop()
  }, [progress])

  // Sequence-driven state transforms based on progress
  // 0.00-0.15: Compressor
  const compressorScale = useTransform(
    progress,
    [0, 0.15, 0.85, 1],
    [1, 1.1, 1, 1]
  )

  // 0.35-0.50: Expansion Valve
  const valveOpen = useTransform(
    progress,
    [0.35, 0.5, 0.8, 1],
    [0.5, 1, 1, 0.5]
  )

  // 0.45-0.70: Evaporator Glow
  const evaporatorGlow = useTransform(
    progress,
    [0.4, 0.65, 0.85, 1],
    [0, 0.2, 0.2, 0]
  )

  // 0.85-0.95: Temp Sensor Flash
  const tempFlash = useTransform(
    progress,
    [0.85, 0.9, 0.95, 1],
    [0, 1, 0, 0]
  )

  return (
    <BlueprintContainer isRoot={false}>
      {/* =========================================================
          CAD GUIDE LINES
          ========================================================= */}
      <g stroke="#80FFDB" strokeWidth="0.3" strokeDasharray="8 6" opacity={0.04} vectorEffect="non-scaling-stroke">
        <line x1={leftX} y1={topY - 40} x2={leftX} y2={bottomY + 40} />
        <line x1={rightX} y1={topY - 40} x2={rightX} y2={bottomY + 40} />
        <line x1={leftX - 40} y1={topY} x2={rightX + 40} y2={topY} />
        <line x1={leftX - 40} y1={bottomY} x2={rightX + 40} y2={bottomY} />
      </g>

      {/* =========================================================
          COOLING CIRCUIT PIPES
          ========================================================= */}
      {/* High Pressure Side (Top & Right) */}
      <g opacity={0.15} stroke="#80FFDB" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke">
        <path d={`M ${leftX} ${topY} L ${rightX} ${topY}`} />
        <path d={`M ${rightX} ${topY} L ${rightX} ${bottomY}`} />
      </g>
      {/* Low Pressure Side (Bottom & Left) */}
      <g opacity={0.12} stroke="#80FFDB" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke">
        <path d={`M ${rightX} ${bottomY} L ${leftX} ${bottomY}`} />
        <path d={`M ${leftX} ${bottomY} L ${leftX} ${topY}`} />
      </g>

      {/* Flow Direction Arrows */}
      <g opacity={0.1}>
        <BlueprintArrow x={(leftX + rightX) / 2} y={topY} rotation={0} strokeColor="#80FFDB" length={10} />
        <BlueprintArrow x={rightX} y={(topY + bottomY) / 2} rotation={90} strokeColor="#80FFDB" length={10} />
        <BlueprintArrow x={(leftX + rightX) / 2} y={bottomY} rotation={180} strokeColor="#80FFDB" length={10} />
        <BlueprintArrow x={leftX} y={(topY + bottomY) / 2} rotation={270} strokeColor="#80FFDB" length={10} />
      </g>

      {/* =========================================================
          COMPRESSOR (Top-Left)
          ========================================================= */}
      <g transform={`translate(${leftX}, ${topY})`}>
        <motion.g style={{ scale: compressorScale, transformOrigin: "0 0" }}>
          <BlueprintNode size={50} strokeColor="#80FFDB" speed={0} />
          {/* Internal Motor Schematic */}
          <circle r="30" fill="none" stroke="#EAF8FF" strokeWidth="0.3" opacity={0.1} vectorEffect="non-scaling-stroke" />
          <circle r="10" fill="none" stroke="#EAF8FF" strokeWidth="0.5" opacity={0.15} vectorEffect="non-scaling-stroke" />
          <line x1="-20" y1="0" x2="20" y2="0" stroke="#EAF8FF" strokeWidth="0.4" opacity={0.1} vectorEffect="non-scaling-stroke" />
          <line x1="0" y1="-20" x2="0" y2="20" stroke="#EAF8FF" strokeWidth="0.4" opacity={0.1} vectorEffect="non-scaling-stroke" />
        </motion.g>
        <BlueprintLabel x={0} y={70} text="COMPRESSOR" lineColor="#80FFDB" textColor="#EAF8FF" />
      </g>

      {/* =========================================================
          CONDENSER (Top-Right)
          ========================================================= */}
      <g transform={`translate(${rightX}, ${topY})`}>
        <BlueprintNode size={50} strokeColor="#80FFDB" speed={0} />
        {/* Internal Fin Schematic */}
        <g stroke="#EAF8FF" strokeWidth="0.5" opacity={0.12} vectorEffect="non-scaling-stroke">
          {Array.from({ length: 5 }).map((_, i) => (
            <line key={i} x1={-35 + i * 15} y1="-30" x2={-35 + i * 15} y2="30" />
          ))}
        </g>
        <BlueprintLabel x={0} y={70} text="CONDENSER" lineColor="#80FFDB" textColor="#EAF8FF" />
      </g>

      {/* =========================================================
          EXPANSION VALVE (Bottom-Right)
          ========================================================= */}
      <g transform={`translate(${rightX}, ${bottomY})`}>
        <BlueprintNode size={40} strokeColor="#80FFDB" speed={0} />
        <motion.g
          style={{ scaleY: valveOpen, transformOrigin: "0 0" }}
        >
          <BlueprintValve strokeColor="#80FFDB" speed={0} isOpen={true} />
        </motion.g>
        <BlueprintLabel x={0} y={70} text="EXPANSION" lineColor="#FFD166" textColor="#FFD166" />
      </g>

      {/* =========================================================
          EVAPORATOR (Bottom-Left)
          ========================================================= */}
      <g transform={`translate(${leftX}, ${bottomY})`}>
        <BlueprintNode size={50} strokeColor="#80FFDB" speed={0} />
        {/* Internal Coil Schematic */}
        <path
          d="M -30,-20 Q -20,-30 -10,-20 T 10,-20 Q 20,-10 30,-20"
          fill="none"
          stroke="#9FFFCB"
          strokeWidth="0.5"
          opacity={0.15}
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M -30,0 Q -20,-10 -10,0 T 10,0 Q 20,10 30,0"
          fill="none"
          stroke="#9FFFCB"
          strokeWidth="0.5"
          opacity={0.15}
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M -30,20 Q -20,10 -10,20 T 10,20 Q 20,30 30,20"
          fill="none"
          stroke="#9FFFCB"
          strokeWidth="0.5"
          opacity={0.15}
          vectorEffect="non-scaling-stroke"
        />
        
        {/* Active Evaporator Glow */}
        <motion.g
          style={{ opacity: evaporatorGlow }}
        >
          <circle r={60} fill="#9FFFCB" filter="url(#blueprint-glow)" />
        </motion.g>

        <BlueprintLabel x={0} y={70} text="EVAPORATOR" lineColor="#9FFFCB" textColor="#9FFFCB" />
      </g>

      {/* =========================================================
          TEMPERATURE SENSOR (Left, Midway)
          ========================================================= */}
      <g transform={`translate(${leftX - 80}, ${cy})`}>
        <rect 
          x="-18" y="-18" 
          width="36" height="36" 
          rx="4"
          fill="none" 
          stroke="#EAF8FF" 
          strokeWidth="0.5" 
          opacity={0.15} 
          vectorEffect="non-scaling-stroke" 
        />
        <circle r="4" fill="none" stroke="#EAF8FF" strokeWidth="0.3" opacity={0.1} />
        <text x="0" y="4" textAnchor="middle" fontSize="6" fontFamily="ui-monospace, monospace" fill="#EAF8FF" opacity={0.2}>°C</text>
        
        {/* Flash Indicator */}
        <motion.circle
          cx="0" cy="0" r="8"
          fill="#06D6A0"
          style={{ opacity: tempFlash }}
          filter="url(#blueprint-glow)"
        />

        <BlueprintLabel x={0} y={40} text="TEMP SENSOR" lineColor="#06D6A0" textColor="#06D6A0" />
      </g>

      {/* =========================================================
          CYAN PULSE (The Refrigerant)
          ========================================================= */}
      <motion.circle
        r="6"
        fill="#9FFFCB"
        filter="url(#blueprint-glow)"
        opacity={0.8}
        animate={{
          x: [
            leftX, rightX, rightX, leftX, leftX // Top, Right, Bottom, Left, Top
          ],
          y: [
            topY, topY, bottomY, bottomY, topY
          ]
        }}
        transition={{
          duration: 14,
          ease: "linear",
          repeat: Infinity,
          times: [0, 0.25, 0.5, 0.75, 1]
        }}
      />

      {/* Secondary trailing pulse for depth */}
      <motion.circle
        r="4"
        fill="#80FFDB"
        opacity={0.4}
        animate={{
          x: [
            leftX, rightX, rightX, leftX, leftX
          ],
          y: [
            topY, topY, bottomY, bottomY, topY
          ]
        }}
        transition={{
          duration: 14,
          ease: "linear",
          repeat: Infinity,
          times: [0.02, 0.27, 0.52, 0.77, 1.02]
        }}
      />

      {/* =========================================================
          AMBIENT TECHNICAL DETAILS
          ========================================================= */}
      {/* Connection bolts at corners */}
      {[
        [leftX, topY],
        [rightX, topY],
        [rightX, bottomY],
        [leftX, bottomY]
      ].map(([bx, by], i) => (
        <g key={i} transform={`translate(${bx}, ${by})`}>
          <circle r="3" fill="none" stroke="#80FFDB" strokeWidth="0.3" opacity={0.2} />
          <circle r="0.8" fill="#80FFDB" opacity={0.3} />
        </g>
      ))}

      {/* Expansion valve state text */}
      <text x={rightX + 60} y={bottomY + 10} fontSize="5" fontFamily="ui-monospace, monospace" fill="#FFD166" opacity={0.2} letterSpacing="0.5">
        <motion.tspan
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 14, times: [0.35, 0.5, 0.8, 1], repeat: Infinity }}
        >
          OPEN
        </motion.tspan>
      </text>

      {/* Evaporator state text */}
      <text x={leftX - 80} y={cy - 40} fontSize="5" fontFamily="ui-monospace, monospace" fill="#9FFFCB" opacity={0.2} letterSpacing="0.5">
        <motion.tspan
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 14, times: [0.4, 0.65, 0.85, 1], repeat: Infinity }}
        >
          ABSORBING
        </motion.tspan>
      </text>

    </BlueprintContainer>
  )
}