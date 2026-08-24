import { ActivePanelIndex } from '@/components/dashboard/dashboard-controls'
import DraftsDashboardPanel from '@/components/dashboard/panels/drafts-dashboard-panel'
import IssuesDashboardPanel from '@/components/dashboard/panels/issues-dashboard-panel'
import TasksDashboardPanel from '@/components/dashboard/panels/tasks-dashboard-panel'
import Sidebar from '@/components/dashboard/sidebar'

type DashboardProps = {
  activePanelIndex: ActivePanelIndex
}

export default function Dashboard({ activePanelIndex }: DashboardProps) {
  return (
    <div
      aria-hidden
      className="pointer-events-none mx-auto h-144 w-full max-w-5xl rounded-lg border border-neutral-200 bg-neutral-100 text-neutral-900 inset-ring inset-ring-white select-none"
    >
      <div className="flex h-full">
        <Sidebar activePanelIndex={activePanelIndex} />
        <div className="m-4 ml-0 w-full overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 inset-ring inset-ring-white">
          {activePanelIndex === 0 && <TasksDashboardPanel />}
          {activePanelIndex === 1 && <IssuesDashboardPanel />}
          {activePanelIndex === 2 && <DraftsDashboardPanel />}
        </div>
      </div>
    </div>
  )
}
