import { ActivePanelIndex } from '@/components/dashboard-controls'
import DraftsPanel from '@/components/drafts-panel'
import IssuesPanel from '@/components/issues-panel'
import TasksPanel from '@/components/tasks-panel'
import Button from '@/components/ui/button'
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
import { cn } from '@/utils/utils'
import Image from 'next/image'

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
    <aside className="flex w-64 shrink-0 flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <Logo />
        <span className="flex size-7 items-center justify-center text-black">
          <SidebarToggleIcon />
        </span>
      </div>
      <div className="flex h-full flex-col justify-between gap-2">
        <ul className="flex flex-col gap-1">
          <li>
            <Button
              variant="brand"
              size="small"
              leftIcon={<PenIcon />}
              className="w-full justify-start"
            >
              Create New Issue
            </Button>
          </li>
          <li>
            <Button
              variant="secondary"
              size="small"
              leftIcon={<SearchIcon />}
              className="w-full justify-start"
            >
              Search
            </Button>
          </li>
          <li>
            <span
              className={cn(
                'flex h-7 items-center gap-1 rounded-md px-1.5 py-1 font-medium text-nowrap text-black transition [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-neutral-600',
                activePanelIndex === 0 &&
                  'bg-neutral-50 ring inset-ring ring-neutral-900/10 inset-ring-white [&>svg]:text-black'
              )}
            >
              <CheckboxIcon />
              Tasks
            </span>
          </li>
          <li>
            <span
              className={cn(
                'flex h-7 items-center gap-1 rounded-md px-1.5 py-1 font-medium text-nowrap text-black transition [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-neutral-600',
                activePanelIndex === 1 &&
                  'bg-neutral-50 ring inset-ring ring-neutral-900/10 inset-ring-white [&>svg]:text-black'
              )}
            >
              <FolderIcon />
              Issues
            </span>
          </li>
          <li>
            <span
              className={cn(
                'flex h-7 items-center gap-1 rounded-md px-1.5 py-1 font-medium text-nowrap text-black transition [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-neutral-600',
                activePanelIndex === 2 &&
                  'bg-neutral-50 ring inset-ring ring-neutral-900/10 inset-ring-white [&>svg]:text-black'
              )}
            >
              <BrainIcon />
              Drafts
            </span>
          </li>
        </ul>
        <ul className="flex flex-col gap-1">
          <li>
            <span className="flex h-7 items-center gap-1 rounded-md px-1.5 py-1 font-medium text-nowrap text-black transition [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-neutral-600">
              <DocumentIcon />
              Guides
            </span>
          </li>
          <li>
            <span className="flex h-7 items-center gap-1 rounded-md px-1.5 py-1 font-medium text-nowrap text-black transition [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-neutral-600">
              <LifebuoyIcon />
              Help & Support
            </span>
          </li>
          <li>
            <span className="flex h-7 items-center gap-1 rounded-md px-1.5 py-1 font-medium text-nowrap text-black transition [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-neutral-600">
              <SettingsIcon />
              Settings
            </span>
          </li>
          <li>
            <span className="flex h-7 items-center gap-1 rounded-md px-1.5 py-1 font-medium text-nowrap text-black transition">
              <Image
                src="/images/james-williams.png"
                alt="James Williams"
                width={48}
                height={48}
                className="size-4 rounded-full object-cover"
              />
              James Williams
            </span>
          </li>
        </ul>
      </div>
    </aside>
  )
}
