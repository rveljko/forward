import Toaster from '@components/toaster'
import SidebarSkeleton from '@dashboard-components/skeletons/sidebar-skeleton'
import { usePreferences } from '@services/contexts/preferences-context'
import { motion } from 'motion/react'
import { lazy, Suspense } from 'react'
import { Outlet } from 'react-router'
const Sidebar = lazy(() => import('@dashboard-components/sidebar'))

export default function DashboardLayout() {
  const { preferences, getBorderRadius } = usePreferences()

  return (
    <div
      id="dashboard-layout"
      className={`relative flex h-screen overflow-hidden bg-neutral-100 text-sm text-neutral-900 ${preferences.isRightSideSidebar ? 'flex-row-reverse' : 'flex-row'}`}
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
      <motion.div
        layout
        className={`animate-scale-fade-in w-full p-4 ${preferences.isRightSideSidebar ? 'origin-right' : 'origin-left'} ${preferences.sidebarStyle === 'transparent' ? (preferences.isRightSideSidebar ? 'pr-0' : 'pl-0') : ''}`}
      >
        <main
          style={{
            borderRadius: getBorderRadius(),
          }}
          className="h-full overflow-y-auto border border-neutral-200 bg-neutral-50 inset-ring inset-ring-white"
        >
          <Outlet />
        </main>
      </motion.div>
    </div>
  )
}
