import { MetadataRoute } from 'next'
import { routePages } from '@/lib/routes'
import { posts } from '@/lib/posts'

const BASE = 'https://www.ridecoretravel.co.uk'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                       lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/airport-transfers`, lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/services`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/about-us`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog`,              lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${BASE}/booking`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/terms-conditions`,  lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
  ]

  const routePageEntries: MetadataRoute.Sitemap = routePages.map((r) => ({
    url: `${BASE}/airport-transfers/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  const blogEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.publishDate),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...routePageEntries, ...blogEntries]
}
