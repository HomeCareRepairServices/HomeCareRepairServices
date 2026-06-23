"use client"

import { useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

export function SilverGlowCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  // This calculates a massive gradient that ONLY touches the edges of the card
  const borderGlow = useTransform(
    [mouseXSpring, mouseYSpring],
    ([latestX, latestY]) => {
      if (!isHovered) return "radial-gradient(400px circle at 0px 0px, transparent 40%, transparent 100%)"
      // The magic is here: making the gradient 800px wide so only the edges catch the color
      return `radial-gradient(800px circle at ${latestX}px ${latestY}px, rgba(180, 200, 230, 0.5), transparent 40%)`
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
      // Very subtle 3D tilt
      style={{
        rotateX: useSpring(useTransform(y, [0, 300], [1, -1]), { stiffness: 300, damping: 30 }),
        rotateY: useSpring(useTransform(x, [0, 300], [-1, 1]), { stiffness: 300, damping: 30 }),
        transformStyle: "preserve-3d",
      }}
      className={`relative overflow-hidden rounded-xl ${className}`}
    >
      {/* 
        THE BORDER GLOW LAYER 
        We make this slightly larger than the card (inset: -1px) and give it a border-radius. 
        The silver/blue gradient follows the mouse but only lights up the edges!
      */}
      <motion.div
        style={{ background: borderGlow }}
        className="absolute inset-[-1px] rounded-xl z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        // Framer motion handles the hover state for us smoothly
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* The actual white card background sits slightly inside the glow */}
      <div className="relative z-10 h-full w-full rounded-xl bg-card border border-border">
        {children}
      </div>
    </motion.div>
  )
}
