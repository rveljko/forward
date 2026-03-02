import TaskItem from '@/components/task-item'
import { tasks } from '@/data/tasks'
import ArrowsSortIcon from '@/icons/arrows-sort-icon'
import ClipboardIcon from '@/icons/clipboard-icon'
import CloseIcon from '@/icons/close-icon'
import CopyIcon from '@/icons/copy-icon'
import EditIcon from '@/icons/edit-icon'
import FilterIcon from '@/icons/filters-icon'
import PlusIcon from '@/icons/plus-icon'
import TrashIcon from '@/icons/trash-icon'

export default function TasksPageDashboard() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center gap-1 rounded-t-lg border border-neutral-200 bg-white px-2 py-1.5">
        <div className="size-2 rounded-full bg-neutral-200" />
        <div className="size-2 rounded-full bg-neutral-200" />
        <div className="size-2 rounded-full bg-neutral-200" />
      </div>
      <div
        aria-label="Dashboard Task page"
        className="bg-dashboard-background pointer-events-none relative isolate h-144 w-full rounded-b-lg border border-t-0 border-neutral-200 p-4 select-none after:absolute after:-inset-4 after:top-0 after:-z-1 after:bg-white after:mask-linear-0 after:mask-linear-from-black after:mask-linear-to-transparent"
      >
        <div
          aria-hidden
          className="size-full overflow-hidden rounded-lg border border-black/10 bg-white"
        >
          <div className="absolute inset-0 rounded-b-lg bg-black/5" />
          <div className="absolute inset-4">
            <CreateNewTaskModal />
            <TaskActionsModal />
          </div>
          <div className="border-b border-b-black/10 p-4 text-sm font-medium">
            Tasks
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-b-black/10 p-4">
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
            <span className="bg-dashboard-brand-500 flex w-max items-center gap-1 rounded-md px-1.5 py-1 text-sm text-white shadow-sm">
              <PlusIcon />
              Create New Task
            </span>
          </div>
          {tasks.map((task) => (
            <TaskItem key={task} task={task} />
          ))}
        </div>
      </div>
    </div>
  )
}

function CreateNewTaskModal() {
  return (
    <div className="absolute left-1/2 w-full max-w-100 -translate-x-1/2 rounded-lg bg-white opacity-0 shadow-sm ring ring-black/10 max-md:bottom-0 md:top-0">
      <div className="flex justify-between gap-2 p-4">
        <span className="text-dashboard-neutral-600 text-lg">Task title</span>
        <span className="ml-auto">
          <CloseIcon />
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
            Create New Task
          </span>
        </div>
      </div>
    </div>
  )
}

function TaskActionsModal() {
  return (
    <div className="absolute left-1/2 w-full max-w-100 -translate-x-1/2 rounded-lg bg-white shadow-sm ring ring-black/10 max-md:bottom-0 md:top-0">
      <div className="flex items-center justify-between p-4 pb-0">
        <span className="ml-auto">
          <CloseIcon />
        </span>
      </div>
      <div className="grid grid-cols-1 gap-2 p-4 md:grid-cols-2">
        <div className="w-full rounded-lg border border-black/10 p-2">
          <div className="mb-1 flex items-center gap-1">
            <span className="flex size-7 items-center justify-center rounded-md border border-black/10 [&_svg]:size-4">
              <EditIcon />
            </span>
            <span className="text-sm font-medium">Rename</span>
          </div>
          <span className="text-dashboard-neutral-600 block text-xs">
            Edit task title
          </span>
        </div>
        <div className="w-full rounded-lg border border-black/10 p-2">
          <div className="mb-1 flex items-center gap-1">
            <span className="flex size-7 items-center justify-center rounded-md border border-black/10 [&_svg]:size-4">
              <ClipboardIcon />
            </span>
            <span className="text-sm font-medium">Copy title</span>
          </div>
          <span className="text-dashboard-neutral-600 block text-xs">
            Copy task title
          </span>
        </div>
        <div className="w-full rounded-lg border border-black/10 p-2">
          <div className="mb-1 flex items-center gap-1">
            <span className="flex size-7 items-center justify-center rounded-md border border-black/10 [&_svg]:size-4">
              <CopyIcon />
            </span>
            <span className="text-sm font-medium">Duplicate</span>
          </div>
          <span className="text-dashboard-neutral-600 block text-xs">
            Create task copy
          </span>
        </div>
        <div className="w-full rounded-lg border border-black/10 p-2">
          <div className="mb-1 flex items-center gap-1">
            <span className="flex size-7 items-center justify-center rounded-md border border-black/10 bg-red-500/10 [&_svg]:size-4 [&_svg]:text-red-500">
              <TrashIcon />
            </span>
            <span className="text-sm font-medium text-red-500">Delete</span>
          </div>
          <span className="block text-xs text-red-400">
            Remove task permanently
          </span>
        </div>
      </div>
    </div>
  )
}
