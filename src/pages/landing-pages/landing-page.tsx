import FeaturesOverviewSection from '@landing-page-sections/features-overview-section'
import HeroSection from '@landing-page-sections/hero-section'
import IssueOrganizationSection from '@landing-page-sections/issue-organization-section'
import PersonalizationSection from '@landing-page-sections/personalization-section'

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <FeaturesOverviewSection />
      <IssueOrganizationSection />
      <PersonalizationSection />
    </>
  )
}
