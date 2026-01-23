import { useIssues } from '@services/contexts/issues-context'
import { IssueTagLabel } from '@utils/types'

type IssueTagProps = {
  tag: IssueTagLabel
}

export default function IssueTag({ tag }: IssueTagProps) {
  const { getIssueTag } = useIssues()
  const { name, icon: Icon } = getIssueTag(tag)

  return (
    <span className="border-section-outline flex w-max items-center justify-center gap-1 rounded-full border px-3 py-1 text-sm text-neutral-400">
      <Icon />
      {name}
    </span>
  )
}
