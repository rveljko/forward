import Keyboard from '@landing-page-components/keyboard'
import BentoCard from '@landing-page-components/ui/bento-card'

export default function KeyboardShortcutsBentoCard() {
  return (
    <BentoCard>
      <div className="relative h-full">
        <BentoCard.Heading>Quick Action Access</BentoCard.Heading>
        <BentoCard.Paragraph>
          Utilize keyboard shortcuts to perform actions quickly without using
          your mouse
        </BentoCard.Paragraph>
        <div className="absolute top-0 translate-y-1/2 rotate-4 md:translate-x-4/10">
          <Keyboard />
        </div>
      </div>
    </BentoCard>
  )
}
