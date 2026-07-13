import type { Metadata } from "next"
import { OurWorkReviews } from "@/components/our-work-reviews"
import { GallerySection } from "@/components/gallery/gallery-section"
import { ContactCta } from "@/components/contact-cta"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: `Our Work & Customer Reviews | ${siteConfig.shortName}`,
  description:
    "Read genuine customer experiences from homeowners across Rishikesh, Haridwar, Dehradun, Raiwala, Tapovan, Doiwala and nearby areas. Discover why customers trust Home Care Repair Services for RO, AC, appliance repair, electrical work, and more.",
}

export default function OurWorkPage() {
  return (
    <>
      <section className="px-4 pt-8 sm:pt-10">
        <div className="max-w-6xl mx-auto text-center mb-6">
          <h1 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
            Our Work &amp; Customer Reviews in Rishikesh, Haridwar &amp; Dehradun
          </h1>
        </div>
        <div className="max-w-6xl mx-auto">
          <GallerySection />
        </div>
      </section>

      {/* Reviews below */}
      <OurWorkReviews />

      <ContactCta />
    </>
  )
}
