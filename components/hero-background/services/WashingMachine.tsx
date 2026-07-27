"use client"

import { motion } from "framer-motion"
import {
  BlueprintContainer,
  BlueprintGlow,
  BlueprintNode,
  BlueprintLabel,
  BlueprintParticle,
} from "../primitives"

/**
 * WashingMachine Blueprint
 * 
 * A front-load washing machine schematic illustrating the mechanical wash cycle.
 * Features a precise oscillating drum, cascading water flow, and internal motor linkage.
 */
export default function WashingMachine() {
  // Core Layout Coordinates
  const cx = 960
  const cy = 560

  // Machine Housing Dimensions
  const mx = 760 // machine x start
  const my = 460 // machine y start
  const mw = 400 // machine width
  const mh = 220 // machine height

  // Sub-component Coordinates
  const drumX = cx
  const drumY = cy
  const drumR = 75

  const motorX = mx + 80
  const motorY = my + mh - 40

  const controlX = mx + mw - 70
  const controlY = my + 40

  const inletX = cx - 60
  const outletX = cx + 60
  const pipeY = my - 20

  return (
    <BlueprintContainer isRoot={false}>
      {/* =========================================================
          GLOBAL DEFS (Drum Mesh Pattern)
          ========================================================= */}
      <defs>
        <pattern id="drum-mesh" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="0.8" fill="none" stroke="#80FFDB" strokeWidth="0.2" opacity="0.4" />
        </pattern>
      </defs>

      {/* =========================================================
          BACKGROUND MECHANICS (Subtle blueprints)
          ========================================================= */}
      <g opacity={0.04} stroke="#80FFDB" strokeWidth="0.3" strokeDasharray="6 8" vectorEffect="non-scaling-stroke">
        <line x1={cx} y1={my - 30} x2={cx} y2={my + mh + 30} />
        <line x1={motorX} y1={my - 30} x2={motorX} y2={my + mh + 30} />
        <line x1={mx} y1={cy} x2={mx + mw} y2={cy} />
      </g>

      <BlueprintGlow x={cx} y={cy} color="#80FFDB" radius={100} opacity={0.02} />


      {/* =========================================================
          MAIN MACHINE HOUSING
          ========================================================= */}
      {/* Outer Casing */}
      <rect 
        x={mx} y={my} 
        width={mw} height={mh} 
        rx="16" ry="16"
        fill="none" 
        stroke="#80FFDB" 
        strokeWidth="0.8" 
        opacity={0.15} 
        vectorEffect="non-scaling-stroke" 
      />
      {/* Inner Casing */}
      <rect 
        x={mx + 12} y={my + 12} 
        width={mw - 24} height={mh - 24} 
        rx="12" ry="12"
        fill="none" 
        stroke="#80FFDB" 
        strokeWidth="0.3" 
        opacity={0.08} 
        vectorEffect="non-scaling-stroke" 
      />

      {/* Door Seal Ring */}
      <circle 
        cx={cx} cy={cy} 
        r={drumR + 8} 
        fill="none" 
        stroke="#EAF8FF" 
        strokeWidth="0.5" 
        opacity={0.1} 
        vectorEffect="non-scaling-stroke" 
      />
      <circle 
        cx={cx} cy={cy} 
        r={drumR + 4} 
        fill="none" 
        stroke="#EAF8FF" 
        strokeWidth="0.3" 
        strokeDasharray="4 4"
        opacity={0.08} 
        vectorEffect="non-scaling-stroke" 
      />


      {/* =========================================================
          DRUM (Center)
          ========================================================= */}
      <g transform={`translate(${drumX}, ${drumY})`}>
        {/* Drum Shell */}
        <circle 
          r={drumR} 
          fill="none" 
          stroke="#80FFDB" 
          strokeWidth="0.8" 
          opacity={0.2} 
          vectorEffect="non-scaling-stroke" 
        />
        
        {/* Mesh Pattern inside drum */}
        <circle 
          r={drumR - 4} 
          fill="url(#drum-mesh)" 
          opacity={0.6}
        />

        {/* Pulsing wash/swirl effect inside drum */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 6, ease: "linear", repeat: Infinity }}
          style={{ transformOrigin: "0px 0px" }}
        >
          <path 
            d="M -40,0 A 40,40 0 0,1 0,0 A 40,40 0 0,1 -40,0" 
            fill="none" 
            stroke="#CAF0F8" 
            strokeWidth="0.5" 
            opacity={0.1} 
            vectorEffect="non-scaling-stroke"
            strokeDasharray="2 4"
          />
          <path 
            d="M 0,-50 A 50,50 0 0,1 0,50 A 50,50 0 0,1 0,-50" 
            fill="none" 
            stroke="#CAF0F8" 
            strokeWidth="0.5" 
            opacity={0.1} 
            vectorEffect="non-scaling-stroke"
            strokeDasharray="2 4"
          />
        </motion.g>

        {/* The Drum Itself - OSCILLATING MOTION */}
        {/* 10° -> Pause -> -10° -> Pause */}
        <motion.g
          animate={{ rotate: [0, 10, 10, 0, -10, -10, 0] }}
          transition={{ 
            duration: 12, 
            times: [0, 0.18, 0.35, 0.5, 0.68, 0.85, 1], 
            ease: "easeInOut", 
            repeat: Infinity 
          }}
          style={{ transformOrigin: "0px 0px" }}
        >
          {/* Structural Fins */}
          <g stroke="#80FFDB" strokeWidth="0.6" opacity={0.15} vectorEffect="non-scaling-stroke">
            <line x1={0} y1={-drumR + 10} x2={0} y2={drumR - 10} />
            <line x1={-drumR + 10} y1={0} x2={drumR - 10} y2={0} />
            <line x1={-drumR * 0.7} y1={-drumR * 0.7} x2={drumR * 0.7} y2={drumR * 0.7} />
            <line x1={-drumR * 0.7} y1={drumR * 0.7} x2={drumR * 0.7} y2={-drumR * 0.7} />
            <line x1={drumR * 0.7} y1={-drumR * 0.7} x2={-drumR * 0.7} y2={-drumR * 0.7} />
            <line x1={drumR * 0.7} y1={drumR * 0.7} x2={-drumR * 0.7} y2={drumR * 0.7} />
          </g>
          <circle r="8" fill="none" stroke="#80FFDB" strokeWidth="0.4" opacity={0.12} />
        </motion.g>
      </g>


      {/* =========================================================
          MOTOR (Bottom Left)
          ========================================================= */}
      <g transform={`translate(${motorX}, ${motorY})`}>
        {/* Motor Housing */}
        <rect 
          x="-50" y="-35" 
          width="100" height="70" 
          rx="6"
          fill="none" 
          stroke="#80FFDB" 
          strokeWidth="0.5" 
          opacity={0.15} 
          vectorEffect="non-scaling-stroke" 
        />
        
        {/* Internal Stator Lines */}
        <g stroke="#EAF8FF" strokeWidth="0.3" opacity={0.1} vectorEffect="non-scaling-stroke">
          <circle r="22" fill="none" />
          <circle r="12" fill="none" />
          <line x1="-28" y1="0" x2="28" y2="0" />
          <line x1="0" y1="-28" x2="0" y2="28" />
        </g>

        {/* Motor Shaft to Drum connection line */}
        <line 
          x1="50" y1="0" x2={drumX - drumR - 8} 
          y2={drumY} 
          stroke="#80FFDB" 
          strokeWidth="0.5" 
          opacity={0.12} 
          vectorEffect="non-scaling-stroke"
          strokeDasharray="6 3" 
        />
        
        {/* Motor Activity Pulse */}
        <motion.circle
          cx="0" cy="0" r="4"
          fill="#06D6A0"
          filter="url(#blueprint-glow)"
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ duration: 12, times: [0.4, 0.5, 0.65, 0.8, 0.95, 1], repeat: Infinity }}
        />
      </g>

      {/* =========================================================
          BELT MECHANISM (Visual Link)
          ========================================================= */}
      <line 
        x1={motorX} y1={motorY - 35} 
        x2={drumX - drumR - 8} y2={drumY + 10} 
        stroke="#EAF8FF" 
        strokeWidth="1" 
        opacity={0.06} 
        vectorEffect="non-scaling-stroke" 
      />
      <line 
        x1={motorX + 2} y1={motorY - 33} 
        x2={drumX - drumR - 6} y2={drumY + 12} 
        stroke="#EAF8FF" 
        strokeWidth="0.5" 
        opacity={0.08} 
        vectorEffect="non-scaling-stroke" 
      />


      {/* =========================================================
          CONTROL MODULE (Top Right)
          ========================================================= */}
      <g transform={`translate(${controlX}, ${controlY})`}>
        <rect 
          x="-50" y="-25" 
          width="100" height="50" 
          rx="8"
          fill="none" 
          stroke="#80FFDB" 
          strokeWidth="0.5" 
          opacity={0.12} 
          vectorEffect="non-scaling-stroke" 
        />
        
        {/* Display Panel Lines */}
        <g stroke="#EAF8FF" strokeWidth="0.3" opacity={0.1} vectorEffect="non-scaling-stroke">
          <line x1="-30" y1="-10" x2="30" y2="-10" />
          <line x1="-30" y1="0" x2="30" y2="0" />
          <line x1="-30" y1="10" x2="30" y2="10" />
          <rect x="10" y="-15" width="25" height="30" rx="2" />
        </g>

        {/* LEDs */}
        <g>
          <motion.circle
            cx="-20" cy="-8" r="2"
            fill="#06D6A0"
            animate={{ opacity: [0.1, 0.6, 0.1] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0 }}
          />
          <motion.circle
            cx="-20" cy="2" r="2"
            fill="#80FFDB"
            animate={{ opacity: [0.1, 0.6, 0.1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          />
          <motion.circle
            cx="-20" cy="12" r="2"
            fill="#FFD166"
            animate={{ opacity: [0.1, 0.6, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
          />
        </g>

        {/* Wiring to Motor */}
        <path 
          d={`M -50,0 L ${motorX - controlX + 50}, ${motorY - controlY}`} 
          fill="none" 
          stroke="#80FFDB" 
          strokeWidth="0.3" 
          opacity={0.08} 
          strokeDasharray="4 6"
          vectorEffect="non-scaling-stroke" 
        />
      </g>


      {/* =========================================================
          WATER FLOW: INLET
          ========================================================= */}
      {/* Inlet Pipe */}
      <g opacity={0.15} stroke="#80FFDB" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke">
        <path d={`M ${inletX} ${pipeY} L ${inletX} ${drumY - drumR - 8}`} />
        <path d={`M ${inletX - 4} ${pipeY} L ${inletX - 4} ${drumY - drumR - 4}`} />
        <line x1={inletX - 6} y1={pipeY} x2={inletX + 6} y2={pipeY} />
      </g>

      {/* Inlet Flow Particles (Moving Down) */}
      <motion.circle
        cx={inletX - 2} r="1.5" fill="#CAF0F8"
        animate={{ y: [pipeY, drumY - 40, pipeY], opacity: [0, 0.6, 0] }}
        transition={{ duration: 6, ease: "linear", repeat: Infinity, delay: 0 }}
      />
      <motion.circle
        cx={inletX + 2} r="1" fill="#CAF0F8"
        animate={{ y: [pipeY, drumY - 30, pipeY], opacity: [0, 0.5, 0] }}
        transition={{ duration: 6, ease: "linear", repeat: Infinity, delay: 2 }}
      />
      <motion.circle
        cx={inletX} r="1.2" fill="#CAF0F8"
        animate={{ y: [pipeY, drumY - 50, pipeY], opacity: [0, 0.4, 0] }}
        transition={{ duration: 6, ease: "linear", repeat: Infinity, delay: 4 }}
      />


      {/* =========================================================
          WATER FLOW: SWIRL (Inside Drum - visual only)
          Note: True swirl is handled by the rotating drum mesh pattern,
          but these particles add a nice layered fluid effect.
          ========================================================= */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 12, ease: "linear", repeat: Infinity }}
        style={{ transformOrigin: `${drumX}px ${drumY}px` }}
      >
        <motion.circle
          cx={drumX - 20} cy={drumY - 20} r="1" fill="#80FFDB"
          animate={{ opacity: [0, 0.4, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0 }}
        />
        <motion.circle
          cx={drumX + 25} cy={drumY + 15} r="1.2" fill="#9FFFCB"
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        />
        <motion.circle
          cx={drumX - 10} cy={drumY + 25} r="0.8" fill="#80FFDB"
          animate={{ opacity: [0, 0.3, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 3 }}
        />
      </motion.g>


      {/* =========================================================
          WATER FLOW: DRAIN
          ========================================================= */}
      {/* Outlet Pipe */}
      <g opacity={0.15} stroke="#80FFDB" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke">
        <path d={`M ${outletX} ${drumY + drumR + 8} L ${outletX} ${my + mh + 10}`} />
        <path d={`M ${outletX - 4} ${drumY + drumR + 4} L ${outletX - 4} ${my + mh + 14}`} />
        <line x1={outletX - 6} y1={my + mh + 10} x2={outletX + 6} y2={my + mh + 10} />
      </g>

      {/* Drain Flow Particles (Moving Down) */}
      <motion.circle
        cx={outletX - 1} r="1.5" fill="#06D6A0"
        animate={{ y: [drumY + drumR, my + mh + 20, drumY + drumR], opacity: [0, 0.6, 0] }}
        transition={{ duration: 6, ease: "linear", repeat: Infinity, delay: 6 }}
      />
      <motion.circle
        cx={outletX + 1} r="1" fill="#06D6A0"
        animate={{ y: [drumY + drumR, my + mh + 10, drumY + drumR], opacity: [0, 0.4, 0] }}
        transition={{ duration: 6, ease: "linear", repeat: Infinity, delay: 8 }}
      />
      <motion.circle
        cx={outletX} r="1.2" fill="#06D6A0"
        animate={{ y: [drumY + drumR, my + mh + 30, drumY + drumR], opacity: [0, 0.5, 0] }}
        transition={{ duration: 6, ease: "linear", repeat: Infinity, delay: 10 }}
      />


      {/* =========================================================
          TECHNICAL ANNOTATIONS (LABELS)
          ========================================================= */}
      <BlueprintLabel x={inletX} y={pipeY - 30} text="INLET" lineColor="#CAF0F8" textColor="#CAF0F8" />
      <BlueprintLabel x={drumX} y={drumY + drumR + 50} text="DRUM" lineColor="#80FFDB" textColor="#EAF8FF" />
      <BlueprintLabel x={motorX} y={motorY + 55} text="MOTOR" lineColor="#06D6A0" textColor="#06D6A0" />
      <BlueprintLabel x={outletX} y={my + mh + 30} text="DRAIN" lineColor="#06D6A0" textColor="#06D6A0" />
      <BlueprintLabel x={controlX} y={controlY - 45} text="CONTROL" lineColor="#80FFDB" textColor="#EAF8FF" />


      {/* =========================================================
          CAD REGISTRATION MARKS
          ========================================================= */}
      <g stroke="#80FFDB" strokeWidth="0.3" opacity={0.06} vectorEffect="non-scaling-stroke">
        <line x1={mx - 20} y1={my - 20} x2={mx + 20} y2={my - 20} />
        <line x1={mx - 20} y1={my - 20} x2={mx - 20} y2={my + 20} />
        <line x1={mx + mw + 20} y1={my - 20} x2={mx + mw + 20} y2={my + 20} />
        <line x1={mx + mw + 20} y1={my - 20} x2={mx + mw + 20} y2={my + 20} />
        <line x1={mx - 20} y1={my + mh + 20} x2={mx + mw + 20} y2={my + mh + 20} />
        <line x1={mx - 20} y1={my + mh + 20} x2={mx - 20} y2={my + mh + 40} />
        <line x1={mx + mw + 20} y1={my + mh + 20} x2={mx + mw + 20} y2={my + mh + 40} />
      </g>
    </BlueprintContainer>
  )
}