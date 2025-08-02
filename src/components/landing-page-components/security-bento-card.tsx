import KeyIcon from '@icons/key-icon'
import ShieldIcon from '@icons/shield-icon'
import BentoCard from '@landing-page-components/ui/bento-card'

export default function SecurityBentoCard() {
  return (
    <BentoCard>
      <BentoCard.Heading>Robust Data Protection</BentoCard.Heading>
      <BentoCard.Paragraph>
        Keep your projects and data safe with advanced security and encryption
      </BentoCard.Paragraph>
      <div className="group relative size-full">
        <div className="border-section-outline absolute z-2 flex h-full w-1/3 items-center justify-end overflow-hidden rounded-md border transition-all duration-300 group-hover:w-1/2 group-hover:rounded-r-none group-hover:border-r-0 [&_svg]:size-16 [&_svg]:translate-x-1/2">
          <ShieldIcon />
        </div>
        <span className="[&_svg]:text-clickable absolute top-1/2 left-1/2 -translate-1/2 animate-bounce transition-opacity duration-300 group-hover:opacity-0 [&_svg]:size-8">
          <KeyIcon />
        </span>
        <div className="border-section-outline absolute right-0 z-2 flex h-full w-1/3 items-center justify-start overflow-hidden rounded-md border transition-all duration-300 group-hover:w-1/2 group-hover:rounded-l-none group-hover:border-l-0 [&_svg]:size-16 [&_svg]:-translate-x-1/2">
          <ShieldIcon />
        </div>
      </div>
    </BentoCard>
  )
}
