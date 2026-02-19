import IntegrationsSection from '@/sections/integrations-section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Integrations',
  description:
    'Link apps and services locally. No cloud sync, no accounts, full workflow control always',
}

export default function Integrations() {
  return <IntegrationsSection />
}
