import { overviewFeatures } from '@data/features'
import CreateNewIssueBentoCard from '@landing-page-components/create-new-issue-bento-card'
import FeatureCellsList from '@landing-page-components/feature-cells-list'
import IntegrationsBentoCard from '@landing-page-components/integrations-bento-card'
import IssueInformationBentoCard from '@landing-page-components/issue-information-bento-card'
import KeyboardShortcutsBentoCard from '@landing-page-components/keyboard-shortcuts-bento-card'
import Section from '@landing-page-sections/section'

export default function FeaturesOverviewSection() {
  return (
    <Section>
      <Section.Heading2>
        Essential Features for Effective Management
      </Section.Heading2>
      <Section.Paragraph>
        Discover how Forward can transform your project management experience
        with these powerful tools
      </Section.Paragraph>
      <Section.Grid className="lg:grid-cols-3">
        <Section.CardAnimator delay={0.2} className="lg:col-span-2">
          <CreateNewIssueBentoCard />
        </Section.CardAnimator>
        <Section.CardAnimator delay={0.3} className="lg:col-span-1">
          <IssueInformationBentoCard />
        </Section.CardAnimator>
        <Section.CardAnimator delay={0.4} className="lg:col-span-1">
          <IntegrationsBentoCard />
        </Section.CardAnimator>
        <Section.CardAnimator delay={0.5} className="lg:col-span-2">
          <KeyboardShortcutsBentoCard />
        </Section.CardAnimator>
      </Section.Grid>
      <FeatureCellsList features={overviewFeatures} delay={0.6} />
    </Section>
  )
}
