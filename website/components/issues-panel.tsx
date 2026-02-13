import IssueItem from '@/components/issue-item'
import ArrowsSortIcon from '@/icons/arrows-sort-icon'
import CircleDashedIcon from '@/icons/circle-dashed-icon'
import CircleEmptyIcon from '@/icons/circle-empty-icon'
import CircleHalfIcon from '@/icons/circle-half-icon'
import FilterIcon from '@/icons/filters-icon'
import KanbanIcon from '@/icons/kanban-icon'
import ListIcon from '@/icons/list-icon'
import PlusIcon from '@/icons/plus-icon'

export default function IssuesPanel() {
  return (
    <>
      <div className="border-b border-b-black/10 p-4 text-sm font-medium">
        Issues
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-b-black/10 p-4">
        <div className="flex items-center gap-2">
          <span className="bg-dashboard-neutral-200 flex w-max items-center gap-1 rounded-md px-1.5 py-1 text-sm text-black shadow-sm">
            <FilterIcon />
            Filters
          </span>
          <span className="bg-dashboard-neutral-200 flex w-max items-center gap-1 rounded-md px-1.5 py-1 text-sm text-black shadow-sm">
            <ArrowsSortIcon />
            Sort
          </span>
        </div>
        <div className="bg-dashboard-neutral-200 flex rounded-md p-0.5 shadow-sm">
          <span className="flex rounded-sm bg-white px-2.5 py-0.5">
            <ListIcon />
          </span>
          <span className="text-dashboard-neutral-600 flex px-2.5 py-0.5">
            <KanbanIcon />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between bg-black/10 p-4">
        <div className="flex items-center gap-1 text-sm font-medium">
          <CircleDashedIcon />
          Backlog
          <span className="text-dashboard-neutral-600 ml-1 text-sm">1</span>
        </div>
        <PlusIcon />
      </div>
      <IssueItem
        title="Implement Notification System"
        status="backlog"
        priority="high"
        tag="development"
      />
      <div className="flex items-center justify-between bg-black/10 p-4">
        <div className="flex items-center gap-1 text-sm font-medium">
          <CircleEmptyIcon />
          Todo
          <span className="text-dashboard-neutral-600 ml-1 text-sm">2</span>
        </div>
        <PlusIcon />
      </div>
      <div className="divide-y divide-black/10">
        <IssueItem
          title="Create and Report Issues"
          status="todo"
          priority="high"
          tag="development"
        />
        <IssueItem
          title="Update Status"
          status="todo"
          priority="medium"
          tag="design"
        />
      </div>
      <div className="flex items-center justify-between bg-black/10 p-4">
        <div className="flex items-center gap-1 text-sm font-medium">
          <CircleHalfIcon />
          In Progress
          <span className="text-dashboard-neutral-600 ml-1 text-sm">1</span>
        </div>
        <PlusIcon />
      </div>
      <IssueItem
        title="Integrate With Other Tools"
        status="in-progress"
        priority="high"
        tag="development"
      />
    </>
  )
}
