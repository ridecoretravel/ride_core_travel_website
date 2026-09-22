import type { Metadata } from 'next'
import Link from 'next/link'
import BookingForm from '@/components/home/BookingForm'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Book an Airport Transfer | Ridecore Travel Leeds',
  description: 'Get a fixed-price quote for your airport transfer from Leeds. No payment now. Reply as soon as possible.',
  alternates: { canonical: '/booking' },
}

export default function BookingPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Book a Transfer', item: `${SITE_URL}/booking` },
    ],
  }

  return (
    <div className="min-h-screen bg-graphite pt-[72px]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-grey">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-cream/60">Book a Transfer</span>
        </div>
      </div>
      <BookingForm />
    </div>
  )
}
