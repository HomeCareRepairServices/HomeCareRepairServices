import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { FaqAccordion } from "@/components/faq-accordion"
import { CtaLink } from "@/components/cta"
import { faqs } from "@/lib/data/faqs"

export function FaqPreview() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <SectionHeading
        eyebrow="FAQ"
        title="Questions? We've Got Answers"
        description="Everything you need to know about our services, pricing and coverage."
      />
      <Reveal className="mt-10" delay={0.05}>
        <FaqAccordion items={faqs.slice(0, 5)} />
      </Reveal>
      <Reveal className="mt-8 flex justify-center" delay={0.1}>
        <CtaLink href="/faq" variant="outline" size="md">
          See all FAQs <ArrowRight className="size-4" />
        </CtaLink>
      </Reveal>
    </section>
  )
}
