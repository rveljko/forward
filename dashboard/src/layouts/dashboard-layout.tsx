import Toaster from '@components/toaster'
import SidebarSkeleton from '@dashboard-components/skeletons/sidebar-skeleton'
import { usePreferences } from '@services/contexts/preferences-context'
import { lazy, Suspense } from 'react'
import { Outlet } from 'react-router'
const Sidebar = lazy(() => import('@dashboard-components/sidebar'))

export default function DashboardLayout() {
  const { preferences, getBorderRadius } = usePreferences()

  return (
    <div
      id="dashboard-layout"
      className={`bg-background-color relative flex h-screen overflow-hidden ${preferences.isRightSideSidebar ? 'flex-row-reverse' : 'flex-row'}`}
    >
      <Toaster />
      <div
        className={`animate-scale-fade-in origin-center ${
          preferences.sidebarStyle === 'floating'
            ? `h-full p-4 ${preferences.isRightSideSidebar ? 'pl-0' : 'pr-0'}`
            : ''
        }`}
      >
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>
      </div>
      <div
        className={`animate-scale-fade-in w-full p-4 ${preferences.isRightSideSidebar ? 'origin-right' : 'origin-left'} ${preferences.sidebarStyle === 'transparent' ? (preferences.isRightSideSidebar ? 'pr-0' : 'pl-0') : ''}`}
      >
        <main
          style={{
            borderRadius: getBorderRadius(),
          }}
          className="border-section-outline bg-section-background-color h-full overflow-y-auto border"
        >
          <Outlet />
        </main>
      </div>
    </div>
  )
}
