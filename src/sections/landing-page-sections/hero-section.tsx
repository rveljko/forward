import Sidebar from '@dashboard-components/sidebar'
import IssuesSection from '@dashboard-sections/issues-section'
import ChevronRightIcon from '@icons/chevron-right-icon'
import EyeIcon from '@icons/eye-icon'
import Container from '@landing-page-components/container'
import { usePreferences } from '@services/contexts/preferences-context'
import Button from '@ui/button'
import { motion } from 'motion/react'
import { Toaster } from 'sonner'

export default function HeroSection() {
  const { preferences, getRemCornerRoundness } = usePreferences()

  return (
    <section className="md:py:25 bg-(image:--background) py-16 [--background:radial-gradient(hsl(from_var(--color-clickable)_h_s_l_/_5%),var(--color-landing-page-background-color))] [--opacity-from:0%] [--opacity-to:100%] [--slide-y-from:--spacing(-4)] [--slide-y-to:--spacing(0)]">
      <Container>
        <motion.h1
          initial={{
            opacity: 'var(--opacity-from)',
            translateY: 'var(--slide-y-from)',
          }}
          whileInView={{
            opacity: 'var(--opacity-to)',
            translateY: 'var(--slide-y-to)',
          }}
          transition={{ ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="mb-4 text-center text-4xl font-bold text-balance md:text-5xl"
        >
          Streamline Your Projects with Forward's Powerful Management Tools
        </motion.h1>
        <motion.p
          initial={{
            opacity: 'var(--opacity-from)',
            translateY: 'var(--slide-y-from)',
          }}
          whileInView={{
            opacity: 'var(--opacity-to)',
            translateY: 'var(--slide-y-to)',
          }}
          transition={{ ease: 'easeInOut', delay: 0.1 }}
          viewport={{ once: true }}
          className="mx-auto mb-8 max-w-120 text-center text-balance"
        >
          Experience seamless issue tracking and project management that
          enhances team collaboration and productivity
        </motion.p>
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
            translateY: 'var(--slide-y-from)',
          }}
          whileInView={{
            opacity: 'var(--opacity-to)',
            translateY: 'var(--slide-y-to)',
          }}
          transition={{ ease: 'easeInOut', delay: 0.3 }}
          viewport={{ once: true }}
          className="border-section-outline rounded-4xl border p-4 backdrop-blur-3xl"
        >
          <div
            id="dashboard-layout"
            className="bg-background-color border-section-outline relative flex h-[80vh] overflow-hidden rounded-2xl border md:h-200"
          >
            <Toaster
              position="top-right"
              offset={16}
              style={{ fontFamily: 'inherit' }}
              toastOptions={{ classNames: { toast: 'w-90' } }}
            />
            <div className="animate-scale-fade-in origin-center [animation-delay:300ms]">
              <Sidebar />
            </div>
            <div className="animate-scale-fade-in w-full origin-left p-4 pl-0 [animation-delay:300ms]">
              <div
                style={{
                  borderRadius: preferences.areRoundedCorners
                    ? getRemCornerRoundness()
                    : 0,
                }}
                className="border-section-outline bg-section-background-color h-full overflow-y-auto border"
              >
                <IssuesSection />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
