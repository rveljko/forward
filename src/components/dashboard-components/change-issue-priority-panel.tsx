import Divider from '@dashboard-components/ui/divider'
import PanelCard from '@dashboard-components/ui/panel-card'
import RadioButton from '@dashboard-components/ui/radio-button'
import { issuePriorities } from '@data/issue-priorities'
import PriorityIcon from '@icons/priority-icon'
import { useIssues } from '@services/contexts/issues-context'
import Button from '@ui/button'
import { showToast } from '@utils/toasts'
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
  const { getIssueById, updateIssue } = useIssues()
  const issue = getIssueById(issueId)
  const [newPriority, setNewPriority] = useState(issue.priority)

  const isButtonDisabled = newPriority === issue.priority

  return (
    <article>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          updateIssue({ ...issue, priority: newPriority })
          showToast({
            title: 'Issue Priority Changed',
            description: 'Priority updated successfully',
          })
          closeModal()
        }}
      >
        <div className="px-4 pt-4">
          <span className="border-section-outline [&_svg]:text-clickable mb-2 flex size-9 items-center justify-center rounded-lg border">
            <PriorityIcon />
          </span>
          <h3 className="mb-1">
            Change <strong>{issue.title}</strong> Priority
          </h3>
          <p className="mb-4">Update issue importance level</p>
        </div>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(--spacing(42.5),100%),1fr))] gap-2 px-4 pb-4 max-sm:max-h-65 max-sm:overflow-y-auto">
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
