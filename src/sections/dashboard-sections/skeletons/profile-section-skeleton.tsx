import Skeleton from '@dashboard-components/ui/skeleton'

export default function ProfileSectionSkeleton() {
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
        <div className="flex items-center gap-2">
          <Skeleton className="size-12 shrink-0 rounded-full" />
          <Skeleton className="max-w-20 shrink-0" />
        </div>
      </div>
      <Skeleton className="h-0.5 rounded-none" />
      <div className="flex flex-col gap-2 lg:flex-row lg:gap-16">
        <div className="w-full max-w-50">
          <Skeleton className="max-w-30" />
        </div>
        <Skeleton className="h-10 max-w-50 shrink-0" />
      </div>
      <Skeleton className="h-0.5 rounded-none" />
      <div className="flex flex-col gap-2 lg:flex-row lg:gap-16">
        <div className="w-full max-w-50">
          <Skeleton className="max-w-30" />
        </div>
        <Skeleton className="h-10 max-w-50 shrink-0" />
      </div>
      <Skeleton className="h-0.5 rounded-none" />
      <div className="flex flex-col gap-2 lg:flex-row lg:gap-16">
        <div className="w-full max-w-50">
          <Skeleton className="max-w-30" />
        </div>
        <Skeleton className="h-10 max-w-50 shrink-0" />
      </div>
      <Skeleton className="h-0.5 rounded-none" />
      <Skeleton className="h-10 max-w-35" />
    </section>
  )
}
