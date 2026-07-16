import type { Metadata } from 'next'
import BookingForm from '@/components/home/BookingForm'

export const metadata: Metadata = {
  title: 'Book an Airport Transfer | Ridecore Travel Leeds',
  description: 'Get a fixed-price quote for your airport transfer from Leeds. No payment now. Reply as soon as possible.',
  alternates: { canonical: '/booking' },
}

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-graphite pt-[72px]">
      <BookingForm />
    </div>
  )
}
