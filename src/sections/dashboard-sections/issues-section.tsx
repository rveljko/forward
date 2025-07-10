import IssuesKanbanBoard from '@dashboard-components/issues-kanban-board'
import IssuesListBoard from '@dashboard-components/issues-list-board'
import ProjectInformationModalButton from '@dashboard-components/project-information-modal-button'
import Checkbox from '@dashboard-components/ui/checkbox'
import Divider from '@dashboard-components/ui/divider'
import Dropdown from '@dashboard-components/ui/dropdown'
import DropdownButton from '@dashboard-components/ui/dropdown-button'
import RadioButton from '@dashboard-components/ui/radio-button'
import Switcher from '@dashboard-components/ui/switcher'
import { issuePriorities } from '@data/issue-priorities'
import { issueStatuses } from '@data/issue-statuses'
import { issueTags } from '@data/issue-tags'
import { DndContext, DragOverEvent, DragStartEvent } from '@dnd-kit/core'
import useDropdown from '@hooks/use-dropdown'
import ArrowsSortIcon from '@icons/arrows-sort-icon'
import CalendarIcon from '@icons/calendar-icon'
import DragDropIcon from '@icons/drag-drop-icon'
import FilterIcon from '@icons/filter-icon'
import KanbanIcon from '@icons/kanban-icon'
import LayoutSidebarRightIcon from '@icons/layout-sidebar-right-icon'
import LetterCaseIcon from '@icons/letter-case-icon'
import ListIcon from '@icons/list-icon'
import PriorityIcon from '@icons/priority-icon'
import StatusIcon from '@icons/status-icon'
import TagIcon from '@icons/tag-icon'
import { useIssues } from '@services/contexts/issues-context'
import { Issue } from '@utils/types'
import { useEffect, useState } from 'react'

function getInitialView(): 'list' | 'kanban' {
  const view = localStorage.getItem('view')
  return view ? JSON.parse(view) : 'list'
}

export default function IssuesSection() {
  const { updateIssuePosition } = useIssues()
  const [view, setView] = useState(getInitialView)
  const [activeId, setActiveId] = useState<Issue['id'] | null>(null)

  function handleDragStart(e: DragStartEvent) {
    setActiveId(e.active.id as Issue['id'])
  }

  function handleDragOver(e: DragOverEvent) {
    const { active, over } = e

    if (!over) return

    if (active.id === over.id) return

    updateIssuePosition(active.id, over.id)
  }

  function handleDragEnd() {
    setActiveId(null)
  }

  useEffect(() => {
    localStorage.setItem('view', JSON.stringify(view))
  }, [view])

  return (
    <section className="flex h-full flex-col">
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
      <div
        role="toolbar"
        className="flex flex-wrap items-center justify-between gap-2 p-4"
      >
        <div className="flex items-center gap-2">
          <FilterDropdownButton />
          <SortDropdownButton />
        </div>
        <Switcher>
          <Switcher.Element
            onClick={() => setView('list')}
            isActive={view === 'list'}
          >
            <ListIcon />
            <span className="sr-only">List view</span>
          </Switcher.Element>
          <Switcher.Element
            onClick={() => setView('kanban')}
            isActive={view === 'kanban'}
          >
            <KanbanIcon />
            <span className="sr-only">Kanban view</span>
          </Switcher.Element>
        </Switcher>
      </div>
      <Divider />
      <DndContext
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        {view === 'list' && <IssuesListBoard activeId={activeId} />}
        {view === 'kanban' && <IssuesKanbanBoard activeId={activeId} />}
      </DndContext>
    </section>
  )
}

function FilterDropdownButton() {
  const { setFilter, handleCheckbox } = useIssues()
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
      <Dropdown.Accordion>
        <Dropdown.AccordionItem value="item-1">
          <Dropdown.AccordionSummary
            valueForItem="item-1"
            icon={<StatusIcon />}
          >
            Status
          </Dropdown.AccordionSummary>
          <Dropdown.List>
            {issueStatuses.map(({ id, name, label, icon: Icon }) => (
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
        </Dropdown.AccordionItem>
        <Dropdown.AccordionItem value="item-2">
          <Dropdown.AccordionSummary
            valueForItem="item-2"
            icon={<PriorityIcon />}
          >
            Priority
          </Dropdown.AccordionSummary>
          <Dropdown.List>
            {issuePriorities.map(({ id, name, label, icon: Icon }) => (
              <Dropdown.Item key={id}>
                <Dropdown.Label>
                  <Checkbox
                    onChange={() => {
                      setFilter('priority', label)
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
        </Dropdown.AccordionItem>
        <Dropdown.AccordionItem value="item-3">
          <Dropdown.AccordionSummary valueForItem="item-3" icon={<TagIcon />}>
            Tag
          </Dropdown.AccordionSummary>
          <Dropdown.List>
            {issueTags.map(({ id, name, label, icon: Icon }) => (
              <Dropdown.Item key={id}>
                <Dropdown.Label>
                  <Checkbox
                    onChange={() => {
                      setFilter('tag', label)
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
        </Dropdown.AccordionItem>
      </Dropdown.Accordion>
    </DropdownButton>
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
            <RadioButton
              name="sort"
              checked={sort === 'manual'}
              onChange={() => {
                setSort('manual')
                toggleDropdown()
              }}
            />
            <DragDropIcon />
            Manual
          </Dropdown.Label>
        </Dropdown.Item>
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
              checked={sort === 'priority-asc'}
              onChange={() => {
                setSort('priority-asc')
                toggleDropdown()
              }}
            />
            <PriorityIcon />
            Low to High
          </Dropdown.Label>
        </Dropdown.Item>
        <Dropdown.Item>
          <Dropdown.Label>
            <RadioButton
              name="sort"
              checked={sort === 'priority-desc'}
              onChange={() => {
                setSort('priority-desc')
                toggleDropdown()
              }}
            />
            <PriorityIcon />
            High to Low
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
