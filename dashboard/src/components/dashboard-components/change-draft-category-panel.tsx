import Divider from '@dashboard-components/ui/divider'
import IconWrapper from '@dashboard-components/ui/icon-wrapper'
import PanelCard from '@dashboard-components/ui/panel-card'
import RadioButton from '@dashboard-components/ui/radio-button'
import { draftCategories } from '@data/draft-categories'
import LabelIcon from '@icons/label-icon'
import { useDrafts } from '@services/contexts/drafts-context'
import Button from '@ui/button'
import { showToast } from '@utils/toasts'
import { Draft } from '@utils/types'
import { useState } from 'react'

type ChangeDraftCategoryPanelProps = {
  draftId: Draft['id']
  closeModal: () => void
}

export default function ChangeDraftCategoryPanel({
  draftId,
  closeModal,
}: ChangeDraftCategoryPanelProps) {
  const { getDraftById, updateDraftCategory } = useDrafts()
  const { title, category } = getDraftById(draftId)
  const [newCategory, setNewCategory] = useState(category)

  const isButtonDisabled = newCategory === category

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        updateDraftCategory(draftId, newCategory)
        showToast({
          title: 'Draft Category Changed',
          description: 'Category updated successfully',
        })
        closeModal()
      }}
    >
      <div className="px-4 pt-4">
        <IconWrapper icon={<LabelIcon />} className="mb-2" />
        <h3 className="mb-1 font-medium">Change {title} Category</h3>
        <p className="mb-4 text-xs text-neutral-600">Update draft category</p>
      </div>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(--spacing(42.5),100%),1fr))] gap-2 px-4 pb-4 max-sm:max-h-65 max-sm:overflow-y-auto max-sm:pt-0.5">
        {draftCategories.map(({ id, name, label, icon: Icon }) => (
          <li className="w-full flex-1" key={id}>
            <PanelCard>
              <div className="flex items-start justify-between">
                <PanelCard.Icon icon={<Icon />} className="mb-1" />
                <RadioButton
                  id={label}
                  onChange={() => setNewCategory(label)}
                  checked={label === newCategory}
                />
              </div>
              <PanelCard.Label htmlFor={label}>{name}</PanelCard.Label>
            </PanelCard>
          </li>
        ))}
      </ul>
      <Divider />
      <div className="flex items-center justify-end gap-2 p-4">
        <Button variant="ghost" size="large" onClick={closeModal}>
          Cancel
        </Button>
        <Button
          variant="primary"
          size="large"
          type="submit"
          disabled={isButtonDisabled}
        >
          Save Changes
        </Button>
      </div>
    </form>
  )
}
