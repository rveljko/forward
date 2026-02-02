import PriorityHighIcon from '@icons/priority-high-icon'
import PriorityLowIcon from '@icons/priority-low-icon'
import PriorityMediumIcon from '@icons/priority-medium-icon'
import PriorityNoPriorityIcon from '@icons/priority-no-priority-icon'
import PriorityUrgentIcon from '@icons/priority-urgent-icon'
import { IssuePriority } from '@utils/types'
import { v4 as uuidv4 } from 'uuid'

export const issuePriorities: IssuePriority[] = [
  {
    id: uuidv4(),
    name: 'No Priority',
    label: 'no-priority',
    level: 0,
    icon: PriorityNoPriorityIcon,
  },
  { id: uuidv4(), name: 'Low', label: 'low', level: 1, icon: PriorityLowIcon },
  {
    id: uuidv4(),
    name: 'Medium',
    label: 'medium',
    level: 2,
    icon: PriorityMediumIcon,
  },
  {
    id: uuidv4(),
    name: 'High',
    label: 'high',
    level: 3,
    icon: PriorityHighIcon,
  },
  {
    id: uuidv4(),
    name: 'Urgent',
    label: 'urgent',
    level: 4,
    icon: PriorityUrgentIcon,
  },
]
