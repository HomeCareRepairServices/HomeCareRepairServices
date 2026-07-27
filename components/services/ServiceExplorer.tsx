"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { serviceCategoriesData } from "@/lib/data/service-categories"
import { ServiceAccordion } from "./ServiceAccordion"

// 1. Define safe, serializable types for the client
export interface SubServiceSafe {
  id: string
  title: string
  description: string
  image: string
  badges: string[]
}

export interface ServiceCategorySafe {
  id: string
  name: string
  description: string
  image: string
  serviceCount: number
  subServices: SubServiceSafe[]
}

// 2. Helper to generate badges automatically based on description
function generateBadges(desc: string): string[] {
  const badges = ["Verified Pros"]
  const lower = desc.toLowerCase()
  if (lower.includes("repair") || lower.includes("fix")) badges.push("Repair")
  else if (lower.includes("install") || lower.includes("mount")) badges.push("Installation")
  else if (lower.includes("clean") || lower.includes("maintenance")) badges.push("Maintenance")
  else badges.push("Service")
  return badges
}

// 3. Safely map your database to a serializable format
const safeCategories: ServiceCategorySafe[] = Object.values(serviceCategoriesData).map(cat => ({
  id: cat.slug,
  name: cat.title,
  description: cat.intro,
  image: cat.heroImage,
  serviceCount: cat.services.length,
  subServices: cat.services.map(s => ({
    id: s.slug,
    title: s.title,
    description: s.description,
    image: s.image,
    badges: generateBadges(s.description),
  }))
}))

export function ServiceExplorer() {
  const [openId, setOpenId] = useState<string | null>(null)

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="w-full py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            What Do You Need Fixed?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover comprehensive solutions across all major home appliance categories. Click to expand and explore detailed services.
          </p>
        </motion.div>

        <div className="space-y-6">
          {safeCategories.map((category, idx) => (
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