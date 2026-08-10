import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { posts, getPostBySlug } from '@/lib/posts'
import RouteFAQ from '@/components/RouteFAQ'
import { SITE_URL } from '@/lib/site'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.publishDate,
      images: [{ url: post.featuredImage, width: 1200, height: 675 }],
    },
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: `${SITE_URL}${post.featuredImage}`,
    datePublished: post.publishDate,
    author: { '@type': 'Organization', name: 'Ridecore Travel' },
    publisher: {
      '@type': 'Organization',
      name: 'Ridecore Travel',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/brand/ridecore-travel-logo.svg` },
    },
    description: post.metaDescription,
    url: `${SITE_URL}/blog/${post.slug}`,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-graphite border-b border-white/8 pt-[72px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-grey flex-wrap">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-cream/60 truncate max-w-[200px]">{post.title}</span>
        </div>
      </div>

      {/* Featured image */}
      <div className="relative h-[320px] md:h-[480px] overflow-hidden">
        <Image
          src={post.featuredImage}
          alt={post.featuredImageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
      </div>

      {/* Post header */}
      <section className="bg-charcoal pt-10 pb-0">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-gold" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Blog</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-cream tracking-tight leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-grey text-sm">
            {formatDate(post.publishDate)} · {post.readTime}
          </p>
          <div className="mt-6 border-t border-white/8" />
        </div>
      </section>

      {/* Post body */}
      <article className="bg-charcoal py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
          {post.body.map((section, i) => {
            if (section.type === 'intro') {
              return (
                <p key={i} className="text-cream/80 text-lg leading-relaxed font-light border-l-2 border-gold pl-5">
                  {section.content}
                </p>
              )
            }
            if (section.type === 'h2') {
              return (
                <div key={i} className="flex flex-col gap-3">
                  <h2 className="text-cream text-xl font-semibold">{section.heading}</h2>
                  <p className="text-grey text-base leading-relaxed">{section.content}</p>
                </div>
              )
            }
            if (section.type === 'p') {
              return <p key={i} className="text-grey text-base leading-relaxed">{section.content}</p>
            }
            return null
          })}

          {/* Inline CTA */}
          <div className="my-4 bg-graphite border border-gold/20 rounded-sm p-6 flex flex-col gap-4">
            <div>
              <h3 className="text-cream font-semibold text-lg mb-1">Need a stress-free transfer to the airport?</h3>
              <p className="text-grey text-sm">Get a fixed price in minutes — no surge pricing, no surprises.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/booking"
                className="bg-gold text-charcoal text-sm font-semibold px-5 py-2.5 rounded-sm tracking-wide hover:bg-gold/90 transition-colors"
              >
                Get a Quote
              </Link>
              <Link
                href="/airport-transfers/leeds-to-heathrow"
                className="text-gold text-sm font-semibold px-5 py-2.5 rounded-sm border border-gold/40 hover:border-gold transition-colors"
              >
                See Heathrow fares →
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <RouteFAQ faqs={post.faqs} />

      {/* Back to blog */}
      <section className="bg-charcoal py-12 border-t border-white/8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link href="/blog" className="flex items-center gap-2 text-gold text-sm font-semibold hover:gap-3 transition-all">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Blog
          </Link>
          <Link href="/#fares" className="text-grey text-sm hover:text-gold transition-colors">
            View all fixed fares →
          </Link>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </>
  )
}
