import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { serviceCategoriesData, type ServiceCategorySlug } from "@/lib/data/service-categories"
import { ServiceCategoryTemplate } from "@/components/services/service-category-template"
import { siteConfig } from "@/lib/site"

// 1. Tell Next.js to pre-build these 7 pages at compile time for max SEO speed
export function generateStaticParams() {
  return Object.keys(serviceCategoriesData).map((category) => ({
    category,
  }))
}

// 2. Define async params type for Next.js 15+
type PageProps = {
  params: Promise<{ category: string }>
}

// 3. Generate unique SEO meta tags for each of the 7 categories dynamically
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params
  const data = serviceCategoriesData[category as ServiceCategorySlug]

  if (!data) return {}

  return {
    title: `${data.metaTitle} | ${siteConfig.shortName}`,
    description: data.metaDescription,
    alternates: {
      canonical: `/services/${category}`,
    },
  }
}

// 4. Render the page using our premium UI template
export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params
  const data = serviceCategoriesData[category as ServiceCategorySlug]

  // If someone types a fake URL like /services/plumbing, show 404
  if (!data) {
    notFound()
  }

  return <ServiceCategoryTemplate data={data} />
}
