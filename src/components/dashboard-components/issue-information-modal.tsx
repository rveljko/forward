import Divider from '@dashboard-components/ui/divider'
import InformationList from '@dashboard-components/ui/information-list'
import ModalCard from '@dashboard-components/ui/modal-card'
import CalendarIcon from '@icons/calendar-icon'
import CheckIcon from '@icons/check-icon'
import CloseIcon from '@icons/close-icon'
import EditIcon from '@icons/edit-icon'
import PriorityIcon from '@icons/priority-icon'
import StatusIcon from '@icons/status-icon'
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
import { useState } from 'react'

type IssueInformationModalProps = React.ComponentPropsWithoutRef<'article'> & {
  issue: Issue
  closeModal: () => void
}

export default function IssueInformationModal({
  issue,
  closeModal,
  ...props
}: IssueInformationModalProps) {
  const {
    userInformation: { firstName, lastName, profilePictureUrl },
  } = useUserInformation()
  const { updateIssue, getIssueStatus, getIssuePriority, getIssueTag } =
    useIssues()
  const { name: issueStatusName, icon: IssueStatusIcon } = getIssueStatus(
    issue.status
  )
  const { name: issuePriorityName, icon: IssuePriorityIcon } = getIssuePriority(
    issue.priority
  )
  const { name: issueTagName, icon: IssueTagIcon } = getIssueTag(issue.tag)

  const [isEditMode, setIsEditMode] = useState(false)
  const [newInformation, setNewInformation] = useState(issue)

  return (
    <ModalCard {...props}>
      <header className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <div className="inset-ring-section-outline w-max rounded-lg p-2 inset-ring">
            <span className="text-clickable">
              <StatusIcon />
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="tertiary"
              className="p-2"
              onClick={() => {
                setIsEditMode((prev) => !prev)

                if (!isEditMode) return

                updateIssue({ ...newInformation })
              }}
              disabled={!newInformation.title && !newInformation.description}
            >
              {isEditMode ? (
                <span className="[&_svg]:text-success-500">
                  <CheckIcon />
                </span>
              ) : (
                <EditIcon />
              )}
              <span className="sr-only">
                {isEditMode ? 'Save Changes' : 'Edit'}
              </span>
            </Button>
            <Button variant="tertiary" className="p-2" onClick={closeModal}>
              <CloseIcon />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </div>
        {isEditMode ? (
          <>
            <input
              type="text"
              name="title"
              placeholder="Issue title"
              value={newInformation.title}
              onChange={(e) =>
                setNewInformation({ ...newInformation, title: e.target.value })
              }
              autoFocus
              className="text-2xl font-semibold"
            />
            <textarea
              name="description"
              placeholder="Issue description"
              value={newInformation.description}
              onChange={(e) =>
                setNewInformation({
                  ...newInformation,
                  description: e.target.value,
                })
              }
              className="resize-none text-neutral-400"
            />
          </>
        ) : (
          <>
            <h3 className="text-2xl font-semibold">{issue.title}</h3>
            {issue.description && (
              <p className="line-clamp-2">{issue.description}</p>
            )}
          </>
        )}
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
              <time dateTime={iso8601DateFormatter(issue.createdAt)}>
                {dayMonthShortFormatter(issue.createdAt)}
              </time>
            </InformationList.Value>
          </InformationList.Item>
          <InformationList.Item>
            <InformationList.Label icon={<StatusIcon />}>
              Status
            </InformationList.Label>
            <InformationList.Value icon={<IssueStatusIcon />}>
              {issueStatusName}
            </InformationList.Value>
          </InformationList.Item>
          <InformationList.Item>
            <InformationList.Label icon={<PriorityIcon />}>
              Priority
            </InformationList.Label>
            <InformationList.Value icon={<IssuePriorityIcon />}>
              {issuePriorityName}
            </InformationList.Value>
          </InformationList.Item>
          <InformationList.Item>
            <InformationList.Label icon={<TagIcon />}>
              Tag
            </InformationList.Label>
            <InformationList.Value icon={<IssueTagIcon />}>
              {issueTagName}
            </InformationList.Value>
          </InformationList.Item>
        </InformationList>
      </div>
    </ModalCard>
  )
}
