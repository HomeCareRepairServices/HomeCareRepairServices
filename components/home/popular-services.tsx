import Link from "next/link"
import { ArrowRight, Wrench, Download, CalendarCheck } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { services, type Service, type ServiceType } from "@/lib/data/services"

const groups: { type: ServiceType; title: string; blurb: string; icon: typeof Wrench }[] = [
  { type: "installation", title: "Popular Installation Services", blurb: "Professional setup, done right the first time.", icon: Download },
  { type: "repair", title: "Popular Repair Services", blurb: "Quick diagnosis and lasting fixes for any fault.", icon: Wrench },
  { type: "maintenance", title: "Popular Maintenance Services", blurb: "Keep appliances running at their best, longer.", icon: CalendarCheck },
]

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-secondary/40 hover:shadow-md"
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
        <service.icon className="size-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate font-semibold text-foreground">{service.name}</span>
        <span className="block truncate text-sm text-muted-foreground">{service.short}</span>
      </span>
      <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-secondary" />
    </Link>
  )
}

export function PopularServices() {
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="Most Requested"
          title="Our Most Popular Services"
          description="Hundreds of households book these services every month. Trusted, transparent and same-day where possible."
        />

        <div className="mt-12 flex flex-col gap-12">
          {groups.map((group, gi) => {
            const items = services.filter((s) => s.type === group.type && s.popular)
            return (
              <Reveal key={group.type} delay={gi * 0.05}>
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <group.icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
                      <p className="text-sm text-muted-foreground">{group.blurb}</p>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((service) => (
                      <ServiceCard key={service.slug} service={service} />
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
