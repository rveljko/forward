import ChangeIssuePriorityPanel from '@dashboard-components/change-issue-priority-panel'
import ChangeIssueStatusPanel from '@dashboard-components/change-issue-status-panel'
import ChangeIssueTagPanel from '@dashboard-components/change-issue-tag-panel'
import DeleteIssuePanel from '@dashboard-components/delete-issue-panel'
import RenameIssuePanel from '@dashboard-components/rename-issue-panel'
import ModalCard from '@dashboard-components/ui/modal-card'
import PanelCard from '@dashboard-components/ui/panel-card'
import ArrowLeftIcon from '@icons/arrow-left-icon'
import ClickIcon from '@icons/click-icon'
import ClipboardIcon from '@icons/clipboard-icon'
import CloseIcon from '@icons/close-icon'
import CopyIcon from '@icons/copy-icon'
import EditIcon from '@icons/edit-icon'
import ExternalLinkIcon from '@icons/external-link-icon'
import PriorityIcon from '@icons/priority-icon'
import StatusIcon from '@icons/status-icon'
import TagIcon from '@icons/tag-icon'
import TrashIcon from '@icons/trash-icon'
import { useIssues } from '@services/contexts/issues-context'
import Button from '@ui/button'
import { Issue } from '@utils/types'
import copy from 'copy-to-clipboard'
import { useState } from 'react'

type IssueActionsModalProps = {
  closeModal: () => void
  issueId: Issue['id']
  withoutLinks?: boolean
}

type ActivePanel =
  | 'menu'
  | 'change-status'
  | 'change-priority'
  | 'change-tag'
  | 'rename'
  | 'delete'

export default function IssueActionsModal({
  closeModal,
  issueId,
  withoutLinks,
}: IssueActionsModalProps) {
  const [activePanel, setActivePanel] = useState<ActivePanel>('menu')

  return (
    <ModalCard className="flex flex-col">
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
        <Button variant="tertiary" className="ml-auto p-2" onClick={closeModal}>
          <CloseIcon />
          <span className="sr-only">Close</span>
        </Button>
      </header>
      {activePanel === 'menu' && (
        <MenuPanel
          issueId={issueId}
          closeModal={closeModal}
          setActivePanel={setActivePanel}
          withoutLinks={withoutLinks}
        />
      )}
      {activePanel === 'change-status' && (
        <ChangeIssueStatusPanel issueId={issueId} closeModal={closeModal} />
      )}
      {activePanel === 'change-priority' && (
        <ChangeIssuePriorityPanel issueId={issueId} closeModal={closeModal} />
      )}
      {activePanel === 'change-tag' && (
        <ChangeIssueTagPanel issueId={issueId} closeModal={closeModal} />
      )}
      {activePanel === 'rename' && (
        <RenameIssuePanel issueId={issueId} closeModal={closeModal} />
      )}
      {activePanel === 'delete' && (
        <DeleteIssuePanel issueId={issueId} closeModal={closeModal} />
      )}
    </ModalCard>
  )
}

type MenuPanelProps = {
  issueId: Issue['id']
  closeModal: () => void
  setActivePanel: React.Dispatch<React.SetStateAction<ActivePanel>>
  withoutLinks?: boolean
}

function MenuPanel({
  closeModal,
  issueId,
  setActivePanel,
  withoutLinks,
}: MenuPanelProps) {
  const { getIssueById, duplicateIssue } = useIssues()
  const { title } = getIssueById(issueId)

  return (
    <ul
      className={`grid grid-cols-[repeat(auto-fit,_minmax(min(var(--panel-card-width),_100%),_1fr))] gap-2 overflow-y-auto p-4 ${withoutLinks ? 'max-md:h-86' : 'max-md:h-110'}`}
    >
      {!withoutLinks && (
        <>
          <li>
            <PanelCard>
              <div className="mb-1 flex items-center gap-1">
                <PanelCard.Icon icon={<ClickIcon />} />
                <PanelCard.Heading>
                  <PanelCard.Button href={`/dashboard/issues/${issueId}`}>
                    Open
                  </PanelCard.Button>
                </PanelCard.Heading>
              </div>
              <PanelCard.Paragraph>View issue details</PanelCard.Paragraph>
            </PanelCard>
          </li>
          <li>
            <PanelCard>
              <div className="mb-1 flex items-center gap-1">
                <PanelCard.Icon icon={<ExternalLinkIcon />} />
                <PanelCard.Heading>
                  <PanelCard.Button
                    href={`/dashboard/issues/${issueId}`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Open in new tab
                  </PanelCard.Button>
                </PanelCard.Heading>
              </div>
              <PanelCard.Paragraph>Open issue separately</PanelCard.Paragraph>
            </PanelCard>
          </li>
        </>
      )}
      <li>
        <PanelCard>
          <div className="mb-1 flex items-center gap-1">
            <PanelCard.Icon icon={<StatusIcon />} />
            <PanelCard.Heading>
              <PanelCard.Button onClick={() => setActivePanel('change-status')}>
                Change Status
              </PanelCard.Button>
            </PanelCard.Heading>
          </div>
          <PanelCard.Paragraph>
            Update issue progress status
          </PanelCard.Paragraph>
        </PanelCard>
      </li>
      <li>
        <PanelCard>
          <div className="mb-1 flex items-center gap-1">
            <PanelCard.Icon icon={<PriorityIcon />} />
            <PanelCard.Heading>
              <PanelCard.Button
                onClick={() => setActivePanel('change-priority')}
              >
                Change Priority
              </PanelCard.Button>
            </PanelCard.Heading>
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
            <PanelCard.Heading>
              <PanelCard.Button onClick={() => setActivePanel('change-tag')}>
                Change Tag
              </PanelCard.Button>
            </PanelCard.Heading>
          </div>
          <PanelCard.Paragraph>Update issue label</PanelCard.Paragraph>
        </PanelCard>
      </li>
      <li>
        <PanelCard>
          <div className="mb-1 flex items-center gap-1">
            <PanelCard.Icon icon={<EditIcon />} />
            <PanelCard.Heading>
              <PanelCard.Button onClick={() => setActivePanel('rename')}>
                Rename
              </PanelCard.Button>
            </PanelCard.Heading>
          </div>
          <PanelCard.Paragraph>Edit issue title</PanelCard.Paragraph>
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
                  closeModal()
                }}
              >
                Copy title
              </PanelCard.Button>
            </PanelCard.Heading>
          </div>
          <PanelCard.Paragraph>Copy issue title</PanelCard.Paragraph>
        </PanelCard>
      </li>
      <li>
        <PanelCard>
          <div className="mb-1 flex items-center gap-1">
            <PanelCard.Icon icon={<CopyIcon />} />
            <PanelCard.Heading>
              <PanelCard.Button
                onClick={() => {
                  duplicateIssue(issueId)
                  closeModal()
                }}
              >
                Duplicate
              </PanelCard.Button>
            </PanelCard.Heading>
          </div>
          <PanelCard.Paragraph>Create issue copy</PanelCard.Paragraph>
        </PanelCard>
      </li>
      <li>
        <PanelCard>
          <div className="mb-1 flex items-center gap-1">
            <PanelCard.Icon
              icon={<TrashIcon />}
              className="[&_svg]:text-danger-500 bg-danger-500/10"
            />
            <PanelCard.Heading>
              <PanelCard.Button
                className="text-danger-500"
                onClick={() => setActivePanel('delete')}
              >
                Delete
              </PanelCard.Button>
            </PanelCard.Heading>
          </div>
          <PanelCard.Paragraph className="text-danger-400">
            Remove issue permanently
          </PanelCard.Paragraph>
        </PanelCard>
      </li>
    </ul>
  )
}
