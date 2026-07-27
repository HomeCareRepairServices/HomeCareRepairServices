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
  LayoutGrid,
  Plug,
  Tv,
  Microwave,
  CupSoda,
  Fan,
  ToggleLeft,
  PanelTop,
  Lamp,
  Home,
} from "lucide-react"

export type ServiceType = "installation" | "repair" | "maintenance"

export type Service = {
  slug: string
  name: string
  short: string
  category: string // Must match ServiceCategorySlug exactly
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

// Updated slugs to match service-categories.ts exactly
export const serviceCategories: ServiceCategory[] = [
  { slug: "water-purifier", name: "Water Purifier Services", description: "RO sales, repair, installation & annual maintenance for pure, safe drinking water.", icon: Droplets },
  { slug: "ac-services", name: "Air Conditioning Services", description: "Professional AC service and installation to keep your home cool all summer.", icon: Wind },
  { slug: "kitchen-appliances", name: "Kitchen Appliance Services", description: "Chimney cleaning, installation, and modular kitchen solutions for a spotless kitchen.", icon: Flame },
  { slug: "home-appliances", name: "Home Appliance Services", description: "Repair and installation for washing machines, refrigerators, geysers and inverters.", icon: Wrench },
  { slug: "electrical-interior", name: "Electrical & Interior Services", description: "Expert electrical repairs, wiring, and modern interior upgrades.", icon: Plug },
  { slug: "cleaning-services", name: "Cleaning Services", description: "Deep water tank cleaning and sanitisation for healthier water storage.", icon: Sparkles },
  { slug: "decoration-services", name: "Decoration Services", description: "Lighting and party decoration to make your events shine.", icon: PartyPopper },
]

export const services: Service[] = [
  // Water Purifier (Matches new slugs)
  { slug: "ro-sales-repair", name: "RO Sales & Repair", short: "Buy or repair any RO purifier", category: "water-purifier", type: "repair", icon: Droplets, popular: true },
  { slug: "ro-service", name: "RO Service", short: "Filter change & full servicing", category: "water-purifier", type: "maintenance", icon: Droplets, popular: true },
  { slug: "ro-installation", name: "RO Installation", short: "Expert new RO setup", category: "water-purifier", type: "installation", icon: Droplets, popular: true },
  { slug: "ro-amc", name: "RO AMC", short: "Annual maintenance plans", category: "water-purifier", type: "maintenance", icon: ShieldCheck, popular: true },
  { slug: "uv-water-purifier-installation", name: "UV Water Purifier", short: "Advanced UV purifier setup", category: "water-purifier", type: "installation", icon: Sparkles },
  { slug: "water-softener-installation", name: "Water Softener", short: "Hard water solution setup", category: "water-purifier", type: "installation", icon: CupSoda },

  // Air Conditioning (Matches new slugs)
  { slug: "ac-service", name: "AC Service", short: "Cleaning, gas & tune-ups", category: "ac-services", type: "maintenance", icon: Wind, popular: true },
  { slug: "ac-repair", name: "AC Repair", short: "Fast cooling issue fixes", category: "ac-services", type: "repair", icon: Wind, popular: true },
  { slug: "ac-installation", name: "AC Installation", short: "Split & window AC fitting", category: "ac-services", type: "installation", icon: Wind, popular: true },
  { slug: "ac-gas-refilling", name: "AC Gas Refilling", short: "Leak test & gas top-up", category: "ac-services", type: "maintenance", icon: Wind },
  { slug: "ac-deep-cleaning", name: "AC Deep Cleaning", short: "Foam wash & hygiene service", category: "ac-services", type: "maintenance", icon: Sparkles },
  { slug: "ac-amc", name: "AC AMC", short: "Annual maintenance plans", category: "ac-services", type: "maintenance", icon: ShieldCheck },

  // Kitchen Appliances (Matches new slugs)
  { slug: "chimney-cleaning", name: "Chimney Cleaning", short: "Deep degreasing & service", category: "kitchen-appliances", type: "maintenance", icon: Flame, popular: true },
  { slug: "chimney-repair", name: "Chimney Repair", short: "Motor & fan fixes", category: "kitchen-appliances", type: "repair", icon: Wrench },
  { slug: "chimney-installation", name: "Chimney Installation", short: "New chimney mounting", category: "kitchen-appliances", type: "installation", icon: Flame },
  { slug: "hob-repair", name: "Hob Repair", short: "Glass top & ignition fixes", category: "kitchen-appliances", type: "repair", icon: Flame },
  { slug: "gas-stove-repair", name: "Gas Stove Repair", short: "Burner & valve repair", category: "kitchen-appliances", type: "repair", icon: Flame },
  { slug: "modular-kitchen-solutions", name: "Modular Kitchen", short: "Modern kitchen design & install", category: "kitchen-appliances", type: "installation", icon: LayoutGrid, popular: true },

  // Home Appliances (Matches new slugs)
  { slug: "washing-machine-repair", name: "Washing Machine Repair", short: "All brands & types", category: "home-appliances", type: "repair", icon: WashingMachine, popular: true },
  { slug: "refrigerator-repair", name: "Refrigerator Repair", short: "Cooling & gas issues fixed", category: "home-appliances", type: "repair", icon: Refrigerator, popular: true },
  { slug: "geyser-repair", name: "Geyser Repair", short: "Water heater fault repair", category: "home-appliances", type: "repair", icon: Flame },
  { slug: "geyser-installation", name: "Geyser Installation", short: "Safe geyser fitting", category: "home-appliances", type: "installation", icon: Flame },
  { slug: "microwave-repair", name: "Microwave Repair", short: "Heating & turntable fixes", category: "home-appliances", type: "repair", icon: Microwave },
  { slug: "water-dispenser-repair", name: "Water Dispenser", short: "Cooling & heating fix", category: "home-appliances", type: "repair", icon: CupSoda },
  { slug: "inverter-repair", name: "Inverter Repair", short: "Battery & inverter service", category: "home-appliances", type: "repair", icon: Zap },

  // Electrical & Interior (Matches new slugs)
  { slug: "electrical-repair", name: "Electrical Repair", short: "Wiring, short circuits & fixes", category: "electrical-interior", type: "repair", icon: Plug, popular: true },
  { slug: "fan-installation", name: "Fan Installation", short: "Ceiling & exhaust fans", category: "electrical-interior", type: "installation", icon: Fan },
  { slug: "tv-wall-mount-installation", name: "TV Wall Mount", short: "Safe LED/LCD mounting", category: "electrical-interior", type: "installation", icon: Tv },
  { slug: "mcb-panel-upgrade", name: "MCB Panel Upgrade", short: "Safe load management", category: "electrical-interior", type: "repair", icon: Zap },
  { slug: "switch-board-repair", name: "Switch Board Repair", short: "Sparks & loose connections", category: "electrical-interior", type: "repair", icon: ToggleLeft },
  { slug: "pvc-wall-panel-installation", name: "PVC Wall Panels", short: "Waterproof wall fitting", category: "electrical-interior", type: "installation", icon: PanelTop },
  { slug: "false-ceiling-lighting", name: "False Ceiling", short: "Modern ceiling & lights", category: "electrical-interior", type: "installation", icon: Lamp },

  // Cleaning Services (Matches new slugs)
  { slug: "water-tank-cleaning", name: "Water Tank Cleaning", short: "Hygienic tank sanitisation", category: "cleaning-services", type: "maintenance", icon: Container, popular: true },

  // Decoration Services (Matches new slugs)
  { slug: "wedding-lighting-decoration", name: "Wedding Lighting", short: "Grand wedding venue decor", category: "decoration-services", type: "installation", icon: PartyPopper, popular: true },
  { slug: "festival-lighting-decoration", name: "Festival Lighting", short: "Diwali & festive decor", category: "decoration-services", type: "installation", icon: Lightbulb },
  { slug: "birthday-decoration", name: "Birthday Decoration", short: "Balloon & themed decor", category: "decoration-services", type: "installation", icon: PartyPopper },
  { slug: "house-decoration", name: "House Decoration", short: "Interior aesthetic decor", category: "decoration-services", type: "installation", icon: Home },
  { slug: "event-decoration", name: "Event Decoration", short: "Corporate & party decor", category: "decoration-services", type: "installation", icon: Sparkles },
]

export const serviceIconMap = Object.fromEntries(services.map((s) => [s.slug, s.icon])) as Record<string, LucideIcon>

export const popularServices = services.filter((s) => s.popular)