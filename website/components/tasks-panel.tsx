import TaskItem from '@/components/task-item'
import Button from '@/components/ui/button'
import Divider from '@/components/ui/divider'
import { tasks } from '@/data/tasks'
import ArrowsSortIcon from '@/icons/arrows-sort-icon'
import EditIcon from '@/icons/edit-icon'
import FilterIcon from '@/icons/filters-icon'

export default function TasksPanel() {
  return (
    <>
      <div className="p-4">
        <span className="text-sm font-medium">Tasks</span>
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
          <li key={task}>
            <TaskItem task={task} />
          </li>
        ))}
      </ul>
    </>
  )
}
