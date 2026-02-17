import CloudOffIcon from '@/icons/cloud-off-icon'
import DeviceDesktopIcon from '@/icons/device-desktop-icon'
import GitBranchIcon from '@/icons/git-branch-icon'
import LockIcon from '@/icons/lock-icon'
import PasswordIcon from '@/icons/password-icon'
import ShieldIcon from '@/icons/shield-icon'

type Feature = {
  icon: () => React.JSX.Element
  title: string
  description: string
}

export const securityFeatures: Feature[] = [
  {
    icon: LockIcon,
    title: 'End-to-End Encryption',
    description: 'All data encrypted client-side before storage',
  },
  {
    icon: DeviceDesktopIcon,
    title: 'Local Device Storage',
    description: 'Work stays on your device, never uploaded',
  },
  {
    icon: CloudOffIcon,
    title: 'No External Servers',
    description: 'Zero cloud sync, complete privacy control',
  },
  {
    icon: ShieldIcon,
    title: 'Private by Design',
    description: 'No tracking, no accounts, no data sharing',
  },
  {
    icon: GitBranchIcon,
    title: 'Open Source Code',
    description: 'All data encrypted client-side before storage',
  },
  {
    icon: PasswordIcon,
    title: 'Zero Knowledge Proof',
    description: "Even we can't access your encrypted content",
  },
]
