import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileStickyBar from '@/components/MobileStickyBar'
import ScrollToTop from '@/components/ScrollToTop'
import { SITE_URL } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Airport Transfers Leeds | 8-Seater Mercedes Vito | Ridecore Travel',
  description:
    'Fixed-price 24/7 airport transfers from Leeds. Premium 8-seater Mercedes Vito. Licensed by Leeds City Council. Leeds Bradford, Manchester, Heathrow & all UK airports.',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: 'Fixed-Price Airport Transfers from Leeds | Ridecore Travel',
    description:
      'Premium 8-seater Mercedes Vito airport transfers from Leeds. Fixed fares, 24/7, fully licensed.',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/og/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fixed-Price Airport Transfers from Leeds | Ridecore Travel',
    description: 'Premium 8-seater Mercedes Vito airport transfers, 24/7.',
    images: ['/images/og/og-image.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body className="bg-charcoal text-cream antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileStickyBar />
        <ScrollToTop />
      </body>
    </html>
  )
}
