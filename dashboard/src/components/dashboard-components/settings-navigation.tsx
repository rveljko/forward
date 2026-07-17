import SettingsNavigationLink from '@dashboard-components/settings-navigation-link'
import AppWindowIcon from '@icons/app-window-icon'
import LockPasswordIcon from '@icons/lock-password-icon'
import SparklesIcon from '@icons/sparkles-icon'
import UserIcon from '@icons/user-icon'

export default function SettingsNavigation() {
  return (
    <nav className="w-0 min-w-full overflow-x-auto py-4">
      <ul className="flex">
        <li>
          <SettingsNavigationLink
            to="/settings/profile"
            leftIcon={<UserIcon />}
          >
            My Profile
          </SettingsNavigationLink>
        </li>
        <li>
          <SettingsNavigationLink
            to="/settings/security"
            leftIcon={<LockPasswordIcon />}
          >
            Security
          </SettingsNavigationLink>
        </li>
        <li>
          <SettingsNavigationLink
            to="/settings/preferences"
            leftIcon={<SparklesIcon />}
          >
            Preferences
          </SettingsNavigationLink>
        </li>
        <li>
          <SettingsNavigationLink
            to="/settings/integrations"
            leftIcon={<AppWindowIcon />}
          >
            Integrations
          </SettingsNavigationLink>
        </li>
      </ul>
    </nav>
  )
}
