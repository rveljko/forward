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
      {navigationLinks.map(({ id, name, path, icon: Icon }) => (
        <li key={id}>
          <NavigationLink
            to={path}
            icon={Icon}
            showText={showNavigationLinkText}
          >
            {name}
          </NavigationLink>
        </li>
      ))}
    </ul>
  )
}
