export type Area = {
  slug: string
  name: string
  short: string
  description: string
  featured?: boolean
}

export const areas: Area[] = [
  // Row 1: Core Tourist & Spiritual Hubs
  {
    slug: "rishikesh",
    name: "Rishikesh",
    short: "Yoga capital & riverside town",
    description:
      "Fast doorstep appliance repair and RO services across all of Rishikesh, from Tapovan to Muni Ki Reti.",
    featured: true,
  },
  {
    slug: "ram-jhula",
    name: "Ram Jhula",
    short: "Iconic suspension bridge & ashram hub",
    description:
      "Expert home appliance and water purifier service for Ram Jhula, the iconic suspension bridge area and its surrounding ashrams and cafes.",
  },
  {
    slug: "tapovan",
    name: "Tapovan",
    short: "Riverside Rishikesh neighbourhood",
    description: "Quick local service for cafes, stays and homes in Tapovan and Laxman Jhula.",
  },

  // Row 2: Residential Enclaves & Outskirts
  {
    slug: "nirmal-bagh",
    name: "Nirmal Bagh",
    short: "Peaceful residential pocket near Visthapit",
    description:
      "Reliable doorstep repair and installation services for homes in Nirmal Bagh and the surrounding Visthapit area.",
  },
  {
    slug: "idpl-bapu-gram",
    name: "IDPL Bapu Gram",
    short: "Bustling township area near AIIMS",
    description:
      "Complete appliance care for the IDPL Bapu Gram township, serving homes and businesses near AIIMS Rishikesh.",
  },
  {
    slug: "veerbhadra",
    name: "Veerbhadra",
    short: "Riverside locality near Ganga Barrage",
    description:
      "Dependable repair and maintenance services for households in Veerbhadra and the Ganga Barrage vicinity.",
  },

  // Row 3: Mid-Transit Towns & Extensions
  {
    slug: "gumaniwala",
    name: "Gumaniwala",
    short: "Rapidly growing semi-urban hub",
    description:
      "Timely appliance repair and installation for the fast-growing Gumaniwala area and nearby settlements.",
  },
  {
    slug: "shyampur",
    name: "Shyampur",
    short: "Outskirts of Rishikesh",
    description: "Dependable repair and installation visits across Shyampur and nearby villages.",
  },
  {
    slug: "chidderwala",
    name: "Chidderwala",
    short: "Near Rishikesh bypass",
    description: "Reliable repair, installation and cleaning services in Chidderwala.",
  },

  // Row 4: Nearby Hill, Transit & Adventure Escapes
  {
    slug: "shivpuri",
    name: "Shivpuri",
    short: "River rafting & camping hotspot",
    description:
      "On-site appliance repair for camps, resorts and homes in Shivpuri, the rafting capital of Rishikesh.",
  },
  {
    slug: "narendra-nagar",
    name: "Narendra Nagar",
    short: "Hill town near Rishikesh",
    description: "On-site appliance care and RO maintenance for homes and resorts in Narendra Nagar.",
  },
  {
    slug: "raiwala",
    name: "Raiwala",
    short: "Township near Haridwar",
    description: "Same-day service for households and businesses across Raiwala.",
  },

  // Row 5: Neighboring Major Cities
  {
    slug: "dehradun",
    name: "Dehradun",
    short: "Capital of Uttarakhand",
    description:
      "Complete home appliance and water purifier service coverage across Dehradun and surrounding colonies.",
    featured: true,
  },
  {
    slug: "doiwala",
    name: "Doiwala",
    short: "Between Dehradun & Rishikesh",
    description: "Expert technicians covering Doiwala and the surrounding region.",
  },
  {
    slug: "haridwar",
    name: "Haridwar",
    short: "Holy city on the Ganges",
    description:
      "Trusted technicians serving homes, hotels and guest houses throughout Haridwar with same-day visits.",
    featured: true,
  },
]

export const areaMap = Object.fromEntries(areas.map((a) => [a.slug, a]))
