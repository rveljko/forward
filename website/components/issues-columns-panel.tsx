'use client'

import IssueKanbanCard from '@/components/issue-kanban-card'
import CircleFullIcon from '@/icons/circle-full-icon'
import CircleThreeQuartersIcon from '@/icons/circle-three-quarters-icon'
import PlusIcon from '@/icons/plus-icon'
import { motion } from 'motion/react'
import { useState } from 'react'

export default function IssuesColumnsPanel() {
  const [isNewColumnShown, setIsNewColumnShown] = useState(false)

  return (
    <div
      dir="rtl"
      className="scrollbar-hidden flex w-full overflow-x-auto px-6 py-8 @5xl:justify-center"
    >
      <div dir="ltr" className="flex divide-x divide-neutral-200">
        <div className="flex w-85 shrink-0 flex-col gap-2 pr-2">
          <div className="flex items-center justify-between rounded-sm bg-black/10 p-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <CircleThreeQuartersIcon />
                <h3 className="text-sm font-medium">In Review</h3>
              </div>
              <span className="text-dashboard-neutral-600 text-sm">4</span>
            </div>
            <PlusIcon />
          </div>
          <ul className="flex flex-col gap-2">
            <li>
              <IssueKanbanCard
                title="Utilize Mobile Access"
                status="in-review"
                priority="high"
                tag="development"
              />
            </li>
            <li>
              <IssueKanbanCard
                title="Add Comments"
                status="in-review"
                priority="medium"
                tag="design"
              />
            </li>
            <li>
              <IssueKanbanCard
                title="Set Priorities"
                status="in-review"
                priority="medium"
                tag="development"
              />
            </li>
            <li>
              <IssueKanbanCard
                title="Use Tags"
                status="in-review"
                priority="medium"
                tag="design"
              />
            </li>
          </ul>
        </div>
        <div className="flex w-85 shrink-0 flex-col gap-2 pl-2 [--opacity-from:0%] [--opacity-to:100%] [--slide-y-from:--spacing(-2)] [--slide-y-to:--spacing(0)]">
          {isNewColumnShown ? (
            <>
              <motion.div
                initial={{
                  opacity: 'var(--opacity-from)',
                  translateY: 'var(--slide-y-from)',
                }}
                animate={{
                  opacity: 'var(--opacity-to)',
                  translateY: 'var(--slide-y-to)',
                }}
                className="flex items-center justify-between rounded-sm bg-black/10 p-4"
              >
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <CircleFullIcon />
                    <h3 className="text-sm font-medium">Finished</h3>
                  </div>
                  <span className="text-dashboard-neutral-600 text-sm">3</span>
                </div>
                <PlusIcon />
              </motion.div>
              <ul className="flex flex-col gap-2">
                <motion.li
                  initial={{
                    opacity: 'var(--opacity-from)',
                    translateY: 'var(--slide-y-from)',
                  }}
                  animate={{
                    opacity: 'var(--opacity-to)',
                    translateY: 'var(--slide-y-to)',
                  }}
                  transition={{ delay: 0.1 }}
                >
                  <IssueKanbanCard
                    title="Attach Files and Documents"
                    status="finished"
                    priority="high"
                    tag="development"
                  />
                </motion.li>
                <motion.li
                  initial={{
                    opacity: 'var(--opacity-from)',
                    translateY: 'var(--slide-y-from)',
                  }}
                  animate={{
                    opacity: 'var(--opacity-to)',
                    translateY: 'var(--slide-y-to)',
                  }}
                  transition={{ delay: 0.2 }}
                >
                  <IssueKanbanCard
                    title="Add Templates"
                    status="finished"
                    priority="high"
                    tag="design"
                  />
                </motion.li>
                <motion.li
                  initial={{
                    opacity: 'var(--opacity-from)',
                    translateY: 'var(--slide-y-from)',
                  }}
                  animate={{
                    opacity: 'var(--opacity-to)',
                    translateY: 'var(--slide-y-to)',
                  }}
                  transition={{ delay: 0.3 }}
                >
                  <IssueKanbanCard
                    title="Create Sub-issues"
                    status="finished"
                    priority="medium"
                    tag="design"
                  />
                </motion.li>
              </ul>
            </>
          ) : (
            <button
              onClick={() => setIsNewColumnShown(true)}
              className="flex h-45 w-full items-center justify-center gap-2 rounded-lg border border-dashed border-neutral-300 bg-white text-sm font-medium transition-[background-color,scale] hover:cursor-pointer hover:bg-neutral-50 active:scale-99 pointer-coarse:active:bg-neutral-50"
            >
              <PlusIcon />
              Add Column
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
