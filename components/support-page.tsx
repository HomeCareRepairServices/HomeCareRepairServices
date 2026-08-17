import Link from "next/link"
import { ArrowRight, Phone, MessageCircle } from "lucide-react"
import { siteConfig, whatsappLink } from "@/lib/site"
import { SiteFooter } from "@/components/site-footer"
import { CallButton, WhatsAppButton } from "@/components/cta"

export function SupportHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="border-b border-border bg-water-grid"><div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28"><span className="inline-flex rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary">{eyebrow}</span><h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{title}</h1><p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p></div></section>
}

export function SupportShell({ children }: { children: React.ReactNode }) { return <><main>{children}</main><SiteFooter /></> }
export function ContactActions() { return <div className="flex flex-col gap-3 sm:flex-row"><CallButton size="lg" /><WhatsAppButton size="lg" /></div> }
export function Breadcrumb({ current }: { current: string }) { return <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-8 text-sm text-muted-foreground sm:px-6 lg:px-8"><Link href="/" className="hover:text-primary">Home</Link><span className="px-2">/</span><span>{current}</span></nav> }
export function ContactCard() { return <div className="rounded-2xl border border-border bg-card p-6"><h2 className="text-2xl font-semibold text-foreground">Talk to our team</h2><p className="mt-2 leading-relaxed text-muted-foreground">Call or message Home Care Repair Services for doorstep service in Rishikesh, Haridwar, Dehradun and nearby areas.</p><div className="mt-6 flex flex-col gap-3"><a href={siteConfig.phoneHref} className="flex items-center gap-3 font-medium text-foreground hover:text-primary"><Phone className="size-5 text-secondary" />{siteConfig.phone}</a><a href={whatsappLink()} className="flex items-center gap-3 font-medium text-foreground hover:text-primary"><MessageCircle className="size-5 text-secondary" />WhatsApp us</a></div></div> }
export function ServiceLink({ href, children }: { href: string; children: React.ReactNode }) { return <Link href={href} className="inline-flex items-center gap-2 font-medium text-primary hover:text-secondary">{children}<ArrowRight className="size-4" /></Link> }
