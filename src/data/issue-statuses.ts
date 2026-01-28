import CircleDashedIcon from '@icons/circle-dashed-icon'
import CircleEmptyIcon from '@icons/circle-empty-icon'
import CircleFullIcon from '@icons/circle-full-icon'
import CircleHalfIcon from '@icons/circle-half-icon'
import CircleThreeQuartersIcon from '@icons/circle-three-quarters-icon'
import { IssueStatus } from '@utils/types'
import { v4 as uuidv4 } from 'uuid'

export const issueStatuses: IssueStatus[] = [
  {
    id: uuidv4(),
    name: 'Backlog',
    label: 'backlog',
    icon: CircleDashedIcon,
  },
  {
    id: uuidv4(),
    name: 'Todo',
    label: 'todo',
    icon: CircleEmptyIcon,
  },
  {
    id: uuidv4(),
    name: 'In Progress',
    label: 'in-progress',
    icon: CircleHalfIcon,
  },
  {
    id: uuidv4(),
    name: 'In Review',
    label: 'in-review',
    icon: CircleThreeQuartersIcon,
  },
  {
    id: uuidv4(),
    name: 'Finished',
    label: 'finished',
    icon: CircleFullIcon,
  },
]
