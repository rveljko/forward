import { customers } from '@data/customers'
import CompanyCardsList from '@landing-page-components/company-cards-list'
import Section from '@landing-page-sections/section'

export default function CustomersSection() {
  return (
    <Section>
      <Section.Heading1>
        Join a Worldwide Network of Delighted Users and Teams
      </Section.Heading1>
      <Section.Paragraph className="mx-0 text-left">
        Become part of a thriving community that trusts our platform to manage
        their projects effectively
      </Section.Paragraph>
      <CompanyCardsList companies={customers} delay={0.2} />
    </Section>
  )
}
