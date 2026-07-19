import Divider from '@dashboard-components/ui/divider'
import Skeleton from '@dashboard-components/ui/skeleton'

export default function PreferencesSectionSkeleton() {
  return (
    <section className="space-y-4">
      <div>
        <Skeleton className="mb-1 max-w-40" />
        <Skeleton className="max-w-60" />
      </div>
      <Divider />
      <div className="flex flex-col items-start gap-2 lg:flex-row lg:gap-16">
        <div className="w-full max-w-50">
          <Skeleton className="max-w-30" />
        </div>
        <div className="flex flex-wrap gap-2">
          <div>
            <Skeleton className="mb-1 h-27 w-40" />
            <Skeleton className="w-20" />
          </div>
          <div>
            <Skeleton className="mb-1 h-27 w-40" />
            <Skeleton className="w-20" />
          </div>
          <div>
            <Skeleton className="mb-1 h-27 w-40" />
            <Skeleton className="w-20" />
          </div>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col items-start gap-2 lg:flex-row lg:gap-16">
        <div className="w-full max-w-50">
          <Skeleton className="max-w-30" />
        </div>
        <Skeleton className="aspect-2/1 h-auto w-(--switch-width) rounded-full" />
      </div>
      <Divider />
      <div className="flex flex-col items-start gap-2 lg:flex-row lg:gap-16">
        <div className="w-full max-w-50">
          <Skeleton className="max-w-30" />
        </div>
        <Skeleton className="aspect-2/1 h-auto w-(--switch-width) rounded-full" />
      </div>
      <Divider />
      <div className="flex flex-col items-start gap-2 lg:flex-row lg:gap-16">
        <div className="w-full max-w-50">
          <Skeleton className="max-w-30" />
        </div>
        <Skeleton className="h-7 max-w-20" />
      </div>
      <Divider />
      <Skeleton className="h-9.5 max-w-35" />
    </section>
  )
}
