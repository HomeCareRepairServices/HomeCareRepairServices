"use client"

import { memo, useState } from "react"
import Image from "next/image"
import { motion, useTransform, type MotionValue } from "framer-motion"
import type { ServiceLocation } from "@/lib/data/service-categories"

interface LocationCardProps {
  location: ServiceLocation
  virtualIndex: number
  position: MotionValue<number>
  velocity: MotionValue<number>
  width: number
  height: number
}

export const LocationCard = memo(function LocationCard({
  location,
  virtualIndex,
  position,
  velocity,
  width,
  height,
}: LocationCardProps) {
  const [imgError, setImgError] = useState(false)

  const offset = useTransform(position, (p) => virtualIndex - p)

  /* ---- 3D Transforms ---- */
  const x = useTransform(offset, (o) => o * width * 0.85)
  const rotateY = useTransform(offset, (o) => -o * 10)
  const z = useTransform(offset, (o) => -Math.abs(o) * Math.abs(o) * 40)
  
  /* ---- Exact Sizing: 100% -> 85% -> 75% -> 65% ---- */
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

  /* ---- Strict 2D Stacking: Center ALWAYS on top ---- */
  const zIndex = useTransform(offset, (o) => Math.max(1, Math.round(100 - Math.abs(o) * 10)))

  /* ---- Velocity Wave ---- */
  const waveY = useTransform([offset, velocity], ([o, v]) => {
    const clamped = Math.max(-7, Math.min(7, v))
    return Math.sin(o * 0.85) * clamped * 8
  })

  const displayIndex = ((virtualIndex % 100) + 100) % 100

  return (
    <motion.div
      data-vi={String(virtualIndex)}
      className="absolute top-1/2 left-1/2"
      style={{
        width,
        height,
        x,
        y: waveY,
        z,
        rotateY,
        scale,
        opacity,
        zIndex,
        marginLeft: -width / 2,
        marginTop: -height / 2,
        willChange: "transform, opacity",
        backfaceVisibility: "hidden",
      }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/20 shadow-2xl shadow-black/20"
        style={{ 
          background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)"
        }}
      >
        {/* Background Image */}
        {!imgError ? (
          <Image
            src={location.image}
            alt={location.name}
            fill
            className="object-cover scale-110"
            sizes={`${Math.round(width)}px`}
            loading="lazy"
            draggable={false}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 to-foreground/70" />
        )}

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

        {/* Futuristic Glass Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-white/5" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-white/50">
            Loc — {String(displayIndex).padStart(2, "0")}
          </span>
          <h3 className="mt-1 text-xl font-bold tracking-tight text-white sm:text-2xl drop-shadow-lg">
            {location.name}
          </h3>
          <div className="mt-3 h-[1px] w-8 bg-gradient-to-r from-white/60 to-transparent" />
        </div>

        {/* Subtle border shine effect */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
      </div>
    </motion.div>
  )
})