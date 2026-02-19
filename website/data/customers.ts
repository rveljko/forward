import AticaLogo from '@/components/customers-logos/atica-logo'
import GoldlineLogo from '@/components/customers-logos/goldline-logo'
import HooksLogo from '@/components/customers-logos/hooks-logo'
import KyanLogo from '@/components/customers-logos/kyan-logo'
import LightAiLogo from '@/components/customers-logos/light-ai-logo'
import LivaLogo from '@/components/customers-logos/liva-logo'

type Customer = {
  name: string
  logo: () => React.JSX.Element
}

export const customers: Customer[] = [
  {
    name: 'Atica',
    logo: AticaLogo,
  },
  {
    name: 'Hooks',
    logo: HooksLogo,
  },
  {
    name: 'Liva',
    logo: LivaLogo,
  },
  {
    name: 'Goldline',
    logo: GoldlineLogo,
  },
  {
    name: 'Kyan',
    logo: KyanLogo,
  },
  {
    name: 'Light AI',
    logo: LightAiLogo,
  },
]
