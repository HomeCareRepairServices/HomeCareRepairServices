"use client"

import { motion, useTransform, type MotionValue } from "framer-motion"
import type { Service } from "@/lib/data/services"
import { serviceIconMap } from "@/lib/data/services"

interface ServiceCard3DProps {
  service: Omit<Service, "icon">
  virtualIndex: number
  position: MotionValue<number>
  velocity: MotionValue<number>
  width: number
  height: number
}

export function ServiceCard3D({ service, virtualIndex, position, velocity, width, height }: ServiceCard3DProps) {
  const offset = useTransform(position, (p) => virtualIndex - p)

  // --- EXACT GALLERY MATH START ---
  const x = useTransform(offset, (o) => o * width * 0.85)
  const rotateY = useTransform(offset, (o) => -o * 10)
  const z = useTransform(offset, (o) => -Math.abs(o) * Math.abs(o) * 40)
  
  const scale = useTransform(offset, (o) => {
    const abs = Math.abs(o)
    if (abs >= 3) return 0.65
    if (abs <= 1) return 1.0 - abs * 0.15
    if (abs <= 2) return 0.85 - (abs - 1) * 0.10
    return 0.75 - (abs - 2) * 0.10
  })

  const opacity = useTransform(offset, (o) => {
    const abs = Math.abs(o)
    if (abs > 3.5) return 0
    if (abs > 2.5) return 1 - (abs - 2.5)
    return 1
  })

  const zIndex = useTransform(offset, (o) => Math.max(1, Math.round(100 - Math.abs(o) * 10)))
  const waveY = useTransform([offset, velocity], ([o, v]) => {
    const clamped = Math.max(-7, Math.min(7, v))
    return Math.sin(o * 0.85) * clamped * 8
  })
  // --- EXACT GALLERY MATH END ---

  const displayIndex = ((virtualIndex % 100) + 100) % 100
  const Icon = serviceIconMap[service.slug]

  return (
    <motion.div
      data-vi={String(virtualIndex)}
      className="absolute top-1/2 left-1/2 cursor-pointer"
      style={{
        width, height, x, y: waveY, z, rotateY, scale, opacity, zIndex,
        marginLeft: -width / 2, marginTop: -height / 2,
        willChange: "transform, opacity", backfaceVisibility: "hidden",
      }}
    >
      {/* Glassmorphism UI instead of Image */}
      <div 
        className="relative h-full w-full overflow-hidden rounded-2xl border border-white/20 shadow-2xl shadow-black/20 flex flex-col items-center justify-center p-6 text-center"
        style={{ 
          background: "linear-gradient(135deg, rgba(8,18,45,0.95) 0%, rgba(15,46,110,0.9) 100%)",
          backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)"
        }}
      >
        <span className="pointer-events-none absolute top-3 left-3 font-mono text-[10px] font-medium text-white/30">
          {String(displayIndex).padStart(2, "0")}
        </span>
        
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
          <Icon className="h-8 w-8" />
        </div>
        
        <h3 className="text-lg font-bold tracking-tight text-white leading-tight">{service.name}</h3>
        <p className="mt-2 text-sm text-white/50 leading-relaxed line-clamp-2">{service.short}</p>
        
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
      </div>
    </motion.div>
  )
}
