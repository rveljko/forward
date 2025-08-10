import Skeleton from '@dashboard-components/ui/skeleton'

export default function SocialMediasSectionSkeleton() {
  return (
    <section>
      <div className="flex flex-col gap-2 lg:flex-row lg:gap-16">
        <div className="w-full max-w-50">
          <Skeleton className="max-w-30" />
        </div>
        <div className="w-full max-w-40 space-y-2.5">
          <Skeleton className="h-8" />
          <Skeleton className="h-8" />
          <Skeleton className="h-8" />
        </div>
      </div>
    </section>
  )
}
