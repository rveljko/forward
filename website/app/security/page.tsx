import SecurityDetailedSection from '@/sections/security-detailed-section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security',
  description:
    'Data stays encrypted on your device. No servers, no leaks, total privacy control always',
}

export default function Security() {
  return <SecurityDetailedSection />
}
