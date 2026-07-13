"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { ChevronDown, X } from "lucide-react"
import { ReviewCard } from "@/components/review-card"
import { Reveal } from "@/components/reveal"
import { allTestimonials } from "@/lib/data/testimonials"

const PER_PAGE = 6

const areaOptions = Array.from(new Set(allTestimonials.map((t) => t.area))).sort()

const serviceOptions = Array.from(new Set(allTestimonials.map((t) => t.service))).sort()

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: string
  options: string[]
  onChange: (v: string) => void
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold text-foreground tracking-wide uppercase">{label}</span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full min-w-[180px] appearance-none rounded-xl border border-border bg-card px-4 py-2.5 pr-10 text-sm text-foreground shadow-sm shadow-[#03305f]/5 transition-all hover:border-[#03305f]/40 hover:shadow-md hover:shadow-[#03305f]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      </div>
    </div>
  )
}

export function OurWorkReviews() {
  const [areaFilter, setAreaFilter] = useState("All Areas")
  const [serviceFilter, setServiceFilter] = useState("All Services")
  const [visibleCount, setVisibleCount] = useState(PER_PAGE)

  const filtered = useMemo(() => {
    let result = allTestimonials
    if (areaFilter !== "All Areas") {
      result = result.filter((t) => t.area === areaFilter)
    }
    if (serviceFilter !== "All Services") {
      result = result.filter((t) => t.service === serviceFilter)
    }
    return result
  }, [areaFilter, serviceFilter])

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  const handleAreaChange = (v: string) => {
    setAreaFilter(v)
    setVisibleCount(PER_PAGE)
  }

  const handleServiceChange = (v: string) => {
    setServiceFilter(v)
    setVisibleCount(PER_PAGE)
  }

  const clearFilters = () => {
    setAreaFilter("All Areas")
    setServiceFilter("All Services")
    setVisibleCount(PER_PAGE)
  }

  const hasActiveFilters = areaFilter !== "All Areas" || serviceFilter !== "All Services"

  return (
    <section className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary">
            Customer Reviews
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from homeowners across our service areas.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-end gap-4 mb-8">
          <FilterSelect
            label="Area"
            value={areaFilter}
            options={["All Areas", ...areaOptions]}
            onChange={handleAreaChange}
          />
          <FilterSelect
            label="Service"
            value={serviceFilter}
            options={["All Services", ...serviceOptions]}
            onChange={handleServiceChange}
          />

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-muted-foreground transition-all hover:border-destructive/40 hover:text-destructive shadow-sm shadow-[#03305f]/5"
            >
              <X className="size-4" />
              Clear Filters
            </button>
          )}
        </div>

        <p className="text-sm text-muted-foreground mb-6">
          Showing {visible.length} of {filtered.length} review{filtered.length !== 1 ? "s" : ""}
          {hasActiveFilters && " matching your filters"}
        </p>

        {visible.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((t, i) => (
              <Reveal key={`${t.name}-${t.area}-${t.service}`} delay={(i % 3) * 0.05}>
                <ReviewCard t={t} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              No reviews found
            </h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-sm">
              No testimonials found for the selected filters. Try choosing a different area or service.
            </p>
          </div>
        )}

        {hasMore && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + PER_PAGE)}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm shadow-[#03305f]/5 transition-all hover:-translate-y-0.5 hover:border-[#03305f] hover:shadow-md hover:shadow-[#03305f]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Load More Reviews
              <ChevronDown className="size-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
