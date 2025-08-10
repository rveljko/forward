import Skeleton from '@dashboard-components/ui/skeleton'
import { sidebarStyles } from '@data/sidebar-styles'
import { themes } from '@data/themes'

export default function PreferencesSectionSkeleton() {
  return (
    <section className="space-y-4">
      <div>
        <Skeleton className="mb-1 max-w-40" />
        <Skeleton className="max-w-60" />
      </div>
      <Skeleton className="h-0.5" />
      <div className="flex flex-col items-start gap-2 lg:flex-row lg:gap-16">
        <div className="w-full max-w-50">
          <Skeleton className="max-w-30" />
        </div>
        <div className="flex flex-wrap gap-2">
          {themes.map((_, index) => (
            <div key={index}>
              <Skeleton className="mb-1 h-27 w-40" />
              <Skeleton className="w-20" />
            </div>
          ))}
        </div>
      </div>
      <Skeleton className="h-0.5" />
      <div className="flex flex-col items-start gap-2 lg:flex-row lg:gap-16">
        <div className="w-full max-w-50">
          <Skeleton className="max-w-30" />
        </div>
        <div className="flex flex-wrap gap-2">
          {sidebarStyles.map((_, index) => (
            <div key={index}>
              <Skeleton className="mb-1 h-27 w-40" />
              <Skeleton className="w-20" />
            </div>
          ))}
        </div>
      </div>
      <Skeleton className="h-0.5" />
      <div className="flex flex-col items-start gap-2 lg:flex-row lg:gap-16">
        <div className="w-full max-w-50">
          <Skeleton className="max-w-30" />
        </div>
        <Skeleton className="aspect-2/1 h-auto w-(--switch-width) rounded-full" />
      </div>
      <Skeleton className="h-0.5" />
      <div className="flex flex-col items-start gap-2 lg:flex-row lg:gap-16">
        <div className="w-full max-w-50">
          <Skeleton className="max-w-30" />
        </div>
        <Skeleton className="aspect-2/1 h-auto w-(--switch-width) rounded-full" />
      </div>
      <Skeleton className="h-0.5" />
      <div className="flex flex-col items-start gap-2 lg:flex-row lg:gap-16">
        <div className="w-full max-w-50">
          <Skeleton className="max-w-30" />
        </div>
        <Skeleton className="h-8 max-w-20" />
      </div>
      <Skeleton className="h-0.5" />
      <Skeleton className="h-10 max-w-35" />
    </section>
  )
}
