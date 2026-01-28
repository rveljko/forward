import IssueActionsModal from '@dashboard-components/issue-actions-modal'
import IssueDate from '@dashboard-components/ui/issue-date'
import IssuePriority from '@dashboard-components/ui/issue-priority'
import IssueStatus from '@dashboard-components/ui/issue-status'
import IssueTag from '@dashboard-components/ui/issue-tag'
import Modal from '@dashboard-components/ui/modal'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import useModal from '@hooks/use-modal'
import DotsVerticalIcon from '@icons/dots-vertical-icon'
import Button from '@ui/button'
import { Issue } from '@utils/types'
import { cn } from '@utils/utils'
import { AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { Link } from 'react-router'

type IssuesKanbanCardProps = React.ComponentPropsWithoutRef<'article'> & {
  issue: Issue
}

export default function IssuesKanbanCard({
  issue: { id, title, status, priority, tag, createdAt },
  className,
  ...props
}: IssuesKanbanCardProps) {
  const {
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
    setNodeRef,
  } = useSortable({ id })
  const {
    isOpened,
    openModal: openIssueActionsModal,
    closeModal: closeIssueActionsModal,
  } = useModal()
  const [activeIssueId, setActiveIssueId] = useState<Issue['id'] | null>(null)

  function openModal() {
    openIssueActionsModal()
    setActiveIssueId(id)
  }

  function closeModal() {
    closeIssueActionsModal()
    setActiveIssueId(null)
  }

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  if (isDragging)
    return (
      <article
        className={cn(
          'border-section-outline bg-issues-kanban-card-active-background h-32.5 rounded-sm border border-dashed',
          className
        )}
        style={style}
        ref={setNodeRef}
        {...props}
      />
    )

  return (
    <article
      className={cn(
        `ring-section-outline pointer-coarse:active:bg-issues-kanban-card-active-background pointer-coarse:active:ring-clickable/20 hover:ring-clickable/20 relative rounded-sm p-4 shadow-sm ring pointer-coarse:transition-all pointer-coarse:active:scale-99 ${activeIssueId === id ? 'bg-issues-kanban-card-active-background' : 'bg-section-background-color'}`,
        className
      )}
      style={style}
      ref={setNodeRef}
      onContextMenu={(e) => {
        e.preventDefault()
        openModal()
      }}
      {...attributes}
      {...listeners}
      {...props}
    >
      <header className="mb-4 flex items-center gap-2">
        <IssuePriority priority={priority} className="isolate z-1" />
        <div className="flex items-center gap-1">
          <IssueStatus status={status} />
          <h3>
            <Link
              to={`/dashboard/issues/${id}`}
              className="text-clickable line-clamp-1 break-all"
            >
              <span className="absolute inset-0" />
              {title}
            </Link>
          </h3>
        </div>
        <div className="ml-auto">
          <Button
            variant="tertiary"
            onClick={openModal}
            className="hover:text-clickable isolate -m-2 rounded-full p-2 text-neutral-400"
          >
            <DotsVerticalIcon />
            <span className="sr-only">Actions</span>
          </Button>
        </div>
      </header>
      <IssueDate date={createdAt} className="mb-2" />
      <IssueTag tag={tag} />
      <AnimatePresence>
        {isOpened && (
          <Modal isOpened={isOpened} closeModal={closeModal}>
            <Modal.Overlay>
              <Modal.Dialog>
                <Modal.FocusLock>
                  <IssueActionsModal closeModal={closeModal} issueId={id} />
                </Modal.FocusLock>
              </Modal.Dialog>
            </Modal.Overlay>
          </Modal>
        )}
      </AnimatePresence>
    </article>
  )
}
