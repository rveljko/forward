import ModalCard from '@dashboard-components/ui/modal-card'
import PanelCard from '@dashboard-components/ui/panel-card'
import CircleFullIcon from '@icons/circle-full-icon'
import ClickIcon from '@icons/click-icon'
import ClipboardIcon from '@icons/clipboard-icon'
import CloseIcon from '@icons/close-icon'
import CopyIcon from '@icons/copy-icon'
import EditIcon from '@icons/edit-icon'
import ExternalLinkIcon from '@icons/external-link-icon'
import PriorityLowIcon from '@icons/priority-low-icon'
import TagIcon from '@icons/tag-icon'
import TrashIcon from '@icons/trash-icon'
import Button from '@ui/button'

type IssueActionsModalProps = {
  closeModal: () => void
}

export default function IssueActionsModal({
  closeModal,
}: IssueActionsModalProps) {
  return (
    <ModalCard className="flex flex-col">
      <header className="flex p-4 pb-0">
        <Button
          variant="tertiary"
          className="ml-auto p-1.5"
          onClick={closeModal}
        >
          <CloseIcon />
          <span className="sr-only">Close</span>
        </Button>
      </header>
      <ul className="grid grid-cols-[repeat(auto-fit,_minmax(min(var(--panel-card-width),_100%),_1fr))] gap-2 overflow-y-auto p-4 max-md:h-110">
        <li>
          <PanelCard>
            <div className="mb-1 flex items-center gap-1">
              <PanelCard.Icon icon={<CircleFullIcon />} />
              <PanelCard.Heading>Change Status</PanelCard.Heading>
            </div>
            <PanelCard.Paragraph>
              Update issue progress status
            </PanelCard.Paragraph>
          </PanelCard>
        </li>
        <li>
          <PanelCard>
            <div className="mb-1 flex items-center gap-1">
              <PanelCard.Icon icon={<PriorityLowIcon />} />
              <PanelCard.Heading>Change Priority</PanelCard.Heading>
            </div>
            <PanelCard.Paragraph>
              Update issue importance level
            </PanelCard.Paragraph>
          </PanelCard>
        </li>
        <li>
          <PanelCard>
            <div className="mb-1 flex items-center gap-1">
              <div>
                <PanelCard.Icon icon={<TagIcon />} />
              </div>
              <PanelCard.Heading>Change Tag</PanelCard.Heading>
            </div>
            <PanelCard.Paragraph>Update issue label</PanelCard.Paragraph>
          </PanelCard>
        </li>
        <li>
          <PanelCard>
            <div className="mb-1 flex items-center gap-1">
              <PanelCard.Icon icon={<EditIcon />} />
              <PanelCard.Heading>Rename</PanelCard.Heading>
            </div>
            <PanelCard.Paragraph>Edit issue title</PanelCard.Paragraph>
          </PanelCard>
        </li>
        <li>
          <PanelCard>
            <div className="mb-1 flex items-center gap-1">
              <PanelCard.Icon icon={<ClipboardIcon />} />
              <PanelCard.Heading>Copy title</PanelCard.Heading>
            </div>
            <PanelCard.Paragraph>Copy issue title</PanelCard.Paragraph>
          </PanelCard>
        </li>
        <li>
          <PanelCard>
            <div className="mb-1 flex items-center gap-1">
              <PanelCard.Icon icon={<CopyIcon />} />
              <PanelCard.Heading>Duplicate</PanelCard.Heading>
            </div>
            <PanelCard.Paragraph>Create issue copy</PanelCard.Paragraph>
          </PanelCard>
        </li>
        <li>
          <PanelCard>
            <div className="mb-1 flex items-center gap-1">
              <PanelCard.Icon icon={<ClickIcon />} />
              <PanelCard.Heading>Open</PanelCard.Heading>
            </div>
            <PanelCard.Paragraph>View issue details</PanelCard.Paragraph>
          </PanelCard>
        </li>
        <li>
          <PanelCard>
            <div className="mb-1 flex items-center gap-1">
              <PanelCard.Icon icon={<ExternalLinkIcon />} />
              <PanelCard.Heading>Open in new tab</PanelCard.Heading>
            </div>
            <PanelCard.Paragraph>Open issue separately</PanelCard.Paragraph>
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
              Remove issue permanently
            </PanelCard.Paragraph>
          </PanelCard>
        </li>
      </ul>
    </ModalCard>
  )
}
