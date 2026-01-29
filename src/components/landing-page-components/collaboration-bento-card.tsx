import BentoCard from '@landing-page-components/ui/bento-card'

export default function CollaborationBentoCard() {
  return (
    <BentoCard>
      <div className="relative size-full">
        <BentoCard.Heading>Effortless Collaboration</BentoCard.Heading>
        <BentoCard.Paragraph>
          Work together seamlessly using integrated tools designed to keep
          everyone aligned and productive
        </BentoCard.Paragraph>
        <div className="absolute max-md:bottom-0 max-md:left-1/2 max-md:w-full max-md:-translate-x-1/2 md:top-1/2 md:right-0 md:-translate-y-1/2">
          <div className="bg-clickable/10 relative mx-auto w-full max-w-44 rounded-md p-2 md:max-w-lg">
            <div className="border-clickable/20 absolute top-0 left-0 size-4 rounded-tl-md border-t border-l" />
            <div className="border-clickable/20 absolute top-0 right-0 size-4 rounded-tr-md border-t border-r" />
            <div className="border-clickable/20 absolute bottom-0 left-0 size-4 rounded-bl-md border-b border-l" />
            <div className="border-clickable/20 absolute right-0 bottom-0 size-4 rounded-br-md border-r border-b" />
            <div className="animate-qr-code-scanner-line absolute top-0 left-0 size-full p-0.25">
              <div className="from-brand-500/40 h-4 w-full bg-linear-0 to-transparent" />
              <div className="bg-brand-500 h-0.25 w-full" />
              <div className="to-brand-500/40 h-4 w-full bg-linear-0 from-transparent" />
            </div>
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?data=${window.location.href}dashboard/issues&size=256x256`}
              alt="QR code"
            />
          </div>
        </div>
      </div>
    </BentoCard>
  )
}
