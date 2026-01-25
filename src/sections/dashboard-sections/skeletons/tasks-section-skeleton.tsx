import Skeleton from '@dashboard-components/ui/skeleton'

export default function TasksSectionSkeleton() {
  return (
    <section>
      <div className="p-4">
        <Skeleton className="max-w-40" />
      </div>
      <Skeleton className="h-0.5 rounded-none" />
      <div className="flex flex-wrap items-center justify-between gap-2 p-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-20 shrink-0" />
          <Skeleton className="h-8 w-20 shrink-0" />
        </div>
        <Skeleton className="h-8 w-40" />
      </div>
      <Skeleton className="h-0.5 rounded-none" />
      <div className="space-y-px">
        <div className="flex items-center justify-between gap-2 p-4">
          <Skeleton className="max-w-60" />
          <Skeleton className="max-w-20" />
        </div>
        <div className="flex items-center justify-between gap-2 p-4">
          <Skeleton className="max-w-60" />
          <Skeleton className="max-w-20" />
        </div>
        <div className="flex items-center justify-between gap-2 p-4">
          <Skeleton className="max-w-60" />
          <Skeleton className="max-w-20" />
        </div>
        <div className="flex items-center justify-between gap-2 p-4">
          <Skeleton className="max-w-60" />
          <Skeleton className="max-w-20" />
        </div>
      </div>
    </section>
  )
}
