import IssueItem from '@/components/issue-item'
import ArrowLeftIcon from '@/icons/arrow-left-icon'
import ArrowsSortIcon from '@/icons/arrows-sort-icon'
import CircleDashedIcon from '@/icons/circle-dashed-icon'
import CircleEmptyIcon from '@/icons/circle-empty-icon'
import CircleHalfIcon from '@/icons/circle-half-icon'
import ClickIcon from '@/icons/click-icon'
import CloseIcon from '@/icons/close-icon'
import DesignIssueTagIcon from '@/icons/design-issue-tag-icon'
import EditIcon from '@/icons/edit-icon'
import ExternalLinkIcon from '@/icons/external-link-icon'
import FilterIcon from '@/icons/filters-icon'
import PlusIcon from '@/icons/plus-icon'
import PriorityNoPriorityIcon from '@/icons/priority-no-priority-icon'
import TrashIcon from '@/icons/trash-icon'

export default function IssuesPageDashboard() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center gap-1 rounded-t-lg border border-neutral-200 bg-white px-2 py-1.5">
        <div className="size-2 rounded-full bg-neutral-200" />
        <div className="size-2 rounded-full bg-neutral-200" />
        <div className="size-2 rounded-full bg-neutral-200" />
      </div>
      <div
        aria-label="Dashboard Issues page"
        className="bg-dashboard-background pointer-events-none relative isolate h-144 w-full rounded-b-lg border border-t-0 border-neutral-200 p-4 select-none after:absolute after:-inset-4 after:top-0 after:-z-1 after:bg-white after:mask-linear-0 after:mask-linear-from-black after:mask-linear-to-transparent"
      >
        <div
          aria-hidden
          className="size-full overflow-hidden rounded-lg border border-black/10 bg-white"
        >
          <div className="absolute inset-0 rounded-b-lg bg-black/5 opacity-0" />
          <div className="absolute inset-4">
            <CreateNewIssueModal />
            <IssueActionsModal />
          </div>
          <div className="border-b border-b-black/10 p-4 text-sm font-medium">
            Issues
          </div>
          <div className="border-b border-b-black/10 p-4">
            <div className="flex items-center gap-2">
              <span className="bg-dashboard-neutral-200 flex w-max items-center gap-1 rounded-md px-1.5 py-1 text-sm text-black shadow-sm">
                <FilterIcon />
                Filters
              </span>
              <span className="bg-dashboard-neutral-200 flex w-max items-center gap-1 rounded-md px-1.5 py-1 text-sm text-black shadow-sm">
                <ArrowsSortIcon />
                Sort
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between bg-black/10 p-4">
            <div className="flex items-center gap-1 text-sm font-medium">
              <CircleDashedIcon />
              Backlog
              <span className="text-dashboard-neutral-600 ml-1 text-sm">1</span>
            </div>
            <PlusIcon />
          </div>
          <div className="divide-y divide-black/10">
            <IssueItem
              title="Implement Notification System"
              status="backlog"
              priority="high"
              tag="development"
            />
            <IssueItem
              title="Add Canceled Status"
              status="backlog"
              priority="no-priority"
              tag="design"
              className="hidden"
            />
          </div>
          <div className="flex items-center justify-between bg-black/10 p-4">
            <div className="flex items-center gap-1 text-sm font-medium">
              <CircleEmptyIcon />
              Todo
              <span className="text-dashboard-neutral-600 ml-1 text-sm">2</span>
            </div>
            <PlusIcon />
          </div>
          <div className="divide-y divide-black/10">
            <IssueItem
              title="Create and Report Issues"
              status="todo"
              priority="high"
              tag="development"
            />
            <IssueItem
              title="Update Status"
              status="todo"
              priority="medium"
              tag="design"
            />
          </div>
          <div className="flex items-center justify-between bg-black/10 p-4">
            <div className="flex items-center gap-1 text-sm font-medium">
              <CircleHalfIcon />
              In Progress
              <span className="text-dashboard-neutral-600 ml-1 text-sm">1</span>
            </div>
            <PlusIcon />
          </div>
          <IssueItem
            title="Integrate With Other Tools"
            status="in-progress"
            priority="high"
            tag="development"
          />
        </div>
      </div>
    </div>
  )
}

function CreateNewIssueModal() {
  return (
    <div className="absolute left-1/2 w-full max-w-100 -translate-x-1/2 rounded-lg bg-white opacity-0 shadow-sm ring ring-black/10 max-md:bottom-0 md:top-0">
      <div className="p-4">
        <div className="flex justify-between gap-2">
          <span className="text-dashboard-neutral-600 inline-block text-lg">
            Issue title
          </span>
          <CloseIcon />
        </div>
        <div className="h-18 w-full">
          <span className="text-dashboard-neutral-600 text-sm">
            Issue description
          </span>
        </div>
      </div>
      <div className="scrollbar-hidden flex items-center gap-2 overflow-x-auto p-4 pt-px">
        <span className="text flex w-max items-center gap-1 rounded-md px-1.5 py-1 text-sm text-nowrap shadow-sm ring ring-black/10">
          <CircleDashedIcon />
          Backlog
        </span>
        <span className="text flex w-max items-center gap-1 rounded-md px-1.5 py-1 text-sm text-nowrap shadow-sm ring ring-black/10">
          <PriorityNoPriorityIcon />
          No Priority
        </span>
        <span className="text flex w-max items-center gap-1 rounded-md px-1.5 py-1 text-sm text-nowrap shadow-sm ring ring-black/10">
          <DesignIssueTagIcon />
          Design
        </span>
      </div>
      <div
        dir="rtl"
        className="scrollbar-hidden flex overflow-x-auto border-t border-t-black/10 p-4"
      >
        <div dir="ltr" className="ml-auto flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-dashboard-neutral-600 text-sm text-nowrap">
              Create more
            </span>
            <div className="bg-dashboard-neutral-300 flex aspect-2/1 w-7 rounded-full p-0.5 shadow-sm">
              <div className="aspect-square h-full rounded-full bg-white" />
            </div>
          </div>
          <span className="flex w-max items-center rounded-md px-2 py-1.5 text-sm text-nowrap shadow-sm ring ring-black/10">
            Cancel
          </span>
          <span className="bg-dashboard-brand-500 flex w-max items-center rounded-md px-2 py-1.5 text-sm text-nowrap text-white shadow-sm">
            Create New Issue
          </span>
        </div>
      </div>
    </div>
  )
}

function IssueActionsModal() {
  return (
    <div className="absolute left-1/2 w-full max-w-100 -translate-x-1/2 rounded-lg bg-white p-4 opacity-0 shadow-sm ring ring-black/10 max-md:bottom-0 md:top-0">
      <div className="mb-4 flex items-center justify-between">
        <span className="flex w-max items-center gap-1 rounded-md text-sm text-nowrap">
          <ArrowLeftIcon />
          Back
        </span>
        <span className="ml-auto">
          <CloseIcon />
        </span>
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <div className="w-full rounded-lg p-2 inset-ring inset-ring-black/10">
          <div className="mb-1 flex items-center gap-1">
            <span className="flex size-7 items-center justify-center rounded-md border border-black/10 [&_svg]:size-4">
              <ClickIcon />
            </span>
            <span className="text-sm font-medium">Open</span>
          </div>
          <span className="text-dashboard-neutral-600 block text-xs">
            View issue details
          </span>
        </div>
        <div className="w-full rounded-lg p-2 inset-ring inset-ring-black/10">
          <div className="mb-1 flex items-center gap-1">
            <span className="flex size-7 items-center justify-center rounded-md border border-black/10 [&_svg]:size-4">
              <ExternalLinkIcon />
            </span>
            <span className="text-sm font-medium">Open in new tab</span>
          </div>
          <span className="text-dashboard-neutral-600 block text-xs">
            Open issue separately
          </span>
        </div>
        <div className="w-full rounded-lg p-2 inset-ring inset-ring-black/10">
          <div className="mb-1 flex items-center gap-1">
            <span className="flex size-7 items-center justify-center rounded-md border border-black/10 [&_svg]:size-4">
              <EditIcon />
            </span>
            <span className="text-sm font-medium">Rename</span>
          </div>
          <span className="text-dashboard-neutral-600 block text-xs">
            Edit issue title
          </span>
        </div>
        <div className="w-full rounded-lg p-2 inset-ring inset-ring-black/10">
          <div className="mb-1 flex items-center gap-1">
            <span className="flex size-7 items-center justify-center rounded-md border border-black/10 bg-red-500/10 [&_svg]:size-4 [&_svg]:text-red-500">
              <TrashIcon />
            </span>
            <span className="text-sm font-medium text-red-500">Delete</span>
          </div>
          <span className="block text-xs text-red-400">
            Remove issue permanently
          </span>
        </div>
      </div>
    </div>
  )
}
