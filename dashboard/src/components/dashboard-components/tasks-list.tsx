import Task from '@dashboard-components/task'
import { Task as TaskType } from '@utils/types'
import { AnimatePresence, motion } from 'motion/react'

type TasksListProps = React.ComponentPropsWithoutRef<'ul'> & {
  tasks: TaskType[]
}

export default function TasksList({ tasks, ...props }: TasksListProps) {
  return (
    <ul {...props}>
      <AnimatePresence mode="popLayout" initial={false}>
        {tasks.map((task) => (
          <motion.li
            layout
            key={task.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Task task={task} />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  )
}
