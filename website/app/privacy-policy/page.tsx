import PrivacyPolicySection from '@/sections/privacy-policy-section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Data stays local on your device. SOC 2, GDPR, ISO 27001 certified. No collection, no sharing, total control always',
}

export default function PrivacyPolicy() {
  return <PrivacyPolicySection />
}
