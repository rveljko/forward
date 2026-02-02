import Divider from '@dashboard-components/ui/divider'
import InformationList from '@dashboard-components/ui/information-list'
import ModalCard from '@dashboard-components/ui/modal-card'
import { issueStatuses } from '@data/issue-statuses'
import CalendarIcon from '@icons/calendar-icon'
import CheckIcon from '@icons/check-icon'
import CloseIcon from '@icons/close-icon'
import EditIcon from '@icons/edit-icon'
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
import { showToast } from '@utils/toasts'
import { useEffect, useState } from 'react'

type ProjectInformationModalProps =
  React.ComponentPropsWithoutRef<'article'> & {
    closeModal: () => void
  }

const initialProjectInformation = {
  title: 'Planet Garden',
  description:
    'Planet Garden is a web based SaaS for Issue Tracking and Project Management',
}

function getInitialProjectInformation(): typeof initialProjectInformation {
  const projectInformation = localStorage.getItem('project-information')
  return projectInformation
    ? JSON.parse(projectInformation)
    : initialProjectInformation
}

export default function ProjectInformationModal({
  closeModal,
  ...props
}: ProjectInformationModalProps) {
  const {
    userInformation: { firstName, lastName, profilePictureUrl },
  } = useUserInformation()
  const { issues, getIssuesByStatus } = useIssues()

  const [isEditMode, setIsEditMode] = useState(false)
  const [projectInformation, setProjectInformation] = useState(
    getInitialProjectInformation
  )
  const [newProjectInformation, setNewProjectInformation] =
    useState(projectInformation)

  useEffect(() => {
    localStorage.setItem(
      'project-information',
      JSON.stringify(projectInformation)
    )
  }, [projectInformation])

  return (
    <ModalCard {...props}>
      <header className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <div className="inset-ring-section-outline w-max rounded-lg p-2 inset-ring">
            <span className="text-clickable">
              <PlanetIcon />
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="tertiary"
              className="p-2"
              onClick={() => {
                setIsEditMode((prev) => !prev)

                if (!isEditMode) return

                setProjectInformation(newProjectInformation)
                showToast({
                  title: 'Project Updated',
                  description: 'Changes saved successfully',
                })
              }}
              disabled={
                !newProjectInformation.title ||
                !newProjectInformation.description
              }
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
              value={newProjectInformation.title}
              onChange={(e) =>
                setNewProjectInformation({
                  ...newProjectInformation,
                  title: e.target.value,
                })
              }
              autoFocus
              className="text-2xl font-semibold placeholder:text-neutral-400"
            />
            <textarea
              name="description"
              placeholder="Issue description"
              value={newProjectInformation.description}
              onChange={(e) =>
                setNewProjectInformation({
                  ...newProjectInformation,
                  description: e.target.value,
                })
              }
              className="resize-none text-neutral-400 placeholder:text-neutral-400"
            />
          </>
        ) : (
          <>
            <h3 className="text-2xl font-semibold">
              {projectInformation.title}
            </h3>
            <p className="line-clamp-2 text-balance">
              {projectInformation.description}
            </p>
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
    </ModalCard>
  )
}
