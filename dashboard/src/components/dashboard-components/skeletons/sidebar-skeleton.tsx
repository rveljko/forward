import Skeleton from '@dashboard-components/ui/skeleton'

export default function SidebarSkeleton() {
  return (
    <aside className="h-full w-16 shrink-0 p-4 md:w-64">
      <div className="flex h-full flex-col gap-4">
        <div className="flex items-center justify-between gap-2 max-md:flex-col">
          <Skeleton className="hidden h-7 max-w-25 md:block" />
          <Skeleton className="size-7" />
        </div>
        <div className="flex h-full flex-col gap-1 overflow-y-auto">
          <div className="space-y-1">
            <Skeleton className="size-7 md:h-7 md:w-auto" />
            <Skeleton className="size-7 md:h-7 md:w-auto" />
          </div>
          <div className="flex h-full flex-col justify-between gap-1">
            <div className="space-y-1">
              <Skeleton className="size-7 md:h-7 md:w-auto" />
              <Skeleton className="size-7 md:h-7 md:w-auto" />
              <Skeleton className="size-7 md:h-7 md:w-auto" />
            </div>
            <div className="space-y-1">
              <Skeleton className="size-7 md:h-7 md:w-auto" />
              <Skeleton className="size-7 md:h-7 md:w-auto" />
              <Skeleton className="size-7 md:h-7 md:w-auto" />
              <Skeleton className="size-7 md:h-7 md:w-auto" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
