import CreateNewTaskModalButton from '@dashboard-components/create-new-task-modal-button'
import TasksList from '@dashboard-components/tasks-list'
import Divider from '@dashboard-components/ui/divider'
import ArrowsSortIcon from '@icons/arrows-sort-icon'
import FilterIcon from '@icons/filter-icon'
import PlusIcon from '@icons/plus-icon'
import { useTasks } from '@services/contexts/tasks-context'
import Button from '@ui/button'

export default function TasksSection() {
  const { getSortedTasks } = useTasks()

  return (
    <section>
      <header className="p-4">
        <h1>Tasks</h1>
      </header>
      <Divider />
      <div
        role="toolbar"
        className="flex flex-wrap items-center justify-between gap-2 p-4"
      >
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
        <CreateNewTaskModalButton
          variant="primary"
          size="small"
          leftIcon={<PlusIcon />}
        >
          Create New Task
        </CreateNewTaskModalButton>
      </div>
      <Divider />
      <TasksList tasks={getSortedTasks()} />
    </section>
  )
}
