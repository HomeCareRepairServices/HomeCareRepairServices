import type { Metadata } from "next"
import Link from "next/link"
import { blogPosts } from "@/lib/data/blog"
import { siteConfig } from "@/lib/site"
import { Breadcrumb, SupportHero, SupportShell } from "@/components/support-page"

export const metadata: Metadata = { title: `Home Appliance Repair & Maintenance Tips | ${siteConfig.name}`, description: "Practical guidance about RO service, AC service, washing machine repair, refrigerator repair, geyser care and chimney cleaning." }
export default function BlogPage() { return <SupportShell><Breadcrumb current="Blog" /><SupportHero eyebrow="Home Care Guide" title="Home Appliance Repair & Maintenance Tips" description="Practical advice for caring for the appliances and home services we support across Rishikesh, Haridwar, Dehradun and nearby areas." /><section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{blogPosts.map((post) => <article key={post.slug} className="flex flex-col rounded-2xl border border-border bg-card p-6"><span className="text-xs font-semibold uppercase tracking-wider text-secondary">{post.category}</span><h2 className="mt-3 text-xl font-semibold text-foreground">{post.title}</h2><p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{post.excerpt}</p><Link href={post.href} className="mt-6 font-medium text-primary hover:text-secondary">Explore related service</Link></article>)}</div></section></SupportShell> }
