import Divider from '@dashboard-components/ui/divider'
import Skeleton from '@dashboard-components/ui/skeleton'

export default function ProfileSectionSkeleton() {
  return (
    <section className="space-y-4">
      <div>
        <Skeleton className="mb-1 max-w-40" />
        <Skeleton className="max-w-60" />
      </div>
      <Divider />
      <div className="flex flex-col gap-2 lg:flex-row lg:gap-16">
        <div className="w-full max-w-50">
          <Skeleton className="max-w-30" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="size-12 shrink-0 rounded-full" />
          <Skeleton className="max-w-20 shrink-0" />
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-2 lg:flex-row lg:gap-16">
        <div className="w-full max-w-50">
          <Skeleton className="max-w-30" />
        </div>
        <Skeleton className="h-9 max-w-50 shrink-0" />
      </div>
      <Divider />
      <div className="flex flex-col gap-2 lg:flex-row lg:gap-16">
        <div className="w-full max-w-50">
          <Skeleton className="max-w-30" />
        </div>
        <Skeleton className="h-9 max-w-50 shrink-0" />
      </div>
      <Divider />
      <div className="flex flex-col gap-2 lg:flex-row lg:gap-16">
        <div className="w-full max-w-50">
          <Skeleton className="max-w-30" />
        </div>
        <Skeleton className="h-9 max-w-50 shrink-0" />
      </div>
      <Divider />
      <Skeleton className="h-9.5 max-w-35" />
    </section>
  )
}
