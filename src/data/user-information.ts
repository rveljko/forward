import { IMAGE_PATH } from '@utils/constants'
import { User } from '@utils/types'

export const userInformation: User = {
  firstName: 'James',
  lastName: 'Williams',
  profilePictureUrl: `${IMAGE_PATH}james-williams.png`,
  emailAddress: 'james@forward.app',
  password: '',
  isTwoStepVerificationEnabled: true,
}
