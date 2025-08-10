import Container from '@dashboard-components/container'
import Skeleton from '@dashboard-components/ui/skeleton'

export default function DraftSectionSkeleton() {
  return (
    <section>
      <div className="flex items-center justify-between gap-2 p-4">
        <Skeleton className="max-w-90" />
        <Skeleton className="aspect-square w-auto" />
      </div>
      <Skeleton className="h-0.5 rounded-none" />
      <div className="w-0 min-w-full">
        <div className="flex gap-0.5 overflow-x-auto p-4">
          {Array.from({ length: 16 }, (_, index) => index).map((_, index) => (
            <Skeleton key={index} className="aspect-square w-auto" />
          ))}
        </div>
      </div>
      <Skeleton className="h-0.5 rounded-none" />
      <Container className="py-8 md:py-16">
        <Skeleton className="mb-8 h-8 max-w-100 md:h-9" />
        <Skeleton className="mb-1 h-4.5" />
        <Skeleton className="mb-8 h-4.5 w-3/4" />
        <Skeleton className="mb-1 h-7 max-w-50" />
        <Skeleton className="mb-1 h-4.5" />
        <Skeleton className="mb-2 h-4.5 w-2/3" />
        <Skeleton className="mb-1 h-4.5" />
        <Skeleton className="mb-1 h-4.5" />
        <Skeleton className="mb-8 h-4.5 w-5/6" />
        <Skeleton className="mb-1 h-7 max-w-60" />
        <Skeleton className="mb-1 h-4.5" />
        <Skeleton className="mb-1 h-4.5" />
        <Skeleton className="mb-8 h-4.5 w-5/8" />
        <Skeleton className="mb-1 h-7 max-w-40" />
        <Skeleton className="mb-1 h-4.5" />
        <Skeleton className="mb-8 h-4.5 w-2/3" />
        <Skeleton className="mb-1 h-7 max-w-50" />
        <Skeleton className="mb-1 h-4.5" />
        <Skeleton className="mb-1 h-4.5" />
      </Container>
    </section>
  )
}
