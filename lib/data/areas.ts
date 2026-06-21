export type Area = {
  slug: string
  name: string
  short: string
  description: string
  featured?: boolean
}

export const areas: Area[] = [
  {
    slug: "rishikesh",
    name: "Rishikesh",
    short: "Yoga capital & riverside town",
    description:
      "Fast doorstep appliance repair and RO services across all of Rishikesh, from Tapovan to Muni Ki Reti.",
    featured: true,
  },
  {
    slug: "haridwar",
    name: "Haridwar",
    short: "Holy city on the Ganges",
    description:
      "Trusted technicians serving homes, hotels and guest houses throughout Haridwar with same-day visits.",
    featured: true,
  },
  {
    slug: "dehradun",
    name: "Dehradun",
    short: "Capital of Uttarakhand",
    description:
      "Complete home appliance and water purifier service coverage across Dehradun and surrounding colonies.",
    featured: true,
  },
  {
    slug: "tapovan",
    name: "Tapovan",
    short: "Riverside Rishikesh neighbourhood",
    description: "Quick local service for cafes, stays and homes in Tapovan and Laxman Jhula.",
  },
  {
    slug: "shyampur",
    name: "Shyampur",
    short: "Outskirts of Rishikesh",
    description: "Dependable repair and installation visits across Shyampur and nearby villages.",
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
  {
    slug: "doiwala",
    name: "Doiwala",
    short: "Between Dehradun & Rishikesh",
    description: "Expert technicians covering Doiwala and the surrounding region.",
  },
  {
    slug: "chidderwala",
    name: "Chidderwala",
    short: "Near Rishikesh bypass",
    description: "Reliable repair, installation and cleaning services in Chidderwala.",
  },
  {
    slug: "jonk",
    name: "Jonk",
    short: "Quiet residential pocket",
    description: "Doorstep appliance and water purifier service for the Jonk area.",
  },
]

export const areaMap = Object.fromEntries(areas.map((a) => [a.slug, a]))
