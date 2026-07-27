"use client"

import { motion } from "framer-motion"
import { ChevronDown, ArrowRight, Wrench } from "lucide-react"
import type { ServiceCategorySafe } from "./ServiceExplorer"
import Link from "next/link"
import { serviceCategories as catList } from "@/lib/data/services"

interface CategoryCardProps {
  category: ServiceCategorySafe
  isOpen: boolean
}

export function CategoryCard({ category, isOpen }: CategoryCardProps) {
  const IconComponent = catList.find(c => c.slug === category.id)?.icon || Wrench

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group relative w-full overflow-hidden rounded-[20px] border border-border bg-card shadow-sm shadow-[#03305f]/5 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* REMOVED the image column. Text now takes 100% width */}
      <div className="relative z-10 px-6 sm:px-8 py-6 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20">
              <IconComponent className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-foreground leading-tight">
              {category.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-snug line-clamp-2 max-w-xl">
              {category.description}
            </p>
          </div>
          
          {/* Moved Chevron to the top right for better alignment */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-lg bg-muted text-muted-foreground border border-border hover:bg-muted/80 hover:text-foreground transition-all duration-200 mt-1"
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground/70">
            {category.serviceCount} Services Available
          </p>
          <Link
            href={`/services/${category.id}`}
            className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20 text-xs font-medium hover:bg-primary/20 hover:border-primary/40 transition-all duration-200"
          >
            Explore
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      <div className="absolute inset-0 rounded-[20px] border border-border/50 pointer-events-none" />
    </motion.div>
  )
}