import type { Metadata } from "next"
import Link from "next/link"
import {
  ShieldCheck,
  Clock,
  BadgeIndianRupee,
  Wrench,
  ThumbsUp,
  Headset,
  Phone,
  CalendarCheck,
  Cog,
  Smile,
  MapPin,
  ArrowRight,
} from "lucide-react"
import { siteConfig } from "@/lib/site"
import { areas } from "@/lib/data/areas"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { SilverGlowCard } from "@/components/silver-glow-card"
import { ContactCta } from "@/components/contact-cta"
import { CtaLink } from "@/components/cta"

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.shortName}`,
  description: `Learn about ${siteConfig.name} — trusted home appliance repair and installation services across Rishikesh, Haridwar & Dehradun with ${siteConfig.yearsExperience} years of experience and ${siteConfig.customersServed} happy customers.`,
  alternates: { canonical: "/about" },
}

const features = [
  { icon: ShieldCheck, title: "Verified Technicians", desc: "Background-checked, trained professionals you can trust inside your home." },
  { icon: Clock, title: "Same-Day Service", desc: "Quick response with same-day visits across most of our service areas." },
  { icon: BadgeIndianRupee, title: "Transparent Pricing", desc: "Upfront, honest quotes with no hidden charges or surprise add-ons." },
  { icon: Wrench, title: "Genuine Spare Parts", desc: "Only authentic, compatible parts backed by a service warranty." },
  { icon: ThumbsUp, title: "Pay After Service", desc: "You pay only once the job is done and you're fully satisfied." },
  { icon: Headset, title: "Friendly Support", desc: "Reach us easily by call or WhatsApp before, during and after service." },
]

const steps = [
  { icon: Phone, title: "1. Book a Service", desc: "Call or WhatsApp us with your appliance issue. We'll confirm the visit time right away." },
  { icon: CalendarCheck, title: "2. Schedule Your Visit", desc: "We find a slot that works for you. Early morning bookings get same-day service." },
  { icon: Cog, title: "3. Inspection & Repair", desc: "Technician arrives on time, diagnoses the problem, and gives an upfront quote before starting." },
  { icon: Smile, title: "4. Pay & Relax", desc: "You pay only after you're satisfied. Every repair comes with a 30-day warranty." },
]

const stats = [
  { value: siteConfig.customersServed, label: "Customers Served" },
  { value: `${siteConfig.yearsExperience}+`, label: "Years Experience" },
  { value: `${siteConfig.rating}`, label: "Average Rating" },
  { value: `${areas.length}`, label: "Areas Covered" },
]

export default function AboutPage() {
  const featuredAreas = areas.filter((a) => a.featured)
  const otherAreas = areas.filter((a) => !a.featured)
  const displayedAreas = [...featuredAreas, ...otherAreas]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: `About ${siteConfig.name}`,
            description: `Learn about ${siteConfig.name}, a trusted home appliance repair service provider.`,
            url: `${siteConfig.url}/about`,
            mainEntity: {
              "@type": "Organization",
              name: siteConfig.name,
              description: siteConfig.description,
              telephone: siteConfig.phone,
              areaServed: displayedAreas.map((a) => a.name),
            },
          }),
        }}
      />

      <section className="relative overflow-hidden border-b border-border bg-water-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-background/40 to-background" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:py-32">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary">
              About Us
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Your Trusted Home Service Partner
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              For over a decade, we&apos;ve been helping homeowners across Uttarakhand keep their appliances running
              smoothly — with honest pricing, verified technicians, and same-day service.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CtaLink href="/services" variant="primary" size="lg">
                Our Services <ArrowRight className="size-4" />
              </CtaLink>
              <CtaLink href="/contact" variant="outline" size="lg">
                Get in Touch
              </CtaLink>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold tracking-tight text-foreground">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-muted to-secondary/10 flex items-center justify-center">
                <span className="select-none text-7xl font-bold tracking-tighter text-muted-foreground/15">
                  {siteConfig.shortName}
                </span>
              </div>
            </Reveal>
            <div className="space-y-6">
              <Reveal>
                <SectionHeading eyebrow="Who We Are" title="Reliable Repairs, Honest Service" align="left" />
              </Reveal>
              <Reveal delay={0.1}>
                <p className="leading-relaxed text-muted-foreground">
                  Founded in Rishikesh, <strong className="text-foreground">{siteConfig.name}</strong> started with a
                  simple mission: make home appliance repair hassle-free. No inflated bills. No no-shows. Just skilled
                  technicians who take pride in their work.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="leading-relaxed text-muted-foreground">
                  Today we serve <strong className="text-foreground">{siteConfig.customersServed} happy customers</strong>{" "}
                  across {areas.length}+ locations, from Rishikesh to Dehradun and Haridwar. Every technician is
                  background-verified, every price is quoted upfront, and every job comes with a satisfaction guarantee.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="flex flex-wrap gap-4 pt-2">
                  {[
                    { icon: ShieldCheck, text: "Verified & trained technicians" },
                    { icon: Clock, text: "Same-day doorstep service" },
                    { icon: BadgeIndianRupee, text: "Transparent upfront pricing" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <item.icon className="size-4 text-secondary" />
                      {item.text}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40 py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="What Sets Us Apart"
            description="We've built our reputation on doing honest work, charging fair prices, and showing up on time — every time."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <SilverGlowCard className="h-full p-6">
                  <div className="flex h-full gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                      <item.icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </SilverGlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="How We Work"
            title="From Booking to Completion in 4 Simple Steps"
            description="We've streamlined our process so you know exactly what to expect at every stage."
          />
          <div className="relative mt-16">
            <div className="absolute left-6 top-0 h-full w-0.5 bg-border hidden sm:block" />
            <div className="space-y-12">
              {steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.1}>
                  <div className="relative flex items-start gap-6 sm:pl-14">
                    <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md sm:absolute sm:left-0">
                      <step.icon className="size-5" />
                    </div>
                    <div className="flex-1 rounded-2xl border border-border bg-card p-6 shadow-sm">
                      <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                      <p className="mt-2 leading-relaxed text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40 py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Service Areas"
            title="We Cover Your Neighbourhood"
            description="Same-day doorstep service across Rishikesh, Haridwar, Dehradun and surrounding areas."
          />
          <Reveal delay={0.1}>
            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {displayedAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-all hover:border-secondary/50 hover:shadow-md"
                >
                  <div className="min-w-0">
                    <span className="font-medium text-foreground transition-colors group-hover:text-secondary">
                      {area.name}
                    </span>
                    <p className="mt-0.5 truncate text-xs text-muted-foreground">{area.short}</p>
                  </div>
                  <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-all group-hover:text-secondary group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 text-center">
              <CtaLink href="/areas" variant="outline" size="lg">
                View All Areas <ArrowRight className="size-4" />
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCta />
    </>
  )
}
