import Sidebar from '@dashboard-components/sidebar'
import { usePreferences } from '@services/contexts/preferences-context'
import { Outlet } from 'react-router'

export default function DashboardLayout() {
  const { preferences, getCornerRoundness } = usePreferences()
  const cornerRoundness = getCornerRoundness(preferences.cornerRoundness)

  return (
    <div
      className={`relative flex h-screen overflow-hidden ${preferences.isRightSideSidebar ? 'flex-row-reverse' : 'flex-row'}`}
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
        <main
          style={{ borderRadius: `${cornerRoundness.value / 16}rem` }}
          className="border-section-outline bg-section-background-color h-full overflow-y-auto border"
        >
          <Outlet />
        </main>
      </div>
    </div>
  )
}
