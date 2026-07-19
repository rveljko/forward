import Container from '@dashboard-components/container'
import Divider from '@dashboard-components/ui/divider'
import Skeleton from '@dashboard-components/ui/skeleton'

export default function GuidesSectionSkeleton() {
  return (
    <section>
      <div className="p-4">
        <Skeleton className="max-w-40" />
      </div>
      <Divider />
      <Container className="py-8 md:py-16">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(var(--guide-card-width),100%),1fr))] gap-4">
          {Array.from({ length: 9 }, (_, index) => index).map((_, index) => (
            <Skeleton key={index} className="h-66" />
          ))}
        </div>
      </Container>
    </section>
  )
}
