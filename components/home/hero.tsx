"use client"

import { motion } from "framer-motion"
import { Star, ShieldCheck, Clock, MapPin, Droplets, Wind, Flame, WashingMachine } from "lucide-react"
import { CallButton, WhatsAppButton } from "@/components/cta"
import { siteConfig } from "@/lib/site"

const floatingIcons = [
  { Icon: Droplets, className: "left-[8%] top-[18%]", delay: 0 },
  { Icon: Wind, className: "right-[12%] top-[24%]", delay: 0.6 },
  { Icon: Flame, className: "left-[16%] bottom-[20%]", delay: 1.1 },
  { Icon: WashingMachine, className: "right-[8%] bottom-[26%]", delay: 1.6 },
]

const trust = [
  { Icon: ShieldCheck, label: "Verified Technicians" },
  { Icon: Clock, label: "Same-Day Service" },
  { Icon: MapPin, label: "10+ Areas Covered" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-water-grid">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-secondary/5 via-background/40 to-background" />

      {/* Floating appliance icons */}
      {floatingIcons.map(({ Icon, className, delay }, i) => (
        <motion.div
          key={i}
          className={`pointer-events-none absolute hidden text-secondary/25 md:block ${className}`}
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
        >
          <Icon className="size-12 lg:size-16" />
        </motion.div>
      ))}

      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm shadow-sm"
        >
          <span className="flex items-center gap-0.5 text-accent">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-3.5 fill-current" />
            ))}
          </span>
          <span className="font-medium text-foreground">{siteConfig.rating}</span>
          <span className="text-muted-foreground">
            ({siteConfig.reviewCount.toLocaleString()}+ happy customers)
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          Home Appliance Repair &amp;{" "}
          <span className="text-secondary">Installation Experts</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          Fast, reliable doorstep service for RO water purifiers, ACs, chimneys,
          washing machines, refrigerators and more across Rishikesh, Haridwar &amp;
          Dehradun.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <CallButton size="lg" />
          <WhatsAppButton size="lg" />
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          {trust.map(({ Icon, label }) => (
            <li key={label} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Icon className="size-5 text-secondary" />
              {label}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
