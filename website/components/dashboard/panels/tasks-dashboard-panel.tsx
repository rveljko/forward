import Button from '@/components/ui/button'
import Divider from '@/components/ui/divider'
import { tasks } from '@/data/tasks'
import ArrowsSortIcon from '@/icons/arrows-sort-icon'
import DotsVerticalIcon from '@/icons/dots-vertical-icon'
import EditIcon from '@/icons/edit-icon'
import FilterIcon from '@/icons/filters-icon'
import { dayMonthShortFormatter } from '@/utils/date-formatters'
import { Task } from '@/utils/types'

export default function TasksDashboardPanel() {
  return (
    <>
      <div className="p-4">
        <span className="font-medium">Tasks</span>
      </div>
      <Divider />
      <div className="flex flex-wrap items-center justify-between gap-2 p-4">
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="small" leftIcon={<FilterIcon />}>
            Filters
          </Button>
          <Button
            variant="secondary"
            size="small"
            leftIcon={<ArrowsSortIcon />}
          >
            Sort
          </Button>
        </div>
        <Button variant="brand" size="small" leftIcon={<EditIcon />}>
          Create New Task
        </Button>
      </div>
      <Divider />
      <ul>
        {tasks.map((task) => (
          <li key={task.title}>
            <TaskItem task={task} />
          </li>
        ))}
      </ul>
    </>
  )
}

type TaskItemProps = {
  task: Task
}

function TaskItem({ task: { title } }: TaskItemProps) {
  return (
    <article className="relative flex justify-between gap-2 border-b border-neutral-200 p-4 hover:bg-white">
      <div className="flex items-center justify-center gap-2">
        <div className="size-3.5 rounded-sm bg-white inset-ring inset-ring-neutral-300" />
        <span className="line-clamp-1 font-medium break-all text-black">
          {title}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-nowrap text-neutral-600">
          {dayMonthShortFormatter(new Date())}
        </span>
        <span className="text-neutral-600">
          <DotsVerticalIcon />
        </span>
      </div>
    </article>
  )
}
