import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { serviceCategories } from "@/lib/data/services"

export function ServiceCategories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <SectionHeading
        eyebrow="What We Do"
        title="Complete Home Service Solutions"
        description="From water purifiers to air conditioners and kitchen appliances, our verified technicians handle it all under one roof."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {serviceCategories.map((cat, i) => (
          <Reveal key={cat.slug} delay={i * 0.05}>
            <Link
              href="/services"
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/5"
            >
              <span className="silver-sheen" />
              <span className="mb-5 flex size-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                <cat.icon className="size-6" />
              </span>
              <h3 className="text-lg font-semibold text-foreground">{cat.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {cat.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-secondary">
                View services
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
