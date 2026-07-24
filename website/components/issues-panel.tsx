import IssueItem from '@/components/issue-item'
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
      <div className="scrollbar-none overflow-y-auto">
        <div>
          <div className="sticky top-0 z-2 flex items-center justify-between border-b border-b-neutral-200 bg-white p-4">
            <div className="flex items-center gap-1">
              <CircleDashedIcon />
              <span className="font-medium">Backlog</span>
              <span className="ml-1 text-neutral-600">1</span>
            </div>
            <PlusIcon />
          </div>
          <ul className="divide-y divide-neutral-200 last:border-b last:border-b-neutral-200">
            <li>
              <IssueItem
                title="Implement Notification System"
                status="backlog"
                priority="high"
                tag="development"
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
          <ul className="divide-y divide-neutral-200 last:border-b last:border-b-neutral-200">
            <li>
              <IssueItem
                title="Create and Report Issues"
                status="todo"
                priority="high"
                tag="development"
              />
            </li>
            <li>
              <IssueItem
                title="Update Status"
                status="todo"
                priority="medium"
                tag="development"
              />
            </li>
            <li>
              <IssueItem
                title="Add Comments"
                status="todo"
                priority="medium"
                tag="development"
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
          <ul className="divide-y divide-neutral-200 last:border-b last:border-b-neutral-200">
            <li>
              <IssueItem
                title="Integrate with Other Tools"
                status="in-progress"
                priority="high"
                tag="development"
              />
            </li>
            <li>
              <IssueItem
                title="Set Priorities"
                status="in-progress"
                priority="medium"
                tag="development"
              />
            </li>
            <li>
              <IssueItem
                title="Filter and Sort Issues"
                status="in-progress"
                priority="medium"
                tag="development"
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
          <ul className="divide-y divide-neutral-200 last:border-b last:border-b-neutral-200">
            <li>
              <IssueItem
                title="Use Tags"
                status="in-review"
                priority="high"
                tag="development"
              />
            </li>
            <li>
              <IssueItem
                title="Utilize Mobile Access"
                status="in-review"
                priority="medium"
                tag="development"
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
          <ul className="divide-y divide-neutral-200 last:border-b last:border-b-neutral-200">
            <li>
              <IssueItem
                title="Attach Files and Documents"
                status="finished"
                priority="high"
                tag="development"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
