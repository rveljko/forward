import Button from '@/components/ui/button'
import DotsVerticalIcon from '@/icons/dots-vertical-icon'
import { dayMonthShortFormatter } from '@/utils/date-formatters'
import { Task } from '@/utils/types'
import { cn } from '@/utils/utils'

type TaskItemProps = {
  task: Task
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

export default function TaskItem({ task, setTasks }: TaskItemProps) {
  return (
    <article className="relative flex justify-between gap-2 border-b border-neutral-200 bg-neutral-50 p-4 hover:bg-white">
      <label className="flex items-center justify-center gap-2 hover:cursor-pointer">
        <input
          type="checkbox"
          checked={task.isChecked}
          onChange={() =>
            setTasks((prevTasks) => [
              { ...task, isChecked: !task.isChecked },
              ...prevTasks.filter((prevTask) => prevTask.title !== task.title),
            ])
          }
          className={cn(
            'peer relative size-3.5 shrink-0 appearance-none',
            'hover:before:inset-ring-brand-500 pointer-coarse:active:before:inset-ring-brand-500 before:absolute before:flex before:size-full before:items-center before:justify-center before:rounded-sm before:bg-white before:text-xs before:text-transparent before:inset-ring before:inset-ring-neutral-300 before:transition-all',
            "checked:before:bg-brand-500 checked:before:text-white checked:before:inset-ring-0 checked:before:content-['✓']"
          )}
        />
        <span
          className={cn(
            'relative line-clamp-1 font-medium break-all text-black',
            'after:absolute after:top-1/2 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all peer-checked:after:w-full after:pointer-coarse:-translate-y-1/2'
          )}
        >
          {task.title}
        </span>
        <span className="absolute inset-0" />
      </label>
      <div className="flex items-center gap-2">
        <span className="hidden text-xs text-nowrap text-neutral-600 @lg/dashboard:inline">
          {dayMonthShortFormatter(new Date())}
        </span>
        <Button
          variant="tertiary"
          className="isolate -m-1 rounded-full p-1 text-neutral-600 hover:text-black [&_svg]:size-5"
        >
          <DotsVerticalIcon />
        </Button>
      </div>
    </article>
  )
}
