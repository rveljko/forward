import Divider from '@dashboard-components/ui/divider'
import IconWrapper from '@dashboard-components/ui/icon-wrapper'
import TrashIcon from '@icons/trash-icon'
import { useTasks } from '@services/contexts/tasks-context'
import Button from '@ui/button'
import { showToast } from '@utils/toasts'
import { Task } from '@utils/types'

type DeleteTaskPanelProps = {
  taskId: Task['id']
  closeModal: () => void
}

export default function DeleteTaskPanel({
  taskId,
  closeModal,
}: DeleteTaskPanelProps) {
  const { deleteTask } = useTasks()

  return (
    <>
      <div className="p-4">
        <IconWrapper
          icon={<TrashIcon />}
          className="mb-2 bg-red-100 text-red-500 ring-red-200"
        />
        <h3 className="mb-1 font-medium">Confirm Task Deletion</h3>
        <p className="text-xs text-neutral-600">
          Are you sure you want to delete?
        </p>
      </div>
      <Divider />
      <div className="flex items-center justify-end gap-2 p-4">
        <Button variant="ghost" size="large" type="button" onClick={closeModal}>
          Cancel
        </Button>
        <Button
          variant="danger"
          size="large"
          type="submit"
          onClick={() => {
            deleteTask(taskId)
            showToast({
              title: 'Task Deleted',
              description: 'Task deleted successfully',
            })
            closeModal()
          }}
        >
          Delete
        </Button>
      </div>
    </>
  )
}
