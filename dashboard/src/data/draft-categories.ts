import GeneralDraftCategoryIcon from '@icons/general-draft-category-icon'
import IdeaDraftCategoryIcon from '@icons/idea-draft-category-icon'
import InspirationDraftCategoryIcon from '@icons/inspiration-draft-category-icon'
import MeetingDraftCategoryIcon from '@icons/meeting-draft-category-icon'
import { DraftCategory } from '@utils/types'
import { v4 as uuidv4 } from 'uuid'

export const draftCategories: DraftCategory[] = [
  {
    id: uuidv4(),
    name: 'General',
    label: 'general',
    icon: GeneralDraftCategoryIcon,
  },
  { id: uuidv4(), name: 'Idea', label: 'idea', icon: IdeaDraftCategoryIcon },
  {
    id: uuidv4(),
    name: 'Meeting',
    label: 'meeting',
    icon: MeetingDraftCategoryIcon,
  },
  {
    id: uuidv4(),
    name: 'Inspiration',
    label: 'inspiration',
    icon: InspirationDraftCategoryIcon,
  },
]
