import Link from "next/link"
import { Droplets, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { siteConfig, mainNav, whatsappLink } from "@/lib/site"
import { serviceCategories } from "@/lib/data/services"
import { areas } from "@/lib/data/areas"

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Droplets className="size-5" />
              </span>
              <span className="text-base font-bold tracking-tight text-foreground">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Your trusted local experts for RO, AC, chimney and home appliance
              repair, installation and maintenance across Rishikesh, Haridwar &
              Dehradun.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href={siteConfig.phoneHref} className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
                <Phone className="size-4 text-secondary" /> {siteConfig.phone}
              </a>
              <a href={whatsappLink()} className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
                <MessageCircle className="size-4 text-secondary" /> WhatsApp Us
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
                <Mail className="size-4 text-secondary" /> {siteConfig.email}
              </a>
              <p className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-secondary" /> {siteConfig.address}
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <Clock className="size-4 text-secondary" /> {siteConfig.hours}
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Services</h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {serviceCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link href="/services" className="text-muted-foreground transition-colors hover:text-primary">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Service Areas</h3>
            <ul className="grid grid-cols-2 gap-2.5 text-sm">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link href={`/areas/${area.slug}`} className="text-muted-foreground transition-colors hover:text-primary">
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Company</h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted-foreground transition-colors hover:text-primary">
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/our-work-and-reviews" className="text-muted-foreground transition-colors hover:text-primary">
                  Our Work &amp; Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground transition-colors hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="transition-colors hover:text-primary">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
