import CreateNewTaskModalButton from '@dashboard-components/create-new-task-modal-button'
import TasksList from '@dashboard-components/tasks-list'
import Checkbox from '@dashboard-components/ui/checkbox'
import Divider from '@dashboard-components/ui/divider'
import Dropdown from '@dashboard-components/ui/dropdown'
import DropdownButton from '@dashboard-components/ui/dropdown-button'
import RadioButton from '@dashboard-components/ui/radio-button'
import useDropdown from '@hooks/use-dropdown'
import ArrowsSortIcon from '@icons/arrows-sort-icon'
import CalendarIcon from '@icons/calendar-icon'
import CheckboxIcon from '@icons/checkbox-icon'
import FilterIcon from '@icons/filter-icon'
import LetterCaseIcon from '@icons/letter-case-icon'
import PlusIcon from '@icons/plus-icon'
import UncheckedBoxIcon from '@icons/unchecked-box-icon'
import { useTasks } from '@services/contexts/tasks-context'

export default function TasksSection() {
  const { getSortedTasks } = useTasks()

  return (
    <section className="flex h-full flex-col">
      <header className="p-4">
        <h1>Tasks</h1>
      </header>
      <Divider />
      <div
        role="toolbar"
        className="flex flex-wrap items-center justify-between gap-2 p-4"
      >
        <div className="flex items-center gap-2">
          <FiltersDropdownButton />
          <SortDropdownButton />
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
      {getSortedTasks().length > 0 ? (
        <TasksList tasks={getSortedTasks()} />
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
        <Dropdown.Item>
          <Dropdown.Label>
            <Checkbox
              onChange={() => {
                setFilter('status', 'checked')
                toggleDropdown()
              }}
              checked={handleCheckbox('checked')}
            />
            <CheckboxIcon />
            Checked
          </Dropdown.Label>
        </Dropdown.Item>
        <Dropdown.Item>
          <Dropdown.Label>
            <Checkbox
              onChange={() => {
                setFilter('status', 'unchecked')
                toggleDropdown()
              }}
              checked={handleCheckbox('unchecked')}
            />
            <UncheckedBoxIcon />
            Unchecked
          </Dropdown.Label>
        </Dropdown.Item>
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
  return (
    <div className="flex grow flex-col items-center justify-center p-4 text-center text-pretty">
      <span className="border-section-outline mb-4 flex size-12 items-center justify-center rounded-sm border">
        <CheckboxIcon />
      </span>
      <h2 className="mb-2">Sorry, You Have No Tasks</h2>
      <p className="mb-4">Get started by creating your first task</p>
      <CreateNewTaskModalButton
        variant="primary"
        size="small"
        leftIcon={<PlusIcon />}
      >
        Create New Task
      </CreateNewTaskModalButton>
    </div>
  )
}
