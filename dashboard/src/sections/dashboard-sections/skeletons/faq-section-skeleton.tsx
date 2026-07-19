import Divider from '@dashboard-components/ui/divider'
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
            <div className="flex items-center gap-2 py-2.5">
              <Skeleton />
              <Skeleton className="aspect-square w-auto" />
            </div>
            <div className="mb-1 w-full">
              <Skeleton className="mb-1 h-5" />
              <Skeleton className="h-5 w-1/2" />
            </div>
            <Divider />
          </div>
          <div className="flex items-center gap-2 py-2.5">
            <Skeleton />
            <Skeleton className="aspect-square w-auto" />
          </div>
          <Divider />
          <div className="flex items-center gap-2 py-2.5">
            <Skeleton />
            <Skeleton className="aspect-square w-auto" />
          </div>
          <Divider />
        </div>
      </div>
    </section>
  )
}
