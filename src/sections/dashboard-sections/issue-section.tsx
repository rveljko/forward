import Container from '@dashboard-components/container'
import IssueActionsModalButton from '@dashboard-components/issue-actions-modal-button'
import IssueInformationModalButton from '@dashboard-components/issue-information-modal-button'
import RichTextEditor from '@dashboard-components/text-editor'
import TextEditorCommandBar from '@dashboard-components/text-editor-command-bar'
import Divider from '@dashboard-components/ui/divider'
import useDebounce from '@hooks/use-debounce'
import useTextEditor from '@hooks/use-text-editor'
import DotsVerticalIcon from '@icons/dots-vertical-icon'
import LayoutSidebarRightIcon from '@icons/layout-sidebar-right-icon'
import { useIssues } from '@services/contexts/issues-context'
import { Editor } from '@tiptap/react'
import { TITLE_PREFIX } from '@utils/constants'
import { Issue } from '@utils/types'
import { useEffect, useRef, useState } from 'react'
import { Link, Navigate } from 'react-router'

type IssueSectionProps = {
  issueId: Issue['id']
}

export default function IssueSection({ issueId }: IssueSectionProps) {
  const { getIssueById, updateIssue } = useIssues()

  const issue = getIssueById(issueId)

  if (!issue) return <Navigate to="/dashboard/issues" />

  const [newContent, setNewContent] = useState(issue.content)

  const editor = useTextEditor({
    content: issue.content,
    onUpdate: ({ editor }) => setNewContent(editor.getHTML()),
  })

  const debouncedContent = useDebounce(newContent, 600)

  useEffect(() => {
    if (debouncedContent) updateIssue({ ...issue, content: debouncedContent })
  }, [debouncedContent])

  if (!editor) return

  return (
    <section className="flex h-full flex-col">
      <title>{`${TITLE_PREFIX}${issue.title}`}</title>
      <Header issue={issue} />
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
  issue: Issue
}

function Header({ issue }: HeaderProps) {
  const { updateIssue } = useIssues()
  const [newTitle, setNewTitle] = useState(issue.title)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => setNewTitle(issue.title), [issue])

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
          onBlur={() => updateIssue({ ...issue, title: newTitle })}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              updateIssue({ ...issue, title: newTitle })
              inputRef.current?.blur()
            }
          }}
          className="text-clickable w-full max-w-85"
        />
      </div>
      <div className="flex items-center gap-1">
        <IssueActionsModalButton
          issueId={issue.id}
          withoutLinks
          variant="tertiary"
          className="p-0.5"
        >
          <DotsVerticalIcon />
          <span className="sr-only">Actions</span>
        </IssueActionsModalButton>
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
