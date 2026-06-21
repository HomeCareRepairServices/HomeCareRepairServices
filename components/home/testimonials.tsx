import { Star, Quote } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { testimonials } from "@/lib/data/testimonials"
import { siteConfig } from "@/lib/site"

export function Testimonials() {
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="Customer Reviews"
          title="Loved by Thousands of Homes"
          description={`Rated ${siteConfig.rating} out of 5 by ${siteConfig.reviewCount.toLocaleString()}+ customers across our service areas.`}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.05}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                <Quote className="size-7 text-secondary/30" />
                <div className="mt-2 flex items-center gap-0.5 text-accent">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <span className="block font-semibold text-foreground">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">
                    {t.service} &middot; {t.area}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
