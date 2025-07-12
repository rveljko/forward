import IssueActionsModal from '@dashboard-components/issue-actions-modal'
import IssueActionsModalButton from '@dashboard-components/issue-actions-modal-button'
import IssuePriority from '@dashboard-components/ui/issue-priority'
import IssueStatus from '@dashboard-components/ui/issue-status'
import IssueTag from '@dashboard-components/ui/issue-tag'
import Modal from '@dashboard-components/ui/modal'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import useModal from '@hooks/use-modal'
import DotsVerticalIcon from '@icons/dots-vertical-icon'
import DragVerticalIcon from '@icons/drag-vertical-icon'
import Button from '@ui/button'
import {
  dayMonthShortFormatter,
  iso8601DateFormatter,
} from '@utils/date-formatters'
import { Issue } from '@utils/types'
import { cn } from '@utils/utils'
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
  const { isOpened, toggleModal } = useModal()

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  if (isDragging)
    return (
      <article
        className={cn(
          'border-section-outline bg-clickable/5 h-34.5 rounded-sm border border-dashed',
          className
        )}
        style={style}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        {...props}
      />
    )

  return (
    <article
      className={cn(
        'ring-section-outline bg-section-background-color hover:ring-clickable/20 relative rounded-sm p-4 ring',
        className
      )}
      style={style}
      ref={setNodeRef}
      onContextMenu={(e) => {
        e.preventDefault()
        toggleModal()
      }}
      {...props}
    >
      <header className="mb-4 flex items-center gap-2">
        <Button
          variant="tertiary"
          className="hover:text-clickable z-1 -m-2 p-2 text-neutral-400 pointer-coarse:hidden"
          {...attributes}
          {...listeners}
        >
          <DragVerticalIcon />
          <span className="sr-only">Drag handle</span>
        </Button>
        <IssuePriority priority={priority} />
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
        <IssueActionsModalButton
          issueId={id}
          variant="tertiary"
          className="hover:text-clickable isolate -m-2 ml-auto rounded-full p-2 text-neutral-400"
        >
          <DotsVerticalIcon />
          <span className="sr-only">Actions</span>
        </IssueActionsModalButton>
      </header>
      <time
        className="mb-2 inline-block text-nowrap text-neutral-400"
        dateTime={iso8601DateFormatter(createdAt)}
      >
        {dayMonthShortFormatter(createdAt)}
      </time>
      <IssueTag tag={tag} />
      {isOpened && (
        <Modal isOpened={isOpened} closeModal={toggleModal}>
          <Modal.Overlay>
            <Modal.Dialog>
              <Modal.FocusLock>
                <IssueActionsModal closeModal={toggleModal} issueId={id} />
              </Modal.FocusLock>
            </Modal.Dialog>
          </Modal.Overlay>
        </Modal>
      )}
    </article>
  )
}
