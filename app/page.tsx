import { Hero } from "@/components/home/hero"
import { ServiceCategories } from "@/components/home/service-categories"
import { HowItWorks } from "@/components/home/how-it-works"
import { PopularServices } from "@/components/home/popular-services"
import { LocationsCarousel } from "@/components/services/locations-carousel"
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
      <HowItWorks />
      <PopularServices />
{/* Premium Animated Locations Carousel */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-4 mb-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Areas We Serve
          </h2>
          <p className="mt-2 text-muted-foreground">
            Fast, reliable home repair services across the region.
          </p>
        </div>
        <LocationsCarousel />
      </section> 
      <WhyChooseUs />
      <GalleryPreview />
      <Testimonials />
      <FaqPreview />
      <ContactCta />
    </>
  )
}
