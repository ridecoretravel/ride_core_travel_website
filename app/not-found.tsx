import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Page Not Found | Ridecore Travel',
  description: 'The page you were looking for could not be found. Return home or get a fixed-price airport transfer quote from Ridecore Travel.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-charcoal pt-[72px] px-4">
      <div className="max-w-lg mx-auto text-center flex flex-col items-center gap-6 py-16">
        <span className="text-gold text-xs font-semibold tracking-widest uppercase">404 Error</span>
        <h1 className="text-3xl md:text-4xl font-bold text-cream tracking-tight">
          Page Not Found
        </h1>
        <p className="text-grey leading-relaxed">
          The page you were looking for doesn&apos;t exist or may have moved. Check the address, or use one
          of the links below to get back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-2">
          <Link
            href="/"
            className="bg-gold text-charcoal font-semibold px-7 py-4 rounded-sm text-center tracking-wide hover:bg-gold/90 transition-colors text-sm"
          >
            Back to Homepage
          </Link>
          <Link
            href="/booking"
            className="border border-cream/40 text-cream font-semibold px-7 py-4 rounded-sm text-center tracking-wide hover:border-cream hover:bg-cream/5 transition-colors text-sm"
          >
            Get a Quote
          </Link>
        </div>
        <Link href="/airport-transfers" className="text-grey text-sm hover:text-gold transition-colors mt-1">
          View all airport transfer routes →
        </Link>
        <p className="text-grey text-xs mt-4">
          Need help now? Call {site.phone} — we&apos;re available 24/7.
        </p>
      </div>
    </div>
  )
}
