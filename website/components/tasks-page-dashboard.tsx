'use client'

import Cursor from '@/components/cursor'
import TaskItem from '@/components/task-item'
import { tasks } from '@/data/tasks'
import ArrowsSortIcon from '@/icons/arrows-sort-icon'
import ClipboardIcon from '@/icons/clipboard-icon'
import CloseIcon from '@/icons/close-icon'
import CopyIcon from '@/icons/copy-icon'
import EditIcon from '@/icons/edit-icon'
import FilterIcon from '@/icons/filters-icon'
import PlusIcon from '@/icons/plus-icon'
import TrashIcon from '@/icons/trash-icon'
import { motion, stagger, useAnimate } from 'motion/react'
import { useEffect } from 'react'

export default function TasksPageDashboard() {
  const [scope, animate] = useAnimate()

  async function createAndDeleteTaskAnimation() {
    await animate('[data-element=cursor]', {
      transform: 'translate3d(calc(50% - 3.125rem), -11.875rem, 0)',
    })
    await animate('[data-element=open-create-new-task-modal-button]', {
      backgroundColor: 'var(--color-dashboard-brand-600)',
    })
    animate('[data-element=cursor] svg', {
      scale: 0.9,
    })
    await animate('[data-element=open-create-new-task-modal-button]', {
      scale: 0.99,
    })
    animate('[data-element=cursor] svg', {
      scale: 1,
    })
    await animate('[data-element=open-create-new-task-modal-button]', {
      scale: 1,
    })
    animate('[data-element=open-create-new-task-modal-button]', {
      backgroundColor: 'var(--color-dashboard-brand-500)',
    })
    animate('[data-element=overlay]', {
      opacity: 1,
    })
    await animate('[data-element=create-new-task-modal]', {
      opacity: 1,
    })
    await animate('[data-element=cursor]', {
      transform:
        'translate3d(0, var(--translate-y-from-open-create-new-task-modal-button-to-title), 0)',
    })
    await animate('[data-element=cursor] svg', {
      scale: 0.9,
    })
    await animate('[data-element=cursor] svg', {
      scale: 1,
    })
    await animate('[data-element=task-title-placeholder]', {
      display: 'none',
    })
    animate(
      '[data-element=blinking-pipe]',
      { opacity: [0, 1, 0] },
      { repeat: Infinity, duration: 1 }
    )
    await animate(
      '[data-element=new-task-title-letter]',
      { display: 'inline-block' },
      { delay: stagger(0.1) }
    )
    await animate('[data-element=cursor]', {
      transform:
        'translate3d(15%, var(--translate-y-from-title-to-create-new-task-button), 0)',
    })
    await animate('[data-element=create-new-task-button]', {
      backgroundColor: 'var(--color-dashboard-brand-600)',
    })
    animate('[data-element=cursor] svg', {
      scale: 0.9,
    })
    await animate('[data-element=create-new-task-button]', {
      scale: 0.99,
    })
    animate('[data-element=cursor] svg', {
      scale: 1,
    })
    await animate('[data-element=create-new-task-button]', {
      scale: 1,
    })
    animate('[data-element=create-new-task-button]', {
      backgroundColor: 'var(--color-dashboard-brand-500)',
    })
    animate('[data-element=overlay]', {
      opacity: 0,
    })
    animate('[data-element=create-new-task-modal]', {
      opacity: 0,
    })
    animate(
      '[data-element=task-title-placeholder]',
      {
        display: 'inline',
      },
      { duration: 0 }
    )
    animate('[data-element=blinking-pipe]', { opacity: 0 }, { duration: 0 })
    animate(
      '[data-element=new-task-title-letter]',
      {
        display: 'none',
      },
      { duration: 0 }
    )
    await animate(
      '[data-element=new-task]',
      {
        display: 'flex',
      },
      { duration: 0 }
    )
    await animate('[data-element=cursor]', {
      transform: 'translate3d(calc(50% - 2.75rem), -8.125rem, 0)',
    })
    await animate('[data-element=cursor] svg', {
      scale: 0.9,
    })
    await animate('[data-element=cursor] svg', {
      scale: 1,
    })
    animate('[data-element=overlay]', {
      opacity: 1,
    })
    animate(
      '[data-element=new-task]',
      {
        backgroundColor: 'hsl(0, 0%, 95%)',
      },
      { duration: 0 }
    )
    await animate('[data-element=task-actions-modal]', {
      opacity: 1,
    })
  }

  useEffect(() => {
    createAndDeleteTaskAnimation()
  }, [])

  return (
    <div className="w-full">
      <div className="flex w-full items-center gap-1 rounded-t-lg border border-neutral-200 bg-white px-2 py-1.5">
        <div className="size-2 rounded-full bg-neutral-200" />
        <div className="size-2 rounded-full bg-neutral-200" />
        <div className="size-2 rounded-full bg-neutral-200" />
      </div>
      <div
        ref={scope}
        aria-label="Dashboard Task page"
        className="bg-dashboard-background pointer-events-none relative isolate h-144 w-full rounded-b-lg border border-t-0 border-neutral-200 p-4 select-none after:absolute after:-inset-4 after:top-0 after:-z-1 after:bg-white after:mask-linear-0 after:mask-linear-from-black after:mask-linear-to-transparent"
      >
        <div
          aria-hidden
          className="size-full overflow-hidden rounded-lg border border-black/10 bg-white"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div
              data-element="cursor"
              className="absolute top-1/2 left-1/2 z-10 size-full [--translate-y-from-open-create-new-task-modal-button-to-title:--spacing(44)] [--translate-y-from-title-to-create-new-task-button:--spacing(60)] md:[--translate-y-from-open-create-new-task-modal-button-to-title:--spacing(-60)] md:[--translate-y-from-title-to-create-new-task-button:--spacing(-44)] [&_svg]:origin-top-left"
            >
              <Cursor />
            </div>
          </div>
          <div
            data-element="overlay"
            className="absolute inset-0 rounded-b-lg bg-black/5 opacity-0"
          />
          <div className="absolute inset-4">
            <CreateNewTaskModal />
            <TaskActionsModal />
          </div>
          <div className="border-b border-b-black/10 p-4 text-sm font-medium">
            Tasks
          </div>
          <div className="scrollbar-hidden flex items-center justify-between gap-2 overflow-x-auto border-b border-b-black/10 p-4">
            <div className="flex items-center gap-2">
              <span className="bg-dashboard-neutral-200 flex w-max items-center gap-1 rounded-md px-1.5 py-1 text-sm text-black shadow-sm">
                <FilterIcon />
                Filters
              </span>
              <span className="bg-dashboard-neutral-200 flex w-max items-center gap-1 rounded-md px-1.5 py-1 text-sm text-black shadow-sm">
                <ArrowsSortIcon />
                Sort
              </span>
            </div>
            <span
              data-element="open-create-new-task-modal-button"
              className="bg-dashboard-brand-500 flex w-max items-center gap-1 rounded-md px-1.5 py-1 text-sm text-nowrap text-white shadow-sm"
            >
              <PlusIcon />
              Create New Task
            </span>
          </div>
          <TaskItem
            task="Be happy and positive"
            className="hidden"
            data-element="new-task"
          />
          {tasks.map((task) => (
            <TaskItem key={task} task={task} />
          ))}
        </div>
      </div>
    </div>
  )
}

function CreateNewTaskModal() {
  return (
    <div
      data-element="create-new-task-modal"
      className="absolute left-1/2 w-full max-w-100 -translate-x-1/2 rounded-lg bg-white opacity-0 shadow-sm ring ring-black/10 max-md:bottom-0 md:top-0"
    >
      <div className="flex justify-between gap-2 p-4">
        <div className="h-7">
          <span
            data-element="task-title-placeholder"
            className="text-dashboard-neutral-600 text-lg"
          >
            Task title
          </span>
          <span data-element="new-task-title" className="line-clamp-1 text-lg">
            {'Be happy and positive'.split('').map((letter, index) => (
              <motion.span
                key={index}
                data-element="new-task-title-letter"
                initial={{ display: 'none' }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
            <div
              data-element="blinking-pipe"
              className="inline-flex h-full w-max items-center opacity-0"
            >
              <span className="inline-block h-4 w-px bg-black" />
            </div>
          </span>
        </div>
        <span className="ml-auto">
          <CloseIcon />
        </span>
      </div>
      <div
        dir="rtl"
        className="scrollbar-hidden flex overflow-x-auto border-t border-t-black/10 p-4"
      >
        <div dir="ltr" className="ml-auto flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-dashboard-neutral-600 text-sm text-nowrap">
              Create more
            </span>
            <div className="bg-dashboard-neutral-300 flex aspect-2/1 w-7 rounded-full p-0.5 shadow-sm">
              <div className="aspect-square h-full rounded-full bg-white" />
            </div>
          </div>
          <span className="flex w-max items-center rounded-md px-2 py-1.5 text-sm text-nowrap shadow-sm ring ring-black/10">
            Cancel
          </span>
          <span
            data-element="create-new-task-button"
            className="bg-dashboard-brand-500 flex w-max items-center rounded-md px-2 py-1.5 text-sm text-nowrap text-white shadow-sm"
          >
            Create New Task
          </span>
        </div>
      </div>
    </div>
  )
}

function TaskActionsModal() {
  return (
    <div
      data-element="task-actions-modal"
      className="absolute left-1/2 w-full max-w-100 -translate-x-1/2 rounded-lg bg-white opacity-0 shadow-sm ring ring-black/10 max-md:bottom-0 md:top-0"
    >
      <div className="flex items-center justify-between p-4 pb-0">
        <span className="ml-auto">
          <CloseIcon />
        </span>
      </div>
      <div className="grid grid-cols-1 gap-2 p-4 md:grid-cols-2">
        <div className="w-full rounded-lg border border-black/10 p-2">
          <div className="mb-1 flex items-center gap-1">
            <span className="flex size-7 items-center justify-center rounded-md border border-black/10 [&_svg]:size-4">
              <EditIcon />
            </span>
            <span className="text-sm font-medium">Rename</span>
          </div>
          <span className="text-dashboard-neutral-600 block text-xs">
            Edit task title
          </span>
        </div>
        <div className="w-full rounded-lg border border-black/10 p-2">
          <div className="mb-1 flex items-center gap-1">
            <span className="flex size-7 items-center justify-center rounded-md border border-black/10 [&_svg]:size-4">
              <ClipboardIcon />
            </span>
            <span className="text-sm font-medium">Copy title</span>
          </div>
          <span className="text-dashboard-neutral-600 block text-xs">
            Copy task title
          </span>
        </div>
        <div className="w-full rounded-lg border border-black/10 p-2">
          <div className="mb-1 flex items-center gap-1">
            <span className="flex size-7 items-center justify-center rounded-md border border-black/10 [&_svg]:size-4">
              <CopyIcon />
            </span>
            <span className="text-sm font-medium">Duplicate</span>
          </div>
          <span className="text-dashboard-neutral-600 block text-xs">
            Create task copy
          </span>
        </div>
        <div className="w-full rounded-lg border border-black/10 p-2">
          <div className="mb-1 flex items-center gap-1">
            <span className="flex size-7 items-center justify-center rounded-md border border-black/10 bg-red-500/10 [&_svg]:size-4 [&_svg]:text-red-500">
              <TrashIcon />
            </span>
            <span className="text-sm font-medium text-red-500">Delete</span>
          </div>
          <span className="block text-xs text-red-400">
            Remove task permanently
          </span>
        </div>
      </div>
      <div className="hidden">
        <div className="p-4">
          <span className="mb-2 flex size-7 items-center justify-center rounded-md border border-black/10 bg-red-500/10 [&_svg]:size-4 [&_svg]:text-red-500">
            <TrashIcon />
          </span>
          <span className="mb-1 block text-sm">
            Confirm <strong>Be happy and positive</strong> Deletion
          </span>
          <span className="text-dashboard-neutral-600 block text-xs">
            Are you sure you want to delete?
          </span>
        </div>
        <div className="flex justify-end gap-2 border-t border-t-black/10 p-4">
          <span className="flex w-max items-center rounded-md px-2 py-1.5 text-sm text-nowrap shadow-sm ring ring-black/10">
            Cancel
          </span>
          <span className="flex w-max items-center rounded-md bg-red-500 px-2 py-1.5 text-sm text-nowrap text-black shadow-sm">
            Delete Task
          </span>
        </div>
      </div>
    </div>
  )
}
