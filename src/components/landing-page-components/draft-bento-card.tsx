import BentoCard from '@landing-page-components/ui/bento-card'

export default function DraftBentoCard() {
  return (
    <BentoCard>
      <BentoCard.Heading>Capture Ideas Quickly</BentoCard.Heading>
      <BentoCard.Paragraph>
        Easily jot down thoughts or ideas in drafts to ensure nothing is
        forgotten
      </BentoCard.Paragraph>
      <div className="mt-auto">
        <input
          type="text"
          placeholder="Write something..."
          className="text-clickable mb-2 w-full text-3xl font-semibold placeholder:text-neutral-400"
        />
        <textarea
          name="description"
          placeholder="Use this space to capture any ideas, reminders, or notes that you don't want to forget"
          className="text-clickable w-full resize-none placeholder:text-neutral-400"
          rows={3}
        />
      </div>
    </BentoCard>
  )
}
