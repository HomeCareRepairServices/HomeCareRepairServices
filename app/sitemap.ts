import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"
import { areas } from "@/lib/data/areas"
import { services } from "@/lib/data/services"
export default function sitemap(): MetadataRoute.Sitemap { const routes = ["", "/services", "/areas", "/about", "/our-work-and-reviews", "/blog", "/contact", "/faq", "/privacy-policy", "/terms-and-conditions"]; return [...routes.map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date() })), ...areas.map((a) => ({ url: `${siteConfig.url}/areas/${a.slug}`, lastModified: new Date() })), ...services.map((s) => ({ url: `${siteConfig.url}/services/${s.category}/${s.slug}`, lastModified: new Date() }))] }
