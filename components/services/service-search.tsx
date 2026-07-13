"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X } from "lucide-react"
import { services, type Service } from "@/lib/data/services"
import { serviceCategoriesData } from "@/lib/data/service-categories"

export function ServiceSearch() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<(Service & { categorySlug: string })[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (query.length < 2) { setResults([]); setIsOpen(false); return }
    const q = query.toLowerCase()
    const filtered = services.map(s => ({ ...s, categorySlug: s.category })).filter(s => s.name.toLowerCase().includes(q) || s.short.toLowerCase().includes(q)).slice(0, 6)
    setResults(filtered); setIsOpen(filtered.length > 0)
  }, [query])

  useEffect(() => {
    const handler = (e: MouseEvent) => { if (containerRef.current && !containerRef.current.contains(e.target as Node)) setIsOpen(false) }
    document.addEventListener("mousedown", handler); return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto">
      <div className="relative flex items-center rounded-2xl border border-border bg-background shadow-sm focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary/40 transition-all">
        <Search className="absolute left-4 h-5 w-5 text-muted-foreground" />
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search a service... (e.g., RO, AC, Geyser)" className="w-full bg-transparent py-4 pl-12 pr-12 text-foreground placeholder:text-muted-foreground focus:outline-none" />
        {query && <button onClick={() => setQuery("")} className="absolute right-4 text-muted-foreground hover:text-foreground"><X className="h-5 w-5" /></button>}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: 10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.98 }} transition={{ duration: 0.2 }} className="absolute mt-2 w-full overflow-hidden rounded-2xl border border-border bg-background shadow-xl z-50">
            {results.map((service) => (
              <Link key={service.slug} href={`/services/${service.categorySlug}/${service.slug}`} onClick={() => { setIsOpen(false); setQuery("") }} className="flex items-center gap-4 px-5 py-4 hover:bg-muted transition-colors border-b border-border last:border-b-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground"><service.icon className="h-5 w-5" /></div>
                <div>
                  <p className="font-semibold text-foreground">{service.name}</p>
                  <p className="text-sm text-muted-foreground">{serviceCategoriesData[service.categorySlug as keyof typeof serviceCategoriesData]?.title}</p>
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
