import { Hero } from "@/components/home/hero"
import { ServiceCategories } from "@/components/home/service-categories"
import { PopularServices } from "@/components/home/popular-services"
import { ServiceAreas } from "@/components/home/service-areas"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { GalleryPreview } from "@/components/home/gallery-preview"
import { Testimonials } from "@/components/home/testimonials"
import { FaqPreview } from "@/components/home/faq-preview"
import { ContactCta } from "@/components/contact-cta"
import { LocalBusinessSchema } from "@/components/schema"

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <Hero />
      <ServiceCategories />
      <PopularServices />
      <ServiceAreas />
      <WhyChooseUs />
      <GalleryPreview />
      <Testimonials />
      <FaqPreview />
      <ContactCta />
    </>
  )
}
