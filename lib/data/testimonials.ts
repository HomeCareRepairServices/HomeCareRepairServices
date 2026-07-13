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

export const allTestimonials: Testimonial[] = [
  // --- Rishikesh (4) ---
  {
    name: "Anjali S.",
    area: "Rishikesh",
    service: "RO Installation",
    rating: 5,
    quote:
      "Booked an RO installation for our home in Rishikesh. The technician arrived on time, completed the installation neatly, and explained how to maintain the purifier. Very satisfied with the overall experience.",
  },
  {
    name: "Rahul N.",
    area: "Rishikesh",
    service: "AC Service",
    rating: 5,
    quote:
      "Our split AC had stopped cooling before the summer season. The servicing was thorough, and the cooling improved immediately. The technician was polite and professional.",
  },
  {
    name: "Pooja B.",
    area: "Rishikesh",
    service: "Chimney Cleaning",
    rating: 5,
    quote:
      "The kitchen chimney had accumulated a lot of grease over time. After the deep cleaning, it worked much better and the entire kitchen was left clean.",
  },
  {
    name: "Amit R.",
    area: "Rishikesh",
    service: "Electrical Services",
    rating: 5,
    quote:
      "We needed several electrical fittings installed after moving into our new home. Everything was completed safely and efficiently with great attention to detail.",
  },

  // --- Haridwar (4) ---
  {
    name: "Meena J.",
    area: "Haridwar",
    service: "RO AMC",
    rating: 5,
    quote:
      "The annual maintenance service has been very reliable. Filter replacements are done on time and the technician always explains the work before leaving.",
  },
  {
    name: "Vikas S.",
    area: "Haridwar",
    service: "Geyser Repair",
    rating: 5,
    quote:
      "Our geyser stopped heating during winter. The fault was diagnosed quickly and repaired in a single visit.",
  },
  {
    name: "Neha K.",
    area: "Haridwar",
    service: "Refrigerator Repair",
    rating: 5,
    quote:
      "The refrigerator wasn't cooling properly. The technician identified the issue immediately and restored it the same day.",
  },
  {
    name: "Suresh P.",
    area: "Haridwar",
    service: "Water Tank Cleaning",
    rating: 5,
    quote:
      "The water tank cleaning service was thorough and professionally handled. The team arrived on time and completed everything without creating any mess.",
  },

  // --- Dehradun (4) ---
  {
    name: "Deepak U.",
    area: "Dehradun",
    service: "AC Installation",
    rating: 5,
    quote:
      "Installed a new split AC at our apartment. The installation was neat, and the technician checked everything before leaving.",
  },
  {
    name: "Shalini N.",
    area: "Dehradun",
    service: "Washing Machine Repair",
    rating: 5,
    quote:
      "Our front-load washing machine had drainage issues. The problem was fixed during the first visit and it has been working perfectly since.",
  },
  {
    name: "Mohammed A.",
    area: "Dehradun",
    service: "Inverter Repair",
    rating: 5,
    quote:
      "The inverter stopped working during a power cut. The technician diagnosed the fault quickly and restored it without unnecessary replacements.",
  },
  {
    name: "Kavita R.",
    area: "Dehradun",
    service: "Modular Kitchen Solutions",
    rating: 5,
    quote:
      "The modular kitchen work was completed exactly as discussed. The finish looks modern and the team maintained good workmanship throughout.",
  },

  // --- Tapovan (2) ---
  {
    name: "Ritika N.",
    area: "Tapovan",
    service: "RO Service",
    rating: 5,
    quote:
      "Our RO purifier had started giving a bad taste to the water. The technician serviced it thoroughly, replaced the filters, and explained the maintenance schedule clearly. The water quality improved immediately.",
  },
  {
    name: "Nitin B.",
    area: "Tapovan",
    service: "AC Installation",
    rating: 5,
    quote:
      "We recently shifted into a new apartment in Tapovan and needed a split AC installed. The installation was clean, secure, and completed within the promised time.",
  },

  // --- Ram Jhula (2) ---
  {
    name: "Priya P.",
    area: "Ram Jhula",
    service: "Chimney Installation",
    rating: 5,
    quote:
      "We renovated our kitchen and got a new chimney installed. The technician completed the installation neatly and made sure everything was working perfectly before leaving.",
  },
  {
    name: "Ashish N.",
    area: "Ram Jhula",
    service: "RO Sales & Repair",
    rating: 5,
    quote:
      "They helped us choose the right RO purifier for our family and completed the installation the same day. Very professional guidance throughout.",
  },

  // --- Raiwala (2) ---
  {
    name: "Imran K.",
    area: "Raiwala",
    service: "Refrigerator Repair",
    rating: 5,
    quote:
      "Our refrigerator suddenly stopped cooling during the weekend. The technician diagnosed the issue quickly and repaired it on the same visit. Fair pricing and excellent service.",
  },
  {
    name: "Vinita R.",
    area: "Raiwala",
    service: "Electrical Services",
    rating: 5,
    quote:
      "We had multiple electrical switches and sockets replaced in our home. The work was completed safely and neatly without any unnecessary delays.",
  },

  // --- Doiwala (2) ---
  {
    name: "Pooja R.",
    area: "Doiwala",
    service: "RO AMC",
    rating: 5,
    quote:
      "The annual maintenance reminders are always on time, and the service visits have been smooth. It's reassuring to know our purifier is regularly maintained.",
  },
  {
    name: "Rakesh B.",
    area: "Doiwala",
    service: "Geyser Installation",
    rating: 5,
    quote:
      "The new geyser installation was completed quickly and the technician explained all the safety precautions before leaving. Very satisfied with the service.",
  },

  // --- Shivpuri (2) ---
  {
    name: "Aarti G.",
    area: "Shivpuri",
    service: "AC Service",
    rating: 5,
    quote:
      "Our riverside property needed AC servicing before the tourist season. The team arrived as scheduled and all the units are cooling efficiently again.",
  },
  {
    name: "Manoj S.",
    area: "Shivpuri",
    service: "Water Tank Cleaning",
    rating: 5,
    quote:
      "The overhead water tank was cleaned thoroughly and the entire process was completed professionally. The technicians maintained cleanliness throughout the visit.",
  },

  // --- Narendra Nagar (2) ---
  {
    name: "Sunita R.",
    area: "Narendra Nagar",
    service: "RO Installation",
    rating: 5,
    quote:
      "The technician installed the RO purifier carefully and explained the filter replacement schedule in detail. The installation was completed without any hassle.",
  },
  {
    name: "Rajeev P.",
    area: "Narendra Nagar",
    service: "Inverter Repair",
    rating: 5,
    quote:
      "Our inverter had stopped charging properly. The issue was diagnosed quickly, and it has been working reliably since the repair.",
  },

  // --- Nirmal Bagh (1) ---
  {
    name: "Seema J.",
    area: "Nirmal Bagh",
    service: "Washing Machine Repair",
    rating: 5,
    quote:
      "Our washing machine had developed a spinning issue. The technician identified the fault quickly and completed the repair in a single visit.",
  },

  // --- IDPL Bapu Gram (1) ---
  {
    name: "Gaurav N.",
    area: "IDPL Bapu Gram",
    service: "RO Sales & Repair",
    rating: 5,
    quote:
      "We contacted them for an RO repair and were impressed by the quick response. The technician solved the issue efficiently and shared useful maintenance tips.",
  },

  // --- Veerbhadra (1) ---
  {
    name: "Kiran B.",
    area: "Veerbhadra",
    service: "Chimney Cleaning",
    rating: 5,
    quote:
      "The chimney cleaning service was thorough and completed without creating any mess in the kitchen. The suction performance improved noticeably afterwards.",
  },

  // --- Gumaniwala (1) ---
  {
    name: "Mahesh K.",
    area: "Gumaniwala",
    service: "Refrigerator Repair",
    rating: 5,
    quote:
      "Our refrigerator wasn't maintaining the correct temperature. The technician diagnosed the problem quickly and restored normal cooling the same day.",
  },

  // --- Shyampur (1) ---
  {
    name: "Neelam S.",
    area: "Shyampur",
    service: "Electrical Services",
    rating: 5,
    quote:
      "We needed several electrical repairs completed around the house. The technician worked carefully, completed everything on time, and left the workspace clean.",
  },

  // --- Chidderwala (1) ---
  {
    name: "Devendra R.",
    area: "Chidderwala",
    service: "Geyser Repair",
    rating: 5,
    quote:
      "Our geyser stopped heating unexpectedly. The technician explained the issue clearly, repaired it promptly, and tested everything before leaving.",
  },
]
