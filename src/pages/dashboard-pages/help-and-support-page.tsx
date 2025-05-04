import HelpAndSupportHeader from '@dashboard-components/help-and-support-header'
import Divider from '@dashboard-components/ui/divider'
import ConnectWithUs from '@dashboard-sections/connect-with-us'
import FaqSection from '@dashboard-sections/faq-section'
import SocialMediasSection from '@dashboard-sections/social-medias-section'
import { TITLE_PREFIX } from '@utils/constants'

export default function HelpAndSupportPage() {
  return (
    <div className="w-full max-w-200 space-y-4 p-4">
      <title>{`${TITLE_PREFIX}Help and Support`}</title>
      <HelpAndSupportHeader />
      <Divider />
      <ConnectWithUs />
      <Divider />
      <SocialMediasSection />
      <Divider />
      <FaqSection />
    </div>
  )
}
