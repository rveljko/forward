import Divider from '@dashboard-components/ui/divider'
import Skeleton from '@dashboard-components/ui/skeleton'

export default function IntegrationsSectionSkeleton() {
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
        <div className="w-full space-y-4">
          {Array.from({ length: 6 }, (_, index) => index).map((_, index) => (
            <div
              key={index}
              className="@container flex items-start justify-between gap-2"
            >
              <div className="flex w-full gap-2 @max-2xs:flex-col">
                <Skeleton className="size-10 shrink-0" />
                <div className="w-full">
                  <Skeleton className="mb-1 max-w-20 shrink-0" />
                  <Skeleton className="h-4 max-w-80 shrink-0" />
                </div>
              </div>
              <Skeleton className="aspect-2/1 h-auto w-(--switch-width) rounded-full" />
            </div>
          ))}
        </div>
      </div>
      <Divider />
      <Skeleton className="h-9.5 max-w-35" />
    </section>
  )
}
