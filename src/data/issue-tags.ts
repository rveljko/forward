import { IssueTag } from '@utils/types'
import { v4 as uuidv4 } from 'uuid'

export const issueTags: IssueTag[] = [
  {
    id: uuidv4(),
    name: 'Design',
    label: 'design',
  },
  {
    id: uuidv4(),
    name: 'Development',
    label: 'development',
  },
  {
    id: uuidv4(),
    name: 'Testing',
    label: 'testing',
  },
]
