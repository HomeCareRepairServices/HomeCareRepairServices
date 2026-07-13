export type GalleryCategorySlug =
  | "all"
  | "ro"
  | "ac"
  | "refrigerator"
  | "washing-machine"
  | "chimney"
  | "geyser"
  | "electrical"
  | "water-tank"
  | "decoration"

export interface GalleryCategory {
  slug: GalleryCategorySlug
  label: string
}

export interface GalleryItem {
  id: string
  category: Exclude<GalleryCategorySlug, "all">
  title: string
  description?: string
  image: string
  /** Future: lightbox / video */
  videoUrl?: string
  beforeImage?: string
  afterImage?: string
}

export const galleryCategories: GalleryCategory[] = [
  { slug: "all",             label: "All" },
  { slug: "ro",              label: "RO Service" },
  { slug: "ac",              label: "AC Repair" },
  { slug: "refrigerator",    label: "Refrigerator" },
  { slug: "washing-machine", label: "Washing Machine" },
  { slug: "chimney",         label: "Chimney" },
  { slug: "geyser",          label: "Geyser" },
  { slug: "electrical",      label: "Electrical" },
  { slug: "water-tank",      label: "Water Tank" },
  { slug: "decoration",      label: "Decoration" },
]

export const galleryItems: GalleryItem[] = [
  // RO
  { id: "ro-1",  category: "ro",  title: "RO Installation in Rishikesh",    image: "/gallery/ro/01.jpg" },
  { id: "ro-2",  category: "ro",  title: "RO Filter Replacement",           image: "/gallery/ro/02.jpg" },
  { id: "ro-3",  category: "ro",  title: "UV Water Purifier Setup",         image: "/gallery/ro/03.jpg" },
  // AC
  { id: "ac-1",  category: "ac",  title: "Split AC Installation",           image: "/gallery/ac/01.jpg" },
  { id: "ac-2",  category: "ac",  title: "AC Deep Cleaning Service",        image: "/gallery/ac/02.jpg" },
  { id: "ac-3",  category: "ac",  title: "AC Gas Refilling",                image: "/gallery/ac/03.jpg" },
  // Refrigerator
  { id: "rf-1",  category: "refrigerator", title: "Fridge Gas Charging",    image: "/gallery/refrigerator/01.jpg" },
  { id: "rf-2",  category: "refrigerator", title: "Refrigerator Thermostat Fix", image: "/gallery/refrigerator/02.jpg" },
  // Washing Machine
  { id: "wm-1",  category: "washing-machine", title: "Washing Machine Drum Repair",  image: "/gallery/washing-machine/01.jpg" },
  { id: "wm-2",  category: "washing-machine", title: "Top-Load Washer Service",     image: "/gallery/washing-machine/02.jpg" },
  // Chimney
  { id: "ch-1",  category: "chimney", title: "Kitchen Chimney Cleaning",    image: "/gallery/chimney/01.jpg" },
  { id: "ch-2",  category: "chimney", title: "Chimney Filter Replacement",  image: "/gallery/chimney/02.jpg" },
  // Geyser
  { id: "gy-1",  category: "geyser", title: "Geyser Installation",          image: "/gallery/geyser/01.jpg" },
  { id: "gy-2",  category: "geyser", title: "Geyser Heating Element Fix",   image: "/gallery/geyser/02.jpg" },
  // Electrical
  { id: "el-1",  category: "electrical", title: "Full Home Rewiring",       image: "/gallery/electrical/01.jpg" },
  { id: "el-2",  category: "electrical", title: "Ceiling Fan Installation", image: "/gallery/electrical/02.jpg" },
  { id: "el-3",  category: "electrical", title: "MCB Panel Upgrade",        image: "/gallery/electrical/03.jpg" },
  // Water Tank
  { id: "wt-1",  category: "water-tank", title: "Water Tank Cleaning",      image: "/gallery/water-tank/01.jpg" },
  { id: "wt-2",  category: "water-tank", title: "Overhead Tank Installation", image: "/gallery/water-tank/02.jpg" },
  // Decoration
  { id: "dc-1",  category: "decoration", title: "False Ceiling Work",       image: "/gallery/decoration/01.jpg" },
  { id: "dc-2",  category: "decoration", title: "Wall Paneling",            image: "/gallery/decoration/02.jpg" },
]
