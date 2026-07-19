import HelpAndSupportHeaderSkeleton from '@dashboard-components/skeletons/help-and-support-header-skeleton'
import Divider from '@dashboard-components/ui/divider'
import ConnectWithUsSectionSkeleton from '@dashboard-sections/skeletons/connect-with-us-section-skeleton'
import FaqSectionSkeleton from '@dashboard-sections/skeletons/faq-section-skeleton'
import SocialMediasSectionSkeleton from '@dashboard-sections/skeletons/social-medias-section-skeleton'
import { TITLE_PREFIX } from '@utils/constants'

export default function HelpAndSupportPageSkeleton() {
  return (
    <div className="w-full max-w-200 space-y-4 p-4">
      <title>{`${TITLE_PREFIX}Help and Support`}</title>
      <HelpAndSupportHeaderSkeleton />
      <Divider />
      <ConnectWithUsSectionSkeleton />
      <Divider />
      <SocialMediasSectionSkeleton />
      <Divider />
      <FaqSectionSkeleton />
    </div>
  )
}
