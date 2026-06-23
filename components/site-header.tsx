"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X, Droplets, ChevronDown } from "lucide-react"
import { CallButton } from "@/components/cta"
import { cn } from "@/lib/utils"
import { mainNav, siteConfig, serviceCategories } from "@/lib/site"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const megaTimeout = useRef<NodeJS.Timeout | null>(null)

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

  // Filter out "Services" from the main nav because we are building a custom one
  const filteredNav = mainNav.filter((item) => item.title !== "Services")

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-background/60 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Droplets className="size-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-base font-bold tracking-tight text-foreground">
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
                "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
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
                "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
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

            {/* The Mega Menu Dropdown */}
            <AnimatePresence>
              {megaOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={handleMegaEnter}
                  onMouseLeave={handleMegaLeave}
                  className="absolute left-1/2 top-full -translate-x-1/2 pt-2 w-[600px]"
                >
                  <div className="grid grid-cols-2 gap-3 rounded-xl border border-border bg-card p-4 shadow-xl shadow-secondary/5">
                    {serviceCategories.map((cat) => (
                      <div key={cat.title}>
                        <Link 
                          href={cat.href} 
                          className="text-sm font-semibold text-foreground hover:text-primary transition-colors mb-2 block"
                        >
                          {cat.title}
                        </Link>
                        <ul className="space-y-1.5">
                          {cat.items.map((sub) => (
                            <li key={sub.href}>
                              <Link 
                                href={sub.href}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors block rounded-md px-2 py-1 hover:bg-muted"
                              >
                                {sub.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <div className="flex items-center gap-2">
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
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6 max-h-[80vh] overflow-y-auto">
              {filteredNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-base font-medium transition-colors",
                    isActive(item.href)
                      ? "bg-muted text-primary"
                      : "text-foreground hover:bg-muted",
                  )}
                >
                  {item.title}
                </Link>
              ))}
              
              {/* Mobile Services List */}
              <div className="pt-2 mt-2 border-t border-border">
                <span className="px-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Our Services
                </span>
                {serviceCategories.map((cat) => (
                  <div key={cat.title} className="mt-2">
                    <span className="block px-3 py-1 text-sm font-semibold text-foreground">
                      {cat.title}
                    </span>
                    {cat.items.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block rounded-md pl-6 pr-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>

              <CallButton size="lg" className="mt-4 w-full" label={`Call ${siteConfig.phone}`} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
