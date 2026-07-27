import { Hero } from "@/components/home/hero"
import { HowItWorks } from "@/components/home/how-it-works"
import { ServiceExplorer } from "@/components/services/ServiceExplorer"
import { LocationsCarousel } from "@/components/services/locations-carousel"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { Testimonials } from "@/components/home/testimonials"
import { FaqPreview } from "@/components/home/faq-preview"
import { ContactCta } from "@/components/contact-cta"
import { LocalBusinessSchema } from "@/components/schema"

export default function Home() {
  return (
    <>
      {/* JSON-LD for Local Business SEO */}
      <LocalBusinessSchema />

      {/* 1. Hero Section (Includes Trust Indicators) */}
      <Hero />

      {/* 2. How It Works */}
      <HowItWorks />

      {/* 3. What Do You Need Fixed? (Service Explorer Accordion) */}
      <ServiceExplorer />

      {/* 4. Why Choose Us */}
      <WhyChooseUs />

      {/* 5. Areas We Work */}
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

      {/* 6. Customer Reviews */}
      <Testimonials />

      {/* 7. FAQ Section */}
      <FaqPreview />

      {/* 8. Final CTA */}
      <ContactCta />
    </>
  )
}
