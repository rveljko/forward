import Skeleton from '@dashboard-components/ui/skeleton'

export default function SecuritySectionSkeleton() {
  return (
    <section className="space-y-4">
      <div>
        <Skeleton className="mb-1 max-w-40" />
        <Skeleton className="max-w-60" />
      </div>
      <Skeleton className="h-0.5 rounded-none" />
      <div className="flex flex-col gap-2 lg:flex-row lg:gap-16">
        <div className="w-full max-w-50">
          <Skeleton className="max-w-30" />
        </div>
        <Skeleton className="h-10 max-w-50 shrink-0" />
      </div>
      <Skeleton className="h-0.5 rounded-none" />
      <div className="flex flex-col items-start gap-2 lg:flex-row lg:gap-16">
        <div className="w-full max-w-50">
          <Skeleton className="max-w-30" />
        </div>
        <Skeleton className="aspect-2/1 h-auto w-(--switch-width) rounded-full" />
      </div>
      <Skeleton className="h-0.5 rounded-none" />
      <Skeleton className="h-10 max-w-35" />
    </section>
  )
}
