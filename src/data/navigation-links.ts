import AppWindowIcon from '@icons/app-window-icon'
import BrainIcon from '@icons/brain-icon'
import DocumentIcon from '@icons/document-icon'
import FolderIcon from '@icons/folder-icon'
import InboxIcon from '@icons/inbox-icon'
import LifebuoyIcon from '@icons/lifebuoy-icon'
import LockPasswordIcon from '@icons/lock-password-icon'
import SettingsIcon from '@icons/settings-icon'
import SparklesIcon from '@icons/sparkles-icon'
import UserIcon from '@icons/user-icon'
import { NavigationLink } from '@utils/types'

export const primaryNavigationLinks: NavigationLink[] = [
  {
    id: 1,
    name: 'Issues',
    path: '',
    icon: FolderIcon,
  },
  {
    id: 2,
    name: 'Inbox',
    path: 'inbox',
    icon: InboxIcon,
  },
  {
    id: 3,
    name: 'Drafts',
    path: 'drafts',
    icon: BrainIcon,
  },
]

export const secondaryNavigationLinks: NavigationLink[] = [
  {
    id: 1,
    name: 'Guides',
    path: 'guides',
    icon: DocumentIcon,
  },
  {
    id: 2,
    name: 'Help & Support',
    path: 'help-and-support',
    icon: LifebuoyIcon,
  },
  {
    id: 3,
    name: 'Settings',
    path: 'settings',
    icon: SettingsIcon,
  },
]

export const settingsNavigationLinks: NavigationLink[] = [
  {
    id: 1,
    name: 'My Profile',
    path: '',
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
