import { MetadataRoute } from 'next'
import { routePages } from '@/lib/routes'
import { posts } from '@/lib/posts'
import { SITE_URL as BASE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                       lastModified: new Date('2026-06-20'), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/airport-transfers`, lastModified: new Date('2026-07-30'), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/services`,          lastModified: new Date('2026-07-28'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/about-us`,          lastModified: new Date('2026-07-30'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog`,              lastModified: new Date('2026-06-20'), changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${BASE}/booking`,           lastModified: new Date('2026-07-15'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/fleet`,             lastModified: new Date('2026-07-30'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/terms-conditions`,  lastModified: new Date('2026-07-28'), changeFrequency: 'yearly',  priority: 0.3 },
  ]

  const routePageEntries: MetadataRoute.Sitemap = routePages.map((r) => ({
    url: `${BASE}/airport-transfers/${r.slug}`,
    lastModified: new Date('2026-06-20'),
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
