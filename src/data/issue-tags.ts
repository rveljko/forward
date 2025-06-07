import DesignIssueTagIcon from '@icons/design-issue-tag-icon'
import DevelopmentIssueTagIcon from '@icons/development-issue-tag-icon'
import TestingIssueTagIcon from '@icons/testing-issue-tag-icon'
import { IssueTag } from '@utils/types'
import { v4 as uuidv4 } from 'uuid'

export const issueTags: IssueTag[] = [
  {
    id: uuidv4(),
    name: 'Design',
    label: 'design',
    icon: DesignIssueTagIcon,
  },
  {
    id: uuidv4(),
    name: 'Development',
    label: 'development',
    icon: DevelopmentIssueTagIcon,
  },
  {
    id: uuidv4(),
    name: 'Testing',
    label: 'testing',
    icon: TestingIssueTagIcon,
  },
]
