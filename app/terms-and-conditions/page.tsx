import type { Metadata } from "next"
import { siteConfig } from "@/lib/site"
import { LegalPage } from "@/components/legal-page"
export const metadata: Metadata = { title: `Terms & Conditions | ${siteConfig.name}`, description: "Read the Terms & Conditions for using the Home Care Repair Services website and requesting home repair services." }
const titles = ["Introduction", "Website Use", "Service Requests", "Service Information", "Pricing and Estimates", "Appointments and Service Visits", "Customer Responsibilities", "Repair and Installation Work", "Payments and Rescheduling", "Website Content", "Changes to These Terms", "Contact Information"]
const sections = titles.map((title) => ({ title, body: title === "Contact Information" ? "For questions about these terms, please use our contact page." : "Information on this website is provided to help you request home appliance repair, installation, maintenance and related services. Service details, estimates and visit arrangements are discussed with customers before work begins and may depend on the appliance, location and required parts." }))
export default function TermsPage() { return <LegalPage current="Terms & Conditions" title="Terms & Conditions" intro={`These terms explain the general use of the ${siteConfig.name} website and service requests.`} sections={sections} /> }
