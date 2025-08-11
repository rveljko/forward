import AlignCenterIcon from '@icons/align-center-icon'
import AlignJustifiedIcon from '@icons/align-justified-icon'
import AlignLeftIcon from '@icons/align-left-icon'
import AlignRightIcon from '@icons/align-right-icon'
import BoldIcon from '@icons/bold-icon'
import ItalicIcon from '@icons/italic-icon'
import StrikethroughIcon from '@icons/strikethrough-icon'
import UnderlineIcon from '@icons/underline-icon'
import BentoCard from '@landing-page-components/ui/bento-card'
import Button from '@ui/button'
import { useRef } from 'react'

export default function TextFormattingBentoCard() {
  const ref = useRef<HTMLParagraphElement>(null)

  return (
    <BentoCard>
      <BentoCard.Heading>Flexible Text Formatting</BentoCard.Heading>
      <BentoCard.Paragraph>
        Edit your text with various formatting options to enhance readability
      </BentoCard.Paragraph>
      <div className="mt-auto max-w-80">
        <div className="mb-2 flex w-max items-center gap-1 rounded-lg bg-neutral-800 p-0.5">
          <Button
            variant="tertiary"
            className="p-0.25"
            onClick={() => ref.current?.classList.toggle('font-semibold')}
          >
            <BoldIcon />
            <span className="sr-only">Bold</span>
          </Button>
          <Button
            variant="tertiary"
            className="p-0.25"
            onClick={() => ref.current?.classList.toggle('italic')}
          >
            <ItalicIcon />
            <span className="sr-only">Italic</span>
          </Button>
          <Button
            variant="tertiary"
            className="p-0.25"
            onClick={() => {
              ref.current?.classList.remove('line-through')
              ref.current?.classList.toggle('underline')
            }}
          >
            <UnderlineIcon />
            <span className="sr-only">Underline</span>
          </Button>
          <Button
            variant="tertiary"
            className="p-0.25"
            onClick={() => {
              ref.current?.classList.remove('underline')
              ref.current?.classList.toggle('line-through')
            }}
          >
            <StrikethroughIcon />
            <span className="sr-only">Strikethrough</span>
          </Button>
          <Button
            variant="tertiary"
            className="p-0.25"
            onClick={() => {
              ref.current?.classList.remove(
                'text-right',
                'text-center',
                'text-justify'
              )
              ref.current?.classList.toggle('text-left')
            }}
          >
            <AlignLeftIcon />
            <span className="sr-only">Left Alignment</span>
          </Button>
          <Button
            variant="tertiary"
            className="p-0.25"
            onClick={() => {
              ref.current?.classList.remove(
                'text-left',
                'text-right',
                'text-justify'
              )
              ref.current?.classList.toggle('text-center')
            }}
          >
            <AlignCenterIcon />
            <span className="sr-only">Center Alignment</span>
          </Button>
          <Button
            variant="tertiary"
            className="p-0.25"
            onClick={() => {
              ref.current?.classList.remove(
                'text-left',
                'text-center',
                'text-justify'
              )
              ref.current?.classList.toggle('text-right')
            }}
          >
            <AlignRightIcon />
            <span className="sr-only">Right Alignment</span>
          </Button>
          <Button
            variant="tertiary"
            className="p-0.25"
            onClick={() => {
              ref.current?.classList.remove(
                'text-left',
                'text-center',
                'text-right'
              )
              ref.current?.classList.toggle('text-justify')
            }}
          >
            <AlignJustifiedIcon />
            <span className="sr-only">Justify</span>
          </Button>
        </div>
        <p ref={ref} className="line-clamp-7">
          Streamline Your Projects with Forward's Powerful Management Tools.
          Experience seamless Issue Tracking and Project Management that
          enhances team collaboration and productivity.
        </p>
      </div>
    </BentoCard>
  )
}
