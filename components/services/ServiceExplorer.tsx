"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { serviceCategories } from "./service-data"
import { ServiceAccordion } from "./ServiceAccordion"

export function ServiceExplorer() {
  const [openId, setOpenId] = useState<string | null>(null)

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="w-full py-24 px-4 md:px-6 lg:px-8">
      {/* MAX WIDTH CONTAINER */}
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            Explore Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover comprehensive solutions across all major home appliance categories. Click to expand and explore detailed services.
          </p>
        </motion.div>

        {/* SERVICE CATEGORIES - VERTICAL STACK */}
        <div className="space-y-6">
          {serviceCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <ServiceAccordion
                category={category}
                isOpen={openId === category.id}
                onToggle={handleToggle}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
