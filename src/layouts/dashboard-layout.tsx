import Sidebar from '@dashboard-components/sidebar'
import { usePreferences } from '@services/contexts/preferences-context'
import { Outlet } from 'react-router'

export default function DashboardLayout() {
  const { preferences } = usePreferences()

  return (
    <div
      className={`relative flex h-screen ${preferences.isRightSideSidebar ? 'flex-row-reverse' : 'flex-row'}`}
    >
      <div
        className={
          preferences.sidebarStyle === 'floating'
            ? `h-full p-4 ${preferences.isRightSideSidebar ? 'pl-0' : 'pr-0'}`
            : ''
        }
      >
        <Sidebar />
      </div>
      <div
        className={`w-full p-4 ${preferences.sidebarStyle === 'transparent' ? (preferences.isRightSideSidebar ? 'pr-0' : 'pl-0') : ''}`}
      >
        <main className="border-section-outline bg-section-background-color h-full overflow-y-auto rounded-2xl border">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
