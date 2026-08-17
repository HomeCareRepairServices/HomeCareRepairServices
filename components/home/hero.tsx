"use client"

import { motion } from "framer-motion"
import { Star, ShieldCheck, Clock, MapPin } from "lucide-react"
import { CallButton, WhatsAppButton } from "@/components/cta"
import { HeroBackground } from "@/components/hero-background/HeroBackground"
import { siteConfig } from "@/lib/site"

const trust = [
  { Icon: ShieldCheck, label: "Verified Technicians" },
  { Icon: Clock, label: "Same-Day Service" },
  { Icon: MapPin, label: "10+ Areas Covered" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-slate-950 -mt-16">
      {/* Blueprint Engineering Network — Main Background */}
      <div
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse 62% 58% at 50% 46%, transparent 0%, transparent 40%, rgba(0,0,0,0.6) 68%, black 88%, black 100%)",
          maskImage:
            "radial-gradient(ellipse 62% 58% at 50% 46%, transparent 0%, transparent 40%, rgba(0,0,0,0.6) 68%, black 88%, black 100%)",
        }}
      >
        <HeroBackground />
      </div>

      {/* Subtle Radial Vignette */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(2,6,23,0.8) 100%)" }}
      />

      {/* Hero Content - Scales with viewport */}
      <div className="relative z-10 mx-auto w-full max-w-3xl px-5 pt-28 pb-20 text-center sm:px-6 sm:max-w-4xl sm:pt-32 sm:pb-24 lg:max-w-5xl xl:max-w-6xl lg:pt-32 lg:pb-20">
        {/* Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm shadow-sm lg:bg-white/10 lg:border-white/20 lg:backdrop-blur-md"
        >
          <span className="flex items-center gap-0.5 text-accent lg:text-sky-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-3.5 fill-current" />
            ))}
          </span>
          <span className="font-medium text-foreground lg:text-white">{siteConfig.rating}</span>
          <span className="text-muted-foreground lg:text-white/70">
            ({siteConfig.reviewCount.toLocaleString()}+ happy customers)
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-balance text-4xl font-bold tracking-tight text-foreground lg:text-white sm:text-5xl lg:text-6xl"
        >
          Home Appliance Repair &amp;{" "}
          <span className="text-secondary lg:text-sky-400">Installation Experts</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground lg:text-white/70"
        >
          Fast, reliable doorstep service for RO water purifiers, ACs, chimneys,
          washing machines, refrigerators and more across Rishikesh, Haridwar &amp;
          Dehradun.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <CallButton size="lg" />
          <WhatsAppButton size="lg" />
        </motion.div>

        {/* Trust Indicators */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          {trust.map(({ Icon, label }) => (
            <li key={label} className="flex items-center gap-2 text-sm font-medium text-muted-foreground lg:text-white/80">
              <Icon className="size-5 text-secondary lg:text-sky-400" />
              {label}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
