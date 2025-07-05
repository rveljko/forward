import Divider from '@dashboard-components/ui/divider'
import PanelCard from '@dashboard-components/ui/panel-card'
import RadioButton from '@dashboard-components/ui/radio-button'
import { issuePriorities } from '@data/issue-priorities'
import PriorityIcon from '@icons/priority-icon'
import { useIssues } from '@services/contexts/issues-context'
import Button from '@ui/button'
import { Issue } from '@utils/types'
import { useState } from 'react'

type ChangeIssuePriorityPanelProps = {
  issueId: Issue['id']
  closeModal: () => void
}

export default function ChangeIssuePriorityPanel({
  issueId,
  closeModal,
}: ChangeIssuePriorityPanelProps) {
  const { getIssueById, updateIssuePriority } = useIssues()
  const { priority } = getIssueById(issueId)
  const [newPriority, setNewPriority] = useState(priority)

  const isButtonDisabled = newPriority === priority

  return (
    <article>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          updateIssuePriority(issueId, newPriority)
          closeModal()
        }}
      >
        <div className="p-4">
          <span className="border-section-outline [&_svg]:text-clickable mb-2 flex size-9 items-center justify-center rounded-lg border">
            <PriorityIcon />
          </span>
          <h3 className="mb-1">Change Priority</h3>
          <p className="mb-4">Update issue importance level</p>
          <ul className="flex flex-col items-center gap-2 sm:flex-row">
            {issuePriorities.map(({ id, name, label, icon: Icon }) => (
              <li className="w-full flex-1" key={id}>
                <PanelCard>
                  <div className="flex items-start justify-between">
                    <PanelCard.Icon icon={<Icon />} className="mb-1" />
                    <RadioButton
                      id={label}
                      onChange={() => setNewPriority(label)}
                      checked={label === newPriority}
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
