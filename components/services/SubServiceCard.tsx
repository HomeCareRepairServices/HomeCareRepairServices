"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import { SubService } from "./service-data"
import Image from "next/image"

interface SubServiceCardProps {
  service: SubService
}

export function SubServiceCard({ service }: SubServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -3, boxShadow: "0 0 20px rgba(79, 140, 255, 0.15)" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group relative h-36 w-full overflow-hidden rounded-[16px] border border-white/10 shadow-md shadow-black/5 transition-all duration-300"
      style={{
        background:
          "linear-gradient(135deg, rgba(15, 23, 42, 0.7) 0%, rgba(20, 35, 80, 0.4) 100%)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      {/* BACKGROUND GRADIENT OVERLAY ON HOVER */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* CONTENT WRAPPER - 40% LEFT (IMAGE) + 60% RIGHT (TEXT) */}
      <div className="relative z-10 h-full flex items-stretch">
        {/* LEFT SIDE - IMAGE (40%) */}
        <div className="w-2/5 relative overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* OVERLAY GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30" />
        </div>

        {/* RIGHT SIDE - CONTENT (60%) */}
        <div className="w-3/5 px-6 py-5 flex flex-col justify-between">
          {/* TOP: TITLE + DESCRIPTION */}
          <div className="space-y-2">
            {/* TITLE */}
            <h4 className="text-base font-semibold tracking-tight text-white leading-tight">
              {service.title}
            </h4>

            {/* DESCRIPTION */}
            <p className="text-xs text-white/60 leading-snug line-clamp-2">
              {service.description}
            </p>
          </div>

          {/* BOTTOM: BADGES + BUTTON */}
          <div className="flex items-center justify-between pt-2">
            {/* BADGES */}
            <div className="flex items-center gap-2">
              {service.badges.map((badge, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-white/70"
                >
                  <Check className="h-2.5 w-2.5 text-blue-400" />
                  <span className="text-xs font-medium">{badge}</span>
                </motion.div>
              ))}
            </div>

            {/* VIEW SERVICE BUTTON */}
            <motion.button
              whileHover={{ x: 3 }}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-500/15 text-blue-300 border border-blue-500/20 text-xs font-medium hover:bg-blue-500/25 hover:border-blue-500/40 transition-all duration-200 flex-shrink-0"
            >
              View
              <ArrowRight className="h-3 w-3" />
            </motion.button>
          </div>
        </div>

        {/* PREMIUM BORDER ACCENT */}
        <div className="absolute inset-0 rounded-[16px] border border-white/3 pointer-events-none" />
      </div>

      {/* SUBTLE BLUE GLOW ON HOVER */}
      <motion.div
        className="absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "radial-gradient(500px circle at 50% 50%, rgba(79, 140, 255, 0.08), transparent 70%)",
        }}
      />
    </motion.div>
  )
}
