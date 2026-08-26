import IssueItem from '@/components/issues/issue-item'
import Button from '@/components/ui/button'
import Divider from '@/components/ui/divider'
import ArrowsSortIcon from '@/icons/arrows-sort-icon'
import CircleDashedIcon from '@/icons/circle-dashed-icon'
import CircleFullIcon from '@/icons/circle-full-icon'
import CircleHalfIcon from '@/icons/circle-half-icon'
import CircleThreeQuartersIcon from '@/icons/circle-three-quarters-icon'
import FilterIcon from '@/icons/filters-icon'
import KanbanIcon from '@/icons/kanban-icon'
import ListIcon from '@/icons/list-icon'
import PlusIcon from '@/icons/plus-icon'

export default function IssuesPanel() {
  return (
    <div className="flex h-full flex-col overflow-y-hidden">
      <div className="p-4">
        <span className="font-medium">Issues</span>
      </div>
      <Divider />
      <div className="flex min-h-15.5 shrink-0 flex-wrap items-center justify-between gap-2 p-4">
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
        <div className="flex w-max items-center rounded-sm bg-neutral-100 ring inset-ring ring-neutral-900/10 inset-ring-white">
          <button className="flex items-center gap-1 rounded-sm bg-white px-1.5 py-1 text-sm font-medium text-black ring ring-neutral-300 transition-colors hover:cursor-pointer hover:text-black [&_svg]:size-4">
            <ListIcon />
            List
          </button>
          <button className="flex items-center gap-1 rounded-sm px-1.5 py-1 text-sm font-medium text-neutral-600 transition-colors hover:cursor-pointer hover:text-black [&_svg]:size-4">
            <KanbanIcon />
            Kanban
          </button>
        </div>
      </div>
      <Divider />
      <div className="scrollbar-none overflow-y-auto @4xl/dashboard:scrollbar-thin">
        <div>
          <div className="sticky top-0 z-2 flex items-center justify-between border-b border-b-neutral-200 bg-white p-4">
            <div className="flex items-center gap-1">
              <CircleDashedIcon />
              <span className="font-medium">Backlog</span>
              <span className="ml-1 text-neutral-600">1</span>
            </div>
            <PlusIcon />
          </div>
          <ul>
            <li>
              <IssueItem
                title="Add draft linking with issues and tasks"
                status="backlog"
                priority="low"
                tag="feature"
              />
            </li>
          </ul>
        </div>
        <div>
          <div className="sticky top-0 z-2 flex items-center justify-between border-b border-b-neutral-200 bg-white p-4">
            <div className="flex items-center gap-1">
              <CircleDashedIcon />
              <span className="font-medium">Todo</span>
              <span className="ml-1 text-neutral-600">3</span>
            </div>
            <PlusIcon />
          </div>
          <ul>
            <li>
              <IssueItem
                title="Improve Kanban board organization and usability"
                status="todo"
                priority="high"
                tag="improvement"
              />
            </li>
            <li>
              <IssueItem
                title="Add comments and discussions inside issues"
                status="todo"
                priority="medium"
                tag="feature"
              />
            </li>
            <li>
              <IssueItem
                title="Add issue activity history timeline"
                status="todo"
                priority="low"
                tag="feature"
              />
            </li>
          </ul>
        </div>
        <div>
          <div className="sticky top-0 z-2 flex items-center justify-between border-b border-b-neutral-200 bg-white p-4">
            <div className="flex items-center gap-1">
              <CircleHalfIcon />
              <span className="font-medium">In Progress</span>
              <span className="ml-1 text-neutral-600">3</span>
            </div>
            <PlusIcon />
          </div>
          <ul>
            <li>
              <IssueItem
                title="Improve issue filtering and filter management"
                status="in-progress"
                priority="high"
                tag="improvement"
              />
            </li>
            <li>
              <IssueItem
                title="Add reusable issue templates"
                status="in-progress"
                priority="medium"
                tag="feature"
              />
            </li>
            <li>
              <IssueItem
                title="Task completion state does not persist after refresh"
                status="in-progress"
                priority="medium"
                tag="bug"
              />
            </li>
          </ul>
        </div>
        <div>
          <div className="sticky top-0 z-2 flex items-center justify-between border-b border-b-neutral-200 bg-white p-4">
            <div className="flex items-center gap-1">
              <CircleThreeQuartersIcon />
              <span className="font-medium">In Review</span>
              <span className="ml-1 text-neutral-600">2</span>
            </div>
            <PlusIcon />
          </div>
          <ul>
            <li>
              <IssueItem
                title="Design approval is blocking new Kanban improvements"
                status="in-review"
                priority="high"
                tag="blocker"
              />
            </li>
            <li>
              <IssueItem
                title="Deleted issues remain visible in search results"
                status="in-review"
                priority="medium"
                tag="bug"
              />
            </li>
          </ul>
        </div>
        <div>
          <div className="sticky top-0 z-2 flex items-center justify-between border-b border-b-neutral-200 bg-white p-4">
            <div className="flex items-center gap-1">
              <CircleFullIcon />
              <span className="font-medium">Finished</span>
              <span className="ml-1 text-neutral-600">1</span>
            </div>
            <PlusIcon />
          </div>
          <ul>
            <li>
              <IssueItem
                title="Add issue templates for faster issue creation"
                status="finished"
                priority="urgent"
                tag="feature"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
