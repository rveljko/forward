import Skeleton from '@dashboard-components/ui/skeleton'

export default function ChatSectionSkeleton() {
  return (
    <section className="grid w-full grid-cols-1 grid-rows-[repeat(3,auto)_1fr]">
      <div className="flex items-center gap-4 p-4">
        <Skeleton className="aspect-square w-auto" />
        <div className="flex w-full items-center gap-2">
          <Skeleton className="aspect-square w-auto rounded-full" />
          <Skeleton className="max-w-50" />
        </div>
      </div>
      <Skeleton className="h-0.5 rounded-none" />
      <div className="flex flex-col-reverse overflow-y-auto p-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Skeleton className="h-0.5" />
            <Skeleton className="h-5 max-w-25" />
            <Skeleton className="h-0.5" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="aspect-square size-10 w-auto rounded-full" />
            <div className="w-full">
              <Skeleton className="mb-1.5 max-w-40" />
              <Skeleton className="h-5" />
            </div>
          </div>
          <div className="flex gap-2">
            <Skeleton className="aspect-square size-10 w-auto rounded-full" />
            <div className="w-full">
              <Skeleton className="mb-1.5 max-w-40" />
              <Skeleton className="h-5 w-2/3" />
            </div>
          </div>
          <div className="flex gap-2">
            <Skeleton className="aspect-square size-10 w-auto rounded-full" />
            <div className="w-full">
              <Skeleton className="mb-1.5 max-w-40" />
              <Skeleton className="h-5 w-5/6" />
            </div>
          </div>
          <div className="flex gap-2">
            <Skeleton className="aspect-square size-10 w-auto rounded-full" />
            <div className="w-full">
              <Skeleton className="mb-1.5 max-w-40" />
              <Skeleton className="h-5 w-1/3" />
            </div>
          </div>
          <div className="flex gap-2">
            <Skeleton className="aspect-square size-10 w-auto rounded-full" />
            <div className="w-full">
              <Skeleton className="mb-1.5 max-w-40" />
              <Skeleton className="h-5 w-6/8" />
            </div>
          </div>
          <div className="flex gap-2">
            <Skeleton className="aspect-square size-10 w-auto rounded-full" />
            <div className="w-full">
              <Skeleton className="mb-1.5 max-w-40" />
              <Skeleton className="h-5 w-1/4" />
            </div>
          </div>
          <div className="flex gap-2">
            <Skeleton className="aspect-square size-10 w-auto rounded-full" />
            <div className="w-full">
              <Skeleton className="mb-1.5 max-w-40" />
              <Skeleton className="h-5 w-1/2" />
            </div>
          </div>
          <div className="flex gap-2">
            <Skeleton className="aspect-square size-10 w-auto rounded-full" />
            <div className="w-full">
              <Skeleton className="mb-1.5 max-w-40" />
              <Skeleton className="h-5 w-2/5" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-0.5" />
            <Skeleton className="h-5 max-w-25" />
            <Skeleton className="h-0.5" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="aspect-square size-10 w-auto rounded-full" />
            <div className="w-full">
              <Skeleton className="mb-1.5 max-w-40" />
              <Skeleton className="h-5 w-5/6" />
            </div>
          </div>
        </div>
      </div>
      <div className="self-end">
        <Skeleton className="h-0.5 rounded-none" />
        <div className="p-4">
          <Skeleton className="h-10" />
        </div>
      </div>
    </section>
  )
}
