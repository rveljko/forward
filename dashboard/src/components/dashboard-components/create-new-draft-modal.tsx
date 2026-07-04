import Divider from '@dashboard-components/ui/divider'
import ModalCard from '@dashboard-components/ui/modal-card'
import Select from '@dashboard-components/ui/select'
import { draftCategories } from '@data/draft-categories'
import CloseIcon from '@icons/close-icon'
import { useDrafts } from '@services/contexts/drafts-context'
import Button from '@ui/button'
import Switch from '@ui/switch'
import { showToast } from '@utils/toasts'
import { Draft, DraftCategoryLabel } from '@utils/types'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

type CreateNewDraftModalProps = React.ComponentPropsWithoutRef<'article'> & {
  closeModal: () => void
}

export default function CreateNewDraftModal({
  closeModal,
  ...props
}: CreateNewDraftModalProps) {
  const { createNewDraft } = useDrafts()
  const initialDraft: Draft = {
    id: uuidv4(),
    title: '',
    category: 'general',
    content: '',
    lastEdit: new Date(),
  }
  const [newDraft, setNewDraft] = useState(initialDraft)
  const [createMore, setCreateMore] = useState(false)

  return (
    <ModalCard {...props}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          createNewDraft(newDraft)
          showToast({
            title: 'Draft Created',
            description: 'Draft added successfully',
          })
          if (createMore) {
            setNewDraft(initialDraft)
          } else {
            closeModal()
          }
        }}
      >
        <div className="space-y-2 p-4">
          <div className="flex items-start justify-between gap-2">
            <input
              type="text"
              placeholder="Draft title"
              value={newDraft.title}
              onChange={(e) =>
                setNewDraft((prevDraft) => ({
                  ...prevDraft,
                  title: e.target.value,
                }))
              }
              className="w-full text-2xl font-medium text-black placeholder:text-neutral-600 focus:outline-0"
              required
            />
            <Button variant="tertiary" className="p-1" onClick={closeModal}>
              <CloseIcon />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <textarea
            placeholder="Draft content"
            value={newDraft.content}
            onChange={(e) =>
              setNewDraft((prevDraft) => ({
                ...prevDraft,
                content: e.target.value,
              }))
            }
            className="aspect-5/1 w-full resize-none text-black placeholder:text-neutral-600 focus:outline-0"
          />
          <Select
            variant="ghost"
            size="small"
            value={newDraft.category}
            onChange={(e) =>
              setNewDraft((prevDraft) => ({
                ...prevDraft,
                category: e.target.value as DraftCategoryLabel,
              }))
            }
          >
            {draftCategories.map(({ id, name, label, icon: Icon }) => (
              <Select.Option key={id} value={label}>
                <Icon />
                {name}
              </Select.Option>
            ))}
          </Select>
        </div>
        <Divider />
        <div dir="rtl" className="flex overflow-x-auto p-4">
          <div dir="ltr" className="ml-auto flex items-center gap-2">
            <label className="flex items-center gap-2 text-nowrap text-neutral-600">
              Create more
              <Switch
                checked={createMore}
                onChange={() => setCreateMore((prev) => !prev)}
              />
            </label>
            <Button variant="ghost" size="large" onClick={closeModal}>
              Cancel
            </Button>
            <Button variant="primary" size="large" type="submit">
              Create New Draft
            </Button>
          </div>
        </div>
      </form>
    </ModalCard>
  )
}
