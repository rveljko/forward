import Container from '@dashboard-components/container'
import Skeleton from '@dashboard-components/ui/skeleton'
import { drafts } from '@data/drafts'

export default function DraftsSectionSkeleton() {
  return (
    <section>
      <div className="p-4">
        <Skeleton className="max-w-40" />
      </div>
      <Skeleton className="h-0.5 rounded-none" />
      <Container className="py-8 md:py-16">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(var(--draft-card-width),100%),1fr))] gap-4">
          <Skeleton className="h-full min-h-40.5" />
          {drafts.map((_, index) => (
            <Skeleton key={index} className="h-auto">
              <div className="aspect-3/1 w-full" />
              <div className="h-25.5" />
            </Skeleton>
          ))}
        </div>
      </Container>
    </section>
  )
}
