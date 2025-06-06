import DesignIssueTagIcon from '@icons/design-issue-tag-icon'
import DevelopmentIssueTagIcon from '@icons/development-issue-tag-icon'
import TestingIssueTagIcon from '@icons/testing-issue-tag-icon'
import { useIssues } from '@services/contexts/issues-context'
import { IssueTagLabel } from '@utils/types'

type IssueTagProps = {
  tag: IssueTagLabel
}

function getTagIcon(label: IssueTagLabel) {
  switch (label) {
    case 'design':
      return <DesignIssueTagIcon />
    case 'development':
      return <DevelopmentIssueTagIcon />
    case 'testing':
      return <TestingIssueTagIcon />
    default:
      return null
  }
}

export default function IssueTag({ tag }: IssueTagProps) {
  const { getIssueTag } = useIssues()
  const { name, label } = getIssueTag(tag)

  return (
    <span className="border-section-outline flex items-center justify-center gap-1 rounded-full border px-3 py-1 text-neutral-400">
      {getTagIcon(label)}
      {name}
    </span>
  )
}
