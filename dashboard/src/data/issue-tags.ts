import BugIssueTagIcon from '@icons/bug-issue-tag-icon'
import FeatureIssueTagIcon from '@icons/feature-issue-tag-icon'
import ImprovementIssueTagIcon from '@icons/improvement-issue-tag-icon'
import OptimizationIssueTagIcon from '@icons/optimization-issue-tag-icon'
import { IssueTag } from '@utils/types'
import { v4 as uuidv4 } from 'uuid'

export const issueTags: IssueTag[] = [
  {
    id: uuidv4(),
    name: 'Feature',
    label: 'feature',
    icon: FeatureIssueTagIcon,
  },
  {
    id: uuidv4(),
    name: 'Bug',
    label: 'bug',
    icon: BugIssueTagIcon,
  },
  {
    id: uuidv4(),
    name: 'Improvement',
    label: 'improvement',
    icon: ImprovementIssueTagIcon,
  },
  {
    id: uuidv4(),
    name: 'Optimization',
    label: 'optimization',
    icon: OptimizationIssueTagIcon,
  },
]
