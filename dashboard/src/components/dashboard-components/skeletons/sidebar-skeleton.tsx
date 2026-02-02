import Skeleton from '@dashboard-components/ui/skeleton'
import {
  primaryNavigationLinks,
  secondaryNavigationLinks,
} from '@data/navigation-links'

export default function SidebarSkeleton() {
  return (
    <aside className="h-full w-max p-4 md:w-(--sidebar-opened-width)">
      <div className="flex h-full flex-col gap-4">
        <div className="flex items-center justify-between gap-2 max-md:flex-col">
          <Skeleton className="max-md:size-5 max-md:rounded-full md:h-7 md:max-w-25" />
          <Skeleton className="size-7" />
        </div>
        <div className="flex h-full flex-col gap-1 overflow-y-auto">
          <div className="space-y-1">
            <Skeleton className="max-md:size-8 md:h-8" />
            <Skeleton className="max-md:size-8 md:h-8" />
          </div>
          <div className="flex h-full flex-col justify-between gap-1">
            <div className="space-y-1">
              {primaryNavigationLinks.map((_, index) => (
                <Skeleton key={index} className="max-md:size-8 md:h-8" />
              ))}
            </div>
            <div className="space-y-1">
              {secondaryNavigationLinks.map((_, index) => (
                <Skeleton key={index} className="max-md:size-8 md:h-8" />
              ))}
              <Skeleton className="max-md:size-8 md:h-8" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
