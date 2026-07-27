"use client"

import { motion } from "framer-motion"

interface BlueprintValveProps {
  x?: number
  y?: number
  rotation?: number
  strokeColor?: string
  isOpen?: boolean
  speed?: number
}

/**
 * A mechanical bowtie valve.
 * Slowly breathes open and closed to regulate the "system".
 */
export function BlueprintValve({
  x = 0,
  y = 0,
  rotation = 0,
  strokeColor = "#80FFDB",
  isOpen = true,
  speed = 8,
}: BlueprintValveProps) {
  return (
    <g transform={`translate(${x}, ${y}) rotate(${rotation})`}>
      <motion.g
        animate={{ scaleY: isOpen ? [0.5, 1, 0.5] : [1, 0.5, 1] }}
        transition={{
          duration: speed,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        style={{ transformOrigin: "0px 0px" }}
      >
        {/* Top Wing */}
        <polyline
          points="-8,-12 8,0 -8,12"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1"
          strokeLinejoin="miter"
          opacity={0.3}
        />
      </motion.g>
    </g>
  )
}