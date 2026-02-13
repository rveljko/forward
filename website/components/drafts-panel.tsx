import ClockIcon from '@/icons/clock-icon'
import DotsVerticalIcon from '@/icons/dots-vertical-icon'
import PlusIcon from '@/icons/plus-icon'

type Draft = {
  title: string
  daysAgo: string
}

const drafts: Draft[] = [
  { title: 'Offline mode support for dashboard idea', daysAgo: '1d ago' },
  { title: 'Note for next meeting with John', daysAgo: '2d ago' },
]

export default function DraftsPanel() {
  return (
    <>
      <div className="border-b border-b-black/10 p-4 text-sm font-medium">
        Drafts
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(--spacing(64),100%),1fr))] gap-4 px-4 py-8">
        <span className="bg-dashboard-neutral-200 flex size-full flex-col items-center justify-center gap-2 rounded-lg border border-black/10 px-4 py-8 shadow-sm">
          <div className="flex size-16 items-center justify-center rounded-full bg-black/10 [&_svg]:size-8">
            <PlusIcon />
          </div>
          <span className="text-sm font-medium">Create New Draft</span>
        </span>
        {drafts.map(({ title, daysAgo }, index) => (
          <article
            key={index}
            className="h-full rounded-lg shadow-sm ring ring-black/10"
          >
            <div className="overflow-hidden rounded-t-lg">
              <div className="aspect-3/1 w-full bg-black/10"></div>
            </div>
            <div className="h-16 border-b border-b-black/10 p-2">
              <span className="line-clamp-2 text-sm font-medium text-balance">
                {title}
              </span>
            </div>
            <div className="flex items-center justify-between p-2">
              <span className="text-dashboard-neutral-600 flex items-center gap-1 text-xs [&_svg]:size-4">
                <ClockIcon /> {daysAgo}
              </span>
              <span className="[&_svg]:size-4">
                <DotsVerticalIcon />
              </span>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
