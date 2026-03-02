import TaskItem from '@/components/task-item'
import { tasks } from '@/data/tasks'
import ArrowsSortIcon from '@/icons/arrows-sort-icon'
import FilterIcon from '@/icons/filters-icon'
import PlusIcon from '@/icons/plus-icon'

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
