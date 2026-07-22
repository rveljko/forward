import Button from '@/components/ui/button'
import DotsVerticalIcon from '@/icons/dots-vertical-icon'
import { dayMonthShortFormatter } from '@/utils/date-formatters'
import { Task } from '@/utils/types'
import { cn } from '@/utils/utils'

type TaskItemProps = React.ComponentPropsWithoutRef<'article'> & { task: Task }

export default function TaskItem({ task, className, ...props }: TaskItemProps) {
  return (
    <article
      className={cn(
        'flex justify-between gap-2 border-b border-neutral-200 p-4',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <span className="size-3.5 shrink-0 rounded-sm bg-white inset-ring inset-ring-neutral-300" />
        <h3 className="line-clamp-1 text-sm font-medium break-all text-black">
          {task}
        </h3>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-nowrap text-neutral-600">
          {dayMonthShortFormatter(new Date())}
        </span>
        <Button
          variant="tertiary"
          className="rounded-full text-neutral-600 hover:text-black [&_svg]:size-5"
        >
          <DotsVerticalIcon />
        </Button>
      </div>
    </article>
  )
}
