import Sidebar from '@dashboard-components/sidebar'
import { Outlet } from 'react-router'

export default function DashboardLayout() {
  return (
    <div className="relative flex h-screen">
      <Sidebar />
      <div className="w-full p-4">
        <main className="border-section-outline bg-section-background-color h-full overflow-y-auto rounded-2xl border bg-(image:--section-background-gradient)">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
