// Central site configuration. Swap the placeholder contact details here
// and they update everywhere across the site (header, footer, CTAs, schema).

export const siteConfig = {
  name: "Home Care Repair Services",
  shortName: "Home Care",
  tagline: "Trusted Home Appliance & Repair Experts",
  description:
    "Reliable RO water purifier, AC, chimney, washing machine, refrigerator and geyser repair, installation & AMC services across Rishikesh, Haridwar, Dehradun and nearby areas. Same-day doorstep service by verified technicians.",
  url: "https://homecarerepair.example",
  // Placeholder contact details — replace with real ones later.
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  whatsapp: "919876543210",
  whatsappHref: "https://wa.me/919876543210",
  email: "hello@homecarerepair.example",
  address: "Dehradun Road, Rishikesh, Uttarakhand 249201",
  hours: "Mon – Sun: 8:00 AM – 9:00 PM",
  rating: 4.9,
  reviewCount: 1280,
  yearsExperience: 12,
  customersServed: "25,000+",
} as const

export const mainNav = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/services" },
  { title: "Areas", href: "/areas" },
  { title: "Blog", href: "/blog" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
] as const

export function whatsappLink(message?: string) {
  const base = siteConfig.whatsappHref
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}
