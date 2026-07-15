import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ShieldCheck, Clock, IndianRupee, Wrench, MapPin, Award, PhoneCall, Eye, ClipboardCheck, Settings, ThumbsUp, CheckCircle2, Phone } from "lucide-react"
import { siteConfig } from "@/lib/site"
import { services, popularServices, serviceCategories as serviceCatIcons } from "@/lib/data/services"
import { serviceCategoriesData } from "@/lib/data/service-categories"
import { ServiceSearch } from "@/components/services/service-search"
import { ServicesCarousel } from "@/components/services/services-carousel"
import { LocationsCarousel } from "@/components/services/locations-carousel"
import { ContactCta } from "@/components/contact-cta"

export const metadata: Metadata = {
  title: `Home Repair & Installation Services | ${siteConfig.shortName}`,
  description: "Expert RO, AC, Chimney, Washing Machine, Refrigerator, Electrical, Water Tank Cleaning and Decoration services across Rishikesh, Haridwar & Dehradun.",
  alternates: { canonical: "/services" }
}

export default function ServicesPage() {
  const faqs = [
    { q: "How much does AC Service cost?", a: "Standard AC service starts at ₹499. Deep cleaning or gas refilling may cost extra depending on the AC type." },
    { q: "Do you repair all RO brands?", a: "Yes, we service all major brands including Kent, Aquaguard, Livpure, Pureit, and local brands." },
    { q: "Do you offer same-day service?", a: "Absolutely! Booking before 12 PM usually guarantees a technician visit on the same day." },
    { q: "Do you provide warranty on repairs?", a: "Yes, we provide a 30-day warranty on all repairs and manufacturer warranty on spare parts." },
    { q: "Do you visit Haridwar and Dehradun?", a: "Yes, we cover Rishikesh, Haridwar, Dehradun, Raiwala, Doiwala, and 10+ other areas." },
  ]

  return (
    <>
      {/* JSON-LD SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` } ] })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) })}} />

      {/* S1: HERO */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 hidden lg:block">
          <Image src="/images/hero-services-bg.webp" alt="" fill className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-foreground" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 sm:py-28 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Professional Home Repair &amp; Installation Services</h1>
          <p className="mt-6 text-lg text-background/70 max-w-2xl mx-auto">Expert technicians for RO, AC, Chimney, Washing Machine, Refrigerator, Electrical, Water Tank Cleaning, Decoration and more.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a href={siteConfig.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-8 py-3.5 text-sm font-bold text-foreground hover:bg-background/90 transition">Call Now</a>
            <a href={siteConfig.whatsappHref} target="_blank" className="inline-flex items-center justify-center gap-2 rounded-full border border-background/30 px-8 py-3.5 text-sm font-medium text-background hover:bg-background/10 transition">WhatsApp</a>
          </div>
        </div>
      </section>

      {/* S2: SEARCH */}
      <section className="py-12 px-4 border-b border-border bg-muted/30">
        <ServiceSearch />
      </section>

      {/* S3: CATEGORIES */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Service Categories</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(serviceCategoriesData).map((cat) => {
              const IconComp = serviceCatIcons.find(c => c.slug === cat.slug)?.icon || Wrench
              return (
                <Link key={cat.slug} href={`/services/${cat.slug}`} className="group rounded-2xl border border-border bg-background p-6 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
                  <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors mb-4"><IconComp className="h-6 w-6" /></div>
                  <h3 className="text-lg font-bold">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{cat.services.length} Services</p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">View <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* S4: POPULAR */}
      <section className="py-20 px-4 bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Most Popular Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularServices.slice(0, 6).map((service) => (
              <Link key={service.slug} href={`/services/${service.category}/${service.slug}`} className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-5 hover:border-foreground/20 hover:shadow-md transition-all">
                <div className="h-14 w-14 shrink-0 flex items-center justify-center rounded-2xl bg-muted text-foreground"><service.icon className="h-7 w-7" /></div>
                <div>
                  <h3 className="font-bold text-foreground group-hover:text-blue-500 transition-colors">{service.name}</h3>
                  <p className="text-sm text-muted-foreground">{service.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* S5: 3D SERVICES CAROUSEL (Reuses Gallery Engine) */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">All Our Services</h2>
          <p className="text-muted-foreground">Scroll, drag, or click a card to book.</p>
        </div>
        <ServicesCarousel items={services.map(({ icon, ...rest }) => rest)} />
      </section>

      {/* S6: WHY CHOOSE US */}
      <section className="py-20 px-4 bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Home Care?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { Icon: ShieldCheck, title: "Verified Technicians", desc: "Background checked and highly trained professionals." },
              { Icon: Clock, title: "Same Day Service", desc: "Fast turnaround times to fix your issues quickly." },
              { Icon: IndianRupee, title: "Transparent Pricing", desc: "No hidden charges. You pay what is quoted." },
              { Icon: Wrench, title: "Original Spare Parts", desc: "We use 100% genuine and branded spare parts." },
              { Icon: MapPin, title: "Doorstep Service", desc: "We come to your home. You don't need to move a thing." },
              { Icon: Award, title: "Warranty Support", desc: "30-day warranty on all repairs for peace of mind." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto h-14 w-14 flex items-center justify-center rounded-full bg-foreground text-background mb-4"><item.Icon className="h-7 w-7" /></div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S7: PROCESS TIMELINE */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Our Service Process</h2>
          <div className="relative flex flex-col items-center">
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-border -translate-x-1/2 hidden sm:block" />
            {[
              { Icon: PhoneCall, title: "Call or Book", desc: "Contact us via phone, WhatsApp, or website." },
              { Icon: Eye, title: "Inspection", desc: "Technician visits and diagnoses the issue." },
              { Icon: ClipboardCheck, title: "Quote", desc: "Upfront pricing with no hidden fees." },
              { Icon: Settings, title: "Repair", desc: "Expert repair using original parts." },
              { Icon: ThumbsUp, title: "Testing", desc: "Rigorous testing to ensure quality." },
              { Icon: CheckCircle2, title: "Done!", desc: "Job completed with a warranty slip." },
            ].map((step) => (
              <div key={step.title} className="relative flex flex-col items-center mb-12 last:mb-0 sm:mb-16 w-full sm:w-auto">
                <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-foreground text-background border-4 border-background shadow-lg"><step.Icon className="h-7 w-7" /></div>
                <div className="mt-4 sm:mt-0 sm:absolute sm:left-1/2 sm:ml-16 sm:text-left bg-background sm:py-4 px-4 rounded-xl">
                  <h3 className="font-bold text-lg">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S8: LOCATIONS CAROUSEL (Reused from service-detail-template) */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-4 mb-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">We Serve In Your Area</h2>
        </div>
        <LocationsCarousel />
      </section>

      {/* S9: EMERGENCY CTA */}
      <section className="py-20 px-4 bg-foreground text-background text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need Immediate Service?</h2>
        <p className="text-background/70 max-w-xl mx-auto mb-8">Don&apos;t let a broken appliance ruin your day. Get a verified technician at your doorstep in under 2 hours.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href={siteConfig.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-8 py-4 text-base font-bold text-foreground hover:bg-background/90 transition">Call Now</a>
          <a href={siteConfig.whatsappHref} target="_blank" className="inline-flex items-center justify-center gap-2 rounded-full border border-background/30 px-8 py-4 text-base font-medium text-background hover:bg-background/10 transition">WhatsApp Us</a>
        </div>
      </section>

      {/* S10: FAQ (Reused from service-detail-template) */}
      {faqs.length > 0 && (
        <section className="py-16 sm:py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight text-foreground text-center sm:text-3xl mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl border border-border bg-background p-6">
                  <h3 className="font-semibold text-foreground">{faq.q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* S11: FINAL CTA (Reused) */}
      <ContactCta />
    </>
  )
}
