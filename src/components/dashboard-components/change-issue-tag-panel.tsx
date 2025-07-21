import Divider from '@dashboard-components/ui/divider'
import PanelCard from '@dashboard-components/ui/panel-card'
import RadioButton from '@dashboard-components/ui/radio-button'
import { issueTags } from '@data/issue-tags'
import TagIcon from '@icons/tag-icon'
import { useIssues } from '@services/contexts/issues-context'
import Button from '@ui/button'
import { showToast } from '@utils/toasts'
import { Issue } from '@utils/types'
import { useState } from 'react'

type ChangeIssueTagPanelProps = {
  issueId: Issue['id']
  closeModal: () => void
}

export default function ChangeIssueTagPanel({
  issueId,
  closeModal,
}: ChangeIssueTagPanelProps) {
  const { getIssueById, updateIssue } = useIssues()
  const issue = getIssueById(issueId)
  const [newTag, setNewTag] = useState(issue.tag)

  const isButtonDisabled = newTag === issue.tag

  return (
    <article>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          updateIssue({ ...issue, tag: newTag })
          showToast({
            title: 'Issue Tag Changed',
            description: 'Tag updated successfully',
          })
          closeModal()
        }}
      >
        <div className="p-4">
          <span className="border-section-outline [&_svg]:text-clickable mb-2 flex size-9 items-center justify-center rounded-lg border">
            <TagIcon />
          </span>
          <h3 className="mb-1">
            Change <strong>{issue.title}</strong> Tag
          </h3>
          <p className="mb-4">Update issue label</p>
          <ul className="flex flex-col items-center gap-2 sm:flex-row">
            {issueTags.map(({ id, name, label, icon: Icon }) => (
              <li className="w-full flex-1" key={id}>
                <PanelCard>
                  <div className="flex items-start justify-between">
                    <PanelCard.Icon icon={<Icon />} className="mb-1" />
                    <RadioButton
                      id={label}
                      onChange={() => setNewTag(label)}
                      checked={label === newTag}
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
