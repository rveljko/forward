import { EditorContent, EditorContentProps } from '@tiptap/react'

type TextEditorProps = EditorContentProps

export default function TextEditor({ ...props }: TextEditorProps) {
  return <EditorContent {...props} />
}
