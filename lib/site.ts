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
export const serviceCategories = [
    {
      title: "Water Purifier",
      href: "/services/water-purifier",
      items: [
        { title: "RO Sales & Repair", href: "/services/water-purifier/ro-sales-repair" },
        { title: "RO Service", href: "/services/water-purifier/ro-service" },
        { title: "RO Installation", href: "/services/water-purifier/ro-installation" },
        { title: "RO AMC", href: "/services/water-purifier/ro-amc" },
        { title: "UV Water Purifier", href: "/services/water-purifier/uv-water-purifier-installation" },
        { title: "Water Softener", href: "/services/water-purifier/water-softener-installation" },
      ],
    },
    {
      title: "Air Conditioning",
      href: "/services/ac-services",
      items: [
        { title: "AC Service", href: "/services/ac-services/ac-service" },
        { title: "AC Repair", href: "/services/ac-services/ac-repair" },
        { title: "AC Installation", href: "/services/ac-services/ac-installation" },
        { title: "AC Gas Refilling", href: "/services/ac-services/ac-gas-refilling" },
        { title: "AC Deep Cleaning", href: "/services/ac-services/ac-deep-cleaning" },
        { title: "AC AMC", href: "/services/ac-services/ac-amc" },
      ],
    },
    {
      title: "Kitchen Appliances",
      href: "/services/kitchen-appliances",
      items: [
        { title: "Chimney Cleaning", href: "/services/kitchen-appliances/chimney-cleaning" },
        { title: "Chimney Repair", href: "/services/kitchen-appliances/chimney-repair" },
        { title: "Chimney Installation", href: "/services/kitchen-appliances/chimney-installation" },
        { title: "Hob Repair", href: "/services/kitchen-appliances/hob-repair" },
        { title: "Gas Stove Repair", href: "/services/kitchen-appliances/gas-stove-repair" },
        { title: "Modular Kitchen", href: "/services/kitchen-appliances/modular-kitchen-solutions" },
      ],
    },
    {
      title: "Home Appliances",
      href: "/services/home-appliances",
      items: [
        { title: "Washing Machine Repair", href: "/services/home-appliances/washing-machine-repair" },
        { title: "Refrigerator Repair", href: "/services/home-appliances/refrigerator-repair" },
        { title: "Geyser Repair", href: "/services/home-appliances/geyser-repair" },
        { title: "Geyser Installation", href: "/services/home-appliances/geyser-installation" },
        { title: "Microwave Repair", href: "/services/home-appliances/microwave-repair" },
        { title: "Water Dispenser Repair", href: "/services/home-appliances/water-dispenser-repair" },
        { title: "Inverter Repair", href: "/services/home-appliances/inverter-repair" },
      ],
    },
    {
      title: "Electrical & Interior",
      href: "/services/electrical-interior",
      items: [
        { title: "Electrical Repair", href: "/services/electrical-interior/electrical-repair" },
        { title: "Fan Installation", href: "/services/electrical-interior/fan-installation" },
        { title: "TV Wall Mount", href: "/services/electrical-interior/tv-wall-mount-installation" },
        { title: "MCB Panel Upgrade", href: "/services/electrical-interior/mcb-panel-upgrade" },
        { title: "Switch Board Repair", href: "/services/electrical-interior/switch-board-repair" },
        { title: "PVC Wall Panel", href: "/services/electrical-interior/pvc-wall-panel-installation" },
        { title: "False Ceiling", href: "/services/electrical-interior/false-ceiling-lighting" },
      ],
    },
    {
      title: "Cleaning Services",
      href: "/services/cleaning-services",
      items: [
        { title: "Water Tank Cleaning", href: "/services/cleaning-services/water-tank-cleaning" },
      ],
    },
    {
      title: "Decoration Services",
      href: "/services/decoration-services",
      items: [
        { title: "Wedding Lighting", href: "/services/decoration-services/wedding-lighting-decoration" },
        { title: "Festival Lighting", href: "/services/decoration-services/festival-lighting-decoration" },
        { title: "Birthday Decoration", href: "/services/decoration-services/birthday-decoration" },
        { title: "House Decoration", href: "/services/decoration-services/house-decoration" },
        { title: "Event Decoration", href: "/services/decoration-services/event-decoration" },
      ],
    },
  ] as const
