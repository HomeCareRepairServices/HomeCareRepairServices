import type { Metadata } from "next"
import { faqs } from "@/lib/data/faqs"
import { siteConfig } from "@/lib/site"
import { FaqAccordion } from "@/components/faq-accordion"
import { Breadcrumb, SupportHero, SupportShell } from "@/components/support-page"
export const metadata: Metadata = { title: `Frequently Asked Questions | ${siteConfig.name}`, description: "Find answers about appliance repair, RO service, AC service, installation, service areas and contact options." }
export default function FaqPage() { const groups = [...new Set(faqs.map((f) => f.category))]; return <SupportShell><Breadcrumb current="FAQ" /><SupportHero eyebrow="Questions & Answers" title="Frequently Asked Questions" description="Clear answers about our home appliance repair, installation, maintenance and service areas." /><section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">{groups.map((group) => <div key={group} className="mb-10"><h2 className="mb-4 text-2xl font-semibold text-foreground">{group}</h2><FaqAccordion items={faqs.filter((f) => f.category === group)} /></div>)}</section></SupportShell> }
