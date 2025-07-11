import Container from '@dashboard-components/container'
import DraftActionsModalButton from '@dashboard-components/draft-actions-modal-button'
import RichTextEditor from '@dashboard-components/text-editor'
import TextEditorBubbleMenu from '@dashboard-components/text-editor-bubble-menu'
import TextEditorCommandBar from '@dashboard-components/text-editor-command-bar'
import Divider from '@dashboard-components/ui/divider'
import useDebounce from '@hooks/use-debounce'
import useTextEditor from '@hooks/use-text-editor'
import DotsVerticalIcon from '@icons/dots-vertical-icon'
import { useDrafts } from '@services/contexts/drafts-context'
import { Editor } from '@tiptap/react'
import { DEFAULT_DRAFT_TITLE, TITLE_PREFIX } from '@utils/constants'
import { Draft } from '@utils/types'
import { useEffect, useRef, useState } from 'react'
import { Link, Navigate } from 'react-router'

type DraftSectionProps = {
  draftId: Draft['id']
}

export default function DraftSection({ draftId }: DraftSectionProps) {
  const { getDraftById, updateDraft } = useDrafts()

  const draft = getDraftById(draftId)

  if (!draft) return <Navigate to="/dashboard/drafts" />

  const { title, content } = draft
  const [newContent, setNewContent] = useState(content)

  const editor = useTextEditor({
    content,
    onUpdate: ({ editor }) => setNewContent(editor.getHTML()),
  })

  const debouncedContent = useDebounce(newContent, 600)

  useEffect(() => {
    if (debouncedContent) updateDraft(draftId, debouncedContent)
  }, [debouncedContent])

  if (!editor) return

  return (
    <section className="flex h-full flex-col overflow-hidden">
      <title>{`${TITLE_PREFIX}${title}`}</title>
      <Header draftId={draftId} title={title} />
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
  draftId: Draft['id']
  title: Draft['title']
}

function Header({ draftId, title }: HeaderProps) {
  const { renameDraft } = useDrafts()
  const [newTitle, setNewTitle] = useState(title)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setNewTitle(title)
  }, [title])

  return (
    <header className="flex items-center justify-between gap-2 p-4">
      <div className="flex grow items-center gap-1">
        <Link to="/dashboard/drafts" className="text-clickable">
          Drafts
        </Link>
        <span className="text-neutral-400">/</span>
        <input
          ref={inputRef}
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onBlur={() => renameDraft(draftId, newTitle || DEFAULT_DRAFT_TITLE)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              renameDraft(draftId, newTitle || DEFAULT_DRAFT_TITLE)
              inputRef.current?.blur()
            }
          }}
          className={`focus:text-clickable w-full max-w-85 ${newTitle === DEFAULT_DRAFT_TITLE ? 'text-neutral-400' : 'text-clickable'}`}
          maxLength={80}
        />
      </div>
      <DraftActionsModalButton
        draftId={draftId}
        withoutLinks
        variant="tertiary"
        className="p-0.5"
      >
        <DotsVerticalIcon />
        <span className="sr-only">Actions</span>
      </DraftActionsModalButton>
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
        <TextEditorBubbleMenu editor={editor} />
        <RichTextEditor editor={editor} className="h-full" />
      </Container>
    </div>
  )
}
