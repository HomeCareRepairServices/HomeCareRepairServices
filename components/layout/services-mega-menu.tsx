"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { 
  Droplets, Wind, Flame, WashingMachine, Zap, Sparkles, PartyPopper, 
  ChevronDown, type LucideIcon 
} from "lucide-react"
import { cn } from "@/lib/utils"
import { serviceCategories } from "@/lib/site"

// Map slugs to Lucide icons
const iconMap: Record<string, LucideIcon> = {
  "water-purifier": Droplets,
  "ac-services": Wind,
  "kitchen-appliances": Flame,
  "home-appliances": WashingMachine,
  "electrical-interior": Zap,
  "cleaning-services": Sparkles,
  "decoration-services": PartyPopper,
}

/* ------------------------------------------------------------------ */
/*  Desktop Components                                                 */
/* ------------------------------------------------------------------ */

function CategoryCard({ 
  cat, 
  isActive, 
  onHover 
}: { 
  cat: typeof serviceCategories[number]; 
  isActive: boolean; 
  onHover: () => void 
}) {
  const Icon = iconMap[cat.href.split('/').pop() || ""] || Zap

  return (
    <Link
      href={cat.href}
      onMouseEnter={onHover}
      onFocus={onHover}
      className="block outline-none"
    >
      <motion.div
        whileHover={{ y: -4, scale: 1.03 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(
          "relative flex w-full cursor-pointer items-center gap-3 rounded-xl p-3 text-left transition-colors duration-200",
          isActive
            ? "bg-primary/10 text-foreground"
            : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
        )}
      >
        {/* Active Border & Blue Glow */}
        <div className={cn(
          "absolute inset-0 rounded-xl border transition-all duration-300 pointer-events-none",
          isActive
            ? "border-primary/40 shadow-[0_0_20px_color-mix(in_oklab,var(--primary)_20%,transparent)]"
            : "border-transparent"
        )} />

        {/* Left Accent Bar */}
        <motion.div 
          className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-500 rounded-r-full origin-left"
          initial={false}
          animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />

        <div className="relative z-10 flex items-center gap-3 w-full">
          <div className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors duration-300",
            isActive ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"
          )}>
            <Icon className="h-5 w-5" />
          </div>
          <span className="text-sm font-semibold truncate">{cat.title}</span>
        </div>
      </motion.div>
    </Link>
  )
}

function ServicesPanel({ items }: { items: typeof serviceCategories[number]['items'] }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="flex flex-col h-full overflow-y-auto pr-1"
    >
      <div className="grid grid-cols-1 gap-1">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group/item flex items-center gap-3 rounded-lg px-4 py-2.5 text-muted-foreground transition-all duration-200 hover:bg-muted/70 hover:text-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white/30 group-hover/item:bg-blue-400 transition-colors duration-200" />
            <span className="text-sm">{item.title}</span>
          </Link>
        ))}
      </div>
    </motion.div>
  )
}

export function ServicesMegaMenu({ isOpen, onEnter, onLeave }: { 
  isOpen: boolean; 
  onEnter: () => void; 
  onLeave: () => void 
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  // Reset active index when menu closes
  useEffect(() => {
    if (!isOpen) setActiveIndex(null)
  }, [isOpen])

  const activeItems = activeIndex !== null ? serviceCategories[activeIndex].items : []

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          className="absolute left-1/2 top-full z-50 w-[min(560px,calc(100vw-2rem))] -translate-x-1/2 pt-3"
        >
          {/* Glassmorphism Container */}
          <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-popover/95 shadow-2xl shadow-primary/15 backdrop-blur-2xl">
            {/* Subtle Animated Edge Glow */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none" 
                 style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.1), transparent 40%, transparent 60%, rgba(59,130,246,0.1))' }} />

            <div className="relative flex">
              {/* Left Column: Categories */}
              <div className="flex w-[45%] flex-col gap-1 border-r border-border/70 p-3">
                {serviceCategories.map((cat, index) => (
                  <CategoryCard
                    key={cat.href}
                    cat={cat}
                    isActive={activeIndex === index}
                    onHover={() => setActiveIndex(index)}
                  />
                ))}
              </div>

              {/* Right Column: Services List */}
              <div className="w-[55%] p-4">
                <AnimatePresence mode="wait">
                  {activeIndex !== null ? (
                    <ServicesPanel key={activeIndex} items={activeItems} />
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex h-full items-center justify-center text-center text-muted-foreground text-sm"
                    >
                      Hover over a category
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ------------------------------------------------------------------ */
/*  Mobile Component (Accordion)                                       */
/* ------------------------------------------------------------------ */

function MobileAccordionItem({ cat }: { cat: typeof serviceCategories[number] }) {
  const [isOpen, setIsOpen] = useState(false)
  const Icon = iconMap[cat.href.split('/').pop() || ""] || Zap

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-3 py-3 text-left"
      >
        <div className="flex items-center gap-3">
          <Icon className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm font-semibold text-foreground">{cat.title}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pl-11 pr-3 pb-3 space-y-1">
              {cat.items.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                >
                  {sub.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function MobileServicesMenu() {
  return (
    <div className="pt-2 mt-2 border-t border-border">
      <span className="px-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
        Our Services
      </span>
      <div className="mt-2">
        {serviceCategories.map((cat) => (
          <MobileAccordionItem key={cat.href} cat={cat} />
        ))}
      </div>
    </div>
  )
}
