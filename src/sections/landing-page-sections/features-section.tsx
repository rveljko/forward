import {
  learningFeatures,
  organizeFeatures,
  overviewFeatures,
  personalizationFeatures,
} from '@data/features'
import CollaborationBentoCard from '@landing-page-components/collaboration-bento-card'
import CreateNewIssueBentoCard from '@landing-page-components/create-new-issue-bento-card'
import DraftBentoCard from '@landing-page-components/draft-bento-card'
import FeatureCellsList from '@landing-page-components/feature-cells-list'
import FilterSortBentoCard from '@landing-page-components/filter-sort-bento-card'
import HelpCenterBentoCard from '@landing-page-components/help-center-bento-card'
import IntegrationsBentoCard from '@landing-page-components/integrations-bento-card'
import IssueInformationBentoCard from '@landing-page-components/issue-information-bento-card'
import KeyboardShortcutsBentoCard from '@landing-page-components/keyboard-shortcuts-bento-card'
import PerformanceBentoCard from '@landing-page-components/performance-bento-card'
import SearchBentoCard from '@landing-page-components/search-bento-card'
import SecurityBentoCard from '@landing-page-components/security-bento-card'
import TextFormattingBentoCard from '@landing-page-components/text-formatting-bento-card'
import ThemesBentoCard from '@landing-page-components/themes-bento-card'
import ViewsBentoCard from '@landing-page-components/views-bento-card'
import Section from '@landing-page-sections/section'

export default function FeaturesSection() {
  return (
    <Section>
      <Section.Heading1>
        Discover Powerful Tools That Transform Your Project Management
      </Section.Heading1>
      <Section.Paragraph className="mx-0 text-left">
        Unlock the full potential of your projects with our comprehensive
        management features designed for efficiency
      </Section.Paragraph>
      <Section.Grid className="lg:grid-cols-6">
        <Section.CardAnimator delay={0.2} className="lg:col-span-4">
          <CreateNewIssueBentoCard />
        </Section.CardAnimator>
        <Section.CardAnimator delay={0.3} className="lg:col-span-2">
          <IssueInformationBentoCard />
        </Section.CardAnimator>
        <Section.CardAnimator delay={0.4} className="lg:col-span-2">
          <IntegrationsBentoCard />
        </Section.CardAnimator>
        <Section.CardAnimator delay={0.5} className="lg:col-span-4">
          <KeyboardShortcutsBentoCard />
        </Section.CardAnimator>
        <Section.CardAnimator delay={0.6} className="lg:col-span-2">
          <TextFormattingBentoCard />
        </Section.CardAnimator>
        <Section.CardAnimator delay={0.7} className="lg:col-span-4">
          <FilterSortBentoCard />
        </Section.CardAnimator>
        <Section.CardAnimator delay={0.8} className="lg:col-span-4">
          <SearchBentoCard />
        </Section.CardAnimator>
        <Section.CardAnimator delay={0.9} className="lg:col-span-2">
          <PerformanceBentoCard />
        </Section.CardAnimator>
        <Section.CardAnimator delay={1} className="lg:col-span-3">
          <ThemesBentoCard />
        </Section.CardAnimator>
        <Section.CardAnimator delay={1.1} className="lg:col-span-3">
          <ViewsBentoCard />
        </Section.CardAnimator>
        <Section.CardAnimator delay={1.2} className="lg:col-span-4">
          <CollaborationBentoCard />
        </Section.CardAnimator>
        <Section.CardAnimator delay={1.3} className="lg:col-span-2">
          <DraftBentoCard />
        </Section.CardAnimator>
        <Section.CardAnimator delay={1.4} className="lg:col-span-2">
          <SecurityBentoCard />
        </Section.CardAnimator>
        <Section.CardAnimator delay={1.5} className="lg:col-span-4">
          <HelpCenterBentoCard />
        </Section.CardAnimator>
      </Section.Grid>
      <FeatureCellsList
        features={[
          ...overviewFeatures,
          ...organizeFeatures,
          ...personalizationFeatures,
          ...learningFeatures,
        ]}
        delay={1.6}
      />
    </Section>
  )
}
