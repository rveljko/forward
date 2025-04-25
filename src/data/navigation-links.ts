import BrainIcon from '@icons/brain-icon'
import DocumentIcon from '@icons/document-icon'
import FolderIcon from '@icons/folder-icon'
import InboxIcon from '@icons/inbox-icon'
import LifebuoyIcon from '@icons/lifebuoy-icon'
import SettingsIcon from '@icons/settings-icon'
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
