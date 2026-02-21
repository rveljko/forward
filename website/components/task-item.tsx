import DotsVerticalIcon from '@/icons/dots-vertical-icon'
import { dayMonthShortFormatter } from '@/utils/date-formatters'
import { Task } from '@/utils/types'

type TaskItemProps = { task: Task }

export default function TaskItem({ task }: TaskItemProps) {
  return (
    <article className="flex justify-between gap-2 border-b border-black/10 p-4">
      <div className="flex items-center gap-2">
        <span className="size-3.5 shrink-0 rounded-sm inset-ring inset-ring-black/20" />
        <h3 className="line-clamp-1 text-sm font-medium break-all">{task}</h3>
      </div>
      <div className="[&_svg]:text-dashboard-neutral-600 flex items-center gap-2">
        <span className="text-dashboard-neutral-600 text-xs text-nowrap">
          {dayMonthShortFormatter(new Date())}
        </span>
        <DotsVerticalIcon />
      </div>
    </article>
  )
}
