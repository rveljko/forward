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
          'h-29.5 rounded-md border border-dashed border-neutral-200 bg-white',
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
        `relative rounded-md bg-white p-4 shadow-sm ring ring-neutral-900/10 hover:ring-neutral-900/20 pointer-coarse:transition-all pointer-coarse:active:scale-99 pointer-coarse:active:ring-neutral-900/20 ${activeIssueId === id ? 'ring-neutral-900/20' : ''}`,
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
          <IssueStatus status={status} className="isolate z-1" />
          <h3>
            <Link
              to={`/issues/${id}`}
              className="line-clamp-1 break-all text-black"
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
            className="hover:text-clickable isolate -m-2 rounded-full p-2 text-neutral-600"
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
