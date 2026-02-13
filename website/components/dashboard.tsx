import { ActivePanelIndex } from '@/components/dashboard-controls'
import DraftsPanel from '@/components/drafts-panel'
import IssuesPanel from '@/components/issues-panel'
import TasksPanel from '@/components/tasks-panel'
import Logo from '@/components/ui/logo'
import BrainIcon from '@/icons/brain-icon'
import CheckboxIcon from '@/icons/checkbox-icon'
import DocumentIcon from '@/icons/document-icon'
import FolderIcon from '@/icons/folder-icon'
import LifebuoyIcon from '@/icons/lifebuoy-icon'
import PenIcon from '@/icons/pen-icon'
import SearchIcon from '@/icons/search-icon'
import SettingsIcon from '@/icons/settings-icon'
import SidebarToggleIcon from '@/icons/sidebar-toggle-icon'
import Image from 'next/image'

type DashboardProps = {
  activePanelIndex: ActivePanelIndex
}

export default function Dashboard({ activePanelIndex }: DashboardProps) {
  return (
    <div
      aria-hidden
      className="bg-dashboard-background pointer-events-none mx-auto h-144 w-full max-w-5xl rounded-lg border border-neutral-200 select-none"
    >
      <div className="flex h-full">
        <Sidebar activePanelIndex={activePanelIndex} />
        <div className="m-4 ml-0 w-full overflow-hidden rounded-lg border border-neutral-200 bg-white">
          {activePanelIndex === 0 && <TasksPanel />}
          {activePanelIndex === 1 && <IssuesPanel />}
          {activePanelIndex === 2 && <DraftsPanel />}
        </div>
      </div>
    </div>
  )
}

type SidebarProps = {
  activePanelIndex: ActivePanelIndex
}

function Sidebar({ activePanelIndex }: SidebarProps) {
  return (
    <aside className="flex min-w-57.5 flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <Logo />
        <span className="flex size-7 items-center justify-center">
          <SidebarToggleIcon />
        </span>
      </div>
      <div className="flex h-full flex-col justify-between gap-2">
        <ul className="flex flex-col gap-1">
          <li>
            <span className="bg-dashboard-brand-500 flex items-center gap-1 rounded-md px-1.5 py-1 text-sm text-white shadow-sm">
              <PenIcon />
              Create New Issue
            </span>
          </li>
          <li>
            <span className="bg-dashboard-neutral-200 flex items-center gap-1 rounded-md px-1.5 py-1 text-sm text-black shadow-sm">
              <SearchIcon />
              Search
            </span>
          </li>
          <li>
            <span
              data-active={activePanelIndex === 0}
              className="data-[active=true]:bg-dashboard-neutral-300 [&_svg]:text-dashboard-neutral-600 flex items-center gap-1 rounded-sm px-1.5 py-1 text-sm text-black transition-colors data-[active=true]:[&_svg]:text-black"
            >
              <CheckboxIcon />
              Tasks
            </span>
          </li>
          <li>
            <span
              data-active={activePanelIndex === 1}
              className="data-[active=true]:bg-dashboard-neutral-300 [&_svg]:text-dashboard-neutral-600 flex items-center gap-1 rounded-sm px-1.5 py-1 text-sm text-black transition-colors data-[active=true]:[&_svg]:text-black"
            >
              <FolderIcon />
              Issues
            </span>
          </li>
          <li>
            <span
              data-active={activePanelIndex === 2}
              className="data-[active=true]:bg-dashboard-neutral-300 [&_svg]:text-dashboard-neutral-600 flex items-center gap-1 rounded-sm px-1.5 py-1 text-sm text-black transition-colors data-[active=true]:[&_svg]:text-black"
            >
              <BrainIcon />
              Drafts
            </span>
          </li>
        </ul>
        <ul className="flex flex-col gap-1">
          <li>
            <span className="[&_svg]:text-dashboard-neutral-600 flex items-center gap-1 rounded-sm px-1.5 py-1 text-sm text-black">
              <DocumentIcon />
              Guides
            </span>
          </li>
          <li>
            <span className="[&_svg]:text-dashboard-neutral-600 flex items-center gap-1 rounded-sm px-1.5 py-1 text-sm text-black">
              <LifebuoyIcon />
              Help & Support
            </span>
          </li>
          <li>
            <span className="[&_svg]:text-dashboard-neutral-600 flex items-center gap-1 rounded-sm px-1.5 py-1 text-sm text-black">
              <SettingsIcon />
              Settings
            </span>
          </li>
          <li>
            <span className="flex items-center gap-1 rounded-sm px-1.5 py-1 text-sm text-black">
              <span className="size-5 overflow-hidden rounded-full">
                <Image
                  src="/images/james-williams.png"
                  alt="James Williams"
                  width={256}
                  height={256}
                  className="object-cover"
                />
              </span>
              James Williams
            </span>
          </li>
        </ul>
      </div>
    </aside>
  )
}
