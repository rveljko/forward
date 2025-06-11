import Divider from '@dashboard-components/ui/divider'
import ModalCard from '@dashboard-components/ui/modal-card'
import Select from '@dashboard-components/ui/select'
import { issuePriorities } from '@data/issue-priorities'
import { issueStatuses } from '@data/issue-statuses'
import { issueTags } from '@data/issue-tags'
import ArrowsMaximizeIcon from '@icons/arrows-maximize-icon'
import ArrowsMinimizeIcon from '@icons/arrows-minimize-icon'
import CloseIcon from '@icons/close-icon'
import { useIssues } from '@services/contexts/issues-context'
import Button from '@ui/button'
import {
  Issue,
  IssuePriorityLabel,
  IssueStatusLabel,
  IssueTagLabel,
} from '@utils/types'
import { cn } from '@utils/utils'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

type CreateNewIssueModalProps = React.ComponentPropsWithoutRef<'article'> & {
  closeModal: () => void
  isBigSizeModal: boolean
  setIsBigSizeModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CreateNewIssueModal({
  closeModal,
  isBigSizeModal,
  setIsBigSizeModal,
  className,
  ...props
}: CreateNewIssueModalProps) {
  const { createNewIssue } = useIssues()
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
                <Button
                  variant="tertiary"
                  className="p-1 max-sm:hidden"
                  onClick={() => setIsBigSizeModal((prev) => !prev)}
                >
                  {isBigSizeModal ? (
                    <ArrowsMinimizeIcon />
                  ) : (
                    <ArrowsMaximizeIcon />
                  )}
                  <span className="sr-only">
                    {isBigSizeModal ? 'Minimize modal' : 'Maximize modal'}
                  </span>
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
            <div className="flex flex-wrap items-center gap-2">
              <Select
                variant="ghost"
                size="small"
                name="status"
                onChange={(e) =>
                  setNewIssue({
                    ...newIssue,
                    status: e.target.value as IssueStatusLabel,
                  })
                }
              >
                {issueStatuses.map(({ id, name, label, icon: Icon }) => (
                  <Select.Option key={id} value={label}>
                    <Icon />
                    {name}
                  </Select.Option>
                ))}
              </Select>
              <Select
                variant="ghost"
                size="small"
                name="priority"
                onChange={(e) =>
                  setNewIssue({
                    ...newIssue,
                    priority: e.target.value as IssuePriorityLabel,
                  })
                }
              >
                {issuePriorities.map(({ id, name, label, icon: Icon }) => (
                  <Select.Option key={id} value={label}>
                    <Icon />
                    {name}
                  </Select.Option>
                ))}
              </Select>
              <Select
                variant="ghost"
                size="small"
                name="tag"
                onChange={(e) =>
                  setNewIssue({
                    ...newIssue,
                    tag: e.target.value as IssueTagLabel,
                  })
                }
              >
                {issueTags.map(({ id, name, label, icon: Icon }) => (
                  <Select.Option key={id} value={label}>
                    <Icon />
                    {name}
                  </Select.Option>
                ))}
              </Select>
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
