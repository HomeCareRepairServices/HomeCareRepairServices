import type { Metadata } from "next"
import { siteConfig } from "@/lib/site"
import { LegalPage } from "@/components/legal-page"
export const metadata: Metadata = { title: `Privacy Policy | ${siteConfig.name}`, description: "Read the Privacy Policy for Home Care Repair Services and learn how information submitted through the website may be handled." }
const sections = ["Information We May Collect", "How Information May Be Used", "Phone, WhatsApp and Contact Forms", "Cookies and Website Usage", "Data Retention and Security", "Your Choices", "Changes to This Policy", "Contact Information"].map((title) => ({ title, body: title === "Contact Information" ? "For questions about this policy, please use our contact page." : "We use information shared through this website only as needed to respond to service requests, communicate about inquiries and improve the website. Please avoid submitting information that is not needed for your request." }))
export default function PrivacyPage() { return <LegalPage current="Privacy Policy" title="Privacy Policy" intro={`This Privacy Policy explains how ${siteConfig.name} may handle information shared through this website.`} sections={sections} /> }
