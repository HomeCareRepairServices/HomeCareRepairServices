"use client"

import { motion } from "framer-motion"

interface BlueprintParticleProps {
  x?: number
  y?: number
  color?: string
  size?: number
  delay?: number
}

/**
 * A microscopic data point.
 * Fades in, shifts slightly, and fades out. Represents system activity.
 */
export function BlueprintParticle({
  x = 0,
  y = 0,
  color = "#CAF0F8",
  size = 1.5,
  delay = 0,
}: BlueprintParticleProps) {
  return (
    <motion.circle
      cx={x}
      cy={y}
      r={size}
      fill={color}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.6, 0],
        scale: [0, 1, 0],
        x: [0, Math.random() * 10 - 5],
        y: [0, Math.random() * 10 - 5]
      }}
      transition={{
        duration: 6 + Math.random() * 4,
        ease: "linear",
        repeat: Infinity,
        delay: delay,
      }}
    />
  )
}