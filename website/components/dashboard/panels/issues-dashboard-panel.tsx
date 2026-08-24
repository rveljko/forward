import IssuePriority from '@/components/issues/issue-priority'
import IssueStatus from '@/components/issues/issue-status'
import IssueTag from '@/components/issues/issue-tag'
import Button from '@/components/ui/button'
import Divider from '@/components/ui/divider'
import ArrowsSortIcon from '@/icons/arrows-sort-icon'
import CircleDashedIcon from '@/icons/circle-dashed-icon'
import CircleEmptyIcon from '@/icons/circle-empty-icon'
import CircleHalfIcon from '@/icons/circle-half-icon'
import DotsVerticalIcon from '@/icons/dots-vertical-icon'
import FilterIcon from '@/icons/filters-icon'
import KanbanIcon from '@/icons/kanban-icon'
import LayoutSidebarRightIcon from '@/icons/layout-sidebar-right-icon'
import ListIcon from '@/icons/list-icon'
import PlusIcon from '@/icons/plus-icon'
import { dayMonthShortFormatter } from '@/utils/date-formatters'
import { Issue } from '@/utils/types'

export default function IssuesDashboardPanel() {
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <span className="font-medium">Issues</span>
        <LayoutSidebarRightIcon />
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
      <div>
        <div className="flex items-center justify-between border-b border-b-neutral-200 bg-white p-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <CircleDashedIcon />
              <span className="font-medium text-neutral-900">Backlog</span>
            </div>
            <span className="text-neutral-600">1</span>
          </div>
          <PlusIcon />
        </div>
        <div>
          <IssueItem
            title="Add draft linking with issues and tasks"
            status="backlog"
            priority="low"
            tag="feature"
          />
        </div>
        <div className="flex items-center justify-between border-b border-b-neutral-200 bg-white p-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <CircleEmptyIcon />
              <span className="font-medium text-neutral-900">Todo</span>
            </div>
            <span className="text-neutral-600">3</span>
          </div>
          <PlusIcon />
        </div>
        <div>
          <IssueItem
            title="Improve Kanban board organization and usability"
            status="todo"
            priority="high"
            tag="improvement"
          />
          <IssueItem
            title="Add comments and discussions inside issues"
            status="todo"
            priority="medium"
            tag="feature"
          />
          <IssueItem
            title="Add issue activity history timeline"
            status="todo"
            priority="low"
            tag="feature"
          />
        </div>
        <div className="flex items-center justify-between border-b border-b-neutral-200 bg-white p-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <CircleHalfIcon />
              <span className="font-medium text-neutral-900">In Progress</span>
            </div>
            <span className="text-neutral-600">3</span>
          </div>
          <PlusIcon />
        </div>
        <div>
          <IssueItem
            title="Improve Kanban board organization and usability"
            status="todo"
            priority="high"
            tag="improvement"
          />
        </div>
      </div>
    </>
  )
}

type IssueItemProps = Issue

function IssueItem({ title, status, priority, tag }: IssueItemProps) {
  return (
    <article className="flex items-center justify-between border-b border-b-neutral-200 p-4">
      <div className="flex items-center gap-2">
        <IssuePriority priority={priority} />
        <div className="flex items-center gap-1">
          <IssueStatus status={status} />
          <span className="line-clamp-1 font-medium break-all">{title}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <IssueTag tag={tag} />
        <span className="text-xs text-nowrap text-neutral-600">
          {dayMonthShortFormatter(new Date())}
        </span>
        <span className="text-neutral-600">
          <DotsVerticalIcon />
        </span>
      </div>
    </article>
  )
}
