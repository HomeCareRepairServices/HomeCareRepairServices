import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { MapPin, ArrowLeft } from "lucide-react"
import { areas } from "@/lib/data/areas"
import { siteConfig } from "@/lib/site"
import { ContactCta } from "@/components/contact-cta"
import { AreaServicesGrid } from "@/components/area-services-grid"

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const area = areas.find((a) => a.slug === slug)
  if (!area) return {}
  return {
    title: `${area.name} | ${siteConfig.shortName}`,
    description: area.description,
  }
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const area = areas.find((a) => a.slug === slug)
  if (!area) notFound()

  return (
    <>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-12">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
              <MapPin className="size-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {area.name}
              </h1>
              <p className="text-muted-foreground">{area.short}</p>
            </div>
          </div>

          <div className="mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {area.description}
            </p>
          </div>

          <AreaServicesGrid areaName={area.name} />
        </div>
      </section>

      <ContactCta />
    </>
  )
}
