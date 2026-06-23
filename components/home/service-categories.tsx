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
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Do You Need Fixed?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {siteConfig.shortName} covers all major home appliances and maintenance across {siteConfig.address.split(',')[0]}.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              // This makes the cards slide up one by one as you scroll down on mobile
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {/* HERE IS YOUR NEW 3D SILVER GLOW CARD! */}
              <SilverGlowCard className="h-full bg-card p-6 cursor-pointer">
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Silver/Muted Icon background */}
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center border border-border">
                    <service.Icon className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{service.desc}</p>
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
