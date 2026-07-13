"use client"

import { memo } from "react"
import type { GalleryCategory } from "@/lib/data/gallery"

interface GalleryFilterProps {
  categories: GalleryCategory[]
  active: string
  onChange: (slug: string) => void
}

export const GalleryFilter = memo(function GalleryFilter({
  categories,
  active,
  onChange,
}: GalleryFilterProps) {
  return (
    <div className="no-scrollbar -mx-4 flex items-center gap-2 overflow-x-auto px-4 sm:justify-center mb-8">
      {categories.map((cat) => (
        <button
          key={cat.slug}
          onClick={() => onChange(cat.slug)}
          className={`shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
            active === cat.slug
              ? "bg-foreground text-background shadow-sm"
              : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
})
