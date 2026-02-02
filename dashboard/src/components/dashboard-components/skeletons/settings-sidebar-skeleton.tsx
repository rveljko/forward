import Skeleton from '@dashboard-components/ui/skeleton'
import { settingsNavigationLinks } from '@data/navigation-links'

export default function SettingsSidebarSkeleton() {
  return (
    <aside className="relative h-full w-max shrink-0 p-4 md:w-(--settings-sidebar-opened-width)">
      <Skeleton className="absolute top-0 right-0 h-full w-0.25 rounded-none" />
      <div className="mr-0.25">
        <div className="mb-4 flex items-center justify-center md:justify-between">
          <Skeleton className="h-10 max-w-35 max-md:hidden" />
          <Skeleton className="aspect-square size-7 w-auto" />
        </div>
        <div className="space-y-1">
          {settingsNavigationLinks.map((_, index) => (
            <Skeleton key={index} className="max-md:size-8 md:h-8" />
          ))}
        </div>
      </div>
    </aside>
  )
}
