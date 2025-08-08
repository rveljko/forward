import { integrations } from '@data/integrations'
import CompanyCardsList from '@landing-page-components/company-cards-list'
import Section from '@landing-page-sections/section'

export default function IntegrationsSection() {
  return (
    <Section>
      <Section.Heading1>
        Enhance Your Workflow with Effortless Tool Connections and Integrations
      </Section.Heading1>
      <Section.Paragraph className="mx-0 text-left">
        Maximize your productivity by integrating our platform with the tools
        you already use daily
      </Section.Paragraph>
      <CompanyCardsList
        companies={integrations.map(
          ({ id, name, description, bigLogoUrl }) => ({
            id: id.toString(),
            name,
            description,
            imageUrl: bigLogoUrl,
          })
        )}
        delay={0.2}
      />
    </Section>
  )
}
