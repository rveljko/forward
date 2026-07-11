import ActivePanelContainer from '@dashboard-components/active-panel-container'
import DeleteTaskPanel from '@dashboard-components/delete-task-panel'
import MenuPanelContainer from '@dashboard-components/menu-panel-container'
import RenameTaskPanel from '@dashboard-components/rename-task-panel'
import ModalCard from '@dashboard-components/ui/modal-card'
import PanelCard from '@dashboard-components/ui/panel-card'
import ArrowLeftIcon from '@icons/arrow-left-icon'
import ClipboardIcon from '@icons/clipboard-icon'
import CloseIcon from '@icons/close-icon'
import CopyIcon from '@icons/copy-icon'
import EditCircleIcon from '@icons/edit-circle-icon'
import TrashIcon from '@icons/trash-icon'
import { useTasks } from '@services/contexts/tasks-context'
import Button from '@ui/button'
import { showToast } from '@utils/toasts'
import { Task } from '@utils/types'
import copy from 'copy-to-clipboard'
import { AnimatePresence } from 'motion/react'
import { useState } from 'react'

type TaskActionsModalProps = {
  taskId: Task['id']
  closeModal: () => void
}

type ActivePanel = 'menu' | 'rename' | 'delete'

export default function TaskActionsModal({
  taskId,
  closeModal,
}: TaskActionsModalProps) {
  const [activePanel, setActivePanel] = useState<ActivePanel>('menu')

  return (
    <ModalCard>
      <header className="flex items-center justify-between p-4 pb-0">
        {activePanel !== 'menu' && (
          <Button
            variant="tertiary"
            size="medium"
            leftIcon={<ArrowLeftIcon />}
            onClick={() => setActivePanel('menu')}
          >
            Back
          </Button>
        )}
        <div className="ml-auto">
          <Button variant="tertiary" className="p-2" onClick={closeModal}>
            <CloseIcon />
            <span className="sr-only">Close</span>
          </Button>
        </div>
      </header>
      <AnimatePresence mode="popLayout" initial={false}>
        {activePanel === 'menu' && (
          <MenuPanelContainer key="menu">
            <MenuPanel
              taskId={taskId}
              closeModal={closeModal}
              setActivePanel={setActivePanel}
            />
          </MenuPanelContainer>
        )}
        {activePanel === 'rename' && (
          <ActivePanelContainer key="rename">
            <RenameTaskPanel taskId={taskId} closeModal={closeModal} />
          </ActivePanelContainer>
        )}
        {activePanel === 'delete' && (
          <ActivePanelContainer key="delete">
            <DeleteTaskPanel taskId={taskId} closeModal={closeModal} />
          </ActivePanelContainer>
        )}
      </AnimatePresence>
    </ModalCard>
  )
}

type MenuPanelProps = {
  taskId: Task['id']
  closeModal: () => void
  setActivePanel: React.Dispatch<React.SetStateAction<ActivePanel>>
}

function MenuPanel({ taskId, closeModal, setActivePanel }: MenuPanelProps) {
  const { getTaskById, duplicateTask } = useTasks()
  const { title } = getTaskById(taskId)

  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(var(--panel-card-width),100%),1fr))] gap-2 overflow-y-auto p-4">
      <li>
        <PanelCard>
          <div className="mb-1 flex items-center gap-1">
            <PanelCard.Icon icon={<EditCircleIcon />} />
            <PanelCard.Heading>
              <PanelCard.Button onClick={() => setActivePanel('rename')}>
                Rename
              </PanelCard.Button>
            </PanelCard.Heading>
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
              className="bg-red-100 ring-red-200 [&_svg]:text-red-500"
            />
            <PanelCard.Heading>
              <PanelCard.Button
                className="text-red-500"
                onClick={() => setActivePanel('delete')}
              >
                Delete
              </PanelCard.Button>
            </PanelCard.Heading>
          </div>
          <PanelCard.Paragraph className="text-red-400">
            Remove task permanently
          </PanelCard.Paragraph>
        </PanelCard>
      </li>
    </ul>
  )
}
