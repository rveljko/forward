import AcmeLogo from '@/components/integrations-logos/acme-logo'
import AvenLogo from '@/components/integrations-logos/aven-logo'
import CoincastleLogo from '@/components/integrations-logos/coincastle-logo'
import Earth20Logo from '@/components/integrations-logos/earth20-logo'
import KanbaLogo from '@/components/integrations-logos/kanba-logo'
import ReplyLogo from '@/components/integrations-logos/reply-logo'

type Integration = {
  name: string
  logo: () => React.JSX.Element
}

export const integrations: Integration[] = [
  {
    name: 'CoinCastle',
    logo: CoincastleLogo,
  },
  {
    name: 'Reply',
    logo: ReplyLogo,
  },
  {
    name: 'Aven',
    logo: AvenLogo,
  },
  {
    name: 'Acme',
    logo: AcmeLogo,
  },
  {
    name: 'Kanba',
    logo: KanbaLogo,
  },
  {
    name: 'Earth 2.0',
    logo: Earth20Logo,
  },
]
