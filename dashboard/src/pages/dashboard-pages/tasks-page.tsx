import TasksSection from '@dashboard-sections/tasks-section'
import { TITLE_PREFIX } from '@utils/constants'

export default function TasksPage() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Tasks`}</title>
      <TasksSection />
    </>
  )
}
