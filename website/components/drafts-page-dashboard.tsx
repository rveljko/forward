'use client'

import Cursor from '@/components/cursor'
import DraftCard from '@/components/draft-card'
import { drafts } from '@/data/drafts'
import ArrowLeftIcon from '@/icons/arrow-left-icon'
import ClipboardIcon from '@/icons/clipboard-icon'
import CloseIcon from '@/icons/close-icon'
import CopyIcon from '@/icons/copy-icon'
import DotsVerticalIcon from '@/icons/dots-vertical-icon'
import EditIcon from '@/icons/edit-icon'
import PlusIcon from '@/icons/plus-icon'
import TrashIcon from '@/icons/trash-icon'
import { motion, stagger, useAnimate } from 'motion/react'
import { useEffect } from 'react'

export default function DraftsPageDashboard() {
  const [scope, animate] = useAnimate()

  async function createAndDeleteDraftAnimation() {
    await animate('[data-element=cursor]', {
      transform: 'translate3d(-30%, -6.25rem, 0)',
    })
    await animate('[data-element=create-new-draft-button]', {
      backgroundColor: 'var(--color-dashboard-neutral-300)',
    })
    animate('[data-element=cursor] svg', {
      scale: 0.9,
    })
    await animate('[data-element=create-new-draft-button]', {
      scale: 0.99,
    })
    animate('[data-element=cursor] svg', {
      scale: 1,
    })
    await animate('[data-element=create-new-draft-button]', {
      scale: 1,
    })
    animate('[data-element=create-new-draft-button]', {
      backgroundColor: 'var(--color-dashboard-neutral-200)',
    })
    animate(
      '[data-element=drafts-page]',
      {
        display: 'none',
      },
      { duration: 0 }
    )
    await animate(
      '[data-element=draft-page]',
      {
        display: 'block',
      },
      { duration: 0 }
    )
    await animate('[data-element=cursor]', {
      transform: 'translate3d(-25%, -7.5rem, 0)',
    })
    await animate('[data-element=cursor] svg', {
      scale: 0.9,
    })
    await animate('[data-element=cursor] svg', {
      scale: 1,
    })
    await animate('[data-element=draft-placeholder]', {
      display: 'none',
    })
    animate(
      '[data-element=blinking-pipe]',
      { opacity: [0, 1, 0] },
      { repeat: Infinity, duration: 1 }
    )
    await animate(
      '[data-element=draft-text-letter]',
      { display: 'inline-block' },
      { delay: stagger(0.1) }
    )
    await animate('[data-element=cursor]', {
      transform: 'translate3d(calc(50% - 2.75rem), -15.5rem, 0)',
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
    await animate('[data-element=draft-actions-modal]', {
      opacity: 1,
    })
    await animate('[data-element=cursor]', {
      transform:
        'translate3d(10%, var(--translate-y-from-actions-button-to-delete-draft-panel-card), 0)',
    })
    await animate('[data-element=delete-draft-panel-card]', {
      borderColor: 'hsl(0 0% 80%)',
    })
    animate('[data-element=cursor] svg', {
      scale: 0.9,
    })
    await animate('[data-element=delete-draft-panel-card]', {
      scale: 0.99,
    })
    animate('[data-element=cursor] svg', {
      scale: 1,
    })
    await animate('[data-element=delete-draft-panel-card]', {
      scale: 1,
    })
    animate(
      '[data-element=menu-panel]',
      {
        display: 'none',
      },
      { duration: 0 }
    )
    animate('[data-element=delete-draft-panel-card]', {
      borderColor: 'hsl(0 0% 90%)',
    })
    animate('[data-element=back-button]', {
      display: 'flex',
    })
    await animate(
      '[data-element=delete-panel]',
      {
        display: 'block',
      },
      { duration: 0 }
    )
    await animate('[data-element=cursor]', {
      transform:
        'translate3d(24%, var(--translate-y-from-delete-draft-panel-card-to-delete-draft-button), 0)',
    })
    await animate('[data-element=delete-draft-button]', {
      backgroundColor: 'var(--color-red-600)',
    })
    animate('[data-element=cursor] svg', {
      scale: 0.9,
    })
    await animate('[data-element=delete-draft-button]', {
      scale: 0.99,
    })
    animate('[data-element=cursor] svg', {
      scale: 1,
    })
    await animate('[data-element=delete-draft-button]', {
      scale: 1,
    })
    animate('[data-element=delete-draft-button]', {
      backgroundColor: 'var(--color-red-500)',
    })
    animate('[data-element=overlay]', {
      opacity: 0,
    })
    animate('[data-element=draft-actions-modal]', {
      opacity: 0,
    })
    animate(
      '[data-element=draft-placeholder]',
      {
        display: 'inline',
      },
      { duration: 0 }
    )
    animate(
      '[data-element=draft-text-letter]',
      {
        display: 'none',
      },
      { duration: 0 }
    )
    animate('[data-element=blinking-pipe]', { opacity: 0 }, { duration: 0 })
    animate(
      '[data-element=draft-page]',
      {
        display: 'none',
      },
      { duration: 0 }
    )
    await animate(
      '[data-element=drafts-page]',
      {
        display: 'block',
      },
      { duration: 0 }
    )
    animate(
      '[data-element=back-button]',
      {
        display: 'none',
      },
      { duration: 0 }
    )
    animate(
      '[data-element=delete-panel]',
      {
        display: 'none',
      },
      { duration: 0 }
    )
    await animate(
      '[data-element=menu-panel]',
      {
        display: 'grid',
      },
      { duration: 0 }
    )
    createAndDeleteDraftAnimation()
  }

  useEffect(() => {
    createAndDeleteDraftAnimation()
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
        aria-label="Dashboard Drafts page"
        className="bg-dashboard-background pointer-events-none relative isolate h-144 w-full rounded-b-lg border border-t-0 border-neutral-200 p-4 select-none after:absolute after:-inset-4 after:top-0 after:-z-1 after:bg-white after:mask-linear-0 after:mask-linear-from-black after:mask-linear-to-transparent"
      >
        <div
          aria-hidden
          className="size-full overflow-hidden rounded-lg border border-black/10 bg-white"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div
              data-element="cursor"
              className="absolute top-1/2 left-1/2 z-10 size-full [--translate-y-from-actions-button-to-delete-draft-panel-card:--spacing(55)] [--translate-y-from-delete-draft-panel-card-to-delete-draft-button:--spacing(60)] md:[--translate-y-from-actions-button-to-delete-draft-panel-card:--spacing(-30)] md:[--translate-y-from-delete-draft-panel-card-to-delete-draft-button:--spacing(-24)] [&_svg]:origin-top-left"
            >
              <Cursor />
            </div>
          </div>
          <div
            data-element="overlay"
            className="absolute inset-0 z-5 rounded-b-lg bg-white/50 opacity-0"
          />
          <div className="absolute inset-4 z-5">
            <DraftActionsModal />
          </div>
          <div data-element="drafts-page">
            <div className="border-b border-b-black/10 p-4 text-sm font-medium">
              Drafts
            </div>
            <div className="mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(--spacing(48),100%),1fr))] gap-4 px-4 py-8">
              <span
                data-element="create-new-draft-button"
                className="bg-dashboard-neutral-200 flex size-full flex-col items-center justify-center gap-2 rounded-lg border border-black/10 px-4 py-8 shadow-sm"
              >
                <div className="flex size-16 items-center justify-center rounded-full bg-black/10 [&_svg]:size-8">
                  <PlusIcon />
                </div>
                <span className="text-sm font-medium">Create New Draft</span>
              </span>
              {drafts.map((draft, index) => (
                <DraftCard draft={draft} key={index} />
              ))}
            </div>
          </div>
          <div data-element="draft-page" className="hidden">
            <div className="flex justify-between gap-2 border-b border-b-black/10 p-4">
              <span className="text-sm font-medium">
                Drafts /
                <span className="text-dashboard-neutral-600"> New Draft</span>
              </span>
              <DotsVerticalIcon />
            </div>
            <div className="border-b border-b-black/10 p-4">
              <div className="bg-dashboard-neutral-100 h-6 w-2/3 animate-pulse rounded-md" />
            </div>
            <div className="px-4 py-8">
              <div className="mx-auto w-full max-w-md">
                <div className="h-4.5">
                  <span
                    data-element="draft-placeholder"
                    className="text-dashboard-neutral-600 text-sm"
                  >
                    Write something...
                  </span>
                  <span className="text-sm text-black">
                    {'Do something today that makes you proud'
                      .split('')
                      .map((letter, index) => (
                        <motion.span
                          key={index}
                          data-element="draft-text-letter"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DraftActionsModal() {
  return (
    <div
      data-element="draft-actions-modal"
      className="absolute left-1/2 w-full max-w-100 -translate-x-1/2 rounded-lg bg-white opacity-0 shadow-sm ring ring-black/10 max-md:bottom-0 md:top-0"
    >
      <div className="flex items-center justify-between p-4 pb-0">
        <span
          data-element="back-button"
          className="hidden w-max items-center gap-1 rounded-md text-sm text-nowrap"
        >
          <ArrowLeftIcon />
          Back
        </span>
        <span className="ml-auto">
          <CloseIcon />
        </span>
      </div>
      <div
        data-element="menu-panel"
        className="grid grid-cols-1 gap-2 p-4 md:grid-cols-2"
      >
        <div className="w-full rounded-lg border border-black/10 p-2">
          <div className="mb-1 flex items-center gap-1">
            <span className="flex size-7 items-center justify-center rounded-md border border-black/10 [&_svg]:size-4">
              <EditIcon />
            </span>
            <span className="text-sm font-medium">Rename</span>
          </div>
          <span className="text-dashboard-neutral-600 block text-xs">
            Edit draft title
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
            Copy draft title
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
            Create draft copy
          </span>
        </div>
        <div
          data-element="delete-draft-panel-card"
          className="w-full rounded-lg border border-black/10 p-2"
        >
          <div className="mb-1 flex items-center gap-1">
            <span className="flex size-7 items-center justify-center rounded-md border border-black/10 bg-red-500/10 [&_svg]:size-4 [&_svg]:text-red-500">
              <TrashIcon />
            </span>
            <span className="text-sm font-medium text-red-500">Delete</span>
          </div>
          <span className="block text-xs text-red-400">
            Remove draft permanently
          </span>
        </div>
      </div>
      <div data-element="delete-panel" className="hidden">
        <div className="p-4">
          <span className="mb-2 flex size-7 items-center justify-center rounded-md border border-black/10 bg-red-500/10 [&_svg]:size-4 [&_svg]:text-red-500">
            <TrashIcon />
          </span>
          <span className="mb-1 block text-sm">
            Confirm <strong>New Draft</strong> Deletion
          </span>
          <span className="text-dashboard-neutral-600 block text-xs">
            Are you sure you want to delete?
          </span>
        </div>
        <div className="flex justify-end gap-2 border-t border-t-black/10 p-4">
          <span className="flex w-max items-center rounded-md px-2 py-1.5 text-sm text-nowrap shadow-sm ring ring-black/10">
            Cancel
          </span>
          <span
            data-element="delete-draft-button"
            className="flex w-max items-center rounded-md bg-red-500 px-2 py-1.5 text-sm text-nowrap text-black shadow-sm"
          >
            Delete Draft
          </span>
        </div>
      </div>
    </div>
  )
}
