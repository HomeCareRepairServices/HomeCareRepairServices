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
    <section className="relative isolate min-h-[32rem] overflow-hidden border-b border-border bg-background">
      {/* Blueprint engineering network with a quiet, center-safe content zone */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <HeroBackground />
      </div>

      {/* Hero Content - Scales with viewport */}
      <div className="relative z-10 mx-auto w-full max-w-3xl px-5 pt-16 pb-20 text-center sm:px-6 sm:max-w-4xl sm:pt-20 sm:pb-24 lg:max-w-5xl xl:max-w-6xl lg:pt-20 lg:pb-20">
        {/* Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[#dbeafe] bg-white/90 px-4 py-1.5 text-sm shadow-sm backdrop-blur-md"
        >
          <span className="flex items-center gap-0.5 text-[#087fea]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-3.5 fill-current" />
            ))}
          </span>
          <span className="font-medium text-[#0a1f44]">{siteConfig.rating}</span>
          <span className="text-slate-600">
            ({siteConfig.reviewCount.toLocaleString()}+ happy customers)
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-balance text-4xl font-bold tracking-tight text-[#0a2850] sm:text-5xl lg:text-6xl"
        >
          Home Appliance Repair &amp;{" "}
          <span className="text-[#087fea]">Installation Experts</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600"
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
            <li key={label} className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <Icon className="size-5 text-[#087fea]" />
              {label}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
