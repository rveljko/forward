import { integrations } from '@data/integrations'
import BentoCard from '@landing-page-components/ui/bento-card'
import Switch from '@ui/switch'

export default function IntegrationsBentoCard() {
  return (
    <BentoCard>
      <BentoCard.Heading>Seamless Tool Integration</BentoCard.Heading>
      <BentoCard.Paragraph>
        Connect with your favorite tools to boost workflows and enhance
        productivity
      </BentoCard.Paragraph>
      <ul className="divide-section-outline mt-auto divide-y">
        {integrations.slice(0, 4).map(({ id, name, logoUrl, isActive }) => (
          <li key={id} className="flex items-start justify-between p-2">
            <div className="flex items-start gap-2">
              <img src={logoUrl} alt={name} className="size-7" />
              <h4>{name}</h4>
            </div>
            <Switch defaultChecked={isActive} />
          </li>
        ))}
      </ul>
    </BentoCard>
  )
}
