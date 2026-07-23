import CtaSection from '@/sections/cta-section'
import CustomersCarouselSection from '@/sections/customers-carousel-section'
import GuidesSection from '@/sections/guides-section'
import HeroSection from '@/sections/hero-section'
import SecuritySection from '@/sections/security-section'
import TypesSection from '@/sections/types-section'
import WorkflowSection from '@/sections/workflow-section'

export default function Home() {
  return (
    <>
      <HeroSection />
      <CustomersCarouselSection />
      <WorkflowSection />
      <TypesSection />
      <GuidesSection />
      <SecuritySection />
      <CtaSection />
    </>
  )
}
