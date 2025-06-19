import CheckIcon from '@icons/check-icon'
import ChevronDownIcon from '@icons/chevron-down-icon'
import ChevronRightIcon from '@icons/chevron-right-icon'
import { cn } from '@utils/utils'
import { createContext, useContext, useState } from 'react'
import { Link } from 'react-router'

type DropdownProps = React.ComponentPropsWithoutRef<'div'> & {
  children: React.ReactNode
}

export default function Dropdown({
  children,
  className,
  ...props
}: DropdownProps) {
  return (
    <div
      className={cn(
        'bg-dropdown-background inset-ring-section-outline space-y-0.5 rounded-sm p-1 inset-ring',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

Dropdown.Accordion = Accordion
Dropdown.AccordionItem = AccordionItem
Dropdown.AccordionSummary = AccordionSummary
Dropdown.List = List
Dropdown.Item = Item
Dropdown.Label = Label
Dropdown.Checkbox = Checkbox
Dropdown.RadioButton = RadioButton
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
        <h3 className={cn('leading-[1]', className)} {...props}>
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

type CheckboxProps = React.ComponentPropsWithoutRef<'input'>

function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      className={cn(
        "before:inset-ring-clickable/20 hover:before:inset-ring-brand-500 pointer-coarse:active:before:inset-ring-brand-500 checked:before:bg-brand-500 relative size-3.5 appearance-none before:absolute before:flex before:size-full before:items-center before:justify-center before:rounded-xs before:text-xs before:text-white before:inset-ring checked:before:inset-ring-0 checked:before:content-['✓']",
        className
      )}
      {...props}
    />
  )
}

type RadioButtonProps = React.ComponentPropsWithoutRef<'input'>

function RadioButton({ className, ...props }: RadioButtonProps) {
  return (
    <input
      type="radio"
      className={cn(
        'before:inset-ring-clickable/20 pointer-coarse:active:before:inset-ring-brand-500 hover:before:inset-ring-brand-500 checked:before:inset-ring-brand-500 relative size-3.5 appearance-none before:absolute before:size-full before:rounded-full before:inset-ring checked:before:inset-ring-4',
        className
      )}
      {...props}
    />
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
