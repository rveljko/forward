import Task from '@dashboard-components/task'
import { Task as TaskType } from '@utils/types'

type TasksListProps = React.ComponentPropsWithoutRef<'ul'> & {
  tasks: TaskType[]
}

export default function TasksList({ tasks, ...props }: TasksListProps) {
  return (
    <ul {...props}>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  )
}
