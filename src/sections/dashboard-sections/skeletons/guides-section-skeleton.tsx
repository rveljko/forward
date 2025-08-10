import Container from '@dashboard-components/container'
import Skeleton from '@dashboard-components/ui/skeleton'
import { guides } from '@data/guides'

export default function GuidesSectionSkeleton() {
  return (
    <section>
      <div className="p-4">
        <Skeleton className="max-w-40" />
      </div>
      <Skeleton className="h-0.5 rounded-none" />
      <Container className="py-8 md:py-16">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(min(var(--guide-card-width),_100%),_1fr))] gap-4">
          {guides.map((_, index) => (
            <Skeleton key={index} className="h-auto">
              <div className="aspect-2/1 w-full" />
              <div className="h-25.5" />
            </Skeleton>
          ))}
        </div>
      </Container>
    </section>
  )
}
