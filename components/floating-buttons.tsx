"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Phone, MessageCircle } from "lucide-react"
import { siteConfig, whatsappLink } from "@/lib/site"

export function FloatingButtons() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-4 right-4 z-40 flex max-w-[calc(100vw-2rem)] flex-col gap-3 sm:bottom-5 sm:right-5"
        >
          <a
            href={whatsappLink("Hi! I'd like to know more about your home repair services.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="group relative inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
            <MessageCircle className="relative size-6" />
          </a>
          <a
            href={siteConfig.phoneHref}
            aria-label="Call us now"
            className="inline-flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-black/20 transition-transform hover:scale-105"
          >
            <Phone className="size-6" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
