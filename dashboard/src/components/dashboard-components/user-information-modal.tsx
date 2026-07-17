import Divider from '@dashboard-components/ui/divider'
import InformationList from '@dashboard-components/ui/information-list'
import ModalCard from '@dashboard-components/ui/modal-card'
import BrainIcon from '@icons/brain-icon'
import CalendarIcon from '@icons/calendar-icon'
import CheckboxIcon from '@icons/checkbox-icon'
import FolderIcon from '@icons/folder-icon'
import { useDrafts } from '@services/contexts/drafts-context'
import { useIssues } from '@services/contexts/issues-context'
import { useTasks } from '@services/contexts/tasks-context'
import { useUserInformation } from '@services/contexts/user-information-context'
import {
  dayMonthShortFormatter,
  iso8601DateFormatter,
} from '@utils/date-formatters'
import { generateDateInPast } from '@utils/date-generators'

export default function UserInformationModal() {
  const {
    userInformation: { firstName, lastName, emailAddress, profilePictureUrl },
  } = useUserInformation()

  const { tasks } = useTasks()
  const { issues } = useIssues()
  const { drafts } = useDrafts()

  return (
    <ModalCard className="border border-white inset-ring-0">
      <div className="overflow-hidden">
        <div className="h-21 w-full rounded-b-sm bg-neutral-200 transition-colors" />
      </div>
      <div className="p-4">
        <div></div>
        <img
          src={profilePictureUrl}
          alt=""
          className="-mt-12 mb-2 size-16 rounded-full border border-white object-cover"
        />
        <div>
          <h3 className="mb-1 font-medium">{`${firstName} ${lastName}`}</h3>
          <p className="text-xs text-neutral-600">{emailAddress}</p>
        </div>
      </div>
      <Divider />
      <div className="p-4">
        <InformationList>
          <InformationList.Item>
            <InformationList.Label icon={<CalendarIcon />}>
              Started
            </InformationList.Label>
            <InformationList.Value>
              <time dateTime={iso8601DateFormatter(generateDateInPast(18))}>
                {dayMonthShortFormatter(generateDateInPast(18))}
              </time>
            </InformationList.Value>
          </InformationList.Item>
          <InformationList.Item>
            <InformationList.Label icon={<CheckboxIcon />}>
              Tasks
            </InformationList.Label>
            <InformationList.Value>{tasks.length}</InformationList.Value>
          </InformationList.Item>
          <InformationList.Item>
            <InformationList.Label icon={<FolderIcon />}>
              Issues
            </InformationList.Label>
            <InformationList.Value>{issues.length}</InformationList.Value>
          </InformationList.Item>
          <InformationList.Item>
            <InformationList.Label icon={<BrainIcon />}>
              Drafts
            </InformationList.Label>
            <InformationList.Value>{drafts.length}</InformationList.Value>
          </InformationList.Item>
        </InformationList>
      </div>
    </ModalCard>
  )
}
