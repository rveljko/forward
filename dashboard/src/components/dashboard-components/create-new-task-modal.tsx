import Divider from '@dashboard-components/ui/divider'
import ModalCard from '@dashboard-components/ui/modal-card'
import CloseIcon from '@icons/close-icon'
import { useTasks } from '@services/contexts/tasks-context'
import Button from '@ui/button'
import Switch from '@ui/switch'
import { showToast } from '@utils/toasts'
import { Task } from '@utils/types'
import { cn } from '@utils/utils'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

type CreateNewTaskModalProps = React.ComponentPropsWithoutRef<'article'> & {
  closeModal: () => void
}

export default function CreateNewTaskModal({
  closeModal,
  className,
  ...props
}: CreateNewTaskModalProps) {
  const { createNewTask } = useTasks()
  const initialTask: Task = {
    id: uuidv4(),
    title: '',
    createdAt: new Date(),
    isChecked: false,
  }
  const [newTask, setNewTask] = useState(initialTask)
  const [createMore, setCreateMore] = useState(false)

  return (
    <ModalCard
      className={cn('bg-(--create-new-task-modal-background)', className)}
      {...props}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault()
          createNewTask(newTask)
          showToast({
            title: 'Task Created',
            description: 'Task added successfully',
          })
          if (createMore) {
            setNewTask(initialTask)
          } else {
            closeModal()
          }
        }}
      >
        <div className="flex items-start justify-between gap-2 p-4">
          <input
            type="text"
            placeholder="Task title"
            value={newTask.title}
            onChange={(e) =>
              setNewTask((prevTask) => ({ ...prevTask, title: e.target.value }))
            }
            className="text-clickable w-full text-2xl placeholder:text-neutral-400 focus:outline-0"
            required
          />
          <Button variant="tertiary" className="p-1" onClick={closeModal}>
            <CloseIcon />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <Divider />
        <div dir="rtl" className="flex overflow-x-auto p-4">
          <div dir="ltr" className="ml-auto flex items-center gap-2">
            <label className="flex items-center gap-2 text-nowrap text-neutral-400">
              Create more
              <Switch
                checked={createMore}
                onChange={() => setCreateMore((prev) => !prev)}
              />
            </label>
            <Button variant="ghost" size="large" onClick={closeModal}>
              Cancel
            </Button>
            <Button
              variant="primary"
              size="large"
              type="submit"
              disabled={!newTask.title}
            >
              Create New Task
            </Button>
          </div>
        </div>
      </form>
    </ModalCard>
  )
}
