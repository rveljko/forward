import Divider from '@dashboard-components/ui/divider'
import ArrowsSortIcon from '@icons/arrows-sort-icon'
import FilterIcon from '@icons/filter-icon'
import PlusIcon from '@icons/plus-icon'
import Button from '@ui/button'

export default function TasksSection() {
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
        <Button variant="primary" size="small" leftIcon={<PlusIcon />}>
          Create New Task
        </Button>
      </div>
      <Divider />
    </section>
  )
}
