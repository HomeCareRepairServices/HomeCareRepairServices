import type { LucideIcon } from "lucide-react"
import {
  Droplets,
  Wind,
  Flame,
  WashingMachine,
  Refrigerator,
  Zap,
  Wrench,
  Sparkles,
  Lightbulb,
  PartyPopper,
  ShieldCheck,
  Container,
} from "lucide-react"

export type ServiceType = "installation" | "repair" | "maintenance"

export type Service = {
  slug: string
  name: string
  short: string
  category: string
  type: ServiceType
  icon: LucideIcon
  popular?: boolean
}

export type ServiceCategory = {
  slug: string
  name: string
  description: string
  icon: LucideIcon
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "water-purifier",
    name: "Water Purifier Services",
    description: "RO sales, repair, installation & annual maintenance for pure, safe drinking water.",
    icon: Droplets,
  },
  {
    slug: "air-conditioning",
    name: "Air Conditioning Services",
    description: "Professional AC service and installation to keep your home cool all summer.",
    icon: Wind,
  },
  {
    slug: "kitchen-appliance",
    name: "Kitchen Appliance Services",
    description: "Chimney cleaning and installation for a smoke-free, spotless kitchen.",
    icon: Flame,
  },
  {
    slug: "home-appliance",
    name: "Home Appliance Services",
    description: "Repair and installation for washing machines, refrigerators, geysers and inverters.",
    icon: Wrench,
  },
  {
    slug: "cleaning",
    name: "Cleaning Services",
    description: "Deep water tank cleaning and sanitisation for healthier water storage.",
    icon: Sparkles,
  },
  {
    slug: "decoration",
    name: "Decoration Services",
    description: "Lighting and party decoration to make your events shine.",
    icon: PartyPopper,
  },
]

export const services: Service[] = [
  // Water Purifier
  { slug: "ro-sales-repair", name: "RO Sales & Repair", short: "Buy or repair any RO purifier", category: "water-purifier", type: "repair", icon: Droplets, popular: true },
  { slug: "ro-service", name: "RO Service", short: "Filter change & full servicing", category: "water-purifier", type: "maintenance", icon: Droplets, popular: true },
  { slug: "ro-installation", name: "RO Installation", short: "Expert new RO setup", category: "water-purifier", type: "installation", icon: Droplets, popular: true },
  { slug: "ro-amc", name: "RO AMC", short: "Annual maintenance plans", category: "water-purifier", type: "maintenance", icon: ShieldCheck, popular: true },
  // Air Conditioning
  { slug: "ac-service", name: "AC Service", short: "Cleaning, gas & tune-ups", category: "air-conditioning", type: "maintenance", icon: Wind, popular: true },
  { slug: "ac-installation", name: "AC Installation", short: "Split & window AC fitting", category: "air-conditioning", type: "installation", icon: Wind, popular: true },
  // Kitchen
  { slug: "chimney-cleaning", name: "Chimney Cleaning", short: "Deep degreasing & service", category: "kitchen-appliance", type: "maintenance", icon: Flame, popular: true },
  { slug: "chimney-installation", name: "Chimney Installation", short: "New chimney mounting", category: "kitchen-appliance", type: "installation", icon: Flame },
  // Home Appliance
  { slug: "washing-machine-repair", name: "Washing Machine Repair", short: "All brands & types", category: "home-appliance", type: "repair", icon: WashingMachine, popular: true },
  { slug: "refrigerator-repair", name: "Refrigerator Repair", short: "Cooling & gas issues fixed", category: "home-appliance", type: "repair", icon: Refrigerator, popular: true },
  { slug: "geyser-repair", name: "Geyser Repair", short: "Water heater fault repair", category: "home-appliance", type: "repair", icon: Flame },
  { slug: "geyser-installation", name: "Geyser Installation", short: "Safe geyser fitting", category: "home-appliance", type: "installation", icon: Flame },
  { slug: "inverter-repair", name: "Inverter Repair", short: "Battery & inverter service", category: "home-appliance", type: "repair", icon: Zap },
  // Cleaning
  { slug: "water-tank-cleaning", name: "Water Tank Cleaning", short: "Hygienic tank sanitisation", category: "cleaning", type: "maintenance", icon: Container, popular: true },
  // Decoration
  { slug: "lighting-decoration", name: "Lighting Decoration", short: "Festive & event lighting", category: "decoration", type: "installation", icon: Lightbulb },
  { slug: "party-decoration", name: "Party Decoration", short: "Complete event décor", category: "decoration", type: "installation", icon: PartyPopper },
]

export const serviceMap = Object.fromEntries(services.map((s) => [s.slug, s]))

export const popularServices = services.filter((s) => s.popular)

export function servicesByType(type: ServiceType) {
  return services.filter((s) => s.type === type)
}

export function servicesByCategory(categorySlug: string) {
  return services.filter((s) => s.category === categorySlug)
}
