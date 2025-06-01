import IssuesListBoard from '@dashboard-components/issues-list-board'
import Divider from '@dashboard-components/ui/divider'
import ArrowsSortIcon from '@icons/arrows-sort-icon'
import FilterIcon from '@icons/filter-icon'
import SidebarClosedIcon from '@icons/sidebar-closed-icon'
import Button from '@ui/button'

export default function IssuesSection() {
  return (
    <section>
      <header className="flex items-center justify-between p-4">
        <h1>Issues</h1>
        <Button variant="tertiary" className="p-0.5">
          <SidebarClosedIcon />
        </Button>
      </header>
      <Divider />
      <div className="flex items-center gap-2 p-4">
        <Button variant="secondary" size="small" leftIcon={<FilterIcon />}>
          Filters
        </Button>
        <Button variant="secondary" size="small" leftIcon={<ArrowsSortIcon />}>
          Sort
        </Button>
      </div>
      <Divider />
      <IssuesListBoard />
    </section>
  )
}
