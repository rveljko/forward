import InformationList from '@dashboard-components/ui/information-list'
import CalendarIcon from '@icons/calendar-icon'
import PriorityIcon from '@icons/priority-icon'
import StatusIcon from '@icons/status-icon'
import TagIcon from '@icons/tag-icon'
import UserIcon from '@icons/user-icon'
import BentoCard from '@landing-page-components/ui/bento-card'
import { useIssues } from '@services/contexts/issues-context'
import {
  dayMonthShortFormatter,
  iso8601DateFormatter,
} from '@utils/date-formatters'

export default function IssueInformationBentoCard() {
  const { getIssueStatus, getIssuePriority, getIssueTag } = useIssues()
  const { name: issueStatusName, icon: IssueStatusIcon } =
    getIssueStatus('todo')
  const { name: issuePriorityName, icon: IssuePriorityIcon } =
    getIssuePriority('low')
  const { name: issueTagName, icon: IssueTagIcon } = getIssueTag('design')

  return (
    <BentoCard>
      <BentoCard.Heading>Detailed Issue Insights</BentoCard.Heading>
      <BentoCard.Paragraph>
        Access complete details about each issue, including status, priority,
        and more
      </BentoCard.Paragraph>
      <InformationList className="mt-auto">
        <InformationList.Item className="*:first:max-w-20">
          <InformationList.Label icon={<UserIcon />}>
            Author
          </InformationList.Label>
          <InformationList.Value
            icon={
              <div className="size-5 overflow-hidden rounded-full bg-neutral-700">
                <img
                  src="/images/james-williams.png"
                  alt="James Williams"
                  className="size-full object-cover"
                />
              </div>
            }
          >
            James Williams
          </InformationList.Value>
        </InformationList.Item>
        <InformationList.Item className="*:first:max-w-20">
          <InformationList.Label className="max-w-20" icon={<CalendarIcon />}>
            Started
          </InformationList.Label>
          <InformationList.Value>
            <time dateTime={iso8601DateFormatter(new Date())}>
              {dayMonthShortFormatter(new Date())}
            </time>
          </InformationList.Value>
        </InformationList.Item>
        <InformationList.Item className="*:first:max-w-20">
          <InformationList.Label className="max-w-20" icon={<StatusIcon />}>
            Status
          </InformationList.Label>
          <InformationList.Value icon={<IssueStatusIcon />}>
            {issueStatusName}
          </InformationList.Value>
        </InformationList.Item>
        <InformationList.Item className="*:first:max-w-20">
          <InformationList.Label className="max-w-20" icon={<PriorityIcon />}>
            Priority
          </InformationList.Label>
          <InformationList.Value icon={<IssuePriorityIcon />}>
            {issuePriorityName}
          </InformationList.Value>
        </InformationList.Item>
        <InformationList.Item className="*:first:max-w-20">
          <InformationList.Label className="max-w-20" icon={<TagIcon />}>
            Tag
          </InformationList.Label>
          <InformationList.Value icon={<IssueTagIcon />}>
            {issueTagName}
          </InformationList.Value>
        </InformationList.Item>
      </InformationList>
    </BentoCard>
  )
}
