import Container from '@landing-page-components/container'
import { cn } from '@utils/utils'
import { motion } from 'motion/react'
import React from 'react'

type SectionProps = React.ComponentPropsWithoutRef<'section'> & {
  children: React.ReactNode
}

export default function Section({
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        'md:py:25 bg-(image:--landing-page-section-background) py-16 [--opacity-from:0%] [--opacity-to:100%] [--slide-y-from:--spacing(-4)] [--slide-y-to:--spacing(0)]',
        className
      )}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  )
}

Section.Paragraph = Paragraph
Section.Heading = Heading
Section.Grid = Grid
Section.CardAnimator = CardAnimator

type HeadingProps = React.ComponentProps<typeof motion.h2> & {
  children: React.ReactNode
}

function Heading({ children, className, ...props }: HeadingProps) {
  return (
    <motion.h2
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
      className={cn(
        'mx-auto mb-4 max-w-130 text-center text-3xl font-bold text-balance md:text-4xl',
        className
      )}
      {...props}
    >
      {children}
    </motion.h2>
  )
}

type ParagraphProps = React.ComponentProps<typeof motion.p> & {
  children: React.ReactNode
}

function Paragraph({ children, className, ...props }: ParagraphProps) {
  return (
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
      className={cn(
        'mx-auto mb-8 max-w-120 text-center text-balance',
        className
      )}
      {...props}
    >
      {children}
    </motion.p>
  )
}

type GridProps = React.ComponentPropsWithoutRef<'div'> & {
  children: React.ReactNode
}

function Grid({ children, className, ...props }: GridProps) {
  return (
    <div
      className={cn('mb-8 grid grid-cols-1 gap-5 lg:grid-cols-3', className)}
      {...props}
    >
      {children}
    </div>
  )
}

type CardAnimatorProps = React.ComponentProps<typeof motion.div> & {
  children: React.ReactNode
  delay?: number
}

function CardAnimator({ children, delay, ...props }: CardAnimatorProps) {
  return (
    <motion.div
      initial={{
        opacity: 'var(--opacity-from)',
        translateY: 'var(--slide-y-from)',
      }}
      whileInView={{
        opacity: 'var(--opacity-to)',
        translateY: 'var(--slide-y-to)',
      }}
      transition={{ ease: 'easeInOut', delay }}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
