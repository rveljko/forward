import Tooltip, { tooltip } from '@dashboard-components/ui/tooltip'
import Button, { ButtonProps } from '@ui/button'
import { cn } from '@utils/utils'
import { VariantProps } from 'class-variance-authority'
import { useState } from 'react'

type TooltipButtonProps = ButtonProps &
  VariantProps<typeof tooltip> & {
    tooltip: React.JSX.Element
  }

export default function TooltipButton({
  position,
  tooltip: TooltipContent,
  className,
  ...props
}: TooltipButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="anchor-scope/tooltip">
      <Button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn('anchor/tooltip', className)}
        {...props}
      />
      {isHovered && <Tooltip position={position}>{TooltipContent}</Tooltip>}
    </div>
  )
}
