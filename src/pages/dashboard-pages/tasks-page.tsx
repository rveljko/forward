import TasksSection from '@dashboard-sections/tasks-section'
import TasksContextProvider from '@services/contexts/tasks-context'
import { TITLE_PREFIX } from '@utils/constants'

export default function TasksPage() {
  return (
    <TasksContextProvider>
      <title>{`${TITLE_PREFIX}Tasks`}</title>
      <TasksSection />
    </TasksContextProvider>
  )
}
