import { Star, Quote } from "lucide-react"
import type { Testimonial } from "@/lib/data/testimonials"

export function ReviewCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm shadow-[#03305f]/5">
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
  )
}
