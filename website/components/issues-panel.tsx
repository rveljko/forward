import ArrowsSortIcon from '@/icons/arrows-sort-icon'
import CircleDashedIcon from '@/icons/circle-dashed-icon'
import CircleEmptyIcon from '@/icons/circle-empty-icon'
import CircleHalfIcon from '@/icons/circle-half-icon'
import DesignIssueTagIcon from '@/icons/design-issue-tag-icon'
import DevelopmentIssueTagIcon from '@/icons/development-issue-tag-icon'
import DotsVerticalIcon from '@/icons/dots-vertical-icon'
import FilterIcon from '@/icons/filters-icon'
import KanbanIcon from '@/icons/kanban-icon'
import ListIcon from '@/icons/list-icon'
import PlusIcon from '@/icons/plus-icon'
import PriorityHighIcon from '@/icons/priority-high-icon'
import PriorityMediumIcon from '@/icons/priority-medium-icon'
import { dayMonthShortFormatter } from '@/utils/date-formatters'

export default function IssuesPanel() {
  return (
    <>
      <div className="border-b border-b-black/10 p-4">Issues</div>
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-b-black/10 p-4">
        <div className="flex items-center gap-2">
          <span className="bg-dashboard-neutral-200 flex w-max items-center gap-1 rounded-md px-1.5 py-1 text-black shadow-sm">
            <FilterIcon />
            Filters
          </span>
          <span className="bg-dashboard-neutral-200 flex w-max items-center gap-1 rounded-md px-1.5 py-1 text-black shadow-sm">
            <ArrowsSortIcon />
            Sort
          </span>
        </div>
        <div className="bg-dashboard-neutral-200 flex rounded-md p-0.5 shadow-sm">
          <span className="flex rounded-sm bg-white px-3 py-1">
            <ListIcon />
          </span>
          <span className="text-dashboard-neutral-600 flex px-3 py-1">
            <KanbanIcon />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between bg-black/10 p-4">
        <div className="flex items-center gap-1">
          <CircleDashedIcon />
          Backlog
          <span className="text-dashboard-neutral-600 ml-1">1</span>
        </div>
        <PlusIcon />
      </div>
      <IssueItem
        title="Implement Notification System"
        priorityIcon={<PriorityHighIcon />}
        statusIcon={<CircleDashedIcon />}
        tag="Development"
        tagIcon={<DevelopmentIssueTagIcon />}
        createdAt={new Date()}
      />
      <div className="flex items-center justify-between bg-black/10 p-4">
        <div className="flex items-center gap-1">
          <CircleEmptyIcon />
          Todo
          <span className="text-dashboard-neutral-600 ml-1">2</span>
        </div>
        <PlusIcon />
      </div>
      <div className="divide-y divide-black/10">
        <IssueItem
          title="Create and Report Issues"
          priorityIcon={<PriorityHighIcon />}
          statusIcon={<CircleEmptyIcon />}
          tag="Development"
          tagIcon={<DevelopmentIssueTagIcon />}
          createdAt={new Date()}
        />
        <IssueItem
          title="Update Status"
          priorityIcon={<PriorityMediumIcon />}
          statusIcon={<CircleEmptyIcon />}
          tag="Design"
          tagIcon={<DesignIssueTagIcon />}
          createdAt={new Date()}
        />
      </div>
      <div className="flex items-center justify-between bg-black/10 p-4">
        <div className="flex items-center gap-1">
          <CircleHalfIcon />
          In Progress
          <span className="text-dashboard-neutral-600 ml-1">1</span>
        </div>
        <PlusIcon />
      </div>
      <IssueItem
        title="Integrate With Other Tools"
        priorityIcon={<PriorityHighIcon />}
        statusIcon={<CircleHalfIcon />}
        tag="Development"
        tagIcon={<DevelopmentIssueTagIcon />}
        createdAt={new Date()}
      />
    </>
  )
}

type IssueItemProps = {
  title: string
  priorityIcon: React.JSX.Element
  statusIcon: React.JSX.Element
  tag: string
  tagIcon: React.JSX.Element
  createdAt: Date
}

function IssueItem({
  title,
  priorityIcon: PriorityIcon,
  statusIcon: StatusIcon,
  tag,
  tagIcon: TagIcon,
  createdAt,
}: IssueItemProps) {
  return (
    <article className="flex h-15.5 items-center justify-between gap-2 p-4">
      <div className="flex items-center gap-1">
        <span className="mr-1 shrink-0">{PriorityIcon}</span>
        <span className="shrink-0">{StatusIcon}</span>
        <span className="line-clamp-1 break-all">{title}</span>
      </div>
      <div className="text-dashboard-neutral-600 flex items-center gap-2">
        <div className="flex items-center gap-2 max-lg:hidden">
          <span className="flex w-max items-center justify-center gap-1 rounded-full border border-black/10 px-3 py-1 text-sm">
            {TagIcon}
            {tag}
          </span>
          <span className="text-sm text-nowrap">
            {dayMonthShortFormatter(createdAt)}
          </span>
        </div>
        <DotsVerticalIcon />
      </div>
    </article>
  )
}
