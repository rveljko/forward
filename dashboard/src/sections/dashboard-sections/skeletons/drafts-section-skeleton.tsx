import Container from '@dashboard-components/container'
import Divider from '@dashboard-components/ui/divider'
import Skeleton from '@dashboard-components/ui/skeleton'

export default function DraftsSectionSkeleton() {
  return (
    <section className="flex h-full flex-col overflow-hidden">
      <div className="p-4">
        <Skeleton className="max-w-40" />
      </div>
      <Divider />
      <div className="flex flex-wrap items-center justify-between gap-2 p-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-7 w-18 shrink-0" />
          <Skeleton className="h-7 w-18 shrink-0" />
        </div>
        <Skeleton className="h-7.5 w-40" />
      </div>
      <Divider />
      <div className="grow scrollbar-gutter-stable overflow-y-auto">
        <Container className="py-8 md:py-16">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(var(--draft-card-width),100%),1fr))] gap-4">
            {Array.from({ length: 8 }, (_, index) => index).map((_, index) => (
              <Skeleton key={index} className="h-43.5" />
            ))}
          </div>
        </Container>
      </div>
    </section>
  )
}
