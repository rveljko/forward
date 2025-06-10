import Divider from '@dashboard-components/ui/divider'
import Dropdown from '@dashboard-components/ui/dropdown'
import DropdownButton from '@dashboard-components/ui/dropdown-button'
import ModalCard from '@dashboard-components/ui/modal-card'
import { issuePriorities } from '@data/issue-priorities'
import { issueStatuses } from '@data/issue-statuses'
import { issueTags } from '@data/issue-tags'
import ArrowsMaximizeIcon from '@icons/arrows-maximize-icon'
import CircleEmptyIcon from '@icons/circle-empty-icon'
import CloseIcon from '@icons/close-icon'
import DesignIssueTagIcon from '@icons/design-issue-tag-icon'
import PriorityLowIcon from '@icons/priority-low-icon'
import Button from '@ui/button'
import { cn } from '@utils/utils'

type CreateNewIssueModalProps = React.ComponentPropsWithoutRef<'article'> & {
  closeModal: () => void
}

export default function CreateNewIssueModal({
  closeModal,
  className,
  ...props
}: CreateNewIssueModalProps) {
  return (
    <ModalCard
      className={cn('bg-(--create-new-issue-modal-background)', className)}
      {...props}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <div className="p-4">
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-2">
              <input
                type="text"
                name="title"
                placeholder="Issue title"
                className="text-clickable w-full text-2xl placeholder:text-neutral-400 focus:outline-0"
              />
              <div className="flex gap-1">
                <Button variant="tertiary" className="p-1 max-sm:hidden">
                  <ArrowsMaximizeIcon />
                  <span className="sr-only">Maximize Modal</span>
                </Button>
                <Button variant="tertiary" className="p-1" onClick={closeModal}>
                  <CloseIcon />
                  <span className="sr-only">Close</span>
                </Button>
              </div>
            </div>
            <textarea
              name="description"
              placeholder="Issue description"
              className="text-clickable aspect-5/1 w-full resize-none placeholder:text-neutral-400 focus:outline-0"
            />
            <div className="flex items-center gap-2">
              <DropdownButton
                label="Todo"
                variant="ghost"
                size="small"
                leftIcon={<CircleEmptyIcon />}
              >
                {issueStatuses.map(({ id, name, icon: Icon }) => (
                  <Dropdown.Button key={id} leftIcon={<Icon />}>
                    {name}
                  </Dropdown.Button>
                ))}
              </DropdownButton>
              <DropdownButton
                label="Low"
                variant="ghost"
                size="small"
                leftIcon={<PriorityLowIcon />}
              >
                {issuePriorities.map(({ id, name, icon: Icon }) => (
                  <Dropdown.Button key={id} leftIcon={<Icon />}>
                    {name}
                  </Dropdown.Button>
                ))}
              </DropdownButton>
              <DropdownButton
                label="Design"
                variant="ghost"
                size="small"
                leftIcon={<DesignIssueTagIcon />}
              >
                {issueTags.map(({ id, name, icon: Icon }) => (
                  <Dropdown.Button key={id} leftIcon={<Icon />}>
                    {name}
                  </Dropdown.Button>
                ))}
              </DropdownButton>
            </div>
          </div>
        </div>
        <Divider />
        <div className="flex items-center justify-end gap-2 p-4">
          <Button variant="ghost" size="large" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="primary" size="large">
            Create New Issue
          </Button>
        </div>
      </form>
    </ModalCard>
  )
}
