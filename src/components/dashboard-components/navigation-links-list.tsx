import NavigationLink from '@dashboard-components/navigation-link'
import { NavigationLink as NavigationLinkType } from '@utils/types'
import { cn } from '@utils/utils'

type NavigationLinksListProps = React.ComponentPropsWithoutRef<'ul'> & {
  navigationLinks: NavigationLinkType[]
  showNavigationLinkText?: boolean
}

export default function NavigationLinksList({
  navigationLinks,
  showNavigationLinkText,
  className,
  ...props
}: NavigationLinksListProps) {
  return (
    <ul className={cn('space-y-1', className)} {...props}>
      {navigationLinks.map((navigationLink) => (
        <li key={navigationLink.id}>
          <NavigationLink
            navigationLink={navigationLink}
            showText={showNavigationLinkText}
          />
        </li>
      ))}
    </ul>
  )
}
