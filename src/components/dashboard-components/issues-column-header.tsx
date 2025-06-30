import CreateNewIssueModalButton from '@dashboard-components/create-new-issue-modal-button'
import PlusIcon from '@icons/plus-icon'
import { useIssues } from '@services/contexts/issues-context'
import { IssueStatusLabel } from '@utils/types'
import { cn } from '@utils/utils'

type IssuesColumnHeaderProps = React.ComponentPropsWithoutRef<'div'> & {
  title: string
  icon: React.JSX.Element
  numberOfIssues: number
  status: IssueStatusLabel
}

export default function IssuesColumnHeader({
  title,
  icon: Icon,
  numberOfIssues,
  status,
  className,
  ...props
}: IssuesColumnHeaderProps) {
  const { getIssueStatus } = useIssues()
  const { name } = getIssueStatus(status)

  return (
    <div
      className={cn(
        'bg-clickable/10 flex items-center justify-between p-4',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="text-clickable flex items-center gap-1">
          {Icon}
          <h2>{title}</h2>
        </div>
        <span className="text-neutral-400">{numberOfIssues}</span>
      </div>
      <CreateNewIssueModalButton
        variant="tertiary"
        className="p-0.5"
        status={status}
      >
        <PlusIcon />
        <span className="sr-only">{`Create New ${name} Issue`}</span>
      </CreateNewIssueModalButton>
    </div>
  )
}
