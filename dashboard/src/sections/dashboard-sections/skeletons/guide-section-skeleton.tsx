import Container from '@dashboard-components/container'
import Skeleton from '@dashboard-components/ui/skeleton'

export default function GuideSectionSkeleton() {
  return (
    <section>
      <div className="p-4">
        <Skeleton className="max-w-90" />
      </div>
      <Skeleton className="h-0.5 rounded-none" />
      <Container className="py-8 md:py-16">
        <Skeleton className="mb-2 h-8 max-w-100" />
        <Skeleton className="mb-1 h-4.5" />
        <Skeleton className="mb-8 h-4.5 w-2/3" />
        <Skeleton className="mb-2 h-7 max-w-90" />
        <Skeleton className="mb-1 h-4.5 max-w-40" />
        <Skeleton className="mb-2 h-4.5 max-w-60" />
        <Skeleton className="mb-1 h-4.5 max-w-50" />
        <Skeleton className="mb-2 h-4.5 max-w-80" />
        <Skeleton className="mb-1 h-4.5 max-w-30" />
        <Skeleton className="mb-1 h-4.5 max-w-75" />
        <Skeleton className="mb-1 h-4.5 max-w-75" />
        <Skeleton className="mb-1 h-4.5 max-w-75" />
        <Skeleton className="mb-1 h-4.5" />
        <Skeleton className="mb-8 h-4.5 w-3/4" />
        <Skeleton className="mb-2 h-7 max-w-90" />
        <Skeleton className="mb-1 h-4.5 max-w-40" />
        <Skeleton className="mb-2 h-4.5 max-w-60" />
        <Skeleton className="mb-1 h-4.5 max-w-50" />
        <Skeleton className="mb-1 h-4.5" />
        <Skeleton className="mb-4 h-4.5 w-1/2" />
        <Skeleton className="mb-1 h-4.5" />
        <Skeleton className="mb-4 h-4.5 w-5/6" />
      </Container>
    </section>
  )
}
