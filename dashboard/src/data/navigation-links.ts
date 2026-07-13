import AppWindowIcon from '@icons/app-window-icon'
import LockPasswordIcon from '@icons/lock-password-icon'
import SparklesIcon from '@icons/sparkles-icon'
import UserIcon from '@icons/user-icon'
import { NavigationLink } from '@utils/types'

export const settingsNavigationLinks: NavigationLink[] = [
  {
    id: 1,
    name: 'My Profile',
    path: 'profile',
    icon: UserIcon,
  },
  {
    id: 2,
    name: 'Security',
    path: 'security',
    icon: LockPasswordIcon,
  },
  {
    id: 3,
    name: 'Preferences',
    path: 'preferences',
    icon: SparklesIcon,
  },
  {
    id: 4,
    name: 'Integrations',
    path: 'integrations',
    icon: AppWindowIcon,
  },
]
