import { ActivePanelIndex } from '@/components/dashboard/dashboard-controls'
import TasksDashboardPanel from '@/components/dashboard/panels/tasks-dashboard-panel'
import Sidebar from '@/components/dashboard/sidebar'
import DraftsPanel from '@/components/panels/drafts-panel'
import IssuesPanel from '@/components/panels/issues-panel'

type DashboardProps = {
  activePanelIndex: ActivePanelIndex
}

export default function Dashboard({ activePanelIndex }: DashboardProps) {
  return (
    <div
      aria-hidden
      className="pointer-events-none mx-auto h-144 w-full max-w-5xl rounded-lg border border-neutral-200 bg-neutral-100 text-neutral-900 select-none"
    >
      <div className="flex h-full">
        <Sidebar activePanelIndex={activePanelIndex} />
        <div className="m-4 ml-0 w-full overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 inset-ring inset-ring-white">
          {activePanelIndex === 0 && <TasksDashboardPanel />}
          {activePanelIndex === 1 && <IssuesPanel />}
          {activePanelIndex === 2 && <DraftsPanel />}
        </div>
      </div>
    </div>
  )
}
