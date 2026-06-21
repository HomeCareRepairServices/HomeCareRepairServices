export type Testimonial = {
  name: string
  area: string
  service: string
  rating: number
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Anjali Sharma",
    area: "Rishikesh",
    service: "RO Installation",
    rating: 5,
    quote:
      "Booked an RO installation in the morning and the technician arrived within two hours. Neat work, fair price and they explained everything clearly.",
  },
  {
    name: "Rohit Verma",
    area: "Haridwar",
    service: "AC Service",
    rating: 5,
    quote:
      "My split AC was barely cooling. They did a deep service and gas top-up the same day. It feels brand new now. Highly recommended.",
  },
  {
    name: "Meena Joshi",
    area: "Dehradun",
    service: "Chimney Cleaning",
    rating: 5,
    quote:
      "The kitchen chimney looks spotless after their deep cleaning. Polite staff and they cleaned up everything before leaving.",
  },
  {
    name: "Sandeep Negi",
    area: "Tapovan",
    service: "Washing Machine Repair",
    rating: 5,
    quote:
      "Front-load washing machine stopped spinning. Diagnosed and fixed in one visit with genuine parts. Very professional team.",
  },
  {
    name: "Pooja Rana",
    area: "Doiwala",
    service: "RO AMC",
    rating: 5,
    quote:
      "Took their annual maintenance plan and never worry about my water purifier anymore. Regular reminders and on-time service.",
  },
  {
    name: "Imran Khan",
    area: "Raiwala",
    service: "Refrigerator Repair",
    rating: 5,
    quote:
      "Fridge was not cooling and they fixed the compressor issue quickly. Honest pricing, no unnecessary upselling.",
  },
]
