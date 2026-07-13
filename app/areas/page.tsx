import Link from "next/link"
import type { Metadata } from "next"
import { MapPin, ArrowRight } from "lucide-react"
import { areas } from "@/lib/data/areas"
import { siteConfig } from "@/lib/site"
import { ContactCta } from "@/components/contact-cta"

export const metadata: Metadata = {
  title: `Service Areas | ${siteConfig.shortName}`,
  description: `We serve ${areas.length} locations across Uttarakhand including Rishikesh, Haridwar, Dehradun and surrounding towns.`,
}

export default function AreasPage() {
  return (
    <>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Service Areas
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              We cover {areas.length} locations across Uttarakhand. Pick your area for local service details.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group flex h-full flex-col gap-2 rounded-xl border border-[#03305f]/30 bg-card p-5 transition-all hover:-translate-y-1 hover:border-[#03305f] hover:shadow-md hover:shadow-[#03305f]/10"
              >
                <span className="flex items-center gap-2">
                  <MapPin className="size-5 text-secondary transition-colors group-hover:text-[#03305f]" />
                  <span className="font-semibold text-foreground">{area.name}</span>
                </span>
                <span className="text-xs leading-relaxed text-muted-foreground">{area.short}</span>
                <span className="mt-auto inline-flex items-center gap-1 pt-2 text-xs font-medium text-muted-foreground transition-all group-hover:font-bold group-hover:text-[#03305f]">
                  View details <ArrowRight className="size-3 transition-all group-hover:font-bold" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  )
}
