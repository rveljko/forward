import Sidebar from '@dashboard-components/sidebar'
import { usePreferences } from '@services/contexts/preferences-context'
import { Outlet } from 'react-router'

export default function DashboardLayout() {
  const { preferences, getRemCornerRoundness } = usePreferences()

  return (
    <div
      className={`relative flex h-screen overflow-hidden ${preferences.isRightSideSidebar ? 'flex-row-reverse' : 'flex-row'}`}
    >
      <div
        className={`animate-scale-fade-in origin-center ${
          preferences.sidebarStyle === 'floating'
            ? `h-full p-4 ${preferences.isRightSideSidebar ? 'pl-0' : 'pr-0'}`
            : ''
        }`}
      >
        <Sidebar />
      </div>
      <div
        className={`animate-scale-fade-in w-full p-4 ${preferences.isRightSideSidebar ? 'origin-right' : 'origin-left'} ${preferences.sidebarStyle === 'transparent' ? (preferences.isRightSideSidebar ? 'pr-0' : 'pl-0') : ''}`}
      >
        <main
          style={{
            borderRadius: preferences.areRoundedCorners
              ? getRemCornerRoundness()
              : 0,
          }}
          className="border-section-outline bg-section-background-color h-full overflow-y-auto border"
        >
          <Outlet />
        </main>
      </div>
    </div>
  )
}
