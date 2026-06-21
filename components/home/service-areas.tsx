import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { areas } from "@/lib/data/areas"

export function ServiceAreas() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <SectionHeading
        eyebrow="Where We Serve"
        title="Doorstep Service Across Uttarakhand"
        description="We cover Rishikesh, Haridwar, Dehradun and the towns in between. Pick your area for local service details."
      />

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {areas.map((area, i) => (
          <Reveal key={area.slug} delay={(i % 5) * 0.04}>
            <Link
              href={`/areas/${area.slug}`}
              className="group flex h-full flex-col gap-2 rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-secondary/40 hover:shadow-md"
            >
              <span className="flex items-center gap-2">
                <MapPin className="size-4 text-secondary" />
                <span className="font-semibold text-foreground">{area.name}</span>
              </span>
              <span className="text-xs leading-relaxed text-muted-foreground">{area.short}</span>
              <span className="mt-auto inline-flex items-center gap-1 pt-2 text-xs font-medium text-secondary opacity-0 transition-opacity group-hover:opacity-100">
                View area <ArrowRight className="size-3" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
