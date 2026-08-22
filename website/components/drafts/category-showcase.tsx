'use client'

import {
  GeneralCategory,
  IdeaCategory,
  InspirationCategory,
  MeetingCategory,
} from '@/components/drafts/draft-categories'
import { cn } from '@/utils/utils'
import { AnimatePresence, motion, Variants } from 'motion/react'
import { useState } from 'react'

type Category = {
  label: string
  description: string
  color: 'neutral' | 'sky' | 'green' | 'purple'
  content: React.JSX.Element
}

const categories: Category[] = [
  {
    label: 'General',
    description:
      "Capture everyday notes, updates, thoughts, and information that don't fit another category or need a flexible place for organization",
    color: 'neutral',
    content: <GeneralCategory />,
  },
  {
    label: 'Idea',
    description:
      'Explore new ideas, concepts, possibilities, and thoughts worth developing, discussing, refining, or revisiting as potential solutions or future projects',
    color: 'sky',
    content: <IdeaCategory />,
  },
  {
    label: 'Meeting',
    description:
      'Record key points, decisions, action items, questions, and important details from conversations, discussions, and team meetings for future reference',
    color: 'green',
    content: <MeetingCategory />,
  },
  {
    label: 'Inspiration',
    description:
      'Save references, observations, examples, and thoughts that spark creativity, influence your work, or provide useful direction for future projects',
    color: 'purple',
    content: <InspirationCategory />,
  },
]

const panelVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
  },
}

export default function CategoryShowcase() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)

  return (
    <div className="flex flex-col @4xl:flex-row @4xl:divide-x @4xl:divide-neutral-200">
      <ul className="flex-1 divide-y divide-neutral-200 @4xl:*:last:border-b @4xl:*:last:border-b-neutral-200">
        {categories.map(({ label, description, color }, index) => (
          <li key={label}>
            <article
              className={`relative isolate overflow-hidden transition-all duration-500 ${activeCategoryIndex === index ? 'h-auto' : 'h-17'}`}
            >
              <div className="p-6 md:px-8">
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      'size-2 rounded-full',
                      color === 'neutral' && 'bg-neutral-500',
                      color === 'sky' && 'bg-sky-500',
                      color === 'green' && 'bg-green-500',
                      color === 'purple' && 'bg-purple-500'
                    )}
                  />
                  <h3>
                    <button
                      className="font-medium text-black hover:cursor-pointer"
                      onClick={() => setActiveCategoryIndex(index)}
                    >
                      <span className="absolute inset-0 z-10" />
                      {label}
                    </button>
                  </h3>
                </div>
                <div
                  className={cn(
                    'hidden pt-3 opacity-0 transition transition-discrete duration-500 starting:opacity-0',
                    activeCategoryIndex === index && 'block opacity-100'
                  )}
                >
                  <p className="max-w-100 text-pretty text-neutral-600">
                    {description}
                  </p>
                </div>
              </div>
              <div className="border-t border-t-neutral-200 bg-[radial-gradient(circle,var(--color-neutral-200)_1px,transparent_1px)] bg-size-[--spacing(1.5)_--spacing(1.5)] p-6 md:px-8 @4xl:hidden">
                <CategoryPanel activeCategoryIndex={activeCategoryIndex} />
              </div>
            </article>
          </li>
        ))}
      </ul>
      <div className="hidden flex-1 bg-[radial-gradient(circle,var(--color-neutral-200)_1px,transparent_1px)] bg-size-[--spacing(1.5)_--spacing(1.5)] p-8 @4xl:block">
        <CategoryPanel activeCategoryIndex={activeCategoryIndex} />
      </div>
    </div>
  )
}

type CategoryPanelProps = {
  activeCategoryIndex: number
}

function CategoryPanel({ activeCategoryIndex }: CategoryPanelProps) {
  return (
    <div className="size-full rounded-xl border border-neutral-200 bg-neutral-100 p-2 inset-ring inset-ring-white">
      <motion.article
        layout
        className="rounded-sm border border-neutral-200 bg-neutral-50 p-4"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeCategoryIndex}
            variants={panelVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {categories[activeCategoryIndex].content}
          </motion.div>
        </AnimatePresence>
      </motion.article>
    </div>
  )
}
