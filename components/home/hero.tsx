"use client"

import Image from "next/image"
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
      
      {/* --- 1. PREMIUM DESKTOP BACKGROUND IMAGE (Hidden on Mobile) --- */}
      <motion.div 
        className="absolute inset-0 hidden lg:block z-0"
        initial={{ scale: 1.0 }}
        animate={{ scale: 1.1 }}
        transition={{ 
          duration: 20, 
          ease: "linear", 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
        style={{ willChange: "transform" }} // Forces GPU acceleration for 60fps
      >
        <Image
          src="/images/hero-bg.webp" // Ensure this image exists in your public folder
          alt="Home Care Repair Services in Rishikesh, Haridwar & Dehradun"
          fill
          className="object-cover"
          priority // Critical for LCP (Largest Contentful Paint)
          quality={85}
        />
      </motion.div>

      {/* --- 2. GRADIENT OVERLAYS --- */}
      {/* Base overlay for Mobile (Light Theme) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-secondary/5 via-background/40 to-background z-[1]" />
      
      {/* Dark overlay for Desktop (Ensures text readability over the image) */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block bg-gradient-to-b from-black/50 via-black/60 to-background/95 z-[1]" />

      {/* --- 3. FLOATING ICONS (Faded out on Desktop so they don't clash with the image) --- */}
      {floatingIcons.map(({ Icon, className, delay }, i) => (
        <motion.div
          key={i}
          className={`pointer-events-none absolute hidden text-secondary/25 lg:text-white/10 md:block z-[2] ${className}`}
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
        >
          <Icon className="size-12 lg:size-16" />
        </motion.div>
      ))}

      {/* --- 4. HERO CONTENT --- */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:py-32">
        
        {/* Rating Badge - Turns into Glassmorphism on Desktop */}
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