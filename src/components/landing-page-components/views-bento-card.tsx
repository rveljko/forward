import BentoCard from '@landing-page-components/ui/bento-card'
import { usePreferences } from '@services/contexts/preferences-context'
import { IMAGE_PATH } from '@utils/constants'

export default function ViewsBentoCard() {
  const { isLightTheme } = usePreferences()

  return (
    <BentoCard className="group relative sm:min-h-118">
      <div className="h-full">
        <BentoCard.Heading>Select Your Ideal View</BentoCard.Heading>
        <BentoCard.Paragraph>
          Switch between Kanban and List views to manage tasks in your favorite
          layout
        </BentoCard.Paragraph>
        <div className="absolute size-full mask-linear-from-transparent mask-linear-to-black">
          <img
            src={`${IMAGE_PATH}view-list-${isLightTheme ? 'light' : 'dark'}.png`}
            alt="List view skeleton"
            className="border-section-outline absolute translate-y-12 rounded-lg border transition-transform duration-300 group-hover:z-2 group-hover:translate-x-18 group-hover:translate-y-0"
          />
          <img
            src={`${IMAGE_PATH}view-kanban-${isLightTheme ? 'light' : 'dark'}.png`}
            alt="Kanban view skeleton"
            className="border-section-outline absolute translate-x-18 rounded-lg border transition-transform duration-300 group-hover:z-1 group-hover:translate-x-0 group-hover:translate-y-12"
          />
        </div>
      </div>
    </BentoCard>
  )
}
