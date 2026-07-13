"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ShieldCheck, Clock, CalendarCheck, Phone, FileCheck, Wrench } from "lucide-react"
import { LocationsCarousel } from "./locations-carousel"
import { ContactCta } from "@/components/contact-cta"
import { siteConfig } from "@/lib/site"
import type { ServiceCategoryData, SubService } from "@/lib/data/service-categories"

interface Props {
  category: ServiceCategoryData
  service: SubService
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

export function ServiceDetailTemplate({ category, service }: Props) {
  // Fallback to category FAQs if service-specific ones aren't added yet
  const faqs = category.faqs

  return (
    <>
      {/* --- JSON-LD Breadcrumbs (Hidden SEO Boost) --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
              { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
              { "@type": "ListItem", position: 3, name: category.title, item: `${siteConfig.url}/services/${category.slug}` },
              { "@type": "ListItem", position: 4, name: service.title, item: `${siteConfig.url}/services/${category.slug}/${service.slug}` },
            ],
          }),
        }}
      />

      {/* --- HERO SECTION --- */}
      <section className="relative bg-foreground text-background overflow-hidden">
        {/* Desktop Background */}
        <Image
          src={service.image}
          alt=""
          fill
          className="hidden md:block object-cover opacity-30"
          priority
        />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/60 to-foreground" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-16 pb-12 sm:pt-20 md:pt-28 md:pb-16">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-background/60">
              <li><Link href="/" className="hover:text-background transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/services" className="hover:text-background transition-colors">Services</Link></li>
              <li>/</li>
              <li><Link href={`/services/${category.slug}`} className="hover:text-background transition-colors">{category.title}</Link></li>
              <li>/</li>
              <li className="text-background font-medium">{service.title}</li>
            </ol>
          </nav>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-base text-background/70 max-w-2xl sm:text-lg"
          >
            {service.description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-bold text-foreground transition-colors hover:bg-background/90"
            >
              <Phone className="h-4 w-4" />
              Book Now
            </a>
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-background/30 px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-background/10"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* --- TRUST INDICATORS --- */}
      <section className="border-b border-border bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-foreground" />
              <span className="text-sm font-semibold text-foreground">Verified Technicians</span>
              <span className="text-xs text-muted-foreground">Background checked & trained</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="h-6 w-6 text-foreground" />
              <span className="text-sm font-semibold text-foreground">Same Day Service</span>
              <span className="text-xs text-muted-foreground">Quick turnaround times</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CalendarCheck className="h-6 w-6 text-foreground" />
              <span className="text-sm font-semibold text-foreground">30-Day Warranty</span>
              <span className="text-xs text-muted-foreground">Peace of mind guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS --- */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight text-center sm:text-3xl mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-6 left-[20%] right-[20%] h-[2px] bg-border" />
            
            {[
              { step: "01", title: "Book Online", desc: "Choose your service, pick a time slot, and book instantly.", icon: FileCheck },
              { step: "02", title: "Technician Assigned", desc: "A verified expert is assigned and arrives at your doorstep.", icon: Wrench },
              { step: "03", title: "Job Done", desc: "Service completed with a quality check and warranty.", icon: ShieldCheck },
            ].map((item) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background font-bold text-lg">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRICING / CTA CARD --- */}
      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-muted/30 p-8 sm:p-10 text-center"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Starting From</span>
            <h2 className="mt-2 text-4xl font-bold text-foreground">₹299*</h2>
            <p className="mt-2 text-sm text-muted-foreground">*Actual price may vary based on the brand, model, and exact issue.</p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-sm font-bold text-background hover:opacity-90 transition-opacity"
              >
                <Phone className="h-4 w-4" />
                Get Exact Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- LOCATIONS CAROUSEL --- */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-4 mb-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            We Serve In Your Area
          </h2>
        </div>
        <LocationsCarousel />
      </section>

      {/* --- FAQ SECTION --- */}
      {faqs.length > 0 && (
        <section className="py-16 sm:py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight text-foreground text-center sm:text-3xl mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-xl border border-border bg-background p-6"
                >
                  <h3 className="font-semibold text-foreground">{faq.q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCta />
    </>
  )
}