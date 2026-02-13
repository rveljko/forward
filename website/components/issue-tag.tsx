import DesignIssueTagIcon from '@/icons/design-issue-tag-icon'
import DevelopmentIssueTagIcon from '@/icons/development-issue-tag-icon'
import { IssueTagLabel } from '@/utils/types'
import { cn } from '@/utils/utils'

type IssueTagProps = React.ComponentPropsWithoutRef<'span'> & {
  tag: IssueTagLabel
}

export default function IssueTag({ tag, className, ...props }: IssueTagProps) {
  return (
    <span
      className={cn(
        'text-dashboard-neutral-600 flex w-max items-center justify-center gap-1 rounded-full border border-black/10 px-3 py-1 text-xs',
        className
      )}
      {...props}
    >
      {getTagIcon(tag)}
      {getTagTitle(tag)}
    </span>
  )
}

function getTagIcon(tag: IssueTagLabel) {
  switch (tag) {
    case 'design':
      return <DesignIssueTagIcon />
    case 'development':
      return <DevelopmentIssueTagIcon />
  }
}

function getTagTitle(tag: IssueTagLabel) {
  switch (tag) {
    case 'design':
      return 'Design'
    case 'development':
      return 'Development'
  }
}
