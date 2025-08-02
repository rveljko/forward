import { learningFeatures } from '@data/features'
import CollaborationBentoCard from '@landing-page-components/collaboration-bento-card'
import DraftBentoCard from '@landing-page-components/draft-bento-card'
import FeatureCellsList from '@landing-page-components/feature-cells-list'
import HelpCenterBentoCard from '@landing-page-components/help-center-bento-card'
import SecurityBentoCard from '@landing-page-components/security-bento-card'
import Section from '@landing-page-sections/section'

export default function LearningCollaborationSection() {
  return (
    <Section>
      <Section.Heading>
        Learn and Collaborate with Ease and Productivity
      </Section.Heading>
      <Section.Paragraph>
        Explore helpful resources that guide you through using Forward
        effectively
      </Section.Paragraph>
      <div className="mb-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <Section.CardAnimator delay={0.2} className="lg:col-span-2">
          <CollaborationBentoCard />
        </Section.CardAnimator>
        <Section.CardAnimator delay={0.3} className="lg:col-span-1">
          <DraftBentoCard />
        </Section.CardAnimator>
        <Section.CardAnimator delay={0.4} className="lg:col-span-1">
          <SecurityBentoCard />
        </Section.CardAnimator>
        <Section.CardAnimator delay={0.5} className="lg:col-span-2">
          <HelpCenterBentoCard />
        </Section.CardAnimator>
      </div>
      <FeatureCellsList features={learningFeatures} delay={0.6} />
    </Section>
  )
}
