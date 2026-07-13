"use client"

import { useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface SilverGlowCardProps {
  children: React.ReactNode
  className?: string
}

export function SilverGlowCard({ children, className = "" }: SilverGlowCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  // The mouse-following edge glow
  const borderGlow = useTransform(
    [mouseXSpring, mouseYSpring],
    ([latestX, latestY]) => {
      if (!isHovered) return "radial-gradient(400px circle at 0px 0px, transparent 40%, transparent 100%)"
      return `radial-gradient(600px circle at ${latestX}px ${latestY}px, rgba(200,215,235,0.35), transparent 40%)`
    }
  )

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.2, ease: "easeOut" } }}
      className={`group relative overflow-hidden rounded-2xl bg-card shadow-sm shadow-[#03305f]/5 transition-all duration-300 ${className}`}
    >
      {/* 1. THE TRAVELING STAR BORDER */}
      

      {/* 2. THE MOUSE-FOLLOWING EDGE GLOW */}
      <motion.div
        style={{ background: borderGlow }}
        className="absolute inset-[-1px] rounded-2xl z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* 3. STATIC SILVER BORDER (visible when NOT hovered) */}
      <div className="absolute inset-0 rounded-2xl border border-border transition-colors duration-300 group-hover:border-transparent z-10 pointer-events-none" />

      {/* 4. CONTENT */}
      <div className="relative z-20 h-full w-full">
        {children}
      </div>
    </motion.div>
  )
}