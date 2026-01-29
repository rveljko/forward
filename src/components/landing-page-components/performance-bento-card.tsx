import BentoCard from '@landing-page-components/ui/bento-card'

export default function PerformanceBentoCard() {
  return (
    <BentoCard>
      <BentoCard.Heading>Rapid Peak Performance</BentoCard.Heading>
      <BentoCard.Paragraph>
        Experience rapid load times and smooth interactions to keep your
        workflow uninterrupted
      </BentoCard.Paragraph>
      <div className="after:border-clickable/10 to-clickable/10 relative mx-auto mt-auto aspect-2/1 w-full max-w-90 rounded-t-full bg-linear-0 from-transparent after:absolute after:inset-0 after:rounded-t-full after:border after:border-b-0">
        <div className="animate-speedometer-hand absolute bottom-0 left-0 h-0.25 w-1/2 origin-bottom-right pl-1">
          <div className="bg-clickable size-full rounded-full" />
        </div>
        <div className="absolute bottom-0 left-0 h-0.25 w-1/2 pl-1">
          <div className="bg-clickable/20 h-full w-8 rounded-full" />
        </div>
        <div className="absolute bottom-0 left-0 h-0.25 w-1/2 origin-bottom-right rotate-15 pl-1">
          <div className="bg-clickable/20 h-full w-5 rounded-full" />
        </div>
        <div className="absolute bottom-0 left-0 h-0.25 w-1/2 origin-bottom-right rotate-30 pl-1">
          <div className="bg-clickable/20 h-full w-8 rounded-full" />
        </div>
        <div className="absolute bottom-0 left-0 h-0.25 w-1/2 origin-bottom-right rotate-45 pl-1">
          <div className="bg-clickable/20 h-full w-5 rounded-full" />
        </div>
        <div className="absolute bottom-0 left-0 h-0.25 w-1/2 origin-bottom-right rotate-60 pl-1">
          <div className="bg-clickable/20 h-full w-8 rounded-full" />
        </div>
        <div className="absolute bottom-0 left-0 h-0.25 w-1/2 origin-bottom-right rotate-75 pl-1">
          <div className="bg-clickable/20 h-full w-5 rounded-full" />
        </div>
        <div className="absolute bottom-0 left-0 h-0.25 w-1/2 origin-bottom-right rotate-90 pl-1">
          <div className="bg-clickable/20 h-full w-8 rounded-full" />
        </div>
        <div className="absolute bottom-0 left-0 h-0.25 w-1/2 origin-bottom-right rotate-105 pl-1">
          <div className="bg-clickable/20 h-full w-5 rounded-full" />
        </div>
        <div className="absolute bottom-0 left-0 h-0.25 w-1/2 origin-bottom-right rotate-120 pl-1">
          <div className="bg-clickable/20 h-full w-8 rounded-full" />
        </div>
        <div className="absolute bottom-0 left-0 h-0.25 w-1/2 origin-bottom-right rotate-135 pl-1">
          <div className="bg-clickable/20 h-full w-5 rounded-full" />
        </div>
        <div className="absolute bottom-0 left-0 h-0.25 w-1/2 origin-bottom-right rotate-150 pl-1">
          <div className="bg-clickable/20 h-full w-8 rounded-full" />
        </div>
        <div className="absolute bottom-0 left-0 h-0.25 w-1/2 origin-bottom-right rotate-165 pl-1">
          <div className="bg-clickable/20 h-full w-5 rounded-full" />
        </div>
        <div className="absolute right-0 bottom-0 h-0.25 w-1/2 rotate-180 pl-1">
          <div className="bg-clickable/20 h-full w-8 rounded-full" />
        </div>
      </div>
    </BentoCard>
  )
}
