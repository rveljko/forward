import Checkbox from '@dashboard-components/ui/checkbox'
import DotsVerticalIcon from '@icons/dots-vertical-icon'
import { useTasks } from '@services/contexts/tasks-context'
import Button from '@ui/button'
import {
  dayMonthShortFormatter,
  iso8601DateFormatter,
} from '@utils/date-formatters'
import { Task as TaskType } from '@utils/types'

type TaskProps = React.ComponentPropsWithoutRef<'article'> & {
  task: TaskType
}

export default function Task({
  task: { id, title, isChecked, createdAt },
}: TaskProps) {
  const { updateTaskStatus } = useTasks()

  return (
    <article className="border-b-section-outline hover:bg-clickable/5 bg-section-background-color relative flex items-center justify-between gap-2 border-b p-4">
      <label className="flex items-center justify-center gap-2 hover:cursor-pointer has-checked:line-through">
        <Checkbox checked={isChecked} onChange={() => updateTaskStatus(id)} />
        <span className="text-clickable line-clamp-1 break-all">{title}</span>
        <span className="absolute inset-0" />
      </label>
      <div className="flex items-center gap-2">
        <time
          dateTime={iso8601DateFormatter(createdAt)}
          className="flex text-sm text-nowrap text-neutral-400"
        >
          {dayMonthShortFormatter(createdAt)}
        </time>
        <Button
          variant="tertiary"
          className="hover:text-clickable isolate -m-2 rounded-full p-2 text-neutral-400"
        >
          <DotsVerticalIcon />
          <span className="sr-only">Actions</span>
        </Button>
      </div>
    </article>
  )
}
