"use client"

import { motion } from "framer-motion"
import { Droplets, Wind, Flame, WashingMachine, Zap, Paintbrush } from "lucide-react"
import { SilverGlowCard } from "@/components/silver-glow-card"
import { siteConfig } from "@/lib/site"

const services = [
  { Icon: Droplets, title: "Water Purifier", desc: "RO Service, Repair & Installation" },
  { Icon: Wind, title: "Air Conditioning", desc: "AC Service, Gas Filling & Install" },
  { Icon: Flame, title: "Kitchen Appliances", desc: "Chimney & Stove Cleaning/Repair" },
  { Icon: WashingMachine, title: "Home Appliances", desc: "Washing Machine & Fridge Repair" },
  { Icon: Zap, title: "Electrical & More", desc: "Wiring, Geyser & Inverter Repair" },
  { Icon: Paintbrush, title: "Interior & Cleaning", desc: "PVC Doors, Wall Panels & Tanks" },
]

export function ServiceCategories() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16" 
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            What Do You Need Fixed?
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            {siteConfig.shortName} covers all major home appliances and maintenance across {siteConfig.address.split(',')[0]}.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <SilverGlowCard className="h-full p-6">
                <div className="flex flex-col items-center text-center gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-secondary/10 text-secondary">
                    <service.Icon className="size-7" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
                  </div>
                </div>
              </SilverGlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}