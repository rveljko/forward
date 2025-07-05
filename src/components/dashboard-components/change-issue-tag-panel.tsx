import Divider from '@dashboard-components/ui/divider'
import PanelCard from '@dashboard-components/ui/panel-card'
import RadioButton from '@dashboard-components/ui/radio-button'
import { issueTags } from '@data/issue-tags'
import TagIcon from '@icons/tag-icon'
import { useIssues } from '@services/contexts/issues-context'
import Button from '@ui/button'
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
  const { getIssueById, updateIssueTag } = useIssues()
  const { tag } = getIssueById(issueId)
  const [newTag, setNewTag] = useState(tag)

  const isButtonDisabled = newTag === tag

  return (
    <article>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          updateIssueTag(issueId, newTag)
        }}
      >
        <div className="p-4">
          <span className="border-section-outline [&_svg]:text-clickable mb-2 flex size-9 items-center justify-center rounded-lg border">
            <TagIcon />
          </span>
          <h3 className="mb-1">Change Tag</h3>
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
