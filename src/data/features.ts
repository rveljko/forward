import AdjustmentsIcon from '@icons/adjustments-icon'
import BoltIcon from '@icons/bolt-icon'
import PaletteIcon from '@icons/palette-icon'
import { Feature } from '@utils/types'
import { v4 as uuidv4 } from 'uuid'

export const overviewFeatures: Feature[] = [
  {
    id: uuidv4(),
    title: 'Fast and Efficient.',
    description: 'Experience rapid loading times and smooth interactions',
    icon: BoltIcon,
  },
  {
    id: uuidv4(),
    title: 'Intuitive Navigation.',
    description: 'Enjoy seamless navigation designed for user satisfaction',
    icon: AdjustmentsIcon,
  },
  {
    id: uuidv4(),
    title: 'Sleek Design.',
    description: 'Engage with an aesthetically pleasing interface every day',
    icon: PaletteIcon,
  },
]
