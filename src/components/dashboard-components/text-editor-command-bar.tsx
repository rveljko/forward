import KeyboardShortcut from '@dashboard-components/ui/keyboard-shortcut'
import AlignCenterIcon from '@icons/align-center-icon'
import AlignJustifiedIcon from '@icons/align-justified-icon'
import AlignLeftIcon from '@icons/align-left-icon'
import AlignRightIcon from '@icons/align-right-icon'
import ArrowBackUpIcon from '@icons/arrow-back-up-icon'
import ArrowForwardUpIcon from '@icons/arrow-forward-up-icon'
import BoldIcon from '@icons/bold-icon'
import Heading1Icon from '@icons/heading1-icon'
import Heading2Icon from '@icons/heading2-icon'
import Heading3Icon from '@icons/heading3-icon'
import Heading4Icon from '@icons/heading4-icon'
import ItalicIcon from '@icons/italic-icon'
import ListIcon from '@icons/list-icon'
import ListNumbersIcon from '@icons/list-numbers-icon'
import StrikethroughIcon from '@icons/strikethrough-icon'
import UnderlineIcon from '@icons/underline-icon'
import { Editor } from '@tiptap/react'
import Button from '@ui/button'
import { cn } from '@utils/utils'

type TextEditorCommandBarProps = React.ComponentPropsWithoutRef<'div'> & {
  editor: Editor
}

export default function TextEditorCommandBar({
  editor,
  className,
  ...props
}: TextEditorCommandBarProps) {
  return (
    <div
      role="toolbar"
      className={cn('flex items-center gap-0.5', className)}
      {...props}
    >
      <Button
        variant="tertiary"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className="p-0.5"
        tooltip={
          <div className="flex flex-col items-center gap-1 text-nowrap">
            Undo
            <KeyboardShortcut>Ctrl + Z</KeyboardShortcut>
          </div>
        }
        position="bottom-center"
      >
        <ArrowBackUpIcon />
        <span className="sr-only">Undo</span>
      </Button>
      <Button
        variant="tertiary"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className="p-0.5"
        tooltip={
          <div className="flex flex-col items-center gap-1 text-nowrap">
            Redo
            <KeyboardShortcut>Ctrl + Shift + Z</KeyboardShortcut>
          </div>
        }
        position="bottom-center"
      >
        <ArrowForwardUpIcon />
        <span className="sr-only">Redo</span>
      </Button>
      <Button
        variant="tertiary"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`p-0.5 ${editor.isActive('heading', { level: 1 }) ? 'bg-neutral-700 hover:bg-neutral-700' : ''}`}
        tooltip={
          <div className="flex flex-col items-center gap-1 text-nowrap">
            Heading 1<KeyboardShortcut>Ctrl + Alt + 1</KeyboardShortcut>
          </div>
        }
        position="bottom-center"
      >
        <Heading1Icon />
        <span className="sr-only">Heading 1</span>
      </Button>
      <Button
        variant="tertiary"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-0.5 ${editor.isActive('heading', { level: 2 }) ? 'bg-neutral-700 hover:bg-neutral-700' : ''}`}
        tooltip={
          <div className="flex flex-col items-center gap-1 text-nowrap">
            Heading 2<KeyboardShortcut>Ctrl + Alt + 2</KeyboardShortcut>
          </div>
        }
        position="bottom-center"
      >
        <Heading2Icon />
        <span className="sr-only">Heading 2</span>
      </Button>
      <Button
        variant="tertiary"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`p-0.5 ${editor.isActive('heading', { level: 3 }) ? 'bg-neutral-700 hover:bg-neutral-700' : ''}`}
        tooltip={
          <div className="flex flex-col items-center gap-1 text-nowrap">
            Heading 3<KeyboardShortcut>Ctrl + Alt + 3</KeyboardShortcut>
          </div>
        }
        position="bottom-center"
      >
        <Heading3Icon />
        <span className="sr-only">Heading 3</span>
      </Button>
      <Button
        variant="tertiary"
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={`p-0.5 ${editor.isActive('heading', { level: 4 }) ? 'bg-neutral-700 hover:bg-neutral-700' : ''}`}
        tooltip={
          <div className="flex flex-col items-center gap-1 text-nowrap">
            Heading 4<KeyboardShortcut>Ctrl + Alt + 4</KeyboardShortcut>
          </div>
        }
        position="bottom-center"
      >
        <Heading4Icon />
        <span className="sr-only">Heading 4</span>
      </Button>
      <Button
        variant="tertiary"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`p-0.5 ${editor.isActive('bold') ? 'bg-neutral-700 hover:bg-neutral-700' : ''}`}
        tooltip={
          <div className="flex flex-col items-center gap-1 text-nowrap">
            Bold
            <KeyboardShortcut>Ctrl + B</KeyboardShortcut>
          </div>
        }
        position="bottom-center"
      >
        <BoldIcon />
        <span className="sr-only">Bold</span>
      </Button>
      <Button
        variant="tertiary"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`p-0.5 ${editor.isActive('italic') ? 'bg-neutral-700 hover:bg-neutral-700' : ''}`}
        tooltip={
          <div className="flex flex-col items-center gap-1 text-nowrap">
            Italic
            <KeyboardShortcut>Ctrl + I</KeyboardShortcut>
          </div>
        }
        position="bottom-center"
      >
        <ItalicIcon />
        <span className="sr-only">Italic</span>
      </Button>
      <Button
        variant="tertiary"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`p-0.5 ${editor.isActive('underline') ? 'bg-neutral-700 hover:bg-neutral-700' : ''}`}
        tooltip={
          <div className="flex flex-col items-center gap-1 text-nowrap">
            Underline
            <KeyboardShortcut>Ctrl + U</KeyboardShortcut>
          </div>
        }
        position="bottom-center"
      >
        <UnderlineIcon />
        <span className="sr-only">Underline</span>
      </Button>
      <Button
        variant="tertiary"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`p-0.5 ${editor.isActive('strike') ? 'bg-neutral-700 hover:bg-neutral-700' : ''}`}
        tooltip={
          <div className="flex flex-col items-center gap-1 text-nowrap">
            Strikethrough
            <KeyboardShortcut>Ctrl + Shift + S</KeyboardShortcut>
          </div>
        }
        position="bottom-center"
      >
        <StrikethroughIcon />
        <span className="sr-only">Strikethrough</span>
      </Button>
      <Button
        variant="tertiary"
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={`p-0.5 ${editor.isActive({ textAlign: 'left' }) ? 'bg-neutral-700 hover:bg-neutral-700' : ''}`}
        tooltip={
          <div className="flex flex-col items-center gap-1 text-nowrap">
            Left Alignment
            <KeyboardShortcut>Ctrl + Shift + L</KeyboardShortcut>
          </div>
        }
        position="bottom-center"
      >
        <AlignLeftIcon />
        <span className="sr-only">Left Alignment</span>
      </Button>
      <Button
        variant="tertiary"
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className={`p-0.5 ${editor.isActive({ textAlign: 'center' }) ? 'bg-neutral-700 hover:bg-neutral-700' : ''}`}
        tooltip={
          <div className="flex flex-col items-center gap-1 text-nowrap">
            Center Alignment
            <KeyboardShortcut>Ctrl + Shift + E</KeyboardShortcut>
          </div>
        }
        position="bottom-center"
      >
        <AlignCenterIcon />
        <span className="sr-only">Center Alignment</span>
      </Button>
      <Button
        variant="tertiary"
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        className={`p-0.5 ${editor.isActive({ textAlign: 'right' }) ? 'bg-neutral-700 hover:bg-neutral-700' : ''}`}
        tooltip={
          <div className="flex flex-col items-center gap-1 text-nowrap">
            Right Alignment
            <KeyboardShortcut>Ctrl + Shift + R</KeyboardShortcut>
          </div>
        }
        position="bottom-center"
      >
        <AlignRightIcon />
        <span className="sr-only">Right Alignment</span>
      </Button>
      <Button
        variant="tertiary"
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
        className={`p-0.5 ${editor.isActive({ textAlign: 'justify' }) ? 'bg-neutral-700 hover:bg-neutral-700' : ''}`}
        tooltip={
          <div className="flex flex-col items-center gap-1 text-nowrap">
            Justify
            <KeyboardShortcut>Ctrl + Shift + J</KeyboardShortcut>
          </div>
        }
        position="bottom-center"
      >
        <AlignJustifiedIcon />
        <span className="sr-only">Justify</span>
      </Button>
      <Button
        variant="tertiary"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-0.5 ${editor.isActive('bulletList') ? 'bg-neutral-700 hover:bg-neutral-700' : ''}`}
        tooltip={
          <div className="flex flex-col items-center gap-1 text-nowrap">
            Bullet List
            <KeyboardShortcut>Ctrl + Shift + 8</KeyboardShortcut>
          </div>
        }
        position="bottom-center"
      >
        <ListIcon />
        <span className="sr-only">Bullet List</span>
      </Button>
      <Button
        variant="tertiary"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-0.5 ${editor.isActive('orderedList') ? 'bg-neutral-700 hover:bg-neutral-700' : ''}`}
        tooltip={
          <div className="flex flex-col items-center gap-1 text-nowrap">
            Numbered List
            <KeyboardShortcut>Ctrl + Shift + 7</KeyboardShortcut>
          </div>
        }
        position="bottom-center"
      >
        <ListNumbersIcon />
        <span className="sr-only">Numbered List</span>
      </Button>
    </div>
  )
}
