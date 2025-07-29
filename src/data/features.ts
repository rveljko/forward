import AdjustmentsIcon from '@icons/adjustments-icon'
import BoltIcon from '@icons/bolt-icon'
import ClockIcon from '@icons/clock-icon'
import CompassIcon from '@icons/compass-icon'
import DatabaseIcon from '@icons/database-icon'
import DeviceMobileIcon from '@icons/device-mobile-icon'
import MessageIcon from '@icons/message-icon'
import MouseIcon from '@icons/mouse-icon'
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

export const personalizationFeatures: Feature[] = [
  {
    id: uuidv4(),
    title: 'Simplified Tasks.',
    description: 'Complete actions quickly with just one click',
    icon: MouseIcon,
  },
  {
    id: uuidv4(),
    title: 'Instant Insights.',
    description: 'Receive immediate updates as data is processed live',
    icon: ClockIcon,
  },
  {
    id: uuidv4(),
    title: 'Protect Your Information.',
    description: 'Ensure critical data is safeguarded against loss',
    icon: DeviceMobileIcon,
  },
  {
    id: uuidv4(),
    title: 'Designed for You.',
    description: 'Enjoy a platform built around user needs and preferences',
    icon: CompassIcon,
  },
  {
    id: uuidv4(),
    title: 'Secure Your Data.',
    description: 'Automatically back up information for peace of mind',
    icon: DatabaseIcon,
  },
  {
    id: uuidv4(),
    title: 'Collaborative Learning Hub.',
    description: 'Access resources and connect with fellow users',
    icon: MessageIcon,
  },
]
