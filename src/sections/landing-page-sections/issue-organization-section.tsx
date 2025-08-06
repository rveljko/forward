import { organizeFeatures } from '@data/features'
import FeatureCellsList from '@landing-page-components/feature-cells-list'
import FilterSortBentoCard from '@landing-page-components/filter-sort-bento-card'
import PerformanceBentoCard from '@landing-page-components/performance-bento-card'
import SearchBentoCard from '@landing-page-components/search-bento-card'
import TextFormattingBentoCard from '@landing-page-components/text-formatting-bento-card'
import Section from '@landing-page-sections/section'

export default function IssueOrganizationSection() {
  return (
    <Section>
      <Section.Heading>Organize Your Issues Effectively</Section.Heading>
      <Section.Paragraph>
        Utilize these features to filter, edit, and communicate seamlessly
        within your project
      </Section.Paragraph>
      <Section.Grid className="lg:grid-cols-3">
        <Section.CardAnimator delay={0.2} className="lg:col-span-1">
          <TextFormattingBentoCard />
        </Section.CardAnimator>
        <Section.CardAnimator delay={0.3} className="lg:col-span-2">
          <FilterSortBentoCard />
        </Section.CardAnimator>
        <Section.CardAnimator delay={0.4} className="lg:col-span-2">
          <SearchBentoCard />
        </Section.CardAnimator>
        <Section.CardAnimator delay={0.5} className="lg:col-span-1">
          <PerformanceBentoCard />
        </Section.CardAnimator>
      </Section.Grid>
      <FeatureCellsList features={organizeFeatures} delay={0.6} />
    </Section>
  )
}
