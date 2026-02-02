import HelpAndSupportHeaderSkeleton from '@dashboard-components/skeletons/help-and-support-header-skeleton'
import Skeleton from '@dashboard-components/ui/skeleton'
import ConnectWithUsSectionSkeleton from '@dashboard-sections/skeletons/connect-with-us-section-skeleton'
import FaqSectionSkeleton from '@dashboard-sections/skeletons/faq-section-skeleton'
import SocialMediasSectionSkeleton from '@dashboard-sections/skeletons/social-medias-section-skeleton'
import { TITLE_PREFIX } from '@utils/constants'

export default function HelpAndSupportPageSkeleton() {
  return (
    <div className="w-full max-w-200 space-y-4 p-4">
      <title>{`${TITLE_PREFIX}Help and Support`}</title>
      <HelpAndSupportHeaderSkeleton />
      <Skeleton className="h-0.5 rounded-none" />
      <ConnectWithUsSectionSkeleton />
      <Skeleton className="h-0.5 rounded-none" />
      <SocialMediasSectionSkeleton />
      <Skeleton className="h-0.5 rounded-none" />
      <FaqSectionSkeleton />
    </div>
  )
}
