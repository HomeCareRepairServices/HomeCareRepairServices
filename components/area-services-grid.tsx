"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ImageIcon } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SilverGlowCard } from "@/components/silver-glow-card"
import { services, serviceCategories } from "@/lib/data/services"

export function AreaServicesGrid({ areaName }: { areaName: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-8">
        Services Available in {areaName}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => {
          const category = serviceCategories.find((c) => c.slug === service.category)
          const Icon = service.icon
          return (
            <Reveal key={service.slug} delay={i * 0.04}>
              <Link href={`/services/${service.category}/${service.slug}`} className="block h-full">
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  whileHover={{ y: -2, scale: 1.005 }}
                  className="block h-full"
                >
                  <SilverGlowCard className="h-full bg-card flex flex-col group cursor-pointer transition-shadow duration-300 hover:shadow-xl hover:shadow-[#03305f]/15">
                    {/* Image Placeholder Area */}
                    <div className="relative w-full h-48 overflow-hidden rounded-t-2xl flex-shrink-0">
                      {/* Gradient base */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/8 to-primary/3" />

                      {/* Decorative dot grid pattern */}
                      <div
                        className="absolute inset-0 opacity-[0.15]"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle, rgba(3,48,95,0.3) 1px, transparent 1px)",
                          backgroundSize: "24px 24px",
                        }}
                      />

                      {/* Soft radial highlight */}
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.3),transparent_70%)]" />

                      {/* Silver sheen sweep */}
                      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
                        <div className="absolute inset-0 w-[60px] h-[120%] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full skew-x-[-20deg] group-hover:translate-x-[900%] transition-transform duration-1000 ease-out" />
                      </div>

                      {/* Orbiting star */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <radialGradient id="asc-star-core" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                            <stop offset="60%" stopColor="#e2e8f0" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                          </radialGradient>
                          <filter id="asc-star-glow" x="-200%" y="-200%" width="500%" height="500%">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                            <feMerge>
                              <feMergeNode in="blur" />
                              <feMergeNode in="blur" />
                              <feMergeNode in="SourceGraphic" />
                            </feMerge>
                          </filter>
                        </defs>
                        <rect x="1" y="1" rx="16" ry="16" width="calc(100% - 2px)" height="calc(100% - 2px)" fill="none" stroke="none" />
                        <motion.circle
                          r="4"
                          fill="url(#asc-star-core)"
                          filter="url(#asc-star-glow)"
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

                      {/* Centered service icon */}
                      <div className="absolute inset-0 flex items-center justify-center z-0">
                        <motion.div
                          whileHover={{ scale: 1.2, transition: { type: "spring", stiffness: 400, damping: 14 } }}
                          className="transition-colors duration-300"
                        >
                          <Icon className="w-14 h-14 text-primary/60 group-hover:text-primary drop-shadow-lg" />
                        </motion.div>
                      </div>

                      {/* Image placeholder hint */}
                      <div className="absolute bottom-2 right-2 flex items-center gap-1.5 rounded-full bg-background/60 backdrop-blur-sm px-2.5 py-1 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ImageIcon className="size-3 text-muted-foreground" />
                        <span className="text-[10px] font-medium text-muted-foreground tracking-wide uppercase">
                          Image
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col p-5 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-lg font-bold text-[#03305f] leading-tight">
                          {service.name}
                        </h3>
                        {category && (
                          <span className="shrink-0 rounded-full bg-secondary/10 px-2.5 py-0.5 text-[10px] font-medium text-secondary tracking-wide uppercase">
                            {category.name.split(" ")[0]}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                        {service.short}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary/70 group-hover:text-primary transition-colors">
                        <span>Explore Service</span>
                        <ArrowRight className="size-4 transition-all duration-300 group-hover:translate-x-1.5" />
                      </div>
                    </div>
                  </SilverGlowCard>
                </motion.div>
              </Link>
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}
