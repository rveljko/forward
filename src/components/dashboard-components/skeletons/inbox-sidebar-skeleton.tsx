import Skeleton from '@dashboard-components/ui/skeleton'
import { chats } from '@data/chats'

export default function InboxSidebarSkeleton() {
  return (
    <div className="relative w-full md:max-w-80">
      <Skeleton className="absolute right-0 h-full w-0.25 max-md:hidden" />
      <div className="md:mr-0.25">
        <div className="p-4">
          <Skeleton className="max-w-40" />
        </div>
        <Skeleton className="h-0.5 rounded-none" />
        <div className="p-4">
          <Skeleton className="h-10" />
        </div>
        <Skeleton className="h-0.5 rounded-none" />
        <div className="space-y-0.25">
          {chats.map((_, index) => (
            <div key={index} className="flex items-center gap-2 px-4 py-5">
              <Skeleton className="size-10 shrink-0 rounded-full" />
              <div className="flex w-full flex-col">
                <Skeleton className="mb-1 h-5 max-w-30" />
                <Skeleton className="h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
