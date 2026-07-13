"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Reveal } from "@/components/reveal"
import { SilverGlowCard } from "@/components/silver-glow-card"
// Import directly from your data file!
import { popularServices } from "@/lib/data/services"

export function PopularServices() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            All Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From quick repairs to complete installations, we handle every home appliance with expert care.
          </p>
        </motion.div>

        {/* grid-rows-[auto] completely removes the ugly vertical gaps */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 grid-rows-[auto]">
          {popularServices.map((service, i) => (
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
                    {/* flex-shrink-0 stops long titles from squishing the image area */}
                    <div className="relative w-full h-36 overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 rounded-t-2xl transition-transform duration-500 flex-shrink-0">
                      <div className="absolute inset-0 overflow-hidden rounded-t-2xl pointer-events-none z-10">
                        <div className="absolute inset-0 w-[50px] h-[100%] bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-[800%] transition-transform duration-1000 ease-out" />
                      </div>

                      <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <radialGradient id="star-core" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                            <stop offset="60%" stopColor="#e2e8f0" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                          </radialGradient>
                          <filter id="premium-star-glow" x="-200%" y="-200%" width="500%" height="500%">
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
                          fill="url(#star-core)"
                          filter="url(#premium-star-glow)"
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
                          {/* We use service.icon dynamically here! */}
                          <service.icon className="w-10 h-10 text-primary/70 group-hover:text-primary drop-shadow-md" />
                        </motion.div>
                      </div>
                    </div>

                    {/* items-center ensures long titles like "Modular Kitchen..." are perfectly centered */}
                    <div className="flex flex-col justify-center items-center p-4 flex-1 text-center">
                        <h3 className="text-base font-bold text-[#03305f] leading-tight">
                        {service.name}
                      </h3>
                    </div>
                  </SilverGlowCard>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}