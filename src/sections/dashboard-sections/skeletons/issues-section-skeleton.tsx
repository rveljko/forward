import Skeleton from '@dashboard-components/ui/skeleton'

function getView(): 'list' | 'kanban' {
  const view = localStorage.getItem('view')
  return view ? JSON.parse(view) : 'list'
}

export default function IssuesSectionSkeleton() {
  return (
    <section className="flex h-full flex-col">
      <div className="flex items-center justify-between gap-2 p-4">
        <Skeleton className="max-w-40" />
        <Skeleton className="aspect-square w-auto" />
      </div>
      <Skeleton className="min-h-0.5 rounded-none" />
      <div className="flex flex-wrap items-center justify-between gap-2 p-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-20 shrink-0" />
          <Skeleton className="h-8 w-20 shrink-0" />
        </div>
        <Skeleton className="h-8 w-25" />
      </div>
      <Skeleton className="min-h-0.5 rounded-none" />
      {getView() === 'list' && <ListViewSkeleton />}
      {getView() === 'kanban' && <KanbanViewSkeleton />}
    </section>
  )
}

function ListViewSkeleton() {
  return (
    <>
      <div>
        <Skeleton className="h-14 rounded-none" />
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
          <div className="flex items-center justify-between gap-2 p-4">
            <Skeleton className="max-w-60" />
            <Skeleton className="max-md:aspect-square max-md:w-auto md:h-7.5 md:max-w-60" />
          </div>
        </div>
      </div>
      <div>
        <Skeleton className="h-14 rounded-none" />
        <div className="space-y-0.25">
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
      <div>
        <Skeleton className="h-14 rounded-none" />
        <div className="space-y-0.25">
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
      <div>
        <Skeleton className="h-14 rounded-none" />
        <div className="space-y-0.25">
          <div className="flex items-center justify-between gap-2 p-4">
            <Skeleton className="max-w-60" />
            <Skeleton className="max-md:aspect-square max-md:w-auto md:h-7.5 md:max-w-60" />
          </div>
        </div>
      </div>
    </>
  )
}

function KanbanViewSkeleton() {
  return (
    <div className="w-0 min-w-full grow">
      <div className="flex h-full gap-4.25 overflow-x-auto p-4">
        <div className="flex h-full w-85 shrink-0 flex-col gap-2">
          <Skeleton className="h-14" />
          <div className="flex grow flex-col gap-2">
            <div className="p-4">
              <div className="mb-4 flex justify-between gap-2">
                <Skeleton className="max-w-60" />
                <Skeleton className="aspect-square w-auto" />
              </div>
              <Skeleton className="mb-2 h-5 max-w-15" />
              <Skeleton className="h-7.5 max-w-35" />
            </div>
            <div className="p-4">
              <div className="mb-4 flex justify-between gap-2">
                <Skeleton className="max-w-60" />
                <Skeleton className="aspect-square w-auto" />
              </div>
              <Skeleton className="mb-2 h-5 max-w-15" />
              <Skeleton className="h-7.5 max-w-35" />
            </div>
            <div className="p-4">
              <div className="mb-4 flex justify-between gap-2">
                <Skeleton className="max-w-60" />
                <Skeleton className="aspect-square w-auto" />
              </div>
              <Skeleton className="mb-2 h-5 max-w-15" />
              <Skeleton className="h-7.5 max-w-35" />
            </div>
            <div className="p-4">
              <div className="mb-4 flex justify-between gap-2">
                <Skeleton className="max-w-60" />
                <Skeleton className="aspect-square w-auto" />
              </div>
              <Skeleton className="mb-2 h-5 max-w-15" />
              <Skeleton className="h-7.5 max-w-35" />
            </div>
            <div className="p-4">
              <div className="mb-4 flex justify-between gap-2">
                <Skeleton className="max-w-60" />
                <Skeleton className="aspect-square w-auto" />
              </div>
              <Skeleton className="mb-2 h-5 max-w-15" />
              <Skeleton className="h-7.5 max-w-35" />
            </div>
            <div className="p-4">
              <div className="mb-4 flex justify-between gap-2">
                <Skeleton className="max-w-60" />
                <Skeleton className="aspect-square w-auto" />
              </div>
              <Skeleton className="mb-2 h-5 max-w-15" />
              <Skeleton className="h-7.5 max-w-35" />
            </div>
          </div>
        </div>
        <div className="flex h-full w-85 shrink-0 flex-col gap-2">
          <Skeleton className="h-14" />
          <div className="flex grow flex-col gap-2">
            <div className="p-4">
              <div className="mb-4 flex justify-between gap-2">
                <Skeleton className="max-w-60" />
                <Skeleton className="aspect-square w-auto" />
              </div>
              <Skeleton className="mb-2 h-5 max-w-15" />
              <Skeleton className="h-7.5 max-w-35" />
            </div>
            <div className="p-4">
              <div className="mb-4 flex justify-between gap-2">
                <Skeleton className="max-w-60" />
                <Skeleton className="aspect-square w-auto" />
              </div>
              <Skeleton className="mb-2 h-5 max-w-15" />
              <Skeleton className="h-7.5 max-w-35" />
            </div>
            <div className="p-4">
              <div className="mb-4 flex justify-between gap-2">
                <Skeleton className="max-w-60" />
                <Skeleton className="aspect-square w-auto" />
              </div>
              <Skeleton className="mb-2 h-5 max-w-15" />
              <Skeleton className="h-7.5 max-w-35" />
            </div>
          </div>
        </div>
        <div className="flex h-full w-85 shrink-0 flex-col gap-2">
          <Skeleton className="h-14" />
          <div className="flex grow flex-col gap-2">
            <div className="p-4">
              <div className="mb-4 flex justify-between gap-2">
                <Skeleton className="max-w-60" />
                <Skeleton className="aspect-square w-auto" />
              </div>
              <Skeleton className="mb-2 h-5 max-w-15" />
              <Skeleton className="h-7.5 max-w-35" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
