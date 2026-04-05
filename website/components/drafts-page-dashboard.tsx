import Cursor from '@/components/cursor'
import DraftCard from '@/components/draft-card'
import { drafts } from '@/data/drafts'
import ClipboardIcon from '@/icons/clipboard-icon'
import CloseIcon from '@/icons/close-icon'
import CopyIcon from '@/icons/copy-icon'
import DotsVerticalIcon from '@/icons/dots-vertical-icon'
import EditIcon from '@/icons/edit-icon'
import PlusIcon from '@/icons/plus-icon'
import TrashIcon from '@/icons/trash-icon'

export default function DraftsPageDashboard() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center gap-1 rounded-t-lg border border-neutral-200 bg-white px-2 py-1.5">
        <div className="size-2 rounded-full bg-neutral-200" />
        <div className="size-2 rounded-full bg-neutral-200" />
        <div className="size-2 rounded-full bg-neutral-200" />
      </div>
      <div
        aria-label="Dashboard Drafts page"
        className="bg-dashboard-background pointer-events-none relative isolate h-144 w-full rounded-b-lg border border-t-0 border-neutral-200 p-4 select-none after:absolute after:-inset-4 after:top-0 after:-z-1 after:bg-white after:mask-linear-0 after:mask-linear-from-black after:mask-linear-to-transparent"
      >
        <div
          aria-hidden
          className="size-full overflow-hidden rounded-lg border border-black/10 bg-white"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 z-10 size-full [&_svg]:origin-top-left">
              <Cursor />
            </div>
          </div>
          <div className="absolute inset-0 rounded-b-lg bg-white/50 opacity-0" />
          <div className="absolute inset-4">
            <DraftActionsModal />
          </div>
          <div>
            <div className="border-b border-b-black/10 p-4 text-sm font-medium">
              Drafts
            </div>
            <div className="mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(--spacing(48),100%),1fr))] gap-4 px-4 py-8">
              <span className="bg-dashboard-neutral-200 flex size-full flex-col items-center justify-center gap-2 rounded-lg border border-black/10 px-4 py-8 shadow-sm">
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
          <div className="hidden">
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
                <span className="text-dashboard-neutral-600 text-sm">
                  Write something...
                </span>
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
    <div className="absolute left-1/2 w-full max-w-100 -translate-x-1/2 rounded-lg bg-white opacity-0 shadow-sm ring ring-black/10 max-md:bottom-0 md:top-0">
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
        <div className="w-full rounded-lg border border-black/10 p-2">
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
    </div>
  )
}
