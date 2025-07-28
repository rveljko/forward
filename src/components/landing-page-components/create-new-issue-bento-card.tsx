import Divider from '@dashboard-components/ui/divider'
import Select from '@dashboard-components/ui/select'
import { issuePriorities } from '@data/issue-priorities'
import { issueStatuses } from '@data/issue-statuses'
import { issueTags } from '@data/issue-tags'
import useOnClickOutside from '@hooks/use-on-click-outside'
import BentoCard from '@landing-page-components/ui/bento-card'
import { usePreferences } from '@services/contexts/preferences-context'
import Button from '@ui/button'
import {
  Issue,
  IssuePriorityLabel,
  IssueStatusLabel,
  IssueTagLabel,
} from '@utils/types'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function CreateNewIssueBentoCard() {
  const { getRemCornerRoundness } = usePreferences()

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
  const [isOpened, setIsOpened] = useState(false)

  const ref = useOnClickOutside<HTMLDivElement>(() => {
    if (!isOpened) return
    setNewIssue(initialIssue)
    setIsOpened(false)
  })

  function handleOnKeyDown(e: KeyboardEvent) {
    if (e.code === 'Escape') {
      setNewIssue(initialIssue)
      setIsOpened(false)
    }
  }

  useEffect(() => {
    if (!isOpened) return
    document.body.addEventListener('keydown', handleOnKeyDown)

    return () => {
      document.body.removeEventListener('keydown', handleOnKeyDown)
    }
  }, [isOpened])

  return (
    <BentoCard>
      <div className="relative h-full" ref={ref}>
        <div
          className={`transition-opacity duration-400 ${isOpened ? 'opacity-0' : ''}`}
        >
          <BentoCard.Heading>Effortless Issue Creation</BentoCard.Heading>
          <BentoCard.Paragraph>
            Easily create new issues with priority, status, and tags for better
            organization
          </BentoCard.Paragraph>
        </div>
        <div
          style={{ borderRadius: getRemCornerRoundness() }}
          className={`bg-create-new-issue-modal-background border-section-outline absolute top-0 left-0 size-full overflow-hidden border transition-all duration-400 ${isOpened ? 'rotate-0' : 'translate-y-1/2 rotate-4 md:translate-x-1/2'}`}
          onClick={() => {
            if (isOpened) return
            setIsOpened(true)
          }}
        >
          <form
            className="flex h-full flex-col"
            onSubmit={(e) => {
              e.preventDefault()
              setNewIssue(initialIssue)
              setIsOpened(false)
            }}
          >
            <div className="flex h-full flex-col gap-2 p-4">
              <input
                type="text"
                name="title"
                placeholder="Issue title"
                value={newIssue.title}
                onChange={(e) =>
                  setNewIssue({ ...newIssue, title: e.target.value })
                }
                className="text-clickable w-full text-2xl placeholder:text-neutral-400 focus:outline-0"
              />
              <textarea
                name="description"
                placeholder="Issue description"
                value={newIssue.description}
                onChange={(e) =>
                  setNewIssue({ ...newIssue, description: e.target.value })
                }
                className="text-clickable size-full resize-none placeholder:text-neutral-400 focus:outline-0"
              />
              <div className="flex flex-wrap items-center gap-2">
                <Select
                  variant="ghost"
                  size="small"
                  name="status"
                  value={newIssue.status}
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
                  value={newIssue.priority}
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
                  value={newIssue.tag}
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
            <div className="mt-auto">
              <Divider />
              <div className="flex overflow-x-auto p-4">
                <div className="ml-auto flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="large"
                    onClick={() => {
                      setNewIssue(initialIssue)
                      setIsOpened(false)
                    }}
                  >
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
              </div>
            </div>
          </form>
        </div>
      </div>
    </BentoCard>
  )
}
