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
          "relative flex items-center gap-3 rounded-xl p-3 text-left transition-colors duration-200 w-full cursor-pointer",
          isActive 
            ? "bg-white/10 text-white" 
            : "text-white/60 hover:text-white/90 hover:bg-white/5"
        )}
      >
        {/* Active Border & Blue Glow */}
        <div className={cn(
          "absolute inset-0 rounded-xl border transition-all duration-300 pointer-events-none",
          isActive 
            ? "border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.2)]" 
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
            isActive ? "bg-blue-500/20 text-blue-400" : "bg-white/5 text-white/40"
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
            className="group/item flex items-center gap-3 rounded-lg px-4 py-2.5 text-white/70 transition-all duration-200 hover:bg-white/5 hover:text-white"
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
          className="absolute left-1/2 top-full -translate-x-1/2 pt-3 w-[560px]"
        >
          {/* Glassmorphism Container */}
          <div className="relative rounded-3xl border border-white/[0.08] bg-[rgba(8,18,45,0.92)] backdrop-blur-[30px] shadow-2xl shadow-black/50 overflow-hidden">
            {/* Subtle Animated Edge Glow */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none" 
                 style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.1), transparent 40%, transparent 60%, rgba(59,130,246,0.1))' }} />

            <div className="relative flex">
              {/* Left Column: Categories */}
              <div className="w-[45%] border-r border-white/[0.05] p-3 space-y-1">
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
                      className="flex h-full items-center justify-center text-center text-white/30 text-sm"
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