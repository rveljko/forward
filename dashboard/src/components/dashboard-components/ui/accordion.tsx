import Divider from '@dashboard-components/ui/divider'
import ChevronDownIcon from '@icons/chevron-down-icon'
import ChevronRightIcon from '@icons/chevron-right-icon'
import { createContext, useContext, useState } from 'react'

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

function useAccordion() {
  const context = useContext(AccordionContext)

  if (!context) {
    throw new Error('useAccordion must be within a AccordionContextProvider')
  }

  return context
}

type AccordionProps = React.ComponentPropsWithoutRef<'ul'> & {
  children: React.ReactNode
  defaultActive?: string
}

export default function Accordion({
  children,
  defaultActive,
  ...props
}: AccordionProps) {
  return (
    <ul {...props}>
      <AccordionContextProvider defaultActive={defaultActive}>
        {children}
      </AccordionContextProvider>
    </ul>
  )
}

Accordion.Item = Item
Accordion.Summary = Summary
Accordion.Details = Details

type ItemProps = React.ComponentPropsWithoutRef<'li'> & {
  children: React.ReactNode
  value: string
}

function Item({ children, value, ...props }: ItemProps) {
  const { activeAccordionIndexes } = useAccordion()
  const isActive = activeAccordionIndexes.includes(value)

  return (
    <div className="w-full max-w-100">
      <li
        className={`overflow-hidden transition-[height] duration-100 ease-in ${isActive ? 'h-auto' : 'h-(--accordion-summary-height)'}`}
        {...props}
      >
        {children}
      </li>
      <Divider />
    </div>
  )
}

type SummaryProps = React.ComponentPropsWithoutRef<'h3'> & {
  children: React.ReactNode
  valueForItem: string
}

function Summary({ children, valueForItem, ...props }: SummaryProps) {
  const { activeAccordionIndexes, toggleItem } = useAccordion()
  const isActive = activeAccordionIndexes.includes(valueForItem)

  return (
    <button
      className="flex h-(--accordion-summary-height) w-full cursor-pointer items-center justify-between py-2 select-text"
      onClick={() => toggleItem(valueForItem)}
    >
      <h3 className="text-clickable w-full text-left leading-none" {...props}>
        {children}
      </h3>
      <span className="text-clickable">
        {isActive ? <ChevronDownIcon /> : <ChevronRightIcon />}
      </span>
    </button>
  )
}

type DetailsProps = React.ComponentPropsWithoutRef<'p'> & {
  children: React.ReactNode
}

function Details({ children, ...props }: DetailsProps) {
  return (
    <p className="mb-2 text-left" {...props}>
      {children}
    </p>
  )
}
