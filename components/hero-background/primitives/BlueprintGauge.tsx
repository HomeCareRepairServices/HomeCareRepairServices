"use client"

import { motion } from "framer-motion"

interface BlueprintGaugeProps {
  x?: number
  y?: number
  radius?: number
  strokeColor?: string
  accentColor?: string
  minAngle?: number
  maxAngle?: number
}

/**
 * A status indicator arc.
 * The needle sweeps slowly back and forth, monitoring system pressure.
 */
export function BlueprintGauge({
  x = 0,
  y = 0,
  radius = 30,
  strokeColor = "#80FFDB",
  accentColor = "#FFD166",
  minAngle = -60,
  maxAngle = 60,
}: BlueprintGaugeProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Track */}
      <path
        d={`M ${-radius} ${radius} A ${radius} ${radius} 0 0 1 ${radius} ${radius}`}
        fill="none"
        stroke={strokeColor}
        strokeWidth="1"
        opacity={0.15}
        vectorEffect="non-scaling-stroke"
        transform={`rotate(${minAngle})`}
        style={{ transformOrigin: "0px 0px" }}
      />

      {/* Needle */}
      <motion.g
        animate={{ rotate: [minAngle, maxAngle, minAngle] }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        style={{ transformOrigin: "0px 0px" }}
      >
        <line
          x1="0"
          y1="0"
          x2="0"
          y2={-radius * 0.8}
          stroke={accentColor}
          strokeWidth="1"
          opacity={0.4}
          vectorEffect="non-scaling-stroke"
        />
        <circle cx="0" cy="0" r="2" fill={accentColor} opacity={0.3} />
      </motion.g>
    </g>
  )
}