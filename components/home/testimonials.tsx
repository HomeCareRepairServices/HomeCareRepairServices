import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { ReviewCard } from "@/components/review-card"
import { CtaLink } from "@/components/cta"
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
              <ReviewCard t={t} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <CtaLink href="/our-work-and-reviews" variant="outline" size="md">
            Browse Customer Reviews <ArrowRight className="size-4" />
          </CtaLink>
        </div>
      </div>
    </section>
  )
}
