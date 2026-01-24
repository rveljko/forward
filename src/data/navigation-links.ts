import AppWindowIcon from '@icons/app-window-icon'
import BrainIcon from '@icons/brain-icon'
import DocumentIcon from '@icons/document-icon'
import FolderIcon from '@icons/folder-icon'
import LifebuoyIcon from '@icons/lifebuoy-icon'
import LockPasswordIcon from '@icons/lock-password-icon'
import SettingsIcon from '@icons/settings-icon'
import SparklesIcon from '@icons/sparkles-icon'
import UserIcon from '@icons/user-icon'
import { NavigationLink } from '@utils/types'

export const primaryNavigationLinks: NavigationLink[] = [
  {
    id: 2,
    name: 'Issues',
    path: '/dashboard/issues',
    icon: FolderIcon,
  },
  {
    id: 3,
    name: 'Drafts',
    path: '/dashboard/drafts',
    icon: BrainIcon,
  },
]

export const secondaryNavigationLinks: NavigationLink[] = [
  {
    id: 1,
    name: 'Guides',
    path: '/dashboard/guides',
    icon: DocumentIcon,
  },
  {
    id: 2,
    name: 'Help & Support',
    path: '/dashboard/help-and-support',
    icon: LifebuoyIcon,
  },
  {
    id: 3,
    name: 'Settings',
    path: '/dashboard/settings/profile',
    icon: SettingsIcon,
  },
]

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
