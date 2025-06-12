import CreateNewIssueModalButton from '@dashboard-components/create-new-issue-modal-button'
import PlusIcon from '@icons/plus-icon'
import { IssueStatusLabel } from '@utils/types'
import { cn } from '@utils/utils'

type IssueColumnHeaderProps = React.ComponentPropsWithoutRef<'div'> & {
  title: string
  icon: React.JSX.Element
  numberOfIssues: number
  status: IssueStatusLabel
}

export default function IssueColumnHeader({
  title,
  icon: Icon,
  numberOfIssues,
  status,
  className,
  ...props
}: IssueColumnHeaderProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between bg-neutral-800 p-4',
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
        <span className="sr-only">Create New Issue</span>
      </CreateNewIssueModalButton>
    </div>
  )
}
