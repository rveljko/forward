import IssueItem from '@/components/issues/issue-item'
import IssuesKanbanCard from '@/components/issues/issues-kanban-card'
import { ActiveView } from '@/components/issues/issues-section-preview'
import Button from '@/components/ui/button'
import Divider from '@/components/ui/divider'
import Switcher from '@/components/ui/switcher'
import ArrowsSortIcon from '@/icons/arrows-sort-icon'
import CircleDashedIcon from '@/icons/circle-dashed-icon'
import CircleEmptyIcon from '@/icons/circle-empty-icon'
import CircleFullIcon from '@/icons/circle-full-icon'
import CircleHalfIcon from '@/icons/circle-half-icon'
import CircleThreeQuartersIcon from '@/icons/circle-three-quarters-icon'
import FilterIcon from '@/icons/filters-icon'
import KanbanIcon from '@/icons/kanban-icon'
import ListIcon from '@/icons/list-icon'
import PlusIcon from '@/icons/plus-icon'
import { AnimatePresence, motion } from 'motion/react'

type IssuesPanelProps = {
  activeView: ActiveView
  setActiveView: React.Dispatch<React.SetStateAction<ActiveView>>
}

export default function IssuesPanel({
  activeView,
  setActiveView,
}: IssuesPanelProps) {
  return (
    <div className="isolate flex h-full flex-col overflow-y-hidden">
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
        <Switcher>
          <Switcher.Button
            isActive={activeView === 'list'}
            leftIcon={<ListIcon />}
            onClick={() => setActiveView('list')}
          >
            List
          </Switcher.Button>
          <Switcher.Button
            isActive={activeView === 'kanban'}
            leftIcon={<KanbanIcon />}
            onClick={() => setActiveView('kanban')}
          >
            Kanban
          </Switcher.Button>
        </Switcher>
      </div>
      <Divider />
      <AnimatePresence mode="wait" initial={false}>
        {activeView === 'list' && (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="scrollbar-none overflow-x-hidden overflow-y-auto @4xl/dashboard:scrollbar-thin"
          >
            <ListView />
          </motion.div>
        )}
        {activeView === 'kanban' && (
          <motion.div
            key="kanban"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-0 flex-1 scrollbar-none overflow-auto @4xl/dashboard:scrollbar-thin"
          >
            <KanbanView />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function ListView() {
  return (
    <>
      <div>
        <div className="sticky top-0 z-2 flex items-center justify-between border-b border-b-neutral-200 bg-white p-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-black">
                <CircleDashedIcon />
              </span>
              <span className="font-medium text-neutral-900">Backlog</span>
            </div>
            <span className="text-neutral-600">1</span>
          </div>
          <Button variant="tertiary" className="-m-2 p-2">
            <PlusIcon />
          </Button>
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
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-black">
                <CircleEmptyIcon />
              </span>
              <span className="font-medium text-neutral-900">Todo</span>
            </div>
            <span className="text-neutral-600">3</span>
          </div>
          <Button variant="tertiary" className="-m-2 p-2">
            <PlusIcon />
          </Button>
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
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-black">
                <CircleHalfIcon />
              </span>
              <span className="font-medium text-neutral-900">In Progress</span>
            </div>
            <span className="text-neutral-600">3</span>
          </div>
          <Button variant="tertiary" className="-m-2 p-2">
            <PlusIcon />
          </Button>
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
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-black">
                <CircleThreeQuartersIcon />
              </span>
              <span className="font-medium text-neutral-900">In Review</span>
            </div>
            <span className="text-neutral-600">2</span>
          </div>
          <Button variant="tertiary" className="-m-2 p-2">
            <PlusIcon />
          </Button>
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
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-black">
                <CircleFullIcon />
              </span>
              <span className="font-medium text-neutral-900">Finished</span>
            </div>
            <span className="text-neutral-600">1</span>
          </div>
          <Button variant="tertiary" className="-m-2 p-2">
            <PlusIcon />
          </Button>
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
    </>
  )
}

function KanbanView() {
  return (
    <div className="h-full w-0 min-w-full">
      <div className="flex min-h-full items-stretch divide-x divide-neutral-200 py-4">
        <div className="pr-2 pl-4">
          <div className="flex min-h-full w-85 shrink-0 flex-col gap-2">
            <div className="sticky top-0 z-10 flex items-center justify-between bg-neutral-50 p-4 ring ring-neutral-50">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-black">
                  <CircleDashedIcon />
                  <span className="font-medium">Backlog</span>
                </div>
                <span className="text-neutral-600">1</span>
              </div>
              <Button variant="tertiary" className="-m-2 p-2">
                <PlusIcon />
              </Button>
            </div>
            <ul className="flex min-h-0 flex-1 flex-col gap-2">
              <li>
                <IssuesKanbanCard
                  title="Add draft linking with issues and tasks"
                  status="backlog"
                  priority="low"
                  tag="feature"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="px-2">
          <div className="flex min-h-full w-85 shrink-0 flex-col gap-2">
            <div className="sticky top-0 z-10 flex items-center justify-between bg-neutral-50 p-4 ring ring-neutral-50">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-black">
                  <CircleEmptyIcon />
                  <span className="font-medium">Todo</span>
                </div>
                <span className="text-neutral-600">3</span>
              </div>
              <Button variant="tertiary" className="-m-2 p-2">
                <PlusIcon />
              </Button>
            </div>
            <ul className="flex min-h-0 flex-1 flex-col gap-2">
              <li>
                <IssuesKanbanCard
                  title="Improve Kanban board organization and usability"
                  status="todo"
                  priority="high"
                  tag="improvement"
                />
              </li>
              <li>
                <IssuesKanbanCard
                  title="Add comments and discussions inside issues"
                  status="todo"
                  priority="medium"
                  tag="feature"
                />
              </li>
              <li>
                <IssuesKanbanCard
                  title="Add issue activity history timeline"
                  status="todo"
                  priority="low"
                  tag="feature"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="px-2">
          <div className="flex min-h-full w-85 shrink-0 flex-col gap-2">
            <div className="sticky top-0 z-10 flex items-center justify-between bg-neutral-50 p-4 ring ring-neutral-50">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-black">
                  <CircleHalfIcon />
                  <span className="font-medium">In Progress</span>
                </div>
                <span className="text-neutral-600">3</span>
              </div>
              <Button variant="tertiary" className="-m-2 p-2">
                <PlusIcon />
              </Button>
            </div>
            <ul className="flex min-h-0 flex-1 flex-col gap-2">
              <li>
                <IssuesKanbanCard
                  title="Improve issue filtering and filter management"
                  status="in-progress"
                  priority="high"
                  tag="improvement"
                />
              </li>
              <li>
                <IssuesKanbanCard
                  title="Add reusable issue templates"
                  status="in-progress"
                  priority="medium"
                  tag="feature"
                />
              </li>
              <li>
                <IssuesKanbanCard
                  title="Task completion state does not persist after refresh"
                  status="in-progress"
                  priority="medium"
                  tag="bug"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="px-2">
          <div className="flex min-h-full w-85 shrink-0 flex-col gap-2">
            <div className="sticky top-0 z-10 flex items-center justify-between bg-neutral-50 p-4 ring ring-neutral-50">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-black">
                  <CircleThreeQuartersIcon />
                  <span className="font-medium">In Review</span>
                </div>
                <span className="text-neutral-600">2</span>
              </div>
              <Button variant="tertiary" className="-m-2 p-2">
                <PlusIcon />
              </Button>
            </div>
            <ul className="flex min-h-0 flex-1 flex-col gap-2">
              <li>
                <IssuesKanbanCard
                  title="Design approval is blocking new Kanban improvements"
                  status="in-review"
                  priority="high"
                  tag="blocker"
                />
              </li>
              <li>
                <IssuesKanbanCard
                  title="Deleted issues remain visible in search results"
                  status="in-review"
                  priority="medium"
                  tag="bug"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="pr-4 pl-2">
          <div className="flex min-h-full w-85 shrink-0 flex-col gap-2">
            <div className="sticky top-0 z-10 flex items-center justify-between bg-neutral-50 p-4 ring ring-neutral-50">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-black">
                  <CircleHalfIcon />
                  <span className="font-medium">Finished</span>
                </div>
                <span className="text-neutral-600">1</span>
              </div>
              <Button variant="tertiary" className="-m-2 p-2">
                <PlusIcon />
              </Button>
            </div>
            <ul className="flex min-h-0 flex-1 flex-col gap-2">
              <li>
                <IssuesKanbanCard
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
    </div>
  )
}
