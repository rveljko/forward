import TaskItem from '@/components/tasks/task-item'
import Button from '@/components/ui/button'
import Divider from '@/components/ui/divider'
import ArrowsSortIcon from '@/icons/arrows-sort-icon'
import EditIcon from '@/icons/edit-icon'
import FilterIcon from '@/icons/filters-icon'
import { Task } from '@/utils/types'
import { motion } from 'motion/react'

type TasksPanelProps = {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

export default function TasksPanel({ tasks, setTasks }: TasksPanelProps) {
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
        <Button
          variant="brand"
          size="small"
          leftIcon={<EditIcon />}
          onClick={() =>
            setTasks((prevTasks) => [
              {
                title: 'Update changelog with recent improvements',
                isChecked: false,
                order: 1,
              },
              ...prevTasks,
            ])
          }
        >
          Create New Task
        </Button>
      </div>
      <Divider />
      <ul>
        {[...tasks]
          .sort((a, b) => a.order - b.order)
          .map((task) => (
            <motion.li layout="position" key={task.title}>
              <TaskItem task={task} setTasks={setTasks} />
            </motion.li>
          ))}
      </ul>
    </>
  )
}
