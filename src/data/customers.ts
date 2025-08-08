import { IMAGE_PATH } from '@utils/constants'
import { Company } from '@utils/types'
import { v4 as uuidv4 } from 'uuid'

export const customers: Company[] = [
  {
    id: uuidv4(),
    name: 'Atica',
    description: 'AI firm improving business tasks with smart tech solutions',
    imageUrl: `${IMAGE_PATH}atica-logo.svg`,
  },
  {
    id: uuidv4(),
    name: 'Hooks',
    description:
      'Marketing agency focused on content creation and audience connection',
    imageUrl: `${IMAGE_PATH}hooks-logo.svg`,
  },
  {
    id: uuidv4(),
    name: 'Liva',
    description:
      'Health tech firm offering tailored care plans for chronic disease management',
    imageUrl: `${IMAGE_PATH}liva-logo.svg`,
  },
  {
    id: uuidv4(),
    name: 'Goldline',
    description:
      'Precious metals investment firm specializing in gold and silver products',
    imageUrl: `${IMAGE_PATH}goldline-logo.svg`,
  },
  {
    id: uuidv4(),
    name: 'Kyan',
    description:
      'Wellness firm boosting mental health support for workers and firms',
    imageUrl: `${IMAGE_PATH}kyan-logo.svg`,
  },
  {
    id: uuidv4(),
    name: 'LightAi',
    description:
      'AI firm offering diagnostic tools for better medical decision-making',
    imageUrl: `${IMAGE_PATH}lightai-logo.svg`,
  },
]
