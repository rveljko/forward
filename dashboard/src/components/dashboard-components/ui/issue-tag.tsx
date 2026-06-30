import { useIssues } from '@services/contexts/issues-context'
import { IssueTagLabel } from '@utils/types'
import { cn } from '@utils/utils'

type IssueTagProps = {
  tag: IssueTagLabel
}

export default function IssueTag({ tag }: IssueTagProps) {
  const { getIssueTag } = useIssues()
  const { name, label } = getIssueTag(tag)

  return (
    <span className="flex w-max items-center gap-2 rounded-full px-2 py-1 text-xs text-neutral-600 ring inset-ring ring-neutral-900/10 inset-ring-white">
      <div
        className={cn(
          'size-2 rounded-full',
          label === 'design' && 'bg-red-500',
          label === 'development' && 'bg-blue-500',
          label === 'testing' && 'bg-yellow-500'
        )}
      />
      {name}
    </span>
  )
}
