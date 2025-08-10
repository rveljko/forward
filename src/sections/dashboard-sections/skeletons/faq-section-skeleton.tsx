import Skeleton from '@dashboard-components/ui/skeleton'

export default function FaqSectionSkeleton() {
  return (
    <section>
      <div className="flex flex-col gap-2 lg:flex-row lg:gap-16">
        <div className="w-full max-w-50">
          <Skeleton className="max-w-30" />
        </div>
        <div className="w-full max-w-100">
          <div>
            <div className="flex items-center gap-2 py-2">
              <Skeleton />
              <Skeleton className="aspect-square w-auto" />
            </div>
            <div className="mb-2 w-full pb-2">
              <Skeleton className="mb-1 h-4.5" />
              <Skeleton className="h-4.5 w-1/2" />
            </div>
            <Skeleton className="h-0.5" />
          </div>
          <div className="flex items-center gap-2 py-2">
            <Skeleton />
            <Skeleton className="aspect-square w-auto" />
          </div>
          <Skeleton className="h-0.5" />
          <div className="flex items-center gap-2 py-2">
            <Skeleton />
            <Skeleton className="aspect-square w-auto" />
          </div>
          <Skeleton className="h-0.5" />
        </div>
      </div>
    </section>
  )
}
