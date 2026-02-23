import TermsOfServiceSection from '@/sections/terms-of-service-section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Local app use only. No warranties, limited liability. Lawful use required, total control always',
}

export default function TermsOfService() {
  return <TermsOfServiceSection />
}
