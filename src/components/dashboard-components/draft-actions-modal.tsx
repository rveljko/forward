import ModalCard from '@dashboard-components/ui/modal-card'
import PanelCard from '@dashboard-components/ui/panel-card'
import ClickIcon from '@icons/click-icon'
import ClipboardIcon from '@icons/clipboard-icon'
import CloseIcon from '@icons/close-icon'
import CopyIcon from '@icons/copy-icon'
import EditIcon from '@icons/edit-icon'
import ExternalLinkIcon from '@icons/external-link-icon'
import TrashIcon from '@icons/trash-icon'
import Button from '@ui/button'
import { Draft } from '@utils/types'

type DraftActionsModalProps = {
  draftId: Draft['id']
  closeModal: () => void
}

export default function DraftActionsModal({
  draftId,
  closeModal,
}: DraftActionsModalProps) {
  return (
    <ModalCard>
      <header className="flex items-center justify-between p-4 pb-0">
        <Button variant="tertiary" className="ml-auto p-2" onClick={closeModal}>
          <CloseIcon />
          <span className="sr-only">Close</span>
        </Button>
      </header>
      <MenuPanel draftId={draftId} />
    </ModalCard>
  )
}

type MenuPanelProps = {
  draftId: Draft['id']
}

function MenuPanel({ draftId }: MenuPanelProps) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,_minmax(min(var(--panel-card-width),_100%),_1fr))] gap-2 overflow-y-auto p-4 max-md:h-66">
      <li>
        <PanelCard>
          <div className="mb-1 flex items-center gap-1">
            <PanelCard.Icon icon={<ClickIcon />} />
            <PanelCard.Heading>
              <PanelCard.Button href={`/dashboard/drafts/${draftId}`}>
                Open
              </PanelCard.Button>
            </PanelCard.Heading>
          </div>
          <PanelCard.Paragraph>View draft details</PanelCard.Paragraph>
        </PanelCard>
      </li>
      <li>
        <PanelCard>
          <div className="mb-1 flex items-center gap-1">
            <PanelCard.Icon icon={<ExternalLinkIcon />} />
            <PanelCard.Heading>Open in new tab</PanelCard.Heading>
          </div>
          <PanelCard.Paragraph>Open draft separately</PanelCard.Paragraph>
        </PanelCard>
      </li>
      <li>
        <PanelCard>
          <div className="mb-1 flex items-center gap-1">
            <PanelCard.Icon icon={<EditIcon />} />
            <PanelCard.Heading>Rename</PanelCard.Heading>
          </div>
          <PanelCard.Paragraph>Edit draft title</PanelCard.Paragraph>
        </PanelCard>
      </li>
      <li>
        <PanelCard>
          <div className="mb-1 flex items-center gap-1">
            <PanelCard.Icon icon={<ClipboardIcon />} />
            <PanelCard.Heading>Copy title</PanelCard.Heading>
          </div>
          <PanelCard.Paragraph>Copy draft title</PanelCard.Paragraph>
        </PanelCard>
      </li>
      <li>
        <PanelCard>
          <div className="mb-1 flex items-center gap-1">
            <PanelCard.Icon icon={<CopyIcon />} />
            <PanelCard.Heading>Duplicate</PanelCard.Heading>
          </div>
          <PanelCard.Paragraph>Create draft copy</PanelCard.Paragraph>
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
            Remove draft permanently
          </PanelCard.Paragraph>
        </PanelCard>
      </li>
    </ul>
  )
}
