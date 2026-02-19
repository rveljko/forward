import CustomersSection from '@/sections/customers-section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Customers',
  description:
    'Solo users and small teams rely on us. Simple, secure, reliable, and built for real work always',
}

export default function Customers() {
  return <CustomersSection />
}
