import Tooltip, { tooltip } from '@dashboard-components/ui/tooltip'
import Button, { ButtonProps } from '@ui/button'
import { VariantProps } from 'class-variance-authority'
import { useState } from 'react'

type TooltipButtonProps = ButtonProps &
  VariantProps<typeof tooltip> & {
    tooltip: React.JSX.Element
  }

export default function TooltipButton({
  position,
  tooltip: TooltipContent,
  ...props
}: TooltipButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="[anchor-scope:--button] not-supports-[anchor-name:--dropdown]:relative">
      <Button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      />
      {isHovered && <Tooltip position={position}>{TooltipContent}</Tooltip>}
    </div>
  )
}
