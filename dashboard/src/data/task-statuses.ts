import CheckboxIcon from '@icons/checkbox-icon'
import UncheckedBoxIcon from '@icons/unchecked-box-icon'
import { TaskStatus } from '@utils/types'
import { v4 as uuidv4 } from 'uuid'

export const taskStatuses: TaskStatus[] = [
  {
    id: uuidv4(),
    name: 'Checked',
    label: 'checked',
    icon: CheckboxIcon,
  },
  {
    id: uuidv4(),
    name: 'Unchecked',
    label: 'unchecked',
    icon: UncheckedBoxIcon,
  },
]
