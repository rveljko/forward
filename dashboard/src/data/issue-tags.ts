import DesignIssueTagIcon from '@icons/design-issue-tag-icon'
import DevelopmentIssueTagIcon from '@icons/development-issue-tag-icon'
import TestingIssueTagIcon from '@icons/testing-issue-tag-icon'
import { IssueTag } from '@utils/types'
import { v4 as uuidv4 } from 'uuid'

export const issueTags: IssueTag[] = [
  {
    id: uuidv4(),
    name: 'Bug',
    label: 'bug',
    icon: DesignIssueTagIcon,
  },
  {
    id: uuidv4(),
    name: 'Improvement',
    label: 'improvement',
    icon: DevelopmentIssueTagIcon,
  },
  {
    id: uuidv4(),
    name: 'Optimization',
    label: 'optimization',
    icon: TestingIssueTagIcon,
  },
]
