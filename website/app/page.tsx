import CategoriesSection from '@/sections/categories-section'
import CtaSection from '@/sections/cta-section'
import CustomersCarouselSection from '@/sections/customers-carousel-section'
import DraftsSection from '@/sections/drafts-section'
import GuidesSection from '@/sections/guides-section'
import HeroSection from '@/sections/hero-section'
import IssuesSection from '@/sections/issues-section'
import SecuritySection from '@/sections/security-section'
import TasksSection from '@/sections/tasks-section'
import TemplatesSection from '@/sections/templates-section'
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
      <IssuesSection />
      <TemplatesSection />
      <DraftsSection />
      <CategoriesSection />
      <TasksSection />
      <SecuritySection />
      <CtaSection />
    </>
  )
}
