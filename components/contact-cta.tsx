import { ArrowRight } from "lucide-react"
import { CallButton, WhatsAppButton, CtaLink } from "@/components/cta"
import { Reveal } from "@/components/reveal"
import { siteConfig } from "@/lib/site"

export function ContactCta({
  title = "Need a Repair or Installation Today?",
  description = "Call us, message on WhatsApp, or send a quick request. Our team will get back to you right away with a fast, fair quote.",
}: {
  title?: string
  description?: string
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-primary px-6 py-12 text-center text-primary-foreground sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute inset-0 bg-water-grid opacity-[0.08]" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/80">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CallButton size="lg" className="w-full sm:w-auto" />
              <WhatsAppButton size="lg" className="w-full sm:w-auto" />
              <CtaLink
                href="/contact"
                variant="outline"
                size="lg"
                className="w-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
              >
                Contact Form <ArrowRight className="size-4" />
              </CtaLink>
            </div>
            <p className="mt-6 text-sm text-primary-foreground/70">
              Available {siteConfig.hours}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
