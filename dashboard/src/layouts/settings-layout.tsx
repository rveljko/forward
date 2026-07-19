import SettingsHeaderSkeleton from '@dashboard-components/skeletons/settings-header-skeleton'
import SettingsNavigationSkeleton from '@dashboard-components/skeletons/settings-navigation-skeleton'
import Divider from '@dashboard-components/ui/divider'
import { lazy, Suspense } from 'react'
import { Outlet } from 'react-router'
const SettingsHeader = lazy(
  () => import('@dashboard-components/settings-header')
)
const SettingsNavigation = lazy(
  () => import('@dashboard-components/settings-navigation')
)

export default function SettingsLayout() {
  return (
    <div className="w-full max-w-200 p-4">
      <Suspense fallback={<SettingsHeaderSkeleton />}>
        <SettingsHeader />
      </Suspense>
      <Divider />
      <Suspense fallback={<SettingsNavigationSkeleton />}>
        <SettingsNavigation />
      </Suspense>
      <Divider />
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  )
}
