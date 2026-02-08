import CustomersCarouselSection from '@/sections/customers-carousel-section'
import HeroSection from '@/sections/hero-section'
import TypesSection from '@/sections/types-section'
import WorkflowSection from '@/sections/workflow-section'

export default function Home() {
  return (
    <>
      <HeroSection />
      <CustomersCarouselSection />
      <WorkflowSection />
      <TypesSection />
    </>
  )
}
