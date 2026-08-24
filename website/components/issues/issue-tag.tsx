import { IssueTagLabel } from '@/utils/types'
import { cn } from '@/utils/utils'

type IssueTagProps = {
  tag: IssueTagLabel
}

export default function IssueTag({ tag }: IssueTagProps) {
  return (
    <span className="flex w-max items-center gap-2 rounded-full px-2 py-1 text-xs text-neutral-600 capitalize ring inset-ring ring-neutral-900/10 inset-ring-white">
      <div
        className={cn(
          'size-2 rounded-full',
          tag === 'feature' && 'bg-violet-500',
          tag === 'bug' && 'bg-red-500',
          tag === 'improvement' && 'bg-blue-500',
          tag === 'optimization' && 'bg-green-500',
          tag === 'blocker' && 'bg-orange-500'
        )}
      />
      {tag}
    </span>
  )
}
