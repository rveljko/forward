import ModalCard from '@dashboard-components/ui/modal-card'
import PanelCard from '@dashboard-components/ui/panel-card'
import ClipboardIcon from '@icons/clipboard-icon'
import CloseIcon from '@icons/close-icon'
import CopyIcon from '@icons/copy-icon'
import EditIcon from '@icons/edit-icon'
import TrashIcon from '@icons/trash-icon'
import { useTasks } from '@services/contexts/tasks-context'
import Button from '@ui/button'
import { showToast } from '@utils/toasts'
import { Task } from '@utils/types'
import copy from 'copy-to-clipboard'

type TaskActionsModalProps = {
  taskId: Task['id']
  closeModal: () => void
}

export default function TaskActionsModal({
  taskId,
  closeModal,
}: TaskActionsModalProps) {
  return (
    <ModalCard>
      <header className="flex items-center justify-between p-4 pb-0">
        <div className="ml-auto">
          <Button variant="tertiary" className="p-2" onClick={closeModal}>
            <CloseIcon />
            <span className="sr-only">Close</span>
          </Button>
        </div>
      </header>
      <MenuPanel taskId={taskId} closeModal={closeModal} />
    </ModalCard>
  )
}

type MenuPanelProps = {
  taskId: Task['id']
  closeModal: () => void
}

function MenuPanel({ taskId, closeModal }: MenuPanelProps) {
  const { getTaskById, duplicateTask } = useTasks()
  const { title } = getTaskById(taskId)

  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(var(--panel-card-width),100%),1fr))] gap-2 overflow-y-auto p-4">
      <li>
        <PanelCard>
          <div className="mb-1 flex items-center gap-1">
            <PanelCard.Icon icon={<EditIcon />} />
            <PanelCard.Heading>Rename</PanelCard.Heading>
          </div>
          <PanelCard.Paragraph>Edit task title</PanelCard.Paragraph>
        </PanelCard>
      </li>
      <li>
        <PanelCard>
          <div className="mb-1 flex items-center gap-1">
            <PanelCard.Icon icon={<ClipboardIcon />} />
            <PanelCard.Heading>
              <PanelCard.Button
                onClick={() => {
                  copy(title)
                  showToast({
                    title: 'Task Title Copied',
                    description: 'Title copied successfully',
                  })
                  closeModal()
                }}
              >
                Copy title
              </PanelCard.Button>
            </PanelCard.Heading>
          </div>
          <PanelCard.Paragraph>Copy task title</PanelCard.Paragraph>
        </PanelCard>
      </li>
      <li>
        <PanelCard>
          <div className="mb-1 flex items-center gap-1">
            <PanelCard.Icon icon={<CopyIcon />} />
            <PanelCard.Heading>
              <PanelCard.Button
                onClick={() => {
                  duplicateTask(taskId)
                  showToast({
                    title: 'Task Duplicated',
                    description: 'Task duplicated successfully',
                  })
                  closeModal()
                }}
              >
                Duplicate
              </PanelCard.Button>
            </PanelCard.Heading>
          </div>
          <PanelCard.Paragraph>Create task copy</PanelCard.Paragraph>
        </PanelCard>
      </li>
      <li>
        <PanelCard>
          <div className="mb-1 flex items-center gap-1">
            <PanelCard.Icon
              icon={<TrashIcon />}
              className="[&_svg]:text-danger-500 bg-danger-500/10"
            />
            <PanelCard.Heading className="text-danger-500">
              Delete
            </PanelCard.Heading>
          </div>
          <PanelCard.Paragraph className="text-danger-400">
            Remove task permanently
          </PanelCard.Paragraph>
        </PanelCard>
      </li>
    </ul>
  )
}
