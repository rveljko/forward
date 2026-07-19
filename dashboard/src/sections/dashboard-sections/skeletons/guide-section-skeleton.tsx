import Container from '@dashboard-components/container'
import Divider from '@dashboard-components/ui/divider'
import Skeleton from '@dashboard-components/ui/skeleton'

export default function GuideSectionSkeleton() {
  return (
    <section className="flex h-full flex-col overflow-y-hidden">
      <div className="p-4">
        <Skeleton className="max-w-90" />
      </div>
      <Divider />
      <div className="overflow-y-auto py-8 md:py-16">
        <Container>
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
      </div>
    </section>
  )
}
