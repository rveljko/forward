import Divider from '@dashboard-components/ui/divider'
import SidebarClosedIcon from '@icons/sidebar-closed-icon'
import { useIssues } from '@services/contexts/issues-context'
import Button from '@ui/button'
import { TITLE_PREFIX } from '@utils/constants'
import { Issue } from '@utils/types'
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
      <header className="flex items-center justify-between gap-2 p-4">
        <div className="flex items-center gap-1">
          <Link to="/dashboard/issues">Issues</Link>
          <span className="text-neutral-400">/</span>
          <p>{title}</p>
        </div>
        <Button variant="tertiary" className="p-0.5">
          <SidebarClosedIcon />
        </Button>
      </header>
      <Divider />
    </section>
  )
}
