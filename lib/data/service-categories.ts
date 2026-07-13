export type ServiceCategorySlug =
  | "water-purifier"
  | "ac-services"
  | "kitchen-appliances"
  | "home-appliances"
  | "electrical-interior"
  | "cleaning-services"
  | "decoration-services"

export interface SubService {
  slug: string
  title: string
  description: string
  icon: string
  image: string // New: For the category grid cards
}

export interface ServiceCategoryData {
  slug: ServiceCategorySlug
  title: string
  metaTitle: string
  metaDescription: string
  intro: string
  heroImage: string // New: For the desktop hero background
  services: SubService[]
  faqs: { q: string; a: string }[]
}

export const serviceCategoriesData: Record<ServiceCategorySlug, ServiceCategoryData> = {
  "water-purifier": {
    slug: "water-purifier",
    title: "Water Purifier Services",
    metaTitle: "Expert RO & Water Purifier Services | Home Care Repair",
    metaDescription: "Professional RO installation, repair, and AMC plans in Rishikesh, Haridwar & Dehradun. Trusted experts for all water purifier brands. Book now!",
    intro: "Ensure your family drinks safe, pure water. Our certified technicians handle everything from new RO installations to urgent repairs and annual maintenance for all major brands.",
    heroImage: "/images/categories/water-purifier-hero.webp",
    services: [
      { slug: "ro-sales-repair", title: "RO Sales & Repair", description: "Complete sales and repair solutions for all types of Reverse Osmosis systems.", icon: "💧", image: "/images/services/ro-sales-repair.webp" },
      { slug: "ro-service", title: "RO Service", description: "Regular servicing to keep your purifier running at peak efficiency.", icon: "🔧", image: "/images/services/ro-service.webp" },
      { slug: "ro-installation", title: "RO Installation", description: "Quick, hassle-free installation by certified professionals.", icon: "🏗️", image: "/images/services/ro-installation.webp" },
      { slug: "ro-amc", title: "RO AMC", description: "Annual Maintenance Contracts for worry-free, year-round protection.", icon: "📋", image: "/images/services/ro-amc.webp" },
      { slug: "uv-water-purifier-installation", title: "UV Water Purifier Installation", description: "Specialized installation for advanced UV water purifiers.", icon: "✨", image: "/images/services/uv-purifier.webp" },
      { slug: "water-softener-installation", title: "Water Softener Installation", description: "Installation and setup of water softeners to reduce hard water issues.", icon: "💧", image: "/images/services/water-softener.webp" },
    ],
    faqs: [
      { q: "How often should I get my RO serviced?", a: "We recommend getting your RO purifier serviced every 6 months to ensure optimal filtration and water quality." },
      { q: "Do you provide spare parts for all brands?", a: "Yes, we carry authentic spare parts for major brands like Kent, Aquaguard, Livpure, and more." },
    ]
  },
  "ac-services": {
    slug: "ac-services",
    title: "Air Conditioning Services",
    metaTitle: "Fast AC Repair, Service & Installation | Home Care Repair",
    metaDescription: "Reliable AC repair, gas refilling, deep cleaning, and installation in Rishikesh, Haridwar & Dehradun. Same-day service available.",
    intro: "Beat the heat with our comprehensive AC services. Whether it's a minor repair, deep cleaning, or a full split AC installation, our experts deliver fast, reliable solutions.",
    heroImage: "/images/categories/ac-services-hero.webp",
    services: [
      { slug: "ac-service", title: "AC Service", description: "General maintenance and servicing to keep your AC running smoothly.", icon: "🛠️", image: "/images/services/ac-service.webp" },
      { slug: "ac-repair", title: "AC Repair", description: "Expert diagnostics and repair for all AC cooling and mechanical issues.", icon: "❄️", image: "/images/services/ac-repair.webp" },
      { slug: "ac-installation", title: "AC Installation", description: "Safe and secure installation of split and window air conditioners.", icon: "🏗️", image: "/images/services/ac-installation.webp" },
      { slug: "ac-gas-refilling", title: "AC Gas Refilling", description: "Leak detection and accurate gas refilling for optimal cooling.", icon: "🧊", image: "/images/services/ac-gas.webp" },
      { slug: "ac-deep-cleaning", title: "AC Deep Cleaning", description: "Foam wash and deep cleaning to improve airflow and hygiene.", icon: "✨", image: "/images/services/ac-cleaning.webp" },
      { slug: "ac-amc", title: "AC AMC", description: "Annual maintenance for hassle-free summer cooling.", icon: "📋", image: "/images/services/ac-amc.webp" },
    ],
    faqs: [
      { q: "Why is my AC leaking water inside the room?", a: "This is usually due to a blocked drain pipe or a dirty filter. Our technicians can clean and fix this quickly." },
      { q: "How long does an AC gas refilling take?", a: "Gas refilling typically takes about 30-45 minutes, including a leak test to ensure it lasts." },
    ]
  },
  "kitchen-appliances": {
    slug: "kitchen-appliances",
    title: "Kitchen Appliances Services",
    metaTitle: "Chimney & Kitchen Appliance Repair | Home Care Repair",
    metaDescription: "Professional kitchen chimney cleaning, installation, and modular kitchen solutions in Rishikesh & Haridwar. Book now!",
    intro: "Keep your kitchen smoke-free and functional. We specialize in chimney maintenance, cooktop repairs, and modular kitchen solutions tailored to your home.",
    heroImage: "/images/categories/kitchen-appliances-hero.webp",
    services: [
      { slug: "chimney-cleaning", title: "Chimney Cleaning", description: "Deep cleaning to remove grease and restore suction power.", icon: "💨", image: "/images/services/chimney-cleaning.webp" },
      { slug: "chimney-repair", title: "Chimney Repair", description: "Fixing motor, fan, and electrical issues in kitchen chimneys.", icon: "🔧", image: "/images/services/chimney-repair.webp" },
      { slug: "chimney-installation", title: "Chimney Installation", description: "Professional wall-mounted and island chimney installation.", icon: "🔨", image: "/images/services/chimney-installation.webp" },
      { slug: "hob-repair", title: "Hob Repair", description: "Fixing ignition, gas leakage, and glass top issues in hobs.", icon: "🔥", image: "/images/services/hob-repair.webp" },
      { slug: "gas-stove-repair", title: "Gas Stove Repair", description: "Repairing burners, valves, and ignition problems for gas stoves.", icon: "🍳", image: "/images/services/gas-stove.webp" },
      { slug: "modular-kitchen-solutions", title: "Modular Kitchen Solutions", description: "Repair and maintenance for modular kitchen fittings and cabinets.", icon: "🏡", image: "/images/services/modular-kitchen.webp" },
    ],
    faqs: [
      { q: "How often should kitchen chimneys be cleaned?", a: "For heavy Indian cooking, we suggest a deep clean every 3 to 4 months." },
    ]
  },
  "home-appliances": {
    slug: "home-appliances",
    title: "Home Appliances Repair",
    metaTitle: "Washing Machine, Fridge & Geyser Repair | Home Care Repair",
    metaDescription: "Expert repair for washing machines, refrigerators, geysers, and inverters in Rishikesh, Haridwar & Dehradun. Trusted local technicians.",
    intro: "Don't let a broken appliance disrupt your day. We provide fast, reliable repair services for all major home appliances right at your doorstep.",
    heroImage: "/images/categories/home-appliances-hero.webp",
    services: [
      { slug: "washing-machine-repair", title: "Washing Machine Repair", description: "Fixing drum issues, draining problems, and motor faults.", icon: "🧺", image: "/images/services/washing-machine.webp" },
      { slug: "refrigerator-repair", title: "Refrigerator Repair", description: "Cooling issues, gas charging, and thermostat replacements.", icon: "🧊", image: "/images/services/refrigerator.webp" },
      { slug: "geyser-repair", title: "Geyser Repair", description: "Heating element replacement and leakage fixes.", icon: "🚿", image: "/images/services/geyser-repair.webp" },
      { slug: "geyser-installation", title: "Geyser Installation", description: "Safe installation of instant and storage geysers.", icon: "⚙️", image: "/images/services/geyser-installation.webp" },
      { slug: "microwave-repair", title: "Microwave Repair", description: "Fixing heating issues, turntable problems, and electrical faults.", icon: "📼", image: "/images/services/microwave.webp" },
      { slug: "water-dispenser-repair", title: "Water Dispenser Repair", description: "Fixing cooling and heating mechanisms in water dispensers.", icon: "🚰", image: "/images/services/water-dispenser.webp" },
      { slug: "inverter-repair", title: "Inverter Repair", description: "Troubleshooting and battery replacement for home inverters.", icon: "🔋", image: "/images/services/inverter.webp" },
    ],
    faqs: [
      { q: "Do you repair all brands of washing machines?", a: "Yes, we service LG, Samsung, Whirlpool, Bosch, and all other major brands." },
    ]
  },
  "electrical-interior": {
    slug: "electrical-interior",
    title: "Electrical & Interior Services",
    metaTitle: "Electrician & PVC Wall Panel Work | Home Care Repair",
    metaDescription: "Safe electrical wiring, switchboard installation, and premium PVC wall paneling in Rishikesh & Haridwar. Book a licensed electrician.",
    intro: "From safe electrical wiring to aesthetic interior upgrades, our skilled electricians and craftsmen ensure your home is both safe and beautiful.",
    heroImage: "/images/categories/electrical-interior-hero.webp",
    services: [
      { slug: "electrical-repair", title: "Electrical Repair", description: "Wiring, short circuit fixes, and general electrical troubleshooting.", icon: "⚡", image: "/images/services/electrical-repair.webp" },
      { slug: "fan-installation", title: "Fan Installation", description: "Secure installation of ceiling fans, exhaust fans, and decorative fans.", icon: "🌀", image: "/images/services/fan-installation.webp" },
      { slug: "tv-wall-mount-installation", title: "TV Wall Mount Installation", description: "Safe and secure mounting of LED/LCD TVs on any wall type.", icon: "📺", image: "/images/services/tv-mount.webp" },
      { slug: "mcb-panel-upgrade", title: "MCB Panel Upgrade", description: "Upgrading and replacing old MCB panels for better safety.", icon: "🔌", image: "/images/services/mcb-panel.webp" },
      { slug: "switch-board-repair", title: "Switch Board Repair", description: "Fixing loose connections, broken switches, and spark issues.", icon: "🔒", image: "/images/services/switch-board.webp" },
      { slug: "pvc-wall-panel-installation", title: "PVC Wall Panel Installation", description: "Moisture-proof, aesthetic PVC wall panel installation for rooms and bathrooms.", icon: "🛡️", image: "/images/services/pvc-panel.webp" },
      { slug: "false-ceiling-lighting", title: "False Ceiling Lighting", description: "Design and installation of false ceilings with integrated lighting.", icon: "💡", image: "/images/services/false-ceiling.webp" },
    ],
    faqs: [
      { q: "Are your electricians licensed?", a: "Yes, all our electrical technicians are certified and experienced in handling safe residential wiring." },
    ]
  },
  "cleaning-services": {
    slug: "cleaning-services",
    title: "Cleaning Services",
    metaTitle: "Professional Water Tank Cleaning | Home Care Repair",
    metaDescription: "Professional water tank cleaning services in Rishikesh, Haridwar & Dehradun. Anti-bacterial treatment. Affordable rates.",
    intro: "Ensure hygiene and safety with our professional cleaning services. We use FDA-approved chemicals to deliver spotless results.",
    heroImage: "/images/categories/cleaning-services-hero.webp",
    services: [
      { slug: "water-tank-cleaning", title: "Water Tank Cleaning", description: "Anti-bacterial deep cleaning for overhead and underground tanks.", icon: "🚰", image: "/images/services/water-tank-cleaning.webp" },
    ],
    faqs: [
      { q: "Is the water tank cleaning chemical safe?", a: "Yes, we use FDA-approved, anti-bacterial chemicals that are completely safe for drinking water tanks." },
    ]
  },
  "decoration-services": {
    slug: "decoration-services",
    title: "Decoration Services",
    metaTitle: "Wedding, Festival & Event Decoration | Home Care Repair",
    metaDescription: "Stunning wedding, festival, and birthday lighting decoration services in Rishikesh & Haridwar. Setup and removal included.",
    intro: "Transform your space for any occasion. From intimate birthdays to grand weddings, our experts handle setup, lighting, and removal seamlessly.",
    heroImage: "/images/categories/decoration-services-hero.webp",
    services: [
      { slug: "wedding-lighting-decoration", title: "Wedding Lighting Decoration", description: "Elegant and grand lighting setups tailored for wedding venues.", icon: "💒", image: "/images/services/wedding-decor.webp" },
      { slug: "festival-lighting-decoration", title: "Festival Lighting Decoration", description: "Diwali, Holi, and other festival-specific lighting and decor.", icon: "🪔", image: "/images/services/festival-decor.webp" },
      { slug: "birthday-decoration", title: "Birthday Decoration", description: "Balloon setups, LED lighting, and themed decorations for birthdays.", icon: "🎈", image: "/images/services/birthday-decor.webp" },
      { slug: "house-decoration", title: "House Decoration", description: "Permanent or temporary aesthetic enhancements for your home interiors.", icon: "🏠", image: "/images/services/house-decor.webp" },
      { slug: "event-decoration", title: "Event Decoration", description: "Custom lighting and decor solutions for corporate events and parties.", icon: "✨", image: "/images/services/event-decor.webp" },
    ],
    faqs: [
      { q: "Do you handle the removal of the decorations?", a: "Yes, our package includes complete setup as well as hassle-free removal the next day." },
    ]
  }
}

export interface ServiceLocation {
  name: string
  image: string
}

export const serviceLocations: ServiceLocation[] = [
  { name: "Rishikesh", image: "/locations/rishikesh.webp" },
  { name: "Ram Jhula", image: "/locations/ram-jhula.webp" },
  { name: "Tapovan", image: "/locations/tapovan.webp" },
  { name: "Nirmal Bagh", image: "/locations/nirmal-bagh.webp" },
  { name: "IDPL Bapu Gram", image: "/locations/idpl-bapu-gram.webp" },
  { name: "Veerbhadra", image: "/locations/veerbhadra.webp" },
  { name: "Gumaniwala", image: "/locations/gumaniwala.webp" },
  { name: "Shyampur", image: "/locations/shyampur.webp" },
  { name: "Chidderwala", image: "/locations/chidderwala.webp" },
  { name: "Shivpuri", image: "/locations/shivpuri.webp" },
  { name: "Narendra Nagar", image: "/locations/narendra-nagar.webp" },
  { name: "Raiwala", image: "/locations/raiwala.webp" },
  { name: "Dehradun", image: "/locations/dehradun.webp" },
  { name: "Doiwala", image: "/locations/doiwala.webp" },
  { name: "Haridwar", image: "/locations/haridwar.webp" },
]