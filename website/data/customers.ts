import AticaLogo from '@/components/customers/atica-logo'
import GoldlineLogo from '@/components/customers/goldline-logo'
import HooksLogo from '@/components/customers/hooks-logo'
import KyanLogo from '@/components/customers/kyan-logo'
import LightAiLogo from '@/components/customers/light-ai-logo'
import LivaLogo from '@/components/customers/liva-logo'

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
