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

  export const serviceCategories = [
  {
    title: "Water Purifier",
    href: "/services/ro-sales-repair",
    items: [
      { title: "RO Sales & Repair", href: "/services/ro-sales-repair" },
      { title: "RO Service", href: "/services/ro-service" },
      { title: "RO Installation", href: "/services/ro-installation" },
      { title: "RO AMC", href: "/services/ro-amc" },
    ],
  },
  {
    title: "Air Conditioning",
    href: "/services/ac-service",
    items: [
      { title: "AC Service", href: "/services/ac-service" },
      { title: "AC Installation", href: "/services/ac-installation" },
    ],
  },
  {
    title: "Kitchen Appliances",
    href: "/services/chimney-cleaning",
    items: [
      { title: "Chimney Cleaning", href: "/services/chimney-cleaning" },
      { title: "Chimney Installation", href: "/services/chimney-installation" },
    ],
  },
  {
    title: "Home Appliances",
    href: "/services/washing-machine-repair",
    items: [
      { title: "Washing Machine Repair", href: "/services/washing-machine-repair" },
      { title: "Refrigerator Repair", href: "/services/refrigerator-repair" },
      { title: "Geyser Repair", href: "/services/geyser-repair" },
      { title: "Geyser Installation", href: "/services/geyser-installation" },
      { title: "Inverter Repair", href: "/services/inverter-repair" },
    ],
  },
  {
    title: "Electrical & Interior",
    href: "/services/electrical-services",
    items: [
      { title: "Electrical Services", href: "/services/electrical-services" },
      { title: "PVC Door Services", href: "/services/pvc-door-services" },
      { title: "PVC Wall Panel", href: "/services/pvc-wall-panel-services" },
    ],
  },
  {
    title: "Cleaning & Decor",
    href: "/services/water-tank-cleaning",
    items: [
      { title: "Water Tank Cleaning", href: "/services/water-tank-cleaning" },
      { title: "Lighting Decoration", href: "/services/lighting-decoration" },
    ],
  },
] as const
}
