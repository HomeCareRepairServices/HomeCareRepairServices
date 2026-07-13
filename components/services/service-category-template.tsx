"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { LocationsCarousel } from "./locations-carousel"
import { ContactCta } from "@/components/contact-cta"
import type { ServiceCategoryData } from "@/lib/data/service-categories"

interface Props {
  data: ServiceCategoryData
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

export function ServiceCategoryTemplate({ data }: Props) {
  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="relative bg-foreground text-background overflow-hidden">
        {/* Desktop/Tablet Background Image (Hidden on Mobile) */}
        <Image
          src={data.heroImage}
          alt=""
          fill
          className="hidden md:block object-cover opacity-40"
          priority
        />
        {/* Dark Gradient Overlay for text readability */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/50 to-foreground" />

        {/* Text Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 sm:py-20 md:py-28 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            {data.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base text-background/70 max-w-2xl mx-auto sm:text-lg"
          >
            {data.intro}
          </motion.p>
        </div>
      </section>

      {/* --- SUB-SERVICES IMAGE GRID --- */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="sr-only">Services included in {data.title}</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {data.services.map((service) => (
              <motion.div key={service.slug} variants={itemVariants}>
                <Link
                  href={`/services/${data.slug}/${service.slug}`}
                  className="group block h-full rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 hover:border-foreground/20 hover:shadow-lg overflow-hidden"
                >
                  {/* Card Image */}
                  <div className="relative h-48 w-full bg-muted">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6">
                    <span className="text-2xl">{service.icon}</span>
                    <h3 className="mt-3 text-lg font-bold tracking-tight text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {service.description}
                    </p>
                    <div className="mt-4 inline-flex items-center text-sm font-medium text-foreground opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      View Details
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- LOCATIONS CAROUSEL --- */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-4 mb-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Available In Your Area
          </h2>
          <p className="mt-2 text-muted-foreground">
            Scroll, drag, or click to explore locations we serve.
          </p>
        </div>
        <LocationsCarousel />
      </section>

      {/* --- FAQ SECTION --- */}
      {data.faqs.length > 0 && (
        <section className="py-16 sm:py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight text-foreground text-center sm:text-3xl mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {data.faqs.map((faq, i) => (
                <div key={i} className="rounded-xl border border-border bg-background p-6">
                  <h3 className="font-semibold text-foreground">{faq.q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCta />
    </>
  )
}