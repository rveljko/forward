import DeleteDraftModalButton from '@dashboard-components/delete-draft-modal-button'
import RenameDraftModalButton from '@dashboard-components/rename-draft-modal-button'
import Divider from '@dashboard-components/ui/divider'
import Dropdown, {
  dropdownButtonClasses,
} from '@dashboard-components/ui/dropdown'
import DropdownButton from '@dashboard-components/ui/dropdown-button'
import TimeAgo from '@dashboard-components/ui/time-ago'
import ClickIcon from '@icons/click-icon'
import DotsVerticalIcon from '@icons/dots-vertical-icon'
import EditIcon from '@icons/edit-icon'
import ExternalLinkIcon from '@icons/external-link-icon'
import TrashIcon from '@icons/trash-icon'
import { Draft } from '@utils/types'
import { Link } from 'react-router'

type DraftCardProps = {
  draft: Draft
}

export default function DraftCard({
  draft: { id, title, lastEdit },
}: DraftCardProps) {
  return (
    <article className="ring-section-outline relative h-full overflow-hidden rounded-lg shadow-sm ring">
      <div className="bg-clickable/10 aspect-3/1 w-full"></div>
      <div className="p-2">
        <h3>
          <Link
            to={`/dashboard/drafts/${id}`}
            className="line-clamp-2 text-balance"
          >
            <span className="absolute inset-0"></span>
            {title}
          </Link>
        </h3>
      </div>
      <Divider />
      <div className="flex items-center justify-between p-2">
        <TimeAgo date={lastEdit} />
        <DropdownButton
          label={<DotsVerticalIcon />}
          variant="tertiary"
          className="-m-1 rounded-full p-1 [&_svg]:size-4"
        >
          <Dropdown.Button
            leftIcon={<ClickIcon />}
            href={`/dashboard/drafts/${id}`}
          >
            Open
          </Dropdown.Button>
          <Dropdown.Button
            leftIcon={<ExternalLinkIcon />}
            href={`/dashboard/drafts/${id}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            Open in new tab
          </Dropdown.Button>
          <RenameDraftModalButton
            draftId={id}
            draftTitle={title}
            leftIcon={<EditIcon />}
            className={`justify-start inset-ring-0 hover:bg-[image:unset] ${dropdownButtonClasses}`}
          >
            Rename
          </RenameDraftModalButton>
          <DeleteDraftModalButton
            leftIcon={<TrashIcon />}
            className={`${dropdownButtonClasses} text-danger-500 hover:bg-danger-500/10 justify-start inset-ring-0 hover:bg-[image:unset]`}
          >
            Delete
          </DeleteDraftModalButton>
        </DropdownButton>
      </div>
    </article>
  )
}
