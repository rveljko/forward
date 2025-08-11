import Skeleton from '@dashboard-components/ui/skeleton'

export default function InboxSectionSkeleton() {
  return (
    <section className="hidden w-full flex-col items-center justify-center md:flex">
      <div className="w-full max-w-50">
        <Skeleton className="mb-4 aspect-square h-auto" />
        <Skeleton />
      </div>
    </section>
  )
}
