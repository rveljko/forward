import BoldIcon from '@icons/bold-icon'
import ItalicIcon from '@icons/italic-icon'
import StrikethroughIcon from '@icons/strikethrough-icon'
import UnderlineIcon from '@icons/underline-icon'
import { BubbleMenu, Editor } from '@tiptap/react'
import Button from '@ui/button'
import { cn } from '@utils/utils'

type TextEditorBubbleMenuProps = React.ComponentPropsWithoutRef<'div'> & {
  editor: Editor
}

export default function TextEditorBubbleMenu({
  editor,
  className,
  ...props
}: TextEditorBubbleMenuProps) {
  return (
    <BubbleMenu
      editor={editor}
      className={cn(
        'bg-section-background-color border-section-outline flex items-center gap-0.5 rounded-lg border p-0.5',
        className
      )}
      {...props}
    >
      <Button
        variant="tertiary"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-0.5 ${editor.isActive('bold') ? 'bg-neutral-700 hover:bg-neutral-700' : ''}`}
      >
        <BoldIcon />
        <span className="sr-only">Bold</span>
      </Button>
      <Button
        variant="tertiary"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-0.5 ${editor.isActive('italic') ? 'bg-neutral-700 hover:bg-neutral-700' : ''}`}
      >
        <ItalicIcon />
        <span className="sr-only">Italic</span>
      </Button>
      <Button
        variant="tertiary"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`p-0.5 ${editor.isActive('underline') ? 'bg-neutral-700! hover:bg-neutral-700' : ''}`}
      >
        <UnderlineIcon />
        <span className="sr-only">Underline</span>
      </Button>
      <Button
        variant="tertiary"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`p-0.5 ${editor.isActive('strike') ? 'bg-neutral-700 hover:bg-neutral-700' : ''}`}
      >
        <StrikethroughIcon />
        <span className="sr-only">Strikethrough</span>
      </Button>
    </BubbleMenu>
  )
}
