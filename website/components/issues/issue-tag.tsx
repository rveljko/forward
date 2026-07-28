import BugIssueTagIcon from '@/icons/bug-issue-tag-icon'
import ImprovementIssueTagIcon from '@/icons/improvement-issue-tag-icon'
import OptimizationIssueTagIcon from '@/icons/optimization-issue-tag-icon'
import { IssueTagLabel } from '@/utils/types'
import { cn } from '@/utils/utils'

type IssueTagProps = React.ComponentPropsWithoutRef<'span'> & {
  tag: IssueTagLabel
}

export default function IssueTag({ tag, className, ...props }: IssueTagProps) {
  return (
    <span
      className={cn(
        'flex w-max items-center gap-2 rounded-full px-2 py-1 text-xs text-neutral-600 capitalize ring inset-ring ring-neutral-900/10 inset-ring-white [&>div:first-child]:size-auto',
        className
      )}
      {...props}
    >
      {getTagIcon(tag)}
      {tag}
    </span>
  )
}

function getTagIcon(tag: IssueTagLabel) {
  switch (tag) {
    case 'bug':
      return <BugIssueTagIcon />
    case 'improvement':
      return <ImprovementIssueTagIcon />
    case 'optimization':
      return <OptimizationIssueTagIcon />
  }
}
