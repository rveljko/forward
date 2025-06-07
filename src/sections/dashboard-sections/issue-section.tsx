import Container from '@dashboard-components/container'
import IssueInformationModalButton from '@dashboard-components/issue-information-modal-button'
import RichTextEditor from '@dashboard-components/text-editor'
import TextEditorCommandBar from '@dashboard-components/text-editor-command-bar'
import Divider from '@dashboard-components/ui/divider'
import useDebounce from '@hooks/use-debounce'
import useTextEditor from '@hooks/use-text-editor'
import SidebarClosedIcon from '@icons/sidebar-closed-icon'
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
      <TextEditorCommandBar editor={editor} className="flex-wrap p-4" />
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
      <IssueInformationModalButton
        issue={issue}
        variant="tertiary"
        className="p-0.5"
      >
        <SidebarClosedIcon />
      </IssueInformationModalButton>
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
