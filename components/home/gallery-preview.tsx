import Link from "next/link"
import { ArrowRight, ImageIcon, type LucideIcon, Droplets, Flame, Wind, Container, WashingMachine } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { CtaLink } from "@/components/cta"

const works: { title: string; icon: LucideIcon }[] = [
  { title: "RO Installation", icon: Droplets },
  { title: "Chimney Cleaning", icon: Flame },
  { title: "AC Service", icon: Wind },
  { title: "Water Tank Cleaning", icon: Container },
  { title: "Geyser Installation", icon: Flame },
  { title: "Washing Machine Repair", icon: WashingMachine },
]

export function GalleryPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          align="left"
          eyebrow="Our Work"
          title="Real Jobs, Real Results"
          description="A glimpse of recent installations, repairs and cleaning jobs completed for our customers."
          className="max-w-xl"
        />
        <CtaLink href="/our-work" variant="outline" size="md" className="shrink-0">
          View full gallery <ArrowRight className="size-4" />
        </CtaLink>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {works.map((work, i) => (
          <Reveal key={work.title} delay={(i % 3) * 0.05}>
            <Link
              href="/our-work"
              className="group relative flex aspect-[4/3] flex-col items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted text-muted-foreground"
            >
              <span className="silver-sheen" />
              <work.icon className="size-10 text-secondary/50 transition-transform duration-500 group-hover:scale-110" />
              <span className="absolute inset-x-0 bottom-0 flex items-center gap-1.5 bg-gradient-to-t from-card to-transparent p-4 text-sm font-semibold text-foreground">
                <ImageIcon className="size-4 text-secondary" />
                {work.title}
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
