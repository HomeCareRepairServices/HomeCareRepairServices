"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { ServiceCategory } from "./service-data"
import { CategoryCard } from "./CategoryCard"
import { SubServiceCard } from "./SubServiceCard"

interface ServiceAccordionProps {
  category: ServiceCategory
  isOpen: boolean
  onToggle: (id: string) => void
}

export function ServiceAccordion({
  category,
  isOpen,
  onToggle,
}: ServiceAccordionProps) {
  return (
    <motion.div className="w-full">
      {/* CATEGORY CARD HEADER */}
      <motion.button
        onClick={() => onToggle(category.id)}
        className="w-full text-left"
      >
        <CategoryCard category={category} isOpen={isOpen} />
      </motion.button>

      {/* EXPANDED SUB-SERVICES */}
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
                  transition={{
                    duration: 0.35,
                    delay: idx * 0.08,
                    ease: "easeOut",
                  }}
                >
                  <SubServiceCard service={service} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
