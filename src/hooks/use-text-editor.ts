import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import { EditorOptions, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export default function useTextEditor(editorOptions?: Partial<EditorOptions>) {
  return useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4],
        },
      }),
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    editorProps: {
      attributes: {
        class: 'h-full focus:outline-0',
      },
    },
    ...editorOptions,
  })
}
