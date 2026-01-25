import Divider from '@dashboard-components/ui/divider'
import FormField from '@dashboard-components/ui/form-field'
import EditIcon from '@icons/edit-icon'
import { useTasks } from '@services/contexts/tasks-context'
import Button from '@ui/button'
import { showToast } from '@utils/toasts'
import { Task } from '@utils/types'
import { useRef, useState } from 'react'

type RenameTaskPanelProps = {
  taskId: Task['id']
  closeModal: () => void
}

export default function RenameTaskPanel({
  taskId,
  closeModal,
}: RenameTaskPanelProps) {
  const { getTaskById, updateTaskTitle } = useTasks()
  const { title } = getTaskById(taskId)
  const [newTitle, setNewTitle] = useState(title)

  const inputRef = useRef<HTMLInputElement>(null)

  const isButtonDisabled = newTitle === title

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        updateTaskTitle(taskId, newTitle)
        showToast({
          title: 'Task Renamed',
          description: 'Title updated successfully',
        })
        closeModal()
      }}
    >
      <div className="p-4">
        <span className="border-section-outline [&_svg]:text-clickable mb-2 flex size-9 items-center justify-center rounded-lg border">
          <EditIcon />
        </span>
        <h3 className="mb-1">Rename</h3>
        <FormField className="gap-4 [&_div]:max-w-none">
          <FormField.Label htmlFor="title" className="w-max text-neutral-400">
            Edit task title
          </FormField.Label>
          <FormField.Input
            id="title"
            ref={inputRef}
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onFocus={() => inputRef.current?.select()}
          />
        </FormField>
      </div>
      <Divider />
      <div className="flex items-center justify-end gap-2 p-4">
        <Button variant="ghost" size="large" type="button" onClick={closeModal}>
          Cancel
        </Button>
        <Button
          variant="primary"
          size="large"
          type="submit"
          disabled={isButtonDisabled}
        >
          Rename
        </Button>
      </div>
    </form>
  )
}
