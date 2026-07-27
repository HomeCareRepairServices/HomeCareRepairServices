"use client"

import { motion } from "framer-motion"

interface BlueprintNodeProps {
  x?: number
  y?: number
  size?: number
  strokeColor?: string
  glowColor?: string
  speed?: number
}

/**
 * A central junction point. Represents an appliance or hub.
 * Features precise concentric circles and crosshairs.
 * Rotates imperceptibly slowly to feel "alive".
 */
export function BlueprintNode({
  x = 0,
  y = 0,
  size = 20,
  strokeColor = "#80FFDB",
  glowColor = "#9FFFCB",
  speed = 60,
}: BlueprintNodeProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
        style={{ transformOrigin: "0px 0px" }}
      >
        {/* Outer Housing */}
        <circle
          cx="0"
          cy="0"
          r={size}
          fill="none"
          stroke={strokeColor}
          strokeWidth="0.5"
          opacity={0.2}
        />
        <circle
          cx="0"
          cy="0"
          r={size * 0.6}
          fill="none"
          stroke={strokeColor}
          strokeWidth="0.5"
          opacity={0.4}
        />
        
        {/* Technical Crosshairs */}
        <line x1="-size" y1="0" x2="size" y2="0" stroke={strokeColor} strokeWidth="0.2" opacity={0.3} vectorEffect="non-scaling-stroke" />
        <line x1="0" y1="-size" x2="0" y2="size" stroke={strokeColor} strokeWidth="0.2" opacity={0.3} vectorEffect="non-scaling-stroke" />
        
        {/* Center Point */}
        <circle cx="0" cy="0" r="1.5" fill={glowColor} filter="url(#blueprint-glow)" />
      </motion.g>
    </g>
  )
}