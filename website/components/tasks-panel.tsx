import ArrowsSortIcon from '@/icons/arrows-sort-icon'
import DotsVerticalIcon from '@/icons/dots-vertical-icon'
import FilterIcon from '@/icons/filters-icon'
import PlusIcon from '@/icons/plus-icon'
import { dayMonthShortFormatter } from '@/utils/date-formatters'

const tasks = [
  'Make bed',
  'Do 50 pushups',
  '20 min walk',
  'Stretch 5min',
  'Balanced breakfast',
]

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
        <article
          key={task}
          className="flex justify-between gap-2 border-b border-black/10 p-4"
        >
          <div className="flex items-center gap-2">
            <span className="size-3.5 shrink-0 rounded-sm inset-ring inset-ring-black/20" />
            <span className="line-clamp-1 text-sm break-all">{task}</span>
          </div>
          <div className="[&_svg]:text-dashboard-neutral-600 flex items-center gap-2">
            <span className="text-dashboard-neutral-600 text-xs text-nowrap">
              {dayMonthShortFormatter(new Date())}
            </span>
            <DotsVerticalIcon />
          </div>
        </article>
      ))}
    </>
  )
}
