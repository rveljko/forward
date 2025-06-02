import Divider from '@dashboard-components/ui/divider'
import SidebarClosedIcon from '@icons/sidebar-closed-icon'
import { useIssues } from '@services/contexts/issues-context'
import Button from '@ui/button'
import { TITLE_PREFIX } from '@utils/constants'
import { Issue } from '@utils/types'
import { useRef, useState } from 'react'
import { Link, Navigate } from 'react-router'

type IssueSectionProps = {
  issueId: Issue['id']
}

export default function IssueSection({ issueId }: IssueSectionProps) {
  const { getIssueById } = useIssues()

  const issue = getIssueById(issueId)

  if (!issue) return <Navigate to="/dashboard/issues" />

  const { title } = issue

  return (
    <section>
      <title>{`${TITLE_PREFIX}${title}`}</title>
      <Header id={issueId} title={title} />
      <Divider />
    </section>
  )
}

type HeaderProps = {
  id: Issue['id']
  title: Issue['title']
}

function Header({ id, title }: HeaderProps) {
  const { renameIssue } = useIssues()
  const [newTitle, setNewTitle] = useState(title)
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <header className="flex items-center justify-between gap-2 p-4">
      <div className="flex grow items-center gap-1">
        <Link to="/dashboard/issues">Issues</Link>
        <span className="text-neutral-400">/</span>
        <input
          type="text"
          ref={inputRef}
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onBlur={() => renameIssue(id, newTitle)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              renameIssue(id, newTitle)
              inputRef.current?.blur()
            }
          }}
          className="text-clickable w-full max-w-85"
        />
      </div>
      <Button variant="tertiary" className="p-0.5">
        <SidebarClosedIcon />
      </Button>
    </header>
  )
}
