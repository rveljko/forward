import SettingsHeader from '@dashboard-components/settings-header'
import SettingsNavigation from '@dashboard-components/settings-navigation'
import Divider from '@dashboard-components/ui/divider'
import { Outlet } from 'react-router'

export default function SettingsLayout() {
  return (
    <div className="w-full max-w-200 p-4">
      <SettingsHeader />
      <Divider />
      <SettingsNavigation />
      <Divider />
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  )
}
