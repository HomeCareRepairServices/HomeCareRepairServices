"use client"

import { motion } from "framer-motion"
import { ChevronDown, ArrowRight } from "lucide-react"
import { ServiceCategory } from "./service-data"
import Image from "next/image"

interface CategoryCardProps {
  category: ServiceCategory
  isOpen: boolean
}

export function CategoryCard({ category, isOpen }: CategoryCardProps) {
  // Get the icon component if it's not already rendered
  const IconComponent =
    typeof category.icon === "function" ? category.icon : null

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group relative h-40 w-full overflow-hidden rounded-[20px] border border-white/10 shadow-lg shadow-black/10 transition-all duration-300"
      style={{
        background:
          "linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 58, 138, 0.4) 100%)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      {/* BACKGROUND GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* CONTENT WRAPPER - 40% LEFT (IMAGE) + 60% RIGHT (TEXT) */}
      <div className="relative z-10 h-full flex items-stretch">
        {/* LEFT SIDE - IMAGE (40%) */}
        <div className="w-2/5 relative overflow-hidden">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* OVERLAY GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
        </div>

        {/* RIGHT SIDE - CONTENT (60%) */}
        <div className="w-3/5 px-8 py-6 flex flex-col justify-between">
          {/* TOP: ICON + TITLE + DESCRIPTION */}
          <div className="space-y-3">
            {/* ICON */}
            {IconComponent && (
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <IconComponent className="h-5 w-5" />
              </div>
            )}

            {/* TITLE */}
            <h3 className="text-xl font-bold tracking-tight text-white leading-tight">
              {category.name}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-sm text-white/70 leading-snug line-clamp-2">
              {category.description}
            </p>
          </div>

          {/* BOTTOM: SERVICE COUNT + BUTTONS */}
          <div className="flex items-center justify-between pt-2">
            <p className="text-xs font-medium text-white/50">
              {category.serviceCount} Services Available
            </p>

            {/* BUTTONS */}
            <div className="flex items-center gap-3">
              {/* EXPLORE BUTTON */}
              <motion.button
                whileHover={{ x: 2 }}
                className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/20 text-xs font-medium hover:bg-blue-500/20 hover:border-blue-500/40 transition-all duration-200"
              >
                Explore
                <ArrowRight className="h-3.5 w-3.5" />
              </motion.button>

              {/* EXPAND BUTTON */}
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="h-8 w-8 flex items-center justify-center rounded-lg bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white/80 transition-all duration-200"
              >
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* PREMIUM BORDER ACCENT */}
        <div className="absolute inset-0 rounded-[20px] border border-white/5 pointer-events-none" />
      </div>

      {/* SUBTLE GLOW ON HOVER */}
      <motion.div
        className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "radial-gradient(600px circle at 50% 50%, rgba(79, 140, 255, 0.1), transparent 70%)",
        }}
      />
    </motion.div>
  )
}
