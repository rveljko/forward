import Divider from '@dashboard-components/ui/divider'
import Dropdown from '@dashboard-components/ui/dropdown'
import DropdownButton from '@dashboard-components/ui/dropdown-button'
import ModalCard from '@dashboard-components/ui/modal-card'
import { issuePriorities } from '@data/issue-priorities'
import { issueStatuses } from '@data/issue-statuses'
import { issueTags } from '@data/issue-tags'
import ArrowsMaximizeIcon from '@icons/arrows-maximize-icon'
import CloseIcon from '@icons/close-icon'
import { useIssues } from '@services/contexts/issues-context'
import Button from '@ui/button'
import { Issue } from '@utils/types'
import { cn } from '@utils/utils'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

type CreateNewIssueModalProps = React.ComponentPropsWithoutRef<'article'> & {
  closeModal: () => void
}

export default function CreateNewIssueModal({
  closeModal,
  className,
  ...props
}: CreateNewIssueModalProps) {
  const { createNewIssue, getIssueStatus, getIssuePriority, getIssueTag } =
    useIssues()
  const initialIssue: Issue = {
    id: uuidv4(),
    title: '',
    description: '',
    status: 'todo',
    priority: 'low',
    tag: 'design',
    createdAt: new Date(),
    content: '',
  }
  const [newIssue, setNewIssue] = useState(initialIssue)

  const { name: statusName, icon: StatusIcon } = getIssueStatus(newIssue.status)
  const { name: priorityName, icon: PriorityIcon } = getIssuePriority(
    newIssue.priority
  )
  const { name: tagName, icon: TagIcon } = getIssueTag(newIssue.tag)

  return (
    <ModalCard
      className={cn('bg-(--create-new-issue-modal-background)', className)}
      {...props}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault()
          createNewIssue(newIssue)
          setNewIssue(initialIssue)
        }}
      >
        <div className="p-4">
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-2">
              <input
                type="text"
                name="title"
                placeholder="Issue title"
                value={newIssue.title}
                onChange={(e) =>
                  setNewIssue({ ...newIssue, title: e.target.value })
                }
                className="text-clickable w-full text-2xl placeholder:text-neutral-400 focus:outline-0"
                required
              />
              <div className="flex gap-1">
                <Button variant="tertiary" className="p-1 max-sm:hidden">
                  <ArrowsMaximizeIcon />
                  <span className="sr-only">Maximize Modal</span>
                </Button>
                <Button variant="tertiary" className="p-1" onClick={closeModal}>
                  <CloseIcon />
                  <span className="sr-only">Close</span>
                </Button>
              </div>
            </div>
            <textarea
              name="description"
              placeholder="Issue description"
              value={newIssue.description}
              onChange={(e) =>
                setNewIssue({ ...newIssue, description: e.target.value })
              }
              className="text-clickable aspect-5/1 w-full resize-none placeholder:text-neutral-400 focus:outline-0"
            />
            <div className="flex items-center gap-2">
              <DropdownButton
                label={statusName}
                variant="ghost"
                size="small"
                leftIcon={<StatusIcon />}
              >
                {issueStatuses.map(({ id, name, label, icon: Icon }) => (
                  <Dropdown.Button
                    key={id}
                    leftIcon={<Icon />}
                    onClick={() => setNewIssue({ ...newIssue, status: label })}
                    isActive={label === newIssue.status}
                  >
                    {name}
                  </Dropdown.Button>
                ))}
              </DropdownButton>
              <DropdownButton
                label={priorityName}
                variant="ghost"
                size="small"
                leftIcon={<PriorityIcon />}
              >
                {issuePriorities.map(({ id, name, label, icon: Icon }) => (
                  <Dropdown.Button
                    key={id}
                    leftIcon={<Icon />}
                    onClick={() =>
                      setNewIssue({ ...newIssue, priority: label })
                    }
                    isActive={label === newIssue.priority}
                  >
                    {name}
                  </Dropdown.Button>
                ))}
              </DropdownButton>
              <DropdownButton
                label={tagName}
                variant="ghost"
                size="small"
                leftIcon={<TagIcon />}
              >
                {issueTags.map(({ id, name, label, icon: Icon }) => (
                  <Dropdown.Button
                    key={id}
                    leftIcon={<Icon />}
                    onClick={() => setNewIssue({ ...newIssue, tag: label })}
                    isActive={label === newIssue.tag}
                  >
                    {name}
                  </Dropdown.Button>
                ))}
              </DropdownButton>
            </div>
          </div>
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
            disabled={!newIssue.title}
          >
            Create New Issue
          </Button>
        </div>
      </form>
    </ModalCard>
  )
}
