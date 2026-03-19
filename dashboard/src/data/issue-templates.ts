import AlertTriangleIcon from '@icons/alert-triangle-icon'
import BugIcon from '@icons/bug-icon'
import DocumentIcon from '@icons/document-icon'
import GitBranchIcon from '@icons/git-branch-icon'
import SparklesIcon from '@icons/sparkles-icon'
import { IssueTemplate } from '@utils/types'
import { v4 as uuidv4 } from 'uuid'

export const issueTemplates: IssueTemplate[] = [
  {
    id: uuidv4(),
    name: 'Clean',
    label: 'clean',
    icon: DocumentIcon,
  },
  {
    id: uuidv4(),
    name: 'Feature Request',
    label: 'feature-request',
    icon: SparklesIcon,
  },
  {
    id: uuidv4(),
    name: 'Bug Report',
    label: 'bug-report',
    icon: BugIcon,
  },
  {
    id: uuidv4(),
    name: 'Improvement',
    label: 'improvement',
    icon: GitBranchIcon,
  },
  {
    id: uuidv4(),
    name: 'Blocker',
    label: 'blocker',
    icon: AlertTriangleIcon,
  },
]
