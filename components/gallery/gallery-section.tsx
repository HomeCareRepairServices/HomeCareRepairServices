"use client"

import { useState, useMemo } from "react"
import {
  galleryCategories,
  galleryItems,
  type GalleryCategorySlug,
} from "@/lib/data/gallery"
import { GalleryFilter } from "./gallery-filter"
import { GalleryCarousel } from "./gallery-carousel"

export function GallerySection() {
  const [activeCategory, setActiveCategory] =
    useState<GalleryCategorySlug>("all")

  const filteredItems = useMemo(
    () =>
      activeCategory === "all"
        ? galleryItems
        : galleryItems.filter((it) => it.category === activeCategory),
    [activeCategory]
  )

  return (
    <div>
      <GalleryFilter
        categories={galleryCategories}
        active={activeCategory}
        onChange={(slug) => setActiveCategory(slug as GalleryCategorySlug)}
      />

      {filteredItems.length > 0 ? (
        /* key forces full remount on category change — resets position */
        <GalleryCarousel key={activeCategory} items={filteredItems} />
      ) : (
        <p className="py-16 text-center text-muted-foreground">
          No projects found in this category yet.
        </p>
      )}
    </div>
  )
}
