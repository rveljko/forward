import TasksSectionSkeleton from '@dashboard-sections/skeletons/tasks-section-skeleton'
import { TITLE_PREFIX } from '@utils/constants'

export default function TasksPageSkeleton() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Tasks`}</title>
      <TasksSectionSkeleton />
    </>
  )
}
