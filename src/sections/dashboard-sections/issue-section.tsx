import Container from '@dashboard-components/container'
import IssueInformationModalButton from '@dashboard-components/issue-information-modal-button'
import RichTextEditor from '@dashboard-components/text-editor'
import TextEditorCommandBar from '@dashboard-components/text-editor-command-bar'
import Divider from '@dashboard-components/ui/divider'
import Dropdown from '@dashboard-components/ui/dropdown'
import DropdownButton from '@dashboard-components/ui/dropdown-button'
import { issuePriorities } from '@data/issue-priorities'
import { issueStatuses } from '@data/issue-statuses'
import { issueTags } from '@data/issue-tags'
import useDebounce from '@hooks/use-debounce'
import useDropdown from '@hooks/use-dropdown'
import useTextEditor from '@hooks/use-text-editor'
import CircleEmptyIcon from '@icons/circle-empty-icon'
import ClipboardIcon from '@icons/clipboard-icon'
import CopyIcon from '@icons/copy-icon'
import DotsVerticalIcon from '@icons/dots-vertical-icon'
import EditIcon from '@icons/edit-icon'
import LayoutSidebarRightIcon from '@icons/layout-sidebar-right-icon'
import PriorityLowIcon from '@icons/priority-low-icon'
import TagIcon from '@icons/tag-icon'
import TrashIcon from '@icons/trash-icon'
import { useIssues } from '@services/contexts/issues-context'
import { Editor } from '@tiptap/react'
import { TITLE_PREFIX } from '@utils/constants'
import { Issue } from '@utils/types'
import copy from 'copy-to-clipboard'
import { useEffect, useRef, useState } from 'react'
import { Link, Navigate } from 'react-router'

type IssueSectionProps = {
  issueId: Issue['id']
}

export default function IssueSection({ issueId }: IssueSectionProps) {
  const { getIssueById, updateIssueContent } = useIssues()

  const issue = getIssueById(issueId)

  if (!issue) return <Navigate to="/dashboard/issues" />

  const { title, content } = issue
  const [newContent, setNewContent] = useState(content)

  const editor = useTextEditor({
    content,
    onUpdate: ({ editor }) => setNewContent(editor.getHTML()),
  })

  const debouncedContent = useDebounce(newContent, 3000)

  useEffect(() => {
    if (debouncedContent) updateIssueContent(issueId, debouncedContent)
  }, [debouncedContent])

  if (!editor) return

  return (
    <section className="flex h-full flex-col">
      <title>{`${TITLE_PREFIX}${title}`}</title>
      <Header id={issueId} title={title} issue={issue} />
      <Divider />
      <div className="w-0 min-w-full">
        <div className="flex overflow-x-auto p-4">
          <TextEditorCommandBar editor={editor} />
        </div>
      </div>
      <Divider />
      <TextEditor editor={editor} />
    </section>
  )
}

type HeaderProps = {
  id: Issue['id']
  title: Issue['title']
  issue: Issue
}

function Header({ id, title, issue }: HeaderProps) {
  const { renameIssue } = useIssues()
  const [newTitle, setNewTitle] = useState(title)
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <header className="flex items-center justify-between gap-2 p-4">
      <div className="flex grow items-center gap-1">
        <Link to="/dashboard/issues" className="text-clickable">
          Issues
        </Link>
        <span className="text-neutral-400">/</span>
        <input
          type="text"
          ref={inputRef}
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onBlur={() => renameIssue(id, newTitle)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              renameIssue(id, newTitle)
              inputRef.current?.blur()
            }
          }}
          className="text-clickable w-full max-w-85"
        />
      </div>
      <div className="flex items-center gap-1">
        <MoreActionsDropdownButton id={id} title={title} />
        <IssueInformationModalButton
          issue={issue}
          variant="tertiary"
          className="group p-0.5"
        >
          <LayoutSidebarRightIcon className="[--clip-path:_polygon(0_0,_100%_0,_100%_100%,_0_100%)] group-hover:[&_rect]:[clip-path:var(--clip-path)] pointer-coarse:group-active:[&_rect]:[clip-path:var(--clip-path)]" />
          <span className="sr-only">Show issue information</span>
        </IssueInformationModalButton>
      </div>
    </header>
  )
}

type MoreActionsDropdownButtonProps = {
  id: Issue['id']
  title: Issue['title']
}

function MoreActionsDropdownButton({
  id,
  title,
}: MoreActionsDropdownButtonProps) {
  const { duplicateIssue } = useIssues()
  const { isOpened, toggleDropdown } = useDropdown()

  return (
    <DropdownButton
      label={
        <>
          <DotsVerticalIcon />
          <span className="sr-only">Issue actions</span>
        </>
      }
      isOpened={isOpened}
      toggleDropdown={toggleDropdown}
      variant="tertiary"
      position="bottom-left"
      className="p-0.5"
    >
      <Dropdown.Accordion>
        <Dropdown.AccordionItem value="item-1">
          <Dropdown.AccordionSummary
            valueForItem="item-1"
            icon={<CircleEmptyIcon />}
          >
            Status
          </Dropdown.AccordionSummary>
          <Dropdown.List>
            {issueStatuses.map(({ id, name, icon: Icon }) => (
              <Dropdown.Item key={id}>
                <Dropdown.Label>
                  <Dropdown.RadioButton />
                  <Icon />
                  {name}
                </Dropdown.Label>
              </Dropdown.Item>
            ))}
          </Dropdown.List>
        </Dropdown.AccordionItem>
        <Dropdown.AccordionItem value="item-2">
          <Dropdown.AccordionSummary
            valueForItem="item-2"
            icon={<PriorityLowIcon />}
          >
            Priority
          </Dropdown.AccordionSummary>
          <Dropdown.List>
            {issuePriorities.map(({ id, name, icon: Icon }) => (
              <Dropdown.Item key={id}>
                <Dropdown.Label>
                  <Dropdown.RadioButton />
                  <Icon />
                  {name}
                </Dropdown.Label>
              </Dropdown.Item>
            ))}
          </Dropdown.List>
        </Dropdown.AccordionItem>
        <Dropdown.AccordionItem value="item-3">
          <Dropdown.AccordionSummary valueForItem="item-3" icon={<TagIcon />}>
            Tag
          </Dropdown.AccordionSummary>
          <Dropdown.List>
            {issueTags.map(({ id, name, icon: Icon }) => (
              <Dropdown.Item key={id}>
                <Dropdown.Label>
                  <Dropdown.RadioButton />
                  <Icon />
                  {name}
                </Dropdown.Label>
              </Dropdown.Item>
            ))}
          </Dropdown.List>
        </Dropdown.AccordionItem>
        <Dropdown.Item>
          <Dropdown.Button
            leftIcon={<ClipboardIcon />}
            onClick={() => {
              copy(title)
              toggleDropdown()
            }}
          >
            Copy title
          </Dropdown.Button>
        </Dropdown.Item>
        <Dropdown.Item>
          <Dropdown.Button leftIcon={<EditIcon />}>Rename</Dropdown.Button>
        </Dropdown.Item>
        <Dropdown.Item>
          <Dropdown.Button
            leftIcon={<CopyIcon />}
            onClick={() => {
              duplicateIssue(id)
              toggleDropdown()
            }}
          >
            Duplicate
          </Dropdown.Button>
        </Dropdown.Item>
        <Dropdown.Item>
          <Dropdown.Button
            leftIcon={<TrashIcon />}
            className="text-danger-500 hover:bg-danger-500/10"
          >
            Delete
          </Dropdown.Button>
        </Dropdown.Item>
      </Dropdown.Accordion>
    </DropdownButton>
  )
}

type TextEditorProps = {
  editor: Editor
}

function TextEditor({ editor }: TextEditorProps) {
  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <Container className="grow py-8 md:py-16">
        <RichTextEditor editor={editor} className="h-full" />
      </Container>
    </div>
  )
}
