import Skeleton from '@dashboard-components/ui/skeleton'

export default function ConnectWithUsSectionSkeleton() {
  return (
    <section>
      <div className="flex flex-col gap-2 lg:flex-row lg:gap-16">
        <div className="w-full max-w-50">
          <Skeleton className="max-w-30" />
        </div>
        <div className="w-full max-w-75 space-y-2">
          <div className="space-y-1">
            <Skeleton className="max-w-20" />
            <Skeleton className="h-10" />
          </div>
          <div className="space-y-1">
            <Skeleton className="max-w-20" />
            <Skeleton className="aspect-2/1 h-auto" />
          </div>
          <Skeleton className="h-10" />
        </div>
      </div>
    </section>
  )
}
