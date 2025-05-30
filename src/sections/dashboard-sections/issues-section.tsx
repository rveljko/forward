import Divider from '@dashboard-components/ui/divider'
import SidebarClosedIcon from '@icons/sidebar-closed-icon'
import Button from '@ui/button'

export default function IssuesSection() {
  return (
    <section>
      <header className="flex items-center justify-between p-4">
        <h1>Issues</h1>
        <Button variant="tertiary" className="p-0.5">
          <SidebarClosedIcon />
        </Button>
      </header>
      <Divider />
    </section>
  )
}
