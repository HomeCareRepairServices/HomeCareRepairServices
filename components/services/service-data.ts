import {
  Droplets,
  Wind,
  Flame,
  WashingMachine,
  Zap,
  Paintbrush,
  Wrench,
  Shield,
  RefreshCw,
} from "lucide-react"

export interface SubService {
  id: string
  title: string
  description: string
  badges: string[]
  image: string
}

export interface ServiceCategory {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  serviceCount: number
  image: string
  subServices: SubService[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "water-purifier",
    name: "Water Purifier",
    description: "Complete RO installation, repair and annual maintenance solutions.",
    icon: Droplets,
    serviceCount: 4,
    image:
      "https://images.unsplash.com/photo-1580556160055-5a5fac2a5fca?w=800&h=400&fit=crop",
    subServices: [
      {
        id: "ro-installation",
        title: "RO System Installation",
        description:
          "Professional installation of complete RO water purification systems with expert setup.",
        badges: ["Same-Day Service", "Verified Technician"],
        image:
          "https://images.unsplash.com/photo-1584622181563-430f63602d4b?w=800&h=400&fit=crop",
      },
      {
        id: "ro-repair",
        title: "RO Repair & Maintenance",
        description:
          "Quick diagnosis and repair of all RO system faults with genuine spare parts.",
        badges: ["Fast Turnaround", "Warranty Included"],
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=400&fit=crop",
      },
      {
        id: "filter-replacement",
        title: "Filter Replacement Service",
        description:
          "Annual membrane and filter replacement with water quality testing.",
        badges: ["Genuine Parts", "Quality Tested"],
        image:
          "https://images.unsplash.com/photo-1584622181563-430f63602d4b?w=800&h=400&fit=crop",
      },
      {
        id: "ro-annual-maintenance",
        title: "Annual RO Maintenance",
        description: "Comprehensive maintenance package with cleaning and optimization.",
        badges: ["Full Coverage", "Expert Care"],
        image:
          "https://images.unsplash.com/photo-1584622181563-430f63602d4b?w=800&h=400&fit=crop",
      },
    ],
  },
  {
    id: "air-conditioning",
    name: "Air Conditioning",
    description: "AC service, gas filling, installation and comprehensive cooling solutions.",
    icon: Wind,
    serviceCount: 4,
    image:
      "https://images.unsplash.com/photo-1574694534804-442d51c799da?w=800&h=400&fit=crop",
    subServices: [
      {
        id: "ac-installation",
        title: "AC Installation",
        description: "Professional installation of split and window AC units with expertise.",
        badges: ["Expert Installation", "Warranty Support"],
        image:
          "https://images.unsplash.com/photo-1574694534804-442d51c799da?w=800&h=400&fit=crop",
      },
      {
        id: "ac-service",
        title: "AC Servicing & Cleaning",
        description: "Deep cleaning and servicing to improve cooling efficiency.",
        badges: ["Same-Day Service", "Quality Assured"],
        image:
          "https://images.unsplash.com/photo-1574694534804-442d51c799da?w=800&h=400&fit=crop",
      },
      {
        id: "gas-filling",
        title: "Gas Refill & Charging",
        description: "Professional refrigerant filling with leak detection and repair.",
        badges: ["Genuine Gas", "Eco-Friendly"],
        image:
          "https://images.unsplash.com/photo-1574694534804-442d51c799da?w=800&h=400&fit=crop",
      },
      {
        id: "ac-repair",
        title: "AC Repair",
        description: "Quick diagnosis and repair of all AC issues with genuine parts.",
        badges: ["Fast Service", "Parts Warranty"],
        image:
          "https://images.unsplash.com/photo-1574694534804-442d51c799da?w=800&h=400&fit=crop",
      },
    ],
  },
  {
    id: "kitchen-appliances",
    name: "Kitchen Appliances",
    description: "Chimney, stove, microwave and complete kitchen appliance solutions.",
    icon: Flame,
    serviceCount: 3,
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop",
    subServices: [
      {
        id: "chimney-service",
        title: "Chimney Cleaning & Service",
        description: "Complete chimney cleaning, filter replacement and maintenance.",
        badges: ["Professional Cleaning", "Maintenance Done"],
        image:
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop",
      },
      {
        id: "stove-repair",
        title: "Gas Stove Repair",
        description: "Repair and maintenance of gas stoves and cooking equipment.",
        badges: ["Expert Repair", "Same-Day Service"],
        image:
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop",
      },
      {
        id: "microwave-repair",
        title: "Microwave Repair",
        description: "Microwave oven repair and troubleshooting with genuine parts.",
        badges: ["Quick Diagnosis", "Warranty Parts"],
        image:
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop",
      },
    ],
  },
  {
    id: "home-appliances",
    name: "Home Appliances",
    description: "Washing machine, refrigerator and comprehensive appliance repair services.",
    icon: WashingMachine,
    serviceCount: 3,
    image:
      "https://images.unsplash.com/photo-1584622181563-430f63602d4b?w=800&h=400&fit=crop",
    subServices: [
      {
        id: "washing-machine",
        title: "Washing Machine Repair",
        description: "Repair of all washing machine types with drum and motor expertise.",
        badges: ["Same-Day Service", "Verified Expert"],
        image:
          "https://images.unsplash.com/photo-1584622181563-430f63602d4b?w=800&h=400&fit=crop",
      },
      {
        id: "refrigerator",
        title: "Refrigerator Repair",
        description: "Fridge cooling issues, compressor repair and temperature control fixes.",
        badges: ["Expert Diagnosis", "Quality Parts"],
        image:
          "https://images.unsplash.com/photo-1584622181563-430f63602d4b?w=800&h=400&fit=crop",
      },
      {
        id: "dishwasher",
        title: "Dishwasher Service",
        description: "Professional dishwasher repair and maintenance service.",
        badges: ["Professional Service", "Fast Turnaround"],
        image:
          "https://images.unsplash.com/photo-1584622181563-430f63602d4b?w=800&h=400&fit=crop",
      },
    ],
  },
  {
    id: "electrical",
    name: "Electrical & More",
    description: "Wiring, geyser, inverter repair and all electrical appliance solutions.",
    icon: Zap,
    serviceCount: 4,
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=400&fit=crop",
    subServices: [
      {
        id: "geyser-repair",
        title: "Geyser Repair & Installation",
        description: "Professional geyser installation, repair and maintenance services.",
        badges: ["Water Heating Expert", "Quick Service"],
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=400&fit=crop",
      },
      {
        id: "inverter-battery",
        title: "Inverter & Battery Service",
        description: "Inverter installation, repair and battery maintenance.",
        badges: ["Power Solutions", "Expert Setup"],
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=400&fit=crop",
      },
      {
        id: "electrical-wiring",
        title: "Electrical Wiring",
        description: "Safe electrical wiring installation and troubleshooting.",
        badges: ["Safety First", "Certified Work"],
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=400&fit=crop",
      },
      {
        id: "stabilizer-service",
        title: "Voltage Stabilizer Service",
        description: "Stabilizer repair, installation and power protection.",
        badges: ["Device Protection", "Quick Fix"],
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=400&fit=crop",
      },
    ],
  },
  {
    id: "interior-cleaning",
    name: "Interior & Cleaning",
    description: "PVC doors, wall panels, water tanks and complete cleaning solutions.",
    icon: Paintbrush,
    serviceCount: 3,
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=400&fit=crop",
    subServices: [
      {
        id: "pvc-doors",
        title: "PVC Doors Installation",
        description: "Premium PVC door installation with weatherproofing and durability.",
        badges: ["Quality Material", "Expert Installation"],
        image:
          "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=400&fit=crop",
      },
      {
        id: "wall-panels",
        title: "Wall Panels Installation",
        description: "Decorative wall panel installation and interior enhancement.",
        badges: ["Design Aesthetic", "Professional Fit"],
        image:
          "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=400&fit=crop",
      },
      {
        id: "tank-cleaning",
        title: "Water Tank Cleaning",
        description: "Professional water tank cleaning and disinfection services.",
        badges: ["Hygienic Service", "Safe Chemicals"],
        image:
          "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=400&fit=crop",
      },
    ],
  },
]
