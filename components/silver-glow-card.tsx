"use client"

import { useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

export function SilverGlowCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Tracks where the mouse is on the card
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooths out the mouse movement so it feels premium
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  // Moves the silver glow gradient based on the mouse
  const background = useTransform(
    [mouseXSpring, mouseYSpring],
    ([latestX, latestY]) => {
      // If not hovered, hide the glow
      if (!isHovered) return "radial-gradient(600px circle at 0px 0px, rgba(200,215,235,0), transparent 40%)"
      // If hovered, show the silver glow following the mouse
      return `radial-gradient(400px circle at ${latestX}px ${latestY}px, rgba(200,215,235,0.15), transparent 50%)`
    }
  )

  // Moves the bright silver "shine" line across the card
  const shine = useTransform(
    [mouseXSpring, mouseYSpring],
    ([latestX, latestY]) => {
      if (!isHovered) return "radial-gradient(200px circle at 0px 0px, rgba(255,255,255,0), transparent 0%)"
      return `radial-gradient(150px circle at ${latestX}px ${latestY}px, rgba(255,255,255,0.4), transparent 60%)`
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
      // Slight 3D tilt effect on hover
      style={{
        background,
        rotateX: useSpring(useTransform(y, [0, 300], [2, -2]), { stiffness: 300, damping: 30 }),
        rotateY: useSpring(useTransform(x, [0, 300], [-2, 2]), { stiffness: 300, damping: 30 }),
        transformStyle: "preserve-3d",
      }}
      className={`relative overflow-hidden rounded-xl border border-border transition-shadow duration-300 ${isHovered ? "shadow-[0_0_20px_rgba(180,195,220,0.3)]" : ""} ${className}`}
    >
      {/* The bright silver shine layer */}
      <motion.div
        style={{ background: shine }}
        className="pointer-events-none absolute inset-0 z-10"
      />
      
      {/* Your content goes here, slightly pushed forward for 3D effect */}
      <div className="relative z-20">
        {children}
      </div>
    </motion.div>
  )
}
