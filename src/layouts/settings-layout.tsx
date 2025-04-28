import SettingsSidebar from '@dashboard-components/settings-sidebar'
import { Outlet } from 'react-router'

export default function SettingsLayout() {
  return (
    <div className="relative flex h-full overflow-hidden">
      <SettingsSidebar />
      <div className="w-full overflow-y-auto p-4">
        <div className="max-w-200">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
