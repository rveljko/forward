import Divider from '@dashboard-components/ui/divider'
import Skeleton from '@dashboard-components/ui/skeleton'

function getView(): 'list' | 'kanban' {
  const view = localStorage.getItem('view')
  return view ? JSON.parse(view) : 'kanban'
}

export default function IssuesSectionSkeleton() {
  return (
    <section className="flex h-full flex-col overflow-y-hidden">
      <div className="flex items-center justify-between gap-2 p-4">
        <Skeleton className="max-w-40" />
        <Skeleton className="aspect-square w-auto" />
      </div>
      <Divider />
      <div className="flex flex-wrap items-center justify-between gap-2 p-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-7 w-18 shrink-0" />
          <Skeleton className="h-7 w-18 shrink-0" />
        </div>
        <Skeleton className="h-7.5 w-35" />
      </div>
      <Divider />
      {getView() === 'list' && <ListViewSkeleton />}
      {getView() === 'kanban' && <KanbanViewSkeleton />}
    </section>
  )
}

function ListViewSkeleton() {
  return (
    <div className="overflow-x-hidden overflow-y-auto">
      <div className="flex flex-col">
        <div className="sticky top-0 z-10">
          <Skeleton className="h-13.25 animate-none rounded-none" />
        </div>
        <div className="space-y-px">
          <div className="flex items-center justify-between gap-2 p-4">
            <Skeleton className="max-w-60" />
            <Skeleton className="max-md:aspect-square max-md:w-auto md:h-7.5 md:max-w-60" />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="sticky top-0 z-10">
          <Skeleton className="h-13.25 animate-none rounded-none" />
        </div>
        <div className="space-y-px">
          <div className="flex items-center justify-between gap-2 p-4">
            <Skeleton className="max-w-60" />
            <Skeleton className="max-md:aspect-square max-md:w-auto md:h-7.5 md:max-w-60" />
          </div>
          <div className="flex items-center justify-between gap-2 p-4">
            <Skeleton className="max-w-60" />
            <Skeleton className="max-md:aspect-square max-md:w-auto md:h-7.5 md:max-w-60" />
          </div>
          <div className="flex items-center justify-between gap-2 p-4">
            <Skeleton className="max-w-60" />
            <Skeleton className="max-md:aspect-square max-md:w-auto md:h-7.5 md:max-w-60" />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="sticky top-0 z-10">
          <Skeleton className="h-13.25 animate-none rounded-none" />
        </div>
        <div className="space-y-px">
          <div className="flex items-center justify-between gap-2 p-4">
            <Skeleton className="max-w-60" />
            <Skeleton className="max-md:aspect-square max-md:w-auto md:h-7.5 md:max-w-60" />
          </div>
          <div className="flex items-center justify-between gap-2 p-4">
            <Skeleton className="max-w-60" />
            <Skeleton className="max-md:aspect-square max-md:w-auto md:h-7.5 md:max-w-60" />
          </div>
          <div className="flex items-center justify-between gap-2 p-4">
            <Skeleton className="max-w-60" />
            <Skeleton className="max-md:aspect-square max-md:w-auto md:h-7.5 md:max-w-60" />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="sticky top-0 z-10">
          <Skeleton className="h-13.25 animate-none rounded-none" />
        </div>
        <div className="space-y-px">
          <div className="flex items-center justify-between gap-2 p-4">
            <Skeleton className="max-w-60" />
            <Skeleton className="max-md:aspect-square max-md:w-auto md:h-7.5 md:max-w-60" />
          </div>
          <div className="flex items-center justify-between gap-2 p-4">
            <Skeleton className="max-w-60" />
            <Skeleton className="max-md:aspect-square max-md:w-auto md:h-7.5 md:max-w-60" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="sticky top-0 z-10">
            <Skeleton className="h-13.25 animate-none rounded-none" />
          </div>
          <div className="space-y-px">
            <div className="flex items-center justify-between gap-2 p-4">
              <Skeleton className="max-w-60" />
              <Skeleton className="max-md:aspect-square max-md:w-auto md:h-7.5 md:max-w-60" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function KanbanViewSkeleton() {
  return (
    <div className="min-h-0 flex-1 overflow-y-auto">
      <div className="h-full w-0 min-w-full overflow-x-auto">
        <div className="flex min-h-full items-stretch gap-px py-4">
          <div className="pr-2 pl-4">
            <div className="flex min-h-full w-85 shrink-0 flex-col gap-2">
              <Skeleton className="sticky top-0 z-10 h-13 animate-none" />
              <div className="flex min-h-0 flex-1 flex-col gap-2">
                <Skeleton className="h-29" />
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="flex min-h-full w-85 shrink-0 flex-col gap-2">
              <Skeleton className="sticky top-0 z-10 h-13 animate-none" />
              <div className="flex min-h-0 flex-1 flex-col gap-2">
                <Skeleton className="h-29" />
                <Skeleton className="h-29" />
                <Skeleton className="h-29" />
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="flex min-h-full w-85 shrink-0 flex-col gap-2">
              <Skeleton className="sticky top-0 z-10 h-13 animate-none" />
              <div className="flex min-h-0 flex-1 flex-col gap-2">
                <Skeleton className="h-29" />
                <Skeleton className="h-29" />
                <Skeleton className="h-29" />
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="flex min-h-full w-85 shrink-0 flex-col gap-2">
              <Skeleton className="sticky top-0 z-10 h-13 animate-none" />
              <div className="flex min-h-0 flex-1 flex-col gap-2">
                <Skeleton className="h-29" />
                <Skeleton className="h-29" />
              </div>
            </div>
          </div>
          <div className="pr-4 pl-2">
            <div className="flex min-h-full w-85 shrink-0 flex-col gap-2">
              <Skeleton className="sticky top-0 z-10 h-13 animate-none" />
              <div className="flex min-h-0 flex-1 flex-col gap-2">
                <Skeleton className="h-29" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
