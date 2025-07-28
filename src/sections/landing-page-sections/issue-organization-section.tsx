import { organizeFeatures } from '@data/features'
import FeatureCellsList from '@landing-page-components/feature-cells-list'
import FilterSortBentoCard from '@landing-page-components/filter-sort-bento-card'
import PerformanceBentoCard from '@landing-page-components/performance-bento-card'
import SearchBentoCard from '@landing-page-components/search-bento-card'
import TextFormattingBentoCard from '@landing-page-components/text-formatting-bento-card'
import Section from '@landing-page-sections/section'

export default function IssueOrganizationSection() {
  return (
    <Section className="[--background:linear-gradient(hsl(from_var(--color-landing-page-background-color)_h_s_l_/_0%),hsl(from_var(--color-landing-page-background-color)_h_s_l_/_80%),var(--color-landing-page-background-color),hsl(from_var(--color-landing-page-background-color)_h_s_l_/_80%),hsl(from_var(--color-landing-page-background-color)_h_s_l_/_0%)),radial-gradient(hsl(from_var(--color-clickable)_h_s_l_/_5%),var(--color-landing-page-background-color))]">
      <Section.Heading>Organize Your Issues Effectively</Section.Heading>
      <Section.Paragraph>
        Utilize these features to filter, edit, and communicate seamlessly
        within your project
      </Section.Paragraph>
      <div className="mb-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
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
      </div>
      <FeatureCellsList features={organizeFeatures} delay={0.6} />
    </Section>
  )
}
