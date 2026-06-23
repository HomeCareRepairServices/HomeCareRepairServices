"use client"

import { motion } from "framer-motion"
import { 
  Droplets, Wind, Flame, WashingMachine, Zap, Paintbrush, 
  ShieldCheck, Settings, Snowflake, Plug, DoorOpen, Layers, 
  Sparkles, Lightbulb 
} from "lucide-react"
import { SilverGlowCard } from "@/components/silver-glow-card"

const allServices = [
  { Icon: Droplets, title: "RO Sales & Repair", href: "/services/ro-sales-repair" },
  { Icon: Settings, title: "RO Service", href: "/services/ro-service" },
  { Icon: Snowflake, title: "RO Installation", href: "/services/ro-installation" },
  { Icon: ShieldCheck, title: "RO AMC", href: "/services/ro-amc" },
  { Icon: Wind, title: "AC Service", href: "/services/ac-service" },
  { Icon: Flame, title: "AC Installation", href: "/services/ac-installation" },
  { Icon: Layers, title: "Chimney Cleaning", href: "/services/chimney-cleaning" },
  { Icon: Sparkles, title: "Chimney Installation", href: "/services/chimney-installation" },
  { Icon: WashingMachine, title: "Washing Machine Repair", href: "/services/washing-machine-repair" },
  { Icon: Snowflake, title: "Refrigerator Repair", href: "/services/refrigerator-repair" },
  { Icon: Zap, title: "Geyser Repair", href: "/services/geyser-repair" },
  { Icon: Plug, title: "Geyser Installation", href: "/services/geyser-installation" },
  { Icon: Lightbulb, title: "Inverter Repair", href: "/services/inverter-repair" },
  { Icon: Zap, title: "Electrical Services", href: "/services/electrical-services" },
  { Icon: DoorOpen, title: "PVC Door Services", href: "/services/pvc-door-services" },
  { Icon: Layers, title: "PVC Wall Panel", href: "/services/pvc-wall-panel-services" },
  { Icon: Droplets, title: "Water Tank Cleaning", href: "/services/water-tank-cleaning" },
  { Icon: Lightbulb, title: "Lighting Decoration", href: "/services/lighting-decoration" },
]

export function PopularServices() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            All Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From quick repairs to complete installations, we handle every home appliance with expert care.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {allServices.map((service, i) => (
            <motion.a
              key={service.title}
              href={service.href}
              // Slides in smoothly on mobile scroll
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="block h-full"
            >
              {/* YOUR 3D SILVER GLOW CARD APPLIED TO EVERY SERVICE! */}
              <SilverGlowCard className="h-full bg-card p-5 flex flex-col items-center text-center group cursor-pointer">
                <div className="silver-sheen" /> {/* Silver light beam effect */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center border border-border group-hover:border-secondary/50 transition-colors">
                    <service.Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <span className="text-sm font-medium text-foreground leading-tight">
                    {service.title}
                  </span>
                </div>
              </SilverGlowCard>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
