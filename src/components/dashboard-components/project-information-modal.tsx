import Divider from '@dashboard-components/ui/divider'
import InformationList from '@dashboard-components/ui/information-list'
import { issueStatuses } from '@data/issue-statuses'
import CalendarIcon from '@icons/calendar-icon'
import CloseIcon from '@icons/close-icon'
import FolderIcon from '@icons/folder-icon'
import PlanetIcon from '@icons/planet-icon'
import UserIcon from '@icons/user-icon'
import { useIssues } from '@services/contexts/issues-context'
import { useUserInformation } from '@services/contexts/user-information-context'
import Button from '@ui/button'
import {
  dayMonthShortFormatter,
  iso8601DateFormatter,
} from '@utils/date-formatters'
import { generateDateInPast } from '@utils/date-generators'
import { cn } from '@utils/utils'

type ProjectInformationModalProps =
  React.ComponentPropsWithoutRef<'article'> & {
    closeModal: () => void
  }

export default function ProjectInformationModal({
  closeModal,
  className,
  ...props
}: ProjectInformationModalProps) {
  const {
    userInformation: { firstName, lastName, profilePictureUrl },
  } = useUserInformation()
  const { issues, getIssuesByStatus } = useIssues()

  return (
    <article
      className={cn(
        'bg-modal-background border-section-outline w-full rounded-2xl border',
        className
      )}
      {...props}
    >
      <header className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <div className="inset-ring-section-outline w-max rounded-lg p-2 inset-ring">
            <span className="text-clickable">
              <PlanetIcon />
            </span>
          </div>
          <Button variant="tertiary" className="p-2" onClick={closeModal}>
            <CloseIcon />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <h3 className="text-2xl font-semibold">Planet Garden</h3>
        <p className="line-clamp-2 text-balance">
          Planet Garden is a web based SaaS for Issue Tracking and Project
          Management
        </p>
      </header>
      <Divider />
      <div className="p-4">
        <h3 className="mb-2">Properties</h3>
        <InformationList>
          <InformationList.Item>
            <InformationList.Label icon={<UserIcon />}>
              Author
            </InformationList.Label>
            <InformationList.Value
              icon={
                <div className="size-5 overflow-hidden rounded-full bg-neutral-700">
                  <img
                    src={profilePictureUrl}
                    alt={`${firstName} ${lastName}`}
                    className="size-full object-cover"
                  />
                </div>
              }
            >
              {`${firstName} ${lastName}`}
            </InformationList.Value>
          </InformationList.Item>
          <InformationList.Item>
            <InformationList.Label icon={<CalendarIcon />}>
              Started
            </InformationList.Label>
            <InformationList.Value>
              <time dateTime={iso8601DateFormatter(generateDateInPast(8))}>
                {dayMonthShortFormatter(generateDateInPast(8))}
              </time>
            </InformationList.Value>
          </InformationList.Item>
          {issueStatuses.map(({ id, name, label, icon: Icon }) => (
            <InformationList.Item key={id}>
              <InformationList.Label icon={<Icon />}>
                {name}
              </InformationList.Label>
              <InformationList.Value>
                {getIssuesByStatus(label).length}
              </InformationList.Value>
            </InformationList.Item>
          ))}
          <InformationList.Item>
            <InformationList.Label icon={<FolderIcon />}>
              Total Issues
            </InformationList.Label>
            <InformationList.Value>{issues.length}</InformationList.Value>
          </InformationList.Item>
        </InformationList>
      </div>
    </article>
  )
}
