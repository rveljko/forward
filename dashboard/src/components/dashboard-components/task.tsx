import TaskActionsModal from '@dashboard-components/task-actions-modal'
import Checkbox from '@dashboard-components/ui/checkbox'
import Modal from '@dashboard-components/ui/modal'
import useModal from '@hooks/use-modal'
import DotsVerticalIcon from '@icons/dots-vertical-icon'
import { useTasks } from '@services/contexts/tasks-context'
import Button from '@ui/button'
import {
  dayMonthShortFormatter,
  iso8601DateFormatter,
} from '@utils/date-formatters'
import { Task as TaskType } from '@utils/types'
import { AnimatePresence } from 'motion/react'
import { useState } from 'react'

type TaskProps = React.ComponentPropsWithoutRef<'article'> & {
  task: TaskType
}

export default function Task({
  task: { id, title, isChecked, createdAt },
}: TaskProps) {
  const { updateTaskStatus } = useTasks()
  const {
    isOpened,
    openModal: openTaskActionModal,
    closeModal: closeTaskActionModal,
  } = useModal()
  const [activeTaskId, setActiveTaskId] = useState<TaskType['id'] | null>(null)

  function openModal() {
    openTaskActionModal()
    setActiveTaskId(id)
  }

  function closeModal() {
    closeTaskActionModal()
    setActiveTaskId(null)
  }

  return (
    <article
      onContextMenu={(e) => {
        e.preventDefault()
        openModal()
      }}
      className={`relative flex items-center justify-between gap-2 border-b border-b-neutral-200 p-4 hover:bg-white ${activeTaskId === id ? 'bg-white' : 'bg-neutral-50'}`}
    >
      <label className="group flex items-center justify-center gap-2 hover:cursor-pointer">
        <Checkbox checked={isChecked} onChange={() => updateTaskStatus(id)} />
        <span className="relative line-clamp-1 font-medium break-all text-black">
          <span className="absolute top-1/2 h-px w-0 bg-current transition-all group-has-[input[type=checkbox]:checked]:w-full pointer-coarse:-translate-y-1/2" />
          {title}
        </span>
        <span className="absolute inset-0" />
      </label>
      <div className="flex items-center gap-2">
        <time
          dateTime={iso8601DateFormatter(createdAt)}
          className="flex text-xs text-nowrap text-neutral-600"
        >
          {dayMonthShortFormatter(createdAt)}
        </time>
        <Button
          variant="tertiary"
          onClick={openModal}
          className="isolate -m-1 rounded-full p-1 text-neutral-600 hover:text-black"
        >
          <DotsVerticalIcon />
          <span className="sr-only">Actions</span>
        </Button>
      </div>
      <AnimatePresence>
        {isOpened && (
          <Modal isOpened={isOpened} closeModal={closeModal}>
            <Modal.Overlay>
              <Modal.Dialog>
                <Modal.FocusLock>
                  <TaskActionsModal taskId={id} closeModal={closeModal} />
                </Modal.FocusLock>
              </Modal.Dialog>
            </Modal.Overlay>
          </Modal>
        )}
      </AnimatePresence>
    </article>
  )
}
