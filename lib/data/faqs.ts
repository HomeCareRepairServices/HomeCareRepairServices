export type Faq = {
  question: string
  answer: string
  category: string
}

export const faqs: Faq[] = [
  {
    category: "Service Areas",
    question: "Which areas do you provide service in?",
    answer:
      "We provide doorstep service across Rishikesh, Haridwar, Dehradun, Tapovan, Shyampur, Narendra Nagar, Raiwala, Doiwala, Chidderwala and Jonk.",
  },
  {
    category: "Pricing Questions",
    question: "Do you charge a visit or inspection fee?",
    answer:
      "We share a transparent inspection charge before booking. If you go ahead with the repair, the inspection fee is adjusted into the final bill in most cases.",
  },
  {
    category: "Appliance Repair",
    question: "How soon can a technician reach my home?",
    answer:
      "For most areas we offer same-day service. If you call before noon, we usually arrange a visit within a few hours depending on technician availability.",
  },
  {
    category: "RO Services",
    question: "Do you use genuine parts and filters?",
    answer:
      "Yes. We use genuine, compatible spare parts and filters for all RO and appliance repairs, and we provide a service warranty on the work performed.",
  },
  {
    category: "RO Services",
    question: "What does an RO AMC plan include?",
    answer:
      "Our AMC plans cover scheduled servicing, filter checks, priority support and discounted spare parts so your purifier keeps delivering safe water year-round.",
  },
  {
    category: "Pricing Questions",
    question: "Which payment methods do you accept?",
    answer:
      "We accept cash, UPI and major digital payment apps. You pay only after the service is completed to your satisfaction.",
  },
]
