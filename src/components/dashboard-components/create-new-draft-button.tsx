import PlusIcon from '@icons/plus-icon'

export default function CreateNewDraftButton() {
  return (
    <button className="text-clickable border-section-outline flex size-full flex-col items-center justify-center gap-2 rounded-lg border bg-neutral-800 px-4 py-8 shadow-sm hover:cursor-pointer hover:bg-neutral-700 active:scale-99">
      <div className="bg-clickable/10 flex size-16 items-center justify-center rounded-full [&_svg]:size-8">
        <PlusIcon />
      </div>
      Create New Draft
    </button>
  )
}
