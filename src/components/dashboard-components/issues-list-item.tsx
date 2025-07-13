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

type IssuesListItemProps = React.ComponentPropsWithoutRef<'article'> & {
  issue: Issue
}

export default function IssuesListItem({
  issue: { id, title, status, tag, priority, createdAt },
  className,
  ...props
}: IssuesListItemProps) {
  const {
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
    setNodeRef,
  } = useSortable({ id })
  const { isOpened, openModal, closeModal } = useModal()

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  if (isDragging)
    return (
      <article
        className={cn(
          'bg-clickable/5 ring-section-outline h-16.5 ring',
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
        'bg-section-background-color pointer-coarse:active:bg-clickable/5 relative flex items-center justify-between gap-2 p-4',
        className
      )}
      style={style}
      ref={setNodeRef}
      onContextMenu={(e) => {
        e.preventDefault()
        openModal()
      }}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="z-1">
          <Button
            variant="tertiary"
            className="hover:text-clickable -m-2 p-2 text-neutral-400 pointer-coarse:hidden"
            {...attributes}
            {...listeners}
          >
            <DragVerticalIcon />
            <span className="sr-only">Drag handle</span>
          </Button>
        </div>
        <IssuePriority priority={priority} />
        <div className="flex items-center gap-1">
          <div className="flex h-8.5 shrink-0 items-center">
            <IssueStatus status={status} />
          </div>
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
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 max-sm:hidden">
          <IssueTag tag={tag} />
          <time
            className="text-nowrap text-neutral-400"
            dateTime={iso8601DateFormatter(createdAt)}
          >
            {dayMonthShortFormatter(createdAt)}
          </time>
        </div>
        <IssueActionsModalButton
          issueId={id}
          variant="tertiary"
          className="hover:text-clickable isolate -m-2 rounded-full p-2 text-neutral-400"
        >
          <DotsVerticalIcon />
          <span className="sr-only">Actions</span>
        </IssueActionsModalButton>
      </div>
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
    </article>
  )
}
