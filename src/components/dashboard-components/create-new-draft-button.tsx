import PlusIcon from '@icons/plus-icon'
import { useDrafts } from '@services/contexts/drafts-context'

export default function CreateNewDraftButton() {
  const { createNewDraft } = useDrafts()

  return (
    <button
      className="text-clickable border-section-outline flex size-full flex-col items-center justify-center gap-2 rounded-lg border bg-neutral-800 px-4 py-8 shadow-sm transition-all pointer-coarse:active:bg-neutral-700 hover:cursor-pointer hover:bg-neutral-700 active:scale-99"
      onClick={() => createNewDraft()}
    >
      <div className="bg-clickable/10 flex size-16 items-center justify-center rounded-full [&_svg]:size-8">
        <PlusIcon />
      </div>
      Create New Draft
    </button>
  )
}
