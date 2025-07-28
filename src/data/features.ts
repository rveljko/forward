import AdjustmentsIcon from '@icons/adjustments-icon'
import BoltIcon from '@icons/bolt-icon'
import DeviceMobileIcon from '@icons/device-mobile-icon'
import PaletteIcon from '@icons/palette-icon'
import UploadIcon from '@icons/upload-icon'
import UserIcon from '@icons/user-icon'
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

export const organizeFeatures: Feature[] = [
  {
    id: uuidv4(),
    title: 'Easy File Management.',
    description: 'Upload images and files effortlessly within the platform',
    icon: UploadIcon,
  },
  {
    id: uuidv4(),
    title: 'Personal Profile Settings.',
    description: 'Adjust your profile to reflect your preferences easily',
    icon: UserIcon,
  },
  {
    id: uuidv4(),
    title: 'Stay Productive On-the-Go.',
    description: 'Access all features through our dedicated mobile app',
    icon: DeviceMobileIcon,
  },
]