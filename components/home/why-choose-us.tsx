import { ShieldCheck, Clock, BadgeIndianRupee, Wrench, ThumbsUp, Headset } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { siteConfig } from "@/lib/site"

const reasons = [
  { icon: ShieldCheck, title: "Verified Technicians", desc: "Background-checked, trained professionals you can trust inside your home." },
  { icon: Clock, title: "Same-Day Service", desc: "Quick response with same-day visits across most of our service areas." },
  { icon: BadgeIndianRupee, title: "Transparent Pricing", desc: "Upfront, honest quotes with no hidden charges or surprise add-ons." },
  { icon: Wrench, title: "Genuine Spare Parts", desc: "Only authentic, compatible parts backed by a service warranty." },
  { icon: ThumbsUp, title: "Pay After Service", desc: "You pay only once the job is done and you're fully satisfied." },
  { icon: Headset, title: "Friendly Support", desc: "Reach us easily by call or WhatsApp before, during and after service." },
]

const stats = [
  { value: siteConfig.customersServed, label: "Customers Served" },
  { value: `${siteConfig.yearsExperience}+ yrs`, label: "Experience" },
  { value: `${siteConfig.rating}★`, label: "Average Rating" },
  { value: "10+", label: "Areas Covered" },
]

export function WhyChooseUs() {
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Service You Can Rely On"
          description="We've built our reputation on doing honest work, charging fair prices and showing up on time, every time."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05}>
              <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <r.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{r.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <dl className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-primary p-8 text-primary-foreground sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="text-3xl font-bold tracking-tight">{s.value}</dt>
                <dd className="mt-1 text-sm text-primary-foreground/75">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
