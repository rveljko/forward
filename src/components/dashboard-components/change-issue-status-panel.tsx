import Divider from '@dashboard-components/ui/divider'
import PanelCard from '@dashboard-components/ui/panel-card'
import RadioButton from '@dashboard-components/ui/radio-button'
import { issueStatuses } from '@data/issue-statuses'
import StatusIcon from '@icons/status-icon'
import { useIssues } from '@services/contexts/issues-context'
import Button from '@ui/button'
import { showToast } from '@utils/toasts'
import { Issue } from '@utils/types'
import { useState } from 'react'

type ChangeIssueStatusPanelProps = {
  issueId: Issue['id']
  closeModal: () => void
}

export default function ChangeIssueStatusPanel({
  issueId,
  closeModal,
}: ChangeIssueStatusPanelProps) {
  const { getIssueById, updateIssue } = useIssues()
  const issue = getIssueById(issueId)
  const [newStatus, setNewStatus] = useState(issue.status)

  const isButtonDisabled = newStatus === issue.status

  return (
    <article>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          updateIssue({ ...issue, status: newStatus })
          showToast({
            title: 'Issue Status Changed',
            description: 'Status updated successfully',
          })
          closeModal()
        }}
      >
        <div className="px-4 pt-4">
          <span className="border-section-outline [&_svg]:text-clickable mb-2 flex size-9 items-center justify-center rounded-lg border">
            <StatusIcon />
          </span>
          <h3 className="mb-1">
            Change <strong>{issue.title}</strong> Status
          </h3>
          <p className="mb-4">Update issue progress status</p>
        </div>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(--spacing(42.5),100%),1fr))] gap-2 px-4 pb-4 max-sm:max-h-65 max-sm:overflow-y-auto">
          {issueStatuses.map(({ id, name, label, icon: Icon }) => (
            <li className="w-full flex-1" key={id}>
              <PanelCard>
                <div className="flex items-start justify-between">
                  <PanelCard.Icon icon={<Icon />} className="mb-1" />
                  <RadioButton
                    id={label}
                    onChange={() => setNewStatus(label)}
                    checked={label === newStatus}
                  />
                </div>
                <PanelCard.Label htmlFor={label}>{name}</PanelCard.Label>
              </PanelCard>
            </li>
          ))}
        </ul>
        <Divider />
        <div className="flex items-center justify-end gap-2 p-4">
          <Button variant="ghost" size="large" onClick={closeModal}>
            Cancel
          </Button>
          <Button
            variant="primary"
            size="large"
            type="submit"
            disabled={isButtonDisabled}
          >
            Save Changes
          </Button>
        </div>
      </form>
    </article>
  )
}
