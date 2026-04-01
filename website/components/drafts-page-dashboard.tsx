import Cursor from '@/components/cursor'
import DraftCard from '@/components/draft-card'
import { drafts } from '@/data/drafts'
import PlusIcon from '@/icons/plus-icon'

export default function DraftsPageDashboard() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center gap-1 rounded-t-lg border border-neutral-200 bg-white px-2 py-1.5">
        <div className="size-2 rounded-full bg-neutral-200" />
        <div className="size-2 rounded-full bg-neutral-200" />
        <div className="size-2 rounded-full bg-neutral-200" />
      </div>
      <div
        aria-label="Dashboard Drafts page"
        className="bg-dashboard-background pointer-events-none relative isolate h-144 w-full rounded-b-lg border border-t-0 border-neutral-200 p-4 select-none after:absolute after:-inset-4 after:top-0 after:-z-1 after:bg-white after:mask-linear-0 after:mask-linear-from-black after:mask-linear-to-transparent"
      >
        <div
          aria-hidden
          className="size-full overflow-hidden rounded-lg border border-black/10 bg-white"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 z-10 size-full [&_svg]:origin-top-left">
              <Cursor />
            </div>
          </div>
          <div className="border-b border-b-black/10 p-4 text-sm font-medium">
            Drafts
          </div>
          <div className="mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(--spacing(48),100%),1fr))] gap-4 px-4 py-8">
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
        </div>
      </div>
    </div>
  )
}
