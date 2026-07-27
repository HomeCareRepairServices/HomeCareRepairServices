"use client"

import { motion, AnimatePresence } from "framer-motion"
import type { ServiceCategorySafe } from "./ServiceExplorer" // Updated import
import { CategoryCard } from "./CategoryCard"
import { SubServiceCard } from "./SubServiceCard"

interface ServiceAccordionProps {
  category: ServiceCategorySafe // Updated type
  isOpen: boolean
  onToggle: (id: string) => void
}

export function ServiceAccordion({ category, isOpen, onToggle }: ServiceAccordionProps) {
  return (
    <motion.div className="w-full">
      <motion.button onClick={() => onToggle(category.id)} className="w-full text-left">
        <CategoryCard category={category} isOpen={isOpen} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4 space-y-4">
              {category.subServices.map((service, idx) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, delay: idx * 0.08, ease: "easeOut" }}
                >
                  <SubServiceCard
                    service={service}
                    href={`/services/${category.id}/${service.id}`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}