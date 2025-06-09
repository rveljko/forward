import Divider from '@dashboard-components/ui/divider'
import InformationList from '@dashboard-components/ui/information-list'
import ModalCard from '@dashboard-components/ui/modal-card'
import CalendarIcon from '@icons/calendar-icon'
import CircleEmptyIcon from '@icons/circle-empty-icon'
import CloseIcon from '@icons/close-icon'
import PriorityLowIcon from '@icons/priority-low-icon'
import TagIcon from '@icons/tag-icon'
import UserIcon from '@icons/user-icon'
import { useIssues } from '@services/contexts/issues-context'
import { useUserInformation } from '@services/contexts/user-information-context'
import Button from '@ui/button'
import {
  dayMonthShortFormatter,
  iso8601DateFormatter,
} from '@utils/date-formatters'
import { Issue } from '@utils/types'

type IssueInformationModalProps = React.ComponentPropsWithoutRef<'article'> & {
  issue: Issue
  closeModal: () => void
}

export default function IssueInformationModal({
  issue: { title, description, status, priority, tag, createdAt },
  closeModal,
  ...props
}: IssueInformationModalProps) {
  const {
    userInformation: { firstName, lastName, profilePictureUrl },
  } = useUserInformation()
  const { getIssueStatus, getIssuePriority, getIssueTag } = useIssues()
  const { name: statusName, icon: StatusIcon } = getIssueStatus(status)
  const { name: priorityName, icon: PriorityIcon } = getIssuePriority(priority)
  const { name: tagName, icon: IssueTagIcon } = getIssueTag(tag)

  return (
    <ModalCard {...props}>
      <header className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <div className="inset-ring-section-outline w-max rounded-lg p-2 inset-ring">
            <span className="text-clickable">
              <StatusIcon />
            </span>
          </div>
          <Button variant="tertiary" className="p-2" onClick={closeModal}>
            <CloseIcon />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <h3 className="text-2xl font-semibold">{title}</h3>
        {description && <p className="line-clamp-2">{description}</p>}
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
              <time dateTime={iso8601DateFormatter(createdAt)}>
                {dayMonthShortFormatter(createdAt)}
              </time>
            </InformationList.Value>
          </InformationList.Item>
          <InformationList.Item>
            <InformationList.Label icon={<CircleEmptyIcon />}>
              Status
            </InformationList.Label>
            <InformationList.Value icon={<StatusIcon />}>
              {statusName}
            </InformationList.Value>
          </InformationList.Item>
          <InformationList.Item>
            <InformationList.Label icon={<PriorityLowIcon />}>
              Priority
            </InformationList.Label>
            <InformationList.Value icon={<PriorityIcon />}>
              {priorityName}
            </InformationList.Value>
          </InformationList.Item>
          <InformationList.Item>
            <InformationList.Label icon={<TagIcon />}>
              Tag
            </InformationList.Label>
            <InformationList.Value icon={<IssueTagIcon />}>
              {tagName}
            </InformationList.Value>
          </InformationList.Item>
        </InformationList>
      </div>
    </ModalCard>
  )
}
