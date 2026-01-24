import ModalCard from '@dashboard-components/ui/modal-card'
import PanelCard from '@dashboard-components/ui/panel-card'
import ClipboardIcon from '@icons/clipboard-icon'
import CloseIcon from '@icons/close-icon'
import CopyIcon from '@icons/copy-icon'
import EditIcon from '@icons/edit-icon'
import TrashIcon from '@icons/trash-icon'
import Button from '@ui/button'

type TaskActionsModalProps = {
  closeModal: () => void
}

export default function TaskActionsModal({
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
      <MenuPanel />
    </ModalCard>
  )
}

function MenuPanel() {
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
            <PanelCard.Heading>Copy title</PanelCard.Heading>
          </div>
          <PanelCard.Paragraph>Copy task title</PanelCard.Paragraph>
        </PanelCard>
      </li>
      <li>
        <PanelCard>
          <div className="mb-1 flex items-center gap-1">
            <PanelCard.Icon icon={<CopyIcon />} />
            <PanelCard.Heading>Duplicate</PanelCard.Heading>
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
