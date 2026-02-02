import { CornerRoundness } from '@utils/types'
import { v4 as uuidv4 } from 'uuid'

export const cornerRoundnesses: CornerRoundness[] = [
  { id: uuidv4(), name: 'Extra Small', label: 'extra-small', value: 2 },
  { id: uuidv4(), name: 'Small', label: 'small', value: 4 },
  { id: uuidv4(), name: 'Medium', label: 'medium', value: 8 },
  { id: uuidv4(), name: 'Large', label: 'large', value: 12 },
]
