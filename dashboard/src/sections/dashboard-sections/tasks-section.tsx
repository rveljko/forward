import CreateNewTaskModalButton from '@dashboard-components/create-new-task-modal-button'
import TasksList from '@dashboard-components/tasks-list'
import Checkbox from '@dashboard-components/ui/checkbox'
import Divider from '@dashboard-components/ui/divider'
import Dropdown from '@dashboard-components/ui/dropdown'
import DropdownButton from '@dashboard-components/ui/dropdown-button'
import FilterChip from '@dashboard-components/ui/filter-chip'
import IconWrapper from '@dashboard-components/ui/icon-wrapper'
import RadioButton from '@dashboard-components/ui/radio-button'
import { taskStatuses } from '@data/task-statuses'
import useDropdown from '@hooks/use-dropdown'
import ArrowsSortIcon from '@icons/arrows-sort-icon'
import CalendarIcon from '@icons/calendar-icon'
import CheckboxIcon from '@icons/checkbox-icon'
import EditIcon from '@icons/edit-icon'
import FilterIcon from '@icons/filter-icon'
import LetterCaseIcon from '@icons/letter-case-icon'
import SearchIcon from '@icons/search-icon'
import { useTasks } from '@services/contexts/tasks-context'
import { AnimatePresence, motion } from 'motion/react'
import { useSearchParams } from 'react-router'

export default function TasksSection() {
  const { statuses, removeFilter, getSortedTasks, getTaskStatus } = useTasks()

  return (
    <section className="flex h-full flex-col overflow-y-hidden">
      <header className="p-4">
        <h1 className="font-medium">Tasks</h1>
      </header>
      <Divider />
      <div
        role="toolbar"
        className="flex flex-wrap items-center justify-between gap-2 p-4"
      >
        <div className="flex flex-wrap items-center gap-2">
          <FiltersDropdownButton />
          <SortDropdownButton />
          <ul className="contents">
            <AnimatePresence mode="popLayout" initial={false}>
              {statuses.map((status) => {
                const { name, icon: Icon } = getTaskStatus(status)

                return (
                  <motion.li
                    layout
                    key={status}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <FilterChip
                      name={name}
                      icon={<Icon />}
                      onRemove={() => removeFilter('status', status)}
                    />
                  </motion.li>
                )
              })}
            </AnimatePresence>
          </ul>
        </div>
        <CreateNewTaskModalButton
          variant="primary"
          size="small"
          leftIcon={<EditIcon />}
        >
          Create New Task
        </CreateNewTaskModalButton>
      </div>
      <Divider />
      {getSortedTasks().length > 0 ? (
        <div className="overflow-y-auto">
          <TasksList tasks={getSortedTasks()} />
        </div>
      ) : (
        <NoTasksPanel />
      )}
    </section>
  )
}

function FiltersDropdownButton() {
  const { setFilter, handleCheckbox } = useTasks()
  const { isOpened, toggleDropdown } = useDropdown()

  return (
    <DropdownButton
      label="Filters"
      isOpened={isOpened}
      toggleDropdown={toggleDropdown}
      variant="secondary"
      size="small"
      leftIcon={<FilterIcon />}
    >
      <Dropdown.List>
        {taskStatuses.map(({ id, name, label, icon: Icon }) => (
          <Dropdown.Item key={id}>
            <Dropdown.Label>
              <Checkbox
                onChange={() => {
                  setFilter('status', label)
                  toggleDropdown()
                }}
                checked={handleCheckbox(label)}
              />
              <Icon />
              {name}
            </Dropdown.Label>
          </Dropdown.Item>
        ))}
      </Dropdown.List>
    </DropdownButton>
  )
}

function SortDropdownButton() {
  const { sort, setSort } = useTasks()
  const { isOpened, toggleDropdown } = useDropdown()

  return (
    <DropdownButton
      label="Sort"
      isOpened={isOpened}
      toggleDropdown={toggleDropdown}
      variant="secondary"
      size="small"
      leftIcon={<ArrowsSortIcon />}
    >
      <Dropdown.List>
        <Dropdown.Item>
          <Dropdown.Label>
            <RadioButton
              name="sort"
              checked={sort === 'date-desc'}
              onChange={() => {
                setSort('date-desc')
                toggleDropdown()
              }}
            />
            <CalendarIcon />
            Newest to Oldest
          </Dropdown.Label>
        </Dropdown.Item>
        <Dropdown.Item>
          <Dropdown.Label>
            <RadioButton
              name="sort"
              checked={sort === 'date-asc'}
              onChange={() => {
                setSort('date-asc')
                toggleDropdown()
              }}
            />
            <CalendarIcon />
            Oldest to Newest
          </Dropdown.Label>
        </Dropdown.Item>
        <Dropdown.Item>
          <Dropdown.Label>
            <RadioButton
              name="sort"
              checked={sort === 'name-asc'}
              onChange={() => {
                setSort('name-asc')
                toggleDropdown()
              }}
            />
            <LetterCaseIcon />A to Z
          </Dropdown.Label>
        </Dropdown.Item>
        <Dropdown.Item>
          <Dropdown.Label>
            <RadioButton
              name="sort"
              checked={sort === 'name-desc'}
              onChange={() => {
                setSort('name-desc')
                toggleDropdown()
              }}
            />
            <LetterCaseIcon />Z to A
          </Dropdown.Label>
        </Dropdown.Item>
      </Dropdown.List>
    </DropdownButton>
  )
}

function NoTasksPanel() {
  const { tasks } = useTasks()
  const [searchParams] = useSearchParams()

  if (tasks.length > 0 && searchParams.size > 0) return <NoFilteredTasksPanel />

  return (
    <div className="flex grow flex-col items-center justify-center p-4 text-center text-pretty">
      <IconWrapper icon={<CheckboxIcon />} className="mb-4" />
      <h2 className="mb-2 font-medium">Sorry, You Have No Tasks</h2>
      <p className="mb-4 text-xs text-neutral-600">
        Get started by creating your first task
      </p>
      <CreateNewTaskModalButton
        variant="primary"
        size="small"
        leftIcon={<EditIcon />}
      >
        Create New Task
      </CreateNewTaskModalButton>
    </div>
  )
}

function NoFilteredTasksPanel() {
  return (
    <div className="flex grow flex-col items-center justify-center p-4 text-center text-pretty">
      <IconWrapper icon={<SearchIcon />} className="mb-4" />
      <h2 className="mb-2 font-medium">Sorry, No Matching Tasks</h2>
      <p className="mb-4 text-xs text-neutral-600">
        Try adjusting your filters or create a new task
      </p>
    </div>
  )
}
