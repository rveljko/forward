import CheckIcon from '@icons/check-icon'
import ChevronDownIcon from '@icons/chevron-down-icon'
import ChevronRightIcon from '@icons/chevron-right-icon'
import { cn } from '@utils/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { motion } from 'motion/react'
import { createContext, useContext, useState } from 'react'
import { Link } from 'react-router'

export const dropdown = cva(
  'bg-dropdown-background inset-ring-section-outline absolute z-997 my-2 space-y-0.5 rounded-sm p-1 inset-ring [--opacity-from:0%] [--opacity-to:100%] [--scale-from:95%] [--scale-to:100%] [--slide-y-from:--spacing(4)] [--slide-y-to:--spacing(0)] [position-anchor:--dropdown] [position-try-fallbacks:flip-inline,flip-block]',
  {
    variants: {
      position: {
        'top-left':
          '[position-area:top_span-left] not-supports-[position-area:top_span-left]:right-0 not-supports-[position-area:top_span-left]:bottom-full',
        'top-center':
          '[position-area:top_center] not-supports-[position-area:top_center]:bottom-full not-supports-[position-area:top_center]:left-1/2 not-supports-[position-area:top_center]:-translate-x-1/2',
        'top-right':
          '[position-area:top_span-right] not-supports-[position-area:top_span-right]:bottom-full not-supports-[position-area:top_span-right]:left-0',
        'bottom-left':
          '[position-area:bottom_span-left] not-supports-[position-area:bottom_span-left]:top-full not-supports-[position-area:bottom_span-left]:right-0',
        'bottom-center':
          '[position-area:bottom_center] not-supports-[position-area:bottom_center]:top-full not-supports-[position-area:bottom_center]:left-1/2 not-supports-[position-area:bottom_center]:-translate-x-1/2',
        'bottom-right':
          '[position-area:bottom_span-right] not-supports-[position-area:bottom_span-right]:top-full not-supports-[position-area:bottom_span-right]:left-0',
      },
    },
    defaultVariants: {
      position: 'bottom-right',
    },
  }
)

type DropdownProps = React.ComponentProps<typeof motion.div> &
  VariantProps<typeof dropdown> & {
    children: React.ReactNode
  }

export default function Dropdown({
  children,
  position,
  className,
  ...props
}: DropdownProps) {
  return (
    <motion.div
      initial={{
        opacity: 'var(--opacity-from)',
        scale: 'var(--scale-from)',
        translateY: 'var(--slide-y-from)',
      }}
      animate={{
        opacity: 'var(--opacity-to)',
        scale: 'var(--scale-to)',
        translateY: 'var(--slide-y-to)',
      }}
      exit={{
        opacity: 'var(--opacity-from)',
        scale: 'var(--scale-from)',
        translateY: 'var(--slide-y-from)',
      }}
      className={cn(dropdown({ position, className }))}
      {...props}
    >
      {children}
    </motion.div>
  )
}

Dropdown.Accordion = Accordion
Dropdown.AccordionItem = AccordionItem
Dropdown.AccordionSummary = AccordionSummary
Dropdown.List = List
Dropdown.Item = Item
Dropdown.Label = Label
Dropdown.Button = Button

type AccordionContextProviderProps = {
  children: React.ReactNode
  defaultActive?: string
}

type AccordionContextType = {
  activeAccordionIndexes: string[]
  toggleItem: (index: string) => void
}

const AccordionContext = createContext<AccordionContextType | null>(null)

function AccordionContextProvider({
  children,
  defaultActive,
}: AccordionContextProviderProps) {
  const [activeAccordionIndexes, setActiveAccordionIndexes] = useState<
    string[]
  >(defaultActive ? [defaultActive] : [])

  function toggleItem(index: string) {
    setActiveAccordionIndexes((prevActiveAccordionIndexes) => {
      if (prevActiveAccordionIndexes?.includes(index)) {
        return [...prevActiveAccordionIndexes].filter(
          (prevActiveAccordionIndex) => prevActiveAccordionIndex !== index
        )
      }
      return [...prevActiveAccordionIndexes, index]
    })
  }

  return (
    <AccordionContext.Provider value={{ activeAccordionIndexes, toggleItem }}>
      {children}
    </AccordionContext.Provider>
  )
}

type AccordionProps = React.ComponentPropsWithoutRef<'ul'> & {
  children: React.ReactNode
  defaultActive?: string
}

function Accordion({ children, defaultActive, ...props }: AccordionProps) {
  return (
    <ul {...props}>
      <AccordionContextProvider defaultActive={defaultActive}>
        {children}
      </AccordionContextProvider>
    </ul>
  )
}

type AccordionItemProps = React.ComponentPropsWithoutRef<'li'> & {
  children: React.ReactNode
  value: string
}

function AccordionItem({
  children,
  value,
  className,
  ...props
}: AccordionItemProps) {
  const { activeAccordionIndexes } = useAccordion()
  const isActive = activeAccordionIndexes.includes(value)

  return (
    <li
      className={cn(
        `overflow-hidden transition-[height] duration-100 ease-in ${isActive ? 'h-auto' : 'h-(--dropdown-accordion-summary-height)'}`,
        className
      )}
      {...props}
    >
      {children}
    </li>
  )
}

type AccordionSummaryProps = React.ComponentPropsWithoutRef<'h3'> & {
  children: React.ReactNode
  valueForItem: string
  icon?: React.JSX.Element
}

function AccordionSummary({
  children,
  valueForItem,
  icon: Icon,
  className,
  ...props
}: AccordionSummaryProps) {
  const { activeAccordionIndexes, toggleItem } = useAccordion()
  const isActive = activeAccordionIndexes.includes(valueForItem)

  return (
    <div
      className={`text-clickable pointer-coarse:active:bg-clickable/5 hover:bg-clickable/10 relative flex items-center justify-between gap-2 overflow-hidden rounded-sm p-1 px-1.5 py-1 text-nowrap active:scale-99 ${isActive ? 'bg-clickable/10' : ''}`}
    >
      <div className="flex items-center gap-2">
        {Icon && <span>{Icon}</span>}
        <h3 className={cn('leading-none', className)} {...props}>
          <button onClick={() => toggleItem(valueForItem)}>
            <span className="absolute inset-0 hover:cursor-pointer"></span>
            {children}
          </button>
        </h3>
      </div>
      <span>{isActive ? <ChevronDownIcon /> : <ChevronRightIcon />}</span>
    </div>
  )
}

function useAccordion() {
  const context = useContext(AccordionContext)

  if (!context)
    throw new Error('useAccordion must be within a AccordionContextProvider')

  return context
}

type ListProps = React.ComponentPropsWithoutRef<'ul'> & {
  children: React.ReactNode
}

function List({ children, ...props }: ListProps) {
  return <ul {...props}>{children}</ul>
}

type ItemProps = React.ComponentPropsWithoutRef<'li'> & {
  children: React.ReactNode
}

function Item({ children, ...props }: ItemProps) {
  return <li {...props}>{children}</li>
}

type LabelProps = React.ComponentPropsWithoutRef<'label'> & {
  children: React.ReactNode
}

function Label({ children, className, ...props }: LabelProps) {
  return (
    <label
      className={cn(
        'text-clickable pointer-coarse:active:bg-clickable/5 hover:bg-clickable/10 flex items-center gap-1 rounded-sm p-1 px-1.5 py-1 text-nowrap hover:cursor-pointer active:scale-99',
        className
      )}
      {...props}
    >
      {children}
    </label>
  )
}

type ButtonBaseProps = {
  children: React.ReactNode
  leftIcon?: React.JSX.Element
  rightIcon?: React.JSX.Element
  isActive?: boolean
}

type ButtonAsAnchorProps = React.ComponentPropsWithoutRef<'a'> & {
  href: string
}

type ButtonAsButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  href?: never
}

export type ButtonProps = ButtonBaseProps &
  (ButtonAsAnchorProps | ButtonAsButtonProps)

export const dropdownButtonClasses =
  'text-clickable hover:bg-clickable/5 pointer-coarse:active:bg-clickable/5 flex w-full items-center gap-1 truncate rounded-xs px-1.5 py-1 hover:cursor-pointer active:scale-99'

function Button({
  children,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  isActive,
  className,
  ...props
}: ButtonProps) {
  const buttonClasses = cn(dropdownButtonClasses, className)

  if ('href' in props && props.href !== undefined) {
    return (
      <Link to={props.href} className={buttonClasses} {...props}>
        {LeftIcon && <span>{LeftIcon}</span>}
        <span className="overflow-hidden text-ellipsis">{children}</span>
        {RightIcon && <span>{RightIcon}</span>}
        {isActive && (
          <span className="text-success-500 ml-auto">
            <CheckIcon />
          </span>
        )}
      </Link>
    )
  }

  return (
    <button className={buttonClasses} type="button" {...props}>
      {LeftIcon && <span>{LeftIcon}</span>}
      <span className="overflow-hidden text-ellipsis">{children}</span>
      {RightIcon && <span>{RightIcon}</span>}
      {isActive && (
        <span className="text-success-500 ml-auto">
          <CheckIcon />
        </span>
      )}
    </button>
  )
}
