import NotFoundSection from '@/sections/not-found-section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: "Sorry, the page you're looking for isn't here right now",
}

export default function NotFound() {
  return <NotFoundSection />
}
