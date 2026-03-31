import DraftCard from '@/components/draft-card'
import { drafts } from '@/data/drafts'
import PlusIcon from '@/icons/plus-icon'

export default function DraftsPanel() {
  return (
    <>
      <div className="border-b border-b-black/10 p-4 text-sm font-medium">
        Drafts
      </div>
      <div className="mx-auto grid max-w-180 grid-cols-[repeat(auto-fit,minmax(min(--spacing(48),100%),1fr))] gap-4 px-4 py-8">
        <span className="bg-dashboard-neutral-200 flex size-full flex-col items-center justify-center gap-2 rounded-lg border border-black/10 px-4 py-8 shadow-sm">
          <div className="flex size-16 items-center justify-center rounded-full bg-black/10 [&_svg]:size-8">
            <PlusIcon />
          </div>
          <span className="text-sm font-medium">Create New Draft</span>
        </span>
        {drafts.map((draft, index) => (
          <DraftCard draft={draft} key={index} />
        ))}
      </div>
    </>
  )
}
