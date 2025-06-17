import IssuesListBoard from '@dashboard-components/issues-list-board'
import ProjectInformationModalButton from '@dashboard-components/project-information-modal-button'
import Divider from '@dashboard-components/ui/divider'
import Dropdown from '@dashboard-components/ui/dropdown'
import DropdownButton from '@dashboard-components/ui/dropdown-button'
import useDropdown from '@hooks/use-dropdown'
import ArrowsSortIcon from '@icons/arrows-sort-icon'
import CalendarIcon from '@icons/calendar-icon'
import FilterIcon from '@icons/filter-icon'
import LayoutSidebarRightIcon from '@icons/layout-sidebar-right-icon'
import LetterCaseIcon from '@icons/letter-case-icon'
import PriorityLowIcon from '@icons/priority-low-icon'
import { useIssues } from '@services/contexts/issues-context'
import Button from '@ui/button'

export default function IssuesSection() {
  return (
    <section>
      <header className="flex items-center justify-between p-4">
        <h1>Issues</h1>
        <ProjectInformationModalButton
          variant="tertiary"
          className="group p-0.5"
        >
          <LayoutSidebarRightIcon className="[--clip-path:_polygon(0_0,_100%_0,_100%_100%,_0_100%)] group-hover:[&_rect]:[clip-path:var(--clip-path)] pointer-coarse:group-active:[&_rect]:[clip-path:var(--clip-path)]" />
          <span className="sr-only">Show project information</span>
        </ProjectInformationModalButton>
      </header>
      <Divider />
      <div role="toolbar" className="flex items-center gap-2 p-4">
        <Button variant="secondary" size="small" leftIcon={<FilterIcon />}>
          Filters
        </Button>
        <SortDropdownButton />
      </div>
      <Divider />
      <IssuesListBoard />
    </section>
  )
}

function SortDropdownButton() {
  const { sort, setSort } = useIssues()
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
            <Dropdown.RadioButton
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
            <Dropdown.RadioButton
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
            <Dropdown.RadioButton
              name="sort"
              checked={sort === 'priority-asc'}
              onChange={() => {
                setSort('priority-asc')
                toggleDropdown()
              }}
            />
            <PriorityLowIcon />
            Low to High
          </Dropdown.Label>
        </Dropdown.Item>
        <Dropdown.Item>
          <Dropdown.Label>
            <Dropdown.RadioButton
              name="sort"
              checked={sort === 'priority-desc'}
              onChange={() => {
                setSort('priority-desc')
                toggleDropdown()
              }}
            />
            <PriorityLowIcon />
            High to Low
          </Dropdown.Label>
        </Dropdown.Item>
        <Dropdown.Item>
          <Dropdown.Label>
            <Dropdown.RadioButton
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
            <Dropdown.RadioButton
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
