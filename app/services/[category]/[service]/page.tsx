import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { serviceCategoriesData, type ServiceCategorySlug } from "@/lib/data/service-categories"
import { ServiceDetailTemplate } from "@/components/services/service-detail-template"
import { siteConfig } from "@/lib/site"

// 1. Pre-build all individual service pages at compile time
export function generateStaticParams() {
  const paths = []
  for (const [catSlug, catData] of Object.entries(serviceCategoriesData)) {
    for (const service of catData.services) {
      paths.push({
        category: catSlug,
        service: service.slug,
      })
    }
  }
  return paths
}

type PageProps = {
  params: Promise<{ category: string; service: string }>
}

// 2. Dynamic SEO tags for individual services
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, service } = await params
  const catData = serviceCategoriesData[category as ServiceCategorySlug]
  const serviceData = catData?.services.find((s) => s.slug === service)

  if (!serviceData) return {}

  const title = `${serviceData.title} in Rishikesh, Haridwar & Dehradun`
  const description = `Expert ${serviceData.title.toLowerCase()} at affordable prices. Same-day doorstep service by verified technicians in Rishikesh, Haridwar, Dehradun, and nearby areas. Book now!`

  return {
    title: `${title} | ${siteConfig.shortName}`,
    description,
    alternates: {
      canonical: `/services/${category}/${service}`,
    },
    openGraph: {
      title,
      description,
      url: `/services/${category}/${service}`,
    },
  }
}

// 3. Render the page
export default async function SubServicePage({ params }: PageProps) {
  const { category, service } = await params
  const catData = serviceCategoriesData[category as ServiceCategorySlug]
  const serviceData = catData?.services.find((s) => s.slug === service)

  // If the URL doesn't match any service, throw 404
  if (!catData || !serviceData) {
    notFound()
  }

  return <ServiceDetailTemplate category={catData} service={serviceData} />
}
