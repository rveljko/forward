import { IMAGE_PATH } from '@utils/constants'
import { Integration } from '@utils/types'

export const integrations: Integration[] = [
  {
    id: 1,
    name: 'CoinCastle',
    description: 'Web-based SaaS for tracking crypto, nfts and stocks',
    logoUrl: `${IMAGE_PATH}coincastle-logo.svg`,
    isActive: true,
  },
  {
    id: 2,
    name: 'Reply',
    description: 'Web-based SaaS for online personal banking',
    logoUrl: `${IMAGE_PATH}reply-logo.svg`,
    isActive: true,
  },
  {
    id: 3,
    name: 'Aven',
    description: 'Home equity-backed credit cards for affordable financing',
    logoUrl: `${IMAGE_PATH}aven-logo.svg`,
    isActive: false,
  },
  {
    id: 4,
    name: 'Acme',
    description: 'Manufacturing solutions and high-quality products',
    logoUrl: `${IMAGE_PATH}acme-logo.svg`,
    isActive: false,
  },
  {
    id: 5,
    name: 'Kanba',
    description: 'Enhances team productivity and project management',
    logoUrl: `${IMAGE_PATH}kanba-logo.svg`,
    isActive: false,
  },
  {
    id: 6,
    name: 'Earth2.0',
    description: 'Develops sustainable technologies for a greener planet',
    logoUrl: `${IMAGE_PATH}earth2.0-logo.svg`,
    isActive: false,
  },
]
