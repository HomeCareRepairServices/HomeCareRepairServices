"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, type LucideIcon, Droplets, Flame, Wind, Container, WashingMachine } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { CtaLink } from "@/components/cta"
import { SilverGlowCard } from "@/components/silver-glow-card"

const works: { title: string; icon: LucideIcon }[] = [
  { title: "RO Installation", icon: Droplets },
  { title: "Chimney Cleaning", icon: Flame },
  { title: "AC Service", icon: Wind },
  { title: "Water Tank Cleaning", icon: Container },
  { title: "Geyser Installation", icon: Flame },
  { title: "Washing Machine Repair", icon: WashingMachine },
]

export function GalleryPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          align="left"
          eyebrow="Our Work"
          title="Real Jobs, Real Results"
          description="A glimpse of recent installations, repairs and cleaning jobs completed for our customers."
          className="max-w-xl"
        />
        <CtaLink href="/our-work-and-reviews" variant="outline" size="md" className="shrink-0">
          View Our Completed Projects <ArrowRight className="size-4" />
        </CtaLink>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3">
        {works.map((work) => (
          <Link key={work.title} href="/our-work-and-reviews" className="block h-full">
            <SilverGlowCard className="h-full bg-card flex flex-col group cursor-pointer transition-shadow duration-300 hover:shadow-xl hover:shadow-[#03305f]/15">
              <div className="relative w-full h-36 overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 rounded-t-2xl transition-transform duration-500 flex-shrink-0">
                <div className="absolute inset-0 overflow-hidden rounded-t-2xl pointer-events-none z-10">
                  <div className="absolute inset-0 w-[50px] h-[100%] bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-[800%] transition-transform duration-1000 ease-out" />
                </div>

                <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="work-star-core" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                      <stop offset="60%" stopColor="#e2e8f0" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                    </radialGradient>
                    <filter id="work-star-glow" x="-200%" y="-200%" width="500%" height="500%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur"/>
                        <feMergeNode in="blur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <rect x="1" y="1" rx="16" ry="16" width="calc(100% - 2px)" height="calc(100% - 2px)" fill="none" stroke="none" />
                  <motion.circle
                    r="4"
                    fill="url(#work-star-core)"
                    filter="url(#work-star-glow)"
                    animate={{
                      offsetDistance: ["0%", "100%"],
                      opacity: [0, 1, 1, 1, 0],
                    }}
                    transition={{
                      offsetDistance: { duration: 3, repeat: Infinity, ease: "linear" },
                      opacity: { duration: 3, repeat: Infinity, ease: "linear", times: [0, 0.1, 0.5, 0.9, 1] },
                    }}
                    style={{ offsetPath: `rect(1px 1px round 16px 16px calc(100% - 2px) calc(100% - 2px))` }}
                  />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <motion.div
                    whileHover={{ scale: 1.17, transition: { type: "spring", stiffness: 400, damping: 14 } }}
                    className="transition-colors duration-300"
                  >
                    <work.icon className="w-10 h-10 text-primary/70 group-hover:text-primary drop-shadow-md" />
                  </motion.div>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center p-4 flex-1 text-center">
                <h3 className="text-base font-bold text-[#03305f] leading-tight">
                  {work.title}
                </h3>
              </div>
            </SilverGlowCard>
          </Link>
        ))}
      </div>
    </section>
  )
}
