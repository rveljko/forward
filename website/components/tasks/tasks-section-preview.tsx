'use client'

import TasksPanel from '@/components/tasks/tasks-panel'
import { tasks as defaultTasks } from '@/data/tasks'
import { cn } from '@/utils/utils'
import { useState } from 'react'

export default function TasksSectionPreview() {
  const [tasks, setTasks] = useState(defaultTasks)

  return (
    <div className="relative flex h-150 w-full items-end bg-[radial-gradient(circle,var(--color-neutral-200)_1px,transparent_1px)] bg-size-[--spacing(1.5)_--spacing(1.5)] px-6 pt-6 md:rounded-t-xl md:border md:border-b-0 md:border-neutral-200 @4xl:px-12 @4xl:pt-12">
      <div className="peer @container/dashboard size-full rounded-t-xl border border-b-0 border-neutral-200 bg-neutral-100 p-2 inset-ring inset-ring-white @4xl:h-19/20">
        <div className="size-full overflow-hidden rounded-sm border border-neutral-200 bg-neutral-50">
          <TasksPanel tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
      <div
        className={cn(
          '@container/dashboard absolute right-12 bottom-0 isolate z-2 hidden h-[calc(100%-(--spacing(12)))] w-110 overflow-hidden rounded-t-xl border border-b-0 border-neutral-200 bg-neutral-100 p-2 inset-ring inset-ring-white @4xl:block',
          'origin-bottom transition transition-discrete peer-hover:hidden peer-hover:scale-95 peer-hover:opacity-0 starting:scale-95 starting:opacity-0'
        )}
      >
        <div className="size-full overflow-hidden rounded-sm border border-neutral-200 bg-neutral-50">
          <TasksPanel tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
    </div>
  )
}
