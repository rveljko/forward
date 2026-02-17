import TaskItem from '@/components/task-item'
import { tasks } from '@/data/tasks'
import ArrowsSortIcon from '@/icons/arrows-sort-icon'
import FilterIcon from '@/icons/filters-icon'
import PlusIcon from '@/icons/plus-icon'

export default function TasksPanel() {
  return (
    <>
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
    </>
  )
}
