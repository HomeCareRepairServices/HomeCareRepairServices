"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { SilverGlowCard } from "@/components/silver-glow-card"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X, Droplets, ChevronDown } from "lucide-react"
import { CallButton } from "@/components/cta"
import { cn } from "@/lib/utils"
import { mainNav, siteConfig, serviceCategories } from "@/lib/site"
import { areas } from "@/lib/data/areas"
import { ServicesMegaMenu, MobileServicesMenu } from "@/components/layout/services-mega-menu"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const megaTimeout = useRef<NodeJS.Timeout | null>(null)
  const [areasMegaOpen, setAreasMegaOpen] = useState(false)
  const areasMegaTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  // Handles the delay so the menu doesn't close instantly when moving mouse to it
  const handleMegaEnter = () => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current)
    setMegaOpen(true)
  }
  const handleMegaLeave = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 150)
  }

  const handleAreasMegaEnter = () => {
    if (areasMegaTimeout.current) clearTimeout(areasMegaTimeout.current)
    setAreasMegaOpen(true)
  }
  const handleAreasMegaLeave = () => {
    areasMegaTimeout.current = setTimeout(() => setAreasMegaOpen(false), 150)
  }

  // Filter out "Services" and "Areas" from the main nav because we have custom mega menus
  const filteredNav = mainNav.filter((item) => item.title !== "Services" && item.title !== "Areas")

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Droplets className="size-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tight text-foreground">
              {siteConfig.shortName}
            </span>
            <span className="text-[11px] font-medium text-muted-foreground">
              Repair Services
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {filteredNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative rounded-md px-4 py-2 text-[15px] font-semibold transition-colors",
                isActive(item.href)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.title}
              {isActive(item.href) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-secondary"
                />
              )}
            </Link>
          ))}

          {/* Custom Services Mega Menu Button */}
          <div
            onMouseEnter={handleMegaEnter}
            onMouseLeave={handleMegaLeave}
            className="relative"
          >
            <button
              className={cn(
                "flex items-center gap-1 rounded-md px-4 py-2 text-[15px] font-semibold transition-colors",
                pathname.startsWith("/services")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Services
              <ChevronDown className="size-4 transition-transform duration-200" 
                style={{ transform: megaOpen ? "rotate(180deg)" : "rotate(0deg)" }} 
              />
            </button>
            {pathname.startsWith("/services") && (
               <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-secondary"
                />
            )}
            
            {/* New Premium Mega Menu Component */}
            <ServicesMegaMenu isOpen={megaOpen} onEnter={handleMegaEnter} onLeave={handleMegaLeave} />
          </div>

          {/* Custom Areas Mega Menu Button */}
          <div
            onMouseEnter={handleAreasMegaEnter}
            onMouseLeave={handleAreasMegaLeave}
            className="relative"
          >
            <button
              className={cn(
                "flex items-center gap-1 rounded-md px-4 py-2 text-[15px] font-semibold transition-colors",
                pathname.startsWith("/areas")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Areas
              <ChevronDown className="size-4 transition-transform duration-200" 
                style={{ transform: areasMegaOpen ? "rotate(180deg)" : "rotate(0deg)" }} 
              />
            </button>
            {pathname.startsWith("/areas") && (
               <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-secondary"
                />
            )}

            {/* The Areas Mega Menu Dropdown */}
            <AnimatePresence>
              {areasMegaOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  onMouseEnter={handleAreasMegaEnter}
                  onMouseLeave={handleAreasMegaLeave}
                  className="absolute left-1/2 top-full -translate-x-1/2 pt-2 w-[600px]"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-popover/95 p-6 shadow-2xl shadow-primary/10 backdrop-blur-2xl group/areas-dropdown">
                    
                    <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none z-10">
                      <div className="absolute inset-0 w-[80px] h-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/areas-dropdown:translate-x-[1000%] transition-transform duration-1000 ease-out" />
                    </div>

                    <div className="grid grid-cols-3 gap-x-6 gap-y-3 relative z-0">
                      {areas.map((area) => (
                        <Link
                          key={area.slug}
                          href={`/areas/${area.slug}`}
                          className="text-[15px] text-[#D7DFEA] hover:text-white transition-all duration-200 hover:underline decoration-[#D8DCE6]/50 underline-offset-4 py-1"
                        >
                          {area.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <CallButton size="sm" className="hidden sm:inline-flex" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-md text-foreground lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <nav className="mx-auto flex max-h-[calc(100dvh-4rem)] max-w-7xl flex-col gap-1 overflow-y-auto px-4 py-4 sm:px-6">
              {filteredNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-3 text-[17px] font-semibold transition-colors",
                    isActive(item.href)
                      ? "bg-muted text-primary"
                      : "text-foreground hover:bg-muted",
                  )}
                >
                  {item.title}
                </Link>
              ))}
              
              {/* Mobile Areas List */}
              <div className="pt-2 mt-2 border-t border-border">
                <span className="px-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Service Areas
                </span>
                <div className="mt-2 grid grid-cols-2">
                  {areas.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/areas/${area.slug}`}
                      className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>

              <MobileServicesMenu />

              <CallButton size="lg" className="mt-4 w-full" label={`Call ${siteConfig.phone}`} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
