import Toaster from '@components/toaster'
import Sidebar from '@dashboard-components/sidebar'
import IssuesSection from '@dashboard-sections/issues-section'
import ChevronRightIcon from '@icons/chevron-right-icon'
import EyeIcon from '@icons/eye-icon'
import Section from '@landing-page-sections/section'
import { usePreferences } from '@services/contexts/preferences-context'
import Button from '@ui/button'
import { motion } from 'motion/react'

export default function HeroSection() {
  const { preferences, getBorderRadius } = usePreferences()

  return (
    <Section>
      <Section.Heading1 className="text-center">
        Streamline Your Projects with Forward's Powerful Management Tools
      </Section.Heading1>
      <Section.Paragraph>
        Experience seamless issue tracking and project management that enhances
        team collaboration and productivity
      </Section.Paragraph>
      <motion.div
        initial={{
          opacity: 'var(--opacity-from)',
          translateY: 'var(--slide-y-from)',
        }}
        whileInView={{
          opacity: 'var(--opacity-to)',
          translateY: 'var(--slide-y-to)',
        }}
        transition={{ ease: 'easeInOut', delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-16 flex flex-wrap items-center justify-center gap-2"
      >
        <Button
          href="/dashboard/issues"
          variant="primary"
          size="large"
          rightIcon={<ChevronRightIcon />}
        >
          Get Started Now
        </Button>
        <Button
          href="/dashboard/issues"
          variant="tertiary"
          size="large"
          rightIcon={<EyeIcon />}
        >
          See how it works
        </Button>
      </motion.div>
      <motion.div
        initial={{
          opacity: 'var(--opacity-from)',
        }}
        whileInView={{
          opacity: 'var(--opacity-to)',
        }}
        transition={{ ease: 'easeInOut', delay: 0.3 }}
        viewport={{ once: true }}
        className="border-section-outline relative isolate overflow-hidden rounded-4xl border p-4 after:absolute after:inset-0 after:-z-1 after:backdrop-blur-3xl"
      >
        <div
          id="dashboard-layout"
          className={`bg-background-color border-section-outline relative flex h-[80vh] overflow-hidden rounded-2xl border md:h-200 ${preferences.isRightSideSidebar ? 'flex-row-reverse' : 'flex-row'}`}
        >
          <Toaster />
          <div
            className={`animate-scale-fade-in origin-center [animation-delay:300ms] ${preferences.sidebarStyle === 'floating' ? `h-full p-4 ${preferences.isRightSideSidebar ? 'pl-0' : 'pr-0'}` : ''}`}
          >
            <Sidebar />
          </div>
          <div
            className={`animate-scale-fade-in w-full p-4 [animation-delay:300ms] ${preferences.isRightSideSidebar ? 'origin-right' : 'origin-left'} ${preferences.sidebarStyle === 'transparent' ? (preferences.isRightSideSidebar ? 'pr-0' : 'pl-0') : ''}`}
          >
            <div
              style={{
                borderRadius: getBorderRadius(),
              }}
              className="border-section-outline bg-section-background-color h-full overflow-y-auto border"
            >
              <IssuesSection />
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
