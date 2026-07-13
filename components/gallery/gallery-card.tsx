"use client"

import { memo, useState } from "react"
import Image from "next/image"
import { motion, useTransform, type MotionValue } from "framer-motion"
import type { GalleryItem } from "@/lib/data/gallery"

interface GalleryCardProps {
  item: GalleryItem
  virtualIndex: number
  position: MotionValue<number>
  velocity: MotionValue<number>
  width: number
  height: number
}

export const GalleryCard = memo(function GalleryCard({
  item,
  virtualIndex,
  position,
  velocity,
  width,
  height,
}: GalleryCardProps) {
  const [imgError, setImgError] = useState(false)

  /* ---- derived offset from shared position ---- */
  const offset = useTransform(position, (p) => virtualIndex - p)

  /* ---- 3D transforms ---- */
  const x = useTransform(offset, (o) => o * width * 0.92)
  const rotateY = useTransform(offset, (o) => -o * 10)
  const scale = useTransform(offset, (o) => {
    const abs = Math.abs(o)
    if (abs >= 3) return 0.65
    if (abs <= 1) return 1.0 - abs * 0.15
    if (abs <= 2) return 0.85 - (abs - 1) * 0.10
    return 0.75 - (abs - 2) * 0.10
  })
  const z = useTransform(offset, (o) => {
    const abs = Math.abs(o)
    return -abs * abs * 40
  })
  const opacity = useTransform(offset, (o) => {
    const abs = Math.abs(o)
    if (abs > 3.5) return 0
    if (abs > 2.5) return 1 - (abs - 2.5)
    return 1
  })

  /* Strict 2D stacking: center=100, sides decrease */
  const zIndex = useTransform(offset, (o) => Math.max(1, Math.round(100 - Math.abs(o) * 10)))

  /* ---- velocity-linked wave ---- */
  const waveY = useTransform([offset, velocity], ([o, v]) => {
    const clamped = Math.max(-7, Math.min(7, v))
    return Math.sin(o * 0.85) * clamped * 11
  })

  /* ---- label opacity (visible near center) ---- */
  const labelOpacity = useTransform(offset, (o) => {
    const abs = Math.abs(o)
    if (abs > 1.4) return 0
    return 1 - abs / 1.4
  })

  /* ---- index brightness (subtle depth cue) ---- */
  const brightness = useTransform(offset, (o) => {
    const abs = Math.abs(o)
    if (abs > 5) return 0.6
    return 1 - abs * 0.06
  })
  const filter = useTransform(brightness, (b) => `brightness(${b})`)

  /* index display */
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
        filter,
        marginLeft: -width / 2,
        marginTop: -height / 2,
        willChange: "transform, opacity, filter",
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
      }}
    >
      <div className="group relative h-full w-full overflow-hidden rounded-2xl bg-muted shadow-lg shadow-black/10">
        {imgError ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-4 text-center">
            <span className="text-3xl opacity-40">🔧</span>
            <span className="text-sm font-medium text-muted-foreground/70 leading-snug">
              {item.title}
            </span>
          </div>
        ) : (
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes={`${Math.round(width)}px`}
            loading="lazy"
            draggable={false}
            onError={() => setImgError(true)}
          />
        )}

        {/* index badge — always visible */}
        <div className="pointer-events-none absolute top-3 left-3 z-10">
          <span className="font-mono text-[11px] font-medium text-white/60 drop-shadow-md">
            {String(displayIndex).padStart(2, "0")}
          </span>
        </div>

        {/* center label overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0"
          style={{ opacity: labelOpacity }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-0 left-0 right-0 p-4"
          style={{ opacity: labelOpacity }}
        >
          <span className="inline-block rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-white/85 backdrop-blur-sm">
            {item.category}
          </span>
          <p className="mt-1.5 text-sm font-medium leading-snug text-white/95">
            {item.title}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
})
