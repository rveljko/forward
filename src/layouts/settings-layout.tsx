import SettingsSidebarSkeleton from '@dashboard-components/skeletons/settings-sidebar-skeleton'
import { lazy, Suspense } from 'react'
import { Outlet } from 'react-router'
const SettingsSidebar = lazy(
  () => import('@dashboard-components/settings-sidebar')
)

export default function SettingsLayout() {
  return (
    <div className="relative flex h-full overflow-hidden">
      <Suspense fallback={<SettingsSidebarSkeleton />}>
        <SettingsSidebar />
      </Suspense>
      <div className="w-full overflow-y-auto p-4">
        <div className="max-w-200">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
