'use client'

import IssuesPanel from '@/components/panels/issues-panel'
import { cn } from '@/utils/utils'
import { useState } from 'react'

export type ActiveView = 'list' | 'kanban'

export default function IssuesSectionPreview() {
  const [activeView, setActiveView] = useState<ActiveView>('list')

  return (
    <div
      aria-label="Dashboard Issues page"
      className="group relative flex h-150 w-full items-end rounded-t-xl bg-[radial-gradient(circle,var(--color-neutral-200)_1px,transparent_1px)] bg-size-[--spacing(1.5)_--spacing(1.5)] px-6 pt-6 ring inset-ring ring-neutral-900/10 inset-ring-white @4xl:px-12 @4xl:pt-12"
    >
      <div
        aria-hidden
        data-element="desktop-view"
        className="@container/dashboard size-full rounded-t-xl border border-b-0 border-neutral-200 bg-neutral-100 p-2 inset-ring inset-ring-white @4xl:h-19/20"
      >
        <div className="size-full overflow-hidden rounded-sm border border-neutral-200 bg-neutral-50">
          <IssuesPanel activeView={activeView} setActiveView={setActiveView} />
        </div>
      </div>
      <div
        aria-hidden
        className={cn(
          '@container/dashboard absolute right-12 bottom-0 isolate z-2 hidden h-[calc(100%-(--spacing(12)))] w-110 overflow-hidden rounded-t-xl border border-b-0 border-neutral-200 bg-neutral-100 p-2 inset-ring inset-ring-white @4xl:block',
          'origin-bottom transition transition-discrete group-has-[[data-element=desktop-view]:hover]:hidden group-has-[[data-element=desktop-view]:hover]:scale-95 group-has-[[data-element=desktop-view]:hover]:opacity-0 starting:scale-95 starting:opacity-0'
        )}
      >
        <div className="size-full overflow-hidden rounded-sm border border-neutral-200 bg-neutral-50">
          <IssuesPanel activeView={activeView} setActiveView={setActiveView} />
        </div>
      </div>
    </div>
  )
}
