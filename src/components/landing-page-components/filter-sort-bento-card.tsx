import Divider from '@dashboard-components/ui/divider'
import IssueDate from '@dashboard-components/ui/issue-date'
import IssuePriority from '@dashboard-components/ui/issue-priority'
import IssueStatus from '@dashboard-components/ui/issue-status'
import IssueTag from '@dashboard-components/ui/issue-tag'
import ArrowsSortIcon from '@icons/arrows-sort-icon'
import DotsVerticalIcon from '@icons/dots-vertical-icon'
import DragVerticalIcon from '@icons/drag-vertical-icon'
import FilterIcon from '@icons/filter-icon'
import PlusIcon from '@icons/plus-icon'
import BentoCard from '@landing-page-components/ui/bento-card'
import { useIssues } from '@services/contexts/issues-context'
import { usePreferences } from '@services/contexts/preferences-context'
import Button from '@ui/button'
import { useEffect, useRef, useState } from 'react'

export default function FilterSortBentoCard() {
  const { getRemCornerRoundness } = usePreferences()
  const { getIssueStatus, getIssuesByStatus } = useIssues()
  const issues = getIssuesByStatus('todo')
  const { name, icon: Icon } = getIssueStatus('todo')

  const [isOpened, setIsOpened] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  function handleOnClick(e: MouseEvent) {
    if (ref.current && !e.composedPath().includes(ref.current))
      setIsOpened(false)
  }

  function handleOnKeyDown(e: KeyboardEvent) {
    if (e.code === 'Escape') setIsOpened(false)
  }

  useEffect(() => {
    if (!isOpened) return
    document.body.addEventListener('click', handleOnClick)
    document.body.addEventListener('keydown', handleOnKeyDown)

    return () => {
      document.body.removeEventListener('click', handleOnClick)
      document.body.removeEventListener('keydown', handleOnKeyDown)
    }
  }, [isOpened])

  return (
    <BentoCard>
      <div ref={ref} className="relative h-full">
        <div
          className={`transition-opacity duration-400 ${isOpened ? 'opacity-0' : ''}`}
        >
          <BentoCard.Heading>Adjustable Issue Setup</BentoCard.Heading>
          <BentoCard.Paragraph>
            Filter and sort issues based on your chosen parameters for better
            clarity
          </BentoCard.Paragraph>
        </div>
        <div
          style={{ borderRadius: getRemCornerRoundness() }}
          className={`border-section-outline bg-section-background-color absolute top-0 left-0 size-full overflow-hidden border transition-all duration-400 ${isOpened ? 'rotate-0' : 'translate-y-1/2 rotate-4 md:translate-x-1/2'}`}
          onClick={() => {
            if (isOpened) return
            setIsOpened(true)
          }}
        >
          <div>
            <div className="flex items-center gap-1 p-2">
              <Button
                variant="ghost"
                size="small"
                leftIcon={<FilterIcon />}
                onClick={() => setIsOpened((prev) => !prev)}
              >
                Filters
              </Button>
              <Button
                variant="ghost"
                size="small"
                leftIcon={<ArrowsSortIcon />}
                onClick={() => setIsOpened((prev) => !prev)}
              >
                Sort
              </Button>
            </div>
            <Divider />
            <div className="bg-clickable/10 flex items-center justify-between p-4">
              <div className="flex items-center gap-2">
                <div className="text-clickable flex items-center gap-1">
                  <Icon />
                  <h4>{name}</h4>
                </div>
                <span className="text-neutral-400">{issues.length}</span>
              </div>
              <Button
                variant="tertiary"
                className="-m-2 p-2"
                onClick={() => setIsOpened((prev) => !prev)}
              >
                <PlusIcon />
                <span className="sr-only">Create New Issue</span>
              </Button>
            </div>
            <ul className="divide-section-outline divide-y">
              {issues.map(({ id, title, status, priority, tag, createdAt }) => (
                <li key={id}>
                  <article className="bg-section-background-color pointer-coarse:active:bg-clickable/5 relative flex items-center justify-between gap-2 p-4 transition-[background-color]">
                    <div className="flex items-center gap-2">
                      <div className="z-1 pointer-coarse:hidden">
                        <Button
                          variant="tertiary"
                          className="hover:text-clickable -m-2 p-2 text-neutral-400"
                        >
                          <DragVerticalIcon />
                          <span className="sr-only">Drag handle</span>
                        </Button>
                      </div>
                      <IssuePriority priority={priority} />
                      <div className="flex items-center gap-1">
                        <div className="flex h-7.5 shrink-0 items-center">
                          <IssueStatus status={status} />
                        </div>
                        <h5>
                          <button
                            className="text-clickable line-clamp-1 break-all hover:cursor-pointer"
                            onClick={() => setIsOpened((prev) => !prev)}
                          >
                            <span className="absolute inset-0" />
                            {title}
                          </button>
                        </h5>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2 max-sm:hidden">
                        <IssueTag tag={tag} />
                        <IssueDate date={createdAt} />
                      </div>
                      <Button
                        variant="tertiary"
                        className="hover:text-clickable isolate -m-2 rounded-full p-2 text-neutral-400"
                      >
                        <DotsVerticalIcon />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </BentoCard>
  )
}
