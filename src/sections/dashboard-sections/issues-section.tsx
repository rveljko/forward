import IssuesListBoard from '@dashboard-components/issues-list-board'
import ProjectInformationModalButton from '@dashboard-components/project-information-modal-button'
import Divider from '@dashboard-components/ui/divider'
import ArrowsSortIcon from '@icons/arrows-sort-icon'
import FilterIcon from '@icons/filter-icon'
import LayoutSidebarRightIcon from '@icons/layout-sidebar-right-icon'
import Button from '@ui/button'

export default function IssuesSection() {
  return (
    <section>
      <header className="flex items-center justify-between p-4">
        <h1>Issues</h1>
        <ProjectInformationModalButton
          variant="tertiary"
          className="group p-0.5"
        >
          <LayoutSidebarRightIcon className="[--clip-path:_polygon(0_0,_100%_0,_100%_100%,_0_100%)] group-hover:[&_rect]:[clip-path:var(--clip-path)] pointer-coarse:group-active:[&_rect]:[clip-path:var(--clip-path)]" />
          <span className="sr-only">Show project information</span>
        </ProjectInformationModalButton>
      </header>
      <Divider />
      <div className="flex items-center gap-2 p-4">
        <Button variant="secondary" size="small" leftIcon={<FilterIcon />}>
          Filters
        </Button>
        <Button variant="secondary" size="small" leftIcon={<ArrowsSortIcon />}>
          Sort
        </Button>
      </div>
      <Divider />
      <IssuesListBoard />
    </section>
  )
}
