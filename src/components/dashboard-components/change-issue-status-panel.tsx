import Divider from '@dashboard-components/ui/divider'
import PanelCard from '@dashboard-components/ui/panel-card'
import RadioButton from '@dashboard-components/ui/radio-button'
import { issueStatuses } from '@data/issue-statuses'
import StatusIcon from '@icons/status-icon'
import { useIssues } from '@services/contexts/issues-context'
import Button from '@ui/button'
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
  const { getIssueById, updateIssueStatus } = useIssues()
  const { title, status } = getIssueById(issueId)
  const [newStatus, setNewStatus] = useState(status)

  const isButtonDisabled = newStatus === status

  return (
    <article>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          updateIssueStatus(issueId, newStatus)
        }}
      >
        <div className="p-4">
          <span className="border-section-outline [&_svg]:text-clickable mb-2 flex size-9 items-center justify-center rounded-lg border">
            <StatusIcon />
          </span>
          <h3 className="mb-1">
            Change <strong>{title}</strong> Status
          </h3>
          <p className="mb-4">Update issue progress status</p>
          <ul className="flex flex-col items-center gap-2 sm:flex-row">
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
        </div>
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
