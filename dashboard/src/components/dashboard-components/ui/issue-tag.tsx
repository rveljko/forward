import { useIssues } from '@services/contexts/issues-context'
import { IssueTagLabel } from '@utils/types'

type IssueTagProps = {
  tag: IssueTagLabel
}

export default function IssueTag({ tag }: IssueTagProps) {
  const { getIssueTag } = useIssues()
  const { name, icon: Icon } = getIssueTag(tag)

  return (
    <span className="flex w-max items-center gap-2 rounded-full px-2 py-1 text-xs text-neutral-600 ring inset-ring ring-neutral-900/10 inset-ring-white">
      <Icon />
      {name}
    </span>
  )
}
