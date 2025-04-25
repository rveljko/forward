import SettingsSidebar from '@dashboard-components/settings-sidebar'
import { Outlet } from 'react-router'

export default function SettingsLayout() {
  return (
    <div className="relative flex h-full">
      <SettingsSidebar />
      <div className="m-4 w-full max-w-200">
        <Outlet />
      </div>
    </div>
  )
}
