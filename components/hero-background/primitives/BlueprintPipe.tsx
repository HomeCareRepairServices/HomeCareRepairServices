"use client"

import { motion } from "framer-motion"

interface BlueprintPipeProps {
  x1?: number
  y1?: number
  x2?: number
  y2?: number
  strokeColor?: string
  hasFlow?: boolean
  flowColor?: string
}

/**
 * A precise transport line.
 * Can display a slow-moving "fluid" or "electrical" flow dash array.
 */
export function BlueprintPipe({
  x1 = 0,
  y1 = 0,
  x2 = 100,
  y2 = 0,
  strokeColor = "#80FFDB",
  hasFlow = true,
  flowColor = "#06D6A0",
}: BlueprintPipeProps) {
  return (
    <g>
      {/* Main Casing */}
      <line
        x1={x1} y1={y1} x2={x2} y2={y2}
        stroke={strokeColor}
        strokeWidth="1"
        opacity={0.15}
        vectorEffect="non-scaling-stroke"
      />

      {/* Animated Flow (Mechanical dash offset) */}
      {hasFlow && (
        <motion.line
          x1={x1} y1={y1} x2={x2} y2={y2}
          stroke={flowColor}
          strokeWidth="1"
          strokeDasharray="4 16"
          opacity={0.3}
          vectorEffect="non-scaling-stroke"
          animate={{
            strokeDashoffset: [0, -40]
          }}
          transition={{
            duration: 4,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      )}
    </g>
  )
}