import { IMAGE_PATH } from '@utils/constants'
import { Chat } from '@utils/types'
import { v4 as uuidv4 } from 'uuid'

export const chats: Chat[] = [
  {
    id: uuidv4(),
    name: 'Liam Smith',
    image: `${IMAGE_PATH}liam-smith.png`,
  },
  {
    id: uuidv4(),
    name: 'Jessica Garcia',
    image: `${IMAGE_PATH}jessica-garcia.png`,
  },
  {
    id: uuidv4(),
    name: 'Luna Moore',
    image: `${IMAGE_PATH}luna-moore.png`,
  },
  {
    id: uuidv4(),
    name: 'Sophia Taylor',
    image: `${IMAGE_PATH}sophia-taylor.png`,
  },
  {
    id: uuidv4(),
    name: 'Benjamin Miller',
    image: `${IMAGE_PATH}benjamin-miller.png`,
  },
]
