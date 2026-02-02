import Divider from '@dashboard-components/ui/divider'
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
  const { getTaskById, deleteTask } = useTasks()
  const { title } = getTaskById(taskId)

  return (
    <>
      <div className="p-4">
        <span className="border-section-outline bg-danger-500/10 [&_svg]:text-danger-500 mb-2 flex size-9 items-center justify-center rounded-lg border">
          <TrashIcon />
        </span>
        <h3 className="mb-1">
          Confirm <strong>{title}</strong> Deletion
        </h3>
        <p>Are you sure you want to delete?</p>
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
