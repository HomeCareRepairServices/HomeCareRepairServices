"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import type { SubServiceSafe } from "./ServiceExplorer" // Updated import
import Image from "next/image"
import Link from "next/link"

interface SubServiceCardProps {
  service: SubServiceSafe // Updated type
  href: string
}

export function SubServiceCard({ service, href }: SubServiceCardProps) {
  return (
    <Link href={href} className="block">
      <motion.div
        whileHover={{ y: -3, boxShadow: "0 4px 20px rgba(30, 58, 138, 0.1)" }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="group relative h-36 w-full overflow-hidden rounded-[16px] border border-border bg-card shadow-sm shadow-[#03305f]/5 transition-all duration-300 cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10 h-full flex items-stretch">
          <div className="w-2/5 relative overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/90" />
          </div>
          <div className="w-3/5 px-6 py-5 flex flex-col justify-between">
            <div className="space-y-2">
              <h4 className="text-base font-semibold tracking-tight text-foreground leading-tight">{service.title}</h4>
              <p className="text-xs text-muted-foreground leading-snug line-clamp-2">{service.description}</p>
            </div>
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2">
                {service.badges.map((badge, idx) => (
                  <motion.div key={idx} className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary/70">
                    <Check className="h-2.5 w-2.5 text-primary" />
                    <span className="text-xs font-medium">{badge}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div whileHover={{ x: 3 }} className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20 text-xs font-medium hover:bg-primary/20 hover:border-primary/40 transition-all duration-200 flex-shrink-0">
                View
                <ArrowRight className="h-3 w-3" />
              </motion.div>
            </div>
          </div>
          <div className="absolute inset-0 rounded-[16px] border border-border/50 pointer-events-none" />
        </div>
      </motion.div>
    </Link>
  )
}